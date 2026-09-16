const TOPICS=window.TRAINER_TOPICS;
const STORAGE='spanishTrainerV3';
const CONTENT_REVISION=4;
const REV2_ADDITIONS={colors:['los colores'],months:['Los meses del año'],conversations:['Mucho gusto','No sé','¿Cómo se llama?','Se llama...'],school:['un pupitre','una silla','una pizarra','un bolígrafo','una tiza','unas tijeras','una hoja','una escuela','un profesor','una clase','una regla','un pegamento']};
const REV3_ADDITIONS={conversations:['¿Cuántos años tienes?','Tengo once años.'],school:['un rotulador']};
const PRE_V4_TOPICS=['colors','weekdays','months','ser','conversations','school','adjectives'];
const PRE_V2_TOPICS=['colors','weekdays','months','ser','conversations','school'];
function defaultState(){
  const stats={}; const active={};
  Object.values(TOPICS).forEach(t=>{stats[t.id]={learned:[],correct:0,total:0,streak:0,bestStreak:0,studyIndex:0};active[t.id]=t.words.map(w=>w.es)});
  return {settings:{rate:.88,autoSpeak:true,voiceURI:'',active,pronunciation:{topics:Object.keys(TOPICS),content:'all'}},stats};
}
function loadState(){
  let s; try{s=JSON.parse(localStorage.getItem(STORAGE)||'null')}catch(e){}
  const d=defaultState();
  if(!s)s=d;
  s.settings=s.settings||d.settings; s.settings.active=s.settings.active||d.settings.active; if(typeof s.settings.voiceURI!=='string')s.settings.voiceURI='';
  s.settings.pronunciation=Object.assign({},d.settings.pronunciation,s.settings.pronunciation||{});
  s.settings.pronunciation.topics=Array.isArray(s.settings.pronunciation.topics)?s.settings.pronunciation.topics.filter(id=>TOPICS[id]):d.settings.pronunciation.topics;
  if(!['words','basic','all'].includes(s.settings.pronunciation.content))s.settings.pronunciation.content=d.settings.pronunciation.content;
  s.stats=s.stats||{};
  Object.values(TOPICS).forEach(t=>{
    s.settings.active[t.id]=Array.isArray(s.settings.active[t.id])?s.settings.active[t.id].filter(x=>t.words.some(w=>w.es===x)):d.settings.active[t.id];
    s.stats[t.id]=Object.assign({},d.stats[t.id],s.stats[t.id]||{});
  });
  const currentRevision=Number(s.contentRevision)||0;
  if(currentRevision<2){
    Object.entries(REV2_ADDITIONS).forEach(([id,words])=>{
      if(!TOPICS[id])return;
      const arr=s.settings.active[id]||(s.settings.active[id]=[]);
      words.forEach(word=>{if(TOPICS[id].words.some(w=>w.es===word)&&!arr.includes(word))arr.push(word)});
    });
    const selected=s.settings.pronunciation.topics||[];
    if(PRE_V2_TOPICS.every(id=>selected.includes(id))&&!selected.includes('adjectives'))selected.push('adjectives');
  }
  if(currentRevision<3){
    Object.entries(REV3_ADDITIONS).forEach(([id,words])=>{
      if(!TOPICS[id])return;
      const arr=s.settings.active[id]||(s.settings.active[id]=[]);
      words.forEach(word=>{if(TOPICS[id].words.some(w=>w.es===word)&&!arr.includes(word))arr.push(word)});
    });
  }
  if(currentRevision<4){
    const selected=s.settings.pronunciation.topics||[];
    if(PRE_V4_TOPICS.every(id=>selected.includes(id))&&!selected.includes('numerals'))selected.push('numerals');
  }
  if(currentRevision<CONTENT_REVISION)s.contentRevision=CONTENT_REVISION;
  if(localStorage.getItem('coloresState') && !localStorage.getItem(STORAGE)){
    try{
      const old=JSON.parse(localStorage.getItem('coloresState'));
      s.stats.colors=Object.assign(s.stats.colors,{learned:old.learned||[],correct:old.correct||0,total:old.total||0,streak:old.streak||0,bestStreak:old.bestStreak||0,studyIndex:old.studyIndex||0});
      if(Array.isArray(old.active))s.settings.active.colors=old.active;
      const r=Number(localStorage.getItem('coloresRate')); if(r)s.settings.rate=r;
      s.settings.autoSpeak=localStorage.getItem('coloresAutoSpeak')!=='false';
    }catch(e){}
  }
  localStorage.setItem(STORAGE,JSON.stringify(s)); return s;
}
const STATE=loadState();
function saveState(){localStorage.setItem(STORAGE,JSON.stringify(STATE))}
function activeWords(topic){return topic.words.filter(w=>STATE.settings.active[topic.id].includes(w.es))}
function stat(topic){return STATE.stats[topic.id]}
function shuffle(a){
  const r=[...a];
  for(let i=r.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [r[i],r[j]]=[r[j],r[i]];
  }
  return r;
}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function norm(s){return (s||'').trim().toLocaleLowerCase('es').normalize('NFC')}
function getTopicId(){return new URLSearchParams(location.search).get('topic')||'colors'}
function toast(msg){let t=document.querySelector('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1400)}
let voice=null;
function loadVoices(){
  const vs=speechSynthesis.getVoices(); const es=vs.filter(v=>/^es(?:-|_)/i.test(v.lang)||v.lang==='es');
  const score=v=>{const n=(v.name+' '+v.lang).toLowerCase();let s=0;if(/es-es/.test(v.lang.toLowerCase()))s+=20;if(/natural|neural|premium/.test(n))s+=12;if(/google|microsoft|apple/.test(n))s+=7;return s};
  es.sort((a,b)=>score(b)-score(a));
  const remembered=STATE?.settings?.voiceURI ? es.find(v=>v.voiceURI===STATE.settings.voiceURI) : null;
  if(!voice||remembered)voice=remembered||voice||es[0]||vs[0]||null;
  return es;
}
if('speechSynthesis' in window){speechSynthesis.onvoiceschanged=loadVoices;loadVoices()}
function speak(text,cb){if(!('speechSynthesis' in window)){toast('Озвучка не поддерживается');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='es-ES';u.rate=Number(STATE.settings.rate||.88);if(voice)u.voice=voice;if(cb)u.onend=cb;speechSynthesis.speak(u)}
function wrongSignal(){
  try{
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)return;
    const ctx=new AudioCtx();
    const now=ctx.currentTime;
    const gain=ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.0001,now);
    gain.gain.exponentialRampToValueAtTime(0.16,now+0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001,now+0.28);
    const osc=ctx.createOscillator();
    osc.type='square';
    osc.frequency.setValueAtTime(190,now);
    osc.frequency.exponentialRampToValueAtTime(125,now+0.24);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now+0.29);
    osc.onended=()=>ctx.close().catch(()=>{});
  }catch(e){}
}
const SPANISH_RECOGNITION=window.SpeechRecognition||window.webkitSpeechRecognition;
const SPANISH_PRAISE=['¡Muy bien!','¡Perfecto!','¡Excelente!','¡Muy bien pronunciado!'];
let pronunciationRecognition=null;
function speechNorm(s){return (s||'').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zñü0-9\s]/g,' ').replace(/\s+/g,' ').trim()}
function stopPronunciationCheck(){
  if(pronunciationRecognition){try{pronunciationRecognition.onend=null;pronunciationRecognition.stop()}catch(e){} pronunciationRecognition=null}
  document.querySelectorAll('.pron-check-mic.recording').forEach(b=>b.classList.remove('recording'));
}
function startPronunciationCheck(target,opts={}){
  const button=opts.button||document.querySelector('#pronCheckMic');
  const status=opts.status||document.querySelector('#pronCheckStatus');
  const recognized=opts.recognized||document.querySelector('#pronCheckRecognized');
  const setStatus=(text,cls='')=>{if(status){status.textContent=text;status.className='pron-check-status '+cls}};
  if(!target){setStatus('Сначала выбери задание или карточку.');return}
  if(!SPANISH_RECOGNITION){setStatus('В этом браузере нет распознавания речи. Попробуй Chrome или Edge.','bad');return}
  stopPronunciationCheck();speechSynthesis.cancel();
  const rec=new SPANISH_RECOGNITION();pronunciationRecognition=rec;
  rec.lang='es-ES';rec.interimResults=false;rec.continuous=false;rec.maxAlternatives=5;
  if(button)button.classList.add('recording');setStatus('Слушаю…','listening');if(recognized)recognized.textContent='';
  rec.onresult=e=>{
    const alts=[];for(let i=0;i<e.results[0].length;i++)alts.push(e.results[0][i].transcript);
    const wanted=speechNorm(target),heard=alts[0]||'',ok=alts.some(x=>speechNorm(x)===wanted);
    if(recognized)recognized.textContent=heard?`Распознано: ${heard}`:'';
    if(button)button.classList.remove('recording');pronunciationRecognition=null;
    if(ok){
      setStatus('Произношение распознано правильно.','ok');
      const praise=pick(SPANISH_PRAISE);speak(praise,()=>{if(typeof opts.onCorrect==='function')opts.onCorrect(heard)});
    }else{
      setStatus('Попробуй ещё раз. Сейчас прозвучит правильный вариант.','bad');wrongSignal();
      speak(target,()=>setTimeout(()=>{
        if(opts.autoRetry!==false && document.visibilityState==='visible' && document.body.contains(button||status))startPronunciationCheck(target,opts);
      },520));
      if(typeof opts.onWrong==='function')opts.onWrong(heard);
    }
  };
  rec.onerror=e=>{
    if(button)button.classList.remove('recording');pronunciationRecognition=null;
    if(e.error==='not-allowed'||e.error==='service-not-allowed')setStatus('Нет доступа к микрофону. Разреши микрофон для этого сайта.','bad');
    else if(e.error==='no-speech')setStatus('Речь не услышана. Нажми микрофон и повтори.','bad');
    else setStatus('Не удалось распознать речь. Нажми микрофон и попробуй снова.','bad');
  };
  rec.onend=()=>{if(button)button.classList.remove('recording');if(pronunciationRecognition===rec)pronunciationRecognition=null};
  try{rec.start()}catch(e){pronunciationRecognition=null;if(button)button.classList.remove('recording');setStatus('Не удалось включить микрофон. Попробуй ещё раз.','bad')}
}
function register(topic,ok){const s=stat(topic);s.total++;if(ok){s.correct++;s.streak++;s.bestStreak=Math.max(s.bestStreak,s.streak)}else s.streak=0;saveState()}
function statsSummary(topic){const s=stat(topic);return {learned:s.learned.filter(x=>STATE.settings.active[topic.id].includes(x)).length,correct:s.correct,accuracy:s.total?Math.round(s.correct/s.total*100):0,best:s.bestStreak}}

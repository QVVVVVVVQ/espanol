/* Кэш тренажёра: после первого открытия работает без сети.
   Версию менять при обновлении файлов — старый кэш будет удалён. */
const CACHE='espanol-v8';
const FILES=['./','./index.html','./trainer.html','./settings.html','./styles.css','./common.js','./data.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()).catch(()=>{}));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(
    caches.match(r).then(hit=>{
      const net=fetch(r).then(res=>{
        if(res&&res.ok)caches.open(CACHE).then(c=>c.put(r,res.clone()));
        return res;
      }).catch(()=>hit);
      return hit||net;
    })
  );
});

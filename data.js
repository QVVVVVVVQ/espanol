window.TRAINER_TOPICS = {
  colors:{
    id:'colors', title:'Цвета', esTitle:'Los colores', icon:'🎨', description:'19 карточек: цвета и название темы', accent:'#ff7157',
    words:[
      {es:'los colores',ru:'цвета',hex:'linear-gradient(135deg,#ef4444 0 18%,#f59e0b 18% 34%,#facc15 34% 50%,#22c55e 50% 66%,#3b82f6 66% 82%,#8b5cf6 82% 100%)',fg:'#fff',categoryPhrase:true},
      {es:'rojo',ru:'красный',hex:'#e53935',fg:'#fff'},{es:'azul',ru:'синий',hex:'#2563eb',fg:'#fff'},{es:'verde',ru:'зелёный',hex:'#22a447',fg:'#fff'},
      {es:'amarillo',ru:'жёлтый',hex:'#f3ce13',fg:'#171717'},{es:'naranja',ru:'оранжевый',hex:'#f97316',fg:'#fff'},{es:'morado',ru:'фиолетовый',hex:'#7c3aed',fg:'#fff'},
      {es:'rosa',ru:'розовый',hex:'#f472b6',fg:'#171717'},{es:'negro',ru:'чёрный',hex:'#171717',fg:'#fff'},{es:'blanco',ru:'белый',hex:'#ffffff',fg:'#171717'},
      {es:'gris',ru:'серый',hex:'#9ca3af',fg:'#171717'},{es:'marrón',ru:'коричневый',hex:'#8b5e3c',fg:'#fff'},{es:'beige',ru:'бежевый',hex:'#d8c7a4',fg:'#171717'},
      {es:'celeste',ru:'голубой',hex:'#67c7eb',fg:'#171717'},{es:'turquesa',ru:'бирюзовый',hex:'#14b8a6',fg:'#fff'},{es:'violeta',ru:'лиловый / фиолетовый',hex:'#8b5cf6',fg:'#fff'},
      {es:'dorado',ru:'золотой',hex:'#d4a017',fg:'#171717'},{es:'plateado',ru:'серебряный',hex:'#c0c0c0',fg:'#171717'},{es:'granate',ru:'бордовый',hex:'#7f1d2d',fg:'#fff'}
    ]
  },
  weekdays:{
    id:'weekdays', title:'Дни недели', esTitle:'Los días de la semana', icon:'📅', description:'7 дней недели с правильным произношением', accent:'#5795ff',
    words:[
      {es:'lunes',ru:'понедельник',symbol:'понедельник'},{es:'martes',ru:'вторник',symbol:'вторник'},{es:'miércoles',ru:'среда',symbol:'среда'},
      {es:'jueves',ru:'четверг',symbol:'четверг'},{es:'viernes',ru:'пятница',symbol:'пятница'},{es:'sábado',ru:'суббота',symbol:'суббота'},{es:'domingo',ru:'воскресенье',symbol:'воскресенье'}
    ]
  },
  months:{
    id:'months', title:'Месяцы', esTitle:'Los meses', icon:'🗓️', description:'12 месяцев и фраза «Los meses del año»', accent:'#f0a02c',
    words:[
      {es:'Los meses del año',ru:'месяцы года',symbol:'месяцы года',categoryPhrase:true},
      {es:'enero',ru:'январь',symbol:'январь'},{es:'febrero',ru:'февраль',symbol:'февраль'},{es:'marzo',ru:'март',symbol:'март'},{es:'abril',ru:'апрель',symbol:'апрель'},
      {es:'mayo',ru:'май',symbol:'май'},{es:'junio',ru:'июнь',symbol:'июнь'},{es:'julio',ru:'июль',symbol:'июль'},{es:'agosto',ru:'август',symbol:'август'},
      {es:'septiembre',ru:'сентябрь',symbol:'сентябрь'},{es:'octubre',ru:'октябрь',symbol:'октябрь'},{es:'noviembre',ru:'ноябрь',symbol:'ноябрь'},{es:'diciembre',ru:'декабрь',symbol:'декабрь'}
    ]
  },
  ser:{
    id:'ser', title:'Глагол SER', esTitle:'SER — presente', icon:'🧑‍🏫', description:'Настоящее время: местоимения, формы и простые фразы', accent:'#8067d8', kind:'ser',
    words:[
      {es:'soy',pronoun:'Yo',ru:'я',symbol:'Yo',form:'soy',audio:'Yo soy. Yo soy alumno.',exampleEs:'Yo soy alumno.',exampleRu:'Я ученик.',example2Es:'Yo soy de Madrid.',example2Ru:'Я из Мадрида.'},
      {es:'eres',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'eres',audio:'Tú eres. Tú eres estudiante.',exampleEs:'Tú eres estudiante.',exampleRu:'Ты ученик / ученица.',example2Es:'Tú eres mi amigo.',example2Ru:'Ты мой друг.'},
      {es:'es',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'es',audio:'Él, ella, usted: es. Ella es mi amiga.',exampleEs:'Ella es mi amiga.',exampleRu:'Она моя подруга.',example2Es:'Él es alumno.',example2Ru:'Он ученик.'},
      {es:'somos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'somos',audio:'Nosotros, nosotras: somos. Nosotros somos estudiantes.',exampleEs:'Nosotros somos estudiantes.',exampleRu:'Мы ученики.',example2Es:'Somos amigos.',example2Ru:'Мы друзья.'},
      {es:'sois',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'sois',audio:'Vosotros, vosotras: sois. Vosotros sois alumnos.',exampleEs:'Vosotros sois alumnos.',exampleRu:'Вы ученики.',example2Es:'Sois mis amigos.',example2Ru:'Вы мои друзья.'},
      {es:'son',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'son',audio:'Ellos, ellas, ustedes: son. Ellos son amigos.',exampleEs:'Ellos son amigos.',exampleRu:'Они друзья.',example2Es:'Ustedes son estudiantes.',example2Ru:'Вы ученики.'}
    ]
  },
  conversations:{
    id:'conversations', title:'Беседы', esTitle:'Conversaciones', icon:'💬', description:'17 фраз: приветствия, знакомство и простое общение', accent:'#28a67a', kind:'phrases',
    words:[
      {es:'Hola',ru:'Привет',hint:'[ола]',symbol:'👋'},
      {es:'adiós',ru:'Пока / До свидания',hint:'[адьос]',symbol:'👋'},
      {es:'Hasta luego',ru:'До скорого / До встречи',hint:'[аста луэго]',symbol:'👋'},
      {es:'¿Qué tal?',ru:'Как дела?',hint:'[ке таль]',symbol:'💬'},
      {es:'Bien, gracias',ru:'Хорошо, спасибо',symbol:'🙂'},
      {es:'¿Cómo te llamas?',ru:'Как тебя зовут?',symbol:'💬'},
      {es:'Me llamo...',ru:'Меня зовут...',symbol:'🙋'},
      {es:'¿De dónde eres?',ru:'Откуда ты?',symbol:'🌍'},
      {es:'Soy de...',ru:'Я из...',symbol:'📍'},
      {es:'¡Buenos días!',ru:'Доброе утро! / Добрый день!',symbol:'🌅'},
      {es:'¡Buenas tardes!',ru:'Добрый день! / Добрый вечер!',symbol:'🌇'},
      {es:'¡Buenas noches!',ru:'Спокойной ночи! / Доброй ночи!',symbol:'🌙'},
      {es:'Despedirse',ru:'Прощаться',symbol:'👋'},
      {es:'Mucho gusto',ru:'Очень приятно',symbol:'🤝'},
      {es:'No sé',ru:'Не знаю',symbol:'🤷'},
      {es:'¿Cómo se llama?',ru:'Как вас зовут?',symbol:'💬'},
      {es:'Se llama...',ru:'Его / её зовут...',symbol:'🙋'}
    ]
  },
  school:{
    id:'school', title:'Школа', esTitle:'La escuela', icon:'🎒', description:'22 базовых слова о школе и классе', accent:'#e35f7a',
    words:[
      {es:'una mesa',ru:'стол',symbol:`<svg class="school-svg" viewBox="0 0 96 96" aria-hidden="true"><rect x="14" y="28" width="68" height="12" rx="4" fill="#b87945"/><rect x="20" y="40" width="7" height="38" rx="3" fill="#7a4d2d"/><rect x="69" y="40" width="7" height="38" rx="3" fill="#7a4d2d"/><path d="M24 54h48" stroke="#7a4d2d" stroke-width="5" stroke-linecap="round"/><path d="M16 28h64" stroke="#dba06b" stroke-width="4" stroke-linecap="round"/></svg>`},
      {es:'un libro',ru:'книга',symbol:'📖'},
      {es:'una mochila',ru:'рюкзак',symbol:'🎒'},
      {es:'una puerta',ru:'дверь',symbol:'🚪'},
      {es:'un lápiz',ru:'карандаш',symbol:'✏️'},
      {es:'un cuaderno',ru:'тетрадь',symbol:'📓'},
      {es:'un sacapuntas',ru:'точилка',symbol:`<svg class="school-svg" viewBox="0 0 96 96" aria-hidden="true"><path d="M26 20h44l9 58H17z" fill="#6aa8d9"/><path d="M29 25h38l6 47H23z" fill="#8bc3ea"/><circle cx="48" cy="38" r="11" fill="#34495e"/><circle cx="48" cy="38" r="5" fill="#dce8ef"/><path d="M35 56l28-9" stroke="#e8eef2" stroke-width="7" stroke-linecap="round"/><circle cx="60" cy="49" r="3.5" fill="#59636d"/><path d="M25 75h46" stroke="#47789c" stroke-width="4" stroke-linecap="round"/></svg>`},
      {es:'una papelera',ru:'мусорная корзина',symbol:'🗑️'},
      {es:'un alumno',ru:'ученик',symbol:'👦'},
      {es:'una alumna',ru:'ученица',symbol:'👧'},
      {es:'un pupitre',ru:'парта',symbol:`<svg class="school-svg" viewBox="0 0 96 96" aria-hidden="true"><path d="M18 28h58l7 15H24z" fill="#d69a5d"/><path d="M25 43h57v12H25z" fill="#a96d3f"/><path d="M31 55l-5 27M72 55l6 27" stroke="#59606a" stroke-width="6" stroke-linecap="round"/><path d="M34 64h37" stroke="#59606a" stroke-width="5" stroke-linecap="round"/><path d="M25 43h57" stroke="#efbd83" stroke-width="3"/><rect x="56" y="21" width="14" height="5" rx="2.5" fill="#f2c94c" transform="rotate(-8 56 21)"/></svg>`},
      {es:'una silla',ru:'стул',symbol:'🪑'},
      {es:'una pizarra',ru:'доска',symbol:'▰'},
      {es:'un bolígrafo',ru:'ручка',symbol:'🖊️'},
      {es:'una tiza',ru:'мел',symbol:'▭'},
      {es:'unas tijeras',ru:'ножницы',symbol:'✂️'},
      {es:'una hoja',ru:'лист',symbol:'📄'},
      {es:'una escuela',ru:'школа',symbol:'🏫'},
      {es:'un profesor',ru:'учитель',symbol:'👨‍🏫'},
      {es:'una clase',ru:'класс',symbol:'🏫'},
      {es:'una regla',ru:'линейка',symbol:'📏'},
      {es:'un pegamento',ru:'клей',symbol:'🧴'}
    ]
  },
  adjectives:{
    id:'adjectives', title:'Прилагательные', esTitle:'Adjetivos', icon:'🙂', description:'5 простых прилагательных для эмоций и состояний', accent:'#5eae70',
    words:[
      {es:'contento',ru:'радостный',symbol:'😄'},
      {es:'triste',ru:'грустный',symbol:'😢'},
      {es:'enfadado',ru:'злой',symbol:'😠'},
      {es:'sorprendido',ru:'удивлённый',symbol:'😲'},
      {es:'enamorado',ru:'влюблённый',symbol:'😍'}
    ]
  }
};

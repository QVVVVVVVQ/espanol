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
    id:'ser', title:'Глагол SER', esTitle:'SER — presente', icon:'🧑‍🏫', description:'Настоящее время: местоимения, формы и простые фразы', accent:'#8067d8', kind:'verb', verb:'SER', infinitive:'ser', infinitiveRu:'быть',
    words:[
      {es:'soy',pronoun:'Yo',ru:'я',symbol:'Yo',form:'soy',audio:'Yo soy. Yo soy alumno.',exampleEs:'Yo soy alumno.',exampleRu:'Я ученик.',example2Es:'Yo soy de Madrid.',example2Ru:'Я из Мадрида.'},
      {es:'eres',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'eres',audio:'Tú eres. Tú eres estudiante.',exampleEs:'Tú eres estudiante.',exampleRu:'Ты ученик / ученица.',example2Es:'Tú eres mi amigo.',example2Ru:'Ты мой друг.'},
      {es:'es',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'es',audio:'Él, ella, usted: es. Ella es mi amiga.',exampleEs:'Ella es mi amiga.',exampleRu:'Она моя подруга.',example2Es:'Él es alumno.',example2Ru:'Он ученик.'},
      {es:'somos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'somos',audio:'Nosotros, nosotras: somos. Nosotros somos estudiantes.',exampleEs:'Nosotros somos estudiantes.',exampleRu:'Мы ученики.',example2Es:'Somos amigos.',example2Ru:'Мы друзья.'},
      {es:'sois',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'sois',audio:'Vosotros, vosotras: sois. Vosotros sois alumnos.',exampleEs:'Vosotros sois alumnos.',exampleRu:'Вы ученики.',example2Es:'Sois mis amigos.',example2Ru:'Вы мои друзья.'},
      {es:'son',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'son',audio:'Ellos, ellas, ustedes: son. Ellos son amigos.',exampleEs:'Ellos son amigos.',exampleRu:'Они друзья.',example2Es:'Ustedes son estudiantes.',example2Ru:'Вы ученики.'}
    ]
  },
  tener:{
    id:'tener', title:'Глагол TENER', esTitle:'TENER — presente', icon:'🤲', description:'Настоящее время: tengo, tienes, tiene, tenemos, tenéis, tienen', accent:'#2f9b83', kind:'verb', verb:'TENER', infinitive:'tener', infinitiveRu:'иметь',
    words:[
      {es:'tengo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'tengo',exampleEs:'Yo tengo once años.',exampleRu:'Мне 11 лет.',example2Es:'Tengo un libro.',example2Ru:'У меня есть книга.'},
      {es:'tienes',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'tienes',exampleEs:'Tú tienes una mochila.',exampleRu:'У тебя есть рюкзак.',example2Es:'Tienes un lápiz.',example2Ru:'У тебя есть карандаш.'},
      {es:'tiene',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'tiene',exampleEs:'Ella tiene un cuaderno.',exampleRu:'У неё есть тетрадь.',example2Es:'Él tiene once años.',example2Ru:'Ему 11 лет.'},
      {es:'tenemos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'tenemos',exampleEs:'Nosotros tenemos una clase.',exampleRu:'У нас есть урок.',example2Es:'Tenemos libros.',example2Ru:'У нас есть книги.'},
      {es:'tenéis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'tenéis',exampleEs:'Vosotros tenéis cuadernos.',exampleRu:'У вас есть тетради.',example2Es:'Tenéis una regla.',example2Ru:'У вас есть линейка.'},
      {es:'tienen',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'tienen',exampleEs:'Ellos tienen mochilas.',exampleRu:'У них есть рюкзаки.',example2Es:'Ustedes tienen libros.',example2Ru:'У вас есть книги.'}
    ]
  },
  estar:{
    id:'estar', title:'Глагол ESTAR', esTitle:'ESTAR — presente', icon:'📍', description:'Настоящее время: estoy, estás, está, estamos, estáis, están', accent:'#4b87c8', kind:'verb', verb:'ESTAR', infinitive:'estar', infinitiveRu:'быть / находиться',
    words:[
      {es:'estoy',pronoun:'Yo',ru:'я',symbol:'Yo',form:'estoy',exampleEs:'Yo estoy contento.',exampleRu:'Я весёлый / довольный.',example2Es:'Estoy bien.',example2Ru:'Я в порядке.'},
      {es:'estás',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'estás',exampleEs:'Tú estás triste.',exampleRu:'Ты грустный / грустная.',example2Es:'Estás en casa.',example2Ru:'Ты дома.'},
      {es:'está',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'está',exampleEs:'Ella está en la escuela.',exampleRu:'Она в школе.',example2Es:'Ella está triste.',example2Ru:'Она грустная.'},
      {es:'estamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'estamos',exampleEs:'Nosotros estamos en clase.',exampleRu:'Мы в классе / на уроке.',example2Es:'Estamos juntos.',example2Ru:'Мы вместе.'},
      {es:'estáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'estáis',exampleEs:'Vosotros estáis aquí.',exampleRu:'Вы здесь.',example2Es:'Estáis en la escuela.',example2Ru:'Вы в школе.'},
      {es:'están',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'están',exampleEs:'Ellos están contentos.',exampleRu:'Они весёлые / довольны.',example2Es:'Ustedes están aquí.',example2Ru:'Вы здесь.'}
    ]
  },
  jugar:{
    id:'jugar', title:'Глагол JUGAR', esTitle:'JUGAR — presente', icon:'⚽', description:'Играть · juego, juegas, juega, jugamos, jugáis, juegan', accent:'#3e8f65', kind:'verb', verb:'JUGAR', conjugation:1, infinitive:'jugar', infinitiveRu:'играть',
    words:[
      {es:'juego',pronoun:'Yo',ru:'я',symbol:'Yo',form:'juego',exampleEs:'Yo juego al fútbol.',exampleRu:'Я играю в футбол.',example2Es:'Juego con mis amigos.',example2Ru:'Я играю с друзьями.'},
      {es:'juegas',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'juegas',exampleEs:'Tú juegas al fútbol.',exampleRu:'Ты играешь в футбол.',example2Es:'Juegas conmigo.',example2Ru:'Ты играешь со мной.'},
      {es:'juega',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'juega',exampleEs:'Ella juega al tenis.',exampleRu:'Она играет в теннис.',example2Es:'Él juega con un amigo.',example2Ru:'Он играет с другом.'},
      {es:'jugamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'jugamos',exampleEs:'Nosotros jugamos juntos.',exampleRu:'Мы играем вместе.',example2Es:'Jugamos al fútbol.',example2Ru:'Мы играем в футбол.'},
      {es:'jugáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'jugáis',exampleEs:'Vosotros jugáis juntos.',exampleRu:'Вы играете вместе.',example2Es:'Jugáis al fútbol.',example2Ru:'Вы играете в футбол.'},
      {es:'juegan',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'juegan',exampleEs:'Ellos juegan al fútbol.',exampleRu:'Они играют в футбол.',example2Es:'Ustedes juegan juntos.',example2Ru:'Вы играете вместе.'}
    ]
  },
  dibujar:{
    id:'dibujar', title:'Глагол DIBUJAR', esTitle:'DIBUJAR — presente', icon:'🎨', description:'Рисовать · dibujo, dibujas, dibuja, dibujamos, dibujáis, dibujan', accent:'#d17b46', kind:'verb', verb:'DIBUJAR', conjugation:1, infinitive:'dibujar', infinitiveRu:'рисовать',
    words:[
      {es:'dibujo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'dibujo',exampleEs:'Yo dibujo un gato.',exampleRu:'Я рисую кошку.',example2Es:'Dibujo en mi cuaderno.',example2Ru:'Я рисую в своей тетради.'},
      {es:'dibujas',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'dibujas',exampleEs:'Tú dibujas una casa.',exampleRu:'Ты рисуешь дом.',example2Es:'Dibujas muy bien.',example2Ru:'Ты очень хорошо рисуешь.'},
      {es:'dibuja',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'dibuja',exampleEs:'Ella dibuja una flor.',exampleRu:'Она рисует цветок.',example2Es:'Él dibuja un perro.',example2Ru:'Он рисует собаку.'},
      {es:'dibujamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'dibujamos',exampleEs:'Nosotros dibujamos juntos.',exampleRu:'Мы рисуем вместе.',example2Es:'Dibujamos animales.',example2Ru:'Мы рисуем животных.'},
      {es:'dibujáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'dibujáis',exampleEs:'Vosotros dibujáis en clase.',exampleRu:'Вы рисуете на уроке.',example2Es:'Dibujáis una escuela.',example2Ru:'Вы рисуете школу.'},
      {es:'dibujan',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'dibujan',exampleEs:'Ellos dibujan animales.',exampleRu:'Они рисуют животных.',example2Es:'Ustedes dibujan juntos.',example2Ru:'Вы рисуете вместе.'}
    ]
  },
  cantar:{
    id:'cantar', title:'Глагол CANTAR', esTitle:'CANTAR — presente', icon:'🎤', description:'Петь · canto, cantas, canta, cantamos, cantáis, cantan', accent:'#a55bb6', kind:'verb', verb:'CANTAR', conjugation:1, infinitive:'cantar', infinitiveRu:'петь',
    words:[
      {es:'canto',pronoun:'Yo',ru:'я',symbol:'Yo',form:'canto',exampleEs:'Yo canto una canción.',exampleRu:'Я пою песню.',example2Es:'Canto en casa.',example2Ru:'Я пою дома.'},
      {es:'cantas',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'cantas',exampleEs:'Tú cantas muy bien.',exampleRu:'Ты очень хорошо поёшь.',example2Es:'Cantas una canción.',example2Ru:'Ты поёшь песню.'},
      {es:'canta',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'canta',exampleEs:'Ella canta una canción.',exampleRu:'Она поёт песню.',example2Es:'Él canta en clase.',example2Ru:'Он поёт на уроке.'},
      {es:'cantamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'cantamos',exampleEs:'Nosotros cantamos juntos.',exampleRu:'Мы поём вместе.',example2Es:'Cantamos una canción.',example2Ru:'Мы поём песню.'},
      {es:'cantáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'cantáis',exampleEs:'Vosotros cantáis juntos.',exampleRu:'Вы поёте вместе.',example2Es:'Cantáis muy bien.',example2Ru:'Вы очень хорошо поёте.'},
      {es:'cantan',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'cantan',exampleEs:'Ellos cantan juntos.',exampleRu:'Они поют вместе.',example2Es:'Ustedes cantan una canción.',example2Ru:'Вы поёте песню.'}
    ]
  },
  bailar:{
    id:'bailar', title:'Глагол BAILAR', esTitle:'BAILAR — presente', icon:'💃', description:'Танцевать · bailo, bailas, baila, bailamos, bailáis, bailan', accent:'#d74e86', kind:'verb', verb:'BAILAR', conjugation:1, infinitive:'bailar', infinitiveRu:'танцевать',
    words:[
      {es:'bailo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'bailo',exampleEs:'Yo bailo.',exampleRu:'Я танцую.',example2Es:'Bailo con mis amigos.',example2Ru:'Я танцую с друзьями.'},
      {es:'bailas',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'bailas',exampleEs:'Tú bailas muy bien.',exampleRu:'Ты очень хорошо танцуешь.',example2Es:'Bailas conmigo.',example2Ru:'Ты танцуешь со мной.'},
      {es:'baila',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'baila',exampleEs:'Ella baila.',exampleRu:'Она танцует.',example2Es:'Él baila bien.',example2Ru:'Он хорошо танцует.'},
      {es:'bailamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'bailamos',exampleEs:'Nosotros bailamos juntos.',exampleRu:'Мы танцуем вместе.',example2Es:'Bailamos en casa.',example2Ru:'Мы танцуем дома.'},
      {es:'bailáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'bailáis',exampleEs:'Vosotros bailáis juntos.',exampleRu:'Вы танцуете вместе.',example2Es:'Bailáis muy bien.',example2Ru:'Вы очень хорошо танцуете.'},
      {es:'bailan',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'bailan',exampleEs:'Ellos bailan juntos.',exampleRu:'Они танцуют вместе.',example2Es:'Ustedes bailan bien.',example2Ru:'Вы хорошо танцуете.'}
    ]
  },
  estudiar:{
    id:'estudiar', title:'Глагол ESTUDIAR', esTitle:'ESTUDIAR — presente', icon:'📚', description:'Настоящее время: estudio, estudias, estudia, estudiamos, estudiáis, estudian', accent:'#6877cf', kind:'verb', verb:'ESTUDIAR', conjugation:1, infinitive:'estudiar', infinitiveRu:'учиться / изучать',
    words:[
      {es:'estudio',pronoun:'Yo',ru:'я',symbol:'Yo',form:'estudio',exampleEs:'Yo estudio español.',exampleRu:'Я изучаю испанский.',example2Es:'Estudio en la escuela.',example2Ru:'Я учусь в школе.'},
      {es:'estudias',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'estudias',exampleEs:'Tú estudias inglés.',exampleRu:'Ты изучаешь английский.',example2Es:'Estudias mucho.',example2Ru:'Ты много учишься.'},
      {es:'estudia',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'estudia',exampleEs:'Ella estudia español.',exampleRu:'Она изучает испанский.',example2Es:'Él estudia en la escuela.',example2Ru:'Он учится в школе.'},
      {es:'estudiamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'estudiamos',exampleEs:'Nosotros estudiamos juntos.',exampleRu:'Мы учимся вместе.',example2Es:'Estudiamos español.',example2Ru:'Мы изучаем испанский.'},
      {es:'estudiáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'estudiáis',exampleEs:'Vosotros estudiáis español.',exampleRu:'Вы изучаете испанский.',example2Es:'Estudiáis en la escuela.',example2Ru:'Вы учитесь в школе.'},
      {es:'estudian',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'estudian',exampleEs:'Ellos estudian mucho.',exampleRu:'Они много учатся.',example2Es:'Ustedes estudian español.',example2Ru:'Вы изучаете испанский.'}
    ]
  },
  trabajar:{
    id:'trabajar', title:'Глагол TRABAJAR', esTitle:'TRABAJAR — presente', icon:'🛠️', description:'Настоящее время: trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan', accent:'#b46f45', kind:'verb', verb:'TRABAJAR', conjugation:1, infinitive:'trabajar', infinitiveRu:'работать',
    words:[
      {es:'trabajo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'trabajo',exampleEs:'Yo trabajo.',exampleRu:'Я работаю.',example2Es:'Trabajo aquí.',example2Ru:'Я работаю здесь.'},
      {es:'trabajas',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'trabajas',exampleEs:'Tú trabajas mucho.',exampleRu:'Ты много работаешь.',example2Es:'Trabajas aquí.',example2Ru:'Ты работаешь здесь.'},
      {es:'trabaja',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'trabaja',exampleEs:'Él trabaja en una escuela.',exampleRu:'Он работает в школе.',example2Es:'Ella trabaja aquí.',example2Ru:'Она работает здесь.'},
      {es:'trabajamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'trabajamos',exampleEs:'Nosotros trabajamos juntos.',exampleRu:'Мы работаем вместе.',example2Es:'Trabajamos aquí.',example2Ru:'Мы работаем здесь.'},
      {es:'trabajáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'trabajáis',exampleEs:'Vosotros trabajáis aquí.',exampleRu:'Вы работаете здесь.',example2Es:'Trabajáis juntos.',example2Ru:'Вы работаете вместе.'},
      {es:'trabajan',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'trabajan',exampleEs:'Ellos trabajan.',exampleRu:'Они работают.',example2Es:'Ustedes trabajan aquí.',example2Ru:'Вы работаете здесь.'}
    ]
  },

  saltar:{
    id:'saltar', title:'Глагол SALTAR', esTitle:'SALTAR — presente', icon:'🦘', description:'Прыгать · salto, saltas, salta, saltamos, saltáis, saltan', accent:'#4a9a75', kind:'verb', verb:'SALTAR', conjugation:1, infinitive:'saltar', infinitiveRu:'прыгать',
    words:[
      {es:'salto',pronoun:'Yo',ru:'я',symbol:'Yo',form:'salto',exampleEs:'Yo salto alto.',exampleRu:'Я прыгаю высоко.',example2Es:'Salto en el patio.',example2Ru:'Я прыгаю во дворе.'},
      {es:'saltas',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'saltas',exampleEs:'Tú saltas muy bien.',exampleRu:'Ты очень хорошо прыгаешь.',example2Es:'Saltas en el patio.',example2Ru:'Ты прыгаешь во дворе.'},
      {es:'salta',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'salta',exampleEs:'Ella salta alto.',exampleRu:'Она прыгает высоко.',example2Es:'Él salta en el parque.',example2Ru:'Он прыгает в парке.'},
      {es:'saltamos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'saltamos',exampleEs:'Nosotros saltamos juntos.',exampleRu:'Мы прыгаем вместе.',example2Es:'Saltamos en educación física.',example2Ru:'Мы прыгаем на физкультуре.'},
      {es:'saltáis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'saltáis',exampleEs:'Vosotros saltáis juntos.',exampleRu:'Вы прыгаете вместе.',example2Es:'Saltáis muy alto.',example2Ru:'Вы прыгаете очень высоко.'},
      {es:'saltan',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'saltan',exampleEs:'Ellos saltan en el patio.',exampleRu:'Они прыгают во дворе.',example2Es:'Ustedes saltan bien.',example2Ru:'Вы хорошо прыгаете.'}
    ]
  },
  comer:{
    id:'comer', title:'Глагол COMER', esTitle:'COMER — presente', icon:'🍎', description:'Есть · como, comes, come, comemos, coméis, comen', accent:'#d06f49', kind:'verb', verb:'COMER', conjugation:2, infinitive:'comer', infinitiveRu:'есть',
    words:[
      {es:'como',pronoun:'Yo',ru:'я',symbol:'Yo',form:'como',exampleEs:'Yo como una manzana.',exampleRu:'Я ем яблоко.',example2Es:'Como en casa.',example2Ru:'Я ем дома.'},
      {es:'comes',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'comes',exampleEs:'Tú comes pan.',exampleRu:'Ты ешь хлеб.',example2Es:'Comes con tu familia.',example2Ru:'Ты ешь со своей семьёй.'},
      {es:'come',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'come',exampleEs:'Ella come una manzana.',exampleRu:'Она ест яблоко.',example2Es:'Él come en la escuela.',example2Ru:'Он ест в школе.'},
      {es:'comemos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'comemos',exampleEs:'Nosotros comemos juntos.',exampleRu:'Мы едим вместе.',example2Es:'Comemos a las dos.',example2Ru:'Мы едим в два часа.'},
      {es:'coméis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'coméis',exampleEs:'Vosotros coméis fruta.',exampleRu:'Вы едите фрукты.',example2Es:'Coméis en casa.',example2Ru:'Вы едите дома.'},
      {es:'comen',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'comen',exampleEs:'Ellos comen juntos.',exampleRu:'Они едят вместе.',example2Es:'Ustedes comen fruta.',example2Ru:'Вы едите фрукты.'}
    ]
  },
  beber:{
    id:'beber', title:'Глагол BEBER', esTitle:'BEBER — presente', icon:'🥤', description:'Пить · bebo, bebes, bebe, bebemos, bebéis, beben', accent:'#4587c9', kind:'verb', verb:'BEBER', conjugation:2, infinitive:'beber', infinitiveRu:'пить',
    words:[
      {es:'bebo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'bebo',exampleEs:'Yo bebo agua.',exampleRu:'Я пью воду.',example2Es:'Bebo agua en la escuela.',example2Ru:'Я пью воду в школе.'},
      {es:'bebes',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'bebes',exampleEs:'Tú bebes agua.',exampleRu:'Ты пьёшь воду.',example2Es:'Bebes leche.',example2Ru:'Ты пьёшь молоко.'},
      {es:'bebe',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'bebe',exampleEs:'Ella bebe agua.',exampleRu:'Она пьёт воду.',example2Es:'Él bebe leche.',example2Ru:'Он пьёт молоко.'},
      {es:'bebemos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'bebemos',exampleEs:'Nosotros bebemos agua.',exampleRu:'Мы пьём воду.',example2Es:'Bebemos juntos.',example2Ru:'Мы пьём вместе.'},
      {es:'bebéis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'bebéis',exampleEs:'Vosotros bebéis agua.',exampleRu:'Вы пьёте воду.',example2Es:'Bebéis leche.',example2Ru:'Вы пьёте молоко.'},
      {es:'beben',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'beben',exampleEs:'Ellos beben agua.',exampleRu:'Они пьют воду.',example2Es:'Ustedes beben leche.',example2Ru:'Вы пьёте молоко.'}
    ]
  },
  leer:{
    id:'leer', title:'Глагол LEER', esTitle:'LEER — presente', icon:'📖', description:'Читать · leo, lees, lee, leemos, leéis, leen', accent:'#7b69bb', kind:'verb', verb:'LEER', conjugation:2, infinitive:'leer', infinitiveRu:'читать',
    words:[
      {es:'leo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'leo',exampleEs:'Yo leo un libro.',exampleRu:'Я читаю книгу.',example2Es:'Leo en clase.',example2Ru:'Я читаю на уроке.'},
      {es:'lees',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'lees',exampleEs:'Tú lees un cuento.',exampleRu:'Ты читаешь рассказ.',example2Es:'Lees en casa.',example2Ru:'Ты читаешь дома.'},
      {es:'lee',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'lee',exampleEs:'Ella lee un libro.',exampleRu:'Она читает книгу.',example2Es:'Él lee en la escuela.',example2Ru:'Он читает в школе.'},
      {es:'leemos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'leemos',exampleEs:'Nosotros leemos juntos.',exampleRu:'Мы читаем вместе.',example2Es:'Leemos un cuento.',example2Ru:'Мы читаем рассказ.'},
      {es:'leéis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'leéis',exampleEs:'Vosotros leéis libros.',exampleRu:'Вы читаете книги.',example2Es:'Leéis en clase.',example2Ru:'Вы читаете на уроке.'},
      {es:'leen',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'leen',exampleEs:'Ellos leen libros.',exampleRu:'Они читают книги.',example2Es:'Ustedes leen juntos.',example2Ru:'Вы читаете вместе.'}
    ]
  },
  aprender:{
    id:'aprender', title:'Глагол APRENDER', esTitle:'APRENDER — presente', icon:'🧠', description:'Учить / изучать · aprendo, aprendes, aprende, aprendemos, aprendéis, aprenden', accent:'#9a6d3c', kind:'verb', verb:'APRENDER', conjugation:2, infinitive:'aprender', infinitiveRu:'учить / изучать',
    words:[
      {es:'aprendo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'aprendo',exampleEs:'Yo aprendo español.',exampleRu:'Я учу испанский.',example2Es:'Aprendo palabras nuevas.',example2Ru:'Я учу новые слова.'},
      {es:'aprendes',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'aprendes',exampleEs:'Tú aprendes español.',exampleRu:'Ты учишь испанский.',example2Es:'Aprendes palabras nuevas.',example2Ru:'Ты учишь новые слова.'},
      {es:'aprende',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'aprende',exampleEs:'Ella aprende español.',exampleRu:'Она учит испанский.',example2Es:'Él aprende rápido.',example2Ru:'Он быстро учится.'},
      {es:'aprendemos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'aprendemos',exampleEs:'Nosotros aprendemos juntos.',exampleRu:'Мы учимся вместе.',example2Es:'Aprendemos español.',example2Ru:'Мы учим испанский.'},
      {es:'aprendéis',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'aprendéis',exampleEs:'Vosotros aprendéis español.',exampleRu:'Вы учите испанский.',example2Es:'Aprendéis palabras nuevas.',example2Ru:'Вы учите новые слова.'},
      {es:'aprenden',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'aprenden',exampleEs:'Ellos aprenden juntos.',exampleRu:'Они учатся вместе.',example2Es:'Ustedes aprenden español.',example2Ru:'Вы учите испанский.'}
    ]
  },
  vivir:{
    id:'vivir', title:'Глагол VIVIR', esTitle:'VIVIR — presente', icon:'🏠', description:'Жить · vivo, vives, vive, vivimos, vivís, viven', accent:'#3c927f', kind:'verb', verb:'VIVIR', conjugation:3, infinitive:'vivir', infinitiveRu:'жить',
    words:[
      {es:'vivo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'vivo',exampleEs:'Yo vivo en Madrid.',exampleRu:'Я живу в Мадриде.',example2Es:'Vivo con mi familia.',example2Ru:'Я живу со своей семьёй.'},
      {es:'vives',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'vives',exampleEs:'Tú vives aquí.',exampleRu:'Ты живёшь здесь.',example2Es:'Vives con tu familia.',example2Ru:'Ты живёшь со своей семьёй.'},
      {es:'vive',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'vive',exampleEs:'Ella vive en Madrid.',exampleRu:'Она живёт в Мадриде.',example2Es:'Él vive aquí.',example2Ru:'Он живёт здесь.'},
      {es:'vivimos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'vivimos',exampleEs:'Nosotros vivimos juntos.',exampleRu:'Мы живём вместе.',example2Es:'Vivimos en España.',example2Ru:'Мы живём в Испании.'},
      {es:'vivís',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'vivís',exampleEs:'Vosotros vivís aquí.',exampleRu:'Вы живёте здесь.',example2Es:'Vivís en España.',example2Ru:'Вы живёте в Испании.'},
      {es:'viven',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'viven',exampleEs:'Ellos viven juntos.',exampleRu:'Они живут вместе.',example2Es:'Ustedes viven aquí.',example2Ru:'Вы живёте здесь.'}
    ]
  },
  escribir:{
    id:'escribir', title:'Глагол ESCRIBIR', esTitle:'ESCRIBIR — presente', icon:'✍️', description:'Писать · escribo, escribes, escribe, escribimos, escribís, escriben', accent:'#636fae', kind:'verb', verb:'ESCRIBIR', conjugation:3, infinitive:'escribir', infinitiveRu:'писать',
    words:[
      {es:'escribo',pronoun:'Yo',ru:'я',symbol:'Yo',form:'escribo',exampleEs:'Yo escribo en mi cuaderno.',exampleRu:'Я пишу в своей тетради.',example2Es:'Escribo una frase.',example2Ru:'Я пишу предложение.'},
      {es:'escribes',pronoun:'Tú',ru:'ты',symbol:'Tú',form:'escribes',exampleEs:'Tú escribes una carta.',exampleRu:'Ты пишешь письмо.',example2Es:'Escribes en tu cuaderno.',example2Ru:'Ты пишешь в своей тетради.'},
      {es:'escribe',pronoun:'Él / Ella / Usted',ru:'он / она / Вы',symbol:'Él · Ella · Ud.',form:'escribe',exampleEs:'Ella escribe una frase.',exampleRu:'Она пишет предложение.',example2Es:'Él escribe una carta.',example2Ru:'Он пишет письмо.'},
      {es:'escribimos',pronoun:'Nosotros / Nosotras',ru:'мы',symbol:'Nosotros/as',form:'escribimos',exampleEs:'Nosotros escribimos juntos.',exampleRu:'Мы пишем вместе.',example2Es:'Escribimos en clase.',example2Ru:'Мы пишем на уроке.'},
      {es:'escribís',pronoun:'Vosotros / Vosotras',ru:'вы',symbol:'Vosotros/as',form:'escribís',exampleEs:'Vosotros escribís frases.',exampleRu:'Вы пишете предложения.',example2Es:'Escribís en clase.',example2Ru:'Вы пишете на уроке.'},
      {es:'escriben',pronoun:'Ellos / Ellas / Ustedes',ru:'они / Вы',symbol:'Ellos · Uds.',form:'escriben',exampleEs:'Ellos escriben cartas.',exampleRu:'Они пишут письма.',example2Es:'Ustedes escriben juntos.',example2Ru:'Вы пишете вместе.'}
    ]
  },
  verb_practice:{
    id:'verb_practice', title:'Фразы', esTitle:'Práctica de verbos', icon:'💬', description:'9 полезных выражений с TENER и ESTAR', accent:'#c06d40', kind:'phrases',
    words:[
      {es:'tener hambre',ru:'хотеть есть',symbol:'🍽️'},
      {es:'tener sueño',ru:'хотеть спать',symbol:'😴'},
      {es:'tener frío',ru:'холодно',symbol:'🥶'},
      {es:'tener calor',ru:'жарко',symbol:'🥵'},
      {es:'tener sed',ru:'хотеть пить',symbol:'🥤'},
      {es:'Tengo miedo.',ru:'я боюсь',symbol:'😨'},
      {es:'estar triste',ru:'быть грустным',symbol:'😢'},
      {es:'estar contento',ru:'быть весёлым',symbol:'😊'},
      {es:'estar alegre',ru:'быть весёлым',symbol:'😄'}
    ]
  },
  conversations:{
    id:'conversations', title:'Беседы', esTitle:'Conversaciones', icon:'💬', description:'19 фраз: приветствия, знакомство и простое общение', accent:'#28a67a', kind:'phrases',
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
      {es:'Se llama...',ru:'Его / её зовут...',symbol:'🙋'},
      {es:'¿Cuántos años tienes?',ru:'Сколько тебе лет?',symbol:'🎂'},
      {es:'Tengo once años.',ru:'Мне 11 лет.',symbol:'1️⃣'}
    ]
  },
  school:{
    id:'school', title:'Школа', esTitle:'La escuela', icon:'🎒', description:'23 базовых слова о школе и классе', accent:'#e35f7a',
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
      {es:'un rotulador',ru:'фломастер',symbol:`<svg class="school-svg" viewBox="0 0 96 96" aria-hidden="true"><g transform="rotate(-38 48 48)"><rect x="39" y="13" width="18" height="61" rx="7" fill="#35a86b"/><rect x="39" y="13" width="18" height="15" rx="6" fill="#23734a"/><rect x="42" y="28" width="12" height="38" rx="4" fill="#5fd18f"/><path d="M39 74h18l-4 10H43z" fill="#30343b"/><path d="M43 84h10l-5 7z" fill="#202328"/><path d="M42 35h12" stroke="#dff7e9" stroke-width="3" stroke-linecap="round"/></g></svg>`},
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
  },
  animals:{
    id:'animals', title:'Животные', esTitle:'Los animales', icon:'🐾', description:'50 животных · старый словарь расширен словами из учебного листа', accent:'#c37a35',
    words:[
      {es:'una mariposa',ru:'бабочка',symbol:'🦋'},
      {es:'una rana',ru:'лягушка',symbol:'🐸'},
      {es:'una mariquita',ru:'божья коровка',symbol:'🐞'},
      {es:'un perro',ru:'собака',symbol:'🐶'},
      {es:'un gato',ru:'кошка',symbol:'🐱'},
      {es:'un pollito',ru:'цыплёнок',symbol:'🐥'},
      {es:'un oso',ru:'медведь',symbol:'🐻'},
      {es:'una vaca',ru:'корова',symbol:'🐄'},
      {es:'una cabra',ru:'коза',symbol:'🐐'},
      {es:'una oveja',ru:'овца',symbol:'🐑'},
      {es:'un caballo',ru:'лошадь',symbol:'🐎'},
      {es:'una gallina',ru:'курица',symbol:'🐔'},
      {es:'un pato',ru:'утка',symbol:'🦆'},
      {es:'un conejo',ru:'кролик',symbol:'🐇'},
      {es:'un burro',ru:'ослик',symbol:'🫏'},
      {es:'un lobo',ru:'волк',symbol:'🐺'},
      {es:'un león',ru:'лев',symbol:'🦁'},
      {es:'un tigre',ru:'тигр',symbol:'🐯'},
      {es:'una cebra',ru:'зебра',symbol:'🦓'},
      {es:'una jirafa',ru:'жираф',symbol:'🦒'},
      {es:'un elefante',ru:'слон',symbol:'🐘'},
      {es:'un mono',ru:'обезьяна',symbol:'🐒'},
      {es:'un gorila',ru:'горилла',symbol:'🦍'},
      {es:'un oso panda',ru:'панда',symbol:'🐼'},
      {es:'un oso polar',ru:'белый медведь',symbol:'🐻‍❄️'},
      {es:'un koala',ru:'коала',symbol:'🐨'},
      {es:'un loro',ru:'попугай',symbol:'🦜'},
      {es:'un canguro',ru:'кенгуру',symbol:'🦘'},
      {es:'un rinoceronte',ru:'носорог',symbol:'🦏'},
      {es:'un águila',ru:'орёл',symbol:'🦅'},
      {es:'un ciervo',ru:'олень',symbol:'🦌'},
      {es:'un cerdo',ru:'свинья',symbol:'🐷'},
      {es:'un ratón',ru:'мышь',symbol:'🐭'},
      {es:'un zorro',ru:'лиса',symbol:'🦊'},
      {es:'un gallo',ru:'петух',symbol:'🐓'},
      {es:'un búho',ru:'сова',symbol:'🦉'},
      {es:'un toro',ru:'бык',symbol:'🐂'},
      {es:'una ardilla',ru:'белка',symbol:'🐿️'},
      {es:'un hámster',ru:'хомяк',symbol:'🐹'},
      {es:'un pingüino',ru:'пингвин',symbol:'🐧'},
      {es:'una ballena',ru:'кит',symbol:'🐋'},
      {es:'un delfín',ru:'дельфин',symbol:'🐬'},
      {es:'un tiburón',ru:'акула',symbol:'🦈'},
      {es:'un pulpo',ru:'осьминог',symbol:'🐙'},
      {es:'una foca',ru:'тюлень',symbol:'🦭'},
      {es:'una tortuga',ru:'черепаха',symbol:'🐢'},
      {es:'una serpiente',ru:'змея',symbol:'🐍'},
      {es:'un cocodrilo',ru:'крокодил',symbol:'🐊'},
      {es:'un murciélago',ru:'летучая мышь',symbol:'🦇'},
      {es:'un caracol',ru:'улитка',symbol:'🐌'}
    ]
  },
  my_home:{
    id:'my_home', title:'Мой дом', esTitle:'Mi casa', icon:'🏠', description:'58 слов и выражений по уроку «Mi casa» и фотографии учебника', accent:'#d9794f',
    words:[
      {es:'la casa',ru:'дом',symbol:'🏠'},
      {es:'el piso',ru:'квартира',symbol:'🏢'},
      {es:'el salón',ru:'гостиная',symbol:'🛋️'},
      {es:'el comedor',ru:'столовая',symbol:'🍽️'},
      {es:'la cocina',ru:'кухня',symbol:'🍳'},
      {es:'el dormitorio',ru:'спальня',symbol:'🛏️'},
      {es:'el cuarto de baño',ru:'ванная комната',symbol:'🛁'},
      {es:'el estudio',ru:'кабинет / рабочая комната',symbol:'🖥️'},
      {es:'la entrada',ru:'прихожая / вход',symbol:'🚪'},
      {es:'el pasillo',ru:'коридор',symbol:'↔️'},
      {es:'el jardín',ru:'сад',symbol:'🌳'},
      {es:'el garaje',ru:'гараж',symbol:'🚗'},
      {es:'la terraza',ru:'терраса',symbol:'☀️'},
      {es:'el balcón',ru:'балкон',symbol:'🌿'},
      {es:'Esta es mi casa.',ru:'Это мой дом.',symbol:'🏠',phrase:true},
      {es:'¿Dónde vives?',ru:'Где ты живёшь?',symbol:'❓',phrase:true},
      {es:'Vivo en una casa.',ru:'Я живу в доме.',symbol:'🏠',phrase:true},
      {es:'Vivo en un piso.',ru:'Я живу в квартире.',symbol:'🏢',phrase:true},
      {es:'¿Cómo es tu casa?',ru:'Какой у тебя дом?',symbol:'❓',phrase:true},
      {es:'Mi casa es grande.',ru:'Мой дом большой.',symbol:'🏡',phrase:true},
      {es:'Mi casa es pequeña.',ru:'Мой дом маленький.',symbol:'🏠',phrase:true},
      {es:'¿Cuántas habitaciones tiene tu casa?',ru:'Сколько комнат в твоём доме?',symbol:'❓',phrase:true},
      {es:'Mi casa tiene ... habitaciones.',ru:'В моём доме ... комнат.',symbol:'🔢',phrase:true},
      {es:'¿Qué hay en tu casa?',ru:'Что есть в твоём доме?',symbol:'❓',phrase:true},
      {es:'En mi casa hay ...',ru:'В моём доме есть ...',symbol:'🏠',phrase:true},
      {es:'¿Cuál es tu habitación favorita?',ru:'Какая твоя любимая комната?',symbol:'❤️',phrase:true},
      {es:'Mi habitación favorita es ...',ru:'Моя любимая комната — ...',symbol:'❤️',phrase:true},
      {es:'el techo',ru:'потолок',symbol:'🏠'},
      {es:'el lavabo',ru:'раковина',symbol:'🚰'},
      {es:'el fregadero',ru:'кухонная раковина / мойка',symbol:'🚰'},
      {es:'el suelo',ru:'пол',symbol:'⬛'},
      {es:'la pared',ru:'стена',symbol:'🧱'},
      {es:'el frigorífico',ru:'холодильник',symbol:'🧊'},
      {es:'la cama',ru:'кровать',symbol:'🛏️'},
      {es:'la estantería',ru:'полка / стеллаж',symbol:'📚'},
      {es:'el armario',ru:'шкаф',symbol:'🚪'},
      {es:'el sillón',ru:'кресло',symbol:'🛋️'},
      {es:'la lavadora',ru:'стиральная машина',symbol:'🧺'},
      {es:'la habitación',ru:'комната',symbol:'🚪'},
      {es:'la mesa de estudio',ru:'письменный / рабочий стол',symbol:'🖥️'},
      {es:'el ordenador',ru:'компьютер',symbol:'💻'},
      {es:'los libros',ru:'книги',symbol:'📚'},
      {es:'Aquí hay...',ru:'Здесь есть / Здесь находится...',symbol:'📍',phrase:true},
      {es:'Mira mi habitación.',ru:'Посмотри на мою комнату.',symbol:'👀',phrase:true},
      {es:'Es pequeña pero muy bonita.',ru:'Она маленькая, но очень красивая.',symbol:'✨',phrase:true},
      {es:'En la estantería tengo los libros.',ru:'На полке у меня книги.',symbol:'📚',phrase:true},
      {es:'Al lado está el armario.',ru:'Рядом находится шкаф.',symbol:'↔️',phrase:true},
      {es:'Sobre la mesa de estudio tengo el ordenador.',ru:'На письменном столе у меня компьютер.',symbol:'💻',phrase:true},
      {es:'los muebles',ru:'мебель',symbol:'🛋️'},
      {es:'hay',ru:'есть / имеется',symbol:'📍'},
      {es:'está',ru:'находится',symbol:'📍'},
      {es:'están',ru:'находятся',symbol:'📍'},
      {es:'pequeña',ru:'маленькая',symbol:'📏'},
      {es:'bonita',ru:'красивая',symbol:'✨'},
      {es:'al lado',ru:'рядом',symbol:'↔️'},
      {es:'sobre',ru:'на / над',symbol:'⬆️'},
      {es:'¡Qué bonita!',ru:'Какая красивая!',symbol:'✨',phrase:true},
      {es:'En la estantería tengo los libros y al lado está el armario.',ru:'На полке у меня книги, а рядом находится шкаф.',symbol:'📚',phrase:true}
    ]
  },
  furniture:{
    id:'furniture', title:'Мебель', esTitle:'Los muebles', icon:'🛋️', description:'24 слова из учебного листа: мебель и предметы комнаты', accent:'#9b744d',
    words:[
      {es:'la librería',ru:'книжный шкаф',symbol:'📚'},
      {es:'la cama',ru:'кровать',symbol:'🛏️'},
      {es:'la lámpara',ru:'лампа',symbol:'💡'},
      {es:'la mesita de noche',ru:'прикроватная тумбочка',symbol:'🗄️'},
      {es:'el espejo',ru:'зеркало',symbol:'🪞'},
      {es:'el cuadro',ru:'картина',symbol:'🖼️'},
      {es:'las cortinas',ru:'шторы',symbol:'🪟'},
      {es:'la alfombra',ru:'ковёр',symbol:'🧶'},
      {es:'el televisor',ru:'телевизор',symbol:'📺'},
      {es:'la percha',ru:'вешалка',symbol:'🧥'},
      {es:'el ordenador',ru:'компьютер',symbol:'🖥️'},
      {es:'la almohada',ru:'подушка',symbol:'🛏️'},
      {es:'la ventana',ru:'окно',symbol:'🪟'},
      {es:'la puerta',ru:'дверь',symbol:'🚪'},
      {es:'el reloj',ru:'часы',symbol:'🕰️'},
      {es:'los juguetes',ru:'игрушки',symbol:'🧸'},
      {es:'el sillón',ru:'кресло',symbol:'🛋️'},
      {es:'el sofá',ru:'диван',symbol:'🛋️'},
      {es:'la silla',ru:'стул',symbol:'🪑'},
      {es:'la mesa',ru:'стол',symbol:'▰'},
      {es:'el escritorio',ru:'письменный стол',symbol:'🖥️'},
      {es:'la cómoda',ru:'комод',symbol:'🗄️'},
      {es:'el armario',ru:'шкаф',symbol:'🚪'},
      {es:'la estantería',ru:'стеллаж / полка',symbol:'📚'}
    ]
  },
  prepositions:{
    id:'prepositions', title:'Предлоги', esTitle:'Las preposiciones de lugar', icon:'📍', description:'12 предлогов места с предложениями и наглядными картинками', accent:'#4c86a8',
    words:[
      {es:'dentro de',ru:'внутри',symbol:'🐱',position:'inside',exampleEs:'El gato está dentro de la caja.',exampleRu:'Кот находится внутри коробки.'},
      {es:'fuera de',ru:'снаружи / вне',symbol:'🐱',position:'outside',exampleEs:'El gato está fuera de la caja.',exampleRu:'Кот находится вне коробки.'},
      {es:'cerca de',ru:'рядом / близко к',symbol:'🐱',position:'near',exampleEs:'El gato está cerca de la caja.',exampleRu:'Кот находится рядом с коробкой.'},
      {es:'delante de',ru:'перед',symbol:'🐱',position:'front',exampleEs:'El gato está delante de la caja.',exampleRu:'Кот находится перед коробкой.'},
      {es:'detrás de',ru:'за / позади',symbol:'🐱',position:'behind',exampleEs:'El gato está detrás de la caja.',exampleRu:'Кот находится за коробкой.'},
      {es:'lejos de',ru:'далеко от',symbol:'🐱',position:'far',exampleEs:'El gato está lejos de la caja.',exampleRu:'Кот находится далеко от коробки.'},
      {es:'encima de',ru:'на / сверху',symbol:'🐱',position:'above',exampleEs:'El gato está encima de la mesa.',exampleRu:'Кот находится на столе.'},
      {es:'debajo de',ru:'под',symbol:'🐱',position:'below',exampleEs:'El gato está debajo de la mesa.',exampleRu:'Кот находится под столом.'},
      {es:'entre',ru:'между',symbol:'🐱',position:'between',exampleEs:'El gato está entre la mesa y la caja.',exampleRu:'Кот находится между столом и коробкой.'},
      {es:'a la izquierda de',ru:'слева от',symbol:'🐱',position:'left',exampleEs:'El gato está a la izquierda de la caja.',exampleRu:'Кот находится слева от коробки.'},
      {es:'a la derecha de',ru:'справа от',symbol:'🐱',position:'right',exampleEs:'El gato está a la derecha de la caja.',exampleRu:'Кот находится справа от коробки.'},
      {es:'al lado de',ru:'рядом с / сбоку от',symbol:'🐱',position:'beside',exampleEs:'El gato está al lado de la caja.',exampleRu:'Кот находится рядом с коробкой.'}
    ]
  },
  numerals:{
    id:'numerals', title:'Числительные', esTitle:'Los números', icon:'🔢', description:'61 число: от 0 до 60', accent:'#5b78d6',
    words:[
      {es:'cero',ru:'0',symbol:'0'},
      {es:'uno',ru:'1',symbol:'1'},
      {es:'dos',ru:'2',symbol:'2'},
      {es:'tres',ru:'3',symbol:'3'},
      {es:'cuatro',ru:'4',symbol:'4'},
      {es:'cinco',ru:'5',symbol:'5'},
      {es:'seis',ru:'6',symbol:'6'},
      {es:'siete',ru:'7',symbol:'7'},
      {es:'ocho',ru:'8',symbol:'8'},
      {es:'nueve',ru:'9',symbol:'9'},
      {es:'diez',ru:'10',symbol:'10'},
      {es:'once',ru:'11',symbol:'11'},
      {es:'doce',ru:'12',symbol:'12'},
      {es:'trece',ru:'13',symbol:'13'},
      {es:'catorce',ru:'14',symbol:'14'},
      {es:'quince',ru:'15',symbol:'15'},
      {es:'dieciséis',ru:'16',symbol:'16'},
      {es:'diecisiete',ru:'17',symbol:'17'},
      {es:'dieciocho',ru:'18',symbol:'18'},
      {es:'diecinueve',ru:'19',symbol:'19'},
      {es:'veinte',ru:'20',symbol:'20'},
      {es:'veintiuno',ru:'21',symbol:'21'},
      {es:'veintidós',ru:'22',symbol:'22'},
      {es:'veintitrés',ru:'23',symbol:'23'},
      {es:'veinticuatro',ru:'24',symbol:'24'},
      {es:'veinticinco',ru:'25',symbol:'25'},
      {es:'veintiséis',ru:'26',symbol:'26'},
      {es:'veintisiete',ru:'27',symbol:'27'},
      {es:'veintiocho',ru:'28',symbol:'28'},
      {es:'veintinueve',ru:'29',symbol:'29'},
      {es:'treinta',ru:'30',symbol:'30'},
      {es:'treinta y uno',ru:'31',symbol:'31'},
      {es:'treinta y dos',ru:'32',symbol:'32'},
      {es:'treinta y tres',ru:'33',symbol:'33'},
      {es:'treinta y cuatro',ru:'34',symbol:'34'},
      {es:'treinta y cinco',ru:'35',symbol:'35'},
      {es:'treinta y seis',ru:'36',symbol:'36'},
      {es:'treinta y siete',ru:'37',symbol:'37'},
      {es:'treinta y ocho',ru:'38',symbol:'38'},
      {es:'treinta y nueve',ru:'39',symbol:'39'},
      {es:'cuarenta',ru:'40',symbol:'40'},
      {es:'cuarenta y uno',ru:'41',symbol:'41'},
      {es:'cuarenta y dos',ru:'42',symbol:'42'},
      {es:'cuarenta y tres',ru:'43',symbol:'43'},
      {es:'cuarenta y cuatro',ru:'44',symbol:'44'},
      {es:'cuarenta y cinco',ru:'45',symbol:'45'},
      {es:'cuarenta y seis',ru:'46',symbol:'46'},
      {es:'cuarenta y siete',ru:'47',symbol:'47'},
      {es:'cuarenta y ocho',ru:'48',symbol:'48'},
      {es:'cuarenta y nueve',ru:'49',symbol:'49'},
      {es:'cincuenta',ru:'50',symbol:'50'},
      {es:'cincuenta y uno',ru:'51',symbol:'51'},
      {es:'cincuenta y dos',ru:'52',symbol:'52'},
      {es:'cincuenta y tres',ru:'53',symbol:'53'},
      {es:'cincuenta y cuatro',ru:'54',symbol:'54'},
      {es:'cincuenta y cinco',ru:'55',symbol:'55'},
      {es:'cincuenta y seis',ru:'56',symbol:'56'},
      {es:'cincuenta y siete',ru:'57',symbol:'57'},
      {es:'cincuenta y ocho',ru:'58',symbol:'58'},
      {es:'cincuenta y nueve',ru:'59',symbol:'59'},
      {es:'sesenta',ru:'60',symbol:'60'}
    ]
  }
};

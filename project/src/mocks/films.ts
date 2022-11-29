import {FilmInfo} from '../types/film-info';
import {Genre} from '../types/genre';

export const films: FilmInfo[] = [
  {
    id: 0,
    name: 'The Grand Budapest Hotel',
    genre: Genre.Comedy,
    year: 2014,
    posterImgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    isInList: true,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru',
      'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
    runTime: '1h 39m',
    rating: {
      score: 8.9,
      level: 'Very good',
      count: 240
    },
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the ' +
      'many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the ' +
      'recipient of a priceless painting and the chief suspect in her murder.',
    reviews: [
      {
        id: 0,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one ' +
          'of the director\'s funniest and most exquisitely designed films in years.',
        author: 'Kate Muir',
        dateTimeNumeric: '2016-12-24',
        published: 'December 24, 2016',
        rating: 8.9
      },
      {
        id: 1,
        text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, ' +
          'they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
        author: 'Bill Goodykoontz',
        dateTimeNumeric: '2015-11-18',
        published: 'November 18, 2015',
        rating: 8.0
      },
      {
        id: 2,
        text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
        author: 'Amanda Greever',
        dateTimeNumeric: '2015-11-18',
        published: 'November 18, 2015',
        rating: 8.0
      },
      {
        id: 3,
        text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
        author: 'Matthew Lickona',
        dateTimeNumeric: '2016-12-20',
        published: 'December 20, 2016',
        rating: 7.2
      },
      {
        id: 4,
        text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
        author: 'Paula Fleri-Soler',
        dateTimeNumeric: '2016-12-20',
        published: 'December 20, 2016',
        rating: 7.6
      },
      {
        id: 5,
        text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
        author: 'Paula Fleri-Soler',
        dateTimeNumeric: '2016-12-20',
        published: 'December 20, 2016',
        rating: 7.0
      }],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: Genre.KidsFamily,
    year: 2016,
    posterImgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    isInList: true,
    director: 'Дэвид Йейтс',
    starring: ['Эдди Редмэйн', 'Кэтрин Уотерстон', 'Дэн Фоглер', 'Элисон Судол', 'Колин Фаррелл', 'Кармен Эджого',
      'Эзра Миллер', 'Саманта Мортон', 'Рон Перлман', 'Джон Войт'],
    runTime: '2h 12 min',
    rating: {
      score: 7.6,
      level: 'Good',
      count: 418236
    },
    description: 'Из саквояжа зоолога-волшебника сбегают магические существа. Возвращение во вселенную «Гарри Поттера»',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    genre: Genre.Drama,
    year: 2018,
    posterImgSrc: 'img/bohemian-rhapsody.jpg',
    isInList: true,
    director: 'Брайан Сингер',
    starring: ['Рами Малек', 'Люси Бойнтон', 'Гвилим Ли', 'Бен Харди', 'Джозеф Маццелло', 'Эйдан Гиллен', 'Аллен Лич',
      'Том Холландер', 'Майк Майерс', 'Аарон МакКаскер'],
    runTime: '2h 14min',
    rating: {
      score: 8.0,
      level: 'Very Good',
      count: 441112
    },
    description: 'Чествование группы Queen, их музыки и их выдающегося вокалиста Фредди Меркьюри, который бросил вызов ' +
      'стереотипам и победил условности, чтобы стать одним из самых любимых артистов на планете. Фильм прослеживает ' +
      'головокружительный путь группы к успеху благодаря их культовым песням и революционному звуку, практически распад ' +
      'коллектива, поскольку образ жизни Меркьюри выходит из-под контроля, и их триумфальное воссоединение накануне ' +
      'концерта Live Aid, ставшим одним из величайших выступлений в истории рок-музыки.',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 3,
    name: 'Shutter Island',
    genre: Genre.Drama,
    year: 2009,
    posterImgSrc: 'img/shutter-island.jpg',
    isInList: true,
    director: 'Мартин Скорсезе',
    starring: ['Леонардо ДиКаприо',
      'Марк Руффало',
      'Бен Кингсли',
      'Макс фон Сюдов',
      'Мишель Уильямс',
      'Эмили Мортимер',
      'Патриша Кларксон',
      'Джеки Эрл Хейли',
      'Тед Левайн',
      'Джон Кэрролл Линч'],
    runTime: '2h 18min',
    rating: {
      score: 8.5,
      level: 'Very Good',
      count: 707915
    },
    description: 'Пристав оказывается заложником клиники для умалишенных. Сложносочиненный детектив с Леонардо ДиКаприо',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 4,
    name: 'Macbeth',
    genre: Genre.Drama,
    year: 2015,
    posterImgSrc: 'img/macbeth.jpg',
    isInList: true,
    director: 'Джастин Курзель',
    starring: ['Майкл Фассбендер',
      'Марион Котийяр',
      'Пэдди Консидайн',
      'Шон Харрис',
      'Джек Рейнор',
      'Элизабет Дебики',
      'Дэвид Тьюлис',
      'Росс Андерсон',
      'Дэвид Хейман',
      'Морис Роевз'],
    runTime: '1h 53min',
    rating: {
      score: 7.1,
      level: 'Good',
      count: 31655
    },
    description: 'Холодные поля Шотландии, военный лагерь, всегда готовый переместиться в другое место. Макбет всегда ' +
      'на войне, его жена, недавно потерявшая ребенка, боится потерять еще и мужа. Чтобы удержать его рядом, она ' +
      'начинает свой проект по устранению конкурентов в борьбе за королевскую корону.',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 5,
    name: 'Aviator',
    genre: Genre.Drama,
    year: 2004,
    posterImgSrc: 'img/aviator.jpg',
    isInList: true,
    director: 'Мартин Скорсезе',
    starring: ['Леонардо ДиКаприо',
      'Кейт Бланшетт',
      'Мэтт Росс',
      'Джон Си Райли',
      'Алан Алда',
      'Кейт Бекинсейл',
      'Алек Болдуин',
      'Иэн Холм',
      'Адам Скотт',
      'Дэнни Хьюстон'],
    runTime: '2h 43min',
    rating: {
      score: 7.6,
      level: 'Good',
      count: 148301
    },
    description: 'Получив от отца небольшую фабрику, Говард Хьюз превратил ее в гигантское, фантастически прибыльное ' +
      'предприятие. Став владельцем огромной кинокомпании, он снял самый дорогой для своего времени фильм и покорил ' +
      'сердца прелестнейших голливудских актрис.\n' +
      '\n' +
      'Ему принадлежали самые престижные казино Лас-Вегаса и он установил рекорд скоростных полетов, приобрел ' +
      'вторую по величине коммерческую авиакомпанию…\n' +
      '\n' +
      'Деньги жгут сердце Хьюза, они не дают ему покоя, а душа его рвется ввысь. Только там, на высоте нескольких ' +
      'тысяч метров он счастлив по-настоящему. Только там, где все решает лишь мастерство пилота и Бог, ничто не ' +
      'ценится так дорого, как верность и честь.',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    genre: Genre.Drama,
    year: 2010,
    posterImgSrc: 'img/we-need-to-talk-about-kevin.jpg',
    isInList: true,
    director: 'Линн Рэмси',
    starring: ['Тильда Суинтон',
      'Джон Си Райли',
      'Эзра Миллер',
      'Джаспер Ньюэлл',
      'Рок Дер',
      'Эшли Герасимович',
      'Шиван Фэллон',
      'Алекс Манетт',
      'Кеннет Франклин',
      'Лесли Лайлс'],
    runTime: '1h 52min',
    rating: {
      score: 7.2,
      level: 'Good',
      count: 44952
    },
    description: 'Отложив в сторону все личные и профессиональные амбиции, Ева посвящает жизнь рождению и воспитанию ' +
      'сына. Однако их отношения с самого начала оказываются крайне сложными. В пятнадцать лет Кевин совершает ' +
      'непоправимое, и Ева мучается сознанием ответственности и собственной вины. Достаточно ли она любила своего ' +
      'сына? Какова доля ее вины в происшедшем?',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 7,
    name: 'What We Do in the Shadows',
    genre: Genre.Comedy,
    year: 2014,
    posterImgSrc: 'img/what-we-do-in-the-shadows.jpg',
    isInList: true,
    director: 'Джемейн Клемент, Тайка Вайтити',
    starring: ['Джемейн Клемент',
      'Тайка Вайтити',
      'Джонатан Бруг',
      'Кори Гонсалес-Макуэр',
      'Стью Рутерфорд',
      'Бен Френшам',
      'Джеки ван Бик',
      'Елена Стейко',
      'Джейсон Хойте',
      'Карен О’Лири'],
    runTime: '1h 25min',
    rating: {
      score: 7.5,
      level: 'Good',
      count: 212916
    },
    description: 'Очаровательные вампиры-соседи становятся героями фильма. Безумно смешная мокьюментари-комедия Тайки Вайтити',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 8,
    name: 'Revenant',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/revenant.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '',
      count: 0
    },
    description: 'Из саквояжа зоолога-волшебника сбегают магические существа. Возвращение во вселенную «Гарри Поттера»',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 9,
    name: 'Mindhunter',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/mindhunter.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 10,
    name: 'Orlando',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/orlando.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 11,
    name: 'Dardjeeling Limited',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/dardjeeling-limited.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 12,
    name: 'War of the Worlds',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/war-of-the-worlds.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 13,
    name: 'Midnight Special',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/midnight-special.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 14,
    name: 'Seven Years in Tibet',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/seven-years-in-tibet.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 15,
    name: 'Moonrise Kingdom',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/moonrise-kingdom.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 16,
    name: 'Snatch',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/snatch.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 17,
    name: 'No Country for Old Men',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/no-country-for-old-men.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 18,
    name: 'Pulp Fiction',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/pulp-fiction.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 19,
    name: 'Johnny English',
    genre: Genre.Drama,
    year: 1895,
    posterImgSrc: 'img/johnny-english.jpg',
    isInList: false,
    director: '',
    starring: [],
    runTime: '0h 0min',
    rating: {
      score: 0,
      level: '0',
      count: 0
    },
    description: '',
    reviews: [],
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
];

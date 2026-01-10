import { ServiceCategory, Review, TeamMember } from './types';

// Real Pricing Data Structure
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'Коса & Стилистика',
    description: 'Експертна грижа за косата, включваща подстригване, стайлинг и специализирани техники за боядисване.',
    // TODO: Download high-res interior shot from @studiodayandnight Instagram
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', 
    items: [
      { name: "Дамско подстригване & Сешоар", price: "35 - 50 лв.", duration: "60 мин" },
      { name: "Сешоар / Стайлинг (прав/къдрици)", price: "30 - 60 лв.", duration: "45 мин" },
      { name: "Балеаж / Color Correction", price: "200+ лв.", duration: "180+ мин" },
      { name: "Терапия за коса (възстановяваща)", price: "60 - 80 лв.", duration: "60 мин" }
    ]
  },
  {
    id: 'nails',
    title: 'Нокти (Nails)',
    description: 'Прецизен маникюр и педикюр с висококачествени продукти за дълготраен блясък.',
    // Image Reference: "Neon Pink Manicure" from Aleksandra's work
    image: 'https://images.unsplash.com/photo-1632345031635-7b8000994fc8?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: "Маникюр с гел лак (сваляне + оформяне)", price: "49 лв.", duration: "90 мин" },
      { name: "Педикюр (класически/гел лак)", price: "60 лв.", duration: "60 мин" },
      { name: "Ноктопластика (изграждане)", price: "80 лв.", duration: "120 мин" },
      { name: "Арт декорация (на нокът)", price: "2 - 5 лв.", duration: "10 мин" }
    ]
  },
  {
    id: 'face',
    title: 'Лице & Естетика',
    description: 'Подчертайте естествената си красота с нашите процедури за мигли и вежди.',
    // Image Reference: "Full Head Braids" or lashes work
    image: 'https://images.unsplash.com/photo-1588510703029-7e8e92e59711?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: "Ламиниране на мигли (Lash Lift)", price: "68 лв.", duration: "60 мин" },
      { name: "Оформяне на вежди", price: "10 лв.", duration: "20 мин" },
      { name: "Мигли 'Косъм по косъм'", price: "80 лв.", duration: "120 мин" },
      { name: "Почистване на вежди с конец", price: "15 лв.", duration: "20 мин" }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'kalina',
    name: 'Калина Иванова',
    role: 'Собственик & Миглопластика',
    specialty: 'Мигли & Вежди',
    bio: 'Здравейте, казвам се Калина! В бюти сферата съм от 2018г. Преминала съм редица обучения за миглопластика и оформяне на вежди. Моята цел е да подчертая естествената ви красота, без да я променям драстично. Държа на уюта и личното отношение към всеки клиент.',
    rating: 5.0,
    reviewCount: 120,
    // ВАЖНО: След като качите снимката в новата папка 'public/assets/kalina.jpg', променете реда по-долу на:
    // image: '/assets/kalina.jpg'
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'maria-hair',
    name: 'Мария',
    role: 'Топ Коафьор',
    specialty: 'Подстригване & Прически',
    bio: 'Аз съм Мария и фризьорството е моето призвание. С над 5 години опит, аз съм тук, за да се погрижа за вашата коса. Обичам да правя плитки и сложни прически, но също така съм експерт в класическото подстригване и терапиите за коса.',
    rating: 5.0,
    reviewCount: 45,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vladislava',
    name: 'Владислава',
    role: 'Колорист Експерт',
    specialty: 'Балеаж & Русии Нюанси',
    bio: 'Здравейте! Аз съм Владислава. Моята сила е в колористиката. Обожавам да създавам "Wow" ефект с техники като Балеаж, AirTouch и контуриране. За мен е важно косата да остане здрава, докато постигаме мечтания цвят.',
    rating: 4.9,
    reviewCount: 84,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'aleksandra',
    name: 'Александра',
    role: 'Маникюрист',
    specialty: 'Арт Дизайн & Ноктопластика',
    bio: 'Здравейте, аз съм Александра! Маникюрът за мен е платно за изкуство. Обожавам да рисувам и да създавам уникални дизайни, които изразяват вашата индивидуалност. Работя с прецизност към детайла и най-висок клас продукти за дълготраен резултат.',
    rating: 5.0,
    reviewCount: 115,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'maria-mladenova',
    name: 'Мария Младенова',
    role: 'Маникюрист',
    specialty: 'Апаратен Маникюр & Педикюр',
    bio: 'Аз съм Мария Младенова и моята страст е перфектната форма и здравето на ноктите. Специализирам в апаратните техники и медицинския педикюр. За мен е важно не само ноктите ви да изглеждат добре, но и вие да се чувствате релаксирани по време на процедурата.',
    rating: 4.9,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Елена П.",
    rating: 5,
    text: "Най-накрая място в Студентски град, което предлага истински лукс и отношение. Калина е вълшебница с цветовете!"
  },
  {
    id: 2,
    name: "Мария С.",
    rating: 5,
    text: "Маникюрът ми издържа повече от 3 седмици без забележка. Атмосферата е невероятно уютна."
  },
  {
    id: 3,
    name: "Виктория Д.",
    rating: 5,
    text: "Препоръчвам с две ръце! Професионализъм, хигиена и страхотно кафе докато се грижат за теб."
  }
];

export const NAV_LINKS = [
  { name: 'Начало', href: '#home' },
  { name: 'За Нас', href: '#about' },
  { name: 'Ценоразпис', href: '#services' },
  { name: 'Галерия', href: '#gallery' },
  { name: 'Контакти', href: '#location' },
];

export const STATS_DATA = [
  { name: 'Пон', value: 40 },
  { name: 'Вто', value: 55 },
  { name: 'Сря', value: 65 },
  { name: 'Чет', value: 90 },
  { name: 'Пет', value: 95 },
  { name: 'Съб', value: 85 },
  { name: 'Нед', value: 70 },
];
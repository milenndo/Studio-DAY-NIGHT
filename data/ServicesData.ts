import { ServiceItem } from '../types';

interface ServiceSection {
  category: string;
  description?: string;
  image?: string;
  items: ServiceItem[];
}

export const services: ServiceSection[] = [
  {
    category: "Фризьорство & Колористика",
    description: "Експертна колористика и стайлинг с продукти на Alfaparf Milano и техники от школата на Mounir.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Дамско подстригване & Сешоар", price: "40 - 60 лв.", duration: "60 мин", tag: "Популярно" },
      { name: "Балеаж / AirTouch Трансформация", price: "220+ лв.", duration: "240 мин", tag: "VIP Услуга" },
      { name: "Боядисване корен (Alfaparf Milano)", price: "70 лв.", duration: "90 мин" },
      { name: "Глос / Освежаване с тонер", price: "50 лв.", duration: "60 мин" },
      { name: "Официална прическа (Кок/Опашка)", price: "90 лв.", duration: "90 мин" },
      { name: "Дълбоко възстановяваща терапия", price: "80 лв.", duration: "60 мин" }
    ]
  },
  {
    category: "Мъжко Подстригване (Barba Italiana)",
    description: "Класически италиански ритуали и прецизни фейд техники.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Мъжко подстригване (Fade/Classic)", price: "35 лв.", duration: "45 мин", tag: "Популярно" },
      { name: "Оформяне на брада & Топла кърпа", price: "30 лв.", duration: "30 мин" },
      { name: "Камуфлаж на бели коси (Barba Italiana)", price: "45 лв.", duration: "45 мин" },
      { name: "Подстригване с машинка (Един номер)", price: "25 лв.", duration: "30 мин" }
    ]
  },
  {
    category: "Маникюр & Естетика",
    description: "Безупречна хигиена и детайлна архитектура за вашите нокти, мигли и вежди.",
    image: "https://images.unsplash.com/photo-1632345031635-7b8000994fc8?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Маникюр с гел лак (Rubber Base)", price: "49 лв.", duration: "90 мин", tag: "Популярно" },
      { name: "Терапевтичен педикюр", price: "65 лв.", duration: "60 мин" },
      { name: "Сваляне на гел лак & Оформяне", price: "20 лв.", duration: "30 мин" },
      { name: "Ламиниране на мигли (Lash Lift)", price: "70 лв.", duration: "60 мин", tag: "VIP Услуга" },
      { name: "Архитектура на вежди (Къна/Боя)", price: "30 лв.", duration: "45 мин" }
    ]
  }
];
import { ContactInfo, Project } from './types';

export const USER_INFO: ContactInfo = {
  name: "Бурмакина Анастасия",
  title: "Дизайнер Интерьера",
  phone: "+7 (981) 936-43-80",
  email: "nastya.burmakina@mail.ru",
  telegram: "@nastya",
  website: "https://t.me/nastya", // Pointing to telegram for the QR code
  location: "Санкт-Петербург"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Marble & Brass",
    category: "Премиум Кухня",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Nordic Grey",
    category: "Скандинавский Стиль",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Modern Minimal",
    category: "Кухня-Гостиная",
    image: "https://images.unsplash.com/photo-1556909128-210190800b0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Dark Wood",
    category: "Лофт Проект",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Bright Classic",
    category: "Классика",
    image: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Emerald Studio",
    category: "Компактная Кухня",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
  }
];
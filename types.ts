export interface Project {
  id: number;
  title: string;
  category: string;
  image: string; // URL for the gallery image
}

export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  telegram: string;
  website: string;
  location: string;
}
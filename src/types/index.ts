export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
  budget: string;
}
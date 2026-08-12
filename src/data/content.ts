import { images } from '../utils/images';

export interface ServiceItem {
  title: string;
  description: string;
  priceRange: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Robes de mariée',
    description: 'Des créations élégantes et sur mesure pour la mariée moderne.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Robes de soirée',
    description: 'Des tenues sophistiquées pour briller lors de toutes vos soirées spéciales.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Location de tenues et accessoires',
    description: 'Une sélection raffinée de tenues et accessoires pour votre événement.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Décoration événementielle',
    description: 'Des décors sur mesure pour une ambiance exceptionnelle.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Dragées personnalisées Chic Nuptial',
    description: 'Des dragées élégantes et personnalisées pour séduire vos invités.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Accessoires de mariage',
    description: 'Des accessoires chics pour compléter vos looks avec raffinement.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Espace maquillage de la mariée',
    description: 'Un espace beauté dédié pour sublimer la mariée avant le grand jour.',
    priceRange: 'Sur demande',
  },
  {
    title: 'Conseils personnalisés',
    description: 'Un accompagnement sur mesure pour chaque étape de votre projet.',
    priceRange: 'Sur demande',
  },
];

export interface RentalItem {
  title: string;
  subtitle: string;
}

export const RENTALS: RentalItem[] = [
  { title: 'Chaises des mariés', subtitle: 'Sièges élégants pour les stars de votre journée.' },
  { title: 'Tables & décorations', subtitle: 'Ambiances sur mesure pour une réception raffinée.' },
  { title: 'Mobilier événementiel', subtitle: 'Mobilier premium pour un cadre harmonieux.' },
  { title: 'Vaisselle & accessoires', subtitle: 'Un service complet avec style et finesse.' },
  { title: 'Matériel réception', subtitle: 'Matériel de qualité pour une mise en scène parfaite.' },
  { title: 'Son & lumière', subtitle: 'Ambiance sonore et visuelle professionnelle.' },
];

export interface GalleryItemData {
  imageUrl: string;
  title: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItemData[] = [
  {
    imageUrl: images.rentalGold,
    title: 'Réception dorée en plein air',
    category: 'Location & décoration',
  },
  {
    imageUrl: images.galleryGreen,
    title: 'Réception végétale d’exception',
    category: 'Décoration',
  },
  {
    imageUrl: images.gallery1,
    title: 'Mariage Traditionnel Baoulé',
    category: 'Mariage Traditionnel',
  },
  {
    imageUrl: images.gallery2,
    title: 'Réception Luxe à Abidjan',
    category: 'Réception VIP',
  },
  {
    imageUrl: images.gallery3,
    title: 'Décoration Florale Premium',
    category: 'Décoration',
  },
  {
    imageUrl: images.gallery4,
    title: "Table d'Honneur Élégante",
    category: 'Réception',
  },
  {
    imageUrl: images.gallery5,
    title: 'Wedding Cake Design',
    category: 'Gastronomie',
  },
  {
    imageUrl: images.gallery6,
    title: 'Couple de Mariés',
    category: 'Mariage',
  },
  {
    imageUrl: images.gallery7,
    title: 'Centre de Table Luxe',
    category: 'Décoration',
  },
  {
    imageUrl: images.gallery8,
    title: 'Salle de Réception Prestige',
    category: 'Lieu',
  },
  {
    imageUrl: images.gallery9,
    title: 'Détails Dorés Raffinés',
    category: 'Détails',
  },
];

export const GALLERY_PREVIEW_ITEMS: GalleryItemData[] = [
  GALLERY_ITEMS[0],
  GALLERY_ITEMS[1],
  GALLERY_ITEMS[10],
];

export const CONTACT_INFO = {
  phoneDisplay: '+225 07 58 04 79 25',
  phoneHref: 'tel:+2250758047925',
  whatsappNumber: '2250758047925',
  facebookUrl: "",
  whatsappMessage: 'Bonjour CHIC NUPTIAL, je souhaite obtenir des informations sur vos services.',
  email: '',
  emailHref: 'mailto:',
  address: 'Marcory, Abidjan',
  addressFull: "Marcory · Abidjan · Côte d'Ivoire",
  mapsUrl: "https://www.google.com/maps?q=Marcory,+Abidjan,+C%C3%B4te+d'Ivoire",
  hours: 'Lundi au samedi · 9 h à 19 h',
} as const;

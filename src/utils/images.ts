export const images = {
  // Image héro - Réception de mariage luxueuse
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  
  // Galerie - Image 1 : Mariage traditionnel africain
  gallery1: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
  
  // Galerie - Image 2 : Décoration de salle luxueuse
  gallery2: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
  
  // Galerie - Image 3 : Bouquet et fleurs mariage
  gallery3: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  
  // Galerie - Image 4 : Table de réception élégante
  gallery4: 'https://images.unsplash.com/photo-1478146893917-518bf2a2b255?w=800&q=80',
  
  // Galerie - Image 5 : Gâteau de mariage
  gallery5: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80',
  
  // Galerie - Image 6 : Couple marié africain
  gallery6: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
  
  // Galerie - Image 7 : Centre de table luxe
  gallery7: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80',
  
  // Galerie - Image 8 : Salle de réception
  gallery8: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  
  // Galerie - Image 9 : Détails décoration or
  gallery9: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
};

// Fonction pour obtenir une image avec fallback
export const getImageUrl = (path: string): string => {
  const imageMap: { [key: string]: string } = {
    '/images/hero-wedding.jpg': images.hero,
    '/images/gallery-1.jpg': images.gallery1,
    '/images/gallery-2.jpg': images.gallery2,
    '/images/gallery-3.jpg': images.gallery3,
  };
  
  return imageMap[path] || path;
};
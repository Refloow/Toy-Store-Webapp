export interface Review {
  username: string;
  rating: number;
}

export interface Toy {
  id: number;
  name: string;
  description: string;
  type: string; 
  age: string; 
  targetGroup: 'devojčica' | 'dečak' | 'svi';
  productionDate: Date;
  price: number;
  reviews: Review[];
  imageUrl?: string;
}

export interface CartItem extends Toy {
  status: 'rezervisano' | 'pristiglo' | 'otkazano';
  userRating?: number;
  cartItemId?: number;
}
export interface AddressSearch {
  address: string;
  latitude: number;
  longitude: number;
}

export interface Address extends AddressSearch {
  title: string;
  id: number;
  user_id: number;
}

export interface Category {
  name: string;
  description: string;
  id: number;
}

export interface Restaurant {
  name: string;
  description: string;
  address: string;
  id: number;
  categories: Category[];
}

export interface Menu {
  name: string;
  description: string;
  id: number;
  restaurant_id: number;
}

export interface Dish {
  name: string;
  description: string;
  price: number;
  image_url: string;
  id: number;
  menu_id: number;
  restaurant_id: number;
}

export interface User {
  phone: string;
  id: number;
  is_active: boolean;
  profile: {
    name: string;
    gender: "male" | "female";
    birth_date: string;
    id: number;
    user_id: number;
  };
}

export interface MapTypes {
  lat: number;
  long: number;
}

import { Dish } from "@/types/ApiTypes";
import { create } from "zustand";

interface Product extends Dish {
  quantity: number;
}

export interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [product, ...state.products],
    })),
  increment: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    })),
  decrement: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
}));

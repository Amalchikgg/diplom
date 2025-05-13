import { Address } from "@/types/ApiTypes";
import { create } from "zustand";

interface AddressState {
  address: Address;
  setAddress: (address: Address) => void;
}

export const AddressStore = create<AddressState>((set) => ({
  address: {} as Address,
  setAddress: (address) => set({ address }),
}));

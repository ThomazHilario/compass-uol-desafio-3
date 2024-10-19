// Import zustand
import { create } from "zustand";

// Interface Filter Store 
interface FilterStoreProps{
    showQuantity:number | string;
    setShowQuantity: (newQuant:number | string) => void
}

export const filterStore = create<FilterStoreProps>((set) => ({
    showQuantity:16,

    setShowQuantity: (newQuantity:number | string) => set(() => ({
        showQuantity: newQuantity
    }))
}))
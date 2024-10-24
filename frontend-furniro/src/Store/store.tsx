// Import zustand
import { create,  } from "zustand";

// Interface
interface ShopStoreProps{
    showQuantity:number | string;
    setShowQuantity: (newQuant:number | string) => void;
    shortBy:string;
    setShortBy:(newShortByValue:string) => void;
    stepPage:number;
    setStepPage:(newStep:number) => void;
}

// Shop store states
export const shopStore = create<ShopStoreProps>((set) => ({
    // ------- Filter products ------- //

    // Show quantity
    showQuantity:16,
    setShowQuantity: (newQuantity:number | string) => set(() => ({
        showQuantity: newQuantity
    })),

    // Short By
    shortBy:'default',
    setShortBy: (newShortByValue:string) => set(() => ({
        shortBy: newShortByValue
    })),

    // ------------------------------- //

    // Step navigation
    stepPage:1,
    setStepPage: (newStepPage) => set(() => ({
        stepPage: newStepPage
    }))

}))
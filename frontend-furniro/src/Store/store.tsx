// Import zustand
import { create,  } from "zustand";

// Interface
import { CartProps } from "../Interfaces/cart-type";

// Interface ShopStoreProps
interface ShopStoreProps{
    showQuantity:number | string;
    setShowQuantity: (newQuant:number | string) => void;
    shortBy:string;
    setShortBy:(newShortByValue:string) => void;
    stepPage:number;
    setStepPage:(newStep:number) => void;
}

// Interface CartProductsProps
export interface CartProductsProps{
    cartProducts:CartProps[]
    setCartProducts: (product:CartProps[]) =>void
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

// Cart Product states
export const cartStore = create<CartProductsProps>((set) => ({
    cartProducts:[],
    setCartProducts: (products:CartProps[]) => set(() => ({
        cartProducts: products
    }))
}))
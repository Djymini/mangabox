import {createContext} from "react";
import {MangaType} from "../MangaType";


interface CartContextType {
    mangaContent: MangaType[];
    setMangaContent: React.Dispatch<React.SetStateAction<MangaType[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
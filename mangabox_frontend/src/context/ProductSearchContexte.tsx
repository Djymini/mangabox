import {createContext} from "react";


interface ProductSearchContextProps {
    minPrice: number;
    setMinPrice: React.Dispatch<React.SetStateAction<number>>;
    maxPrice: number;
    setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    publisher: string[];
    setPublisher: React.Dispatch<React.SetStateAction<string[]>>;
    genres: string[];
    setGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ProductSearchContext = createContext<ProductSearchContextProps | undefined>(undefined);
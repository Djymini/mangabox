import {createContext} from "react";


interface SearchContext {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContext | undefined>(undefined);
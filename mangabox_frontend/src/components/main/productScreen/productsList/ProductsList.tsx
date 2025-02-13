import {FC} from 'react';
import SortSelector from "./sortSelector/SortSelector";
import FilterInfo from "./filterInfo/FilterInfo";
import CardProductsList from "./cardProductsList/CardProductsList";

const MyComponent: FC<{}> = ({}) => {
    return (
        <section>
            <SortSelector/>
            <FilterInfo/>
            <CardProductsList/>
        </section>
    );
};

export default MyComponent;

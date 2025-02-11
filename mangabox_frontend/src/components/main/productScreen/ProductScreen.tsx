import {FC} from 'react';
import Filter from "./filter/Filter";

const ProductScreen: FC<{}> = ({}) => {
    return (
        <div>
            <Filter searchResult={""}/>
        </div>
    );
};

export default ProductScreen;

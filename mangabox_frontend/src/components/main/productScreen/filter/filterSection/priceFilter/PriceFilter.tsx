import {FC, useContext, useEffect, useState} from 'react';
import styles from "../../../productScreen.module.css"
import {ProductSearchContext} from "../../../../../../context/ProductSearchContexte";

const PriceFilter: FC<{}> = ({}) => {
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(500);

    const productSearchContext = useContext(ProductSearchContext)

    useEffect(() => {
        if (productSearchContext) {
            productSearchContext.setMinPrice(minPrice);
            productSearchContext.setMaxPrice(maxPrice);
        }
    }, [minPrice, maxPrice]);

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    return (
        <div className={styles.priceFilter}>
            <div>
                <label>Min</label>
                <input type="number" name="number" min="0" value={productSearchContext?.minPrice} onChange={handleMinPriceChange}/>
            </div>
            <div>
                <label>Max</label>
                <input type="number" name="number" value={productSearchContext?.maxPrice} onChange={handleMaxPriceChange}/>
            </div>
        </div>
    );
};

export default PriceFilter;

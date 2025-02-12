import {FC, useState} from 'react';
import styles from "../../../productScreen.module.css"

const PriceFilter: FC<{}> = ({}) => {
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(500);

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
                <input type="number" name="number" min="0" value={minPrice} onChange={handleMinPriceChange}/>
            </div>
            <div>
                <label>Max</label>
                <input type="number" name="number" value={maxPrice} onChange={handleMaxPriceChange}/>
            </div>
        </div>
    );
};

export default PriceFilter;

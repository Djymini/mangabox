import {FC} from 'react';
import BadgeCart from "../badgeCart/BadgeCart";
import styles from "../asideCart.module.css"

const HeaderAsideCart: FC<{total:number, badgeValue:number}> = ({total, badgeValue}) => {
    return (
        <div className={styles.headerAsideCart}>
            <a href="#" className={styles.headerAsideCartBadgeContainer}>
                <BadgeCart value={badgeValue}/>
                <p>Panier :</p>
            </a>
            <p>{total + "€"}</p>
        </div>
    );
};

export default HeaderAsideCart;

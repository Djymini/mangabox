import {FC} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import styles from "../homeTuto/homeTuto.module.css"
import {homeTutoStyle} from "./homeTutoStyle";

const HomeTuto: FC<{}> = ({}) => {
    return (
        <div className={styles.tuto}>
            <h2>Commandez vos manga facilement</h2>
            <section className={styles.container}>
                <div className={styles.step}>
                    <h3>Selectionnez</h3>
                    <AddCircleOutlineIcon sx={homeTutoStyle}/>
                    <p>Cherchez vos article et ajoutez les à votre panier</p>
                </div>

                <div className={styles.arrow}>
                    <div className={styles.arrowLine}></div>
                    <div className={styles.arrowHead}></div>
                </div>

                <div className={styles.step}>
                    <h3>Validez</h3>
                    <ShoppingBasketIcon sx={homeTutoStyle}/>
                    <p>Verifiez vos article et valdez votre commande</p>
                </div>

                <div className={styles.arrow}>
                    <div className={styles.arrowLine}></div>
                    <div className={styles.arrowHead}></div>
                </div>

                <div className={styles.step}>
                    <h3>Payez</h3>
                    <CreditCardIcon sx={homeTutoStyle}/>
                    <p>Connectez-vous et realisez votre paiment</p>
                </div>
            </section>
        </div>
    );
};

export default HomeTuto;

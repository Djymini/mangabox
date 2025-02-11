import {FC} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import styles from "../homeTuto/homeTuto.module.css"
import {homeTutoStyle} from "./homeTutoStyle";
import TutoStep from "./tutoStep/TutoStep";
import Arrow from "./arrow/Arrow";

const HomeTuto: FC<{}> = ({}) => {
    return (
        <div className={styles.tuto}>
            <h2>Commandez vos manga facilement</h2>
            <section className={styles.container}>
                <TutoStep title={"Séléctionnez"} Icon={AddCircleOutlineIcon} text={"Chercher vos article et ajoutez les à votre panier"}/>
                <Arrow/>
                <TutoStep title={"Validez"} Icon={ShoppingBasketIcon} text={"Vérifiez vos articles et validez votre commande"}/>
                <Arrow/>
                <TutoStep title={"Payez"} Icon={CreditCardIcon} text={"Connectez-vous et réalisez votre paiment"}/>
            </section>
        </div>
    );
};

export default HomeTuto;

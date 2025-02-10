import {FC} from 'react';
import styles from "../homeContent/homeContent.module.css"

const HomeContent: FC<{}> = ({}) => {
    return (
        <>
            <div className={styles.background}></div>
            <section className={styles.content}>
                <div className={styles.contentHeader}>
                    <h1>Manga <br/> Box</h1>
                    <button>Connexion</button>
                </div>
                <div className={styles.contentMain}>
                    <h2>Bienvenue !</h2>
                    <button>Commencez votre commande</button>
                </div>
            </section>
        </>
    );
};

export default HomeContent;

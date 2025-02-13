import {FC} from 'react';
import styles from "./loginAndRegister.module.css";

interface LoginFormInput {
    email: string
    password: string
}

const LoginForm: FC<{}> = ({}) => {
    return (
        <form className={styles.form}>
            <p className={styles.formTitle}>Déjà inscrit, connectez-vous</p>
            <div className={styles.inputContainer}>
                <input placeholder="Entrez votre email" type="email"/>
            </div>
            <div className={styles.inputContainer}>
                <input placeholder="Entrez votre mot de passe" type="password"/>
            </div>
            <button className={styles.submit} type="submit">
                Validez votre inscription
            </button>
        </form>
    );
};

export default LoginForm;

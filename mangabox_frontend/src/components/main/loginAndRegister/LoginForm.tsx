import React, {FC, useState} from 'react';
import styles from "./loginAndRegister.module.css";
import {post} from "../../../api/api";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";

interface LoginFormInput {
    email: string
    password: string
}

const LoginForm: FC<{}> = ({}) => {
    const [registerInput, setRegisterInput] = useState<LoginFormInput>({
        email: '',
        password: '',
    });

    const navigate = useNavigate()
    const {dispatch} = useAuth()

    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrorMessages({});

        setIsSubmitting(true);

        const data = {
            email: registerInput.email,
            password: registerInput.password
        };
        console.log(data);
        let response: any;
        try {
            response = await post('/auth/login', data);
            console.log(response);
            if (response.status === 200) {
                dispatch({type: 'LOGIN', payload: {token: response.data}})
                setTimeout(() => {
                    navigate('/');
                }, 50);
            } else {
                setErrorMessages({
                    password: "Mail ou mot de passe incorrect",
                });
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.formTitle}>Vous avez déjà un compte, connectez vous</p>

            <div className={styles.inputContainer}>
                <input
                    placeholder="Entrez votre email"
                    type="email"
                    name="email"
                    value={registerInput.email}
                    onChange={handleInputChange}
                />
                {errorMessages.email && <div className={styles.error}>{errorMessages.email}</div>}
            </div>

            <div className={styles.inputContainer}>
                <input
                    placeholder="Entrez votre mot de passe"
                    type="password"
                    name="password"
                    value={registerInput.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {errorMessages.password && (
                    <div className={styles.error}>{errorMessages.password}</div>
                )}
            </div>

            {/* Affichage des erreurs générales */}
            {errorMessages.general && <div className={styles.error}>{errorMessages.general}</div>}

            {/* Bouton d'envoi */}
            <button className={styles.submit} type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Vérification...' : 'Connexion'}
            </button>
        </form>
    );
};

export default LoginForm;

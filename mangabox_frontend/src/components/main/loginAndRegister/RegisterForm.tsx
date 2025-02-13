import React, {FC, useEffect, useState} from 'react';
import styles from './loginAndRegister.module.css';
import {post} from "../../../api/api";

interface RegisterFormInput {
    email: string;
    password: string;
    passwordConfirm: string;
}

const RegisterForm: FC<{}> = () => {
    const [registerInput, setRegisterInput] = useState<RegisterFormInput>({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [registerIsMake, setRegisterIsMake] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrorMessages({});

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(registerInput.email)) {
            setErrorMessages({
                email: "L'email n'est pas valide",
            });
            return;
        }

        if (registerInput.password !== registerInput.passwordConfirm) {
            setErrorMessages({
                passwordConfirm: "Les mots de passe ne correspondent pas",
            });
            return;
        }

        setIsSubmitting(true);

        const data = {
            email: registerInput.email,
            password: registerInput.password
        };
        console.log(data);
        let response: any;
        try {
            response = await post('/auth/register', data);
            console.log(response);
            if (response.status === 200) {
                setRegisterIsMake(true);
            } else {
                if ((response.response === "Error: Email is already in use!")) {
                    setErrorMessages({
                        email: "L'email est déja utilisé",
                    });
                } else if (response.response.password === "Mot de passe invalide") {
                    setErrorMessages({
                        passwordConfirm: "Le mot de passe doit avoir : une majsucule, un chiffre, et un caractère spéciale",
                    });
                }
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {registerIsMake ? (
                <div className={styles.inputContainer}>
                    <h3>Inscription réalisée avec succès</h3>
                </div>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <p className={styles.formTitle}>Créez votre compte</p>

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

                    <div className={styles.inputContainer}>
                        <input
                            placeholder="Confirmation du mot de passe"
                            type="password"
                            name="passwordConfirm"
                            value={registerInput.passwordConfirm}
                            onChange={handleInputChange}
                        />
                        {errorMessages.passwordConfirm && (
                            <div className={styles.error}>{errorMessages.passwordConfirm}</div>
                        )}
                    </div>

                    {/* Affichage des erreurs générales */}
                    {errorMessages.general && <div className={styles.error}>{errorMessages.general}</div>}

                    {/* Bouton d'envoi */}
                    <button className={styles.submit} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Enregistrement...' : 'Inscrivez-vous'}
                    </button>
                </form>
            )}
        </>
    );
};

export default RegisterForm;

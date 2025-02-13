import {FC, useState} from 'react';
import styles from "../homeContent/homeContent.module.css"
import {useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import LoginForm from "../loginAndRegister/LoginForm";
import RegisterForm from "../loginAndRegister/RegisterForm";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";



const HomeContent: FC<{}> = ({}) => {
    const [loginWindowIsVisible, setLoginWindowIsVisible] = useState<boolean>(false)
    const navigation = useNavigate()

    const goToProductsPage = () => {
        navigation("/Products")
    }

    const handleLoginWindowVisble = () => {
        setLoginWindowIsVisible(!loginWindowIsVisible)
    }

    return (
        <>
            <div className={styles.background}></div>
            <section className={styles.content}>
                {loginWindowIsVisible ? (
                    <div className={styles.loginAndRegisterWindow}>
                        <IconButton aria-label="close the login and register" onClick={handleLoginWindowVisble}>
                            <CloseIcon sx={{color: 'white'}}/>
                        </IconButton>
                        <div className={styles.loginAndRegisterContainer}>
                            <LoginForm/>
                            <RegisterForm/>
                        </div>
                    </div>
                )
                    :(
                    <>
                        <div className={styles.contentHeader}>
                            <h1>Manga <br/> Box</h1>
                            <button onClick={handleLoginWindowVisble}>Connexion</button>
                        </div>
                        <div className={styles.contentMain}>
                            <h2>Bienvenue !</h2>
                            <button onClick={goToProductsPage}>Commencez votre commande</button>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default HomeContent;

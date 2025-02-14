import React, {FC, useContext, useState} from 'react';
import {IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './cartResume.module.css';
import {CartContext} from "../../../context/CartContext";
import {MangaType} from "../../../MangaType";
import {post, put} from "../../../api/api";
import {getToken} from "../../../utilis/storage";
import {useNavigate} from "react-router-dom";

const OrderSummary: FC = () => {
    const navigate = useNavigate();
    const userToken = getToken();
    const cartContext=  useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [orderIsMake, setOrderIsMake] = useState<boolean>(false);

    const calculateTotal = () => {
        if (cartContext){
            const total = cartContext.mangaContent.reduce((sum, item) => sum + item.price * cartContext?.mangaContent.filter((manga) => manga.title === item.title).length, 0);
            setTotalPrice(total);
        }
    };

    const handleRemoveItem = (manga: MangaType) => {
        if (cartContext) {
            const updatedCart = cartContext?.mangaContent.filter(item => item.id !== manga.id);
            cartContext?.setMangaContent(updatedCart);
            calculateTotal();
        }
    };

    const handleButtonAddClick = (manga: MangaType) => {
        if(cartContext){
            if (manga.stock - cartContext.mangaContent.filter((item) => item.title === manga.title).length > 0){
                cartContext?.setMangaContent(prevState => ([...prevState, manga]))
            }
        }
    }

    const handleButtonRemoveClick = (manga: MangaType) => {
        if (cartContext?.mangaContent) {
            const indexSearch = cartContext.mangaContent.indexOf(manga);
            if (indexSearch !== -1) {
                const newMangaContent = cartContext.mangaContent.filter((item, index) => index !== indexSearch);

                cartContext.setMangaContent(newMangaContent);
            }
        }
    }

    const buyOrder = async () => {
        let response:any
        let response2: any
        response = await post(`/order`, {userId:0,}, {headers: {Authorization: `Bearer ${userToken}`}})
        console.log(response)
        if(cartContext){
            cartContext.mangaContent.map((manga) =>{
                let updateStock = manga.stock - cartContext?.mangaContent.filter((item) => item.title === manga.title).length;
                if(updateStock <= 0){
                    updateStock = 0;
                }
                const data = {
                    id: manga.id,
                    title: manga.title,
                    collection: manga.collection,
                    overview: manga.overview,
                    price: manga.price,
                    author: manga.author,
                    releaseDate: manga.releaseDate,
                    coverImage: manga.coverImage,
                    stock: updateStock,
                    publisher: "Kana",
                    genres: manga.genres,
                }
                try {
                    response = put(`/product/buy/${manga.id}`, data)
                    response2 = post(`/productOrder`, {product_id: manga.id, order_id: 4, quantity: cartContext?.mangaContent.filter((item) => item.title === manga.title).length}, {headers: {Authorization: `Bearer ${userToken}`}})
                    console.log(response);
                    console.log(response2);
                } catch (error) {
                    console.error('Erreur lors de la connexion:', error);
                }
            })


            setOrderIsMake(true)
            cartContext.setMangaContent([])
            navigate("/Products")
        }
    }

    React.useEffect(() => {
        calculateTotal();
    }, [cartContext]);

    return (
        <div className={styles.orderSummaryContainer}>
            <h2>Récapitulatif de la commande</h2>
            <div className={styles.cartItems}>
                {cartContext?.mangaContent.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    cartContext?.mangaContent.map(manga => (
                        <div key={manga.id} className={styles.cartItem}>
                            <img src={manga.coverImage} alt={manga.title} className={styles.cartItemImage}/>
                            <div className={styles.cartItemDetails}>
                                <h3>{manga.title}</h3>
                                <p>{manga.author}</p>
                                <p>{manga.price} €</p>
                                <div className={styles.quantityControls}>
                                    <IconButton onClick={() => handleButtonRemoveClick(manga)}
                                                sx={{color: 'white'}}
                                                disabled={cartContext?.mangaContent.filter((item) => item.title === manga.title).length <= 1}>
                                        <RemoveIcon/>
                                    </IconButton>
                                    <span>{cartContext?.mangaContent.filter((item) => item.title === manga.title).length}</span>
                                    <IconButton onClick={() => handleButtonAddClick(manga)} sx={{color: 'white'}}>
                                        <AddIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            <IconButton onClick={() => handleRemoveItem(manga)} className={styles.deleteButton}>
                                <DeleteIcon/>
                            </IconButton>
                        </div>
                    ))
                )}
            </div>
            {cartContext && cartContext?.mangaContent.length > 0 ? (
                <div className={styles.totalPrice}>
                    <h3>Total: {totalPrice.toFixed(2)} €</h3>
                </div>
            ):(
                <></>
            )}
            <button onClick={buyOrder}>Payer</button>
        </div>
    );
};

export default OrderSummary;

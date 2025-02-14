import {FC, useContext, useEffect} from 'react';
import {MangaType} from "../../../../../../MangaType";
import styles from "../../../productScreen.module.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {IconButton} from "@mui/material";
import {CartContext} from "../../../../../../context/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {paletteColor} from "../../../../../../_themes/paletteColor";

const CardProduct: FC<{manga:MangaType}> = ({manga}) => {
    const mangaContentContext = useContext(CartContext);

    const handleButtonAddClick = () => {
       mangaContentContext?.setMangaContent(prevState => ([...prevState, manga]))
    }

    const handleButtonRemoveClick = () => {
        if (mangaContentContext?.mangaContent) {
            const indexSearch = mangaContentContext.mangaContent.indexOf(manga);
            if (indexSearch !== -1) {
                const newMangaContent = mangaContentContext.mangaContent.filter((item, index) => index !== indexSearch);

                mangaContentContext.setMangaContent(newMangaContent);
            }
        }
    }

    return (
        <div className={styles.cardProduct}>
            <a className={styles.cardLink} href="#"><img src={manga.coverImage}/></a>
            <p className={styles.cardTitle}>{manga.title}</p>
            <p className={styles.cardAuthor}>{manga.author}</p>
            <div className={styles.cardContentShop}>
                {manga.stock > 0 ? (
                    <>
                        <span>{manga.price + "€"}</span>
                        {mangaContentContext?.mangaContent.indexOf(manga) === -1 ? (
                                <IconButton aria-label="add to shopping cart" sx={{fontSize: "32px"}}
                                            onClick={handleButtonAddClick}>
                                    <AddCircleOutlineIcon sx={{fontSize: "32px"}}/>
                                </IconButton>
                            )
                            :
                            (
                                <div className={styles.cardButtonContainer}>
                                    <button onClick={handleButtonRemoveClick}><RemoveIcon/></button>
                                    <label>{mangaContentContext?.mangaContent.filter((item) => item.title === manga.title).length}</label>
                                    <button onClick={handleButtonAddClick}><AddIcon/></button>
                                </div>
                            )}
                    </>
                ):(
                    <span style={{color: paletteColor.claret}}>plus en stock</span>
                )}
            </div>
        </div>
    );
};

export default CardProduct;

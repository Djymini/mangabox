import {FC} from 'react';
import {MangaType} from "../../../../../../MangaType";
import styles from "../../../productScreen.module.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {IconButton} from "@mui/material";

const CardProduct: FC<{manga:MangaType}> = ({manga}) => {
    return (
        <div className={styles.cardProduct}>
            <a className={styles.cardLink} href="#"><img src={manga.coverImage}/></a>
            <p className={styles.cardTitle}>{manga.title}</p>
            <p className={styles.cardAuthor}>{manga.author}</p>
            <div className={styles.cardContentShop}>
                <span>{manga.price + "€"}</span>
                <IconButton aria-label="add to shopping cart" sx={{fontSize: "32px"}}>
                    <AddCircleOutlineIcon sx={{fontSize: "32px"}}/>
                </IconButton>
            </div>
        </div>
    );
};

export default CardProduct;

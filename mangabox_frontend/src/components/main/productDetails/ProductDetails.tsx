import {FC, useEffect, useState} from "react";
import {MangaType} from "../../../MangaType";
import {get} from "../../../api/api";
import {useParams} from "react-router-dom";
import styles from "./productDetails.module.css"

const ProductDetail: FC<{}> = () => {
    const {id} = useParams();

    const [manga, setManga] = useState<MangaType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMangaDetails = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await get(`/product/${id}`);
            setManga(data);  // Mettre à jour l'état manga avec les données récupérées
        } catch (err) {
            setError("Erreur lors du chargement des détails du produit");
        } finally {
            setLoading(false);
        }
    };

    // Effect pour charger les données lorsque l'id change
    useEffect(() => {
        if (id) {
            fetchMangaDetails();
        }
    }, [id]);

    // Gestion de l'affichage pendant le chargement ou en cas d'erreur
    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!manga) {
        return <div>Manga non trouvé.</div>;
    }

    return (
        <section>
            <div className={styles.details}>
                <img src={manga.coverImage} alt={manga.title}/>
                <h2>{manga.title}</h2>
                <p className={styles.authors}>{manga.author}</p>
                <p className={styles.genres}>{`${manga.genres?.join(', ')}`}</p> {/* Assurez-vous que 'genre' est un tableau */}
                <div>
                    <h3>Résumé</h3>
                    <p className={styles.synopsis}>{manga.overview}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;

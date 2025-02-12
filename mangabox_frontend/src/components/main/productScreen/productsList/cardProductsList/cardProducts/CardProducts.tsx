import {FC} from 'react';
import {MangaType} from "../../../../../../MangaType";

const CardProducts: FC<{manga:MangaType}> = ({manga}) => {
    return (
        <div>
            <a><img src={manga.coverImage}/></a>
            <div className="card-info">
                <p className="text-title">{manga.title}</p>
                <p className="text-body">{manga.author}</p>
            </div>
            <div className="card-footer">
                <span className="text-title">{manga.price}</span>
                <div className="card-button"></div>
            </div>
        </div>
    );
};

export default CardProducts;

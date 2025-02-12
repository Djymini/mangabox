import {FC} from 'react';

const SortSelector: FC<{}> = ({}) => {
    return (
        <div>
            <select name="pets" id="pet-select">
                <option value="">--Tri par défaut--</option>
                <option value="dog">Tri par prix croissant</option>
                <option value="cat">Tri par prix décroissant</option>
                <option value="hamster">Tri alphabétique croissant</option>
                <option value="parrot">Tri alphabétique décroissant</option>
                <option value="spider">Tri par date de sortie</option>
            </select>
        </div>
    );
};

export default SortSelector;

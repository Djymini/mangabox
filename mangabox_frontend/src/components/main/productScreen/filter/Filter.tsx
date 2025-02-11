import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Filter: FC<{searchResult: string}> = ({searchResult}) => {
    return (
        <div>
            <div>
                <h4>Recherche</h4>
                <div>
                   <p>{searchResult}</p>
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Filter;

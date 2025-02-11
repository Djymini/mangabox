import {FC} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const FilterSection: FC<{children:any, titleSection:string}> = ({children, titleSection}) => {
    return (
        <div>
            <h4>{titleSection}</h4>
            <div>
                {children}
            </div>
        </div>
    );
};

export default FilterSection;

import {FC, useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const CheckBoxItem: FC<{value: number, itemName: string}> = ({value, itemName}) => {
    const [checked, setChecked] = useState<number[]>([]);



    const handleToggle = (toggleValue: number) => () => {
        const currentIndex = checked.indexOf(toggleValue);
        const newChecked = checked;
        console.log(currentIndex)

        if (currentIndex === -1) {
            console.log(newChecked)
            newChecked.push(toggleValue);
            console.log(newChecked)
        } else {
            newChecked.splice(currentIndex, 1);
        }
        console.log(checked)
        setChecked(newChecked);
    };


    return (
        <>
            <ListItem key={value}>
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.includes(value)}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{'aria-labelledby': `checkbox-list-label-${value}`}}
                        />
                    </ListItemIcon>
                    <p>{itemName}</p>
                </ListItemButton>
            </ListItem>
        </>
    );
};

export default CheckBoxItem;

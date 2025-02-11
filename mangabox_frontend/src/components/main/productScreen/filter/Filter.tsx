import {FC, useContext, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {SearchContext} from "../../../../context/SearchContext";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Checkbox from "@mui/material/Checkbox";
import CheckBoxItem from "./CheckBoxItem/CheckBoxItem";
import {mangaGenres} from "../../../../_data/mangaGenre";

const Filter: FC<{}> = ({}) => {
    const searchContext = useContext(SearchContext);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div>
                <h4>Recherche</h4>
                <div>
                   <p>{searchContext?.search}</p>
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                </div>

                <h4>Genre</h4>
                <div>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="Inbox"/>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4}}>
                                {mangaGenres.map((item, index) => (
                                    <CheckBoxItem key={index} value={index} itemName={item}/>
                                ))}
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Filter;

import {FC} from 'react';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, {badgeClasses} from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartBadge = styled(Badge)`
        & .${badgeClasses.badge} {
            background-color: var(--aliceBlue);
            color: var(--darkGreen);
            top: -12px;
            right: -6px;
        }
    `;

const BadgeCart: FC<{value:number}> = ({value}) => {


    return (
        <>
            <ShoppingCartIcon sx={{fontSize: "24px"}}/>
            <CartBadge badgeContent={value} overlap="circular"/>
        </>
    );
};

export default BadgeCart;

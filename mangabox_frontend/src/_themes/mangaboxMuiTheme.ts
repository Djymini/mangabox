import {createTheme} from '@mui/material/styles';

const mangaboxMuiTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 950,
            lg: 1004,
            xl: 1440,
        },
    },
});

export default mangaboxMuiTheme;
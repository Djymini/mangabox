import {FC} from 'react';
import {Box} from "@mui/material";
import {Helmet} from "react-helmet-async";

const Page: FC<{ children: any, title: string }> = ({children, title}) => {
    return (
        <Box>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </Box>
    );
};

export default Page;

import {FC} from 'react';
import {Box} from "@mui/material";
import {Helmet} from "react-helmet-async";

const Page: FC<{ children: any, title: string }> = ({children, title}) => {
    return (
        <main>
            <Helmet>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
            </Helmet>
            {children}
        </main>
    );
};

export default Page;

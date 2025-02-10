import {FC} from 'react';
import Page from "../../components/layout/Pages";
import HomeContent from "../../components/main/homeContent/HomeContent";
import HomeTuto from "../../components/main/homeTuto/HomeTuto";

const Home: FC<{}> = ({}) => {
    return (
        <Page title={"Accueil"}>
            <HomeContent/>
            <HomeTuto/>
        </Page>
    );
};

export default Home;

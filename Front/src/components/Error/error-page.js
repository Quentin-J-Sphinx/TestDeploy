import { useRouteError } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import BackChevron from "../BackChevron"
import './style.scss'
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <div id="error-page" className="error-page" >
                <BackChevron/>
                <h1>Oups!</h1>
                <p>Désolé, une erreur inattendue s'est produite</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer />
        </>
    );
}
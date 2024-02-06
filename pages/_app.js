import "../styles/globals.css";

// INTERNAL IMPORT
import { Navbar } from "../components/componentsindex";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

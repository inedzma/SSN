import {Pocetna} from "../pages/Pocetna";
import {Header} from "./Header";
import {Footer} from "./Footer";

const Layout = ({children, onSearch}) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header onSearch={onSearch} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
};

export default Layout;
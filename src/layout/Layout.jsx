import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import { ToastContainer } from 'react-toastify';

const LayOut = (props) => {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    return (
        <>
            <Nav />
            <ToastContainer />
            <main>{props.children}</main>
            <div onClick={() => scrollToTop()} className="bg-white text-black invisible md:visible fixed bottom-0 right-0 m-5 py-3 px-5 cursor-pointer rounded "><i className="fa-solid fa-angles-up"></i></div>
            <Footer />
        </>
    );
}

export default LayOut;
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Layout = (props) => {
  return (
    <>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

import Navbar from "../navbar";
import Footer from "../footer";

const PageLayout = ({children}) => {
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}

export default PageLayout;

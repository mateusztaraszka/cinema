import Navbar from "../navbar";
import Footer from "../footer";
import {useEffect} from "react";
import {snow} from "../../functions/snow";

const PageLayout = ({children}) => {

  useEffect(() => {
    snow()
  }, [])

  return (
    <div id={'page'} className={'bg-grey flex justify-between flex-col min-h-screen relative overflow-hidden'}>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}

export default PageLayout;

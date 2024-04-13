import NavCom from "./components/NavCom";
import HomeCom from "./components/HomeCom";
import GaleryCom from "./components/GaleryCom";
import ServiceCom from "./components/ServiceCom";
import CorosualCom from "./components/CorosualCom";
import FaqCom from "./components/FaqCom";
import FooterCom from "./components/FooterCom";
function App() {
  return (
    <div>
      <HomeCom />

     <NavCom />
     <GaleryCom />
     <ServiceCom />
     {/* <CorosualCom/> */}
     <FaqCom />

     <FooterCom /> 
    </div>
  );
}

export default App;

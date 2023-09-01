import { AppProvider } from "@/context/AppContext";
import "../GlobalStyles.css";
import MainContainer from "../components/MainContainer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
        
    <AppProvider>

      <MainContainer>
        
        <Component {...pageProps} />
        <ToastContainer
          autoClose={2000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        
      </MainContainer>
      </AppProvider>
  );
}

export default MyApp;

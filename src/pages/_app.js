import "../GlobalStyles.css";
import MainContainer from "../components/MainContainer";
import { SessionProvider } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <MainContainer>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={2000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
      </MainContainer>
    </SessionProvider>
  );
}

export default MyApp;

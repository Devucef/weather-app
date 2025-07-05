import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { ThemeProvider } from "@/context/ThemeContext";
import Start from "@/components/blocs/Start";
import ModalContainer from "@/components/UI/Modal/ModalContainer";
import Container from "@/components/blocs/Container";
import LeftSide from "@/components/blocs/LeftSide";
import RightSide from "@/components/blocs/RightSide";
import Footer from "@/components/Blocs/Footer";


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Start />
        <ModalContainer />
        <Container>
          <LeftSide />
          <RightSide />
        </Container>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

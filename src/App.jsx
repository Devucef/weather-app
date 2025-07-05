import { Provider } from "react-redux";
import { store } from "@/app/store/Store.js";
import { ThemeProvider } from "@/context/ThemeContext";
import Start from "@/components/blocs/Start";
import ModalContainer from "@/components/ui/modal/ModalContainer";
import Container from "@/components/blocs/Container";
import LeftSide from "@/components/blocs/LeftSide";
import RightSide from "@/components/blocs/RightSide";
import Footer from "@/components/blocs/Footer";


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

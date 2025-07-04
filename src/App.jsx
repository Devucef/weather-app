import Container from "./Components/Blocs/Container";
import LeftSide from "./Components/Blocs/LeftSide";
import RightSide from "./Components/Blocs/RightSide";
import { ThemeProvider } from "./Context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./App/Store/Store";
import Footer from "./Components/Blocs/Footer";
import Start from "./Components/Blocs/Start";
import ModalContainer from "./Components/UI/Modal/ModalContainer";

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Start />
        <ModalContainer/>
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

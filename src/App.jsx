import { Provider } from "react-redux";
import { store } from "./app/store/Store";
import { ThemeProvider } from "./context/ThemeContext";
import Start from "./Components/Blocs/Start";
import ModalContainer from "./Components/UI/Modal/ModalContainer";
import Container from "./components/blocs/Container";
import LeftSide from "./components/blocs/LeftSide";
import RightSide from "./components/blocs/RightSide";
import Footer from "./Components/Blocs/Footer";


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

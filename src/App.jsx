import React from "react";
import Container from "./Components/Blocs/Container";
import LeftSide from "./Components/Blocs/LeftSide";
import RightSide from "./Components/Blocs/RightSide";
import { ThemeProvider } from "./Context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./App/Store/Store";
import Footer from "./Components/Blocs/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Container>
          <LeftSide />
          <RightSide />
        </Container>
        <Footer/>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

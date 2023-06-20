import "./styled-app.js";
import RouterComponent from "./router";
import { GlobalStyle } from "./styled-app";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterComponent />
      <Footer />
    </>
  );
}

export default App;

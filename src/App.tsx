import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;

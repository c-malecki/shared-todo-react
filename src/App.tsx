import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/pages-index";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

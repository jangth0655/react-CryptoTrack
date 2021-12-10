import { HashRouter, Route, Routes } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

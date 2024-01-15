import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import { BASENAME } from "./constant";
import Basket from "./pages/Basket";
import CartProvider from "./providers/CartProvider/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={BASENAME}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

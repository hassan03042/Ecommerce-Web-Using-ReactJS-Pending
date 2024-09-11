// App.js
import { useEffect, useState } from "react";
import { getAllProducts } from "../utils/products";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartItems, setShowCartItems] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const itemsInCart = JSON.parse(localStorage.getItem("cart"));
    if (itemsInCart) {
      setCartItems([...itemsInCart]);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addCartItems = (item) => {
    const items = [...cartItems];
    const itemInd = items.findIndex((data) => data.id === item.id);
    if (itemInd === -1) {
      items.push(item);
      setCartItems([...items]);
    }
  };

  const iterateOn = showCartItems ? cartItems : products;

  return (
    <div className="container mx-auto my-10">
      <div className="fixed w-full bg-white h-[60px] top-0 flex items-center justify-center gap-10">
        <h1 className="text-center text-3xl font-semibold">Shopping List</h1>
        <h1
          onClick={() => setShowCartItems(!showCartItems)}
          className="text-center text-2xl font-semibold underline"
        >
          {showCartItems
            ? "Show All Products"
            : `Cart Items ${cartItems.length}`}
        </h1>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {iterateOn.map((item) => {
              const isAddedToCart =
                cartItems.findIndex((product) => product.id === item.id) !== -1;
              return (
                <Card
                  addToCart={() => addCartItems(item)}
                  key={item.id}
                  item={item}
                  showRemoveFromCart={showCartItems === true}
                  isAddedToCart={isAddedToCart}
                  removeFromCart={() => {
                    const allOtherItem = cartItems.filter(
                      (product) => product.id !== item.id
                    );
                    setCartItems([...allOtherItem]);
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

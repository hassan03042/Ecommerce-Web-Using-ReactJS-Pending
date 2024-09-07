// App.js
import { useEffect, useState } from "react";
import "./App.css";
import { getAllProducts } from "../utils/products";
import Card from "./components/Card";
import { data } from "autoprefixer";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
    console.log("cartitems=>", cartItems);
  }, [cartItems]);

  const addCartItems = (item) => {
    const items = [...cartItems];
    const itemInd = items.findIndex((data) => data.id === item.id);
    if (itemInd == -1) {
       items.push(item)
    setCartItems([...items]);
    }
   
  };

  return (
    <div className="container mx-auto my-10">
      <div className="fixed w-full bg-white h-[60px] top-0 flex items-center justify-center gap-10">
        <h1 className="text-center text-3xl font-semibold">Shopping List</h1>
        <h1 className="text-center text-2xl font-semibold underline">
          Cart Items {cartItems.length}
        </h1>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => (
              <Card
                addToCart={() => addCartItems(data)}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

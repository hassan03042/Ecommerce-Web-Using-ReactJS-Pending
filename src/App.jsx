import { useEffect, useState } from "react";
import "./App.css";
import { getAllProducts } from "../utils/products";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchproducts();
  }, []);

  const fetchproducts = async () => {
    const products = await getAllProducts();
    setProducts([...products]);
    console.log(products);
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl font-semibold">Shopping List</h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
   {
    products.map((data)=>{
      return <Card key={data.id} item={data} />
    })
   }
     
    </div>
  </div>
</section>


    </div>
  );
}

export default App;

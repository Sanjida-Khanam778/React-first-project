import "./App.css";
import AllProducts from "./Components/AllProducts/AllProducts";
import Navbar from "./Components/Navbar/Navbar";
import CartContainer from "./Components/CartContainer/CartContainer";
import { useState } from "react";

function App() {
  const [isActice, setIsActive] = useState({
    cart: true,
    staus: "cart",
  });

  const [selecteProduct, setSelectedProduct] = useState([]);

  const [price, setPrice] = useState(0);

  const handlePrice = (allProducts) => {
    setPrice(allProducts.price + price);
  };
  // console.log(price)

  const handleDelete = (id) => {
    // console.log(id)
    const afterDelete = selecteProduct.filter((p) => p.id !== id);
    setSelectedProduct(afterDelete);
    const deletedProduct = selecteProduct.find(p=> p.id ==id)
    setPrice(price - deletedProduct.price)
  };

  const handleSelectedProduct = (allProducts) => {
    const isExist = selecteProduct.find((p) => p.id === allProducts.id);
    if (isExist) {
      alert("age theke ache");
    } else {
      // console.log("nai")
      setSelectedProduct([...selecteProduct, allProducts]);
      handlePrice(allProducts);
    }
  };
  // console.log(selecteProduct)

  const handleIsActive = (status) => {
    // console.log(status)
    if (status == "cart") {
      setIsActive({
        cart: true,
        staus: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        staus: "about",
      });
    }
  };
  // console.log(isActice)

  return (
    <>
      <Navbar price={price} selecteProduct={selecteProduct}></Navbar>
      <div className="flex max-w-6xl mx-auto justify-around mt-5">
        <AllProducts
          handleSelectedProduct={handleSelectedProduct}
        ></AllProducts>
        <CartContainer
          isActice={isActice}
          selecteProduct={selecteProduct}
          handleIsActive={handleIsActive}
          handleDelete={handleDelete}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;

import Cart from "./Cart/Cart";
import About from "./About/About";
import PropTypes from "prop-types";

const CartContainer = ({ handleIsActive, isActice, selecteProduct, handleDelete }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold">CartContainer.jsx</h1>
      <div className="flex justify-between text-2xl mt-8">
        <div
          onClick={() => handleIsActive("cart")}
          className={`${
            isActice.cart
              ? "bg-blue-700 text-white px-8 py-4 rounded-xl cursor-pointer"
              : "cursor-pointer px-8 py-4"
          }`}
        >
          Cart
        </div>
        <div
          onClick={() => handleIsActive("about")}
          className={`${
            isActice.cart
              ? "cursor-pointer px-8 py-4"
              : "bg-blue-700 text-white px-8 py-4 rounded-xl cursor-pointer"
          }`}
        >
          About
        </div>
      </div>
      {isActice.cart ? <Cart handleDelete={handleDelete} selecteProduct={selecteProduct}></Cart> : <About></About>}
    </div>
  );
};

CartContainer.propTypes = {
  handleIsActive: PropTypes.func,
  isActice: PropTypes.object,
  selecteProduct: PropTypes.array,
  handleDelete: PropTypes.func
};

export default CartContainer;

import PropTypes from "prop-types";

const Cart = ({ selecteProduct, handleDelete }) => {
  //   console.log(selecteProduct);
  //   const {image, name} = selecteProduct;
  return (
    <div>
      {selecteProduct.map((p) => (
        <div className="flex items-center gap-4 mb-4" key={p.id}>
          <img className="w-11" src={p.image} alt="" />
          <p>{p.name}</p>
          <button onClick={()=> handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  selecteProduct: PropTypes.array,
};

export default Cart;

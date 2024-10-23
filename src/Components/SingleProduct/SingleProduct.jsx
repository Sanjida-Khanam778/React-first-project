import PropTypes from "prop-types";

const SingleProduct = ({ allProducts, handleSelectedProduct }) => {
  // const {name, description, price} ={allProducts}
//   console.log(allProducts);
  return (
    <div className="space-y-4 text-center w-80 mb-8 border rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.5)] m-1 p-2">
      <img className="w-full" src={allProducts.image} alt="" />
      <h1>{allProducts.name}</h1>
      <p>{allProducts.description}</p>
      <div className="space-y-4">
        <p>${allProducts.price}</p>
        <p>{allProducts.isFeature?"category":"not category"}</p>
      </div>
      <button onClick={()=>handleSelectedProduct(allProducts)} className="p-5 border border-black">Add to cart</button>
    </div>
  );
};

SingleProduct.propTypes = {
    allProducts: PropTypes.object,
    handleSelectedProduct: PropTypes.func
}

export default SingleProduct;

const Navbar = ({selecteProduct, price}) => {
    return (
        <div className="p-5 flex items-center justify-between text-2xl max-w-6xl mx-auto">
            <div>
                <h1 className="">Logo</h1>
            </div>
            <div className="space-x-4">
                <a href="">Home</a>
                <a href="">Product</a>   
                <a href="">Cart No{selecteProduct.length}</a>
                <a href="">$ {price}</a>
            </div>
        </div>
    );
};

export default Navbar;
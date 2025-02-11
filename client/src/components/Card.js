import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    navigate("/cart");
  };

  return (
    <div className='product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl duration-300'>
      <div className='product-img'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-content flex flex-col gap-2 pb-5 px-5'>
        <span className='category-tag text-xs font-semibold text-teal-500 uppercase tracking-widest'>
          {product.category}
        </span>
        <h3 className='product-name text-xl font-medium h-[5.25rem]'>
          {product.name}
        </h3>
        <p className='text-gray-500 h-[6rem]'>{product.description}</p>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-medium text-rose-500'>
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product.id)}
            className='bg-violet-500 text-violet-50 font-medium py-3 px-8 uppercase rounded-md hover:bg-orange-500 hover:text-orange-50 shadow-lg shadow-violet-300 hover:shadow-orange-300 duration-300'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

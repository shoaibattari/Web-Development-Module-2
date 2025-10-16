import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 animate-pulse scale-90"
            >
              <div className="h-48 w-full bg-gray-300 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-5 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 hover:bg-gray-200 hover:shadow-lg hover:scale-105 scale-90 transition-all duration-300 "
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;

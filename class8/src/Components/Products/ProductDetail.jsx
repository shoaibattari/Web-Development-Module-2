import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <p className="max-w-4xl text-center h-96 mx-auto bg-gray-50 animate-pulse p-4 border rounded-lg shadow-md">
        Loading product details...
      </p>
    );
  if (!product)
    return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto bg-gray-200 p-4 border rounded-lg shadow-md mt-6">
      <Link
        to="/products"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to All Products
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/3 object-contain"
        />
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="text-sm text-gray-500">
            Category:{" "}
            <span className="text-black text-base"> {product.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="m-4">
      {products.map((p) => (
        <div key={p._id} className="card w-50 mb-3">
          <img src={p.image} className="card-img-top" />

          <div className="card-body">
            <h5>{p.name}</h5>
            <p>{p.description}</p>
            <p>Qty: {p.quantity}</p>

            <button
              className="btn btn-success me-2"
              onClick={() => navigate(`/edit-product/${p._id}`)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(p._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

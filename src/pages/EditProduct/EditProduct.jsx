import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    quantity: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/products/${id}`, form);

    alert("Updated Successfully");

    navigate("/product-list");
  };

  return (
    <div className="w-50 m-4">
      <form onSubmit={handleSubmit}>
        <h2>Edit Product</h2>

        <input
          className="form-control mb-2"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="description"
          value={form.description || ""}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="image"
          value={form.image || ""}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="quantity"
          value={form.quantity || ""}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;

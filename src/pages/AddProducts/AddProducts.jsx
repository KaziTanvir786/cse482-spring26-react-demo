import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageInput = (e) => {
    const img = e.target.files[0];
    if (img) {
      const reader = new FileReader();
      reader.onload = function (loadEvent) {
        const imageDataUrl = loadEvent.target.result;
        setForm((prevForm) => ({ ...prevForm, image: imageDataUrl }));
      };
      reader.readAsDataURL(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/products", form);

    alert("Product Added");
  };

  return (
    <div className="w-50 m-4">
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          className="form-control mb-2"
          name="image"
          placeholder="Image"
          id="image-input"
          onChange={handleImageInput}
        />
        <input
          type="number"
          className="form-control mb-2"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;

"use client";

import axios from "axios";
import { useState } from "react";

export default function FormTecnologia() {
  const [formdata, setFormdata] = useState({
    nombre: "",
    nivel: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/tecnologia", formdata);
      console.log("Registro agregado correctamente");
    } catch (error) {
      console.log("Error al intentar agregar una nueva foto: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="titulo"
        >
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="nombre"
          placeholder="url de imagen"
          value={formdata.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="titulo"
        >
          Nivel
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="nivel"
          placeholder="nivel"
          value={formdata.nivel}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="titulo"
        >
          Url de la imagen
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="imageUrl"
          placeholder="url de imagen"
          value={formdata.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function FormDesarrollo() {
  const [tecnologias, setTecnologias] = useState([]);
  const [formdata, setFormdata] = useState({
    titulo: "",
    descripcion: "",
    imageUrl: "",
    githubUrl: "",
    demoUrl: "",
    tecnologias: [],
  });

  async function loadTecnologia() {
    try {
      const res = await axios.get("/api/tecnologia");
      setTecnologias(res.data); // Supongamos que los datos tienen { id, nombre }
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  useEffect(() => {
    loadTecnologia();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormdata((prevData) => {
        const updateTecnologias = checked
          ? [...prevData.tecnologias, parseInt(name)]
          : prevData.tecnologias.filter((tec) => tec != parseInt(name));
        return { ...prevData, tecnologias: updateTecnologias };
      });
    } else {
      setFormdata((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/desarrollo", formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="titulo"
          placeholder="titulo"
          value={formdata.titulo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="descripcion"
          placeholder="descripcion"
          value={formdata.descripcion}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="imageUrl"
          placeholder="URL de imagen"
          value={formdata.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="githubUrl"
          placeholder="URL de github"
          value={formdata.githubUrl}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="demoUrl"
          placeholder="URL de demostracion"
          value={formdata.demoUrl}
          onChange={handleChange}
        />
      </div>
      <fieldset className="mb-4">
        <legend className="block text-gray-700 text-sm font-bold mb-2">
          Elije las tecnologías que usaste:
        </legend>

        {tecnologias.map((tecnologia) => (
          <div key={tecnologia.id} className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id={tecnologia.id}
              name={tecnologia.id.toString()}
              onChange={handleChange}
            />
            <label className="text-gray-700" htmlFor={tecnologia.id}>
              {tecnologia.nombre}
            </label>
          </div>
        ))}
      </fieldset>
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

"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function FormDisenos() {
  const [tecnologias, setTecnologias] = useState([]);
  const [formdata, setFormdata] = useState({
    titulo: "",
    descripcion: "",
    imageUrl: "",
    behanceUrl: "",
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
      const response = await axios.post("/api/diseno", formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        placeholder="titulo"
        value={formdata.titulo}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="descripcion"
        value={formdata.descripcion}
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="imageUrl"
        placeholder="url de imagen"
        value={formdata.imageUrl}
        onChange={handleChange}
      />
      <input
        type="text"
        name="behanceUrl"
        placeholder="url de behance"
        value={formdata.behanceUrl}
        onChange={handleChange}
      />
      <fieldset>
        <legend>Elije las tecnologias que usaste:</legend>
        {tecnologias.map((tecnologia) => (
          <div key={tecnologia.id}>
            <input
              type="checkbox"
              id={tecnologia.id}
              name={tecnologia.id.toString()}
              onChange={handleChange}
            />
            <label htmlFor={tecnologia.id}>{tecnologia.nombre}</label>
          </div>
        ))}
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  );
}

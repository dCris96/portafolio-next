"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function TableDesarrollo() {
  const [desarrollos, setDesarrollos] = useState([]);

  async function loadDesarrollos() {
    try {
      const res = await axios.get("/api/desarrollo");
      setDesarrollos(res.data);
    } catch (error) {
      console.log("error al cargar los datos: ", error);
    }
  }

  useEffect(() => {
    loadDesarrollos();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-blue-500">
                <tr>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    titulo
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    descripcion
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    imagen
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    github
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    demostracion
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    tecnologias
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {desarrollos.map((desarrollo) => (
                  <tr key={desarrollo.id} className="group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {desarrollo.titulo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {desarrollo.descripcion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {desarrollo.imageUrl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {desarrollo.githubUrl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {desarrollo.demoUrl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Object.values(desarrollo.tecnologias).map(
                        (tecnologia) => (
                          <div key={tecnologia.id}>{tecnologia.nombre}</div>
                        )
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">esperando</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

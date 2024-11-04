import { NextResponse } from "next/server";
import { myConexion } from "@/libs/mysql";

export async function GET() {
  try {
    const [result] = await myConexion.query(`
        SELECT 
            d.id, 
            d.titulo, 
            d.descripcion, 
            d.imageUrl, 
            d.githubUrl, 
            d.demoUrl,
            t.id AS tecnologiaId,
            t.nombre AS tecnologiaNombre,
            t.nivel AS tecnologiaNivel,
            t.imageUrl AS tecnologiaImageUrl
        FROM 
            desarrollo d
        LEFT JOIN 
            desarrolloTecnologia dt ON d.id = dt.desarrolloId
        LEFT JOIN 
            tecnologia t ON dt.tecnologiaId = t.id
    `);

    const proyectos = result.reduce((result, row) => {
      if (!result[row.id]) {
        result[row.id] = {
          id: row.id,
          titulo: row.titulo,
          descripcion: row.descripcion,
          imageUrl: row.imageUrl,
          githubUrl: row.githubUrl,
          demoUrl: row.demoUrl,
          tecnologias: {},
        };
      }

      if (row.tecnologiaId) {
        result[row.id].tecnologias[`tec${row.tecnologiaId}`] = {
          id: row.tecnologiaId,
          nombre: row.tecnologiaNombre,
          nivel: row.tecnologiaNivel,
          imageUrl: row.tecnologiaImageUrl,
        };
      }

      return result;
    }, {});

    const response = Object.values(proyectos);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

export async function POST(request) {
  try {
    const { titulo, descripcion, imageUrl, githubUrl, demoUrl, tecnologias } =
      await request.json();

    const [result] = await myConexion.query(
      "INSERT INTO desarrollo (titulo, descripcion, imageUrl, githubUrl, demoUrl) VALUES (?,?,?,?,?)",
      [titulo, descripcion, imageUrl, githubUrl, demoUrl]
    );

    const desId = result.insertId;

    for (const tecId of tecnologias) {
      await myConexion.query(
        "INSERT INTO desarrollotecnologia (desarrolloId, tecnologiaId) values (?,?)",
        [desId, tecId]
      );
    }
    return NextResponse.json({
      id: result.insertId,
      titulo,
      descripcion,
      imageUrl,
      githubUrl,
      demoUrl,
      tecnologias,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

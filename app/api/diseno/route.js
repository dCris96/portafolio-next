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
            d.behanceUrl,
            t.id AS tecnologiaId,
            t.nombre AS tecnologiaNombre,
            t.nivel AS tecnologiaNivel,
            t.imageUrl AS tecnologiaImageUrl
        FROM 
            diseno d
        LEFT JOIN 
            disenoTecnologia dt ON d.id = dt.disenoId
        LEFT JOIN 
            tecnologia t ON dt.tecnologiaId = t.id
    `);

    const disenos = result.reduce((result, row) => {
      if (!result[row.id]) {
        result[row.id] = {
          id: row.id,
          titulo: row.titulo,
          descripcion: row.descripcion,
          imageUrl: row.imageUrl,
          behanceUrl: row.behanceUrl,
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

    const response = Object.values(disenos);
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
    const { titulo, descripcion, imageUrl, behanceUrl, tecnologias } =
      await request.json();

    const [result] = await myConexion.query(
      "INSERT INTO diseno (titulo, descripcion, imageUrl, behanceUrl) VALUES (?,?,?,?)",
      [titulo, descripcion, imageUrl, behanceUrl]
    );

    const disId = result.insertId;

    for (const tecId of tecnologias) {
      await myConexion.query(
        "INSERT INTO disenotecnologia (disenoId, tecnologiaId) values (?,?)",
        [disId, tecId]
      );
    }
    return NextResponse.json({
      id: result.insertId,
      titulo,
      descripcion,
      imageUrl,
      behanceUrl,
      tecnologias,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

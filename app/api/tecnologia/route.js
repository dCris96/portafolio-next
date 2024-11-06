import { myConexion } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [result] = await myConexion.query("SELECT * FROM tecnologia");

    const response = Object.values(result);
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
    const { nombre, nivel, imageUrl } = await request.json();

    const [result] = await myConexion.query(
      "INSERT INTO tecnologia (nombre, nivel, imageUrl) VALUES (?,?,?)",
      [nombre, nivel, imageUrl]
    );

    return NextResponse.json({
      id: result.insertId,
      nombre,
      nivel,
      imageUrl,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

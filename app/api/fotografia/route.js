import { myConexion } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [result] = await myConexion.query("SELECT * FROM fotografia");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

export async function POST(request) {
  try {
    const { imageUrl } = await request.json();

    const [result] = await myConexion.query(
      "INSERT INTO fotografia (imageUrl) VALUES (?)",
      [imageUrl]
    );

    return NextResponse.json({
      id: result.insertId,
      imageUrl,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

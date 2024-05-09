import { NextResponse } from "next/server";

const API_URL = process.env.API_URL;

// GET -----------------------------------------------------------------
export async function GET(
  req: Request,
  { params }: { params: { user_id: string } }
) {
  const userId = params.user_id;

  const URL = `${API_URL}/get_refferals/?user_id=${userId}`;

  try {
    const res = await fetch(URL, {
      cache: "no-cache",
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.log("Error Fetching data ", error);
  }
}

import { NextResponse } from "next/server";

const API_URL = process.env.API_URL;

// GET -----------------------------------------------------------------
export async function GET(
  req: Request,
  { params }: { params: { user_id: string } }
) {
  const userId = params.user_id;

  try {
    const res = await fetch(`${API_URL}/get_refferal_link/${userId}`);
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.log(
      "Error Fetching data LINK",
      error,
      "URL: ",
      `${API_URL}/get_refferal_link/${userId}`
    );
  }
}

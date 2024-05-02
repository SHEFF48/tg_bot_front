"use server";

const API_URL = process.env.API_URL;

async function getData(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log("get data", data);
  return Response.json(data);
}

export async function getRefferalLink(user_id: string) {
  if (!user_id) {
    throw new Error("user_id is not defined");
  }

  const res = await fetch(`/api/link/${user_id}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch data. RESPONSE: ${JSON.stringify(
        res
      )}, user_id: ${user_id}`
    );
  }

  const data = await res.json();
  console.log("Response data: ", data);
  return Response.json(data);
}

export async function getRefferals(user_id: string) {
  if (!user_id) {
    throw new Error("user_id is not defined");
  }

  const res = await fetch(`/api/get_refferal_link/${user_id}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch data. RESPONSE: ${JSON.stringify(
        res
      )}, user_id: ${user_id}`
    );
  }

  const data = await res.json();
  console.log("Response data: ", data);
  return data;
}

export async function getTransactionHistory(user_id: string) {
  if (!user_id) {
    throw new Error("user_id is not defined");
  }

  const res = await fetch(`/api/get_transaction_history/${user_id}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch data. RESPONSE: ${JSON.stringify(
        res
      )}, user_id: ${user_id}`
    );
  }

  const data = await res.json();
  console.log("Response data: ", data);
  return Response.json(data);
}

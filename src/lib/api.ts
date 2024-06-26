// const API_URL = process.env.API_URL;

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

  return Response.json(data);
}

export async function getRefferalLink(user_id: string | null) {
  if (!user_id) {
    throw new Error("user id is not defined");
  }

  const res = await fetch(`/api/link/${user_id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data.`);
  }

  const data = await res.json();

  return Response.json(data);
}

export async function getRefferals(user_id: string | null) {
  if (!user_id) {
    throw new Error("user id is not defined");
  }

  const res = await fetch(`/api/refferals/${user_id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data.`);
  }

  const data = await res.json();

  return Response.json(data);
}

export async function getTransactionHistory(user_id: string | null) {
  if (!user_id) {
    throw new Error("user_id is not defined");
  }

  const res = await fetch(`/api/user-data/${user_id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data. `);
  }

  const data = await res.json();

  return Response.json(data);
}

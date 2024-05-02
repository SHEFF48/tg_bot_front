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

// const getData = async (URL: string): Promise<string> => {
//   try {
//     const response = await fetch(`${URL}`, {
//       // next: { tags: ["messages"] },
//       cache: "no-cache",
//     });

//     const data = await response.json();
//     console.log("response:", response);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data`);
//     }

//     // const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

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
  return Response.json(data);
  // const URL = `/link/${user_id}`;
  // const res = await getData(URL);
  // const data = await res.json();
  // return Response.json(data);
}

export async function getRefferals(user_id: string) {
  const URL = `/api/get_refferal_link/${user_id}`;
  const res = await getData(URL);
  const data = await res.json();
  return Response.json(data);
}

export async function getTransactionHistory(user_id: string) {
  const URL = `/api/get_refferal_link/${user_id}`;
  const res = await getData(URL);
  const data = await res.json();
  return Response.json(data);
}

// export const getRefferalLink = async (user_id: string) => {
//   try {
//     const response = await getData(`${API_URL}/get_refferal_link/${user_id}`);
//     // const data = await response.json();
//     console.log("response:", response);
//     return true;
//   } catch (error) {
//     console.error("Error fetching data getRefferalLink:", error);
//   }
// };

// const getRefferals = (user_id: string) => {
//   try {
//     const response = getData(`${API_URL}/get_refferals/${user_id}`);
//   } catch (error) {
//     console.error("Error fetching data getRefferals:", error);
//   }
// };

// const getTransactionHistory = (user_id: string) => {
//   try {
//     const response = getData(`${API_URL}/get_transaction_history/${user_id}`);
//   } catch (error) {
//     console.error("Error fetching data getTransactionHistory:", error);
//   }
// };

const setUserId = () => {};

"use server";

const API_URL = process.env;

interface Window {
  Telegram: any; // You can specify a more specific type if available
}

const getData = async (URL: string): Promise<string> => {
  try {
    const response = await fetch(`${URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getRefferalLink = (user_id: string) => {
  try {
    const response = getData(`${API_URL}/get_refferal_link/${user_id}`);
  } catch (error) {
    console.error("Error fetching data getRefferalLink:", error);
  }
};

const getRefferals = (user_id: string) => {
  try {
    const response = getData(`${API_URL}/get_refferals/${user_id}`);
  } catch (error) {
    console.error("Error fetching data getRefferals:", error);
  }
};

const getTransactionHistory = (user_id: string) => {
  try {
    const response = getData(`${API_URL}/get_transaction_history/${user_id}`);
  } catch (error) {
    console.error("Error fetching data getTransactionHistory:", error);
  }
};

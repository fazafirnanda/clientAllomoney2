import axios from "axios";
const baseUrl = "https://alo-money-production.up.railway.app";

export const transaction = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/transaction`, {
      headers: {},
    });
  } catch (error) {}
};

export const categories = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/sources`, {
      headers: {},
    });
  } catch (error) {}
};

export const bank = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/bank`, {
      headers: {},
    });
  } catch (error) {}
};

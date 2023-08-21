import axios, { Method } from "axios";

type FetchDataProps = {
  method: Method;
  url: string;
  data?: any;
  headers?: any;
};

const fetchData = async ({
  method,
  url,
  data = null,
  headers = {},
}: FetchDataProps) => {
  try {
    const response = await axios({ method, url, data, headers });
    if (response.data.customMessage) {
      throw new Error(response.data.customMessage);
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};

export default fetchData;

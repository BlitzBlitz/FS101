import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(url);
      if (request.ok) {
        const data = request.json();
        setData(data);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

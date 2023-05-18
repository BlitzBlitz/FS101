import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const request = await fetch(url);
      if (request.ok) {
        const data = await request.json();
        setIsLoading(false);
        setData(data);
      }
    };
    fetchData();
  }, [url]);
  // return {data : data, isLoading : isLoading};
  return {data, isLoading};
};

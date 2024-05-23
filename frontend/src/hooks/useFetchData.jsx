import { useState, useEffect } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
        console.log("API Response:", result); // Log the entire response

        if (!res.ok) {
          throw new Error(result.message + " " + res.status);
        }

        setData(result); // Directly set the result as data
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;

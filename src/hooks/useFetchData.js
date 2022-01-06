import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [dataGet, setDataGet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendData(url);
  }, [url]);

  const sendData = (url, method, data) => {
    setLoading(true);
    axios({
      url: url,
      method: method,
      data: data,
    })
      .then(({ data }) => {
        setDataGet(data);
        setLoading(false);
      })
      .catch((e) => setError(e));
  };
  return [dataGet, sendData, error, loading];
};

export { useFetchData };

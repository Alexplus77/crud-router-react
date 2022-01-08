import { useEffect, useState } from "react";

const useFetchItemId = (url, id, setItem) => {
  const [dataItem, setItemData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${url}?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItemData(data);
        setItem(data);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return { dataItem, error, loading };
};
export { useFetchItemId };

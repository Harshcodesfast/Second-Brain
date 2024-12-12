import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useSrcontent(id: any) {
  const [contents, setContents] = useState([]);

  function refresh() {
    axios.get(`${BACKEND_URL}/api/v1/brain/${id}`).then((response) => {
      setContents(response.data.content);
    });
  }

  useEffect(() => {
    refresh();
    let interval = setInterval(() => {
      refresh();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { contents, refresh };
}

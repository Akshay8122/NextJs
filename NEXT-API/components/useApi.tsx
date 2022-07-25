import { useState, useEffect } from "react";
interface APidemo {
  isLoading: boolean;
  comments: { text: string; id: number }[];
  isError: boolean;
}

function useApi(url: RequestInfo | URL) {
  console.log(url);
  const [comment, setComment] = useState<APidemo>({
    isLoading: false,
    comments: [],
    isError: false,
  });
  const fetchComments = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("for data", data);
    setComment({ isLoading: false, comments: data, isError: false });
  };
  useEffect(() => {
    setComment({ isLoading: true, comments: [], isError: false });
    fetchComments();
  }, []);
  return {
    comment,
    fetchComments,
  };
}

export default useApi;

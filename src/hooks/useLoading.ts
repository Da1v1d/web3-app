import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setLoading] = useState(false);
  const handleChangeLoading = () => setLoading((prev) => !prev);
  return { isLoading, handleChangeLoading };
};

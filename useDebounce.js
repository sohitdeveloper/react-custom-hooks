// It will be a separate component
import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;


// In other component you can consume the hooks like this : 

import useDebounce from "./hooks/useDebounce";
const debouncedSearchValue = useDebounce(searchName, 1000);

const handleSearch = async () => {
  let searchText = debouncedSearchValue;
}

useEffect(() => {
    if (debouncedSearchValue !== null) {
      handleSearch();
    }
}, [debouncedSearchValue]);

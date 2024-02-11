import { createContext } from "react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const uiContext = createContext();

export const UiContext = ({ children }) => {
  const [perRow, setPerRow] = useLocalStorage("perRow", "2");
  const [itemsPerRow, setItemsPerRow] = useState("");
  const [pagination, setPagination] = useState({
    perPage: 8,
    page: 1,
    total: 0,
  });

  useEffect(() => {
    setItemsPerRow(perRow);
  }, [perRow]);

  return (
    <uiContext.Provider
      value={{
        itemsPerRow,
        setItemsPerRow: setPerRow,
        pagination,
        setPagination,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};

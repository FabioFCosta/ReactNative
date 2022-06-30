import React, { createContext, useState } from "react";
import { CategoriaType } from "../models/CategoriaType";

export const CategoriaContext = createContext({});

export const CategoriaProvider = ({ children }) => {
  const [categoria, setCategoria] = useState<CategoriaType[]>([]);

  return (
    <CategoriaContext.Provider value={{
      categoria,
      setCategoria
    }}>
      {children}
    </CategoriaContext.Provider>
  )
}

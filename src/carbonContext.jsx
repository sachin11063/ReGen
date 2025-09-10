import { createContext, useState } from "react";

// Create a context for the carbon footprint
export const CarbonContext = createContext();

// Provide the context to the components
export const CarbonProvider = ({ children }) => {
  const [totalCarbon, setTotalCarbon] = useState(null);

  return (
    <CarbonContext.Provider value={{ totalCarbon, setTotalCarbon }}>
      {children}
    </CarbonContext.Provider>
  );
};

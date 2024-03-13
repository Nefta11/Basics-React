import React, { createContext, useState, useContext } from "react";

// Crear un Contexto para los Estudiantes
const StudentContext = createContext();

// Crear un Proveedor de Estudiantes que maneje el estado de los estudiantes
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

// Crear un Hook personalizado para usar el Contexto de Estudiantes
export const useStudents = () => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
};

import React, { createContext, useState, useContext } from "react";
//El estado es un valor que el componente puede mantener, cambiar 
//y usar para renderizar su interfaz de usuario. 


// Crea un Contexto para los Estudiantes. Este será el medio por el cual los componentes de React podrán acceder y manipular el estado de los estudiantes.
const StudentContext = createContext();

// Crea un Proveedor de Estudiantes que maneje el estado de los estudiantes. Este componente envolverá a otros componentes que necesiten acceder al estado de los estudiantes.
export const StudentProvider = ({ children }) => {
  // Utiliza el hook useState para crear un estado para los estudiantes. Este estado inicialmente es un arreglo vacío.
  const [students, setStudents] = useState([]);

  // Retorna el Proveedor del Contexto de Estudiantes. Este proveedor tiene un valor que es un objeto con el estado de los estudiantes y la función para actualizar ese estado.
  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider> // Renderiza los componentes hijos dentro del Proveedor del Contexto de Estudiantes. Estos componentes hijos serán capaces de acceder al estado de los estudiantes.

  );
};

// Crea un Hook personalizado para usar el Contexto de Estudiantes. Este hook será utilizado por los componentes para acceder al estado de los estudiantes.
export const useStudents = () => {
  // Utiliza el hook useContext para acceder al Contexto de Estudiantes.
  const context = useContext(StudentContext);

  // Si el contexto es indefinido (es decir, si useStudents se utiliza fuera de un Proveedor de Estudiantes), lanza un error.
  if (context === undefined) {
    throw new Error("useStudents must be used within a StudentProvider");
  }

  // Retorna el contexto, que incluye el estado de los estudiantes y la función para actualizar ese estado.
  return context;
};

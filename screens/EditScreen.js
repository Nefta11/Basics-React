import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useStudents } from "./StudentContext";

const EditScreen = ({ route, navigation }) => {
  // Extrae el estudiante y el índice del objeto de parámetros de la ruta.
  const { student, index } = route.params;

  // Utiliza el hook personalizado useStudents para obtener el estado actual de los estudiantes y la función para actualizar ese estado.
  const { students, setStudents } = useStudents();

  // Inicializa el estado de cada campo del formulario con los datos del estudiante que se va a editar.
  const [matricula, setMatricula] = useState(student.matricula);
  const [nombre, setNombre] = useState(student.nombre);
  const [apellidos, setApellidos] = useState(student.apellidos);
  const [grado, setGrado] = useState(student.grado);
  const [promedio, setPromedio] = useState(student.promedio);

  // Define la función que se ejecutará cuando se presione el botón de guardar.
  const handleSave = () => {
    // Crea un nuevo objeto de estudiante con los datos actuales del formulario.
    const newStudent = { matricula, nombre, apellidos, grado, promedio };

    // Crea una copia del estado actual de los estudiantes.
    const newStudents = [...students];

    // Reemplaza el estudiante en el índice especificado con el nuevo estudiante.
    newStudents[index] = newStudent;

    // Actualiza el estado de los estudiantes con la nueva lista de estudiantes.
    setStudents(newStudents);

    // Navega hacia atrás en el stack de navegación.
    navigation.goBack();
  };



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.textInput}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.textInput}
        value={apellidos}
        onChangeText={setApellidos}
      />
      <TextInput
        style={styles.textInput}
        value={grado}
        onChangeText={setGrado}
      />
      <TextInput
        style={styles.textInput}
        value={promedio}
        onChangeText={setPromedio}
      />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: "#cb3234",
    width: "80%",
    height: "40%", 
    borderRadius: 15,
    alignItems: "center",
    padding: 15,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    height: 35,
    width: "80%",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
  },
});

export default EditScreen;

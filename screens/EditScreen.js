import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useStudents } from "./StudentContext";

const EditScreen = ({ route, navigation }) => {
  const { student, index } = route.params;
  const { students, setStudents } = useStudents();

  const [matricula, setMatricula] = useState(student.matricula);
  const [nombre, setNombre] = useState(student.nombre);
  const [apellidos, setApellidos] = useState(student.apellidos);
  const [grado, setGrado] = useState(student.grado);
  const [promedio, setPromedio] = useState(student.promedio);

  const handleSave = () => {
    const newStudent = { matricula, nombre, apellidos, grado, promedio };
    const newStudents = [...students];
    newStudents[index] = newStudent;
    setStudents(newStudents);
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

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import { useStudents } from './StudentContext';

const HomeScreen = ({ navigation }) => {
  // Se utiliza el hook useStudents para obtener y establecer la lista de estudiantes.
  const { students, setStudents } = useStudents();

  // Se definen los estados para cada campo del formulario de estudiante.
  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [grado, setGrado] = useState('');
  const [promedio, setPromedio] = useState('');

  // Función para manejar el guardado de un estudiante.
  const handleSave = () => {
    // Si alguno de los campos está vacío, se muestra una alerta.
    if (!matricula || !nombre || !apellidos || !grado || !promedio) {
      Alert.alert(
        "Campos vacíos",
        "No se puede enviar vacíos los campos.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      // Si todos los campos están llenos, se crea un nuevo estudiante y se añade a la lista.
      const newStudent = { matricula, nombre, apellidos, grado, promedio };
      setStudents([...students, newStudent]);

      // Se limpian los campos del formulario.
      setMatricula('');
      setNombre('');
      setApellidos('');
      setGrado('');
      setPromedio('');

      // Se muestra una alerta indicando que el estudiante ha sido guardado exitosamente.
      Alert.alert(
        "Guardado exitosamente",
        "El estudiante ha sido guardado.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  // Se retorna el componente de la pantalla de inicio.
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title='Ver Estudiantes' onPress={() => navigation.navigate('StudentFormScreen')} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Inserte un Estudiante</Text>
        <TextInput style={styles.textInput} placeholder="Matricula" value={matricula} onChangeText={setMatricula} />
        <TextInput style={styles.textInput} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
        <TextInput style={styles.textInput} placeholder="Apellidos" value={apellidos} onChangeText={setApellidos} />
        <TextInput style={styles.textInput} placeholder="Grado" value={grado} onChangeText={setGrado} />
        <TextInput style={styles.textInput} placeholder="Promedio" value={promedio} onChangeText={setPromedio} />
        <Button title='Guardar' onPress={handleSave} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bcbcbc",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop:-200
  },
  body: {
    marginTop:100,
    backgroundColor: "#cb3234",
    width: "80%",
    height: "50%",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
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

export default HomeScreen;

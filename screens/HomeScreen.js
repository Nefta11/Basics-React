import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import { useStudents } from './StudentContext';

const HomeScreen = ({ navigation }) => {
  const { students, setStudents } = useStudents();
  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [grado, setGrado] = useState('');
  const [promedio, setPromedio] = useState('');

  const handleSave = () => {
    if (!matricula || !nombre || !apellidos || !grado || !promedio) {
      Alert.alert(
        "Campos vacíos",
        "No se puede enviar vacío los campos.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      const newStudent = { matricula, nombre, apellidos, grado, promedio };
      setStudents([...students, newStudent]);
      setMatricula('');
      setNombre('');
      setApellidos('');
      setGrado('');
      setPromedio('');
      Alert.alert(
        "Guardado exitosamente",
        "El estudiante ha sido guardado.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };
  

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

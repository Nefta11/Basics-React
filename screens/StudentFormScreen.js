import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { useStudents } from './StudentContext';

const StudentFormScreen = ({ navigation }) => {
  const { students, setStudents } = useStudents();

  const handleDelete = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
    Alert.alert(
      "Eliminado exitosamente",
      "El estudiante ha sido eliminado.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const handleEdit = (student, index) => {
    navigation.navigate('EditScreen', { student, index });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text>Matricula: {item.matricula}</Text>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Apellidos: {item.apellidos}</Text>
            <Text>Grado: {item.grado}</Text>
            <Text>Promedio: {item.promedio}</Text>
            <View style={styles.buttonsContainer}>
              <Button title='Eliminar' onPress={() => handleDelete(index)} />
              <Button title='Editar' onPress={() => handleEdit(item, index)} />
            </View>
          </View>
        )}
      />
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
  card: {
    marginTop:20,
    marginLeft:25,
    backgroundColor: "#cb3234",
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default StudentFormScreen;

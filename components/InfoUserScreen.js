import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const InfoUserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de usuario</Text>
      
      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Apellido paterno" />
      <TextInput style={styles.input} placeholder="Apellido materno" />
      <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AEEEEE",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default InfoUserScreen;

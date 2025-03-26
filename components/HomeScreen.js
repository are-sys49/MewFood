import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [estadoMascota, setEstadoMascota] = useState("");
  const [mensajeEstado, setMensajeEstado] = useState("");

  const handleEstadoChange = (estado) => {
    setEstadoMascota(estado);

    // Mostrar mensajes según estado
    switch (estado) {
      case "feliz":
        setMensajeEstado("¡Qué bien! Tu mascota está feliz 🐾");
        break;
      case "triste":
        setMensajeEstado("Oh no... tu mascota parece triste 😿");
        break;
      case "cansado":
        setMensajeEstado("Tu mascota está cansada, déjala descansar 💤");
        break;
      case "jugueton":
        setMensajeEstado("¡Tu mascota quiere jugar! 🐶🎾");
        break;
      default:
        setMensajeEstado("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <View style={styles.profile}>
          <Ionicons name="person-circle-outline" size={40} color="#fff" />
          <Text style={styles.greeting}>Hola, Usuario</Text>
        </View>
      </View>

      {/* Estado de la mascota */}
      <View style={styles.statusCard}>
        <Text style={styles.statusText}>¿Cómo se encuentra tu mascota el día de hoy?</Text>
        <View style={styles.pickerBox}>
        <Picker
  selectedValue={estadoMascota}
  onValueChange={(itemValue) => handleEstadoChange(itemValue)}
  style={styles.picker}
>
  <Picker.Item label="Selecciona un estado..." value="" />
  <Picker.Item label="Feliz" value="feliz" />
  <Picker.Item label="Triste" value="triste" />
  <Picker.Item label="Cansado" value="cansado" />
  <Picker.Item label="Juguetón" value="jugueton" />
</Picker>

        </View>

        {mensajeEstado ? (
          <Text style={styles.mensajeEstado}>{mensajeEstado}</Text>
        ) : null}
      </View>

      {/* Opciones de acción */}
      <View style={styles.optionsRow}>
        <View style={styles.optionCard}>
          <Text style={styles.optionText}>Dispensa comida ahora mismo presionando el botón</Text>
        </View>
        <View style={styles.optionCard}>
          <Text style={styles.optionText}>Configura la alimentación presionando el botón</Text>
        </View>
      </View>

      {/* Botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DispenseFood")}
        >
          <Text style={styles.buttonText}>Dispensar Comida</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ConfigScreen")}
        >
          <Text style={styles.buttonText}>Configurar Alimentación</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#AEEEEE",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  greeting: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  statusCard: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
  },
  
  mensajeEstado: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: "italic",
    color: "#333",
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20,
  },
  optionCard: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 30,
    marginHorizontal: 5,
    alignItems: "center",
  },
  optionText: {
    textAlign: "center",
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#AEEEEE",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default HomeScreen;
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ConfigScreen({ navigation }) {
  const [grams, setGrams] = useState("");
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) setTime(selectedDate);
  };

  const handleSchedule = () => {
    console.log("Programado para", time.toLocaleTimeString(), "con", grams, "gramos");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Hola, usuario</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.title}>Programa comida</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Seleccionar horario</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.input}>
            <Text>{time.toLocaleTimeString()}</Text>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={false}
              display="spinner"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Gramos</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={grams}
            onChangeText={setGrams}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSchedule}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>

        {/* Botón para volver a Dispensar comida */}
        <TouchableOpacity onPress={() => navigation.navigate('DispenseFoodScreen')}>
          <Text style={{ marginTop: 20, color: '#007BFF' }}>Volver a Dispensar comida</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  header: { backgroundColor: "#A0EDE7", padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  userText: { fontSize: 16, fontWeight: "500" },
  body: { padding: 20, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
  card: { backgroundColor: "#A0EDE7", padding: 20, borderRadius: 20, width: "100%", marginVertical: 10 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { backgroundColor: "#ffffff", padding: 10, borderRadius: 10 },
  button: { backgroundColor: "#C2FCF8", padding: 15, borderRadius: 20, marginTop: 20, alignItems: "center", width: "100%" },
  buttonText: { fontSize: 16, fontWeight: "600" },
});
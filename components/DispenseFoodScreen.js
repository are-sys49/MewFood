import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DispenseFoodScreen({ navigation }) {
  const [grams, setGrams] = useState("");

  const handleDispense = () => {
    console.log("Dispensando", grams, "gramos");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Hola, usuario</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.title}>Dispensar comida</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Gramos</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={grams}
            onChangeText={setGrams}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleDispense}>
          <Text style={styles.buttonText}>Dispensar ahora</Text>
        </TouchableOpacity>

        {/* Botón para ir a Programar comida */}
        <TouchableOpacity onPress={() => navigation.navigate('ConfigScreen')}>
          <Text style={{ marginTop: 20, color: '#007BFF' }}>Ir a Programar comida</Text>
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

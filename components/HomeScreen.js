import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [estadoMascota, setEstadoMascota] = useState("");
  const [mensajeEstado, setMensajeEstado] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEstadoVisible, setModalEstadoVisible] = useState(false);

  const estados = [
    { id: '1', value: 'feliz', label: 'Feliz', icon: '🐾' },
    { id: '2', value: 'triste', label: 'Triste', icon: '😿' },
    { id: '3', value: 'cansado', label: 'Cansado', icon: '💤' },
    { id: '4', value: 'jugueton', label: 'Juguetón', icon: '🐶' },
  ];

  const handleEstadoChange = (estado) => {
    setEstadoMascota(estado);
    setModalEstadoVisible(false);

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

  const openMenu = () => {
    setModalVisible(true);
  };

  const closeMenu = () => {
    setModalVisible(false);
  };

  const getEstadoLabel = () => {
    const estado = estados.find(e => e.value === estadoMascota);
    return estado ? `${estado.label} ${estado.icon}` : "Selecciona un estado...";
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Ícono de menú hamburguesa */}
        <TouchableOpacity onPress={openMenu}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.profile}>
          <Ionicons name="person-circle-outline" size={40} color="#fff" />
          <Text style={styles.greeting}>Hola, Usuario</Text>
        </View>
      </View>

      {/* Estado de la mascota */}
      <View style={styles.statusCard}>
        <Text style={styles.statusText}>¿Cómo se encuentra tu mascota el día de hoy?</Text>
        {/* Nuevo selector de estado */}
        <TouchableOpacity 
          style={styles.selectorButton} 
          onPress={() => setModalEstadoVisible(true)}
        >
          <Text style={styles.selectorButtonText}>
            {getEstadoLabel()}
          </Text>
          <Ionicons name="chevron-down" size={24} color="#666" />
        </TouchableOpacity>

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

      {/* Modal con las opciones del menú */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { closeMenu(); navigation.navigate("InfoUserScreen"); }} style={styles.menuOption}>
              <Text style={styles.menuOptionText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { closeMenu(); navigation.navigate("HistorialScreen"); }} style={styles.menuOption}>
              <Text style={styles.menuOptionText}>Historial</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { closeMenu(); navigation.navigate("MascotaScreen"); }} style={styles.menuOption}>
              <Text style={styles.menuOptionText}>Mascota</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para seleccionar estado de mascota */}
      <Modal
        transparent={true}
        visible={modalEstadoVisible}
        animationType="slide"
        onRequestClose={() => setModalEstadoVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.estadoModalContent}>
            <Text style={styles.estadoModalTitle}>Estado de tu mascota</Text>
            
            <FlatList
              data={estados}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.estadoItem,
                    estadoMascota === item.value && styles.estadoItemSelected
                  ]}
                  onPress={() => handleEstadoChange(item.value)}
                >
                  <Text style={styles.estadoItemText}>
                    {item.label} {item.icon}
                  </Text>
                  {estadoMascota === item.value && (
                    <Ionicons name="checkmark" size={22} color="#4caf50" />
                  )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              style={styles.estadoList}
            />
            
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalEstadoVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  selectorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectorButtonText: {
    fontSize: 16,
    color: '#333',
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  modalContent: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#37746D",
  },
  menuOption: {
    padding: 15,
  },
  menuOptionText: {
    fontSize: 18,
  },
  // Estilos para el modal de estado
  estadoModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: '80%',
  },
  estadoModalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  estadoList: {
    maxHeight: 300,
  },
  estadoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  estadoItemSelected: {
    backgroundColor: '#f0f9ff',
  },
  estadoItemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  cancelButton: {
    marginTop: 15,
    backgroundColor: "#AEEEEE",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    fontWeight: "bold",
  },
});

export default HomeScreen;


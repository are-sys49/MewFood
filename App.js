import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import Login from "./components/Login";
import Registro from "./components/Registro";
import HomeScreen from "./components/HomeScreen"; // Mover esta a components
import ConfigScreen from "./components/ConfigScreen";
import DispenseFoodScreen from "./components/DispenseFoodScreen";
import RegistroMascota from "./components/RegistroMascota"; // Mover esta a components
import InfoUserScreen from "./components/InfoUserScreen"; // Mover esta a components
import HistorialScreen from "./components/HistorialScreen"; // Mover esta a components
import MascotaScreen from "./components/MascotaScreen"; // Mover esta a components

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setIsLoggedIn(true);
      }
      setCheckingSession(false);
    };
    checkSession();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (checkingSession) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppStack.Navigator>
          <AppStack.Screen
            name="Home"
            options={{
              headerRight: () => (
                <Button title="Salir" onPress={handleLogout} color="#000" />
              ),
              title: "Inicio",
            }}
          >
            {(props) => <HomeScreen {...props} />}
          </AppStack.Screen>
          <AppStack.Screen name="ConfigScreen" component={ConfigScreen} options={{ title: "Configuración" }} />
          <AppStack.Screen name="DispenseFood" component={DispenseFoodScreen} options={{ title: "Dispensar comida" }} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="Login">
            {(props) => <Login {...props} onLoginSuccess={handleLoginSuccess} />}
          </AuthStack.Screen>
          <AuthStack.Screen name="Registro" component={Registro} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
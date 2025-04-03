import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const MascotaScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#63d4c5" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/40' }} 
          style={styles.profileIcon} 
        />
        <Text style={styles.headerText}>Hola, usuario</Text>
      </View>
      
      {/* Pet Profile Card */}
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.petImage} 
        />
        
        <Text style={styles.petName}>Luciana</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Edad: 2 años</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Raza: Mixta</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Color: Naranja</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Peso: 2.45 kg</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.navigate('EditarMascota')}
        >
          <Text style={styles.editButtonText}>Editar datos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#63d4c5',
    padding: 15,
    paddingTop: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  card: {
    margin: 20,
    padding: 15,
    backgroundColor: '#a3eade',
    borderRadius: 15,
    alignItems: 'center',
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  petName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoContainer: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  infoLabel: {
    fontSize: 16,
  },
  editButton: {
    marginTop: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default MascotaScreen;
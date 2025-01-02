import React from 'react'; 
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Menggunakan ikon untuk estetika

export default function BiodataScreen() {
  return (
    <View style={styles.screenContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/ica.jpg')} // Foto profil (ganti dengan path yang sesuai)
          style={styles.profileImage}
        />
        <Text style={styles.title}>Annisa Dafifa Zahra</Text>
        <Text style={styles.subtitle}>Mahasiswa Sistem Informasi</Text>
      </View>

      {/* Card Section */}
      <View style={styles.card}>
        <View style={styles.infoRow}>
          <MaterialIcons name="school" size={24} color="#1E90FF" />
          <View style={styles.infoContent}>
            <Text style={styles.label}>NIM:</Text>
            <Text style={styles.value}>222505005</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <MaterialIcons name="domain" size={24} color="#1E90FF" />
          <View style={styles.infoContent}>
            <Text style={styles.label}>Prodi:</Text>
            <Text style={styles.value}>Sistem Informasi</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={24} color="#1E90FF" />
          <View style={styles.infoContent}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>annisadafifa@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Warna latar belakang solid
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#1E90FF',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Warna teks menjadi hitam
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoContent: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 10,
  },
});

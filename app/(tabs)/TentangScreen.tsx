import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TentangScreen() {
  return (
    <View style={styles.screenContainer}>
      {/* Card Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Tentang Saya</Text>
        <View style={styles.divider} />
        <Text style={styles.paragraph}>
        Saya sangat tertarik pada dunia teknologi, khususnya dalam desain dan pemrograman. Saat ini, 
        saya sedang dalam proses belajar dan terus berusaha untuk mengasah kemampuan saya agar dapat menghasilkan karya yang lebih baik.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // Warna latar belakang konsisten
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  decoration: {
    backgroundColor: '#E1F5FE',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  decorationText: {
    fontSize: 24,
    color: '#0288D1', // Warna biru lembut
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  divider: {
    height: 2,
    width: '60%',
    backgroundColor: '#03A9F4',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 24,
  },
});

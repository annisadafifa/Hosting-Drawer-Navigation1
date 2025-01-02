import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

// URL API menggunakan proxy untuk menghindari CORS
const apiURL = 'https://api.allorigins.win/get?url=https://mmc-clinic.com/dipa/api/mhs.php';

interface Mahasiswa {
  id: string;
  nim: string;
  nama: string;
  kelas: string;
  points: string | null;
}

export default function App() {
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const result = await response.json();
      const parsedData = JSON.parse(result.contents); // Parsing data dari proxy
      if (Array.isArray(parsedData.data)) {
        const randomData = getRandomItems(parsedData.data, 10); // Ambil 10 data secara random
        setData(randomData);
      } else {
        throw new Error('Data tidak valid.');
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Terjadi kesalahan saat memuat data.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getRandomItems = (arr: Mahasiswa[], numItems: number): Mahasiswa[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Berikut Teman berdasarkan 10 orang teracak
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : data.length === 0 ? (
        <Text style={styles.error}>Tidak ada data yang ditemukan.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>NIM: {item.nim}</Text>
              <Text style={styles.text}>Nama: {item.nama}</Text>
              <Text style={styles.text}>Kelas: {item.kelas}</Text>
              <Text style={styles.text}>Points: {item.points || 'Tidak tersedia'}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    width: '100%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

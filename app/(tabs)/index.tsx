import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Animated } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { Link } from 'expo-router'; // Import Link untuk navigasi

export default function HomeScreen() {
  const handAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const waveAnimation = () => {
      Animated.sequence([
        Animated.timing(handAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(handAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => waveAnimation());
    };
    waveAnimation();
  }, [handAnimation]);

  const handRotation = handAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '20deg'],
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E3F2FD', dark: '#E3F2FD' }} 
      headerImage={
        <Image
          source={require('@/assets/images/komputer.jpg')}
          style={styles.headerImage}
        />
      }
    >
      {/* Bagian Header dengan Gradient */}
      <LinearGradient
        colors={['#FFFFFF', '#1E90FF']}
        style={styles.titleContainer}
      >
        <ThemedText type="title" style={styles.titleText}>
          Welcome di dunia saya yang penuh warna!
        </ThemedText>
      </LinearGradient>

      {/* Bagian Foto Profil */}
      <LinearGradient
        colors={['#E3F2FD', '#1E90FF']}
        style={styles.photoContainer}
      >
        <Image
          source={require('@/assets/images/ica.jpg')}
          style={styles.profilePhoto}
        />
        <ThemedText type="subtitle" style={styles.photoTitle}>
          Annisa Dafifa Zahra
        </ThemedText>
      </LinearGradient>

      {/* Bagian Quotes */}
      <LinearGradient
        colors={['#FFFFFF', '#1E90FF']}
        style={styles.quotesContainer}
      >
        <ThemedText type="subtitle" style={styles.quotesTitle}>
          Quotes
        </ThemedText>
        <ThemedText style={styles.quoteText}>
          "Selamat datang di ruang eksplorasi ide dan karya. Pecinta kreativitas dan teknologi, selalu siap belajar dan berkembang."
        </ThemedText>
      </LinearGradient>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Latar belakang putih
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 40,
    padding: 20,
    borderRadius: 12,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000', // Warna teks hitam untuk kontras
    textAlign: 'center',
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  handImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  photoContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  photoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3D47',
    marginBottom: 16,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#1D3D47',
    marginBottom: 20,
    resizeMode: 'cover',
  },
  quotesContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  quotesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3D47',
    marginBottom: 16,
  },
  quoteText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

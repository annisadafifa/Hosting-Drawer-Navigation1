import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HobiScreen() {
  const scaleAnimation = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnimation, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleAnimation }],
  };

  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={['#E3F2FD', '#BBDEFB']}
        style={styles.backgroundGradient}
      />
      <Text style={styles.title}>Hobi</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Card untuk Hobi */}
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.card, animatedStyle]}
        >
          <Image source={require('@/assets/images/poto.jpg')} style={styles.cardImage} />
          <Text style={styles.value}>Fotografer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.card, animatedStyle]}
        >
          <Image source={require('@/assets/images/editing.jpg')} style={styles.cardImage} />
          <Text style={styles.value}>Editing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.card, animatedStyle]}
        >
          <Image source={require('@/assets/images/olahraga.jpg')} style={styles.cardImage} />
          <Text style={styles.value}>Olahraga</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 20,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BBDEFB',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#BBDEFB',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Bem-vindo ao <Text style={styles.brandName}>SoundSpace</Text>
          </Text>
          <Text style={styles.description}>
            Escolha uma canção, descubra{'\n'}mais sobre ela e monte sua{'\n'}própria coleção — do seu jeito.
          </Text>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <Image 
          source={require('../assets/homepage.png.png')} 
          style={styles.characterImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#D19DF0',
    borderRadius: 20,
    padding: 20,
    paddingTop: 16,
    paddingBottom: 16,
    position: 'relative',
    height: 180,
    width: '90%',
    overflow: 'hidden',
  },
  content: {
    zIndex: 1,
    maxWidth: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#44125a80',
    marginBottom: 8,
    lineHeight: 24,
  },
  brandName: {
    fontWeight: '700',
    color: '#44125A',
  },
  description: {
    fontSize: 16,
    color: '#2d2d2d',
    lineHeight: 16,
    marginBottom: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    maxWidth: 200,
    alignSelf: 'flex-start',
  },
  logoImage: {
    width: 200,
    height: 45,
  },
  characterImage: {
    position: 'absolute',
    right: 0,
    bottom: -25,
    width: 200,
    height: 200,
  },
});

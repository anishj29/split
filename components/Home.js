import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";


export default function Home({navigation}) {
  return (
    <View>
      <View style={styles.halfCircleLeftTop} />
      <View style={styles.halfCircleRightTop} />

      <View style={styles.iconsContainer}>
          <Feather name="bell" size={32} color="black" style={styles.icon} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="face-woman-profile"
              size={32}
              color="black"
              style={styles.icon}
            />
          </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.userTitle}>Hi Anish,</Text>
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.totalBill}>
          <Text style={styles.balance}>Total Bill</Text>
          <Text style={styles.dollar}>$556.90</Text>
          <Text style={styles.transfer}>Split With 
            <View style={styles.line} />
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#3F3F3F',
              paddingVertical: 10,
              borderRadius: 8,
              marginTop: 15,
              width: 150
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Split Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    padding: 20
  },
  userTitle: {
    fontSize: 35,
    color: "#5DB491",
    fontWeight: "600",
    marginBottom: 5, 
  },
  welcome: {
    marginTop: -5
  },
  totalBill: {
    width: 400,
    height: 250,
    borderRadius: 20,
    justifyContent: 'left',
    boxShadow: "0px 0.5px 2px gray",
    backgroundColor: "#74CDA9",
    alignItems: 'left',
    marginTop: 25,
    padding: "20px",
    marginBottom: 10,
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    width: 270,
    marginBottom: 5,
    marginLeft: 8,
  },
  dollar: {
    fontSize: 30,
    marginBottom: 5,
    color: "white",
    fontWeight: "500",
  },
  balance: {
    fontSize: 20,
    color: "white",
  },
  transfer: {
    fontSize: 15,
    color: "white"

  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginBottom: 5, // Add margin bottom to lower the icons
  },
  boxContainer: {
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 220,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5, 
    position: "absolute",
  },
  halfCircleLeftTop: {
    position: "absolute",
    top: 0,
    right: -10,
    width: 100, 
    height: 100,
    borderRadius: 50, 
    backgroundColor: "black",
    transform: [{ translateY: -50 }],
  },
  halfCircleRightTop: {
    position: "absolute",
    top: 0,
    right: -50,
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: "#5DB491",
    transform: [{ translateY: -50 }],
  },
});


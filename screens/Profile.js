import React from "react";
import TransactionListNew from "../components/TransactionList";
import { StyleSheet, Text, View } from "react-native";
const Profile = () => {
  const name = "John Doe";
  const balance = 5000;
  const accountType = "Savings Account";
  const accountNumber = "0123456789";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.balance}>Balance: ${balance}</Text>
        <Text style={styles.accountType}>{accountType}</Text>
        <Text style={styles.accountNumber}>
          Account Number: {accountNumber}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    backgroundColor: "#4169e1",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balance: {
    fontSize: 18,
    marginBottom: 5,
  },
  accountType: {
    fontSize: 18,
    marginBottom: 5,
  },
  accountNumber: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Profile;

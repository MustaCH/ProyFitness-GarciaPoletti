import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { styles } from "./styles.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Image />
      <Text style={styles.title}>Hola Coder!</Text>
      <TextInput style={styles.input} placeholder="Tu nombre" />
      <Button style={styles.button} title="Siguiente" />
    </View>
  );
}

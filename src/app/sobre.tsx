import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pagina sobre </Text>

      <Image style={styles.Imagens} 
      source = {require("../../assets/image.jpg")} />

      <Link style={styles.btn}  href={"/"}>Inicio</Link>
      <Link style={styles.btn2}  href={"/contato"}>Contatos</Link>

      <StatusBar style="auto" />
    </View>
  );
}


import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pagina de contato</Text>

      <Image style={styles.Imagens} 
      source = {require("../../assets/image.jpg")} />



      <Link style={styles.btn3}  href={"/sobre"}>Sobre</Link>
      <Link style={styles.btn}  href={"/"}>inicio</Link>

      <StatusBar style="auto" />
    </View>
  );
}
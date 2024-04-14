
import {SingIn} from './src/screens/SingIn';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import {Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_700Bold,Rajdhani_500Medium} from '@expo-google-fonts/rajdhani'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Background } from '../gameplay/src/components/Background';
import { Routes } from './src/routes';
import { AuthRoutes } from './src/routes/auth.routes';

export default function App() {
  const[fonstLoaded] =useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  })
  if (!fonstLoaded){
    return <AppLoading/> // para declarar componente upcase é obrigatorio, modo errado: appLoading
  }

 

  return (
    <Background>
    <StatusBar
    barStyle = "light-content"
    translucent 
    backgroundColor={"transparent"}
      />

    <Routes/>
    
    </Background>
  );
  }


import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image,StatusBar } from 'react-native';
import {styles} from './styles';
import illustrationImg from '../../assets/illustration.png';
import {ButtonIcon} from '../../components/ButttonIcon'
import { useNavigation,ParamListBase } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export function SingIn() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  function handleSingIn(){
    navigation.navigate('Home');
  }

  const [text,setText] = useState('');

  return (
      <View style={styles.container}>
        <Image source = {illustrationImg} style={styles.image} resizeMode='stretch'/>

        <View style={styles.content}>
          <Text style={styles.title}> 
          
          Organize {'\n'}
          suas partidas {'\n'}
          facilmente {'\n'}
          
          </Text>

          <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
          </Text>

          <ButtonIcon onPress={handleSingIn}
          title='Entrar com Discord' activeOpacity={0.7}/>
            
        </View>
       

        
      </View>

  );
}






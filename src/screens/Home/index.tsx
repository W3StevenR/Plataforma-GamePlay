import { View, Text} from 'react-native'
import React from 'react'
import { Profile } from '../../components/Profile'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'

export function Home(){
    return(


        <View style={styles.header} >
            <Profile/>
            <ButtonAdd/>
        </View>


    )


}
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import {RectButton} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export function ButtonAdd(){
    return(
            <View style={styles.container}>
                
                <RectButton
                
                >
                    
                    <MaterialCommunityIcons
                    name='plus' 
                    size={24}
                    color={theme.colors.heading}
                    />
                  
                </RectButton>

            </View>
        )



}

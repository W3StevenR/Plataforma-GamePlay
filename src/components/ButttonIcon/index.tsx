import { Text, Button, TouchableOpacity,Image, View, TouchableOpacityProps } from "react-native";
import React from "react";
import {styles} from "./styles"
import discordImg from '../../assets/discord.png'
import { RectButton,RectButtonProps } from "react-native-gesture-handler";
type Props = RectButtonProps & {
    title: string;

}
export function ButtonIcon({title, ...rest} : Props){
    return(
    <RectButton style={styles.container} {...rest}>
        
        <View style={styles.iconWrapper}>
            <Image source={discordImg} style={styles.icon} />
        </View>

        <Text style={styles.text}> {title} </Text>
    </RectButton>

    )
}
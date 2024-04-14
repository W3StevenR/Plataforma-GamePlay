import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
       alignContent:"center",
    },
    textuser:{
        
    },
   

    greeting:{
        fontFamily: theme.fonts.title500,
        fontSize:24,
        color:theme.colors.heading,
        marginRight:6,
    },

    username:{
        fontFamily: theme.fonts.title700,
        fontSize:24,
        color: theme.colors.heading,
       
        
    },
     user:{
        paddingLeft:20,
        flexDirection:"row",
    },
    message:{
        paddingLeft:20,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    }

})

import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

  iconWrapper:{
    width: 56,
    height: 56,
    justifyContent:'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor:theme.colors.line,
  },
  container:{
    flexDirection:"row",
    width: "100%",
    height: 56,
    alignItems: "center",
    backgroundColor:theme.colors.primary,
    borderRadius:8,
  },
  icon:{
    width: 24,
    height: 18,
  },
  text:{
    flex:1,
    textAlign: 'center',
    fontSize:15,
    color:theme.colors.heading,
  },

  

  
}
    )
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "../../components/Profile/styles";
import { ButtonAdd } from "../ButtonAdd";
export function Profile(){
    return(
        <View style={styles.container}>
                <Avatar  urlImage ="https://www.github.com/W3StevenR.png" />
            <View style={styles.textuser} >
        
                <View style={styles.user}>

                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Steven
                    </Text>
                </View>

                <View>
                    <Text style={styles.message}>
                        Hoje é dia de Vitoria
                    </Text>
                </View>           
                    
                </View>

                
        </View>
    )
}
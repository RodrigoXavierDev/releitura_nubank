import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, StyleSheet, Pressable, View, Image, TextInput } from "react-native";
import { Link } from "expo-router";

export default function Screen() {
    return (
        <SafeAreaView style={styles.fundo}>
            <StatusBar/>
            <View style={styles.voltar}>
                <Link href='/login' asChild>
                    <Pressable>
                        <Image source={require('../assets/x.png')} style={styles.x}/>
                    </Pressable>
                </Link> 
                <Text style={styles.introducao}>
                    Agora digite sua senha{'\n'}do aplicativo
                </Text>
            </View>
            <View>
            <TextInput
                    style={styles.input}
                    placeholder="8 digitos ou mais"
                    placeholderTextColor="#999"
                />
            </View>
            <View style={styles.ajudaContainer}>
                <Text style={styles.ajuda}>
                    Essa é a senha que você cadastrou quando{'\n'}criou a sua conta.
                </Text>
                <Text style={styles.esqueciSenha}>
                    Esqueci a senha ->
                </Text>
            </View>
            <View style={styles.continuar}>
                <Link href='/home' asChild>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>-></Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fundo: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
    },
    voltar: {
        
    },
    x: {
        width: 20,
        height: 20,
        marginLeft: 15,
    },
    introducao: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 15,
        marginTop: 5,
    },
    input: {
        padding: 10,
        marginLeft: 5,
        fontSize: 20,
    },
    ajudaContainer: {
        marginLeft: 15,
    },
    ajuda: {
        color: '#ffffff',
        fontSize: 12,
    },
    esqueciSenha: {
        color: '#BA4DE3',
        fontSize: 12,
    },
    continuar: {
        marginTop: 370,
        marginLeft: 250,
    },
    btn: {
        backgroundColor: '#530082',
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 24
    },
})
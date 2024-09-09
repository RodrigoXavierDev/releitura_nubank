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
        flex: 1,
        backgroundColor: '#000000',
    },
    voltar: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        paddingTop: '5%',
    },
    x: {
        width: '10%',
        height: undefined,
        aspectRatio: 1,
    },
    introducao: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
    },
    input: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginHorizontal: '5%',
        marginTop: 20,
    },
    ajudaContainer: {
        paddingHorizontal: '5%',
        marginTop: 15,
    },
    ajuda: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 5,
    },
    esqueciSenha: {
        color: '#BA4DE3',
        fontSize: 16,
        marginBottom: 20,
    },
    continuar: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    btn: {
        backgroundColor: '#530082',
        padding: 10,
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
    },
});

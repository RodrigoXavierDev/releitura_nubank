import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, StyleSheet, Pressable, View, Image, TextInput } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Screen() {
    const [cpf, setCpf] = useState("");

    return (
        <SafeAreaView style={styles.fundo}>
            <StatusBar/>
            <View style={styles.voltar}>
                <Link href='/' asChild>
                    <Pressable>
                        <Image source={require('../assets/x.png')} style={styles.x}/>
                    </Pressable>
                </Link>  
            </View>
            <View style={styles.boasVindas}>
                <Text style={styles.texto1}>Boas-vindas ao Nubank!{'\n'}Qual o seu CPF?</Text>
                <Text style={styles.texto2}>Precisamos dele para iniciar o seu{'\n'}cadastro ou acessar o aplicativo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="000.000.000-00"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={setCpf}
                    maxLength={11}
                />
            </View>
            <View style={styles.continuar}>
                <Link href='/senha' asChild>
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
    boasVindas: {
        marginTop: 5,
        marginLeft: 15,
    },
    texto1: {
        color: '#fff',
        fontSize: 19,
    },
    texto2: {
        color: '#ffffffcc',
        fontSize: 14,
        marginBottom: 20,
    },
    input: {
        padding: 10,
        fontSize: 16,
        color: '#fff',
        width: '100%',
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
});

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, StyleSheet, Pressable, View, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Screen() {
    return (
        <SafeAreaView>
            <StatusBar/>
            <ImageBackground style={styles.fundo} source={require('../assets/fundo.jpg')}>
                <View style={styles.cabecalho}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}>
                    </Image>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Brasil</Text>
                    </Pressable>
                </View>
                <View style={styles.rodape}>
                    <Text style={styles.rodapeText}>
                        Um mundo{'\n'}
                        financeiro sem{'\n'}
                        complexidades
                    </Text>
                    <Link href='/login' asChild>
                        <Pressable style={styles.comecar}>
                            <Text style={styles.comecarText}>Começar</Text>
                        </Pressable>
                    </Link>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fundo: {
        height: '100%',
        width: '100%'
    },
    logo: {
        width: 72,
        height: 40,
        margin: '5%',
    },
    btn: {
        backgroundColor: '#252525',
        opacity: 0.8,
        padding: 10,
        borderRadius: 50,
        height: 45,
        width: 90,
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 16
        
    },
    rodape: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '145%'
    },
    rodapeText: {
        color: '#000000',
        fontSize: 24,
        marginRight: '50%',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    comecar: {
        backgroundColor: '#8A05BE',
        padding: 10,
        borderRadius: 50,
        height: 45,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    comecarText: {
        color: '#fff',
        fontSize: 16
    }
})

import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, StyleSheet, Pressable, View, Image, ScrollView } from "react-native";

export default function Screen() {
    const [saldoVisivel, setSaldoVisivel] = useState(false);

    const toggleSaldo = () => {
        setSaldoVisivel(!saldoVisivel);
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.cabecalho}>
                <View style={styles.menu}>
                    <Pressable style={styles.conta}>
                        <Image source={require('../assets/user.png')} style={styles.user} />
                    </Pressable>
                    <Pressable onPress={toggleSaldo}>
                        <Image 
                            source={saldoVisivel ? require('../assets/olho_aberto.png') : require('../assets/olho_fechado.png')} 
                            style={styles.icon} 
                        />
                    </Pressable>
                    <Pressable>
                        <Image source={require('../assets/interrogacao.png')} style={styles.icon} />
                    </Pressable>
                    <Pressable>
                        <Image source={require('../assets/email.png')} style={styles.icon} />
                    </Pressable>
                </View>
                <Text style={styles.bemVindo}>Olá, Ednaldo Pereira</Text>
            </View>
            <View style={styles.contaSaldo}>
                <Text style={styles.contaTexto}>Conta</Text>
                {saldoVisivel ? (
                    <Text style={styles.saldo}>R$ 5.000,00</Text>
                ) : (
                    <Text style={styles.saldo}>* * * * * *</Text>
                )}
            </View>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.iconeContainer}
            >
                <View style={styles.alinhar}>
                    <View style={styles.icone}>
                        <Image source={require('../assets/pix.png')} style={styles.iconeImg}/>
                    </View>
                    <Text style={styles.iconeText}>Área pix</Text>
                </View>
                <View style={styles.alinhar}>
                    <View style={styles.icone}>
                        <Image source={require('../assets/codigoBarra.png')} style={styles.iconeImg}/>
                    </View>
                    <Text style={styles.iconeText}>Pagar</Text>
                </View>
                <View style={styles.alinhar}>
                    <View style={styles.icone}>
                        <Image source={require('../assets/dinheiro.png')} style={styles.iconeImg}/>
                    </View>
                    <Text style={styles.iconeText}>Transferir</Text>
                </View>
                <View style={styles.alinhar}>
                    <View style={styles.icone}>
                        <Image source={require('../assets/dinheiro.png')} style={styles.iconeImg}/>
                    </View>
                    <Text style={styles.iconeText}>Depositar</Text>
                </View>
                <View style={styles.alinhar}>
                    <View style={styles.icone}>
                        <Image source={require('../assets/smartphone.png')} style={styles.iconeImg}/>
                    </View>
                    <Text style={styles.iconeText}>Recarga</Text>
                </View>
                <View style={styles.icone}>

                </View>
            </ScrollView>
            <Pressable style={styles.meusCartoes}>
                <Image source={require('../assets/cartao.png')} style={styles.cartao}/>
                <Text style={styles.meusCartoesText}>Meus Cartões</Text>
            </Pressable>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
                <View style={styles.informacao}>
                    <Pressable>
                        <Text style={styles.informacaoText}>Seu <Text style={styles.informacaoTextRoxo}>informe de rendimentos </Text>2024 já esta disponível</Text>
                    </Pressable>
                </View>
                <View style={styles.informacao}>
                    <Pressable>
                        <Text style={styles.informacaoText}>Seu <Text style={styles.informacaoTextRoxo}>informe de rendimentos </Text>2024 já esta disponível</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.divisao}></View>
            <View style={styles.cartaoDeCredito}>
                <Image source={require('../assets/cartao.png')} style={styles.cartaoImg}/>
                <Text style={styles.cartaoText}>Cartão de Credito</Text>
                <Text style={styles.cartaoText2}>Peça seu cartão de crédito sem anuidade e tenha{'\n'}mais controle da sua vida financeira</Text>
                <Pressable style={styles.pedirCartao}>
                    <Text style={styles.cartaoText3}>Pedir cartão</Text>
                </Pressable>
            </View>
            <View style={styles.divisao2}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: '#8b19d7',
        width: '100%',
        height: 100,
        justifyContent: 'center',
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    conta: {
        backgroundColor: '#ebe8e8',
        width: 35,
        height: 35,
        opacity: 0.6,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 145,
    },
    contaSaldo: {
        marginTop: 20,
        marginLeft: 15,
    },
    user: {
        width: 25,
        height: 25,
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 6,
    },
    bemVindo: {
        color: '#fff',
        fontSize: 15,
        marginTop: 8,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    contaTexto: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    saldo: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
    },
    iconeContainer: {
        marginTop: 15,
        marginLeft: 15,
    },
    alinhar: {
        alignItems: 'center',
    },
    icone: {
        width: 58,
        height: 58,
        borderRadius: 50,
        marginHorizontal: 6,
        backgroundColor: '#d8d8d87f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconeImg: {
        width: 22,
        height: 22,
    },
    iconeText: {
        marginTop: 5,
        fontSize: 11,
        fontWeight: 'bold',
    },
    meusCartoes: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 45,
        backgroundColor: '#d8d8d87f',
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 20,
    },
    cartao: {
        width: 20,
        height: 20,
        marginLeft: 15,
    },
    meusCartoesText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    informacao: {
        width: 210,
        height: 50,
        backgroundColor: '#d8d8d87f',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    informacaoText: {
        fontSize: 10,
    },
    informacaoTextRoxo: {
        color: '#8b19d7',
    },
    divisao: {
        width: '100%',
        height: 1,
        backgroundColor: '#d8d8d87f',
        marginTop: 20,
    },
    cartaoDeCredito: {
        width: '100%',
        height: 100,
        marginTop: 20,
        marginLeft: 15,
    },
    cartaoImg: {
        width: 18,
        height: 18,
    },
    cartaoText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 6,
    },
    cartaoText2: {
        fontSize: 12,
        marginTop: 6,
        fontWeight: 'bold',
    },
    pedirCartao: {
        width: 110,
        height: 35,
        backgroundColor: '#8b19d7',
        borderRadius: 50,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartaoText3: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    divisao2: {
        width: '100%',
        height: 1,
        backgroundColor: '#d8d8d87f',
        marginTop: 45,
    },
});

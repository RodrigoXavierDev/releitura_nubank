import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Pressable, View, Image, ScrollView, FlatList } from "react-native";

export default function Screen() {
    const [mostrarSaldo, setMostrarSaldo] = useState(false);

    const alternarVisibilidadeSaldo = () => {
        setMostrarSaldo(!mostrarSaldo);
    };

    return (
        <SafeAreaView style={styles.fundo}>
                <View style={styles.cabecalho}>
                    <View style={styles.menu}>
                        <Pressable style={styles.conta}>
                            <Image source={require('../assets/user.png')} style={styles.userIcon} />
                        </Pressable>
                        <View style={styles.icons}>
                            <Pressable onPress={alternarVisibilidadeSaldo}>
                                <Image
                                    source={mostrarSaldo ? require('../assets/olho_aberto.png') : require('../assets/olho_fechado.png')}
                                    style={styles.userIcon}
                                />
                            </Pressable>
                            <Pressable>
                                <Image source={require('../assets/interrogacao.png')} style={styles.userIcon} />
                            </Pressable>
                            <Pressable>
                                <Image source={require('../assets/email.png')} style={styles.userIcon} />
                            </Pressable>
                        </View>
                    </View>
                    <Pressable style={styles.aviso}>
                        <Text style={styles.avisoTexto}>Seu boleto vence hoje.{'\n'}pagar</Text>
                    </Pressable>
                </View>

                <View style={styles.areaConta}>
                    <Text style={styles.contaTexto}>Conta</Text>
                    <Text style={styles.contaTexto}>{mostrarSaldo ? 'R$ 1.000,00' : '****'}</Text>
                </View>

                <ScrollView
                    horizontal={true}
                    style={styles.menuAtalho}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.alinhar}>
                        <View style={styles.atalho}>
                            <Pressable>
                                <Image source={require('../assets/pix.png/')} style={styles.iconAtalho} />
                            </Pressable>
                        </View>
                        <Text style={styles.legenda}>Área Pix</Text>
                    </View>
                    <View style={styles.alinhar}>
                        <View style={styles.atalho}>
                            <Pressable>
                                <Image source={require('../assets/codigoBarra.png/')} style={styles.iconAtalho} />
                            </Pressable>
                        </View>
                        <Text style={styles.legenda}>Pagar</Text>
                    </View>
                    <View style={styles.alinhar}>
                        <View style={styles.atalho}>
                            <Pressable>
                                <Image source={require('../assets/emprestimo.png/')} style={styles.iconAtalho} />
                            </Pressable>
                        </View>
                        <Text style={styles.legenda}>Pegar{'\n'}emprestado</Text>
                    </View>
                    <View style={styles.alinhar}>
                        <View style={styles.atalho}>
                            <Pressable>
                                <Image source={require('../assets/investir.png/')} style={styles.iconAtalho} />
                            </Pressable>
                        </View>
                        <Text style={styles.legenda}>Investir</Text>
                    </View>
                    <View style={styles.alinhar}>
                        <View style={styles.atalho}>
                            <Pressable>
                                <Image source={require('../assets/dinheiro.png/')} style={styles.iconAtalho} />
                            </Pressable>
                        </View>
                        <Text style={styles.legenda}>Transferir</Text>
                    </View>
                    <View style={styles.alinhar}>
                        <View style={styles.atalho}>
                            <Pressable>
                                <Image source={require('../assets/dinheiro.png/')} style={styles.iconAtalho} />
                            </Pressable>
                        </View>
                        <Text style={styles.legenda}>Receber</Text>
                    </View>
                </ScrollView>

                <View style={styles.menu2}>
                    <Pressable style={styles.meuUltravioleta}>
                        <Image source={require('../assets/logo.png/')} style={styles.iconAtalho2} />
                        <Text style={styles.legenda}>Meu Ultravioleta</Text>
                        <View style={styles.meuUltravioletaSaldo}>
                            <Text style={styles.legenda}> R$ 564,84</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.meuUltravioleta}>
                        <Image source={require('../assets/cartao.png/')} style={styles.iconeMeusCartoes} />
                        <Text style={styles.legenda}>Meus cartoes</Text>
                    </Pressable>

                    <ScrollView
                        horizontal={true}
                        style={styles.anuncio}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.viewAnuncio}>
                            <Pressable style={styles.pressableAnuncio}>
                                <Text style={styles.textoRoxo}>Pix no crédito: <Text style={styles.textoAnuncio}>transfira sem usar o{'\n'}saldo da conta.</Text></Text>
                            </Pressable>
                        </View>
                        <View style={styles.viewAnuncio}>
                            <Pressable style={styles.pressableAnuncio}>
                                <Text style={styles.textoRoxo}>Convide amigos para o nubank: <Text style={styles.textoAnuncio}>{'\n'}desbloqueie conquiostas</Text></Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                    <View style={styles.divisao}></View>
                </View>
                <View style={styles.faturaEEmprestimo}>
                    <Text style={styles.contaTexto}>Cartao de crédito</Text>
                    <View style={styles.alinhar2}>
                        <Text>Fatura atual</Text>
                        <Text style={styles.contaTexto}>R$ 1.537,98</Text>
                    </View>
                    <Text>Limite disponível de R&$18.462,02</Text>
                </View>
                <View style={styles.divisao}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    cabecalho: {
        height: 200,
        width: '100%',
        backgroundColor: '#8A05BE',
    },
    conta: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f1f1f1',
        opacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    userIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    icons: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30
    },
    aviso: {
        width: '90%',
        height: '35%',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    avisoTexto: {
        color: '#8A05BE'
    },
    areaConta: {
        width: '100%',
        height: '13%',
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    contaTexto: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    menuAtalho: {
        flexGrow: 0,
        height: 'auto',
    },
    atalho: {
        backgroundColor: '#d4d4d4',
        height: 75,
        width: 75,
        borderRadius: 50,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconAtalho: {
        height: 26,
        width: 26,
    },
    iconAtalho2: {
        height: 16,
        width: 32,
        marginHorizontal: 15
    },
    alinhar: {
        alignItems: 'center'
    },
    legenda: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    menu2: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        flex: 1,
        marginTop: '5%',
    },
    meuUltravioleta: {
        width: '92%',
        height: 60,
        borderRadius: 15,
        backgroundColor: '#d4d4d4',
        marginVertical: 6,
        alignItems: 'center',
        flexDirection: 'row',
    },
    meuUltravioletaSaldo: {
        width: '50%',
        flexDirection: 'row-reverse'
    },
    iconeMeusCartoes: {
        height: 26,
        width: 26,
        marginHorizontal: 15
    },
    anuncio: {
        flexGrow: 0,
        height: 'auto',
        width: 'auto'
    },
    viewAnuncio: {
        width: 280,
        height: 90,
        backgroundColor: '#d4d4d4',
        borderRadius: 15,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    pressableAnuncio: {

    },
    textoRoxo: {
        color: '#8A05BE',
    },
    textoAnuncio: {
        color: '#000000',
    },
    divisao: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#d4d4d4',
        marginVertical: 6
    },
    faturaEEmprestimo: {
        width: '100%',
        marginHorizontal: 15
    },
    alinhar2: {
        marginVertical: 10
    }
});

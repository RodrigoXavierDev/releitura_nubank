import { Stack } from "expo-router";

export default function Root() {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title: 'Index', animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="login" options={{title: 'Login', animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="senha" options={{title: 'Senha', animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="home" options={{title: 'Home', animation: 'slide_from_bottom'}}/>
        </Stack>
    );
}
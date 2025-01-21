import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Roboto_500Medium, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({ Lobster_400Regular, Poppins_500Medium, Roboto_500Medium, Inter_500Medium, Roboto_700Bold, Roboto_400Regular, Poppins_600SemiBold })


  return (
    <>
      <Routes />
    </>
  );
}



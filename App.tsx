import { StatusBar } from 'expo-status-bar';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton'
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';


export default function App() {
  const [ fontsLoader ] = useFonts({
    Anton_400Regular
  })


  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      {fontsLoader ? <Routes /> : <Loading />}
    </>
  );
}

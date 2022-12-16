import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>Luca Palminteri App</Text>
      <Text>TypeScript</Text>
      <View style={styles.separator} lightColor="#000" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'yellow'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: '#AA0',
    borderRadius: 20,
    padding: 10,
    margin: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: 'green'
  },
});

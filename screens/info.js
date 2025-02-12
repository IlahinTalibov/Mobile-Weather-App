



import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Info({navigation}) {
  return (
    <>
    <View style={styles.container}>
      <Text>Homee</Text>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}>
        View h
      </Link>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});





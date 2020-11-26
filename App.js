import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {receive} from './src/service/Apis';
const App = () => {
  const [result, setResult] = useState(null);
  const GetData = () => {
    receive().then((res) => {
      setResult(res.totalResults);
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity style={styles.btn} onPress={GetData}>
        <Text style={styles.btnText}>request</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.containerContent}
        style={styles.content}>
        <Text style={styles.contentText}>
          {result ?? 'take a request first'}
        </Text>
      </ScrollView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  containerContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    elevation: 3,
  },
});

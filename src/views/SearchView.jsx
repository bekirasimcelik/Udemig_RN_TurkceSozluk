import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Box from '../components/Box';

const SearchView = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box style={styles.center} />
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchView;

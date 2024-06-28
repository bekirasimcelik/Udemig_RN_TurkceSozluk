import {View, Text, Button} from 'react-native';
import React from 'react';
import Box from '../components/Box';

export default function SearchView({navigation}) {
  return (
    <Box flex={1} justifyContent={'center'} aligItems={'center'}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="blue" mt={20} />
    </Box>
  );
}

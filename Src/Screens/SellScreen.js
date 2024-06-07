import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import SellModalContent from '../Components/SellModalContent';

export default function App() {
  const bottomSheetRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => bottomSheetRef?.current?.open()}>
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        height={570}
        closeOnDragDown={false}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <SellModalContent />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Aligns children at the bottom of the container
    alignItems: 'center', // Centers children horizontally
    paddingBottom: 20, // Adjust as needed
  },
  bottomButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

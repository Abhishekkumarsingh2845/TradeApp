import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {hp, wp} from '../Utlis/Responsive';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import Strings from '../Constants/Strings';
import Colours from '../Constants/Colors';

const PopupModel = () => {
  const bottomSheetRef = useRef(null);

  const onOpen = () => {
    bottomSheetRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onOpen}>
          <Text style={styles.buttonText}>Open the modal</Text>
        </TouchableOpacity>

        <BottomSheet
          ref={bottomSheetRef}
          height={hp(48)}
          openDuration={250}
          closeOnDragDown={true}
          draggable={true}
          customStyles={{
            container: {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
          }}>
          <ModalContent />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const ModalContent = () => (
  <KeyboardAvoidingView style={styles.modalContent}>
    <View style={styles.modalHeader}>
      <Text style={styles.headerText}>{Strings.entercode}</Text>
      <Text style={styles.headerText}>{Strings.enteremail}</Text>
      <Text style={styles.headerText}>{Strings.enterphone}</Text>
    </View>
    <View style={styles.inputContainer}>
      {[...Array(4)].map((_, index) => (
        <Input  txtinputst ={{textAlign:'center'}} maxlgth={1} key={index} containerStyle={styles.input} />
      ))}
    </View>
    <PrimaryButton title={Strings.verifyotp} />
    <TouchableOpacity style={styles.resendContainer}>
      <Text style={styles.resendText}>{Strings.didnototp} </Text>
      <Text style={styles.resendLink}>{Strings.resendotp} </Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContent: {
    padding: 15,
  },
  modalHeader: {
    alignItems: 'center',
    marginVertical: hp(0.2),
    justifyContent: 'center',
  },
  headerText: {
    fontSize: hp(3.1),
    fontWeight: '400',
    color: Colours.black,
    textAlign: 'center',
    fontFamily: 'inter',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(4.5),
    marginVertical: hp(1.5),
  },
  input: {
    width: wp(16),
    borderWidth: wp(0.3),
    height: hp(7.5),
    borderRadius: 7,
    borderColor: Colours.black,
    backgroundColor:Colours.white
   
  },
  resendContainer: {
    flexDirection: 'row',
    marginVertical: hp(2.2),
    justifyContent: 'center',
    fontFamily: 'inter',
  },
  resendText: {
    color: Colours.black,
    fontSize: hp(2.5),
    fontWeight: '500',
    fontFamily: 'inter',
  },
  resendLink: {
    fontSize: hp(2.5),
    color: Colours.grey,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default PopupModel;

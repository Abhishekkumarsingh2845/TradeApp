import {ScrollView, StyleSheet, Text, View, FlatList,StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';
import SearchBar from '../Components/SearchBar';
import SelectPeople from '../Components/SelectPeople';
import SkipDone from '../Components/SkipDone';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp2 = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const renderItem = ({item}) => (
    <View style={{marginTop: 12}}>
      <SelectPeople key={item} />
    </View>
  );
  const [selectedTab, setIsSelected] = useState(1);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
       <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
       <View>
        <Image source={require("./../Assets/Img/backarrow.png")} style={{width:20,height:20,resizeMode:'contain',margin:20}}/>
       </View>
      <View>
        <ScrollView horizontal>
          <Text
            onPress={() => setIsSelected(1)}
            style={[
              styles.rr,
              {borderBottomWidth: selectedTab === 1 ? 2 : null},
            ]}>
            Retailers
          </Text>
          <Text
            onPress={() => setIsSelected(2)}
            style={[
              styles.rr,
              {borderBottomWidth: selectedTab === 2 ? 2 : null},
            ]}>
            Agreators
          </Text>
          <Text
            onPress={() => setIsSelected(3)}
            style={[
              styles.rr,
              {borderBottomWidth: selectedTab === 3 ? 2 : null},
            ]}>
            Ap
          </Text>
        </ScrollView>
      </View>

      <View>
        {selectedTab === 1 && (
          <View style={{height: '100%'}}>
            <SearchBar />

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.toString()}
            />
          </View>
        )}
        {selectedTab === 2 && (
          <View style={{height: '100%'}}>
            <SearchBar />
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.toString()}
            />
          </View>
        )}
        {selectedTab === 3 && (
          <View style={{height:'100%'}}>
            <SearchBar />
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.toString()}
            />
          </View>
        )}
      </View>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <SkipDone />
      </View>
    </View>
  );
};

export default SignUp2;

const styles = StyleSheet.create({
  rr: {
    fontSize: hp(3),
    color: 'black',
    marginHorizontal: wp(8),
    fontWeight: 'bold',
    borderBottomWidth: 3,
    paddingBottom: hp(1),
    paddingHorizontal: wp(1),
    borderColor: '#3FCC97',
  },
});

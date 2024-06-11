import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colours from '../Constants/Colors';
import {hp, wp} from '../Utlis/Responsive';
import Strings from '../Constants/Strings';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <View style={styles.header}>
        <View>
          <Text style={styles.marketText}>
            Market is down <Text style={styles.marketDownText}>-11.17%</Text>
          </Text>
          <Text style={styles.subtitle}>In the past 24 hours</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('./../Assets/Img/Bell.png')}
            style={styles.bellIcon}
          />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.trendingText}>Trending</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.child}>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
          </View>

          <View style={styles.child}>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
          </View>
          <View style={styles.child}>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
          </View>
          <View style={styles.child}>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{backgroundColor:'green'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image source={require('./../Assets/Img/goto.png')} style={{width:35,height:30,resizeMode:'contain'}} />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.baseText}>VEECS</Text>
          <Text style={styles.superscript}>(56 AUD/Unit)</Text>
        </View>
      </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0, // No horizontal padding
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: wp(3.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marketText: {
    fontSize: hp(3),
    color: Colours.black,
    fontWeight: '500',
  },
  marketDownText: {
    color: Colours.primaryred,
  },
  subtitle: {
    fontSize: hp(2),
    color: Colours.grey,
    marginTop: hp(0.4),
  },
  iconContainer: {
    justifyContent: 'center',
  },
  bellIcon: {
    width: 35,
    height: 25,
    resizeMode: 'contain',
  },
  secondContainer: {
    borderWidth: 0.4,
    borderColor: '#8A8181',
    width: '100%', // Ensure it spans the full width

    marginVertical: hp(1.5),
  },
  trendingText: {
    color: 'black',
    paddingHorizontal: wp(3.5),
    marginVertical: hp(1),

    fontWeight: '400',
  },
  scrollView: {
    paddingHorizontal: wp(2),
    marginVertical: hp(1.5),
  },
  child: {
    paddingHorizontal: wp(13),
    backgroundColor: 'whitesmoke',
    borderRadius: 7,
    elevation: 4,

    marginRight: wp(2), // Add some space between the children
  },
  baseText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'black',
  },
  superscript: {
    fontSize: hp(1.8),
    lineHeight: 24,
    textAlignVertical: 'top',
    color: 'grey',
  },
});

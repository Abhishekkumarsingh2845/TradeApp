import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colours from '../Constants/Colors';
import {hp, wp} from '../Utlis/Responsive';
import Strings from '../Constants/Strings';
import BottomSheet from 'react-native-raw-bottom-sheet';
import SellModalContent from '../Components/SellModalContent';

const Home = () => {
    const bottomSheetRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <View style={styles.header}>
        <View style={{}}>
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
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={require('./../Assets/Img/goto.png')}
                style={styles.cardImage}
              />
              <View style={styles.textRow}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.baseText}>VEECS</Text>
                  <Text style={styles.superscript}>(56 AUD/Unit)</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: hp(2), color: 'grey'}}>
                    $200/100U US $200.00
                  </Text>
                </View>
              </View>
              <View style={styles.cardRightText}>
                <Text style={{fontSize: hp(2.5), color: 'black'}}>
                  $2,509.75
                </Text>
                <Text
                  style={{fontSize: hp(2), color: 'black', color: '#21BF73'}}>
                  +9.77%
                </Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.sellButton]}  onPress={() => bottomSheetRef?.current?.open()}>
                <Text style={styles.actionButtonText}>SELL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.buyButton]}>
                <Text style={styles.actionButtonText}>BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={require('./../Assets/Img/goto.png')}
                style={styles.cardImage}
              />
              <View style={styles.textRow}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.baseText}>VEECS</Text>
                  <Text style={styles.superscript}>(56 AUD/Unit)</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: hp(2), color: 'grey'}}>
                    $200/100U US $200.00
                  </Text>
                </View>
              </View>
              <View style={styles.cardRightText}>
                <Text style={{fontSize: hp(2.5), color: 'black'}}>
                  $2,509.75
                </Text>
                <Text
                  style={{fontSize: hp(2), color: 'black', color: '#21BF73'}}>
                  +9.77%
                </Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.sellButton]}  onPress={() => bottomSheetRef?.current?.open()}>
                <Text style={styles.actionButtonText}>SELL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.buyButton]}>
                <Text style={styles.actionButtonText}>BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={require('./../Assets/Img/goto.png')}
                style={styles.cardImage}
              />
              <View style={styles.textRow}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.baseText}>VEECS</Text>
                  <Text style={styles.superscript}>(56 AUD/Unit)</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: hp(2), color: 'grey'}}>
                    $200/100U US $200.00
                  </Text>
                </View>
              </View>
              <View style={styles.cardRightText}>
                <Text style={{fontSize: hp(2.5), color: 'black'}}>
                  $2,509.75
                </Text>
                <Text
                  style={{fontSize: hp(2), color: 'black', color: '#21BF73'}}>
                  +9.77%
                </Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.sellButton]}  onPress={() => bottomSheetRef?.current?.open()}>
                <Text style={styles.actionButtonText}>SELL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.buyButton]}>
                <Text style={styles.actionButtonText}>BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={require('./../Assets/Img/goto.png')}
                style={styles.cardImage}
              />
              <View style={styles.textRow}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.baseText}>VEECS</Text>
                  <Text style={styles.superscript}>(56 AUD/Unit)</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: hp(2), color: 'grey'}}>
                    $200/100U US $200.00
                  </Text>
                </View>
              </View>
              <View style={styles.cardRightText}>
                <Text style={{fontSize: hp(2.5), color: 'black'}}>
                  $2,509.75
                </Text>
                <Text
                  style={{fontSize: hp(2), color: 'black', color: '#21BF73'}}>
                  +9.77%
                </Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.sellButton]}  onPress={() => bottomSheetRef?.current?.open()}>
                <Text style={styles.actionButtonText}>SELL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.buyButton]}>
                <Text style={styles.actionButtonText}>BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
       
        
       
      </ScrollView>
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
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
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
    width: '100%',
    marginVertical: hp(1.5),
  },
  trendingText: {
    color: 'black',
    paddingHorizontal: wp(3.5),
    marginVertical: hp(1),
    fontWeight: '500',
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
    marginRight: wp(2),
  },
  cardContainer: {
    marginHorizontal: wp(1),
    marginVertical: hp(1),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 4,
    padding: hp(1),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  textRow: {
    alignItems: 'baseline',
    marginLeft: wp(2),
  },
  baseText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'black',
  },
  superscript: {
    fontSize: hp(1.8),
    lineHeight: 24,
    color: 'grey',
  },
  cardRightText: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),

    marginTop: hp(2),
  },
  actionButton: {
    paddingHorizontal: wp(16),
    paddingVertical: hp(1.5),
    borderRadius: 10,
  },
  sellButton: {
    backgroundColor: Colours.primaryred,
  },
  buyButton: {
    backgroundColor: Colours.primary,
  },
  actionButtonText: {
    fontSize: 19,
    color:Colours.white,
  },
});

import {Image, Pressable, StyleSheet, Text, View, Linking} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import React, {memo} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

function BookItem({
  title,
  rating,
  reviews,
  price,
  isLiked,
  imageLink,
  navigation,
}) {
  // console.log(isLiked);
  return (
    <View style={styles.listItemContainer}>
      <View
        style={{
          position: 'absolute',
          zIndex: 2,
          right: 7,
          top: 12,
          backgroundColor: 'white',
          borderRadius: 16,
          padding: 5,
        }}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={18}
          color="#d80000"
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('bookdetail', {bookId: imageLink})}
        style={({pressed}) => [
          styles.pressContainer,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{color: '#f8f3f3'}}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={{uri: imageLink}}
            />
          </View>
          <View style={styles.bookinfoContainer}>
            <View>
              <Text style={styles.title}>
                {title.length > 17 ? `${title.slice(0, 15)}...` : `${title}`}
              </Text>
            </View>
            <View style={styles.infoVerticalContainer}>
              <View style={{flex:1.5}}>
                <AirbnbRating
                  size={14}
                  defaultRating={rating}
                  isDisabled={false}
                  showRating={false}
                  selectedColor="#df9401"
                />
              </View >
              <View  style={{flex:1, paddingTop:3}} >
                <Text
                  style={{
                    paddingLeft: 4,
                    fontSize: 12,
                    fontFamily: 'Poppins Regular',
                  }}>{`(${reviews})`}</Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${price}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default memo(BookItem);

const styles = StyleSheet.create({
  listItemContainer: {
    position: 'relative',
    borderRadius: 15,
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 16,
    marginHorizontal: 16,
    height: 290,
    maxWidth: '43%',
    // backgroundColor: 'grey',
  },
  pressContainer: {flex: 1},
  innerContainer: {
    flex: 1,
  },
  imageContainer: {
    borderRadius: 15,
    // width:"50%",
    height: 219,
    overflow: 'hidden',
  },
  image: {
    // maxWidth:170,
    width: '100%',
    height: '100%',
  },
  bookinfoContainer: {
    // backgroundColor: 'peru',
    paddingLeft: 2,
    paddingTop: 4,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  infoVerticalContainer: {
    flexDirection: 'row',
    // justifyContent:"space-between",
    alignItems: 'center',
    // backgroundColor:"pink"
  },
  title: {
    fontSize: 16,
    // fontWeight: '700',
    fontFamily: 'Poppins SemiBold',
  },
  priceContainer: {
    paddingTop: 5,
    paddingLeft: 3,
  },
  price: {
    fontSize: 12,
    fontFamily: 'Poppins Medium',
  },
  pressed: {
    opacity: 0.9,
    backgroundColor: '#f8f3f3',
  },
});

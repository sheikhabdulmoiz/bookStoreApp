import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {useContext} from 'react';
import {BooksContext} from '../../store/context/book-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AirbnbRating} from 'react-native-ratings';
import PrimaryButton from '../components/PrimaryButton';

function BookDetailScreen({route, navigation}) {
  const BooksCtx = useContext(BooksContext);
  const bookId = route.params?.bookId;

  const selectedBookDetails = BooksCtx.books.find(
    book => book.imageLink === bookId,
  );
  // console.log(BooksCtx.books);
  // console.log(selectedBookDetails);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View style={styles.bookInfoContainer}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={{uri: selectedBookDetails.imageLink}}
              />
            </View>
            <View style={styles.bottomDescriptionContainer}>
              <View style={styles.leftmostContainer}>
                <View>
                  <Text style={styles.heading}>Rating</Text>
                </View>
                <View>
                  <AirbnbRating
                    size={12}
                    defaultRating={selectedBookDetails.rating}
                    isDisabled={false}
                    showRating={false}
                    selectedColor="#df9401"
                  />
                </View>
              </View>
              <View style={styles.leftmostContainer}>
                <View>
                  <Text style={styles.heading}>Reviews</Text>
                </View>
                <View>
                  <Text
                    style={
                      styles.headingInfo
                    }>{`(${selectedBookDetails.reviews})`}</Text>
                </View>
              </View>
              <View style={styles.leftmostContainer}>
                <View>
                  <Text style={styles.heading}>Price</Text>
                </View>
                <View>
                  <Text
                    style={
                      styles.headingInfo
                    }>{`$${selectedBookDetails.price}`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bookDetailsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.bookTitle}>{selectedBookDetails.title}</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.metaInfo}>Author:</Text>
                <Text style={styles.dataInfo}>
                  {' '}
                  {selectedBookDetails.author}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.metaInfo}>Country:</Text>
                <Text style={styles.dataInfo}>
                  {' '}
                  {selectedBookDetails.country}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.metaInfo}>Language:</Text>
                <Text style={styles.dataInfo}>
                  {' '}
                  {selectedBookDetails.language}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.metaInfo}>Year:</Text>
                <Text style={styles.dataInfo}> {selectedBookDetails.year}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.metaInfo}>Pages:</Text>
                <Text style={styles.dataInfo}>
                  {' '}
                  {selectedBookDetails.pages}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              bookUrl={() => Linking.openURL(selectedBookDetails.link)}
              image={
                <Image source={require('../assets/images/linklogo.png')} /> ///important
              }
              buttonText="View Details"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default BookDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    // marginBottom: 16,
    backgroundColor: '#FFFFFF',
    // backgroundColor:"white"
  },
  arrowContainer: {
    // backgroundColor:"red",
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom: 2,
    backgroundColor: '#FFFFFF',
  },
  bookInfoContainer: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 498,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 24,
    padding: 20,
    paddingBottom: 14,
    // backgroundColor: 'red',

    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    paddingTop: 75,
    flexGrow: 1,
    paddingTop: 18,
    paddingHorizontal: 8,
    paddingBottom: 24,
    // backgroundColor: '#ea7676',
  },
  imageContainer: {
    overflow: 'hidden',
    height: 410,
    width: '100%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomDescriptionContainer: {
    marginTop: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftmostContainer: {
    alignItems: 'center',
    // backgroundColor:"purple",
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: 14,
    fontFamily: 'Poppins Medium',
  },
  headingInfo: {
    fontSize: 12,
    fontFamily: 'Poppins Regular',
  },
  bookDetailsContainer: {
    // borderWidth: 0.5,
    marginTop: 16,
    marginBottom: 16,
  },
  metaInfo: {
    fontSize: 16,
    fontFamily: 'Poppins Medium',
  },
  dataInfo: {
    fontSize: 16,
    fontFamily: 'Poppins Regular',
  },
  bookTitle: {
    fontSize: 22,
    // fontWeight: '600',
    fontFamily: 'Poppins SemiBold',
    textTransform:"capitalize"
  },
  titleContainer: {
    marginBottom: 12,
  },
});

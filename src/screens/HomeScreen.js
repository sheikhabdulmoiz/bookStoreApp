import {View, StyleSheet, Text, ActivityIndicator, Image} from 'react-native';
import SearchBox from '../components/SearchBox';
import Header from '../components/header';
import BookList from '../components/BookList';
import {useState} from 'react';
import {useContext, useEffect} from 'react';
import {BooksContext} from '../../store/context/book-context';
import GetBooks from '../utils/BookApi';

function HomeScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [isEnabled, setIsEnable] = useState(true);
  const [data, setData] = useState([]);
  const [bookName, setBookName] = useState(undefined);
  const BooksCtx = useContext(BooksContext);

  // console.log(BooksCtx);

  function bookNameHandler(txt) {
    setBookName(txt);
  }

  const handleEnterPress = () => {
    if (bookName !== '') {
      setIsEnable(false);
      setLoading(true);
      const bkName = bookName.trim();
      const newBookName = bkName.toLowerCase();
      GetBooks()
        .then(resData => {
          const searchedBookDetails = resData.filter(
            book => book.title.toLowerCase().indexOf(newBookName) !== -1,
          );
          setData(searchedBookDetails);
        })
        .finally(() => {
          setIsEnable(true);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (!bookName) {
      setTimeout(() => {
        setLoading(true);
        setIsEnable(false);
        GetBooks()
          .then(resData => {
            setData(resData);
            BooksCtx.getAllBook(resData);
          })
          .finally(() => {
            setLoading(false);
            setIsEnable(true);
          });
      }, 500);
    }
  }, [bookName]);

  useEffect(() => {
    setIsEnable(false);
    GetBooks()
      .then(resData => {
        BooksCtx.getAllBook(resData);
        setData(resData);
      })
      .finally(() => {
        setLoading(false);
        setIsEnable(true);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
        <SearchBox
          isEnabled={isEnabled}
          bookName={bookName}
          onEnterPress={handleEnterPress}
          onGetBookName={bookNameHandler}
        />
      </View>
      <View style={styles.bottomContainer}>
        {isLoading ? (
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ActivityIndicator size="large" color="#004D6D" />
          </View>
        ) : data.length === 0 ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              // backgroundColor: 'lightgreen',
            }}>
            <View style={styles.notFoundImageContainer}>
              <Image
                style={styles.notFoundImage}
                source={require('../assets/images/booknotfound.png')}
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Soory! Not found..</Text>
            </View>
          </View>
        ) : (
          <BookList bookData={data} navigation={navigation} />
        )}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: 'green',
    paddingTop: 16,
  },
  topContainer: {
    // backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  bottomContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    overflow: 'hidden',
  },
  notFoundImageContainer: {
    width: 175,
    height: 175,
  },
  notFoundImage: {
    width: '100%',
    height: '100%',
  },
});

import {
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import BookItem from './BookItem';

function BookList({navigation, bookData}) {

  function renderBookItem(itemData) {
    const item = itemData.item;
    const bookItemProps = {
      title: item.title,
      rating: item.rating,
      reviews: item.reviews,
      price: item.price,
      isLiked: item.is_liked,
      imageLink: item.imageLink,
      navigation: navigation,
    };
    return <BookItem {...bookItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        renderItem={renderBookItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.imageLink.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
  },
  flatListContent: {
    padding: 8,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default BookList;

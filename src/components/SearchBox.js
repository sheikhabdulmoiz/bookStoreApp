import {View, TextInput, StyleSheet, Image} from 'react-native';

function SearchBox({onGetBookName, bookName, onEnterPress, isEnabled}) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchIconContainer}>
        <Image
          source={require('../assets/images/Icon.png')}
          style={{width: 15, height: 13}}
        />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          editable={isEnabled}
          keyboardType="ascii-capable"
          onChangeText={onGetBookName}
          value={bookName}
          style={styles.textInput}
          placeholder="Search..."
          returnKeyType="done"
          onSubmitEditing={onEnterPress}
        />
      </View>
    </View>
  );
}
export default SearchBox;

const styles = StyleSheet.create({
  searchContainer: {
    // backgroundColor: '#d7b4b4',
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    borderRadius: 24,
    overflow: 'hidden',
    paddingHorizontal: 8,
  },
  textInput: {
    backgroundColor: '#EFEFEF',
    fontWeight: '400',
  },
  searchIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: 9,
  },
});

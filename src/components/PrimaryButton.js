import {View, Text, StyleSheet, Pressable} from 'react-native';

function PrimaryButton({buttonText, image, bookUrl}) {
  // console.log(image);
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={bookUrl}
        style={({pressed}) => [
          pressed
            ? [styles.pressContainer, styles.pressed]
            : styles.pressContainer,
        ]}
        android_ripple={{color: '#042f3f'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{paddingRight: 10}}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
          <View>{image}</View>
        </View>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: '#',
    overflow: 'hidden',
    elevation: 2,
  },
  pressContainer: {
    flex: 1,
    backgroundColor: '#004D6D',
    paddingVertical: 12,
  },

  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins Medium',

    textAlign: 'center',
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
});

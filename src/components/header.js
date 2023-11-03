import {View, Text, StyleSheet, Image} from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userNameContainer}>
        <Text style={styles.nameText}>Hi! Abdul Moiz</Text>
      </View>
      <View style={styles.profilePicContainer}>
        <Image style={styles.imageIcon} source={require("../assets/images/icon2.png")} />
      </View>
    </View>
  );
}
export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    marginBottom:16

  },
  userNameContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  profilePicContainer: {
    // backgroundColor: 'green',
    alignItems: 'flex-end',
  },
  nameText:{
    fontSize:18,
    fontFamily:"Poppins SemiBold"
  },
  imageIcon:{
    width:40,
    height:40
  }
});

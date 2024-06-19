import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

const CustomBookDetailsTabBar = () => {
  return (
    <View style={styles.container}>
       <MaterialIcons
          name="headphones"
          size={50}
          color={colors.gray}
          style={styles.icon} 
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 90,
    paddingVertical: 20,
    backgroundColor: colors.lightBrown,
    borderRadius: 20,
  },
  text: {
    color: colors.white,
    fontSize: 22,
  },
  icon: {
    borderRadius: 180,
    backgroundColor: colors.lightGray,
    color: colors.black,
    padding: 10
  }
});
export default CustomBookDetailsTabBar;

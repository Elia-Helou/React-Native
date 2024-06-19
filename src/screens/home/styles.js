import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    backgroundColor: colors.lightGreen,
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  categoryButton: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
  },
  categoriesContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  categoriesStyle: {
    marginLeft: 20,
  },
  bookContainer: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: 15,
    width: width / 2.5,
    marginBottom: 20,
  },
  imageStyle: {
    height: 250,
    width: width / 2.5,
    borderRadius: 10,
  },
  container2: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookName: {
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 10,
    fontSize: 15,
  },
  bookText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  newBookContainer: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  newImageStyle: {
    height: 100,
    width: 80,
    borderRadius: 10,
  },
  containerContent: {
    padding: 15,
  },
  selectedCategoryButton:{
    backgroundColor: colors.lightBrown
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#D0D0D0',
    borderRadius: 15,
    padding: 5,
    zIndex: 1,
  },
});

export default styles;

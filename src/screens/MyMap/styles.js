import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGreen,
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 20,
      },
      containerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      },
      bookImage: {
        borderRadius: 20,
        height: 300,
        width: 350,
      },
      userImage: {
        height: 60,
        width: 60,
        borderRadius: 180
      },
      titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black
      },
      textStyle2: {
        color: colors.black,
        fontWeight: 'bold'
      },
      detailsView:{
        backgroundColor: colors.white,
        padding: 10,
        height: 40,
        borderRadius: 10,
        marginLeft: 10
      },
      contentText: {
        fontSize: 17,
        color: colors.black,
        marginTop: 20
      }
      
  });
  
export default styles;
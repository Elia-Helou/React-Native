import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';
import nativeImage from '../../assets/images/native.jpg';
import userImage from '../../assets/images/user.jpg';
import styles from './style';
import colors from '../../constants/colors';

const BookDetails = () => {
  const info = [
    'Sci-Fi',
    'Fantasy',
    '4 rating',
    '325 page',
    'English',
    'recommended',
  ];

  const text =
    'In the mystical realm of Elysium, where magic and advanced technology coalesce, "Chronicles of Elysium: Echoes of the Aether" unfolds an epic tale that spans across galaxies and dimensions. As the cosmic balance between magic and science teeters on the edge, a reluctant hero, Seraphina was found there  unfolds an epic tale that spans across galaxies and dimensions. As the cosmic balance between magic and science teeters on the edge, a reluctant hero  unfolds an epic tale that spans across galaxies and dimensions. As the cosmic balance between magic and science teeters on the edge, a reluctant hero';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={nativeImage} style={styles.bookImage} />
      <View style={styles.containerText}>
        <Text style={styles.titleStyle}>Native Invisibility</Text>
        <Text style={[styles.titleStyle, {color: colors.darkGreen}]}>$80</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image source={userImage} style={styles.userImage}></Image>
        <View style={{paddingStart: 10}}>
          <Text style={[styles.textStyle2, {fontSize: 18}]}>Darrin Collin</Text>
          <Text style={styles.textStyle2}>Auhtor</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', marginTop: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {info.map((item, index) => (
          <View key={index} style={styles.detailsView}>
            <Text style={[styles.textStyle2, {color: colors.lightBrown}]}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.contentText}>{text}</Text>
    </ScrollView>
  );
};

export default BookDetails;

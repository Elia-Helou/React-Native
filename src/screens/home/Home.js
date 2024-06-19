import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import nativeImage from '../../assets/images/native.jpg';
import sameImage from '../../assets/images/same.jpg';
import alchImage from '../../assets/images/alchimist.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'Thriller', isSelected: true},
    {id: 2, name: 'Fantasy', isSelected: false},
    {id: 3, name: 'Mystery', isSelected: false},
    {id: 4, name: 'Horror', isSelected: false},
    {id: 5, name: 'Comedy', isSelected: false},
    {id: 6, name: 'SciFi', isSelected: false},
    {id: 7, name: 'Adventure', isSelected: false},
  ]);

  const books = [
    {
      id: 1,
      name: 'Same Same',
      author: 'Peter M.',
      rating: 5,
      src: nativeImage,
    },
    {
      id: 2,
      name: 'Native Invisibility',
      author: 'Darrin Collin',
      rating: 4,
      src: sameImage,
    },
    {
      id: 3,
      name: 'The Alchemist',
      author: 'Paulo Coelho',
      rating: 5,
      src: alchImage,
    },
  ];

  const handleCategoryPress = index => {
    const updatedCategories = categories.map((item, ind) => ({
      ...item,
      isSelected: ind === index ? !item.isSelected : false,
    }));
    setCategories(updatedCategories);
  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  const navigateToBookDetails = () => {
    navigation.navigate('BookDetailsScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.textContainer, {marginTop: 0}]}>
        <Text style={styles.title}>Book Category</Text>
        <Text>See all</Text>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={styles.categoriesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View key={item.id} style={styles.categoriesStyle}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  item.isSelected && styles.selectedCategoryButton,
                ]}
                onPress={() => handleCategoryPress(index)}>
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Trending now</Text>
        <Text>See all</Text>
      </View>
      <View style={styles.container2}>
        {books.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bookContainer}
            onPress={navigateToBookDetails}>
            <Image source={item.src} style={styles.imageStyle} />
            <AntDesign
              name="hearto"
              size={20}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.bookName}>{item.name}</Text>
            <Text style={styles.bookText}>{item.author}</Text>
            <Rating
              type="star"
              ratingCount={5}
              startingValue={item.rating}
              imageSize={20}
              onFinishRating={ratingCompleted}
              style={{paddingVertical: 10}}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>New Publish</Text>
        <Text>See all</Text>
      </View>
      <View style={styles.newBookContainer}>
        <Image source={alchImage} style={styles.newImageStyle} />
        <View style={styles.containerContent}>
          <Text style={styles.title}>The Alchemist</Text>
          <Text>By Paulo Coelho</Text>
          <AntDesign name="star" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

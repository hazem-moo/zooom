import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Products from '../data/Products'
import Cover from './Cover'

const Home = ({ navigation }) => {
  
  let Item = ({ item }) => (
    <TouchableOpacity 
      className='w-36 h-52 rounded-2xl overflow-hidden m-3 '
      onPress={() => navigation.navigate('Food', { item }) }
    >
      <Image source={ item.src } className='w-full h-full' />
      <Text className='text-yellow-200 text-lg z-10 absolute bottom-0'>{ item.title }</Text>
    </TouchableOpacity>
  )

  const Total = ({ foods }) => {
    return (
      <FlatList
        className='mb-6'
        data={ foods }
        showsHorizontalScrollIndicator={ false }
        horizontal
        renderItem={({item}) => <Item item={item} />}
      />

    )
  }
  return (
    <SafeAreaView >
      <ScrollView>
        <View className='pt-5 bg-orange-600'></View>
        <Cover />
        <FlatList
          data={ Products }
          renderItem={({ item }) => {
            return (
              <>
                <View className='bg-orange-600  items-center '>
                  <Text className='text-yellow-200 py-3 text-2xl'>{ item.title }</Text> 
                </View>
                <Total foods={ item.data } />
              </>
            )
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
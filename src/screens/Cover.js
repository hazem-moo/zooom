import { View, Text, Image } from 'react-native'
import React from 'react'

const Cover = () => {
  return (
    <View className='mb-4'>
      <Image source={ require('../img/cover.jpg') } className='w-full h-auto' />
    </View>
  )
}

export default Cover
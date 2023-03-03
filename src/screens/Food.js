import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectItemWithId } from '../redux/basketSlice'

const Food = ({ navigation, route }) => {
    const { item } = route.params
    const dispatch = useDispatch()
    const items = useSelector(state => selectItemWithId( id ) )
    const addItemToBasket = () => {
        dispatch( addToBasket({ item }) )
    }
    

    return (
        <SafeAreaView>
            <ScrollView className='w-full'>
                <TouchableOpacity
                    className='absolute top-8 left-5 z-20'
                    onPress={() => navigation.goBack() }
                    >
                    <FontAwesome 
                        name='arrow-circle-right'
                        size={ 40 } 
                        color='#ea580c'
                    />
                </TouchableOpacity>
                <Image
                    source={ item.src }
                    className='w-full h-96'
                />
                <View 
                    className='py-3 bg-orange-600 items-center my-6'
                >
                    <Text 
                        className='text-yellow-200 text-2xl '
                    >
                        { item.title }
                    </Text>
                </View>

                <Text 
                    className='text-lg px-2 text-center'
                >
                    { item.description }
                </Text>

                <View className='flex-row bg-orange-600 justify-between px-5 my-5 mb-24 py-2'>
                    <Text className='text-xl text-yellow-200 font-extrabold'>
                        { item.price }
                    </Text>
                    {/* increase and decrease the item */}
                    <View className='flex-row w-20 justify-between'>
                        <TouchableOpacity onPress={ addItemToBasket }>
                            <FontAwesome
                                name='plus-circle' 
                                size={ 30 } 
                                color='#fff' 
                            />
                        </TouchableOpacity>

                        <Text className='text-yellow-200 text-base'>
                            { items.length }
                        </Text>
                        <TouchableOpacity>
                            <FontAwesome name='minus-circle' size={ 30 } color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* icon shopping  */}
                <TouchableOpacity
                    className='absolute items-center bottom-4  left-1/2 right-1/2 flex-row w-20 justify-around rounded-2xl p-1 bg-orange-600'
                    onPress={() => navigation.navigate('Basket')}
                >
                    <Text className='text-base font-bold text-yellow-200'>
                        { items.length
                         }
                    </Text>
                    <FontAwesome
                        name='shopping-cart'
                        size={ 40 }
                        color='#fff'
                    />
                </TouchableOpacity>
                </ScrollView>
        </SafeAreaView>
    )
}

export default Food
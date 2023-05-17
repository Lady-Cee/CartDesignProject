import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FoodList = ({FoodContent}) => {
  return (
    <View 
    style={{
        backgroundColor:'white',
        padding:8,
        marginTop:20,
        borderRadius:12, 
        marginLeft: 10,
        // margin: marginRight,
        height:250,
        width:240,
        marginBottom:70

        }}>

     <View>
         <Image
        source={FoodContent.image}
        resizeMode='cover'
        style={{width:230, height:150, borderRadius:12}}/>

       <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'white',
            position:'absolute',
            paddingHorizontal:8,
            paddingVertical:6,
            borderRadius:8,
            top:12,
            right:10
          }}>
             <View style={{justifyContent:'center'}}>
                <Image
                  source={require('../assets/images/star.png')}
                  style={{width:14, height:14}}
                  />
            </View>
            <View style={{justifyContent:'center'}}>
                <Text style={{fontWeight:'bold'}}>{FoodContent.rating}</Text>
            </View>

          </View>
        </View>

        <View style={{padding:12}}>
        <Text 
         numberOfLines={1}
          style={{
            fontFamily:'Inter-SemiBold', 
            fontSize:12, fontWeight:'800'}}>
                {FoodContent.title}</Text>

        <Text 
            style={{
                fontFamily:'Inter-SemiBold', 
                fontSize:12, 
                paddingTop:8, 
                fontWeight:'600',
                 color:'green'}}>
                    ${FoodContent.price.toFixed(2)}</Text>
</View>
        </View>
  )
}

export default FoodList

const styles = StyleSheet.create({})
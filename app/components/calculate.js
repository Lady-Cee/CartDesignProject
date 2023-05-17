import { StyleSheet, Text,Image,  View } from 'react-native'
import React from 'react'

const CalculateAll = () => {
  return (
    <View style={{
        height:200, 
        width:'90%', 
        backgroundColor:'green',
        alignSelf:'center',
        position:'absolute',
        top:520,
        borderRadius:20}}>
            <View style={{flexDirection:'row', marginLeft:25, marginTop:10, gap:170}}>
                <View>
                    <Text style={{color:'#fefae0', fontFamily:'Inter-Regular', fontSize:12}}>Ice Cream </Text>
                    <Text style={{color:'#fefae0', fontFamily:'Inter-Regular', fontSize:12}}>Meat Pie</Text>
                    <Text style={{color:'#fefae0', fontFamily:'Inter-Regular', fontSize:12}}>Pop Corn</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={{color:'#fefae0', fontFamily:'Inter-Regular', fontSize:12}}>458 </Text>
                    <Text style={{color:'#fefae0', fontFamily:'Inter-Regular', fontSize:12}}>  50</Text>
                    <Text style={{color:'#fefae0', fontFamily:'Inter-Regular', fontSize:12}}> -60</Text>
                </View>
                <View>
                    <Image source={require('../assets/icon/euro.png')} style={{width:7, height:7, tintColor:'#fefae0', marginTop:7}}/>
                    <Image source={require('../assets/icon/euro.png')} style={{width:7, height:7, tintColor:'#fefae0', marginTop:11}}/>
                    <Image source={require('../assets/icon/euro.png')} style={{width:7, height:7, tintColor:'#fefae0', marginTop:14}}/>
                    
                </View>
                </View>
                
            </View>
                <Text style={{marginLeft:20, color: '#fefae0'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>

            <View style={{flexDirection:'row', marginLeft:25, gap:210}}>
                <View>
                <Text style={{color:'#fefae0', fontFamily:'Inter-Bold', fontSize:12}}>Total</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:'#fefae0', fontFamily:'Inter-Bold', fontSize:12}}>448 </Text> 
                 <Image source={require('../assets/icon/euro.png')} style={{width:7, height:7, tintColor:'#fefae0', marginTop:6}}/>
                 </View>
            </View>
        <View style={{
             height:50, 
             width:'90%', 
             backgroundColor:'#fefae0',
             position:'absolute',
             top:130,
             alignSelf:'center',
             borderRadius:10,
        }}>
            <Text style={{color:'green', alignSelf:'center', marginTop:12}}>Thanks for shopping with us </Text>
        </View>
    </View>
  )
}

export default CalculateAll

const styles = StyleSheet.create({})
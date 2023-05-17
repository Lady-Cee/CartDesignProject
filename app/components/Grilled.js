import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';

const Grilled = () => {

    const[count, setCount] = useState(1);
    let decrementCount = () => {
      if (count > 1) {
         setCount(count-1)
      }
     
    }
  
    let incrementCount = () => {
        setCount(count + 1)
      }
  
  return (
    
         <View style={styles.chickenrow}>
          <View style={{marginTop:30, marginLeft:15}}>
            <Image source={require('../assets/images/chickenplate.png')}
            style={{height:70, width:70, borderRadius:30 }}/>
          </View>

          <View style={{marginTop: 20, marginLeft:15,}}>
              <Text style={{fontFamily:'Inter-Bold', fontSize:13, }}>Grilled Chicken </Text>
              <Text style={{fontFamily:'Inter-Regular', fontSize:14, marginTop:13}}>Onitsha </Text>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontFamily:'Inter-Bold', fontSize:15, marginTop:10}}>{count *230}  </Text> 
                <Image source={require('../assets/icon/euro.png')}
                style={{width:13, height:13, marginTop:15}}/>
            </View>
          </View>

            <View style={{flexDirection:'row', gap:10, marginTop: 50, marginLeft:2}}>
                <View style={{height:30, width:30, borderWidth:1.5, borderColor:'green',  backgroundColor:'whitesmoke', borderRadius:7}}>
                  <TouchableOpacity onPress={decrementCount}>
                    <Image source={require('../assets/icon/minus.png')}
                            style={{width:20, height:20, alignSelf:'center', marginTop:5, tintColor:'green'}}/>
                  </TouchableOpacity>
                </View>

              <Text style={{fontFamily:'Inter-Bold', fontSize:20}}> {count} </Text>
              <View style={{height:30, width:30, color: 'red',  backgroundColor:'green', borderRadius:7}}>
                  <TouchableOpacity onPress={incrementCount}>
                    <Image source={require('../assets/icon/plus.png')}
                            style={{width:20, height:20, alignSelf:'center', marginTop:5, tintColor:'white'}}/>
                  </TouchableOpacity>
                </View>
            </View>
        </View>

    

  )
}

export default Grilled

const styles = StyleSheet.create({
    chickenrow:{
        height:120,
        width:'90%',
        backgroundColor: "#fefae0",
        position:'absolute',
        top:380,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row' 
      }
})
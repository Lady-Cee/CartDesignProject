import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react';
import { useState } from 'react';

const Swipe = () => {
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
    <View style={{flex:1, justifyContent:'flex-end', backgroundColor:' whitesmoke'}}>
         <View style={styles.chickendelete}>
            <Image source={require('../assets/icon/delete.png')}
              style={{
                width:30, 
                height:30, 
                tintColor:"white",
                marginTop:40,
                marginLeft: 280}}/>
         

            </View>
        <View style={styles.chickenchips}>
        <View style={styles.burger}>
          <View style={{marginTop:30, marginLeft:15}}>
            <Image source={require('../assets/images/chickenchips.jpg')}
            style={{height:70, width:70,borderRadius: 20}}/>
          </View>

          <View style={{marginTop: 20, marginLeft:15,}}>
              <Text style={{fontFamily:'Inter-Bold', fontSize:13, }}>Chicken and Chips</Text>
              <Text style={{fontFamily:'Inter-Regular', fontSize:14, marginTop:13}}>Awka </Text>
            <View style={{flexDirection:"row", gap:10}}>
                <Text style={{fontFamily:'Inter-Bold', fontSize:15, marginTop:10}}>{count *99}</Text> 
                <Image source={require('../assets/icon/euro.png')}
                style={{width:13, height:13, marginTop:15}}/>
            </View>
          </View>

            <View style={{flexDirection:'row', gap:10, marginTop: 50, marginLeft:-15, }}>
                <View style={{height:30, width:30, borderWidth:1.5, borderColor:'green',  backgroundColor:'whitesmoke', borderRadius:7, }}>
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

        </View>   
    </View>
  )
}

export default Swipe

const styles = StyleSheet.create({
    chickendelete:{
        height:120,
        width:'90%',
        backgroundColor: '#c1121f',
        position:'absolute',
        top:240,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row'    
      },
    chickenchips:{
        height:120,
        width:'80%',
        backgroundColor: '#fefae0',
        position:'absolute',
        borderTopRightRadius:12,
        borderBottomRightRadius:12,
        top:240,
        
      },

      burger:{
        height:120,
        width:'130%',
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row'    
      },
})

import { StyleSheet, Text, Image,View, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CalculateAll from '../components/calculate';
import Swipe from '../components/Swipe';
import Grilled from '../components/Grilled';

const ProductScreen = () => {
  
  const navigation = useNavigation();

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
        <View style={styles.header} >
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={require("../assets/icon/lessthan.png")}
                    style={{width:40, height:40}}/>

          </TouchableOpacity>
          <Text style={{
              fontFamily:'Inter-Bold', 
              marginTop:8,
              fontSize:16}}
              > Stutern project on Mobile Dev 
          </Text>
        </View>

        <View style={styles.burger}>
          <View style={{marginTop:30, marginLeft:15}}>
            <Image source={require('../assets/images/burger.jpg')}
            style={{height:70, width:70,borderRadius: 20}}/>
          </View>

          <View style={{marginTop: 20, marginLeft:15,}}>
              <Text style={{fontFamily:'Inter-Bold', fontSize:13, }}>Hamburger</Text>
              <Text style={{fontFamily:'Inter-Regular', fontSize:14, marginTop:13}}>Abuja </Text>
            <View style={{flexDirection:"row", gap:10}}>
                <Text style={{fontFamily:'Inter-Bold', fontSize:15, marginTop:10}}>{count *129}</Text> 
                <Image source={require('../assets/icon/euro.png')}
                style={{width:13, height:13, marginTop:15}}/>
            </View>
          </View>

            <View style={{flexDirection:'row', gap:10, marginTop: 50, marginLeft:30
          }}>
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

          
        {/* <View style={{position:'absolute', top:230, }}>
        <SwipeListView
          data={this.state.listViewData}
           horizontal
           renderItem={(item, rowMap) => (
            <View style={{padding:10, borderWidth:1}}>
            <Text>I am in a swipe list view  </Text>
          </View>
           )}
           renderHiddenItem={(data, rowMap) => (
            <View style={{height:10, width:20,backgroundColor:"green", }}>
                   <Text>Left </Text>
                  <Text>Right </Text> 
            </View>
           )}
           leftOpenValue={75}
           rightOpenValue={-75}
        />
        </View>  */}
        
       
            <Swipe/>
            <Grilled/>
           <CalculateAll/>
          
   
    </View>
    
      
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    gap:10,
    position:'absolute',
    top:30,
  },
  burger:{
    height:120,
    width:'90%',
    backgroundColor: "#fefae0",
    position:'absolute',
    top:100,
    alignSelf:'center',
    borderRadius:10,
    flexDirection:'row'    
  },

})
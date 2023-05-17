import { ImageBackground, StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { categories } from '../components/externalData';
import FoodList from '../components/foodList';

const HomeScreen = ({onPress}) => {
    const navigation = useNavigation();
  return (
    <ImageBackground 
        source={require('../assets/images/bkgrd.jpg')}
        style={styles.background}>
           
            <View style={styles.itemContent}>
                <View style={{
                    flexDirection:'row', 
                    justifyContent:'space-between', 
                    marginTop:30, 
                    paddingLeft:20, 
                    paddingRight:20}}>
                
                <Text style={{
                    fontFamily:'Inter-SemiBold', 
                    fontSize:18,
                    fontWeight:'500', 
                    color:'black'}}>Recommended </Text>

                <TouchableOpacity onPress={onPress}>
                    <Text style={{
                        fontFamily:'Inter-SemiBold', 
                        fontSize:14, 
                        color:'green'}} > View All </Text>
                        
                </TouchableOpacity>


        </View>
            <FlatList
                    data={categories}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index})=>{
                        return (
                           <TouchableOpacity
                            onPress={() => navigation.navigate('ProductScreen')}>
                            <FoodList
                            FoodContent={item}
                            />
                                
                           </TouchableOpacity>
                        ) 

                    }}/>
            </View>
           
           <View style={styles.headerImg}>           
                <View>
                    <Image style={styles.img} source={require("../assets/images/menu.png")}/>
                </View>
                <View style={styles.leftHeaderImg}>
                    <View>
                        <Image style={styles.img} source={require("../assets/images/bag.png")}/>
                    </View>

                    <View >
                        <Image style={styles.img} source={require("../assets/images/shopping-cart.png")}/>
                    </View>
                </View>
         </View>

         
         

    </ImageBackground>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
    background:{
        flex:1, 
        justifyContent:'flex-end',
         alignItems: 'flex-start'
        },
    itemContent:{
        width:'100%', 
        height:'60%', 
        backgroundColor:'white' ,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    img:{
        width:30,
        height:30,
        marginLeft:20,
        tintColor:'white',
        
        
    },

    headerImg:{
       flexDirection: 'row',
       position:'absolute',
       top:40,
    },
    
    leftHeaderImg:{
        flexDirection:'row',
        marginLeft:180

    },
    listItem:{

    },

})
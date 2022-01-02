import React from 'react'
import { View, Text, Image } from 'react-native'
import MenuItem from './MenuItem';

const image = "https://cdn.yenicaggazetesi.com.tr/news/476189.jpg"; 
const title = "Burger King"; 

const description = "Fast-Food"; 

export default function About(props) {
    const {name, image, rating, categories} = props.route.params; 
    return (
        <View>
            <RestaurantImage image = {image}/>
            <RestaurantTitle title = {name} />
            <RestaurantDescription description= {description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source = {{ uri: props.image}} style = {{width: "100%", height: 220}} />
); 

const RestaurantTitle = (props) => (
    <Text style = {{
       
        fontSize: 29,
        fontWeight: "600", 
        marginTop: 10,
        marginHorizontal: 15,  

    }}>{props.title}</Text>
);


const RestaurantDescription = (props) => (
    <Text
        style= {{
                
        fontSize: 15,
        fontWeight: "400", 
        marginTop: 10,
        marginHorizontal: 15,    
        }}
    > {props.description}</Text>
);








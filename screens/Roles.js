import React from 'react';
import axios from "axios";
import { ListItem } from "@rneui/themed";
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';


export const Roles = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        axios
            .get("https://api.lagtinget.ax/api/roles.json")
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log("Network error: " + err, "Please try again later");
            });
    }, []);

    const renderItem = ({ item }) => {
        console.log(item);
        return (<ListItem
            bottomDivider
            onPress={() =>
                navigation.navigate("Overview", { role: item.title, id: item.id })
            }
        >

            <Text style={{ fontSize: 36 }}>{item.title}</Text>
        </ListItem>);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
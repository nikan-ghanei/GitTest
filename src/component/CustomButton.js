import {useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveScreenWidth, responsiveWidth} from 'react-native-responsive-dimensions';

export const CustomButton = ({ title, onPress }) => {
    const { colors } = useTheme();


    return (

        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <View>

            </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({

    button: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        height:responsiveWidth(9),
        width:responsiveWidth(9),
        borderRadius: 20,
        borderColor:'gray',
        borderWidth:.5

    },


});

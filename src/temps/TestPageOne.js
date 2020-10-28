import React, {useContext, useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';

import {
    Image,
    Modal, ScrollView,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveScreenWidth,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomButton} from '../component/CustomButton';
import constStyles from '../tools/constStyles';
import {Strings} from '../tools/Strings';

import MenuBtton from '../assets/svg/MenuButton.svg';
export function TestPageOne({navigation}) {
    const renderBackGround =()=>{
        return(
            <View style={{backgroundColor:'red'}}></View>
        );
    };
    return(
        <View style={{flex:1}}>
        {renderBackGround()}
            {}
        </View>
    );

};

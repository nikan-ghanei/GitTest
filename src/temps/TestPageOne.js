import React, {useContext, useEffect, useState} from 'react';

import {
    Image,
    Modal, ScrollView,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveScreenWidth,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomButton} from '../component/CustomButton';
// import constStyles from '../tools/constStyles';
// import {Strings} from '../tools/Strings';
import ShurjaIcon from '../assets/svg/akaic.svg';
export function TestPageOne({navigation}) {
     const CustomTextInput =(title) =>{
       return(
           <TextInput placehoder:{title}>

       </TextInput>
       )

    }
    const renderBackGround =()=>{
        return(
            <View style={{backgroundColor:'red'}}>
                <ViewIconShurja/>
                {CustomTextInput('sss')}
             <CustomButton>
                    <Text>sign in</Text>
                </CustomButton>
            </View>
        );
    };
    return(
        <View style={{flex:1}}>
        {renderBackGround()}
            {}
        </View>
    );
    const ViewIconShurja = () => {
        return (
            <View>
                <ShurjaIcon width={responsiveScreenWidth(8)}
                            height={responsiveScreenWidth(8)}
                            style={{}}
                />

            </View>
        );
    }
};

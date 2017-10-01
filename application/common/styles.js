/**
 * 样式
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    nums:{
        backgroundColor:'red',
        color:'#fff',
        borderRadius:10,
        paddingLeft:4,
        paddingRight:4,
        textAlign:'center',
        fontSize:11
    },
    numb:{
        backgroundColor:'red',
        color:'#fff',
        borderRadius:10,
        paddingLeft:2,
        paddingRight:2,
        textAlign:'center',
        fontSize:11
    }
});
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import CardMensagem from '../componentes/CardMensagem'
import api from '../services/api';

export default function Cadastro() {

   
    return (
        <View style={styles.container}>           
            <Text style={styles.titulo} >Cadastro de produtos!</Text>           
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:
    {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    btnProduto:
    {
        borderRadius: 100
    }
});

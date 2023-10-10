import React, { useState }from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch, Button } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 0, valor: 'Masculino'},
    {key: 1, valor: 'Feminino'},
    {key: 2, valor: 'Prefiro não me identificar'},
  ]);
  const [valor, setValor] = useState(250)
  const [status, setStatus] = useState(false)
  
  
  
  function abrirConta() {
    
    if(nome === '' || idade === ''){
      alert("Preencha os dados Corretamente!")
      return;
    }
    
    alert(
      `Conta aberta com sucesso!!\n\n
      Nome: ${nome}\n
      Idade: ${idade}\n
      Sexo: ${sexo[sexoSelecionado].valor}\n
      Limite Conta: R$${valor.toFixed(0)}\n
      Estudante: ${status ? 'Sim' : 'Não'}`
      );
    }
    
    const sexoItem = sexo.map( (value, key) => {
      return <Picker.Item key={key} value={key} label={value.valor} color= '#606060'/>
    });

  return(
    <View style={styles.container}>

      <ScrollView>
      
      <View style={styles.head} ></View>
      <View style={styles.head2} ></View>

      
      <View style={styles.logo} > 
      <Text style={styles.logoText}>  NUBANCO </Text>
      </View>

      <View style={styles.inputs}>

        <Text style={{color: '#606060', marginBottom: 15, fontSize: 20}}> Nome Completo: </Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor='#606060' onChangeText={ (text) => setNome(text) }></TextInput>
    
    
        <Text style={{color: '#606060', marginBottom: 15, fontSize: 20, marginTop: 30}}> Idade: </Text>
        <TextInput style={styles.input} placeholder="Digite sua idade" placeholderTextColor='#606060' onChangeText={ (text) => setIdade(text)} keyboardType="numeric"></TextInput>

      </View>


      <View>

      <Text style={{color: '#606060', marginBottom: 15, fontSize: 20, marginTop: 30}} > Gênero: </Text>
      <Picker
       selectedValue={sexoSelecionado}
       onValueChange={ (itemValue, itemIndex) => setSexoSelecionado(itemValue) }
       dropdownIconColor='#606060'
      >
        {sexoItem}
      </Picker>

      {/* RESPOSTA <Text style={styles.textCol}> {sexo[sexoSelecionado].valor} </Text> */}

      </View>

      <View>

        <Text style={{color: '#606060', marginBottom: 15, fontSize: 20, marginTop: 30, marginLeft: 5}}> Limite Disponível: </Text>
        <Slider 
          minimumValue={250}
          maximumValue={2500}
          value={valor}
          onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
          style={styles.slid}
          maximumTrackTintColor="#7900ED"
          minimumTrackTintColor="#7900ED"
          thumbTintColor="#7900ED"
        />

        <Text style={{color: '#606060', marginTop: 30, fontSize: 18, marginLeft: 5}}> R${valor.toFixed(0)} </Text>

      </View>

      <View style={{marginBottom: 50}}>

      <Text style={{color: '#606060', marginTop: 30, fontSize: 18}}> Estudante: {status ? 'Sim' : 'Não'} </Text>
      <Switch 
        value={status}
        onValueChange={ (valorSelecionado) => setStatus(valorSelecionado) }
        thumbColor='#7900ED'
        trackColor={{ false: '#121212', true: '#7900ED' }}
      />

      </View>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.botao} onPress={ abrirConta }>
          <Text style={styles.btnText}> ABRIR CONTA </Text>
        </TouchableOpacity>

      </View>
      
     

      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  head: {
    backgroundColor: '#8109E4',
    height: 150,
  },
  head2:{
    backgroundColor: '#121212',
    height: 4,
  },
  logoText: {
    color: '#7900ED',
    fontSize: 25,
  },
  logo: {
    marginTop: 30,
    marginLeft: -4
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#606060',
    width: 390,
    color: '#606060'
  },
  inputs: {
    marginTop: 30,
    marginLeft: 5
  },
  pick: {
   margintop: 30
  },
  textCol: {
    color: '#606060'
  },
  slid: {
    marginLeft: -4
  },
  btnArea: {
    marginTop: 50,
    marginBottom: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    backgroundColor: '#8109E4',
    borderColor: '#7900ED',
    borderWidth: 2,
    borderRadius: 25
  },
  btnText: {
    color: '#ddd',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  }
});

export default App;
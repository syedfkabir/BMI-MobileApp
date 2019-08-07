import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bmi_calc_component from './components/Bmi_calc_component';
import Navigation_Component from './components/Navigation_Component';



export default class App extends Component {


  render() {
    
    return (
      
          <Bmi_calc_component></Bmi_calc_component>
      
    );
  }
}


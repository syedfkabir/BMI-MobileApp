import React, {Component} from 'react';
import {StyleSheet, 
    Text, 
    View, 
    Slider, 
    Button, 
    Picker, 
    Image } from 'react-native';



export default class Bmi_calc_component extends Component {

    constructor(props){
        super(props);
        this.state = {slideValue:36, 
                      slideValue2:80,
                      slideValue3:0, 
                      bmiValue:0, 
                      gender:'',
                      status:''}
    }
    render() {
        return (
            <View style={styles.container}>

            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={{fontWeight: 'bold' , color: 'white'}}>Welcome to the BMI Calculator Mobile App</Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Please set the data below, then click Calculate BMI</Text>
            <Text></Text>
            <Text></Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Your age in Years: {this.state.slideValue3} years</Text>
     
            <Slider style={{width: '75%' }} 
                    step={1}
                    minimumValue={0}
                    maximumValue={120}
                    value={this.state.slideValue3} 
                    onValueChange={(slideValue3) => this.setState({slideValue3}) }
            />
    
            <Text style={{fontWeight: 'bold', color: 'white'}}>Your Height in Feet:  {Number(((this.state.slideValue/12).toFixed(1)))}'</Text>
    
            <Slider style={{width: '75%' }} 
                    step={1}
                    minimumValue={36}
                    maximumValue={100}
                    value={this.state.slideValue} 
                    onValueChange={(slideValue) => this.setState({slideValue}) }
            />
    
            <Text style={{fontWeight: 'bold', color: 'white'}}>Your Weight in pounds:  {this.state.slideValue2} lbs</Text>
      
            <Slider style={{width: '75%'}} 
              step={1}
              minimumValue={80}
              maximumValue={600}
              value={this.state.slideValue2} 
              onValueChange={(slideValue2) => this.setState({slideValue2})}
            />
            
            <Text style={{ marginTop: 20 , fontWeight: 'bold', color: 'white'} }>Please Choose your Gender:</Text>
    
             <Picker
              selectedValue={this.state.gender}
              style={{marginTop: -50, width: 300 , color: 'white'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({gender: itemValue})
              }>
              <Picker.Item label="Male" value="m" color="white" />
              <Picker.Item label="Female" value="f" color="white"/>
              <Picker.Item label="Other" value="o" color="white"/>
            </Picker>
    
            <Text></Text>
            <Text></Text>
            <Text></Text>
    
            <Button
              onPress={this._calculateBMI}
              title="Calculate BMI"
              color="#212121"
              accessibilityLabel="Learn more about this purple button"
              
            />
            <Text></Text>
            <Text></Text>
            <Text style={{fontWeight: 'bold' , color: 'white'}}>Your BMI:  {this.state.bmiValue}</Text>
            <Text style={{fontWeight: 'bold' , color: 'white'}}>Based on your inputs, you are: {this.state.status}</Text>
    
            {/* <Image
              style={{width: '80%', height: '25%'}}
              source={require('./assets/bmi_img.png')}
            /> */}
          </View>
    
        )
    }
    _calculateBMI = (bmiValue, status) => {

        var total;
        total = this.state.slideValue2/(this.state.slideValue*this.state.slideValue);
        bmiValue = Number(((total)*703).toFixed(1));
        this.setState({bmiValue});
    
        if(this.state.gender === 'm'){   
          if(bmiValue<18.5){
            status = 'underweight';
          }else if(bmiValue>= 18.5 && bmiValue<= 24.9){
            status = 'healthy weight';
          }else if(bmiValue>=25 && bmiValue<=29.9){
            status = 'overweight';
          }else if(bmiValue>30){
            status = 'obese';
          }
        }else if(this.state.gender === 'f'){
          if(bmiValue<18.5){
            status = 'underweight';
          }else if(bmiValue>= 18.5 && bmiValue<= 24.9){
            status = 'healthy weight';
          }else if(bmiValue>=25 && bmiValue<=40){
            status = 'overweight';
          }else if(bmiValue>50){
            status = 'obese';
          }
        }
        this.setState({status});
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#78909C',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    Slider: {
      padding: 10
    },
  
    Text: {
      padding: 20,
      fontSize: 50
    }
});
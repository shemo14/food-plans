import React, { Component } from "react";
import { View, Text, Image , TouchableOpacity , StyleSheet  } from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content , Form, Item, Input, Label , Picker } from 'native-base';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: null,
            selected2: undefined,
        };
    }
    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }


    render() {
        return (

            <Container>
                {/* if file is local : source={require('/path')} ||  if file is online: source={{ uri:'url' }} */}
                {/*<Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={{ width: 200, height: 200 }}/>*/}
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}} >
                    <Left>
                        <Button transparent onPress={()=> this.props.navigation.navigate("loginAndRegister")}>
                            <Icon name='angle-left' type={"FontAwesome"} style={{ color: "#646464" }}/>
                        </Button>
                    </Left>
                    <Right>
                        <Image source={require('../../assets/images/logo_.png')} resizeMode={'contain'} style={{ width: 100 }}/>
                    </Right>
                </Header>
                <Content style={{ padding: 20 }}>
                    <View style={{marginVertical: 25}}>
                        <Text style={{ fontFamily:"BoldFont" , color: "#646464" }}>حساب جديد</Text>
                    </View>
                    <Form style={{ width:"100%"}}>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:10 }} >اسم المستخدم</Label>
                            <Input placeholder="اسم المستخدم"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                                   autoFocus
                                   autoCapitalize='none'
                            />
                        </Item>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:10 }} >رقم الجوال</Label>
                            <Input placeholder="رقم الجوال"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                        </Item>
                        {/*<Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:5 , marginTop:10 }} >الخريطة</Label>*/}
                        {/*<Item  style={{marginLeft:0 , borderBottomWidth:0, paddingTop:0 }}>*/}
                            {/*<Icon name='map-marker' type={"FontAwesome"} style={{ color: "#a7a7a7" , fontSize:12 , backgroundColor:"#eeeeee" , height:35*/}
                            {/*, alignItems:'center' , justifyContent: 'center' , flex:1 , lineHeight:35 , paddingLeft: 10}}/>*/}
                            {/*<Input placeholder="حدد مكانك"*/}
                                   {/*editable={false}*/}
                                   {/*style={{fontFamily:"BoldFont" ,*/}
                                       {/*color: "#5e5e5e",*/}
                                       {/*fontSize:11 ,*/}
                                       {/*width: '100%' ,*/}
                                       {/*backgroundColor:"#eeeeee" ,*/}
                                       {/*height:35,*/}
                                       {/*paddingRight: 20 ,*/}
                                       {/*paddingLeft: 20 ,*/}
                                       {/*textAlign:"right"}}*/}
                                   {/*placeholderTextColor={{ color: '#a7a7a7' }}*/}
                            {/*/>*/}
                        {/*</Item>*/}
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0, paddingTop:0 }}>
                            <Label style={{ color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:10 }} >الخريطة</Label>
                            <Input placeholder="حدد مكانك"
                                   editable={false}
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <View style={{ position:'absolute' , left:10 , top:6 }}>
                                <Icon name='map-marker' type={"FontAwesome"} style={{ color: "#a7a7a7" , fontSize:12 }}/>
                            </View>
                        </Item>
                        <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:5 , marginTop:10 }} >الدولة</Label>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={styles.input}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#fff"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="مصر" value="key0" />
                                <Picker.Item label="فرنسا" value="key1" />
                                <Picker.Item label="امريكا" value="key2" />
                            </Picker>
                            <Icon name={'sort-down'} type={'FontAwesome'} style={{ position: 'absolute', top: 10, left: 10, color: "#a7a7a7" , fontSize:12}}/>
                        </Item>
                        <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:5 , marginTop:10 }} >المدينة</Label>
                        <Item picker style={{marginLeft:0 , borderBottomWidth:0 , paddingTop:0}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={styles.input}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#fff"
                                selectedValue={this.state.selected2}
                                onValueChange={(value) => this.setState({ selected2: value  })}
                            >
                                <Picker.Item label="مصر" value="key0" />
                                <Picker.Item label="فرنسا" value="key1" />
                                <Picker.Item label="امريكا" value="key2" />
                            </Picker>
                            <Icon name={'sort-down'} type={'FontAwesome'} style={{ position: 'absolute', top: 10, left: 10, color: "#a7a7a7" , fontSize:12}}/>
                        </Item>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:10 }} >كلمة المرور</Label>
                            <Input placeholder="كلمة المرور"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                                   secureTextEntry
                                   autoCapitalize='none'
                            />
                        </Item>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , textAlign:'right' , marginBottom:10 }} >تأكيد كلمة المرور</Label>
                            <Input placeholder="تأكيد كلمة المرور"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                                   secureTextEntry
                                   autoCapitalize='none'
                            />
                        </Item>
                        <Button onPress={()=> this.props.navigation.navigate("login")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center',
                            marginTop: 20,marginBottom: 20, width: '100%', borderRadius: 3, justifyContent: 'center', height:35 ,  lineHeight: 35 , boxShadow:"0 1px 15px 1px rgba(144, 144, 144, 0.4)"}}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont" }}>حساب جديد</Text>
                        </Button>
                    </Form>
                    <View style={{flex: 1 , justifyContent:'center' ,flexDirection: 'row-reverse' , fontFamily:"RegularFont" }}>
                        <Text style={{color:"#a7a7a7" , fontFamily:"RegularFont"}}>لديك حساب ؟ </Text>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate("login")}><Text style={{color:"#f0b917" , fontFamily:"RegularFont"}}>تسجيل الدخول</Text></TouchableOpacity>
                    </View>
                </Content>
            </Container>

        );
    }
}


const styles = StyleSheet.create({
    input : {
        fontFamily:"BoldFont" ,
        color: "#5e5e5e",
        fontSize:11 ,
        width: '100%' ,
        backgroundColor:"#eeeeee" ,
        height:35,
        borderRadius:3 ,
        paddingRight: 20 ,
        paddingLeft: 20 ,
        textAlign:"right"
    }
});
export default Register;
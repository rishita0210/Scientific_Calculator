import React ,{useState} from  'react'
import { Text , View ,ScrollView, Pressable} from 'react-native'
import styles from './mainscreen_style.js'

const Mainscreen = () => {
    const [value,setvalue]=useState('0')
    const [bracketopen ,setbracketopen]=useState(false)
    const handlePress=(val)=>{
        // console.log('pressed',val)
        if (val=='C'){
            setvalue('0')
            
        }
        else if (val == '='){
            try{
                if((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length){
                    // setValue('Error')
                    // console.log('equal brackets')
                    if(value.slice(-1)== '+' || value.slice(-1)== '-' ||value.slice(-1)==  '*' || value.slice(-1)== '/' || value.slice(-1)== '%' ||value.slice(-1)== '.'){
                        
                            setvalue(`${eval(value.replace('()' ,'(0)').slice(0,-1))}`)

                        }

                    
                    else{
                        setvalue(`${eval(value.replace('()' ,'(0)'))}`)
                        //using eval method of js
                    }
    

                }
                else{
                    console.log('unequal brackets')
                }
            }
            catch (e){
                setvalue('Format Error')
            }
        }
        
        else if (val== 'R'){
            setvalue(value.slice(0,-1));

        }
        else if (val=='( )'){
            if (value=='0'){
                setvalue('(');
                setbracketopen(true);

            }
            else if(value.slice(-1)== '+' ||value.slice(-1)==  '-' || value.slice(-1)== '*' ||value.slice(-1)==  '/' || value.slice(-1)== '%' ||value.slice(-1)== '.'){
                setvalue(value+'(');
                setbracketopen(true);

            }
            else{
                if(bracketopen == true){
                    setvalue(value + ')');
                    setbracketopen(false);
                }
                else{
                    setvalue(value +'(');
                    setbracketopen(true);

                }

            }

        }
        else{
            if(value =='0'){
                if( isNaN(val)){
                    setvalue(value + val)
                }
                else{
                    setvalue(val)
                }
            }
            else if(isNaN(val)){
                if(value.slice(-1)== '+' || value.slice(-1)== '-' ||value.slice(-1)==  '*' || value.slice(-1)== '/' || value.slice(-1)== '%' ||value.slice(-1)== '.'){
                    setvalue(value.slice(0,-1)+val)

                }
                else{
                    setvalue(value + val)

                }
                
               
            }
            else{
                setvalue( value + val)
            }
            console.log(isNaN(val))
        }

    }
  return (
    <View style={styles.main_screen}>
        <ScrollView style={styles.main_screen_display}>
            <Text style={styles.main_screen_display_text}>{value.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",")}</Text>

        </ScrollView>
        <View style={styles.main_screen_keypad}>
            <View style={styles.main_screen_keypad_row}> 
                <Pressable onPress={()=>handlePress('C')}>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}>C</Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('( )')}>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}>( ) </Text>
                    </View>
                </Pressable>
                <Pressable onPress ={()=>handlePress('%')}>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}> % </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('/')}>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> / </Text>
                    </View>
                </Pressable>
            </View>

            {/* row -2 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable  onPress={()=>handlePress('7')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 7 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('8')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 8</Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('9')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 9 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('*')}>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> * </Text>
                    </View>
                </Pressable>
            </View>

            {/* row -3 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable  onPress={()=>handlePress('4')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}>4</Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('5')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 5 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('6')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 6 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('-')}>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> - </Text>
                    </View>
                </Pressable>
            </View>

            {/* row-4 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable  onPress={()=>handlePress('1')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 1</Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('2')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 2 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('3')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 3 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('+')}>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> + </Text>
                    </View>
                </Pressable>
            </View>

            {/* row-5 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable  onPress={()=>handlePress('0')}>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 0 </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('.')}>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg3_button}> . </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('R')}>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}> R </Text>
                    </View>
                </Pressable>
                <Pressable  onPress={()=>handlePress('=')}>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> = </Text>
                    </View>
                </Pressable>
            </View>

        </View>
    </View>
  )
}

export default Mainscreen

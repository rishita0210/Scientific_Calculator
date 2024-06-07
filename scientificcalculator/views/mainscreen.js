import React from 'react'
import { Text , View ,ScrollView, Pressable} from 'react-native'
import styles from './mainscreen_style.js'
const Mainscreen = () => {
  return (
    <View style={styles.main_screen}>
        <ScrollView style={styles.main_screen_display}>
            <Text style={styles.main_screen_display_text}>123+456</Text>

        </ScrollView>
        <View style={styles.main_screen_keypad}>
            <View style={styles.main_screen_keypad_row}> 
                <Pressable>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}>AC</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}>( ) </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}> % </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> / </Text>
                    </View>
                </Pressable>
            </View>

            {/* row -2 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 7 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 8</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 9 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> * </Text>
                    </View>
                </Pressable>
            </View>

            {/* row -3 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}>4</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 5 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 6 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> - </Text>
                    </View>
                </Pressable>
            </View>

            {/* row-4 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 1</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 2 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 3 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg2_outer}>
                        <Text style={styles.bg2_button}> + </Text>
                    </View>
                </Pressable>
            </View>

            {/* row-5 */}
            <View style={styles.main_screen_keypad_row}> 
                <Pressable>
                    <View style={styles.bg1_outer}>
                        <Text style={styles.bg1_button}> 0 </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}> . </Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.bg_outer}>
                        <Text style={styles.bg_button}> R </Text>
                    </View>
                </Pressable>
                <Pressable>
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

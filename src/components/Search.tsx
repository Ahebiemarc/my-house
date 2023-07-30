import React, {useState} from 'react'
import { StyleSheet, TextInput, View,TouchableOpacity } from 'react-native'
import Icons from "@expo/vector-icons/MaterialIcons";
import Colors from '../utils/constants/Colors';
import { shadow } from '../common/StyleShadow';



const Search = () => {

    const [search, setSearch] = useState('')
    
  return (
    <View style={styles.container}>
        <View style={styles.search} >
            <TouchableOpacity
            //activeOpacity={1}
            >
                <Icons name='search' color={Colors.darkGray} size={25}
                style={{
                    position: 'relative',
                    top: 16,
                    left : 36,
                }}
                />
            </TouchableOpacity>
        </View>
        <TextInput style={styles.field} placeholder='Search' 
        onChangeText={setSearch}
        value={search}
        
        />
        <View >
            <TouchableOpacity
             //activeOpacity={1}
             onPress={() =>{console.log('clicked');
             }}
            >
                <Icons name='filter-list' color={Colors.darkGray} size={25}
                style={{
                    position: 'relative',
                    top: 16,
                    left : -35,
                }}
                />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingTop: 24,
        paddingBottom: 24 / 1.5
    },
    search: {},
    field: {
        backgroundColor: Colors.white,
        paddingLeft: 48,
        paddingRight: 18,
        paddingVertical: 18,
        flex: 1,
        zIndex: -1000,
        borderRadius: 16,
        fontSize: 18,
        color: Colors.darkGray,
    }
})

export default Search;
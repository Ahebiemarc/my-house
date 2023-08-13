import * as React from 'react';
import {
    StatusBar,
    FlatList,
    Image,
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Colors from '../utils/constants/Colors';
const { width, height } = Dimensions.get('screen');

const API_KEY = "4qKNNfKjHtkxW3kOwozvLnCX1eXaxuEkDoqHQt9dbc6Kt9Ves8qubWm6"
const API_URL = "https://api.pexels.com/v1/search?query=home&size=small&per_page=20"
const IMAGE_SIZE = 80;
const SPACING = 10;

const fecthImagesFromPexels = async () =>{

    const data:Response = await fetch(API_URL, {
        headers: {
            'Authorization': API_KEY
        }
    });

    const {photos} = await data.json();

    return photos;
}
const GalleryScreen = () => {

    const [images, setImages] = React.useState(null)
    React.useEffect(() => {

        const fetchImages = async () => {
            const images = await fecthImagesFromPexels();
            setImages(images)
        }
        fetchImages();
    }, []);

    const topRef = React.useRef<FlatList<any>>(null);
    const thumbRef = React.useRef<FlatList<any>>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollToActiveIndex = (index) =>{
        setActiveIndex(index);
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated:  true,
        })
        if(index * (IMAGE_SIZE + SPACING) - (IMAGE_SIZE / 2) > (width /2)){
            thumbRef?.current?.scrollToOffset({
                offset: index * (IMAGE_SIZE + SPACING) - (width / 2 )+ (IMAGE_SIZE / 2),
                animated: true,
            })
        }
        else{
            thumbRef?.current?.scrollToOffset({
                offset: 0,
                animated: true,
            })
        }
    }


    if(!images) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Loading...</Text></View>
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <FlatList
                ref={topRef}
                data={images}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                decelerationRate='fast'
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => {
                    scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                }}
                renderItem={({item}) =>{
                    const imageWidth = item.src.portraitWidth; // Remplacez par la largeur de l'image
                    const imageHeight = item.src.port ; // Remplacez par la hauteur de l'image

                    return (
      
                        <View 
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image 
                                source={{uri: item.src.portrait}}
                                style={{ height: 400, width: width }}

                            />
                        </View>
                    )
                }}
            />
            <FlatList
                ref={thumbRef}
                data={images}
                keyExtractor={item => item.id.toString()}
                horizontal
                decelerationRate='fast'
                style={{
                    position: 'absolute',
                    bottom: IMAGE_SIZE
                }}
                contentContainerStyle={{paddingHorizontal: SPACING}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) =>{
                    return (
      
                        <TouchableOpacity
                            onPress={() => scrollToActiveIndex(index)}
                        >
                            <Image 
                            source={{uri: item.src.portrait}}
                            style={{
                                width: IMAGE_SIZE,
                                height: IMAGE_SIZE,
                                borderRadius: 12,
                                marginRight: SPACING,
                                borderWidth: 2,
                                borderColor: activeIndex === index ? Colors.white : 'transparent'
                            }} 
                    
                        />
                        </TouchableOpacity>
                    )
                }}
            />
            
            <StatusBar hidden />
        </View>
    );
};

export default GalleryScreen;
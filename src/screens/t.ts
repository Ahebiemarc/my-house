<Tab.Screen name="Home" component={HomeScreen} 
      options={{ tabBarLabel: '',
      tabBarIcon: ({focused}) => (
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: 15
        }}>
          <Icons
                name="home"
                size={25}
                color={Colors.lightRed}
                style={{
                  opacity: focused ? 1 : 0.7,
                }}
              />
              <Text style={{
                color: `${Colors.lightRed}`,
                opacity: focused ? 1 : 0.7,
                fontSize: 10
              }}>HOME</Text>
        </View>
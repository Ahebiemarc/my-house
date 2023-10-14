/*import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Header from "./Header";
import Content from "./Content";

export default createSharedElementStackNavigator(
    {
        Header,
        Content,
    },
    {
      mode: "modal",
      headerMode: "none",
      defaultNavigationOptions: {
        cardStyleInterpolator: ({ current: { progress } }) => {
          const opacity = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp",
          });
          return { cardStyle: { opacity } };
        },
        gestureEnabled: false,
        cardStyle: {
          backgroundColor: "transparent",
        },
      },
    }
  );*/
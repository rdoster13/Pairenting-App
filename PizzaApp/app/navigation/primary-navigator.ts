import createNativeStackNavigator from "react-native-screens/createNativeStackNavigator"
import { 
	WelcomeScreen, 
	DemoScreen, 
	HealthScreen, 
	FeedingScreen,
	SleepScreen,
	ToiletScreen, 
	} from "../screens"

export const PrimaryNavigator = createNativeStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    demo: { screen: DemoScreen },
	health: {screen: HealthScreen },
	feed: {screen: FeedingScreen },
	sleep: {screen: SleepScreen },
	toil: {screen: ToiletScreen },
  },
  {
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["welcome"]

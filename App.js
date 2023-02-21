import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { s } from 'react-native-wind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
				<Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
				<Stack.Screen name='Qrpage' component={Qrpage} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

const Landing = ({ navigation }) => {
	return (
		<View style={s`p-5 w-full h-full bg-white`}>
			<View style={s`pt-28 flex justify-center items-center`}>
				<Image source={require('./assets/wallet.png')} />
			</View>
			{/*  */}
			<View style={s`mt-12`}>
				<Text style={s`font-bold text-4xl`}>Safe Payment,{'\n'}happy life</Text>
				<Text style={s`pt-9 text-gray-400 font-bold`}>
					Make safe payments and keep your money {'\n'}wise with our help
				</Text>
			</View>
			{/*  */}
			<View style={s`flex justify-center items-center mt-20`}>
				<View
					style={[
						s`w-44 h-14 rounded-full text-center shadow-lg flex justify-center items-center`,
						styles.button
					]}>
					<Text onPress={() => navigation.navigate('Home')} style={s`text-white font-bold text-lg`}>
						Get Started
					</Text>
				</View>
			</View>
		</View>
	);
};

const Home = ({ navigation }) => {
	return (
		<ScrollView>
		<View style={s`w-full h-full bg-white`}>
			<View style={[ s`rounded-bl-3xl rounded-br-3xl w-screen`, styles.back ]}>
				<View style={s`pl-5 pr-5 pt-12 flex-row items-center`}>
					<View style={s`pr-2`}>
						<Image source={require('./assets/userapp.png')} />
					</View>
					<View>
						<Text style={s`font-bold text-white text-base`}>Hello, George</Text>
					</View>
				</View>
				{/*  */}
				<View style={s`flex justify-center items-center pt-16`}>
					<Image source={require('./assets/Card.png')} />
				</View>
				{/*  */}
				<View style={s`flex-row justify-between items-center pl-12 pr-12 mt-2`}>
					<View>
						<Image source={require('./assets/Transfer.png')} />
					</View>
					<View>
						<Image source={require('./assets/Scanner.png')} />
					</View>
				</View>
			</View>
			<View style={s`mt-12 pl-5`}>
				<Text onPress={() => navigation.navigate('Qrpage')} style={s`font-bold text-2xl`}>History</Text>
			</View>
			<View style={s`flex justify-between items-center mt-5`}>
				<Image style={`w-10 h-10`} source={require('./assets/trans.png')} />
			</View>
		</View>
		</ScrollView>
	);
};

const Qrpage = () => {
	return (
		<View><Text>QR Page</Text></View>
	);
};

const styles = StyleSheet.create({
	button : {
		backgroundColor : '#EC6CDC',
		boxShadow       : '5px 6px 6px rgba(0, 0, 0, 0.25)'
	},
	back   : {
		backgroundColor : '#EC6CDC',
		height          : 450
	}
});

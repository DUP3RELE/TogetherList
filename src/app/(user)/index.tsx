import { StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import ListItemComponent from "@/src/components/ListComponent";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text>Hello user!</Text>
			<Text>Your lists:</Text>
			<View>
				<Text></Text>
			</View>
			<ListItemComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});

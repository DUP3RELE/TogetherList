import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import ListsComponent from "@/src/components/ListComponent";
import { FlatList } from "react-native";
import { useListsList } from "@/src/api/lists";

export default function MainScreen() {
	const { error, data, isLoading } = useListsList();

	if (isLoading) {
		return <ActivityIndicator />;
	}
	if (error) {
		return <Text>Failed to fetch lists</Text>;
	}

	return (
		<View style={styles.container}>
			<Text>Hello user!</Text>
			<Text>Your lists:</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => <ListsComponent list={item} />}
				numColumns={1}
				contentContainerStyle={{ padding: 16, gap: 10 }}
			/>
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

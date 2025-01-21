import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { Tables } from "../app/types";
import { Link, useSegments } from "expo-router";

type ListItemProps = {
	lists: Tables<"lists">;
};

const ListItemComponent = ({ lists }: ListItemProps) => {
	const segments = useSegments();

	return (
		<Link
			href={`/(user)`}
			asChild
		>
			<Pressable style={styles.container}>
				<Text style={styles.title}>{lists.list_name}</Text>
			</Pressable>
		</Link>
	);
};

export default ListItemComponent;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 20,
		flex: 1,
		maxWidth: "50%",
	},

	image: {
		width: "100%",
		aspectRatio: 1,
	},

	title: {
		fontSize: 18,
		fontWeight: "600",
		marginVertical: 10,
	},
	price: {
		color: Colors.light.tint,
		fontWeight: "bold",
	},
});

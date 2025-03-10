import { StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { Tables } from "../app/types";
import { Link, useSegments } from "expo-router";

type ListsItemProps = {
	list: Tables<"lists">;
};

const ListsComponent = ({ list }: ListsItemProps) => {
	const segments = useSegments();

	return (
		<Link
			href={`/(user)/list/${list.id}`}
			asChild
		>
			<Pressable style={styles.container}>
				<Text style={styles.title}>{list.list_name}</Text>
				<Text style={styles.title}>{list.created_at}</Text>
			</Pressable>
		</Link>
	);
};

export default ListsComponent;

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

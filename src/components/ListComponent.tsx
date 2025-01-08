import React from "react";
import { View, Text, StyleSheet } from "react-native";
import lists from "@/src/components/test/lists";
import { ListItem } from "@/src/app/database.types";

const ListItemComponent = () => {
	return (
		<View>
			{lists.map((list: ListItem) => (
				<View
					key={list.id}
					style={styles.listItem}
				>
					<Text style={styles.listTitle}>{list.name}</Text>
					<Text style={styles.listUsers}>{list.users.join(", ")}</Text>{" "}
					{list.newContent && <View style={styles.redDot} />}
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 16,
		marginBottom: 16,
		backgroundColor: "#f9f9f9",
		borderRadius: 8,
	},
	listTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	listUsers: {
		fontSize: 14,
		color: "#555",
	},
	redDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: "red",
		marginLeft: 8,
	},
});

export default ListItemComponent;

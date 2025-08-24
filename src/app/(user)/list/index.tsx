import { ActivityIndicator, FlatList, Text } from "react-native";
import { useListsList } from "@/src/api/lists";
import ListItemComponent from "@/src/components/ListItemComponent";

export default function ListScreen() {
	const { data: lists, error, isLoading } = useListsList();

	if (isLoading) {
		return <ActivityIndicator />;
	}

	if (error) {
		return <Text>Failed to fetch list im back</Text>;
	}

	return (
		<FlatList
			data={lists}
			renderItem={({ item }) => <ListItemComponent lists={item} />}
			numColumns={1}
			contentContainerStyle={{ gap: 10, padding: 10 }}
		/>
	);
}

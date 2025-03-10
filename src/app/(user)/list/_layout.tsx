import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function ListStack() {
	return (
		<Stack
			screenOptions={{
				// headerShown: false,
				headerRight: () => (
					<Link
						href='/(user)'
						asChild
					>
						{/* <Pressable>
							{({ pressed }) => (
								<FontAwesome
									name='shopping-cart'
									size={25}
									color={Colors.light.tint}
									style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
								/>
							)}
						</Pressable> */}
					</Link>
				),
			}}
		></Stack>
	);
}

import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { useAuth } from "@/src/providers/AuthProvider";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return (
		<FontAwesome
			size={28}
			style={{ marginBottom: -3 }}
			{...props}
		/>
	);
}

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const { session } = useAuth();

	if (!session) {
		return <Redirect href='/' />;
	}
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, true),
			}}
		>
			{/* edycja taba */}
			<Tabs.Screen
				name='index'
				options={{
					title: "Hello, user",
					tabBarIcon: ({ color }) => (
						<TabBarIcon
							name='code'
							color={color}
						/>
					),
					headerRight: () => (
						<Link
							href='/modal'
							asChild
						>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='list'
				options={{
					title: "dupens",
					tabBarStyle: { display: "none" },
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: "Hello, doba",
					tabBarIcon: ({ color }) => (
						<TabBarIcon
							name='code'
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}

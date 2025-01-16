import "react-native-url-polyfill/auto";
import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { EXPO_SUPABASE_URL, EXPO_SUPABASE_ANON_KEY } from "@env";

console.log(EXPO_SUPABASE_ANON_KEY, EXPO_SUPABASE_URL);
const ExpoSecureStoreAdapter = {
	getItem: (key: string) => {
		return SecureStore.getItemAsync(key);
	},
	setItem: (key: string, value: string) => {
		return SecureStore.setItemAsync(key, value);
	},
	removeItem: (key: string) => {
		return SecureStore.deleteItemAsync(key);
	},
};

const SupabaseUrl = EXPO_SUPABASE_URL;
const SupabaseAnonKey = EXPO_SUPABASE_ANON_KEY;
console.log(SupabaseUrl, SupabaseAnonKey);

if (!SupabaseUrl || !SupabaseAnonKey) {
	throw new Error("Missing Supabase URL or Anon Key environment variables");
}

export const supabase = createClient(SupabaseUrl, SupabaseAnonKey, {
	auth: {
		storage: ExpoSecureStoreAdapter as any,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});

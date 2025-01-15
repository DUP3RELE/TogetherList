import "react-native-url-polyfill/auto";
import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const SupabaseUrl = Constants.extra.SUPABASE_URL;
const SupabaseAnonKey = Constants.extra.SUPABASE_ANON_KEY;
console.log(Constants.extra);


const ExpoSecureStoreAdapter = {
	getItem: (key: string) => {
		return SecureStore.getItemAsync(key);
	},
	setItem: (key: string, value: string) => {
		SecureStore.setItemAsync(key, value);
	},
	removeItem: (key: string) => {
		SecureStore.deleteItemAsync(key);
	},
};

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

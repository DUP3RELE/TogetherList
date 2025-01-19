import { supabase } from "@/src/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export const useList = () => {
	return useQuery({
		queryKey: ["lists"],
		queryFn: async () => {
			const { data, error } = await supabase.from("lists").select("*");
			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};

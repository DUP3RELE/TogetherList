import { supabase } from "@/src/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export const useListsList = () => {
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

export const useList = (listId: number) => {
	return useQuery({
		queryKey: ["lists", listId],
		queryFn: async () => {
			const { data, error } = await supabase
				.from("lists")
				.select("*")
				.eq("id", listId)
				.single();
			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};

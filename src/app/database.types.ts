export interface User {
	id: number;
	name: string;
	avatar_url: string;
}

export interface ListItem {
	id: number;
	name: string;
	users: string[];
	newContent: boolean;
}

export interface ListComponentProps {
	lists: ListItem[];
	onItemToggle: (id: number) => void;
	onItemRemove: (id: number) => void;
}

export interface User {
	id: number;
	email: string;
	passwordHash: string;
	userName: string;
	avatarUrl?: string;
	createdAt: Date;
	lastLogin?: Date;
}

export interface ListItem {
	id: number;
	name: string;
	users: string[];
	newContent: boolean;
	// createdAt: Date;
}

export interface ListComponentProps {
	lists: ListItem[];
	onItemToggle: (id: number) => void;
	onItemRemove: (id: number) => void;
}


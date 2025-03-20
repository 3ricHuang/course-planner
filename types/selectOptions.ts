export interface selectOptions<T> {
	value: T;
	label: string;
}

export interface TypeSelectionProps<T> {
	type: string;
	optionsData: { value: T; label: string }[];
}

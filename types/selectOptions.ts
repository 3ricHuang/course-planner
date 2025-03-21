export interface TypeSelectionProps<T> {
	type: string;
	optionsData: { value: T; label: string }[];
}

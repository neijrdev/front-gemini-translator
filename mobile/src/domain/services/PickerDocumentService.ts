export interface PickerDocumentServiceI {
	pickPDF(): Promise<File | null>;
}

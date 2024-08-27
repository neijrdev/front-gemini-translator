import { PickerDocumentServiceI } from '@/domain/services/PickerDocumentService';
import * as DocumentPicker from 'expo-document-picker';
import { createFileFromUri } from './CreateFileFromUri';

export class ExpoPickerService implements PickerDocumentServiceI {
	async pickPDF(): Promise<File | null> {
		const result = await DocumentPicker.getDocumentAsync({
			type: 'application/pdf',
			copyToCacheDirectory: true
		});

		if (result.canceled) {
			return null;
		}

		if (!result.assets[0]) {
			return null;
		}

		const { uri, mimeType, name, size } = result.assets[0];
		return await createFileFromUri(uri, name, mimeType as string, size as number);
	}
}

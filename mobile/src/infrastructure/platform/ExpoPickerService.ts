// src/infrastructure/platform/ExpoPickerService.ts
import { PickerDocumentServiceI } from '@/domain/services/PickerDocumentService';
import * as DocumentPicker from 'expo-document-picker';

export class ExpoPickerService implements PickerDocumentServiceI {
	async pickPDF(): Promise<File | null> {
		const result = await DocumentPicker.getDocumentAsync({
			type: 'application/pdf',
			copyToCacheDirectory: true
		});

		if (result.canceled) {
			return null;
		}

		if (!result.assets[0].file) {
			return null;
		}

		return result.assets[0].file;
	}
}

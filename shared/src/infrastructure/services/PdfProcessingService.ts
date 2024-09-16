// src/infrastructure/services/PdfProcessingService.ts

import { FileType } from '../../domain';
import { IPdfProcessingService } from '../../application/services/IPdfProcessingService';
import { API_URL } from '../config';

export class PdfProcessingService implements IPdfProcessingService {
	private apiUrl: string;

	constructor(apiUrl: string = API_URL) {
		this.apiUrl = apiUrl;
	}

	async processPdf(file: File, format: FileType, numberRankedWords: number): Promise<Blob> {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('format', format);
		formData.append('number_ranked_words', numberRankedWords.toString());

		const response = await fetch(`${this.apiUrl}/process-pdf`, {
			method: 'POST',
			body: formData
		});

		if (!response.ok) {
			throw new Error('Falha ao processar o PDF');
		}

		return await response.blob();
	}
}

// src/application/useCases/ProcessPdfUseCase.ts

import { FileType } from '../../domain';
import { IPdfProcessingService } from '../services/IPdfProcessingService';

export class ProcessPdfUseCase {
	constructor(private pdfProcessingService: IPdfProcessingService) {}

	async execute(file: File, format: FileType, numberRankedWords: number): Promise<Blob> {
		return await this.pdfProcessingService.processPdf(file, format, numberRankedWords);
	}
}

import { FileType } from '../../domain';

export interface IPdfProcessingService {
	processPdf(file: File, format: FileType, numberRankedWords: number): Promise<Blob>;
}

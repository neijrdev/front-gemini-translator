import { PdfProcessingService } from '../../../../infrastructure/services/PdfProcessingService';
import { ProcessPdfUseCase } from '../../../../application/useCase/ProcessPdfUseCase';
import { FileType } from '../../../../domain';
import useHandleRequest from '../../../..//presentation/hooks/useHandleRequest';
import { ReactInstance } from '@/types';

interface UseProcessPdfProps {
	processPdfUseCase?: ProcessPdfUseCase;
	onSuccess?: (response: Blob) => void;
	onError?: (error: Error) => void;
}

const processPdfUseCaseDefault = new ProcessPdfUseCase(new PdfProcessingService());

interface UseProcessPdfProps {
	react: ReactInstance;
	processPdfUseCase?: ProcessPdfUseCase;
	onSuccess?: (response: Blob) => void;
	onError?: (error: Error) => void;
}

const useProcessPdf = ({
	react,
	processPdfUseCase = processPdfUseCaseDefault,
	onSuccess,
	onError
}: UseProcessPdfProps) => {
	const onExecute = react.useCallback(
		async (file: File, format: FileType, numberRankedWords: number): Promise<Blob> => {
			return await processPdfUseCase.execute(file, format, numberRankedWords);
		},
		[processPdfUseCase]
	);

	const { response, loading, error, executeRequest } = useHandleRequest<Blob, [File, FileType, number]>({
		react,
		onExecute,
		onSuccess,
		onError
	});

	return {
		response,
		loading,
		error,
		executeRequest
	};
};

export default useProcessPdf;

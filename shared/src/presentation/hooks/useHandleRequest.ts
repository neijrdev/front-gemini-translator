/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactInstance } from '@/types';

function useHandleRequest<TResponse, TArgs extends any[]>({
	react,
	onExecute,
	onSuccess,
	onError
}: {
	react: ReactInstance;
	onExecute: (...args: TArgs) => Promise<TResponse>;
	onSuccess?: (response: TResponse) => void;
	onError?: (error: Error) => void;
}) {
	const [response, setResponse] = react.useState<TResponse | null>(null);
	const [loading, setLoading] = react.useState<boolean>(false);
	const [error, setError] = react.useState<Error | null>(null);

	const executeRequest = react.useCallback(
		async (...args: TArgs) => {
			setLoading(true);
			setError(null);
			try {
				const result = await onExecute(...args);
				setResponse(result);
				if (onSuccess) {
					onSuccess(result);
				}
			} catch (err) {
				setError(err as Error);
				if (onError) {
					onError(err as Error);
				}
			} finally {
				setLoading(false);
			}
		},
		[onExecute, onSuccess, onError]
	);

	return { response, loading, error, executeRequest };
}

export default useHandleRequest;

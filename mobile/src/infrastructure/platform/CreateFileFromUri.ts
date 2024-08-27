export async function createFileFromUri(
	uri: string,
	fileName: string,
	mimeType: string,
	size: number
): Promise<File | null> {
	try {
		const formData = new FormData();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		formData.append('file', {
			uri: uri,
			name: fileName,
			type: mimeType,
			size: size
		});
		const file = formData.getAll('file')[0] as File;

		return file;
	} catch (error) {
		console.error('Erro ao criar o arquivo a partir da URI:', error);
		return null;
	}
}

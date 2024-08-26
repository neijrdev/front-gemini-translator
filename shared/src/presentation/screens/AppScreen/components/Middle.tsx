import React from 'react';
import { SharedComponentProps } from '@/types';

export default function Middle(sharedComponentProps: SharedComponentProps) {
	const { components: Component } = sharedComponentProps;
	return (
		<Component.Container className="flex flex-col flex-1 items-center w-[100%] justify-center">
			<Component.Text className="text-dark font-bold text-2xl mb-10 text-center">
				Selecione um arquivo pdf em inglês
			</Component.Text>
			<Component.Text className="text-dark text-base text-center">
				Analisaremos as palavras mais frequentes do PDF, criando frases de exemplo e gerando um arquivo para download em
				PDF, CSV ou formato Anki.
			</Component.Text>
		</Component.Container>
	);
}

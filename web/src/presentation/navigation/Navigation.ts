'use client';

import { ParsedUrlQueryInput } from 'querystring';
import { useRouter } from 'next/navigation';

export class NextJsNavigation {
	private router = useRouter();

	navigate(page: string, params?: ParsedUrlQueryInput) {
		this.router.push(page, params);
	}

	goBack() {
		this.router.back();
	}
}

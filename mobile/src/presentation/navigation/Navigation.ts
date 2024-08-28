import { RouteParamInput, useRouter } from 'expo-router';
import { Navigation } from '@shared/presentation/navigation';

export type ExpoRouterAllowedRoutes =
	| '/'
	| '/_sitemap'
	| '/home'
	| `./${string}`
	| `../${string}`
	| '..'
	| `${string}:${string}`;

export class ExpoRouterNavigation implements Navigation {
	private router = useRouter();

	navigate<T extends RouteParamInput<ExpoRouterAllowedRoutes>>(page: string, params?: T): void {
		this.router.push({
			pathname: page as ExpoRouterAllowedRoutes,
			params: params
		});
	}

	goBack(): void {
		this.router.back();
	}
}

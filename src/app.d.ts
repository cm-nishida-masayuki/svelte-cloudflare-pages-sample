// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="@sveltejs/kit" />
/// <reference types="@sveltejs/adapter-cloudflare" />

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: {
				TODO_LIST: D1Database;
			};
		}
	}
}

export {};

<script lang="ts">
	import { getStores } from '$app/stores'
	import type { LayoutData } from './$types'
	import Sidebar from '@/components/sidebar.svelte'
	import Header from '@/components/header.svelte'
	import { searchQuery } from '@/lib/store'

	export let data: LayoutData

	const { page } = getStores()
	const { routes } = data
	let title: string

	page.subscribe(($page) => {
		$searchQuery = ''
		title = routes.find((r) => r.id === $page.route.id)?.name ?? ''
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex">
	<aside class="sticky top-0 h-screen">
		<Sidebar routeId={$page.route.id} routeItems={data.routes} />
	</aside>
	<main class="grow bg-brand-background p-4">
		<Header {title} />
		<slot />
	</main>
</div>

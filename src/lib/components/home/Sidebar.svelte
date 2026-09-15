<script>
	import { page } from '$app/state';
	const menuItems = [
		{ label: 'Dashboard', href: '/home/dashboard' },
		{ label: 'Billing', href: '/home/billing' },
		{ label: 'Products', href: '/home/products' }
		// { label: 'Settings', href: '/home/settings' }
	];
</script>

<aside>
	{#each menuItems as item}
		<a href={item.href} class:active={page.url.pathname === item.href}>
			{item.label}
		</a>
	{/each}
</aside>

<style>
	aside {
		width: min(13%, 250px);
		min-height: calc(100vh - min(7vh, 100px));

		display: flex;
		flex-direction: column;

		/* padding: 20px 12px; */
        padding-top: 30px;

		background: #1E222B;
		/* border-right: 1px solid #2e1c00; */
	}

	aside a {
		padding: 12px 16px;

		color: #cecece;
		text-decoration: none;
        letter-spacing: 1.4px;
		border-radius: 6px;
        font-size: 20px;
	}

	aside a:hover {
		background: rgba(255, 172, 47, 0.15);
	}

	aside a.active {
		background: linear-gradient(to right, #0E1316, rgb(32, 66, 129));
		color: #ffcb22;
		border-left: 4px solid #ffa600;
        border-top: 1px solid #F6E58E ;
        border-bottom: 1px solid #F6E58E ;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1.6px;
	}
</style>

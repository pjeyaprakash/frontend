<script>
	import { page } from '$app/state';
	import { LayoutDashboard, Receipt, Package } from 'lucide-svelte';

	const menuItems = [
		{ 
			label: 'Dashboard', 
			href: '/home/dashboard',
			icon: LayoutDashboard
		},
		{ 
			label: 'Billing', 
			href: '/home/billing', 
			icon: Receipt
			
		},
		{ 
			label: 'Products', 
			href: '/home/products', 
			icon: Package
		}
		// { label: 'Settings', href: '/home/settings' }
	];
</script>

<aside>
	{#each menuItems as item}
		{@const Icon = item.icon}
		<a href={item.href} class:active={page.url.pathname === item.href}>
			<Icon size={20} strokeWidth={1} />

			{item.label}	</a>
	{/each}
</aside>

<style>
	aside {
		width: max(min(13%, 250px), 180px);
		min-height: calc(100vh - min(7vh, 100px));

		display: flex;
		flex-direction: column;

		padding-top: 30px;

		background: #1e222b;
	}

	aside a {
		padding: 12px 16px;

		color: #cecece;
		text-decoration: none;
		letter-spacing: 1.2px;
		border-radius: 6px;
		font-size: 20px;

		display: flex;
		align-items: center;
		gap: 5px;
		line-height: 1;

	}

	aside a:hover {
		background: rgba(173, 173, 173, 0.15);
	}

	aside a.active {
		background: linear-gradient(to right, #0e1316, rgb(32, 66, 129));
		color: #ffc965;
		border-left: 4px solid #ffa600;
		border-top: 1px solid #f6e58e;
		border-bottom: 1px solid #f6e58e;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 1.6px;
	}


</style>

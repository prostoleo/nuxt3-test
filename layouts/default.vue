<template>
	<div>
		<header class="bg-green-300 p-3">
			<div class="container mx-auto">
				<NuxtLink class="text-dark-400 opacity-80" to="/">Главная </NuxtLink>
				<NuxtLink class="text-dark-400 opacity-80" to="/posts">Посты </NuxtLink>
			</div>
		</header>

		<div class="py-5">
			<slot />
		</div>
	</div>
</template>

<script setup></script>

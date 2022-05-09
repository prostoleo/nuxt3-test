<template>
	<li class="rounded-sm shadow p-2">
		<NuxtLink class="grid grid-rows-2" :to="`/posts/${post.id}`">
			<h2 class="font-bold text-xl capitalize mb-2">{{ post.title }}</h2>
			<p class="leading-relaxed">{{ post.body.slice(0, 35) }}...</p>
		</NuxtLink>
	</li>
</template>

<script setup>
	const props = defineProps({
		post: {
			type: Object,
			required: true,
		},
	});
</script>

<style lang="scss" scoped></style>

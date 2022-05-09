<template>
	<div class="container mx-auto">
		<h1>это пост: {{ routeId }}</h1>
		<!-- <pre v-if="!pending" >
      </pre> -->
		<!-- <pre v-if="!pending">{{ data }}</pre> -->
		<div v-if="!pending && !error">
			<h2 class="text-3xl font-extrabold capitalize mb-5">{{ data.title }}</h2>
			<p class="text-dark-100 leading-relaxed">{{ data.body }}</p>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'default',
	});

	const route = useRoute();
	console.log('route: ', route);
	const routeId = computed(() => route.params.id);

	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// .then(response => response.json())
	// .then(json => console.log(json))

	const { data, pending, error, refresh } = await useFetch(
		`https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
		{
			// pick: ['title'],
			// limit:
		}
	);
	// console.log('data: ', data);
</script>

<style lang="scss" scoped></style>

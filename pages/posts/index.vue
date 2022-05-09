<template>
	<div class="container mx-auto">
		<h1>это посты</h1>
		<!-- <pre v-if="!pending" >
      </pre> -->
		<ul class="grid grid-cols-3 gap-3" v-if="!pending">
			<PostCard v-for="post in data" :post="post" :key="post.id"></PostCard>
		</ul>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'default',
	});

	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// .then(response => response.json())
	// .then(json => console.log(json))

	const { data, pending, error, refresh } = await useFetch(
		'https://jsonplaceholder.typicode.com/posts',
		{
			// pick: ['title'],
			// limit:
		}
	);
	// console.log('data: ', data);
</script>

<style lang="scss" scoped></style>

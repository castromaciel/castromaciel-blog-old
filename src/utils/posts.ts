import { getCollection, type CollectionEntry } from 'astro:content'

const normalizePost = async (post: CollectionEntry<"docs">) => {
	const { id, data, slug } = post
	const { Content } = await post.render()

	return {
		...data,
		id,
		slug,
		url: `/docs/${slug}`,
		Content,
	}
}

export const fetchPosts = async function () {
	const posts = await getCollection('docs')

	const normalizedPosts = await Promise.all(
		posts.map(async (post) => normalizePost(post)),
	)

	return normalizedPosts
}

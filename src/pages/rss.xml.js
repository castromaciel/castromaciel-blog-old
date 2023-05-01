import rss from '@astrojs/rss';
import { SITE } from '~/config.mjs';
import { fetchPosts } from '~/utils/posts';

export async function get(context) {
  const docs = await fetchPosts()

  const items = docs
    .flat()
    .map(item => ({
			link: item.url,
			title: item.title,
			pubDate: item.createdAt,
			description: '',
		}))

  return rss({
    title: 'Castro Maciel - Blog',
    description: SITE.description,
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}

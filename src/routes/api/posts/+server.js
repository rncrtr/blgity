// src/routes/api/posts/+server.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format } from 'date-fns';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const postsDirectory = 'src/content/posts';
  const files = fs.readdirSync(postsDirectory);
  const categoryFilter = url.searchParams.get('category');
  const categoriesSet = new Set();

  const posts = files
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContents);

      if (!data.published) return null;

      if (Array.isArray(data.categories)) {
        data.categories.forEach((cat) => categoriesSet.add(cat));
      }

      const contentHtml = marked(content);
      const excerptHtml = marked(data.excerpt);
      const date = new Date(data.date);

      const htmlData = {
        ...data,
        content: contentHtml,
        excerpt: excerptHtml,
        date: format(date, "EEE MMM do, yyyy")
      };

      return {
        slug: file.replace(/\.md$/, ''),
        ...htmlData
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const filtered = categoryFilter
    ? posts.filter((post) => post.categories?.includes(categoryFilter))
    : posts;

  return new Response(
    JSON.stringify({
      posts: filtered,
      categories: Array.from(categoriesSet),
      selectedCategory: categoryFilter ?? null
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

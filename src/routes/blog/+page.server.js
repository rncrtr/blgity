import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format } from 'date-fns';
export const prerender = false;
export async function load({ url }) {
  const postsDirectory = 'src/content/posts';
  const files = fs.readdirSync(postsDirectory);

  let categoriesSet = new Set();

  const posts = files
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContents);

      if (!data.published) return null;

      // Collect categories
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
      }

      return {
        slug: file.replace(/\.md$/, ''),
        ...htmlData
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get selected category from query params
  const selectedCategory = url.searchParams.get('category') || null;

  // Filter posts by selected category if present
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories?.includes(selectedCategory))
    : posts;

  return { 
    posts: filteredPosts,
    categories: Array.from(categoriesSet),
    selectedCategory
  };
}
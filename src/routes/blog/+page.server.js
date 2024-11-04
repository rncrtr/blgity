
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format } from 'date-fns';

export async function load() {
  const postsDirectory = 'src/content/posts';
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);
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
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return { posts };
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format } from 'date-fns';

export async function load({ params }) {
  const { slug } = params;
  const filePath = path.resolve(`src/content/posts/${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      status: 404,
      error: new Error('Post not found')
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
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
    post: {
      ...htmlData
    }
  };
}

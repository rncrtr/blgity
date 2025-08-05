// routes/blog/+page.js
export async function load({ url, fetch }) {
  const category = url.searchParams.get('category');
  const res = await fetch(`/api/posts?category=${category ?? ''}`);
  const json = await res.json();

  return {
    posts: json.posts,
    categories: json.categories,
    selectedCategory: json.selectedCategory
  };
}

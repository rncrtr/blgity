// This file should not use `fs`. It can be used for filtering or transforming data.
// You can import data that has already been loaded and passed to the client.
export function filterPosts(posts, query) {
  return posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );
}

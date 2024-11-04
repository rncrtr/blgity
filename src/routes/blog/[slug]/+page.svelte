<script>
  export let data;
  const { post } = data;
</script>
<article class="post-detail">
  <div class="flex">
    <h1 class="text-4xl flex-auto">{post.title}</h1>
    <small>{post.date}</small>
  </div>
  <div class="max-w-4xl">{@html post.content}</div>
  <br />
  <a href="/blog" class="text-white text-xl">&laquo; go back</a>
  <br /><br />
</article>
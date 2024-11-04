<script>
  export let data;
  const {posts} = data;
</script>
<div class="blog">
  {#if posts?.length > 0}
      {#each posts as post}
        <article>
          <h1 class="text-4xl"><a href={`/blog/${post.slug}`} class="no-underline">{post.title}</a></h1>
          <small>{post.date}</small>
          <div class="excerpt">{@html post.excerpt} <a class="text-xl" href={`/blog/${post.slug}`}>Read More &raquo;</a></div>
        </article>
      {/each}
  {:else}
    <p>No posts available.</p>
  {/if}
</div>
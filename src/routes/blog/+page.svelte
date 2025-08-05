<script>
  export let data;
  const { posts, categories, selectedCategory } = data;
  function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  }
</script>

<div class="blog">
  <h1>Blog Posts 
    {#if selectedCategory}
      &ndash; {capitalize(selectedCategory)}
    {/if}
  </h1>

  {#if categories?.length}
    <div class="categories">
      <a
        href="/blog"
        class:selected={!selectedCategory}
      >All</a>
      {#each categories as cat}
        <a
          href={`/blog?category=${cat}`}
          class:selected={selectedCategory === cat}
        >{cat}</a>
      {/each}
    </div>
  {/if}

  {#if posts?.length > 0}
    {#each posts as post}
      <article>
        <h1 class="text-4xl post-title">
          <a href={`/blog/${post.slug}`} class="no-underline">{post.title}</a>
        </h1>
        {#if post.categories}
          <div class="post-categories">
            {#each post.categories as cat}
              <span class="tag">{cat}</span>
            {/each}
          </div>
        {/if}
         <small class="post-date">{post.date}</small>
        <div class="excerpt">
          {@html post.excerpt}
          <div class="read-more"><a class="text-xl" href={`/blog/${post.slug}`}>Read More &raquo;</a></div>
        </div>
      </article>
    {/each}
  {:else}
    <p>No posts available.</p>
  {/if}
</div>
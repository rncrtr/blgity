<script>
export let posts = [];

let query = '';
let filteredPosts = [];

function handleSearch() {
  filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );
}
</script>
<div class="flex-none gap-2">
  <div class="form-control">
    <input type="text"
      bind:value={query}
      on:input={handleSearch}
      placeholder="Search" 
      class="input input-bordered w-24 md:w-auto" 
    />
  </div>
  <ul>
    {#each filteredPosts as post}
      <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
  </ul>
</div>
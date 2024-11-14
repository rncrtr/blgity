<script>
  export let posts; // Receive posts from server-side load function
  import Search from '$lib/components/Search.svelte'; 
  import Nav from '$lib/components/Nav.svelte';
</script>
<Nav {posts} />
<div class="mx-auto w-full text-center">
  <div class="w-full text-2xl font-bold">"Creativity doesn't wait for energy." <small>&ndash; some cat</small></div>
</div>
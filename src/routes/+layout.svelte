<script>
    import '../app.css';
    import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import Header from '$lib/components/Header.svelte';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/base16/rebecca.css';

    function highlightCode() {
        // Wait for the DOM to load
        if (typeof window !== 'undefined') {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }
    }

    onMount(() => {
        highlightCode();
    });

    afterNavigate(() => {
        highlightCode();
    });
</script>

<div class="w-full p-6 page">
    <Header />
    <slot />
</div>
<script>
function openLink(link) {
    if (link.startsWith('http')) {
        return () => window.open(link, '_blank');
    }else{
        return () => window.location.href(link);
    }
}
</script>
<div class="contact">
    <h1>Resources</h1>
    <p>
        Here are some resources we've created to help with your game dev projects.
    </p>
    <!-- generate the tailwind card HTML -->
    <div class="grid grid-cols-3 gap-4">
        <button class="card bg-sky-900 shadow-md p-4 flex flex-col items-center" on:click={openLink('https://devwhiledead.itch.io/godot-collision-calculator')}>
            <span class="material-icons text-4xl mt-0 text-white">calculate</span>
            <h2 class="text-lg font-semibold text-center">Godot Collision Calculator</h2>
            <span class="mt-2">Price:&nbsp;<b>Free</b></span>
            <span>on <b>itch.io</b></span>
        </button>
        <!-- <b>Godot Collision Calculator</b>
        <br />A tool to help you calculate the collision shape for your Godot game. You can download it free on our 
        <a href="https://devwhiledead.itch.io/godot-collision-calculator" target="_blank">itch.io</a> page. -->
    </div>
</div>
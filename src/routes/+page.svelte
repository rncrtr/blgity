<script>
 let obligations = [
    {icon: 'access_time', text: '9-5 Full-Time Job'},
    {icon: 'home', text: 'Kids & Family Stuff'},
    {icon: 'psychology', text: 'Mental Health Demons'},
    {icon: 'medical_services', text: 'Medical & Pain Issues'},
    {icon: 'nights_stay', text: 'Lack of Sleep & Energy'},
];
let offerings = [
    {icon: 'live_tv', text: 'Live Help & Advice'},
    {icon: 'lightbulb', text: 'Creative Problem Solving'},
    {icon: 'support', text: 'Game Dev Tech Support'},
    {icon: 'construction', text: 'Tools, Code, & Examples'},
    {icon: 'emoji_emotions', text: 'Moral Support'},
];  
function openLink(link) {
    if(window) {
        if (link.startsWith('http')) {
            window.open(link, '_blank');
        }else{
            window.location.href(link);
        }
    }
}
</script>

<h1>Welcome</h1>
<div class="home">
    <p>
        Dev While Dead is a collection of resources for game developers, especially those who are overloaded and have very little time 
        to work on their projects.
    </p>    
    <p>   
        Just like you, we've got:
    </p>
      <div class="grid grid-cols-5 gap-4 oblig">
        {#each obligations as {icon, text}}
            <div class="card bg-base-100 bg-sky-900 shadow-md p-4 flex flex-col items-center">
                <span class="material-icons text-4xl text-blue">{icon}</span>
                <h2 class="text-lg font-semibold mt-2 text-center">{text}</h2>
            </div>
        {/each}
    </div>
    <p>
        ...but still want to make games. 
        The deck is stacked against us. We get how exhausting it is. 
        We're stuck playing life in hard mode, and yet we've found ways to get things done. 
        Dev While Dead is our way of sharing what works with other tired devs. We're here to help.
    </p>
    <h2>What We Offer</h2>
    <h3>Free Tools & Code Examples</h3>
    <div class="mt-4 grid grid-cols-3 gap-4">
        <button class="btn btn-neutral" on:click={openLink('/blog')}>
            <span class="material-icons text-4xl text-white">code</span>
            &nbsp;Code Examples (Blog)
        </button>
        <button class="btn btn-neutral" on:click={openLink('/resources')}>
            <span class="material-icons text-4xl text-white">build</span>
            &nbsp;Tools & Utils (Resources)
        </button>
        <button class="btn btn-neutral" on:click={openLink('http://discord.gg/devwhiledead')}>
            <span class="material-icons text-4xl text-white">emoji_emotions</span>
            &nbsp;Moral Support (Discord)
        </button>
    </div>
    <h3>We host weekly live streams on popular platforms (click for schedule, info, and stream):</h3>
    <div class="mt-4 grid grid-cols-3 gap-4">
        <button class="btn btn-neutral" on:click={openLink('https://twitch.tv/devwhiledead')}>
            <svg role="img" fill="#9146FF" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
            &nbsp;Twitch Stream
        </button>
        <button class="btn btn-neutral" on:click={openLink('https://youtube.com/devwhiledead')}>
            <svg role="img" fill="#FF0000" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            &nbsp;YouTube Stream
        </button>
        <button class="btn btn-neutral" on:click={openLink('https://tiktok.com/devwhiledead')}>
            <svg role="img" fill="#000000" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            &nbsp;TikTok Stream
        </button>
    </div>
    <h3>On our streams and social media we provide these resources for tired devs:</h3>
    <div class="mt-4 grid grid-cols-5 gap-4">
        {#each offerings as {icon, text}}
            <div class="card bg-base-100 bg-violet-900 shadow-md p-4 flex flex-col items-center">
                <span class="material-icons text-4xl text-white">{icon}</span>
                <h2 class="text-lg font-semibold mt-2 text-center">{text}</h2>
            </div>
        {/each}
    </div>
    <small>Becoming a subscriber is usually $4.99/month unless you're gifted a sub. It helps support us and helps us be selective of who we can help with limited time.</small>
  
    <h2>Consulting & Private Sessions</h2>
    <p>
        We also offer consulting and dedicated video calls to focus on your unique project and solve your specific issues. 
        We specialize in creative problem solving and unique solutions that actually work to get you unstuck.
    </p>
    <p>
        If you're interested in our consulting services, please <a href="mailto:ryan@devwhiledead.com>">email us</a> to set up a free consultation.
    </p>
</div>
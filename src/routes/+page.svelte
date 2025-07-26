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
        Home page text here
    </p>
</div>
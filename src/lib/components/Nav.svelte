<div class="navbar bg-base-100">
    <div class="navbar-start">
        <!--<a href="/" title="Site Title">
             <img alt="logo" class="w-40" src="../img/logo.png" /> 
        </a>-->
        <a href="/" class="btn btn-ghost text-3xl">Site Title</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-xl">
            <li><a class="no-underline px-6 nav-link" href="/">Home</a><li>
            <li><a class="no-underline px-6 nav-link" href="/blog">Blog</a><li>
            <li><a class="no-underline px-6 nav-link" href="/about">About</a><li>
            <li><a class="no-underline px-6 nav-link" href="/contact">Contact</a><li>
        </ul>
    </div>
    <div class="navbar-center">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                <h2 class="menu">Menu</h2>
            </div>
            <ul class="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2 shadow">
                <li><a class="no-underline px-6 dd-link" href="/">Home</a><li>
                <li><a class="no-underline px-6 dd-link" href="/blog">Blog</a><li>
                <li><a class="no-underline px-6 dd-link" href="/about">About</a><li>
                <li><a class="no-underline px-6 dd-link" href="/contact">Contact</a><li>
            </ul>
        </div>
    </div>
</div>

<style>
    .navbar {
        padding: 0.5rem 1rem;
    }
    .navbar img {
        max-width: 100%;
    }
    a{
        color: #0070f3;
    }
</style>
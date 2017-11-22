<template>
    <nav>
        <li class="selected">
            <router-link to="/"> <i class="fa fa-home" aria-hidden="true"> </i><span>Home</span> </router-link> 
        </li>
        <li>
            <router-link to="/categorias"> <i class="fa fa-folder" aria-hidden="true"></i> <span>Categorias</span> </router-link> 
        </li>
        <li>
            <router-link to="/tags"> <i class="fa fa-tags" aria-hidden="true"></i> <span>Tags</span> </router-link> 
        </li>
    </nav>
</template>

<script>
</script>

<style>
nav {
    list-style: none;
}

nav li {
    display: inline;
    padding: 10px 50px;
    background-color: #93a1a1;
}
nav li:hover {
    background-color: #eee8d5;
}
nav a {
    text-decoration: none;    
    color: #000000;
}

.selected  {
    background-color: #eee8d5;   
}
@media screen and (max-width: 700px) {
    nav {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        position: fixed;
        text-align: center;
        bottom: 10px;
     }
     nav li {
         padding: 10px;
     }
     nav span {
         display: none;
     }
}
</style>

<template>
<aside>
    <input type="text" maxlength="256" autofocus="true" placeholder="buscar">
    <h3>/Categorias</h3>
    <ul id="aside-cats">
        <li v-for="cat in categories">
            ./{{cat}}
        </li>
    </ul>

    <h3>/tags</h3>
    <ul id="aside-tags">
        <li v-for="tag in tags">
            ./{{tag}}
        </li>
    </ul>

    <h3>$top</h3>
    <ul id="aside-top">
        <li v-for="(top, index) in tops">
            {{top.access}},{{index}} {{top.name}}
        </li>
    </ul>

    <h3>/feed</h3>

    <h3>/Social</h3>
    <ul>
        <li>./Facebook</li>
        <li>./github</li>
        <li>./email</li>
    </ul>
    <calendar-component/>
</aside>
</template>

<script>
import Calendar from './Calendar.vue'

export default {
  name: 'aside',
  data () {
      return {
        categories: [
            "Desenvolvimento",
            "Livros",
            "Vida nerd"
        ],
        tags: [
            "banco de dados",
            "Android",
            "Symfony"
        ],
        tops: [
            {name: "Criando banco de dados", access: 124},
            {name: "testando mongo", access: 78},
            {name: "e-mail", access: 50}
        ],
        components: {
            'calendar-component': Calendar
        },
      }
  }
}
</script>

<style>
aside {
    margin-top: 50px;
    margin-left: 10px;
    width: 25%;
    float: left;
}
aside ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
}
aside input {
    width: 100%;
    height: 25px;
    padding: 8px 12px;
}
aside h3 {
    font-size: 20px;
    margin-bottom: 10px;
}
@media screen and (max-width: 700px) {
    aside {
       display: none;
    }
}
</style>

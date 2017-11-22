<template>
<aside>
    <input type="text" maxlength="256" autofocus="true" placeholder="buscar">
    <h3>/Categorias</h3>
    <ul>
        <li>./Desenvolvimento</li>
        <li>./Livros</li>
        <li>./Vida nerd</li>
    </ul>

    <h3>/tags</h3>
        <ul>
        <li>./banco de dados</li>
        <li>./Android</li>
        <li>./Symfony</li>
    </ul>

    <h3>$top</h3>
    <ul>
        <li>156,0 Criando banco de dados</li>
        <li>123,1 testando mongo</li>
        <li>123,2 e-mail</li>
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
  components: {
      'calendar-component': Calendar
  },
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

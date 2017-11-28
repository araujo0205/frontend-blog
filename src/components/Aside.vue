<template>
<aside>
    <input type="text" maxlength="256" autofocus="true" placeholder="buscar">
    <h3>/Categorias</h3>
    <ul id="aside-cats">
        <li v-for="cat in categories">
            ./{{cat._id}}
        </li>
    </ul>

    <h3>/tags</h3>
    <ul id="aside-tags">
        <li v-for="tag in tags">
            ./{{tag._id}}
        </li>
    </ul>

    <h3>$top</h3>
    <ul id="aside-top">
        <li v-for="(top, index) in tops">
            {{top.totalviews}},{{index}} {{top.title}}
        </li>
    </ul>

    <h3>/feed</h3>

    <h3>/Social</h3>
    <ul>
        <li>./facebook</li>
        <li>./github</li>
        <li>./email</li>
    </ul>
    <p></p>
    <calendar-component/>
</aside>
</template>

<script>
import Calendar from './Calendar.vue'

export default {
    name: 'aside',
    components: {
      'calendar-component' : Calendar
    },
    created: function () {
        var axios = require('axios');

        axios.get('https://cors.now.sh/http://davidsouza.tech/skoob/blog-tags.php').then(response => {
            this.tags = response.data;
        })
        .catch(e => {
            this.errors.push(e)
        });

        axios.get('https://cors.now.sh/http://davidsouza.tech/skoob/blog-categories.php').then(response => {
            this.categories = response.data;
        })
        .catch(e => {
            this.errors.push(e)
        });

        axios.get('https://cors.now.sh/http://davidsouza.tech/skoob/blog-toparticles.php').then(response => {
            this.tops = response.data;
        })
        .catch(e => {
            this.errors.push(e)
        });
	},
    data () {
        return {
            categories: '',
            tags: '',
            tops: '',
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

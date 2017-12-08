<template>
<aside>
    <h3>/Categorias</h3>
    <ul id="aside-cats">
        <li v-for="cat in categories">
            <router-link :to="{ name: 'CategorieArticles', params: { name: cat._id } }"> 
                ./{{cat._id}}
            </router-link>
        </li>
    </ul>

    <h3>/tags</h3>
    <ul id="aside-tags">
        <li v-for="tag in tags">
            <router-link :to="{ name: 'tagArticles', params: { name: tag._id} }"> 
                ./{{tag._id}}
            </router-link>
        </li>
    </ul>

    <h3>$top</h3>
    <ul id="aside-top">
        <li v-for="(top, index) in tops">
            <router-link :to="{ name: 'Article', params: { article: top._id } }"> 
                {{top.totalviews}},{{index}} {{top.title}}
            </router-link>
        </li>
    </ul>

    <h3><a href='/feed'>/feed</a></h3>

    <h3>/Social</h3>
    <ul>
        <li><a href="https://www.linkedin.com/in/david-souza-712873107" target="_blank">./linkedin</a></li>
        <li><a href="https://github.com/araujo0205/" target="_blank">./github</a></li>
        <li><a href="mailto:eu@davidsouza.tech" target="_top">./email</a></li>
        
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
        var that = this;

        function getTags() {
            return axios.get(`${that.$root.apiUrl}/tags`);
        }

        function getCategories() {
            return axios.get(`${that.$root.apiUrl}/categories`);
        }

        function getTopArticles() {
            return axios.get(`${that.$root.apiUrl}/toparticles`);
        }
        this.$Progress.start();
 
        axios.all([getTags(), getCategories(),getTopArticles()])
            .then(axios.spread(function (tags,categories,topArticles) {
                that.tags = tags.data;
                that.categories = categories.data;
                that.tops = topArticles.data;

                that.$Progress.finish();
            }))
            .catch(error => console.log(error));
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
    margin-top: 30px;
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

aside a {
	text-decoration: none;
	color: black;
}
@media screen and (max-width: 700px) {
    aside {
       display: none;
    }
}
</style>

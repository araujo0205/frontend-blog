<template>
<div id="center">
    <article v-bind:key="article.title" v-for="article in articles">
        <h1>#! {{article.title}}</h1>
        <h2><i>extend</i> {{article.category}}</h2>
        <h3>
            <i>implements</i> 
            <span v-bind:key="tag" v-for="(tag, index) in article.tags">
                {{tag}}<span v-if="index+1 != article.tags.length">,</span>             
            </span>
        </h3>
        <p> {{article.content | substring }}...</p>
        <p>
            <router-link :to="{ name: 'Article', params: { article: article._id } }">continuar lendo</router-link>
        </p>
    </article>
</div>
</template>

<script>
export default {
    name: 'Home',
    created: function () {
        var axios = require('axios');
        var path = this.$route.fullPath;
        var key;
        var value = this.$route.params.name;

        if(path.indexOf('/tag') > -1)
            key = 'tags';
        else {
            if(path.indexOf('/categoria') > -1)
                key = 'category'
        }

        this.$root.$Progress.start();
        axios.get(`${this.$root.apiUrl}/filter?${key}=${value}`).then(response => {
            this.articles = response.data;

            this.$root.$Progress.finish();
        })
        .catch(e => {
            this.errors.push(e)
            this.$Progress.fail();
        });
	},
    data () {
        return  {
            articles: ''
        }
    },
    filters: {
    substring: function (value) {
      return value.substring(0,400);
    }
  }
}
</script>

<style>
#center {
    width: 70%;
    float: left;
    margin-right: 10px;
    padding-top: 50px;
}
#center h1 {
    color: #93a1a1;
    font-size: 35px;
    font-style: italic;
    margin-top:40px;
    margin-bottom:10px;
}
#center h2 {
    color: #2aa198;
    margin-top:10px;
    margin-bottom:10px;
}
#center h2 i {
    font-size: 30px;
    font-style: normal;
    color: #268bd2;
}
#center h3 {
    margin-top:10px;
    margin-bottom:10px;
    color: #2aa198;
}
#center h3 i {
    font-size: 20px;
    font-style: normal;
    color: #268bd2;
}
#center p {
    text-align: justify;
}

@media screen and (max-width: 700px) {
    #center {
       padding-top: 0px;
       width: 100%;
       margin-bottom: 55px;
    }
}
</style>

<<template>
    <div id="center">
        <article>
            <header><i>#+Title:</i> {{article.title}}</header>
            <h2><i>#+Category:</i> {{article.category}}</h2>
            <h2 id='center-tags'>
                <i>#+Tags:</i> 
                <span v-bind:key="tag" v-for="(tag,index) in article.tags">
                    {{tag}}<span v-if="index+1 != article.tags.length">,</span>             
                </span>
            </h2>    
            <h3><i>#+Date:</i> {{article.date}} </h3>
            <div v-html="content"></div>
        </article>
    </div>
</template>

<<script>
export default {
    name: "article",
    created: function () {
        var axios = require('axios');
        axios.get('https://cors.now.sh/http://davidsouza.tech/skoob/blog-article.php?slug='+this.$route.params.article).then(response => {
            this.article = response.data;
        })
        .catch(e => {
            this.errors.push(e);
        });
	},
    data () {
      return {
          article: {
              title: '',
              category: '',
              tags: '',
              date : '',
              content: ''
          }
        }
    },
    computed: {
        content: function() {
            var marked = require('marked');

            var artigo = this.article.content.replace(/\\n/g, '\n');
            return marked(artigo); 
        }
    }
}
</script>

<<style>
header {
    font-weight: bold;
    font-size: 35px;
    color: #cb4b16;
}
header i {
    font-weight: bold;
    font-style: normal;
    color: #268bd2;   
}
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

pre code {
	display: block;
	overflow-x: auto;
    overflow-y: auto;
	color: #abb2bf;
	background: #282c34;
	max-height: 19em;
	padding: 1em;
}
article {
    padding-bottom: 50px;
}
@media screen and (max-width: 700px) {
    #center {
       padding-top: 0px;
       width: 100%;
       margin-bottom: 55px;
    }
}
</style>

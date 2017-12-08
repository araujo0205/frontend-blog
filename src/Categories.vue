<<template>
    <div id="center">
        <article>
            <h2 style="color:black;">/Categorias</h2>
            <ul>
                <li v-for="cat in cats">
                    <router-link :to="{ name: 'CategorieArticles', params: { name: cat._id } }"> 
                        drwxr-xr-x {{cat.total}} david {{cat._id}}
                    </router-link>
                    
                </li>
            </ul> 
        </article>
    </div>
</template>

<<script>
export default {
    name: 'Categories',
    created: function() {
        var axios = require('axios');

        this.$root.$Progress.start();

        axios.get(`${this.$root.apiUrl}/categories`).then(response => {
                this.cats = response.data;
                this.$Progress.finish();
            })
            .catch(e => {
                this.errors.push(e);
                this.$Progress.fail();
            });
    },
    data () {
        return {
            cats: '',
            count: 0
        }
    },
    metaInfo: {
      title: 'Categorias'
    }
}
</script>
<<style>
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

#center article ul li a {
	text-decoration: none;
	color: black;
}

@media screen and (max-width: 700px) {
    #center {
       padding-top: 0px;
       width: 100%;
       margin-bottom: 55px;
    }
}
</style>

<<template>
    <div id="center">
        <article>
            <h2 style="color:black;">/Tags</h2>
            <ul>
                <li v-for="tag in tags">
                    drwxr-xr-x {{tag.total}} david {{tag._id}}
                </li>
            </ul> 
        </article>
    </div>
</template>

<<script>
export default {
    name: "tags",
    created: function() {
        var axios = require('axios');

        axios.get('https://cors.now.sh/http://davidsouza.tech/skoob/blog-tags.php').then(response => {
            this.tags = response.data;
        })
        .catch(e => {
            this.errors.push(e)
        });
    },
    data () {
        return {
            tags: ''
        }
    }
}
</script>

<<style>
#center ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
}
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

@media screen and (max-width: 700px) {
    #center {
       padding-top: 0px;
       width: 100%;
       margin-bottom: 55px;
    }
}
</style>

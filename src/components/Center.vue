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
        <p> {{article.content}}</p>
        <p>
            <router-link to="postagem">continuar lendo</router-link>
        </p>
    </article>
    <center>--more--</center>
</div>
</template>

<script>
export default {
    data () {
        return  {
            articles: [
                {
                    title: 'Testando algoritmos',
                    category: 'desenvolvimento',
                    tags: ['algoritmos', 'ccp'],
                    content: "As vezes quando vamos estudar algo novo ficamos imaginando se esse novo conhecimento terá alguma utilidade. Isso também ocorre quando vamos estudar sobre algoritmos; muitas pessoas têm essa dúvida até porque nunca viram na prática a diferença de uma abordagem adequada ou comparou diversos alg...",
                },
                {
                    title: 'Mongodb no Symfony',
                    category: 'desenvolvimento',
                    tags: ['banco de dados'],
                    content: "Se você utiliza Symfony e está pensando em incluir o mongodb em seu projeto, nem tente ir na documentação do symfony pois ela está desatualizada. Uma alternativa seria a documentação do próprio doctrine, mas demandaria algumas adaptações. Como tive o mesmo problema que você irei compartilhar...",
                }                
            ]
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

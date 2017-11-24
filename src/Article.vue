<<template>
    <div id="center">
        <article>
            <header><i>#+Title:</i> {{title}}</header>
            <h2><i>#+Category:</i> {{category}}</h2>
            <h2 id='center-tags'>
                <i>#+Tags:</i> 
                <span v-bind:key="tag" v-for="(tag,index) in tags">
                    {{tag}}<span v-if="index+1 != tags.length">,</span>             
                </span>
            </h2>    
            <h3><i>#+Date:</i> {{date}} </h3>
            <p>
                {{content}}
            </p>
        </article>
    </div>
</template>

<<script>
export default {
  name: "article",
  data () {
      return {
          title: 'Testando algoritmos',
          category: 'desenvolvimento',
        tags: ['algoritmos', 'ccp'],
          date: '2007-10-01',
          content: 'As vezes quando vamos estudar algo novo ficamos imaginando se esse novo conhecimento terá alguma utilidade. Isso também ocorre quando vamos estudar sobre algoritmos; muitas pessoas têm essa dúvida até porque nunca viram na prática a diferença de uma abordagem adequada ou comparou diversos algoritmos; é sobre isso que falarei neste artigo.Algoritmos são fundamentais para diversos outros ramos da ciência da computação, por esse motivo ele é essencial para qualquer programador. Executar um algoritmo correto pode ser o diferencial entre conseguir ou não que o script responda em tempo aceitável.Outra vantagem é que muitas vezes adaptar o aplicativo é mais vantajoso do que melhorar o hardware do computador. As vezes o seu código está lento não porque o servidor ou o computador é "fraco", e sim por não ter utilizado o algoritmo correto. Pode ser utilizado como forma de otimização também, melhorar a "velocidade" de seu programa sem ter que gastar mais com isso.Para não ficar só em minhas palavras, vou provar isso. Este exemplo está no livro do Thomas H. Cormen sobre algoritmos: vamos imaginar dois algoritmos para ordenação, o primeiro é o ordenação por inserção que leva um tempo n² e o outro é a ordenação por intercalação leva algo próximo a nlgn, onde n é quantidade de ítens para serem ordenados. Lembrando que lg é a simplificação do logaritmo para a base 2. Sendo assim em uma entrada de 100 ítens o primeiro levaria 100² e o segundo 100lg100.Tendo definido o tempo de cada algoritmo vamos definir os computadores onde serão executados. Executaremos o algortimo por ordenação em um computador (computador A) 100 vezes mais rápido que o computador do que da ordenação por intercalação (computador B): Computador B: dez milhões de instruções por segundo: 10⁷ Computador A: 1 bilhão de instruções por segundo: 10⁹Vamos então calcular quanto tempo demoraria a ordenação de um milhão de ítens:(10⁶)² instruções/ 10⁹ instruções por segundo = 1000 segundos10⁶log(2)10⁶ instruções / 10⁷ instruções por segundo ~= 134 segundosSe aumentarmos a quantidade de ítens para 100 milhões a diferença se distancia ainda mais:inserção ~= 4 mesesintercalação ~= 2 diasCom esses exemplos há como chegar a algumas conclusões:Um algoritmo correto pode ser mais relevante que um hardware melhor;A diferença entre os algoritmos vai aumentando conforme a quantidade de ítens aumenta.Agora que toda a teoria é o momento de um exemplo prático. Utilizarei o Java para os exemplos.Para este exemplo utilizarei o mesmo exemplo do livro do Robert Sedgewick, o fibonnaci. Ele tem a praticidade de ter regras simples para o algoritmo.Segundo o wikipedia a sequência de Fibonacci "é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores", que matematicamente pode ser simplicado da seguinte forma:'
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

@media screen and (max-width: 700px) {
    #center {
       padding-top: 0px;
       width: 100%;
       margin-bottom: 55px;
    }
}
</style>

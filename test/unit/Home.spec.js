import { mount} from 'vue-test-utils';
import Home from '../../src/Home.vue';
import expect from 'expect';
import Helpers from './Helper.js';
import moxios from 'moxios';

describe('Home', () => {
    let wrapper, h;
    beforeEach (() => {
        moxios.install();

        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-fragment.php',{
            status: 200,
            response: [
                {"_id":"projeto-android-01","title":"Projeto Android - Fase 01'","category":"desenvolvimento","tags":["android"],"date":"15-09-2017 22:33","totalviews":1,"content":"## \"No inicio a terra era sem forma e vazia ...\"\\n\\nDecidi estudar desenvolvimento de aplicativos para android. Estou cursando o [\u201cDesenvolvendo Apps android\u201d](https:\/\/br.udacity.com\/course\/new-android-fundamentals\u2014ud851\/). Estou gostando bastante, tanto do conte\u00fado, quanto da did\u00e1tica do curso.\\nCom o intu\u00edto de colocar em pr\u00e1tica o que estou aprendendo, irei fazer um (talvez outros ) aplicativo. Este post \u00e9 sobre a cria\u00e7\u00e3o deste aplicativo; n\u00e3o tenho o objetivo de ser t\u00e3o did\u00e1tico quando o curso da udacity; mas desejo ser relevante, tanto para quem est\u00e1 fazendo o curso, quanto para quem tem conhecimento em desenvolvimento com android.\\n\\n## \u201cAgora vejo em partes ...\u201d\\n\\nAntes de resolver um problema \u00e9 necess\u00e1rio conhec\u00ea-lo. Ent\u00e3o, primeiro vou descrever o aplicativo. Ele ser\u00e1 um aplicativo voltado a quem gosta de s\u00e9ries; com ele a pessoa poder\u00e1 buscar diversas informa\u00e7\u00f5es e salvar as favoritas. Poder\u00e1 ver os epis\u00f3dios desta s\u00e9rie, sinopse e at\u00e9 o elenco. Haver\u00e1 como acompanhar a s\u00e9rie, ou seja, ir \u201canotando\u201d quando assistir os epis\u00f3dios.\\n\\nOs dados das series n\u00e3o irei criar."}
            ] 
        }); 

        wrapper = mount(Home);
        h = new Helpers(wrapper, expect);        
    });

    afterEach(() =>{
        moxios.uninstall();
    });

    it ('total articles loaded', done => {
        moxios.wait(() =>{
            expect(wrapper.vm.articles.length).toBe(1);
            done();
        })
    });

    it ('list first item', done => {
        moxios.wait(() =>{
            h.see('Projeto Android - Fase 01');
            done();
        })
    });
})
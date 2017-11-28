import { mount } from 'vue-test-utils';
import Article from '../../src/Article.vue';
import expect from 'expect';
import Helpers from './Helper.js';
import moxios from 'moxios';

describe('Article', () => {
    let wrapper, h;
 
    const $route = {params: { article:"testando-algoritmos"} }
    
    beforeEach (() => {
        moxios.install();   

        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-article.php?slug=testando-algoritmos',{
            status: 200,
            response: {
                _id: "testando-algoritmos",
                category: "desenvolvimento",
                content: "As vezes quando vamos estudar algo novo ficamos imaginando se esse novo conhecimento terá alguma utilidade...",
                date: "10-11-2017 15:50",
                tags: ["algoritmos"],
                title:"Testando algoritmos",
                totalviews: 3
            }
        }); 
        wrapper = mount(Article, {
            mocks: {
              $route
            }
          });
        h = new Helpers(wrapper, expect);
    }); 

    afterEach (() => {
        moxios.uninstall();
    });

    it ('present the title', done => {
        moxios.wait(() => {
            h.see("Testando algoritmos", "header");
            done();  
        })    
    });

    it('present tag', done => {
        moxios.wait(() =>{
            h.see("algoritmos", '#center-tags')
            done();
        });
        
    });

    it('present date', done => {
        moxios.wait(() =>{
            h.see("10-11-2017 15:50");
            done();
        });
        
    });

    it('present content', done => {
        moxios.wait(() =>{            
            h.see('As vezes quando vamos estudar algo novo ficamos')
            done();
        });
    })
})
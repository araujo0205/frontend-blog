import { mount } from 'vue-test-utils';
import Article from '../src/Article.vue';
import expect from 'expect';
import Helpers from './Helper.js';

describe('Article', () => {
    let wrapper, h;
 
    beforeEach (() => {
        wrapper = mount(Article);
        h = new Helpers(wrapper, expect);
    });

    it('present the title', () => {
        h.see("Testando algoritmos", "header");
    });

    it('present tag', () => {
        h.see("algoritmos", '#center-tags')
    });

    it('present date', () => {
        h.see("2007-10-01")
    });

    it('present content', () => {
        h.see('Neste artigo demonstrarei como configurar um login por formulário')
    })
})
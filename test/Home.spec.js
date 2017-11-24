import { mount} from 'vue-test-utils';
import Home from "../src/Home.vue";
import expect from 'expect';
import Helpers from './Helper.js';

describe('Home', () => {
    let wrapper, h;
    beforeEach (() => {
        wrapper = mount(Home);
        h = new Helpers(wrapper, expect);        
    });

    it ('total articles loaded', () => {
        expect(wrapper.vm.articles.length).toBe(2);
    });

    it ('list first item', () => {
        h.see('Testando algoritmos');
    });
})
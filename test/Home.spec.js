import { mount} from 'vue-test-utils';
import Home from "../src/Home.vue";
import expect from 'expect';

describe('Home', () => {
    let wrapper;
    beforeEach (() => {
        wrapper = mount(Home);
    });

    it ('total articles loaded', () => {
        expect(wrapper.vm.articles.length).toBe(2);
    });

    it ('list first item', () => {
        see('Testando algoritmos');
    });

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;
    
        expect(wrap.html()).toContain(text);
    };
})
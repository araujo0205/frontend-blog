import { mount} from 'vue-test-utils';
import Categories from "../src/Categories.vue";
import expect from 'expect';
import Helpers from './Helper.js';

require('./setup.js');

describe('Categories', () => {
    let wrapper, h;

    beforeEach (() => {
        wrapper = mount(Categories);
        h = new Helpers(wrapper, expect);
    });
    
    it ('total size of categories variable', () => {
        expect(wrapper.vm.cats.length).toBe(2);
    });
    
    it ('presents the categorie desenvolvimento', () => {
        h.see('desenvolvimento');
    }); 
})
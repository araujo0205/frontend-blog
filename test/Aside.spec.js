import { mount } from 'vue-test-utils';
import Aside from "../src/components/Aside.vue";
import expect from 'expect';
import Helpers from './Helper.js';

describe('Aside', () => {
    let wrapper, h;

    beforeEach (() => {
        wrapper = mount(Aside);
        h = new Helpers(wrapper, expect);
    });
    
    it ('presents the category desenvolvimento', () => {
        h.see('Desenvolvimento', '#aside-cats');
    }); 

    it ('presents the tag Android', () => {
        h.see('Android', '#aside-tags');
    }); 

    it ('presents the top e-mail', () => {
        h.see('e-mail', '#aside-top');
    }); 
})
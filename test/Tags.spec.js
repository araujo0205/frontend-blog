import { mount } from 'vue-test-utils';
import Tags from '../src/Tags.vue';
import expect from 'expect';
import Helpers from './Helper.js';

describe('Article', () => {
    let wrapper, h;
 
    beforeEach (() => {
        wrapper = mount(Tags);
        h = new Helpers(wrapper, expect);
    });

    it('present tag', () => {
        h.see("desenvolvimento");
    });
})
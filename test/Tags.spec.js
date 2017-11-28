import { mount } from 'vue-test-utils';
import Tags from '../src/Tags.vue';
import expect from 'expect';
import Helpers from './Helper.js';
import moxios from 'moxios';

describe('Tags', () => {
    let wrapper, h;
 
    beforeEach (() => {
        moxios.install();

        //mounted request
        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-tags.php',{
            status: 200,
            response: [
                {_id:"blog",total:1},
                {_id:"desenvolvimento",total:4}
            ] 
        }); 
        wrapper = mount(Tags);
        h = new Helpers(wrapper, expect);
    });
 
    afterEach (() =>{
        moxios.uninstall();
    });

    it('present tag', done => {
        moxios.wait(() => {
            h.see("desenvolvimento"); 
            done();
        });
    });
})
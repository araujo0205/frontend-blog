import { mount} from 'vue-test-utils';
import Categories from '../../src/Categories.vue';
import expect from 'expect';
import Helpers from './Helper.js';
import moxios from 'moxios';

require('./setup.js');

describe('Categories', () => {
    let wrapper, h;

    beforeEach (() => {
        moxios.install();   
        //mounted request
        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-categories.php',{
            status: 200,
            response: [
                {_id:"blog",total:1},
                {_id:"desenvolvimento",total:4}
            ] 
        });
        
        wrapper = mount(Categories);
        h = new Helpers(wrapper, expect);     
    });
    
    afterEach (() =>{
        moxios.uninstall();
    }); 

    it ('total size of categories variable', done => {
        moxios.wait(() => {
            expect(wrapper.vm.cats.length).toBe(2);  
            done();  
        })        
    });
    
    it ('presents the categorie desenvolvimento', (done) => {        
        moxios.wait(() => {
            h.see('desenvolvimento');
            done();  
        })   
    }); 
})
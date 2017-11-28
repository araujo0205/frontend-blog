import { mount } from 'vue-test-utils';
import Aside from '../../src/components/Aside.vue';
import expect from 'expect';
import Helpers from './Helper.js';
import moxios from 'moxios';


describe('Aside', () => {
    let wrapper, h;

    beforeEach (() => {
        moxios.install();
        
        //mounted request
        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-tags.php',{
            status: 200,
            response: [
                {_id:"algoritmos",total:1},
                {_id:"android",total:1}
            ] 
        }); 

        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-categories.php',{
            status: 200,
            response: [
                {_id:"desenvolvimento",total:6},
                {_id:"blog",total:1}
            ] 
        }); 

        moxios.stubRequest('https://cors.now.sh/http://davidsouza.tech/skoob/blog-toparticles.php',{
            status: 200,
            response: [
                {"_id":"mongodb-no-symfony","title":"Mongodb no Symfony","totalviews":3},
                {"_id":"login-symfony-mongodb","title":"Utilizando login com symfony e mongodb","totalviews":3}
            ]
        }); 

        wrapper = mount(Aside);
        h = new Helpers(wrapper, expect);
    });
    
    afterEach (() =>{
        moxios.uninstall();
    }); 
    
    it ('presents the category desenvolvimento', done => {
        moxios.wait(() => {
            h.see('desenvolvimento', '#aside-cats');
            done();
        });
    }); 

    it ('presents the tag Android', done => {
        moxios.wait(() =>{
            h.see('android', '#aside-tags');
            done();
        });

    }); 

    it ('presents the top articles', done => {
        moxios.wait(() => {
            h.see('Mongodb no Symfony', '#aside-top');
            done();
        });        
    }); 
})
import { mount} from 'vue-test-utils';
import Categories from "../src/Categories.vue";
import expect from 'expect';

describe('Categories', () => {
    let wrapper = mount(Categories);

    it ('total size of categories variable', () => {
        expect(wrapper.vm.cats.length).toBe(2);
    });
    
    it ('presents the categorie desenvolvimento', () => {
        expect(wrapper.html()).toContain("desenvolvimento");
    });
})
import {shallowMount} from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    test('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('h2 should have the default value', () => {
        const h2 = wrapper.find('h2');
        expect(h2.text()).toBe('Counter');
    });

    test('default value should be 100 on p', () => {
        const value = wrapper.find('[data-testId="counter"]').text();
        expect(value).toBe('100');
    });

    test('should increase and decrease the counter', async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testId="counter"]').text();
        expect(value).toBe('101');
    });

    test('should set default values', () => {
        const {start} = wrapper.props();

        const value = wrapper.find('[data-testId="counter"]').text();
        expect(Number(value)).toBe(start);
    });

    test('should show title prop', () => {
        const title = 'Hello world!';
        const wrapper = shallowMount(Counter,{
            props: {
                title,
            }
        });

        const h2 = wrapper.find('h2');
        expect(h2.text()).toBe(title);
    });
});
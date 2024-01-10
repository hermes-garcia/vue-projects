import {shallowMount} from '@vue/test-utils';
import Indecision from '@/components/Indecision';

describe('Indecision component', () => {
    let wrapper;
    let clgSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            'answer': 'yes',
            'forced': false,
            'image': 'https://yesno.wtf/assets/yes/2.gif'
        })
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
        jest.clearAllMocks();
    });

    test('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('write on input shouldn\'t trigger anything (only console.log)', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
        const input = wrapper.find('input');
        await input.setValue('Hello world');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test('write ? symbol on input should trigger getAnswer', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
        const input = wrapper.find('input');
        await input.setValue('Hello world?');

        expect(getAnswerSpy).toHaveBeenCalled();
    });

    test('test for getAnswer', async () => {
        await wrapper.vm.getAnswer();
        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.answer).toBe('yes');
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif');
    });

    test('should failed API on getAnswer', async () => {
        fetch.mockImplementationOnce( () => Promise.reject('error'))
        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('error');
    });
});
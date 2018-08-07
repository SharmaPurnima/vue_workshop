import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
	it('renders Hello World', () => {
		const message = "Hello World!";
		const wrapper = shallowMount(HelloWorld, {
			propsData: {}
		})
		expect(wrapper.text()).to.include(message)
	})
})

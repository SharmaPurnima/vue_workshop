import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import AppBanner from '@/components/AppBanner.vue'

describe('AppBanner.vue', () => {
	it('renders the given title in props', () => {
		const title   = "Testing";
		const wrapper = shallowMount(AppBanner, {
			propsData: {title}
		})
		expect(wrapper.text()).to.include(title)
	})
})

import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";
import PhoneVerification from "./PhoneVerification";
configure({adapter: new Adapter()});

describe('PhoneVerification', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<PhoneVerification />)
    expect(wrapper).toBeDefined()
  })

  it('Should has correct content', () => {
    const wrapper = shallow(<PhoneVerification />)
    expect(wrapper.text()).toMatch(/Please enter verification code./)
    expect(wrapper.text()).toMatch(/A code has been sent to/)
  })
})

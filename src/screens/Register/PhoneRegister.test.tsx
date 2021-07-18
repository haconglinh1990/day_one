import {configure, shallow, mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";
import PhoneRegister from "./PhoneRegister";
configure({adapter: new Adapter()});

describe('PhoneRegister', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<PhoneRegister />)
    expect(wrapper).toBeDefined()
  })

  it('Should has correct content', () => {
    const wrapper = shallow(<PhoneRegister />)
    expect(wrapper.text()).toMatch(/Let's get started!/)
    expect(wrapper.text()).toMatch(/ALREADY HAVE AN ACCOUNT?/)
  })
})

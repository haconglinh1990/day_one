import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";
import Header from "./Header";
configure({adapter: new Adapter()});

describe('HeaderApp', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toBeDefined()
    expect(wrapper.text()).toMatch(/DayOne/)
  })
  it('Should has correct content', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toMatch(/DayOne/)
  })
})

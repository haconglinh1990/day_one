import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";
import FormRegister from "./FormRegister";
configure({adapter: new Adapter()});

describe('FormRegister', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<FormRegister />)
    expect(wrapper).toBeDefined()
  })
})

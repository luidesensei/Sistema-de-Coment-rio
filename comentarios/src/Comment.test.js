import React from 'react';
import {shallow, mount, render} from 'enzyme'
import Comment from './Comment';

describe('<Comment />',()=>{

	it('renders without crashing', () => {
    const comments = {
      1:{
          comment: 'test 1'
      }
      
      
    }
  	const wrapper = shallow(<Comments comments={comments}/>)
  	
  	expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(1)
  	//expect(wrapper.is('.well')).toBe(true)
  	//expect(wrapper.text()).toBe(comment.comment)
  	
})
	
	
})


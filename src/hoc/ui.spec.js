import { expect } from 'chai'
import { addUi } from './ui'

describe('addUi', ()=>{
  it('should return props with uis:[new ui] if no ui in props', ()=>{
    const props = {
      some: 'thing'
    }
    const ui = {
      title: 'title',
      style: 'style',
      onClick: 'some action'
    }
    const expected = {
      some: 'thing',
      uis: [ui]
    }
    expect(addUi(ui)(props)).to.eql(expected)
  })
  it('should return props with uis:[ui, new ui] if ui in props', ()=>{
    const props = {
      some: 'thing',
      uis: [{
        title: 'title',
        style: 'style',
        onClick: 'some action'
      }]
    }
    const ui = {
      title: 'another title',
      style: 'another style',
      onClick: 'another action'
    }
    const expected = {
      some: 'thing',
      uis:
      [
        {
          title: 'title',
          style: 'style',
          onClick: 'some action'
        },
        ui
      ]
    }
    expect(addUi(ui)(props)).to.eql(expected)
  })
})

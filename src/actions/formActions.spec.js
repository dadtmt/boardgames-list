import { expect } from 'chai'
import * as FormActions from './formActions'

describe('initializeWithConfirm', () => {
  it('should return INITIALIZE_WITH_CONFIRM action', () => {
    const expected = {
      type: 'INITIALIZE_WITH_CONFIRM',
      form: 'aForm',
      values: {
        some: 'values'
      }
    }
    expect(FormActions.initializeWithConfirm('aForm')({some:'values'}))
    .to.eql(expected)
  })
})

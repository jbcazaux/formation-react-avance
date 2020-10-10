import {roll} from './dice'

describe('dice', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6);
  });
  it('gets integer value', () => {
    const result = roll(6)

    expect(result).toBe(4)
  })
})

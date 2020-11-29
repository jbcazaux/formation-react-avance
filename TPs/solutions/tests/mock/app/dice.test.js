import { roll } from './dice'

describe('dice', () => {
  beforeEach(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.6)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('gets integer value', () => {
    const result = roll(6)

    expect(result).toBe(4)
  })
})

import {checkInvalidMessage}  from './validation'

describe('function checkInvalidMessage', () => {
  it('should checkInvalidMessage() return FALSE with valid message <= 50 characters', () => {
    const msg = 'Lorem Ipsum is simply dummy text';

    expect(msg.length).toBeLessThanOrEqual(50)
    expect(checkInvalidMessage(msg)).toEqual(false)
  })

  it('should checkInvalidMessage() return FALSE with valid message > 50 characters', () => {
    const msg = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC';

    expect(msg.length).toBeGreaterThan(50)
    expect(checkInvalidMessage(msg)).toEqual(false)
  })

  it('should checkInvalidMessage() return TRUE with invalid message', () => {
    const msg = 'Contrary topopularbelief,LoremIpsumisnotsimplyrandomtext.Ithasroots in a piece of classical Latin literature from 45 BC';

    expect(checkInvalidMessage(msg)).toEqual(true)
  })
})

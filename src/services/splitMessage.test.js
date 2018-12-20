import {splitMessage}  from './splitMessage'

describe('function splitMessage', () => {
  it('should splitMessage() return single element', () => {
    const msg = 'Lorem Ipsum is simply dummy text';
    expect(splitMessage(msg)).toEqual({ msgType: 'string', msgValue: msg })
  })

  it('should splitMessage() return single element with 50 characters', () => {
    const msg = 'It has an long established fact that a reader will'

    expect(msg.length).toEqual(50)
    expect(splitMessage(msg)).toEqual({ msgType: 'string', msgValue: msg })
  })

  it('should splitMessage() return array of elements', () => {
    const msg = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.';
    const outPutMsg = [
      "1/7 It is a long established fact that a reader will",
      "2/7 be distracted by the readable content of a page",
      "3/7 when looking at its layout. The point of using",
      "4/7 Lorem Ipsum is that it has a more-or-less normal",
      "5/7 distribution of letters, as opposed to using",
      "6/7 Content here, content here, making it look like",
      "7/7 readable English."];

    expect(splitMessage(msg)).toEqual({ msgType: 'array', msgValue: outPutMsg })
  })

  it('should splitMessage() return array elements with 51 characters', () => {
    const msg = 'It is a long established fact that a reader will be'
    const outPutMsg = [
      "1/2 It is a long established fact that a reader will",
      "2/2 be"];

    expect(msg.length).toEqual(51)
    expect(splitMessage(msg)).toEqual({ msgType: 'array', msgValue: outPutMsg })
  })

  it('should splitMessage() trim element', () => {
    const msg = '   Lorem Ipsum is simply dummy text    ';
    const outPutMsg = 'Lorem Ipsum is simply dummy text'
    expect(splitMessage(msg)).toEqual({ msgType: 'string', msgValue: outPutMsg })
  })

  it('should splitMessage() remove multi spaces', () => {
    const msg = 'Lorem Ipsum is   simply     dummy text';
    const outPutMsg = 'Lorem Ipsum is simply dummy text'
    expect(splitMessage(msg)).toEqual({ msgType: 'string', msgValue: outPutMsg })
  })

  it('should splitMessage() trim element and remove multi spaces - array of elements', () => {
    const msg = '     It is a long established     fact that a reader will be distracted by the readable content of a page when looking at       its layout.    The point of using Lorem Ipsum     ';
    const outPutMsg = [
      "1/4 It is a long established fact that a reader will",
      "2/4 be distracted by the readable content of a page",
      "3/4 when looking at its layout. The point of using",
      "4/4 Lorem Ipsum"];

    expect(splitMessage(msg)).toEqual({ msgType: 'array', msgValue: outPutMsg })
  })
})

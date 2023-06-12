const { makeSound } = require('./functions');

describe('makeSound', () => {
  let playMock;

  beforeEach(() => {
    // Mock the play function of the audio element
    playMock = jest.fn();
    global.document.getElementById = jest.fn().mockReturnValue({
      play: playMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should play the sound', () => {
    // Call the function you want to test
    makeSound('audio-element-id');

    // Assertion
    expect(global.document.getElementById).toHaveBeenCalledWith('audio-element-id');
    expect(playMock).toHaveBeenCalledTimes(1);
  });

  test('should not play the sound if element is not found', () => {
    // Simulate the case where getElementById returns null
    global.document.getElementById = jest.fn().mockReturnValue(null);

    // Call the function you want to test
    makeSound('non-existent-element');

    // Assertion
    expect(global.document.getElementById).toHaveBeenCalledWith('non-existent-element');
    expect(playMock).not.toHaveBeenCalled();
  });
});






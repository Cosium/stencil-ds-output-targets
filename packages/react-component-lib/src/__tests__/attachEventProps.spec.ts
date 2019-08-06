import * as utils from '../attachEventProps';
import '@testing-library/jest-dom/extend-expect';

describe('attachEventProps', () => {
  it('should pass props to a dom node', () => {
    const onIonClickCallback = () => {};

    var div = document.createElement('div');
    utils.attachEventProps(div, {
      children: [],
      style: 'color: red',
      ref: () => {},
      onClick: () => {},
      onIonClick: onIonClickCallback,
      testprop: ['red'],
    });

    expect((div as any).testprop).toEqual(['red']);
    expect(div).toHaveStyle('');
    expect(Object.keys((div as any).__events)).toEqual(['ionClick']);
  });
});

describe('getClassName', () => {
  it('should keep classes that might have been applied outside of the props', () => {
    const div = document.createElement('div');
    div.className = 'blue green purple';

    const final = utils.getClassName(
      div.classList,
      { className: 'blue green red' },
      { className: 'blue green' },
    );
    expect(final).toEqual('blue green purple red');
  });
});

describe('isCoveredByReact', () => {
  it('should identify standard events as covered by React', () => {
    expect(utils.isCoveredByReact('click', document)).toEqual(true);
  });
  it('should identify custom events as not covered by React', () => {
    expect(utils.isCoveredByReact('change', document)).toEqual(true);
    expect(utils.isCoveredByReact('ionchange', document)).toEqual(false);
  });
});

describe('syncEvent', () => {
  it('should add event on sync and readd on additional syncs', () => {
    const div = document.createElement('div');
    const addEventListener = jest.spyOn(div, 'addEventListener');
    const removeEventListener = jest.spyOn(div, 'removeEventListener');
    const ionClickCallback = jest.fn();

    utils.syncEvent(div, 'ionClick', ionClickCallback);
    expect(removeEventListener).not.toHaveBeenCalled();
    expect(addEventListener).toHaveBeenCalledWith('ionClick', expect.any(Function));

    utils.syncEvent(div, 'ionClick', ionClickCallback);
    expect(removeEventListener).toHaveBeenCalledWith('ionClick', expect.any(Function));
    expect(addEventListener).toHaveBeenCalledWith('ionClick', expect.any(Function));

    const event = new CustomEvent('ionClick', { detail: 'test' });
    div.dispatchEvent(event);
    expect(ionClickCallback).toHaveBeenCalled();
  });
});

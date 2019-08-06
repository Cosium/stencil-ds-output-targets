/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  AdvancedType,
  SlideValue,
} from './components/demo-component/demo-component';

export namespace Components {
  interface DemoComponent {
    'advanced': AdvancedType;
    'max': number;
    'min': number;
    'value'?: string | null;
  }
}

declare global {


  interface HTMLDemoComponentElement extends Components.DemoComponent, HTMLStencilElement {}
  var HTMLDemoComponentElement: {
    prototype: HTMLDemoComponentElement;
    new (): HTMLDemoComponentElement;
  };
  interface HTMLElementTagNameMap {
    'demo-component': HTMLDemoComponentElement;
  }
}

declare namespace LocalJSX {
  interface DemoComponent extends JSXBase.HTMLAttributes<HTMLDemoComponentElement> {
    'advanced'?: AdvancedType;
    'max'?: number;
    'min'?: number;
    'onSlideFocus'?: (event: CustomEvent<SlideValue>) => void;
    'value'?: string | null;
  }

  interface IntrinsicElements {
    'demo-component': DemoComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}



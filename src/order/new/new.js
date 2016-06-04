import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './new.less!';
import template from './new.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the pmo-order-new component'
    }
  }
});

export default Component.extend({
  tag: 'pmo-order-new',
  viewModel: ViewModel,
  template
});
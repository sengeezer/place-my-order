import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Order = can.Map.extend({
  define: {}
});

Order.List = can.List.extend({
  Map: Order
}, {});

export const orderConnection = superMap({
  url: '/api/orders',
  idProp: '_id',
  Map: Order,
  List: Order.List,
  name: 'order'
});

tag('order-model', orderConnection);

export default Order;

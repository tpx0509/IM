// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import directives from './directives'
import store from './store.js';

import IM  from "./im.js";

import Dialog from './Dialog';

Vue.use(store);

Vue.config.productionTip = false;

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});


Vue.prototype.Dialog = Dialog;
Strophe.SASLSHA1.test= function(connection) {
  return false;
};

const vm = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  beforeCreate: function(){
      //var BOSH_SERVICE = 'http://10.66.5.140:7070/http-bind/';
      // var BOSH_SERVICE = 'ws://10.66.5.200:7070/ws/';
      // var BOSH_SERVICE = 'ws://10.66.5.140:7070/ws/';
      // this.$store.state.im = new IM().init({BOSH_SERVICE:this.$store.state.BOSH_SERVICE,mechanisms:[Strophe.SASLMD5]});
      this.$store.dispatch('Iminit');
  },
  created: function () {

  }
});



window.vm=vm;


//获取花名册 ， 消息监听 ， 发消息 ，



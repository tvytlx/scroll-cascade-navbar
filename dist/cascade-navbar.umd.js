(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CascadeNavbar = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  vue.pushScopeId("data-v-4bd752bb");
  const _hoisted_1 = { class: "example" };
  const _hoisted_2 = /*#__PURE__*/vue.createVNode("span", { class: "inner" }, "123", -1 /* HOISTED */);
  vue.popScopeId();


  var script = {
    expose: [],
    setup(__props) {

  const msg = vue.ref("hello");

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      vue.createTextVNode(vue.toDisplayString(msg.value) + " ", 1 /* TEXT */),
      _hoisted_2
    ]))
  }
  }

  };

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "\n.example[data-v-4bd752bb] {\r\n  color: red;\n}\r\n";
  styleInject(css_248z);

  script.__scopeId = "data-v-4bd752bb";
  script.__file = "src/CascadeNavbar.vue";

  // Import vue component

  script.install = function (app) {
    app.component(script.name, script);
  }; // To allow use as module (npm/webpack/etc.) export component

  exports.default = script;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

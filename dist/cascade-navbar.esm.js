import { ref, openBlock, createBlock, createTextVNode, toDisplayString, pushScopeId, createVNode, popScopeId } from 'vue';

pushScopeId("data-v-4bd752bb");
const _hoisted_1 = { class: "example" };
const _hoisted_2 = /*#__PURE__*/createVNode("span", { class: "inner" }, "123", -1 /* HOISTED */);
popScopeId();


var script = {
  expose: [],
  setup(__props) {

const msg = ref("hello");

return (_ctx, _cache) => {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createTextVNode(toDisplayString(msg.value) + " ", 1 /* TEXT */),
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

export default script;

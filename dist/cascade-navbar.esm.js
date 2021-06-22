import { pushScopeId, popScopeId, openBlock, createBlock, createTextVNode, toDisplayString, withScopeId, createVNode } from 'vue';

var script = {
  name: "CascadeNavbar",
  data() {
    return {
      msg: "Hello world!",
    };
  },
  methods: {},
};

const _withId = /*#__PURE__*/withScopeId("data-v-4bd752bb");

pushScopeId("data-v-4bd752bb");
const _hoisted_1 = { class: "example" };
const _hoisted_2 = /*#__PURE__*/createVNode("span", { class: "inner" }, "123", -1 /* HOISTED */);
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createTextVNode(toDisplayString($data.msg) + " ", 1 /* TEXT */),
    _hoisted_2
  ]))
});

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

script.render = render;
script.__scopeId = "data-v-4bd752bb";
script.__file = "src/CascadeNavbar.vue";

// Import vue component

script.install = function (app) {
  app.component(script.name, script);
}; // To allow use as module (npm/webpack/etc.) export component

export default script;

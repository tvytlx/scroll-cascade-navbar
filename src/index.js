// Import vue component
import component from "./CascadeNavbar.vue";

component.install = (app) => {
  app.component(component.name, component);
};

// To allow use as module (npm/webpack/etc.) export component
export default component;

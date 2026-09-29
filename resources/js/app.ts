import { createInertiaApp } from "@inertiajs/vue3";
import { createApp, h, type DefineComponent } from "vue";
import "../css/app.css";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob<DefineComponent>("./Pages/**/*.vue");
    const page = pages[`./Pages/${name}.vue`];
    if (!page) {
      throw new Error(`Page not found: ${name}`);
    }
    return page();
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mount(el);
  },
  progress: { color: "#c6f25c", delay: 1 },
});

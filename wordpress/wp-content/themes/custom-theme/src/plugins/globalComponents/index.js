import Icon from "@/components/vue/Icon/index.vue";

export const globalComponents = {
  install(app, options) {
    app.component("Icon", Icon);
  },
};

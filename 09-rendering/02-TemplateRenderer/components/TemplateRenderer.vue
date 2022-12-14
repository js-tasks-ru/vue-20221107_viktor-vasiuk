<script>
import { compile, defineComponent, h } from 'vue';

export default {
  name: 'TemplateRenderer',

  props: {
    template: {
      type: String,
      required: true,
    },

    bindings: {
      type: Object,
      default: () => ({}),
    },

    components: {
      type: [Object, Array],
      default: () => [],
    },
  },

  computed: {
    // Рендерим шаблон в render-функцию
    renderFunction() {
      return compile(this.template);
    },

    // Генерируем компонент с этой рендер функцией и зарегистрированными компонентами
    componentFromTemplate() {
      return defineComponent({
        name: 'TemplateRendererInternal',
        components: this.components,
        props: ['bindings'],
        render: this.renderFunction,
      });
    },
  },

  render() {
    // Рендерим сгенерированный компонент, передавая в него данные
    return h(this.componentFromTemplate, { bindings: this.bindings });
  },
};
</script>

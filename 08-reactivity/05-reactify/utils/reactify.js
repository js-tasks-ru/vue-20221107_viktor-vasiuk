import { computed, watch, ref, isRef } from 'vue';

/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {
  return (...args) =>
    computed(() => {
      const r = ref(args);
      let array = [];
      watch(
        r,
        () => {
          array = args.map((item) => (isRef(item) ? item.value : item));
        },
        { immediate: true },
      );
      return func(...array);
    });
}

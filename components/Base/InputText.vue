<template>
  <div class="relative z-0 w-full mb-10 group">
    <input
      :id="namefor"
      :type="type"
      :name="namefor"
      class="
        block
        py-2.5
        px-2.5
        w-full
        text-sm text-black-dark
        bg-transparent
        border-0 border-b-2 border-grey-dark
        appearance-none
        dark:text-white dark:border-grey-dark
        focus:outline-none focus:ring-0 focus:border-primary-vert1
        peer
      "
      :placeholder="placeholder"
      :pattern="pattern"
      :required="required"
      autocomplete
      v-model="inputVal"
    />
    <label
      :for="namefor"
      class="
        peer-focus:font-medium
        absolute
        text-sm text-black-dark
        duration-300
        transform
        -translate-y-10
        scale-75
        top-1
        -z-10
        origin-[0]
        peer-focus:left-0 peer-focus:text-primary-vert1
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-10
        after:content-['*'] after:ml-0.5 after:text-primary-vert1
      "
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    id: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    namefor: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    pattern: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss"></style>

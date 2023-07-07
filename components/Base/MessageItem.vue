<template>
  <div class="col-span-12 row-span-1 py-3 py-6 border-b media">
    <label :for="namefor" class="grid w-full grid-cols-12 mb-0 email-chek">
      <span class="flex items-center col-span-1">
        <input
          :id="namefor"
          :type="type"
          :name="namefor"
          value="2"
          class="text-transparent transition duration-100 ease-in-out border-transparent rounded shadow-sm checkbox_animated focus:border-transparent focus:ring-0 focus:ring-transparent focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </span>
      <div class="col-span-11">
        <div class="grid items-center grid-cols-12">
          <h6 class="col-span-3 mb-0 text-sm font-bold text-pink">
            <span class="mr-1">{{ clientFirstname }}</span> <span>{{ clientLastname }}</span>
          </h6>
          <p class="h-8 col-span-8 mb-0 overflow-hidden font-medium">
            {{ clientMessage }}
          </p>
          <span class="col-span-1 mb-0 text-right">{{ clientDate }}</span>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    id: {
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
    clientLastname: {
      type: String,
      required: false,
    },
    clientFirstname: {
      type: String,
      required: false,
    },
    clientMessage: {
      type: String,
      required: false,
    },
    clientDate: {
      type: String,
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

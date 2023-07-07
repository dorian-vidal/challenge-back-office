<template>
  <section
  :class="backgroundColor ? 'py-32 ' : 'py-0'"
    class=" strate-text"
    :style="{ background: `${backgroundColor}` }"
  >
    <div class="container">
      <div class="flex flex-col items-center justify-center mx-auto lg:w-3/5 ">
        <p
          class="text-2xl font-black text-center lg:text-3xl strate-text__title"
        >
          {{ title }}
        </p>
        <p
          class="pt-2 text-lg text-center strate-text__text "
          v-if="text"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateText",
  props: {
    backgroundColor: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: "Rendre service à la planète",
    },
    text: {
      type: String,
      required: false,
      default: "Consequat laboris sunt incididunt ex cillum id eiusmod reprehenderit commodo do consequat tempor.Sint elit laboris fugiat deserunt sunt.Et id Lorem dolore id id sint mollit cupidatat labore nostrud enim elit id.",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>

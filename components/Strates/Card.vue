<template>
  <section class="h-full col-span-4 box strate-text">
    <div class="h-full border-0 card o-hidden">
      <div class="p-6 b-r-4 card-body" :style="{ background: `${color}` }">
        <div class="flex flex-col h-full static-top-widget">
          <div
            class="flex flex-col items-start justify-between h-full pl-0 media-body"
          >
            <span class="m-0 text-2xl font-bold">{{ subtitle }}</span>
            <div class="flex items-center mt-8 text-center">
              <base-use-svg
                :id="icons"
                class="vroom"
                color="black"
                typeColor="black"
                size="lg"
              />
              <span class="mb-0 font-black text-7xl counter t-text-gradient is-active">{{ number }}</span>
            </div>
            <base-use-svg
              :id="icons"
              class="vroom icon-bg"
              color="black"
              typeColor="black"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Card",
  props: {
    color: {
      type: String,
      required: false,
      default: "#FF0000",
    },
    imageUrl: {
      type: String,
      required: false,
      default: "@/assets/images/logo/logo-vroom-light.png",
    },
    number: {
      type: String,
      required: false,
      default: "88,9",
    },
    subtitle: {
      type: String,
      required: false,
      default: "Our Annual Income",
    },
    icons: {
      type: String,
      required: false,
      default: "parents",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>

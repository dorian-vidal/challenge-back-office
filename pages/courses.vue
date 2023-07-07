<template>
  <div id="page-home" class="px-6 lg:px-0">
    <div class="grid grid-cols-12 gap-8 overflow-hidden grid-rows-12">
      <div
        class="col-span-12 col-start-1 row-span-2 row-start-5 gap-8 lg:row-span-4 lg:col-span-2 lg:col-start-7 lg:row-start-1 box"
      >
        <bloc-card
          subtitle="Courses en cours "
          color="#F4DFF8"
          number="8"
          class=""
          icons="courses-success"
        ></bloc-card>
      </div>
      <div
        class="col-span-12 col-start-1 row-span-2 row-start-7 lg:row-span-4 lg:col-span-2 lg:col-start-9 lg:row-start-1 box"
      >
        <bloc-card
          imageUrl="/assets/images/logo/logo-vroom-light.png"
          color="#F4DFF8"
          subtitle="Courses en attentes"
          number="60"
          class=""
          icons="courses-waiting"
        ></bloc-card>
      </div>
      <div
        class="col-span-12 col-start-1 row-span-2 lg:row-span-4 lg:col-span-2 lg:col-start-11 row-start-10 lg:row-start-1 box"
      >
        <bloc-card
          subtitle="Courses refusées"
          number="299"
          class=""
          color="#F4DFF8"
          icons="courses-canceled"
        ></bloc-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",

  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "courses",
      },
    };
  },
  methods: {},
};
</script>

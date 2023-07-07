<template lang="">
  <div class="">
    <div class="container m-auto">
      <section class="my-14">
        <p class="text-lg pt-sm px-lg">TYPOGRAPHY</p>
        <hr />
        <h1 class="text-5xl font-bold">text-5xl 56px</h1>
        <h2 class="text-4xl font-semibold">text-4xl 48px</h2>
        <h2 class="text-3xl font-semibold">text-3xl 40px</h2>
        <p class="text-2xl font-semibold">text-2xl 32px</p>
        <p class="text-xl">text-xl 24px</p>
        <p class="text-lg">text-lg 18px</p>
        <p class="text-md">text-md 16px</p>
        <p class="text-sm">text-sm 14px</p>
        <p class="text-xs">text-xs 12px</p>
        <p class="text-2xs">text-2xs 9px</p>

        <p class="max-w-3xl my-4 text-sm text-grey">
          text-sm : <br />Magna labore cupidatat aliqua ex consequat commodo ea
          et irure eu magna magna.Minim aliqua ex duis id eiusmod qui tempor
          consectetur occaecat consectetur commodo.
        </p>
        <span class="text-md t-text-gradient">t-text-gradient</span>
      </section>
      <section class="my-14">
        <p class="text-2xl">CTA</p>
        <hr />

        <div class="flex flex-wrap items-center justify-between ctas my-14">
          <div class="">
            <a href="" class="mt-8 mb-4 text-md md:text-lg t-link--color"
              >I am a link</a
            >
          </div>
          <t-button tagName="a" href="https://www.google.fr/" variant=""
            ><span>primary button</span></t-button
          >
          <t-button
            tagName="a"
            href="https://www.google.fr/"
            variant="secondaryPink"
            ><span>secondary pink button</span></t-button
          >
          <div class="p-6 bg-primary-vert2">
            <t-button
              tagName="a"
              href="https://www.google.fr/"
              variant="secondaryWhite"
              ><span>secondary white button</span></t-button
            >
          </div>
          <t-button tagName="a" href="https://www.google.fr/" variant="tertiary"
            ><span>tertiary button</span>
          </t-button>
        </div>
      </section>

      <section class="my-14">
        <span class="text-2xl">IMAGES</span>
        <hr />

        <div class="flex flex-col max-w-md lg:flex-row space-x-7">
          <nuxt-img
            alt="profil"
            src="https://media4.giphy.com/media/yA1EPzJbpmCCPsZOWg/giphy.gif?cid=ecf05e47l379t2onkag642sxt5zid9gcixc69nl6gen1rs0m&rid=giphy.gif&ct=g"
            class="object-contain mx-auto my-6 rounded"
          />
          <nuxt-img
            alt="Logo Vroom"
            src="static/img/logo-vroom-blanc-w2000.png"
            class="object-contain mx-auto my-6"
          />
        </div>
      </section>
      <section class="my-14">
        <span class="text-2xl">ICON</span>
        <hr />

        <div class="grid max-w-md grid-cols-5 space-x-7">
          <base-use-svg id="arrow" color="pink" size="lg" />
          <base-use-svg
            id="vroom"
            class="vroom"
            color="black"
            typeColor="black"
          />
        </div>
      </section>
      <section class="my-14">
        <span class="text-2xl">ICON</span>
        <hr />

        <div
          class="grid items-center grid-cols-3 justify-items-center space-x-7"
        >
          <base-big-letter text="1" />
          <base-big-letter text="2" />
          <base-big-letter text="3" />
        </div>
        <base-big-letter text="whaaaow" />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "styleguide",

  data() {
    return {};
  },
  methods: {
    aMethod() {
      return this.$global.style;
    },
  },
};
</script>
<style lang=""></style>

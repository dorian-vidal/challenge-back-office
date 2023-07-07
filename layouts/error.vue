<template>
  <section class="page404">
    <div
      class="container flex flex-col max-w-screen-sm mx-auto my-20 page404__container"
    >
      <h4 class="mx-auto mb-10 page404__title text-9xl">
        {{ error.statusCode }}
      </h4>
      <p class="mx-auto text-2xl text-center page404__paragraph">
        Cul de sac ?
      </p>
      <t-button
        tagName="a"
        to="/"
        class="mx-auto mt-10 text-xl"
        variant="secondary"
        ><span>Retourner à l'accueil</span>
      </t-button>
    </div>
  </section>
</template>
<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>

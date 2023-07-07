<template>
  <section class="p-8 card email-body">
    <p class="text-xl font-bold">{{title}}</p>

    <div class="email-profile">
      <div>
        <div class="email-top">
          <div class="row">
            <div class="py-4 col-12">
              <div class="media">
                <label class="mr-5 email-chek d-block" for="chk-ani">
                  <input
                    class="text-transparent transition duration-100 ease-in-out border-transparent rounded shadow-sm checkbox_animated focus:border-transparent focus:ring-0 focus:ring-transparent focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    id="chk-ani"
                    type="checkbox"
                    checked=""
                  />
                </label>
                <div class="media-body">
                  <div class="dropdown">
                    <t-button
                      variant="secondaryPink"
                      class="after:ml-0 dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="">Action</span>
                    </t-button>

                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="javascript:void(0)"
                        >Refresh</a
                      ><a class="dropdown-item" href="javascript:void(0)"
                        >Mark as important</a
                      ><a class="dropdown-item" href="javascript:void(0)"
                        >Move to span</a
                      ><a class="dropdown-item" href="javascript:void(0)"
                        >Move to trush
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 inbox">
          <slot />

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "MessagesInbox",
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
    title: {
      type: String,
      required: false,
      default: "Les dernières questions parents reçues",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>

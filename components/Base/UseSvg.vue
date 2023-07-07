<template>
  <svg class="c-icon"
       :class="`c-icon--${size}`"
  >
    <use :xlink:href="`#icon-${id}`"
         :class="`u-${typeColor}-${color}`" x="0" y="0"
    />
  </svg>
</template>

<script>
export default {
  name: 'UseSvg',
  props: {
    typeColor: {
      type: String,
      required: false,
      default: 'fill'
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'auto'
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

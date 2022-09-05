<template>
  <div class="news-block__aside-item">
<!--    <img v-show="image" :src="createUrl" height="151" width="236"/>-->
    <div class="news-block__description">
      <h3 class="news-block__description-title">{{title}}</h3>
      <span class="news-block__description-text">
       {{text}}
      </span>
      <p class="news-block__description-date">{{date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDescription",
  props: {
    image:{
      type: String,
      required: false
    },
    title:{
      type: String,
      required: true
    },
    text:{
      type: String,
      required: true
    },

    date:{
      type: String,
      required: true
    },
  },
  computed: {
    createUrl() {
      if(!this.image) {
        console.log('asdsad')
        return
      }
      console.log('lush')
      return  require(`../assets/news-updates/${this.image}.png`)
    }
  },

  created() {
    console.log(this.image)
  },

}
</script>

<style scoped>

</style>

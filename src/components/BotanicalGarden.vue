<link rel="stylesheet" href="../styles/main.sass">
<template>
  <div class="main">
      <header class="main__header">
        <div class="main__header-logo">
      <img class="main__header-image" src="../assets/logo.jpg" alt="img" />
        </div>
        <ul class="main__header-navigation">
          <li>home</li>
          <li>visit</li>
          <li>exhibitions</li>
          <li>programs & events</li>
          <li>store</li>
          <li>
            <div class="main__header-navigation-button">
            membership
          </div>
          </li>
        </ul>
        <input @click="doMobile" id="toggle" type="checkbox" :checked="showMobile" :disabled="showMobile" >
        <label for="toggle" class="hamburger">
          <div class="hamburger__top-bun"></div>
          <div class="hamburger__meat"></div>
          <div class="bottom-bun"></div>
        </label>
      </header>
    <div :class="{'show-mobile': showMobile}" class="nav" id="nav">
      <div class="nav-block">
        <nav>
          <a href="#" @click="doMobile">HOME</a><br>
          <a href="#">VISIT</a><br>
          <a href="#">EXHIBITIONS</a><br>
          <a href="#">PROGRANMS & EVENTS</a>
          <a href="#">STORE</a>
        </nav>
        <div class="nav-block__nav-button">
          membership
        </div>
      </div>
    </div>
    <div class="main__container">
      <div class="main__container-block">
        <h1>A beatiful adventure awaits</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam, architecto</p>
        <div class="main-container__button-block">
          <div class="main-container__button">
            Buy tickets
          </div>
          <div class="main-container__button transparent">
            Learn More
          </div>
        </div>
      </div>
      <div class="main__image-container">
        <img class="main__image" src="../assets/jungle-arc.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import '/src/styles/style.sass'
import '/src/styles/main.sass'
export default {
  name: 'BotanicalGarden',
  data(){
    return{
      showMobile:false,
    }
  },

  methods:{
    doMobile(){
      this.showMobile = !this.showMobile;

    }
  }
}
</script>

<style scoped>

</style>

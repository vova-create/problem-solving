<template>
  <div class="news-title">
    <h2 class="news-title-name">News & Updates</h2>
    <div class="news-title__under-block">
      <div class="news-title__arrow-line"></div>
      <div class="news-title__under-title">View all posts</div>
      <div>
        <img src="../assets/news-updates/arrow-right.png" height="24" width="24" alt=""/></div>
    </div>
  </div>
<div class="news-block">
  <div class="news-block__main">
    <div class="news-block__main-photo"><img src="../assets/news-updates/plants.png" height="333" width="400" alt="plant"/></div>
    <NewsDescription
        title="Plants Around Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.."
        date="December 23, 2021"
    />
  </div>
  <div class="news-block__aside">
    <div class="news-block__aside-item">
      <img class="news-block__aside-image" src="../assets/news-updates/lush.png" height="151" width="236"/>
      <NewsDescription
          title="Lush Gardens"
          text="Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem "
          date="December 16, 2021"
      />
    </div>
    <div class="news-block__divider"></div>
    <div class="news-block__aside-item">
      <img class="news-block__aside-image" src="../assets/news-updates/exotic.png" height="151" width="236"/>
      <NewsDescription
          title="Exotic Nature"
          text="Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem "
          date="November 11, 2021"
      />
    </div>
    <div class="news-block__divider"></div>
    <div class="news-block__aside-item">
      <img class="news-block__aside-image" src="../assets/news-updates/exotic.png" height="151" width="236"/>
      <NewsDescription
          title="It Starts with Soil"
          text="Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem "
          date="November 3, 2021"
      />
    </div>
  </div>
</div>
</template>

<script>
import NewsDescription from "@/components/news-description/NewsDescription";
import '/src/styles/news-block.sass'
import '/src/styles/news-title.sass'

export default {
  name: "BotanicalNews",
  components: {
    NewsDescription,
  }
}
</script>

<style scoped>

</style>

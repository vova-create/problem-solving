<template>
<div class="footer">
<div class="footer__logo">
  <div class="footer__logo-wrapper">
    <div class="footer__logo-image">
      <img  src="../assets/footer-image/footer-logo.png" height="48" width="221" alt="footer-logo"/>
    </div>
    <div class="footer__logo-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</div>
  <div class="footer__nav-block">
    <div class="footer__nav-name">
      Sitemap
    </div>
    <ul class="footer__nav">
      <li>Home</li>
      <li>Visit</li>
      <li>Exhibitions</li>
      <li>Programs & Events</li>
      <li>Store</li>
      <li>Membership</li>
    </ul>
  </div>
  <div class="footer__social">
    <div class="footer__social-title">
      Connect
    </div>
    <div class="footer__social-block">
      <img src="../assets/footer-icons/twitter.png" height="24" width="24" alt="twitter"/>
      <img src="../assets/footer-icons/facebook.png" height="24" width="24" alt="facebook"/>
      <img src="../assets/footer-icons/linkedin.png" height="24" width="24" alt="linkedin"/>
      <img src="../assets/footer-icons/mail.png" height="24" width="24" alt="mail"/>
    </div>
  </div>

</div>
  <div class="footer__date">
    © 2021 Mist Gardens. All rights reserved.
  </div>
</template>

<script>
import '/src/styles/footer.sass'

export default {
  name: "BotanicalFooter"
}
</script>

<style scoped>

</style>

<template>
  <div class="main-content" style="background-image: url('/images/company-bg.jpg');">
    <h2>会社概要</h2>
    <p>合同会社YAYは、技術革新を推進し、クライアントのビジネス成長をサポートするために設立されました。</p>
    <p>私たちは、ITおよびドローン技術を活用したソリューションを提供し、様々な業界で活躍しています。</p>
    <h3>基本情報</h3>
    <ul>
      <li>設立：2023年</li>
      <li>所在地：東京都千代田区</li>
      <li>代表者：山田太郎</li>
      <li>従業員数：50名</li>
    </ul>
    <h3>Google Map</h3>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.993621577342!2d139.69170631515794!3d35.68948798019139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0accb1d4b3%3A0xf1e933de52cb1b18!2z5p2x5Lqs6YO95paw5a6_5Zub5qOu5aC0!5e0!3m2!1sja!2sjp!4v1596199991624!5m2!1sja!2sjp"
        width="600" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyPage'
}
</script>

<style scoped>
.main-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.map-container {
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

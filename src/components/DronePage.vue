<template>
  <div class="main-content" style="background-image: url('/images/drone-bg.jpg');">
    <h2>ドローン事業</h2>
    <p>合同会社YAYのドローン事業は、空撮、測量、検査など、様々な分野で活用されています。高精度なドローン技術を活かして、お客様のニーズに応じたサービスを提供します。</p>
    <img src="@/assets/images/drone-business.jpg" alt="ドローン事業のイメージ" class="drone-image">
    <ul>
      <li>空撮サービス：プロモーションビデオやイベントの記録に最適な高品質な空撮サービスを提供します。</li>
      <li>測量サービス：正確なデータを取得し、効率的な測量作業を支援します。</li>
      <li>点検サービス：インフラや建物の点検を迅速かつ安全に行います。</li>
      <li>農業支援：作物の監視や管理にドローンを活用し、生産性の向上を図ります。</li>
    </ul>
    <h3>ブログ</h3>
    <router-link to="/drone-blog">ブログ一覧</router-link>
  </div>
</template>

<script>
export default {
  name: 'DronePage'
}
</script>

<style scoped>
.main-content {
  background-color: rgba(255, 255, 255, 0.9); /* ホワイト */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Lato', sans-serif;
}
.drone-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.);
}
</style>
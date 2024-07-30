<template>
  <div class="main-content" style="background-image: url('/images/it-bg.jpg');">
    <h2>IT事業</h2>
    <p>合同会社YAYのIT事業は、最新技術を駆使したソフトウェア開発を中心に展開しています。私たちはお客様のニーズに応じたカスタムソリューションを提供し、業務効率化やビジネス成長をサポートします。</p>
    <img src="@/assets/images/it-business.jpg" alt="IT事業のイメージ" class="it-image">
    <ul>
      <li>システム開発：業務アプリケーションやデータベースシステムの設計・開発を行い、企業の効率化を支援します。</li>
      <li>ウェブサイト制作：魅力的でユーザーフレンドリーなウェブサイトを制作し、ブランド価値を高めます。</li>
      <li>モバイルアプリ開発：iOSおよびAndroid向けの高機能なモバイルアプリを開発し、ユーザーエクスペリエンスを向上させます。</li>
      <li>ITコンサルティング：技術戦略やシステム導入のアドバイスを提供し、最適なITソリューションを提案します。</li>
    </ul>
    <h3>ブログ</h3>
    <router-link to="/it-blog">ブログ一覧</router-link>
  </div>
</template>

<script>
export default {
  name: 'ITPage'
}
</script>

<style scoped>
.main-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.it-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

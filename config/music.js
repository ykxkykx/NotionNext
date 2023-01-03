const musicUrl = 'https://music.163.com/song/media/outer/url?id='

const COVER_FC = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/adb62bf0-ea14-4b28-825c-702a4441fea3/fc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T181053Z&X-Amz-Expires=86400&X-Amz-Signature=9d11fac195a98f728f51908c671aa0c61bf778683024fb8230ee431f18c3fe51&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22fc.jpg%22&x-id=GetObject'
// const COVER_SC = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ef622ba0-2ccd-4b6c-8615-f393950cea68/sc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T183742Z&X-Amz-Expires=86400&X-Amz-Signature=0d52bad83f593da791579ab282ee9dae06986e8542dd6596fd3e5a48fd211557&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22sc.jpg%22&x-id=GetObject'
// const COVER_3RD = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c712f289-f5a0-4130-baad-a61175f345d9/3rd.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T183838Z&X-Amz-Expires=86400&X-Amz-Signature=c2957378fa4331004483969236d2003e17806e5b039bed30ae25c36b2ec5dec3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%223rd.jpg%22&x-id=GetObject'
const OST_FC = [
  {
    name: '暗がりがくれた安らぎ',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3e593bc-4ddd-4968-bf9d-7aa722db320e/%E6%9A%97%E3%81%8B%E3%82%99%E3%82%8A%E3%81%8B%E3%82%99%E3%81%8F%E3%82%8C%E3%81%9F%E5%AE%89%E3%82%89%E3%81%8D%E3%82%99.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184201Z&X-Amz-Expires=86400&X-Amz-Signature=5955f64918b69c61f964632595bb72c86254b6e3e5e26f48c1cda4e114d90f83&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E6%259A%2597%25E3%2581%258B%25E3%2582%2599%25E3%2582%258A%25E3%2581%258B%25E3%2582%2599%25E3%2581%258F%25E3%2582%258C%25E3%2581%259F%25E5%25AE%2589%25E3%2582%2589%25E3%2581%258D%25E3%2582%2599.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '闇を彷徨う',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1e8ec73-afc4-4056-9740-54f5dc5a0671/%E9%97%87%E3%82%92%E5%BD%B7%E5%BE%A8%E3%81%86.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184307Z&X-Amz-Expires=86400&X-Amz-Signature=4044adf02bdaa1ee793fa33b00c12999fd2d8db3466cedba6904b32183aa0e7c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E9%2597%2587%25E3%2582%2592%25E5%25BD%25B7%25E5%25BE%25A8%25E3%2581%2586.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '地方都市ロレント',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/591fc72e-9611-4ee8-9bfe-85f6ac69059f/%E5%9C%B0%E6%96%B9%E9%83%BD%E5%B8%82%E3%83%AD%E3%83%AC%E3%83%B3%E3%83%88.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184350Z&X-Amz-Expires=86400&X-Amz-Signature=811862659c5757e6a0a98dd8ffdfc48c70160245b3082ace6e72ddec8974fef6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%259C%25B0%25E6%2596%25B9%25E9%2583%25BD%25E5%25B8%2582%25E3%2583%25AD%25E3%2583%25AC%25E3%2583%25B3%25E3%2583%2588.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '風を共に舞う気持ち',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/962831ec-fc8e-4aee-98f7-ea4c6b13faeb/%E9%A2%A8%E3%82%92%E5%85%B1%E3%81%AB%E8%88%9E%E3%81%86%E6%B0%97%E6%8C%81%E3%81%A1.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184504Z&X-Amz-Expires=86400&X-Amz-Signature=cf7d7c4c189ced84e9ef03dfd27ce6a419be45fa112188ca05de7e22c0cd8b55&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E9%25A2%25A8%25E3%2582%2592%25E5%2585%25B1%25E3%2581%25AB%25E8%2588%259E%25E3%2581%2586%25E6%25B0%2597%25E6%258C%2581%25E3%2581%25A1.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '告白',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/326bdc5f-2ced-46fb-b6a3-a7af8e09dcd0/%E5%91%8A%E7%99%BD.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184524Z&X-Amz-Expires=86400&X-Amz-Signature=3709811fc122a541f19f741e3f4c7c9bf482680e411010a4c99ebbe2b5a61b4e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%2591%258A%25E7%2599%25BD.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '工房都市ツァイス',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84997012-97a5-4baa-8144-cf224d43bc27/%E5%B7%A5%E6%88%BF%E9%83%BD%E5%B8%82%E3%83%84%E3%82%A1%E3%82%A4%E3%82%B9.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184547Z&X-Amz-Expires=86400&X-Amz-Signature=09b350352d95922f593e2eb95337198d16d3e5b8b4bad702afb8f85c3cc09863&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%25B7%25A5%25E6%2588%25BF%25E9%2583%25BD%25E5%25B8%2582%25E3%2583%2584%25E3%2582%25A1%25E3%2582%25A4%25E3%2582%25B9.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '国境警備も楽じゃない',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/53ef3637-e80a-434e-bced-ed46609efce5/%E5%9B%BD%E5%A2%83%E8%AD%A6%E5%82%99%E3%82%82%E6%A5%BD%E3%81%97%E3%82%99%E3%82%83%E3%81%AA%E3%81%84.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184612Z&X-Amz-Expires=86400&X-Amz-Signature=b30fb97e57f5481e464e539a74812e8479e715a637c372cabeb40585632b50cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%259B%25BD%25E5%25A2%2583%25E8%25AD%25A6%25E5%2582%2599%25E3%2582%2582%25E6%25A5%25BD%25E3%2581%2597%25E3%2582%2599%25E3%2582%2583%25E3%2581%25AA%25E3%2581%2584.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '海港都市ルーアン',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a3c068d-39ad-4ddc-aec6-6963217be9b5/%E6%B5%B7%E6%B8%AF%E9%83%BD%E5%B8%82%E3%83%AB%E3%83%BC%E3%82%A2%E3%83%B3.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184635Z&X-Amz-Expires=86400&X-Amz-Signature=400912b61e9687cfa39b51f969647df97be462da06427fec5c870bd683100a45&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E6%25B5%25B7%25E6%25B8%25AF%25E9%2583%25BD%25E5%25B8%2582%25E3%2583%25AB%25E3%2583%25BC%25E3%2582%25A2%25E3%2583%25B3.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '空の軌跡 [BONUS TRACK]',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17ba9c9a-94c8-4ddd-962c-bcfe8c035ffc/%E7%A9%BA%E3%81%AE%E8%BB%8C%E8%B7%A1_BONUS_TRACK.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184805Z&X-Amz-Expires=86400&X-Amz-Signature=7e3a388137f454b5b15d8b0452c6ba955eab1e1ef290c159d33a7b850d459864&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25A9%25BA%25E3%2581%25AE%25E8%25BB%258C%25E8%25B7%25A1%2520%255BBONUS%2520TRACK%255D.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '旅立ちの小径',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0b3dd9b8-a42d-4969-87a9-1a3d413863c9/%E6%97%85%E7%AB%8B%E3%81%A1%E3%81%AE%E5%B0%8F%E5%BE%84.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184822Z&X-Amz-Expires=86400&X-Amz-Signature=468da32353a8b9f9a6e56657805fab94a50c24b8e5bfd0f694919e76ae38b1a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E6%2597%2585%25E7%25AB%258B%25E3%2581%25A1%25E3%2581%25AE%25E5%25B0%258F%25E5%25BE%2584.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '商業都市ボース',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ff52810b-0594-4b12-99b5-edede16f4707/%E5%95%86%E6%A5%AD%E9%83%BD%E5%B8%82%E3%83%9B%E3%82%99%E3%83%BC%E3%82%B9.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184930Z&X-Amz-Expires=86400&X-Amz-Signature=97ece6d0e548a61ec93643a2256ad987ace63830b0813abee0b4b06816628e0e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%2595%2586%25E6%25A5%25AD%25E9%2583%25BD%25E5%25B8%2582%25E3%2583%259B%25E3%2582%2599%25E3%2583%25BC%25E3%2582%25B9.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '四輪の塔',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fed8025b-2652-4741-8a5d-a636c2190c41/%E5%9B%9B%E8%BC%AA%E3%81%AE%E5%A1%94.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T184955Z&X-Amz-Expires=86400&X-Amz-Signature=adc813b93c9d444b9ac7a630504e8028a877364c2856a78143c4f62c09b24743&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%259B%259B%25E8%25BC%25AA%25E3%2581%25AE%25E5%25A1%2594.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '王城',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec7193d4-56e0-402c-a662-c98f4cb17e71/%E7%8E%8B%E5%9F%8E.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185016Z&X-Amz-Expires=86400&X-Amz-Signature=0b5c68a235e0a339d2e2092a5045b9669ea6e78c0bfe75fa9bb60ff0625a4a96&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%258E%258B%25E5%259F%258E.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '王都グランセル',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b357e77-8704-4164-b623-46ae00237f18/%E7%8E%8B%E9%83%BD%E3%82%AF%E3%82%99%E3%83%A9%E3%83%B3%E3%82%BB%E3%83%AB.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185130Z&X-Amz-Expires=86400&X-Amz-Signature=f14094811a4f64be1d9f95aee9a5822f3897f6e4fe79d0ae5cddca61cdf7ee01&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%258E%258B%25E9%2583%25BD%25E3%2582%25AF%25E3%2582%2599%25E3%2583%25A9%25E3%2583%25B3%25E3%2582%25BB%25E3%2583%25AB.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '消え行く星',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3d12274a-d1b1-4709-ae49-6cfecd921d3b/%E6%B6%88%E3%81%88%E8%A1%8C%E3%81%8F%E6%98%9F.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185149Z&X-Amz-Expires=86400&X-Amz-Signature=c4c977dffc9f05e1cd8fb5f40124173ca470f868cea8784753fcb28681c8f2a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E6%25B6%2588%25E3%2581%2588%25E8%25A1%258C%25E3%2581%258F%25E6%2598%259F.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '星の在り処',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82a17f25-f74c-4cf6-bd6d-8b5d7dd5d135/%E6%98%9F%E3%81%AE%E5%9C%A8%E3%82%8A%E5%87%A6.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185223Z&X-Amz-Expires=86400&X-Amz-Signature=cb1d686b6ea2f0b7459e467ac8087688575a498a69a030f63ec98a2d34c11e2d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E6%2598%259F%25E3%2581%25AE%25E5%259C%25A8%25E3%2582%258A%25E5%2587%25A6.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '胸の中に',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4e6c5eac-dd76-49ab-b081-3be4ba4583e4/%E8%83%B8%E3%81%AE%E4%B8%AD%E3%81%AB.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185245Z&X-Amz-Expires=86400&X-Amz-Signature=b979e7af6782a1e610a2b0190a354434e6f9c13927709b9985d34d101c11fd1f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E8%2583%25B8%25E3%2581%25AE%25E4%25B8%25AD%25E3%2581%25AB.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '陽だまりにて和む猫',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/683d77b9-115d-4862-9cb8-136def4da232/%E9%99%BD%E3%81%9F%E3%82%99%E3%81%BE%E3%82%8A%E3%81%AB%E3%81%A6%E5%92%8C%E3%82%80%E7%8C%AB.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T182335Z&X-Amz-Expires=86400&X-Amz-Signature=2aa21b008548e89e3a8cf68a5972a9a24c321900c72fe3299d80e8fbffa6b236&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E9%2599%25BD%25E3%2581%259F%25E3%2582%2599%25E3%2581%25BE%25E3%2582%258A%25E3%2581%25AB%25E3%2581%25A6%25E5%2592%258C%25E3%2582%2580%25E7%258C%25AB.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '銀の意志',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/beb54ddc-c0fe-44b4-b20f-07f18b44d98a/%E9%8A%80%E3%81%AE%E6%84%8F%E5%BF%97.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185430Z&X-Amz-Expires=86400&X-Amz-Signature=23633dc1d46bc054484c1e4fe48c5358961b11eddb330736ed4f554b751c1f79&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E9%258A%2580%25E3%2581%25AE%25E6%2584%258F%25E5%25BF%2597.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '賑やかに行こう',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/37f6f93d-4464-4109-a431-ce19293a4f9c/%E8%B3%91%E3%82%84%E3%81%8B%E3%81%AB%E8%A1%8C%E3%81%93%E3%81%86.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185457Z&X-Amz-Expires=86400&X-Amz-Signature=16b4aece24b88cc86c6ebe5ab1e9d8843f20058e57e6d6ace8fd62889cd85a12&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E8%25B3%2591%25E3%2582%2584%25E3%2581%258B%25E3%2581%25AB%25E8%25A1%258C%25E3%2581%2593%25E3%2581%2586.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - 城',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad81429b-e367-4f0f-a18b-bba1adf1f0c2/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E5%9F%8E.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185524Z&X-Amz-Expires=86400&X-Amz-Signature=cd31df22efc9865e49998f5e94c83c0581c06b9d76ec698bc7cb83a9c7265e47&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E5%259F%258E.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - 大団円',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d7099802-2afd-4814-91cd-d6f1a54a8d68/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E5%A4%A7%E5%9B%A3%E5%86%86.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185541Z&X-Amz-Expires=86400&X-Amz-Signature=15a4226ba299a7a0ea8558d95a8726d80ba0719ffbd6bc1c574b7e63b27c39a6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E5%25A4%25A7%25E5%259B%25A3%25E5%2586%2586.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - 姫の悩み',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de5b87ff-d9f1-4ac1-9a16-a6aa8522c238/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E5%A7%AB%E3%81%AE%E6%82%A9%E3%81%BF.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185601Z&X-Amz-Expires=86400&X-Amz-Signature=91ec377a87f1181e34f5f2e8c768f019d58473fb665073f4096e54e1f2d1cc7b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E5%25A7%25AB%25E3%2581%25AE%25E6%2582%25A9%25E3%2581%25BF.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - 姫の死',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b82e70ec-d2be-4e7d-a56e-8753a2a26afd/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E5%A7%AB%E3%81%AE%E6%AD%BB.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185624Z&X-Amz-Expires=86400&X-Amz-Signature=f0dcca06b99cb837978fc3b029f66566dd87e53a1f82059c912a030d0345f58b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E5%25A7%25AB%25E3%2581%25AE%25E6%25AD%25BB.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - 決闘',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11047bf4-3c9d-4a58-9311-42a97a7397ae/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E6%B1%BA%E9%97%98.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185645Z&X-Amz-Expires=86400&X-Amz-Signature=5751bbcb46a02624be83d4b54f7a4262b3e10564a6aabcad0f695220f1456512&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E6%25B1%25BA%25E9%2597%2598.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - 騎士達の嘆き',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14c2a57f-0d08-49c3-89a9-a3ace0064bbe/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E9%A8%8E%E5%A3%AB%E9%81%94%E3%81%AE%E5%98%86%E3%81%8D.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185710Z&X-Amz-Expires=86400&X-Amz-Signature=a8210716bd27f659ef41f82abb3cc06a901caa3f08ad1860f2b0127d739104f3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E9%25A8%258E%25E5%25A3%25AB%25E9%2581%2594%25E3%2581%25AE%25E5%2598%2586%25E3%2581%258D.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: '組曲 白き花のマドリガル - コロシアム',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b99481a0-927b-44e9-b9b3-2611739d340c/%E7%B5%84%E6%9B%B2_%E7%99%BD%E3%81%8D%E8%8A%B1%E3%81%AE%E3%83%9E%E3%83%88%E3%82%99%E3%83%AA%E3%82%AB%E3%82%99%E3%83%AB_-_%E3%82%B3%E3%83%AD%E3%82%B7%E3%82%A2%E3%83%A0.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185725Z&X-Amz-Expires=86400&X-Amz-Signature=fc92cfca560da52b9580070a3a650dc2de3bd7dfef2bb4c3101d74a6487e7e71&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B5%2584%25E6%259B%25B2%2520%25E7%2599%25BD%25E3%2581%258D%25E8%258A%25B1%25E3%2581%25AE%25E3%2583%259E%25E3%2583%2588%25E3%2582%2599%25E3%2583%25AA%25E3%2582%25AB%25E3%2582%2599%25E3%2583%25AB%2520-%2520%25E3%2582%25B3%25E3%2583%25AD%25E3%2582%25B7%25E3%2582%25A2%25E3%2583%25A0.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'Rock on the Road',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d2052866-6458-490e-b5db-67fa56c8ff0f/Rock_on_the_Road.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185817Z&X-Amz-Expires=86400&X-Amz-Signature=c4ca750d447a857e96349af18e10b49f94c370b88cb6f16f89dbca92955daf8f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rock%2520on%2520the%2520Road.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'Secret Green Passage',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b302aa2b-6b03-416e-977d-5ca20653acd6/Secret_Green_Passage.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185848Z&X-Amz-Expires=86400&X-Amz-Signature=1d8c53b7066c7a03c398b81a1a267c3cce0cebcdd032a120d20d636aeb14f8a5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Secret%2520Green%2520Passage.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'Sophisticated Fight',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d68d79b2-2911-4660-99a4-6bb980bb84d4/Sophisticated_Fight.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185908Z&X-Amz-Expires=86400&X-Amz-Signature=e08cbd83cf250304dd3e100043f653dc094605c5e6eb2a9cf63dbf2a85764083&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Sophisticated%2520Fight.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'To be Suggestive',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/79a3c530-3dc7-4a7b-baa8-6e2133ead7d1/To_be_Suggestive.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185931Z&X-Amz-Expires=86400&X-Amz-Signature=771a7ca7a2495c8a3832836042b244919ac60c5507727e2d6ba98d7240789c6e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22To%2520be%2520Suggestive.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'グランアリーナ',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/23bf7258-25a7-419d-b0de-4f9a26255802/%E3%82%AF%E3%82%99%E3%83%A9%E3%83%B3%E3%82%A2%E3%83%AA%E3%83%BC%E3%83%8A.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T185950Z&X-Amz-Expires=86400&X-Amz-Signature=f6f40abf808346b658fd61a1a910a0f091c0ae798b761028d676f6c222ca4585&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E3%2582%25AF%25E3%2582%2599%25E3%2583%25A9%25E3%2583%25B3%25E3%2582%25A2%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%258A.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'リベールの歩き方',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fdcc32d9-c977-475a-af8b-a2ad91134f05/%E3%83%AA%E3%83%98%E3%82%99%E3%83%BC%E3%83%AB%E3%81%AE%E6%AD%A9%E3%81%8D%E6%96%B9.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T190020Z&X-Amz-Expires=86400&X-Amz-Signature=9a8c060b4eaa9678f63738114754ccffd4aada6a8dc56df9cc4347da2f244299&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E3%2583%25AA%25E3%2583%2598%25E3%2582%2599%25E3%2583%25BC%25E3%2583%25AB%25E3%2581%25AE%25E6%25AD%25A9%25E3%2581%258D%25E6%2596%25B9.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'リベールの誇り',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2449fbec-9100-4267-ac9c-8695f2359190/%E3%83%AA%E3%83%98%E3%82%99%E3%83%BC%E3%83%AB%E3%81%AE%E8%AA%87%E3%82%8A.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T190111Z&X-Amz-Expires=86400&X-Amz-Signature=3cb3a53dfd8040bbb378a33715ea80daa65f0c5c350afb233db1baee902b06ff&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E3%2583%25AA%25E3%2583%2598%25E3%2582%2599%25E3%2583%25BC%25E3%2583%25AB%25E3%2581%25AE%25E8%25AA%2587%25E3%2582%258A.mp3%22&x-id=GetObject',
    cover: COVER_FC
  },
  {
    name: 'レイストン要塞',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c6ef2098-4a84-4b69-97ae-7f7fdde098eb/%E3%83%AC%E3%82%A4%E3%82%B9%E3%83%88%E3%83%B3%E8%A6%81%E5%A1%9E.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T190128Z&X-Amz-Expires=86400&X-Amz-Signature=41259a8f0fad9ed762b43f39a54b83aa75887348bfa9ead77707210b5c5e86da&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E3%2583%25AC%25E3%2582%25A4%25E3%2582%25B9%25E3%2583%2588%25E3%2583%25B3%25E8%25A6%2581%25E5%25A1%259E.mp3%22&x-id=GetObject',
    cover: COVER_FC
  }
]
const OST_SC = [
  // {
  //   name: '',
  //   artist: 'Falcom Sound Team jdk',
  //   url: '',
  //   cover: COVER_SC
  // }
]
const OST_3RD = [
  // {
  //   name: '',
  //   artist: 'Falcom Sound Team jdk',
  //   url: '',
  //   cover: COVER_3RD
  // }
]

// const NETEASE_LIST = [
//   {
//     name: '风を共に舞う気持ち',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '731419.mp3',
//     cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
//   },
//   {
//     name: '王都グランセル',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '731355.mp3',
//     cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
//   },
//   {
//     name: '工房都市ツァイス',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '731333.mp3',
//     cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
//   },
//   {
//     name: '空を见上げて',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '730635.mp3',
//     cover: 'https://p2.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg'
//   },
//   {
//     name: 'I swear...',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '730633.mp3',
//     cover: 'https://p1.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg'
//   },
//   {
//     name: '海港都市ルーアン',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '731291.mp3',
//     cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
//   },
//   {
//     name: 'LOST HARMONY AMONG PEOPLE',
//     artist: 'Falcom Sound Team jdk',
//     url: musicUrl + '729957.mp3',
//     cover: 'https://p1.music.126.net/vAVkm3vd_TLiBukkJBsm7w==/624522604624169.jpg'
//   }
// ]

module.exports = {
  MUSIC_PLAYER_AUDIO_LIST: [
    ...OST_FC,
    ...OST_SC,
    ...OST_3RD
    // ...NETEASE_LIST
  ]
}

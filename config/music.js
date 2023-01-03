const musicUrl = 'https://music.163.com/song/media/outer/url?id='

const FC_COVER = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/adb62bf0-ea14-4b28-825c-702a4441fea3/fc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T181053Z&X-Amz-Expires=86400&X-Amz-Signature=9d11fac195a98f728f51908c671aa0c61bf778683024fb8230ee431f18c3fe51&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22fc.jpg%22&x-id=GetObject'
const FC_OST = [
  {
    name: '陽だまりにて和む猫',
    artist: 'Falcom Sound Team jdk',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/683d77b9-115d-4862-9cb8-136def4da232/%E9%99%BD%E3%81%9F%E3%82%99%E3%81%BE%E3%82%8A%E3%81%AB%E3%81%A6%E5%92%8C%E3%82%80%E7%8C%AB.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230103T182335Z&X-Amz-Expires=86400&X-Amz-Signature=2aa21b008548e89e3a8cf68a5972a9a24c321900c72fe3299d80e8fbffa6b236&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E9%2599%25BD%25E3%2581%259F%25E3%2582%2599%25E3%2581%25BE%25E3%2582%258A%25E3%2581%25AB%25E3%2581%25A6%25E5%2592%258C%25E3%2582%2580%25E7%258C%25AB.mp3%22&x-id=GetObject',
    cover: FC_COVER
  }
]

const NETEASE_LIST = [
  {
    name: '风を共に舞う気持ち',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731419.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
  },
  {
    name: '王都グランセル',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731355.mp3',
    cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
  },
  {
    name: '工房都市ツァイス',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731333.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
  },
  {
    name: '空を见上げて',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '730635.mp3',
    cover: 'https://p2.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg'
  },
  {
    name: 'I swear...',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '730633.mp3',
    cover: 'https://p1.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg'
  },
  {
    name: '海港都市ルーアン',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731291.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
  },
  {
    name: 'LOST HARMONY AMONG PEOPLE',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '729957.mp3',
    cover: 'https://p1.music.126.net/vAVkm3vd_TLiBukkJBsm7w==/624522604624169.jpg'
  }
]

module.exports = {
  MUSIC_PLAYER_AUDIO_LIST: [
    ...FC_OST,
    ...NETEASE_LIST
  ]
}

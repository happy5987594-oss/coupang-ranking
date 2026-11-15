// 랭킹 상품 목록 — 이 파일만 고치면 사이트의 랭킹이 바뀌어요.
// 쿠팡에 보이는 값을 그대로 옮겨 적어 주세요. 지어내지 않아요.
//
// 기준일: 쿠팡에서 순위와 가격을 확인한 날 (예: "2026-11-15")
// items: 1위부터 순서대로 적어요. 위에 있을수록 순위가 높아요.
//   name     상품 이름
//   price    가격 (숫자만, 예: 23900)
//   rating   평점 (예: 4.8) — 모르면 null
//   reviews  리뷰 수 (숫자만, 예: 1234) — 모르면 null
//   shipping 배송 예정 기간 (쿠팡 상품 페이지에 적힌 그대로, 예: "7~14일")
//   url      쿠팡 상품 페이지 주소
//
// 예시 (맨 앞의 // 를 지우고 실제 값으로 바꿔요)
// { name: "상품 이름", price: 23900, rating: 4.8, reviews: 1234, shipping: "7~14일", url: "https://www.coupang.com/vp/products/..." },

// 이번 목록: 2026-11-15에 쿠팡에서 "해외구매대행"으로 검색해 판매량순으로 정렬한 결과의 1~10위.
// 평점은 쿠팡 목록에 보이는 별점(0.5 단위), 가격은 그날 보인 판매가예요.

window.RANKING = {
  기준일: "2026-11-15",
  items: [
    { name: "[Jarrow Formulas] 자로우 포뮬러스 도피러스 EPS 유산균 100억 CFU, 120정, 1개", price: 36930, rating: 5, reviews: 62325, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/7626263931?itemId=18376283146&vendorItemId=3179568952" },
    { name: "나우푸드 프로바이오틱-10 유산균 250억 베지 캡슐, 100정, 1개", price: 30870, rating: 5, reviews: 24346, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/2638550?itemId=12788104766&vendorItemId=3265972233" },
    { name: "모모야 라유 일본 고추기름 소스, 110g, 1개", price: 5100, rating: 4.5, reviews: 4368, shipping: "11/17(화) 도착 예정", url: "https://www.coupang.com/vp/products/6185836797?itemId=12177079541&vendorItemId=76711516026" },
    { name: "모모야 매울 것 같은데 맵지 않은 약간 매운 라유, 2개, 110g", price: 9370, rating: 5, reviews: 6744, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/7007366750?itemId=25186340985&vendorItemId=93128247579" },
    { name: "닥터스베스트 MSM 1500mg 타블렛, 120정, 1개", price: 13230, rating: 5, reviews: 30377, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/4791961748?itemId=11700940657&vendorItemId=5118204077" },
    { name: "닥터스베스트 글루코사민 콘드로이친 MSM 캡슐, 360정, 1개", price: 39230, rating: 5, reviews: 19429, shipping: "12/2 도착 예정", url: "https://www.coupang.com/vp/products/202217052?itemId=2993067958&vendorItemId=96301001308" },
    { name: "나우푸드 글루타티온 500mg 베지 캡슐, 60정, 1개", price: 25740, rating: 5, reviews: 11281, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/208403063?itemId=220021146&vendorItemId=3531485704" },
    { name: "너구리 매운 해산물 볶음 라면 맛 즉석 두꺼운 면 강렬한 칠리 킥 4.83온스(4팩), 1개", price: 13900, rating: 5, reviews: 4812, shipping: "11/26 도착 예정", url: "https://www.coupang.com/vp/products/6799961783?itemId=28984897494&vendorItemId=96031365022" },
    { name: "뉴트리코스트 NMN 500mg 캡슐, 60개입, 1개, 60정", price: 26400, rating: 4.5, reviews: 1245, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/6453434983?itemId=14018562162&vendorItemId=81267092749" },
    { name: "스완슨 베르베린 400mg 캡슐, 60개입, 1개, 60정", price: 20160, rating: 5, reviews: 2824, shipping: "11/18(수) 도착 예정", url: "https://www.coupang.com/vp/products/2878787?itemId=13412170&vendorItemId=3272331816" },
  ],
};

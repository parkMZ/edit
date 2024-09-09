# # Publishing Style Guide

### 작업 파일

- css  
  common.css: 공통 애니메이션, slide 공통 애니메이션, 서브페이지 메인 타이틀 애니메이션 등  
  font.css: font 파일 연결  
  layout.css: header, footer, gnb 관련 스타일 작성  
  reset.css: 스타일 초기화 코드  
  response.css: 반응형 코드  
  style_sub.css: 서브페이지 공통 스타일 작성 (intro, intro, breadcrumb, checkbox 등)  
  style.css: 메인페이지 스타일 작성  
  swiper.css: swiper 라이브러리 커스텀 코드 작성

- js  
  main.js: 메인과 서브페이지 공통 이벤트 작성  
  scroll.js: scroll 관련 이벤트 작성 (gsap 라이브러리 관련 코드)  
  sub.js: 서브페이지 단독 이벤트 작성  
  swiper_sub.js: 서브페이지 슬라이드 이벤트 작성  
  swiper.js: 메인페이지 슬라이드 이벤트 작성

### Font

<u>Pretendard 폰트 사용, font-weight는 숫자로 표기</u>

```css
font-weight: 100; Thin
font-weight: 200; ExtraLight
font-weight: 300; Light
font-weight: 400; Regular
font-weight: 500; Medium
font-weight: 600; SemiBold
font-weight: 700; Bold
font-weight: 800; ExtraBold
```

### Color

```css
--color-border-box: #ccc; /* button이나 이미지 박스, 컨텐츠 박스의 레이아웃 color */
--color-border-layout: #ddd; /* breadscrumb, table의 border color */
--color-primary: #f46700; /* 포인트 color */
```

### GSAP Library

- <h3>scroll.js</h3>  
  스크롤 이벤트 작업 시 사용

```javascript
const breadcrumb = document.querySelector("section.breadcrumb");

ScrollTrigger.create({
  trigger: breadcrumb, // <필수> trigger 대상 (스크롤 시작 범위)
  start: "top 85%", // <필수> target의 offset, viewport의 offset
  end: "bottom bottom", // <옵션> target의 offset, viewport의 offset
  endTrigger: footer, // <옵션> 해당 이벤트가 어느 지점에서 끝날지
  toggleClass: "active", // <옵션> 해당 클래스명 추가 및 제거 토글
  markers: true, // <옵션> 애니메이션(트윈) 진행 범위 확인
  onUpdate: ({ direction }) => {
    // <옵션> 스크롤이 진행 될 때 콜백함수의 매개변수로 다양한 옵션 확인 가능
    if (direction === 1) {
      gsap.to(stickyBreadcrumb, {
        position: "fixed",
        opacity: 1,
        y: 37,
        duration: 0.1,
      });
    } else if (direction === -1) {
      gsap.to(stickyBreadcrumb, {
        opacity: 0,
        y: -60,
        duration: 0.1,
      });
    }
  },
});

const tl = gsap.timeline({}); // 애니메이션(트윈) 순차 실행 선언

ScrollTrigger.create({
  trigger: ".intro-slide",
  start: "top 85%",
  endTrigger: "footer",
  animation: tl, //  <옵션> 애니메이션(트윈) 순차 실행 연결
});

// 애니메이션(트윈) 순차 실행 코드
tl.to(".intro-slide", {
  onStart: () => document.querySelector(".intro-slide").classList.add("active"),
}).to(".chatbot-box", {
  onStart: () => document.querySelector(".chatbot-box").classList.add("active"),
  delay: 0.25,
});

/* 
  trigger <필수>
- 사용: 시작 트리거 대상 설정
- 형태: 변수명, CSS 선택자

  start: "top 85%", <필수>
  end: "bottom bottom", <옵션>
- 형태: top, bottom, center, -=숫자, +=숫자, %
- 애니메이션(트윈)의 기준점이 viewport의 기준에 닿으면 특정 이벤트 실행
- end 속성을 지정하지 않으면 애니메이션(트윈) 대상의 높이만큼 자동으로 설정

  endTrigger: footer <옵션>
  - 사용: 끝 트리거 대상 설정
  - 형태: 변수명, CSS 선택자

  animation <옵션>
  - 사용: gsap.timeline({}) 선언 후 연결 시에는 필수

  onUpdate: 콜백함수 <옵션>
  - 사용: 스크롤이 진행 될 때 콜백함수의 매개변수로 다양한 옵션 확인 가능
        * direction : 스크롤 진행 방향 확인 가능 (1 또는 -1)
          (1은 스크롤을 내릴 때, -1은 스크롤을 올릴 때)
*/
```

- <h3>Swiper.js</h3>  
  슬라이드 구현

### 애니메이션

서브페이지  
`intro, breadcrumb, top-content 의 main-title` 모두 공통 애니메이션

- 구조 동일하게 적용하기

`서브페이지 전반적인 애니메이션 모두 동일` (scroll-sub.js 파일 연결)

- 위에서 아래로 올라오는 애니메이션
- 페이지 최상단 sub-wrap 클래스 적용
- top-content 클래스에 content 클래스 적용
- 부모 요소에 default-ani 클래스 적용
- 좌우의 자식 요소가 순차로 올라오도록 진행  
  자식요소:last-childe {transition-delay: 0.5s;}

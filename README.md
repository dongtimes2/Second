<div align="center">
<h1>(주) 두번째 프론트엔드 개발자 채용 과제</h1>
</div>

# 개요

- 프로젝트 이름: 반장창고
- 프로젝트 소개: api 통신을 통해 물품 정보가 담긴 정보를 화면에 출력한 뒤, 각 물품의 주문을 받을 수 있는 웹 페이지

## 지원 버전

<div align="left">

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung|
  | :---: | :---: | :---: | :--: | :--: |
  | 120.0 ~ latest | 120.0 ~ latest | 17.2 ~ latest | 15.6 ~ latest | 23.0 ~ latest |
</div>

## 기술 스택

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Next JS](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-58BCC9?style=flat-square&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-999999?style=flat-square)

# 이용 안내

## 주문 페이지로 이동하기

![main](https://github.com/dongtimes2/readme_image/assets/98700888/e1f07266-1c8e-40a5-91e9-84acd2ecb412)

메인 화면에서 '주문하러 가기' 버튼을 클릭할 경우 주문 페이지(/order) 로 이동합니다.

## 주문 페이지에서 물품 및 수량 선택하기

![order](https://github.com/dongtimes2/readme_image/assets/98700888/79cd38b7-8957-446c-93f5-a56b72f9c62b)

주문 페이지 내에서 주문할 물품의 수량을 선택할 수 있습니다.  
주문 가능한 수량의 범위는 0개 이상 999개 이하입니다.  
총 선택한 물품의 개수와 그에 따른 총 가격이 하단 bottom sheet에 표시됩니다.  

## 주문 성공

![success](https://github.com/dongtimes2/readme_image/assets/98700888/64205b64-cbda-4dae-a101-d726a7a2d410)

주문할 물품을 선택했을 경우 하단 bottom sheet의 주문하기 버튼이 활성화 됩니다.  
주문하기 버튼을 누르면 주문이 진행됩니다.  

만약 주문에 성공했다면, 주문이 완료되었다는 페이지(/complete)로 이동하며, 이후 다시 주문 페이지로 이동합니다.  
이때 기존의 주문 정보는 모두 초기화됩니다.  

과제 특성상 주문 성공과 주문 실패 페이지를 모두 구현해야 했으나, 주문이 성공하는 경우와 실패하는 경우에 대한 조건은 따로 명세되어있지 않았기 때문에 로직을 임의로 구성하였습니다.  
따라서 주문하기 버튼을 눌렀을 때 주문이 성공할 확률과 실패할 확률이 각각 절반이 되도록 (50%의 확률) 구현하였습니다.  

## 주문 실패

![failure](https://github.com/dongtimes2/readme_image/assets/98700888/e2ca6cef-7c6e-4344-8ab9-ab9ce2652d34)

50%의 확률로 주문에 실패했을 때 표출되는 페이지(/error) 입니다.  
주문에 실패했다는 페이지가 표출된 이후에는 다시 주문 페이지로 이동합니다.  
이때 기존의 주문 정보는 모두 초기화됩니다.  

# 고찰

### Next.js의 SSG와 SSR에 대한 차이 및 실제 서비스 적용에 관하여

맨 처음 구현 시 Next.js의 fetch 함수를 통해 물품에 대한 정보를 불러올 때, 별다른 옵션을 주지 않았습니다.  
그 결과 프로그램을 빌드한 이후에 실행했을 때, fetching 과정에서 표출되는 fallback 페이지가 보이지 않는 문제점이 있었습니다.  

Next.js의 공식문서를 읽어본 결과, Next.js는 기본적으로 SSG(Static Site Generation, 정적 생성)으로 동작한다는 사실을 알 수 있었고, 빌드하는 시점에서 발생한 fetching의 결과가 계속 반영된다는 점을 알게 되었습니다.  
이에 따라 빌드 이후에는 더이상 fetch 함수가 동작하지 않으므로 fallback 페이지가 표출되지 않았던 것이었습니다.  

온라인 주문 서비스는 유저가 접속해있는 시점을 기준으로 판매하고 있는 물품을 보여주어야 하는 특성을 가져야 합니다.  
따라서 주문 페이지는 SSG로 동작해서는 안 된다는 판단을 하였고, 실제 서비스 특성에 맞추어 SSR(Server Side Rendering)으로 동작하게끔 변경하였습니다.  

Next.js에서는 SSR로 동작하는 특정 페이지에 접속하였을 때, 기존에 fetch해온 결과를 일정 기간 cache에 저장함으로써 네트워크 요청을 줄이는 기능을 제공합니다.  
하지만 온라인 주문 서비스에서는 판매하고 있는 물품 정보를 caching할 필요가 전혀 없다고 판단했습니다.  
고객이 caching된 데이터를 일정기간 보게 된다면, 물건을 공급하는 판매자 입장에서는 상품 정보를 새로 등록해도 고객이 이를 즉각적으로 파악하지 못하기 때문에 caching 되어있는 기간 동안 새로운 물건을 판매할 기회를 잃기 때문입니다.  
고객 또한 새로운 상품을 접할 기회를 잃기 때문에, 결과적으로 주문 페이지에 표시되는 데이터를 caching하는 것은 비즈니스적으로 매우 불리한 결과를 초래할 것이라는 결론에 이르렀습니다.  

따라서 주문 페이지에 접속할 때마다 물품 정보를 새롭게 불러오도록 하며, caching은 일어나지 않도록 설정하였습니다.  

```js
// before
const response = await fetch(`${process.env.NEXT_PUBLIC__SERVER_URL}/items`);
return response.json();
```
```js
// after
const response = await fetch(
  `${process.env.NEXT_PUBLIC__SERVER_URL}/items`, {
    cache: 'no-cache'
  }
);
return response.json();
```

<br />

### layout shift에 관한 UX 개선

각 물품의 수량을 선택할 때, 기존 코드의 경우 버튼의 layout이 shift되는 문제점이 발생했습니다.  
주문할 물품의 수량을 고객이 정확하게 입력할 수 있어야 주문 착오를 방지할 수 있다고 생각했습니다.  
하지만 기존의 경우 수량을 나타내는 숫자가 바뀔 때마다 + 버튼의 위치가 살짝씩 변했기 때문에 심미적으로도 매우 좋지 못할뿐더러 버튼 입력이 누락될 가능성이 존재했습니다.  

결국 고객은 주문 서비스에 큰 신뢰감을 받지 못할 가능성이 높았기 때문에 이를 개선할 필요성이 있었고, 숫자를 표시하는 영역에 고정된 width 값을 부여함으로써 + 버튼의 위치가 변하는 일이 발생하지 않도록 조치하였습니다.  

|before|atfer|
| :--: | :--: |
|![before](https://github.com/dongtimes2/readme_image/assets/98700888/ddd7dc0c-3b01-40ce-a3ce-a4e58257de78)|![after](https://github.com/dongtimes2/readme_image/assets/98700888/05271e45-9a6e-4733-b875-61f7a181ed70)|
|숫자가 변경될 때마다 + 버튼의 위치가 살짝씩 이동한다.|숫자가 변경되어도 + 버튼의 위치가 일정하다.|

# 빌드

설치, 빌드 및 실행 방법은 아래와 같습니다.

```sh
# 설치
$ npm install

# 빌드
$ npm run build

# json server 실행
$ npm run server

# 빌드 결과물 실행
$ npm start
```

# version

다음과 같은 버전으로 개발되었습니다.

- node.js: 20.10.0(LTS)
- npm: 10.2.3

소스코드에는 .nvmrc 파일이 포함되어 있으므로, nvm이 설치되어있는 환경이라면 따로 버전을 지정할 필요가 없습니다.

# MORROW LORE
## 프로젝트 소개
---
친환경적인 고급 재료와 다양한 스타일 및 색상을 커스텀할 수 있는 문구&완구 이커머스 프로젝트입니다. (케이스티파이 참고)
---
### 주요 기능
- PLP (Product List Page)
  - 필터 기능
  - 성능 최적화
  - 리스트 로딩 최적화 (Lazy Loading)

- SDP (Single Detail Page)
  - 옵션 선택
  - 장바구니 담기
  - 단일 상품 결제 페이지로 이동

- 장바구니 (Cart Page)
  - 장바구니에 담았던 상품 선택 기능
  - 선택한 상품 삭제 기능
  - 선택한 상품에 따라 보여지는 총 결제금액

- 주문서 (Checkout Page)
  - Form Validation
  - 비회원 배송지 정보 입력, 회원 마이페이지에서 가져온 배송지 호출
  - 결제 금액 확인
 
- 결제 (Payment Page)
  - 결제수단 선택
  - 결제 플로우

### 보여주고 싶은 기능
- 적립포인트, 상품권, 할인 포함한 결제 시스템
- 로그인/로그아웃, 비회원, 회원가입, 마이페이지, 홈페이지 UXUI
---
## 사용하는 기술 스택
- React
- Typescript

## 설치 및 설정 방법
### 사전 요구사항
- Node.js 버전
- pnpm
- vite
---

### 설치
1. Repository 클론
   - git clone https://github.com/f-lab-edu/Morrow-lore.git
   - cd Morrow-lore
2. 의존성 설치
   - pnpm install
3. 환경 변수 설정
.env.example 파일을 참고하여 필요한 환경 변수를 .env 파일에 설정
4. 애플리케이션 실행
  - vite 
---

## 기능 및 사용법
### 주요기능 (결제 플로우)

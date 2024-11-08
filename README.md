# Allini - 반려동물 알레르기 관리 웹앱
![main](https://github.com/user-attachments/assets/d3b72b4c-7e07-4749-aa16-05d2c38f3137)

## 프로젝트 소개

Allini는 반려동물 알레르기 증상과 식이 정보를 추적하고 관리할 수 있는 웹 애플리케이션입니다.
반려동물의 건강한 삶을 위해 개발되었으며, 특히 알레르기가 있는 반려동물 보호자들을 위해 만들어졌어요!

### 주요 기능

- 간식 및 사료 성분 기록
- 알레르기 증상 변화 시각화
- AI 기반 알레르기 예방 및 관리 제안

## 기술 스택

- **Front-end**: React, TypeScript
- **Beac-end**: Express, MySQL
- **State Management**: React Context API
- **UI Library**: SCSS, clsx
- **Testing**: Storybook, MSW, Jest
- **Monitoring**: Sentry

## 주요 기능 화면

### 1. 간식 및 사료 등록
<img width="375" alt="e2" src="https://github.com/user-attachments/assets/445b008a-e28a-4c97-94df-a75a643b32b0">
<img width="375" alt="e" src="https://github.com/user-attachments/assets/ec431253-0650-4907-8465-0b07a4943a6e">


### 2. 간식/사료 및 알레르기 증상 기록 및 추적

<img width="375" alt="report" src="https://github.com/user-attachments/assets/d2f6292d-67a6-4dc2-807f-56f8a3887d5c">


### 3. 로그인
![login1](https://github.com/user-attachments/assets/861fac48-ca52-4332-9894-0ff65b9fc340)

<!-- ### 4. AI 기반 제안 구현 예정 -->

## 프로젝트 설치 및 실행

### 의존성 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn start
```

### 프로덕션 빌드

```bash
yarn build
```

### 프로젝트 구조

Allini 프로젝트는 Feature Sliced Design Architecture를 적용하여 기능별로 모듈화되어 있습니다.
주요 디렉토리 구조는 다음과 같습니다:

```
src/
├── app/
├── features/
│   ├── foodTreats/
│   └── ...
├── mocks/
├── pages/
├── shared/
├── widgets/
```

## 프로젝트 개선 계획

향후 Allini 프로젝트에서 추가로 구현할 계획은 다음과 같습니다:

- 축적된 데이터 기반의 알레르기 증상 예측 모델 적용
- 반려동물 병원 예약에 대한 진료 내역 관리 기능
- 반려동물 건강 데이터 & 간식/사료 정보 공유 및 커뮤니티 기능

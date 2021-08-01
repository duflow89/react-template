# react-template

personal template for React (spa)

## 설치

아래의 두 script 실행

``` bash
yarn
yarn install
```

## `이 작업 영역에는 TypeScript 버전이 포함되어 있습니다. TypeScript 및 JavaScript 언어 기능에 작업 영역 TypeScript 버전을 사용하시겠습니까?`

위의 문구 알림창 떴을 경우, 허용하기 (yarn2의 내장된 Typescript 사용)

## yarn script

- **start**  

- **start:mock**  
 Mock Api 연결 (Mock Api는 주로 test 용)

- **build**  
 `dist` 폴더에 결과물 생성  
 `dist` 폴더는 `start, build`할 때 마다 Reset

- **build:analyze**  
 build 결과 분석 (`dist/docs/size_dev.html`)

- **build:dev**  
 local 환경에 대한 build 결과물 생성
 
- **test**  
 Jest 실행
 
- **test:watch**  
 
- **test:coverage**  
 Coverage 결과물 생성  
 `coverage\lcov-report\index.html` 파일로 실행
 
- **lint**  
 Lint 검사
 
- **lint-staged**  
 Git Staging된 파일만 Lint 검사
 commit 하기 전 마다 해당 스크립트 실행
 Lint error 발생 시, git log에서 해당 오류 확인 후 수정 필수
 
- **format**  
 Prettier 실행
 
- **postinstall**  
  Husky 초기 설치
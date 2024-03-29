---
date: '2021년 9월 25일 오후 10:37'
title: 'useEffect'
menu: 'react'
categories: ['React']
summary: 'useEffect의 생명 주기 별 특정 작업을 처리하는 방법 정리'
thumbnail: './thumbnail/useEffect.png'
---
# 들어가며
> useEffect라는 Hook을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때(사라질 때), 그리고 업데이트 될 때(특정 props가 바뀔 때) 해당 작업을 처리하는 방법 정리해보았다.

## 마운트 / 언마운트
> 컴포넌트의 마운트, 언마운트 관리하기

```jsx
useEffect(() => {
	console.log('컴포넌트가 화면에 나타남');
	return () => {
		console.log('컴포넌트가 화면에서 사라짐');
	}
}, []);
```

`useEffect`의 첫번째 인자는 함수(`effect`), 두번째 인자는 배열(`deps`)이 들어간다.

배열에 조건이 없는 경우에는 컴포넌트가 마운트 됐을 때만 `useEffect`에 등록한 함수가 호출된다.

`useEffect`에서는 함수(`cleanup`)를 반환할 수 있고 이 함수는 `useEffect` 에 대한 뒷정리(?)를 해주는데 `deps`가 비어있는 경우 컴포넌트가 사라질 때 호출 되어 `componentDidUnMount` 역할을 한다고 이해하면 될 것 같다.

마운트 시에 주로하는 작업

- `props` 로 받은 컴포넌트의 로컬 상태로 설정
- 외부 API 요청 (REST API 등)
- <mark>라이브러리 사용</mark> (D3, Video.js 등)
- setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

언마운트 시에 하는 작업 

- setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
- 라이브러리 인스턴스 제거

## deps에 특정 조건 넣기

배열에 요소가 있으면 `componentDidMount` + `componentDidUpdate` 역할을 한다.<br/>
이런 경우 컴포넌트가 **처음 마운트 될 때, 지정한 값이 바뀔 때, 언마운트 될 때** 호출 된다.<br/>
`useEffect` 안에서 사용하는 `props`가 있는 경우 `useEffect`의 `deps`에 넣어줘야한다. 그렇지 않으면 `props` 가 최신 상태를 유지하지 못하여 `state`관리가 어려워질 수 있다.

배열(`deps`) 인자에 `state` 말고도 모든 업데이트 조건 추가 가능하다는거 !!

## deps 파라미터 생략하기

`deps` 를 생략하는 경우 컴포넌트가 리렌더링 될 때 마다 호출된다.
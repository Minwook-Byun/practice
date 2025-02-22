import React, {useState} from 'react';
import logo from './logo.svg';
// 여기에서 스타일링 
import './reset.css';
import './App.scss';




function App() {

  let[글제목, 글제목변경] = useState(['남자코트추천', '강남 우동맛집', '파이썬독학'], ['여자코트추천']);
  let [like, likeCount] = useState(0)
  let [modal, modal변경] = useState(false); // modal창 스위치

  function changeTitle(){
    const newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
    
  }


 
  
  return (
    <div className="App">

     <div className="global-nav">
      <div className ="global-nav-contents">
        <p className ="sub-title">💰경제 기본기</p>
        <h1 className="main-title">NEWNEEK</h1>
        <span>
        <img className="search-button" src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-search-feedback-those-icons-lineal-those-icons.png"/>
        </span>
      </div>
     </div>

     <section className="intro-page">
        <h1 className="slogan">우리가 시간이 없지, 세상이 안 궁금하냐!</h1>
     </section>

     <section className="global-category">
        <div>
          <ul className="global-category-list">
              <a href="#"><li className="global-category-items">전체</li></a>
              <a href="#"><li className="global-category-items">전체</li></a>
              <a href="#"><li className="global-category-items">⚖️국내정치</li></a>
              <a href="#"><li className="global-category-items">🌐세계</li></a>
              <a href="#"><li className="global-category-items">🤖테크</li></a>
              <a href="#"><li className="global-category-items">💰경제</li></a>
              <a href="#"><li className="global-category-items">💪노동·일</li></a>
              <a href="#"><li className="global-category-items">🌳환경</li></a>
              <a href="#"><li className="global-category-items">🧑여성</li></a>
              <a href="#"><li className="global-category-items">😷코로나19</li></a>
              <a href="#"><li className="global-category-items">🍕피자스테이션</li></a>
          </ul>
        </div>
    </section>

    <section className="main-page">
      <div className = "main-contents-list">
        <a href="#" className="main-contents-item">
            <h3 className="main-contents-item-title"> {글제목[0]} </h3>
              <div className="main-contents-like">
                <p className="main-contents-item-date"> 9월 22일 발행</p> 
                <span onClick={ ()=>{ likeCount(like + 1) } } >👍</span> 
                <div>{ like }</div>
              </div>
              <button onClick={()=>{changeTitle()}}>수정하기</button>
        </a>       
      </div>

      <div className = "main-contents-list">
        <a href="#" className="main-contents-item">
            <h3 className="main-contents-item-title"> {글제목[1]} </h3>
            <p className="main-contents-item-date"> 9월 22일 발행</p> 
        </a>       
      </div>

      <div className = "main-contents-list">
        <a href="#" className="main-contents-item">
            <h3 className="main-contents-item-title" onClick={()=>{modal변경(true)}}> {글제목[2]} </h3>
            <p className="main-contents-item-date"> 9월 22일 발행</p> 
        </a>       
      </div>
    </section>
    {
    modal === true 
    ? <Modal></Modal> 
    : null //텅빈 html을 의미
     }
   
    </div>
  );
}

function Modal(){
  // 치환을 한 것. 원하는 html 담기
  // 이름은 대문자로 시작!
  //  태그 하나로 묶어야 함
  // 지금 요 문서도 하나의 큰 컴포넌트
  // 리액트를 쓴느 가장 이유 중 하나. 
  // 반복적으로 출현하는 HTML 덩어리들 
  // 자주 바뀌는 HTML UI들. 
  // 다른 페이지 만들 때도 컴포넌트로 만듦.
  // 많이 만들면 단점: state 쓸 때 복잡해짐. => props 문법 이용해야한다.
  return(
    <div className="Modal"> 
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;



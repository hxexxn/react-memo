/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  // 제목
  let [postTitle, setPostTitle] = useState([
    "판타지 소설 추천",
    "화산귀환 존잼",
    "치킨 먹고 싶다",
  ]);

  // 좋아요
  let [likeNum, setLikeNum] = useState([0, 0, 0]);

  // 제목, 내용
  let [post, setPost] = useState([
    { title: "하이", content: "안녕하세요" },
    { title: "배불러", content: "치킨 먹고 싶다" },
  ]);

  console.log(post[1].title, post[1].content);

  // true는 보임, false는 안 보임
  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0);

  let [input, setInput] = useState("");

  // 변수와 state의 차이점
  // state가 변경되면 html도 자동으로 재렌더링됨.
  // state는 내용 변경시 자동으로 html에 반영되게 만들고 싶을 때 state 사용.
  // 자주 변경되는 항목에 사용하면 좋음

  return (
    <div className="App">
      <div className="blank-nav">
        <h4>Personal React Blog</h4>
      </div>

      {/* <button onClick={
        () => {
          let postCopy = [...postTitle];
          postCopy[0] = '로판 소설 추천';
          setPostTitle(postCopy)
        }
      }>제목 수정</button>

      <button onClick={
        ()=> {
          let postCopy = [...postTitle];
          postCopy.sort();
          setPostTitle(postCopy);
        }
      }>
        가나다순 정렬
      </button> */}

      {/* <div className="list">
        <h4>
          {postTitle[0]}
          <span
            onClick={() => {
              setLikeNum(likeNum + 1);
            }}
          >
            👍
          </span>
          <span>{likeNum}</span>
        </h4>
        <p>2월 19일 발행</p>
      </div>

      <div className="list">
        <h4>
          {postTitle[1]}
          <span
            onClick={() => {
              setLikeNum(likeNum + 1);
            }}
          >
            👍
          </span>
          <span>{likeNum}</span>
        </h4>
        <p>2월 19일 발행</p>
      </div> */}

      {postTitle.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                modal == true ? setModal(false) : null;
                setTitle(i);
              }}
            >
              {postTitle[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let likeCopy = [...likeNum];
                  likeCopy[i] = likeCopy[i] + 1;
                  setLikeNum(likeCopy);
                }}
              >
                👍
              </span>
              <span>{likeNum[i]}</span>
            </h4>

            <p>2월 19일 발행</p>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.shift(i);
                setPostTitle(copy);

                let likeCopy = [...likeNum];
                likeCopy.shift(i);
                setLikeNum(likeCopy);
                console.log(likeCopy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.unshift(input);
          setPostTitle(copy);

          let likeNumCopy = [...likeNum];
          likeNumCopy.unshift(0);
          setLikeNum(likeNumCopy);
        }}
      >
        등록
      </button>

      {modal == true ? <Modal postTitle={postTitle} title={title} /> : null}
    </div>
  );
}

// 모달 컴포넌트
function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.postTitle[props.title]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  );
}

export default App;

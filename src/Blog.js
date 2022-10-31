import { useRef, useState } from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons"
function Blog() {

  // 글 저장 useState
  let [post, setPost] = useState([
    // {
    //   title: "첫번째 글",
    //   content: "첫번째 내용"
    // },
    // {
    //   title: "두번째 글",
    //   content: "두번째 내용"
    // }
  ])

  let list = [{ title: "one-title", content: "one-content" },
  { title: "two-title", content: "two-content" }]

  // 좋아요
  let [like, setLike] = useState([0, 0]);


  // 입력된 글
  let [inputPost, setInputPost] = useState([
    {
      title: '',
      content: ''
    }
  ])

  const { title, content } = inputPost;

  // input
  const inputValue = (e) => {
    const { name, value } = e.target;
    setInputPost({
      ...inputPost,
      [name]: value
    });
    // console.log(name, value);
  }

  // 글 등록 버튼
  const submit = () => {
    let copy = [...post];
    copy.unshift(inputPost);
    setPost(copy);

    let likeCopy = [...like];
    likeCopy.unshift(0);
    setLike(likeCopy);
  }

  // 글 삭제
  // const deleteBtn = () => {
  //   let copy = [...post];
  //   copy.shift(i);
  //   setPost(copy)

  //   let likeCopy = [...like];
  //   likeCopy.shift(i);
  //   setLike(likeCopy)
  // }



  return (
    <>
      <div className="container">
        <div className="title">
          <h2>
            <i>
              Simemo XD
            </i></h2>
        </div>
        <div className="input-form">
          <div>
            <input className="input subject" name="title"
              placeholder="제목을 입력하세요." onChange={inputValue} />
          </div>
          <div>
            <textarea className="input content" name="content"
              placeholder="내용을 입력하세요." onChange={inputValue}></textarea>
          </div>
          <div>
            <button className="btn" onClick={submit}>ENTER</button>
          </div>
        </div>
        {post.map(function (a, i) {
          return (
            <div className="blog-content" key={i}>
              <h3>{post[i].title}</h3>
              <p>{post[i].content}</p>
              <div className="like">
                <div className="delete" onClick={() => {
                  let copy = [...post];
                  copy.pop(i);
                  setPost(copy)

                  let likeCopy = [...like];
                  likeCopy.pop(i);
                  setLike(likeCopy)
                }}>
                  <FontAwesomeIcon icon={faSquareMinus} />
                </div>
                <div>
                  <span onClick={
                    () => {
                      let copy = [...like];
                      copy[i] = copy[i] + 1;
                      setLike(copy)
                    }
                  } style={{ cursor: "pointer", paddingRight: 5 }}>♥</span>
                  <span>{like[i]}</span>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </>
  );
}

export default Blog;

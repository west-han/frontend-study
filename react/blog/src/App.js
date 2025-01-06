// /* eslint-disable */ // 이하 코드에서 warning 메시지 뜨지 않도록 설정
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let id = 1;
  let style = {color: 'blue', fontSize: '20px'};

  let [title, setTitle] = useState(['남자 코트 추천', '여자 코트 추천', '서울 맛집 추천']);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let posts = [{title: '제목3', date: '2024-02-01'}, {title: '제목2', date: '2024-02-02'}];

  let [titleIndex, setTitleIndex] = useState(0);

  let [입력값, set입력값] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ style }>블로그임</h4>
      </div>
      
      {
        title.map((item, index) => {
          return (<div className="list" key={index}>
            <h4 onClick={() => {
              if (titleIndex === index) {
                setModal(!modal);
              } else {
                setModal(true);
                setTitleIndex(index);
              }
            }}>{item} <span onClick={(e) => {
              e.stopPropagation();
              let likeCounts = [...likeCount];
              likeCounts[index]++;
              setLikeCount(likeCounts);
            }}>👍</span> {likeCount[index]} </h4>
            <p>2017-02-04 발행</p>
            <button onClick={e => {
              let newTitle = [...title];
              let newCount = [...likeCount];
              newTitle.splice(index, 1);
              newCount.splice(index, 1);
              setTitle(newTitle);
              setLikeCount(newCount);
            }}>삭제</button>
          </div>);
        })
      }

      {
        modal ?
        <Modal title={title} fn={setTitle} index={titleIndex} background="orange"/>
        : null
      }

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
        // fn1(['여자 코트 추천'].concat(title.slice(1)))
      }}>글 수정</button>

      <button onClick={() => {
        
        let copy = [...title];
        copy.sort((a, b) => a > b ? -1 : 1);
        setTitle(copy);
      }}>정렬</button>


      <input type='text' onChange={e => { set입력값(e.target.value); }}/>
      <button type='button' onClick={e => {
        let newTitle = [입력값, ...title];
        let newLikeCount = [0, ...likeCount];
        document.querySelector('input[type=text]').value = '';
        setTitle(newTitle);
        setLikeCount(newLikeCount);
      }}>입력</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background: props.background}}>
      <h4>{props.title[props.index]}</h4>
      <p>2017-02-04</p>
      <p>상세내용</p>
      <button onClick={() => {
        let newTitle = [...props.title];
        newTitle[props.index] = '여자코트추천';
        props.fn(newTitle);
      }}>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20
    }
  }

  render() {
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({age: 21})
        }}>버튼</button>
      </div>
    );
  }
}

export default App;

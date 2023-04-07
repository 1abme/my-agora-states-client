import logo from './logo.svg';
import './style.css';
import React, {useState, useEffect} from "react";
import Container from './Container.js';


function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data)
      })
  },[])
  console.log(discussions)

  return (
    <div className="App">
      <main>
        <h1>My Agora States</h1>
        <section className="form__container">
          <form action="" method="get" className="form">
            <div className="form__input--wrapper">
              <div className="form__input--name">
                <label htmlFor="name">Enter your name: </label>
                <input type="text" name="name" id="name" required="" />
              </div>
              <div className="form__input--title">
                <label htmlFor="title">Enter your title: </label>
                <input type="text" name="title" id="title" required="" />
              </div>
              <div className="form__textbox">
                <label htmlFor="story">Your question: </label>
                <textarea
                  id="story"
                  name="story"
                  placeholder="질문을 작성하세요"
                  required=""
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="form__submit">
              <input type="submit" defaultValue="submit" />
            </div>
          </form>
        </section>
        <section className="buttons">
          <button> ← </button>
          <button> → </button>
          <button> clear localStorage </button>
        </section>
        <section className="discussion__wrapper">
          <ul className="discussions__container">
            {discussions.map ((data , idx) => {return <Container discussion = {data} key ={idx}/>})}
          </ul>
        </section>
      </main>
    </div>
  );
}





export default App;

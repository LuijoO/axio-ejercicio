import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] =  useState([]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(" Lo que tomamos de Data ::: ",res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postData = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    }).then(res => console.log('posting data', res)).catch((err) => {
      console.log(err);
    });
    
  }

  const postDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    }).then(res => console.log('Deleted!!', res)).catch((err) => {
      console.log(err);
    });
    
  }

  const arr = data.map((data, index) => {
    return(
      <tr>
        <td style={{border: '1px solid black'}}>{data.id}</td>
        <td style={{border: '1px solid black'}}>{data.title}</td>
        <td style={{border: '1px solid black'}}>{data.body}</td>
        <td style={{border: '1px solid black'}}><button onClick={(e) => postDelete(data.id, e)}>Delete</button></td>
      </tr>
    )
  })

  return (
    <div className="App">
      <h1>Hola mundo, es mi segundo tuto de Axios</h1>

      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <hr />
        <label htmlFor="">body</label>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        <hr />
        <button onClick={postData}>POST</button>
      </form>

      <section>
        <table>
          <tr>
            <th style={{border: '1px solid black'}}>Id</th>
            <th style={{border: '1px solid black'}}>Title</th>
            <th style={{border: '1px solid black'}}>Body</th>
          </tr>
          {arr}
        </table>
      </section>
    </div>
  );
}

export default App;

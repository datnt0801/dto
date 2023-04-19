import { useState, useEffect } from "react"
import { SketchPicker } from 'react-color';
import './style.css'


function Category(props) {

  const [subject, setSubject] = useState('')
  const [color, setColor] = useState('')
  const [id, setId] = useState(0)

  const handleOnChangeSubject = (event) => {
    setSubject(event.target.value)
  }

  const handleOnChangeColor = (color) => {
    setColor(color.hex)
  }

  const handleAddCategory = () => {
    setId(id + 1)
    const newCate = {
      id: id,
      subject, // title: title
      color, // color: color
      createdAt: new Date(),
      updatedAt: new Date()
    }
    props.setCategory([...props.category, newCate])
    
  }


  useEffect(() => {
    
    localStorage.setItem('category',JSON.stringify(props.category))


  }, [id])
  


  return (
    <div className="category-component">
      <h2>Category Component</h2>
      <p>Input Subject of Category (Max Length 100)</p>
      <input
        onChange={handleOnChangeSubject}
        value={subject}></input>

      {/* <p>Input Color of Category</p>
    <input onChange={handleOnChangeColor} value={color}></input> */}
      <div className="color-picker">
        <SketchPicker color={color} onChangeComplete={handleOnChangeColor} onChange={handleOnChangeColor} />
      </div>
      <div className="color-demo" style={{ height: 50, width: "100%", background: color }}>
        <p id="color-demo-text">Category Color Demo</p>
      </div>

      <button onClick={handleAddCategory}>Add Category</button>
      <p>Current Category: {props.category.length}</p>
      {
        props.category.map(e => {
          return (
            <div>
              <p>Id: {e.id}</p>
              <p>Subject: {e.subject}</p>
              <p style={{ background: e.color }}>Color: {e.color}</p>
              <p>Create At: {e.createdAt.toString()}</p>
              <p>Update At: {e.updatedAt.toString()}</p>
              <br></br>
            </div>
          )
        })
      }
    </div>
  );
}

export default Category
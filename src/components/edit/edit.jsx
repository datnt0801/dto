import React from 'react'
import { useState, useEffect } from 'react';

export default function Edit(props) {


    const [dataFromLocal, setDataFromlocal] = useState(JSON.parse(localStorage.getItem("todo")))
    const [categoryFromlocal, setCategoryFromlocal] = useState(JSON.parse(localStorage.getItem("category")))
    const [effectState, setEffectState] = useState(true)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeContent = (event) => {
        setContent(event.target.value)
    }

    const handleChangeCategoryId = (event) => {
        setCategoryId(event.target.value)
    }

    const handleSubmit = () => {

        let data = dataFromLocal.find(data => data.todoKey === props.key);
        data.categoryId = categoryId;
        data.title = title;
        data.content = content;
        data.updatedAt = new Date();
        setDataFromlocal(data)

        // dataFromLocal.at(props.key).categoryId = props.categoryId;
        // dataFromLocal.at(props.key).title = props.title;
        // dataFromLocal.at(props.key).content = props.content;
        // dataFromLocal.at(props.key).updatedAt = new Date();

        //

        props.setTitle('')
        props.setContent('')
        props.setTodo(props.todo)
        props.setCondition(false);
        props.setCondition(true);
        setEffectState(!effectState)
    }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(dataFromLocal))

    }, [effectState])


    console.log(props.key, 'key')

    return (

        <div>
            <h1>edit component</h1>

            <p>Input Title of Todo (Max Length 100)</p>
            <input
                onChange={handleOnChangeTitle}
                value={title}></input>

            <p>Input Content of Todo</p>
            <input onChange={handleChangeContent} value={content}></input>

            <br /><br />
            <label >Choose category</label>
            <br />

            <select onChange={handleChangeCategoryId}>
                {categoryFromlocal.map(cate => <option value={cate.id}>{cate.subject}</option>)}
            </select>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>


    )
}

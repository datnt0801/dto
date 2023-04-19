import React from 'react'
import { useState } from 'react';
import Edit from '../edit/edit';

export default function TodoCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    const handleEdit = () => {
        setShowEdit(!showEdit)
        // seteditState(0);
    }

    const category = props.getCategoryByID(props.data.categoryId)

    return (

        <div>
            <p>index: {props.data.todoKey}</p>
            <button onClick={handleEdit}>Edit</button>

            <div>
                <div style={{ backgroundColor: category.color }} >
                    <div style={{ display: 'flex', justifyContent: "flex-end" }}></div>
                    <p>CategoryId:{props.data.categoryId.toString()}-{category.subject}</p>
                    <p>CategoryContent: {category.subject}</p>
                    <p style={{ backgroundColor: category.color }}>Title: {props.data.title}</p>
                    <p>Content: {props.data.content}</p>
                    <p>Create At: {props.data.createdAt.toString()}</p>
                    <p>Update At: {props.data.updatedAt.toString()}</p>
                    <br></br>
                </div>
            </div>
            {console.log(props.data.todoKey," todoKey")}
            {showEdit && <Edit

                key={props.data.todoKey}
                //
                setCondition={props.setCondition}
                setTodo={props.setTodo}
                todo={props.todo}
                //
                categoryId={props.categoryId}
                setCategoryId={props.setCategoryId}
                title={props.title}
                setTitle={props.setTitle}
                content={props.content}
                setContent={props.setContent}
            />}
        </div>
    )
}

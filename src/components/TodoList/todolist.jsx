import { useState, useEffect } from "react";
import TodoCard from "../TodoCard/TodoCard";
import './style.css'

function TodoList(props) {
  const [todoKey, setTodoKey] = useState(0)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('0')
  const [sortstate, setSortstate] = useState(0)
  const [localData, setlocalData] = useState([])
  const [sortTodo, setSortTodo] = useState(props.todo)
  const cloneTodo = [...props.todo]
  const [EditCondition, setEditCondition] = useState(false)

  const [EditIndex, setEditIndex] = useState();

  // console.log("clone todo: ", cloneTodo)

 //

  // const [age, setAge] = useState(0)

  // const result = useState(0)
  // const age = result[0]
  // const setAge = result[1]

  function handleOnChangeTitle(event) {
    setTitle(event.target.value);
  }
  const handleChangeContent = (event) => {
    setContent(event.target.value)
  }
  const handleChangeCategoryId = (event) => {
    setCategoryId(event.target.value)
  }
  const handleAddTodo = () => {
    if (title === '') {
      alert('Title can not empty')
      return;
    }
    if (content === '') {
      alert('Content can not empty')
      return;
    }
    const newTodo = {
      categoryId: categoryId,
      title,
      content,
      todoKey,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // todo = [] => add newTodo
    props.setTodo([...props.todo, newTodo]);
    setTitle('')
    setContent('')
    setTodoKey(todoKey + 1)
    // setCategoryId('')
  }

  useEffect(() => {

    localStorage.setItem('todo', JSON.stringify(props.todo))
    console.log('useEffect')
  }, [title])


  const getCategoryByID = (id) => {
    const find = props.category.find(cate => Number(cate.id) === Number(id))
    // console.log('CATE: ', find)
    return find;
  }


  useEffect(() => {

    setSortTodo(props.todo);

  }, [props.todo.length])


  useEffect(() => {
    switch (sortstate) {

      case 0:
        setSortTodo(props.todo)
        break;

      case 1:
        cloneTodo.sort((a, b) => {
          return a.categoryId - b.categoryId
        });
        setSortTodo(cloneTodo)
        props.setCondition(false)
        props.setCondition(true)

        break;
      case 2:
        cloneTodo.sort((a, b) => {
          return b.categoryId - a.categoryId
        });
        setSortTodo(cloneTodo)
        props.setCondition(false)
        props.setCondition(true)


        break;
      case 3:

        setSortTodo(props.todo)
        props.setCondition(false);
        props.setCondition(true);
        setSortstate(0)

        break;

      default:
        break;
    }


  }, [sortstate])





  const handleClickSort = () => {
    setSortstate(sortstate + 1);
  }

  return (
    <div className="todo-component">
      <h2>TodoList Component</h2>
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
        {props.category.map(cate => <option value={cate.id}>{cate.subject}</option>)}
      </select>
      {/* state and life cycle for rerender
    other handling events for select category id */}
      <br /><br />

      <button onClick={handleAddTodo}>Add Todo</button>

      <p>Current Todos: {props.todo.length}</p>

      <button onClick={handleClickSort}>SORT</button>

      {
        sortTodo.map((e) => {
          return <TodoCard
            data={e}
            getCategoryByID={getCategoryByID}
            category={props.category}
            setCondition={props.setCondition}
            //
            setTodo={props.setTodo}
            todo={props.todo}
            //
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          ></TodoCard>
        })
      }


    </div>
  );
}

export default TodoList
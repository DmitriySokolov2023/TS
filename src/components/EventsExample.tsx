import React, {FC, ReactEventHandler, useRef, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import dragLeave = Simulate.dragLeave;


const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef=useRef<HTMLInputElement>(null)
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log(value)
    }

    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e:React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragOverHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const dragLeaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder={'Управляемый'}/>
            <input ref={inputRef} onChange={changeHandler} type="text" placeholder={'Не управляемый'}/>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width:'200px', height:'200px', background:'teal'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{width:'200px', height:'200px', background:isDrag ? 'red' : 'teal',marginTop:15}}
            ></div>
        </div>
    );
};
export default EventsExample;
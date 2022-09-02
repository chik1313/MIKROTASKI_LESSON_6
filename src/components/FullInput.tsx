import React, {ChangeEvent, useState} from "react";

export type ButtonType = {
    onClickButton:(title:string)=> void
}

export const FullInput = (props:ButtonType) => {
    let [title,setTitle]=useState('')



  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
  }
   const onClickHandler = () => {
        props.onClickButton(title)
       setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

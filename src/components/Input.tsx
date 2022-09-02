import React, {ChangeEvent} from 'react';

type InputType = {
    setTitle: (title:string)=> void
    title:string
}

export const Input = (props:InputType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;

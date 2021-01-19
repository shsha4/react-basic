import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value를 추출
        setInputs({
            ...inputs, //기존 inputs 객체를 복사(spread)
            [name] : value //name 과 일치하는 value 를 수정
        });
    };

    const nameInput = useRef();

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    }

    return (
      <div>
          <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput} />
          <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname} />
          <button onClick={onReset}>초기화</button>
          <div>
              <b> 값 : </b>
              {name} ({nickname})
          </div>
      </div>
    );
}

export default InputSample;

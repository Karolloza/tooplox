import React, { useState, useRef }  from 'react';
import styled from 'styled-components'


const InputValue = styled.input`
  display: inline-block;
  box-sizing: content-box;
  padding: 6px 24px;
  font-size:15px;
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  text-overflow: clip;
  background: rgba(252,252,252,1);
  box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
`;

const SubmitBtn = styled.button`
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#89c403', endColorstr='#77a809',GradientType=0);
	background-color:#89c403;
	border-radius:6px;
	border:1px solid #74b807;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
	margin-left:10px;
	
	&:hover {
	background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#77a809', endColorstr='#89c403',GradientType=0);
	background-color:#77a809;
	}
`;



const Input = () => {
    const inputBtnRef = useRef()
    const [inputValue, setinputValue] = useState('Karolloza')

    function handleSubmit() {
        setinputValue(inputBtnRef.current.value)
        console.log(inputValue)
    }

    return (
        <div>
            <InputValue ref={inputBtnRef}/>
            <SubmitBtn onClick={() => handleSubmit()}>Submit</SubmitBtn>
        </div>
    )
}

export default Input
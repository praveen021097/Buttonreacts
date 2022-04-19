import styled from "styled-components";

const Button= styled.button`
margin-left: 10px ;
padding: 5px 5px;
margin-top: 20px;
width: auto;

&:nth-child(1){
    background-color: #2591fe;
    border: none;
    padding: 10px 10px;
    font-size: 14px;
    color: white;
}

&:nth-child(2){
    background-color: white;
    border: 1px solid #d6c3c3;
    padding: 9px 10px;
    font-size: 14px;
    font-weight: 300;
  
}

&:nth-child(3){
    background-color: white;
    border: 1px dashed #d6c3c3;
    padding: 9px 10px;
    font-size: 14px;
    font-weight: 300;
}

&:nth-child(4){
    background-color: white;
    border:none;
    padding: 9px 10px;
    font-size: 14px;
    font-weight: 300;
}

&:nth-child(5){
    background-color: white;
    border: none;
    padding: 9px 10px;
    font-size: 14px;
    font-weight: 300;
    color: #2591fe;
}

`;

export { Button};
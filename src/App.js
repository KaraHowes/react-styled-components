import React from 'react'
import styled from 'styled-components'


const Header = styled.header `
width: 100%;
 height: 550px;
 background-color: #151414
`
const navigation = styled.nav `
display: flex;
justify-content: flex-end;
padding-right: 50px;
padding-top: 50px;
color: white;
` 
const anchor = styled.a `
font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  height: 35px;
  width: 110px;
  margin-right: 20px;
  color: white;
`
const Title = styled.h1 `
font-family: 'Times New Roman', Times, serif;
  font-size: 100px;
  line-height: 122.2px;
  position: absolute;
  z-index: 1;
  left: 250px;
  top: 200px;
  width: 684px;
  height: 243px;
  font-style: normal;
  font-weight: bold;
  text-shadow: 0px 1.5px 4px #FFF5D1;
  color: white;
`

const Circle = styled.div`
position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  top: -50px;
  left: 106px;
  background-color: #DD8723
`

export const App = () => {
  return (
    <Header>
        <navigation>
            <anchor>about</anchor>
            <anchor>trips</anchor>
            <anchor>pricing</anchor>
            <anchor>contact</anchor>
        </navigation>
        <Title>Get ready for adventure!</Title>
        
       <div className="circle">
           <Circle></Circle>
            
       </div>
        
    </Header>
  )
}

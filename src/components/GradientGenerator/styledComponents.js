import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: ${props =>
    `linear-gradient(to ${props.gradientValue}, ${props.firstValue}, ${props.secondValue})`};
  height: 100vh;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`
export const Heading = styled.h1`
  color: #ffffff;
  @media (max-width: 576px) {
    text-align: center;
  }
`
export const Para = styled.p`
  color: #ededed;
  font-weight: 500;
  font-size: 25px;
`

export const ColorPara = styled(Para)`
  font-size: 20px;
`

export const Unordered = styled.ul`
  padding: 0;
  display: flex;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const ParaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  @media (max-width: 576px) {
    width: 55%;
  }
`

export const InputElement = styled.input`
  height: 40px;
  width: 85px;
  outline: none;
  cursor: pointer;
`
export const Button = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  padding: 12px;
  margin: 15px;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
  border: 0 none;
  font-weight: bold;
  border-radius: 8px;
  width: 145px;
`

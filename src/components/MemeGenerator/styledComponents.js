// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  text-align: center;
`

export const InputElement = styled.div`
  color: #d7dfe9;
  border-color: #d7dfe9;
  border-radius: 10px;
  padding: 10px;
  border-style: solid;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const MainContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    padding: 10px;
    width: 100%;
  }
`

export const CustomButton = styled.button`
  @media (min-width: 768px) {
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background-color: #0b69ff;
    color: #ffffff;
    font-size: 18px;
    border-style: none;
    align-self: center;
  }
  @media (max-width: 768px) {
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    background-color: #0b69ff;
    color: #ffffff;
    font-size: 14px;
    border-style: none;
    align-self: center;
  }
`

export const LeftContainer = styled.form`
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    order: 2;
  }
  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    height: 100vh;
    flex-direction: column;
  }
`

export const RightContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    width: 45%;
    height: 50vh;
    background-image: url(${props => props.backgroundImg});
    margin: 30px;
    color: #ffffff;
    padding: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    width: 100%;
    height: 40vh;
    background-image: url(${props => props.backgroundImg});
    margin: 15px;
    color: #ffffff;
    padding: 10px;
    order: 1;
  }
`

export const SubContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 30px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    padding: 10px;
  }
`

export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
`

import styled from 'styled-components'
export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: 400px;
  border: solid 1px #f2f3f4;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.015),
    0 6px 20px 0 rgba(0, 0, 0, 0.015);

  h2 {
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  span {
  }
`
export const Header = styled.header`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 32px;
  background-color: lightgray;
  border-radius: 8px 8px 0px 0px;
`

export const ChatBoxUL = styled.ul`
  display: flex;
  gap: 24px;
  padding: 24px;
  li {
    display: inline;
    font-size: 18px;
    padding: 14px;
    background-color: #f5f6f6;
    border-radius: 8px 8px 8px 0;
    font-size: 16px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  border-top: 1px solid #f2f3f4;

  input {
    width: 100%;
    height: 40px;
    border: none; /* Remove a borda */
    outline: none; /* Remove o contorno em foco */
    &::placeholder {
      color: #b0b5b9;
    }
  }
`

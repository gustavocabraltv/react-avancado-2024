import { useState } from 'react'
import * as S from './styles'

const ChatBot = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFocused, setIsFocused] = useState(false) // Moved useState hook inside ChatBot component
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <h2>Chatbot</h2>
        <span>X</span>
      </S.Header>
      <S.ChatBoxUL>
        <span>Icon</span>
        <li>
          <p>
            Hi there 👋 How can I help you today?
            <br />
            How can I help you today?
          </p>
        </li>
      </S.ChatBoxUL>
      <S.InputContainer>
        <input
          placeholder="Escreva uma mensagem..."
          id="customInput"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus // Para que o input esteja selecionado inicialmente
        ></input>
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default ChatBot

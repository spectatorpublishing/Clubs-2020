import styled from 'styled-components'

export const QuestionContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 801px) {
    flex-direction: column;
  }
`;
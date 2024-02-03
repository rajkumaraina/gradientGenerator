import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 4px;
  list-style-type: none;
  text-align: center;
`

export const ButtonElement = styled.button`
  background-color: transparent;
  border: 0 none;
  font-weight: bold;
  background-color: #ffffff;
  width: 105px;
  border-radius: 8px;
  padding: 8px;
  color: #000000;
  opacity: ${props => (props.active ? '1' : '0.5')};
  @media (max-width: 576px) {
    width: 150px;
  }
`

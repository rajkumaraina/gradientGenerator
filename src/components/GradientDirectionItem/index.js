import {ListItem, ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, directionChange, active} = props
  const {directionId, displayText} = item
  const changeElement = () => {
    directionChange(directionId)
  }
  return (
    <ListItem onClick={changeElement}>
      <ButtonElement type="button" active={active}>
        {displayText}
      </ButtonElement>
    </ListItem>
  )
}
export default GradientDirectionItem

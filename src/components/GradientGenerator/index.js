import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  Para,
  Button,
  Unordered,
  ColorPara,
  FormElement,
  ParaContainer,
  InputElement,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    firstValue: '#8ae323',
    secondValue: '#014f7b',
    first: '#8ae323',
    second: '#014f7b',
    direction: gradientDirectionsList[0].directionId,
  }

  generateButtonClicked = event => {
    event.preventDefault()
    const {firstValue, secondValue, activeDirectionId} = this.state
    this.setState({
      first: firstValue,
      second: secondValue,
      direction: activeDirectionId,
    })
  }

  directionChange = id => {
    this.setState({activeDirectionId: id})
  }

  firstColorChange = event => {
    this.setState({firstValue: event.target.value})
  }

  secondColorChange = event => {
    this.setState({secondValue: event.target.value})
  }

  render() {
    const {
      activeDirectionId,
      firstValue,
      secondValue,
      first,
      second,
      direction,
    } = this.state
    const item = gradientDirectionsList.find(
      each => each.directionId === direction,
    )
    const gradientValue = item.value
    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
        firstValue={first}
        secondValue={second}
      >
        <FormElement onSubmit={this.generateButtonClicked}>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <Unordered>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                item={each}
                directionChange={this.directionChange}
                active={activeDirectionId === each.directionId}
              />
            ))}
          </Unordered>
          <Para>Pick the Colors</Para>
          <ParaContainer>
            <ColorPara>{firstValue}</ColorPara>
            <ColorPara>{secondValue}</ColorPara>
          </ParaContainer>
          <ParaContainer>
            <InputElement
              type="color"
              value={firstValue}
              onChange={this.firstColorChange}
            />
            <InputElement
              type="color"
              value={secondValue}
              onChange={this.secondColorChange}
            />
          </ParaContainer>
          <Button type="submit">Generate</Button>
        </FormElement>
      </MainContainer>
    )
  }
}
export default GradientGenerator

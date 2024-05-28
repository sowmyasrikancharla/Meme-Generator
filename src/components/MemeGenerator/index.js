import {Component} from 'react'
import {
  MainContainer,
  Heading,
  InputElement,
  CustomButton,
  LeftContainer,
  RightContainer,
  SubContainer,
  Text,
} from './styledComponents'
import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    generate: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitGenerate = event => {
    const {generate} = this.state
    event.preventDefault()
    this.setState(prevState => ({
      generate: !prevState.generate,
    }))
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, generate} = this.state
    console.log(fontSize)
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <SubContainer>
          <LeftContainer onSubmit={this.onSubmitGenerate}>
            <label htmlFor="imageUrl">Image URL</label>
            <InputElement>
              <input
                type="text"
                className="inp"
                id="imageUrl"
                placeholder="Enter the Image URL"
                onChange={this.onChangeImageUrl}
              />
            </InputElement>
            <label htmlFor="topText">Top Text</label>
            <InputElement>
              <input
                type="text"
                className="inp"
                id="topText"
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopText}
              />
            </InputElement>
            <label htmlFor="bottomText">Bottom Text</label>
            <InputElement>
              <input
                type="text"
                className="inp"
                id="bottomText"
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomText}
              />
            </InputElement>
            <label htmlFor="fontSize">Font Size</label>
            <InputElement>
              <select
                id="fontSize"
                className="select"
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(eachSize => (
                  <option value={eachSize.displayText} key={eachSize.optionId}>
                    {eachSize.displayText}
                  </option>
                ))}
              </select>
            </InputElement>
            <CustomButton type="submit">Generate</CustomButton>
          </LeftContainer>
          {generate ? (
            <RightContainer backgroundImg={imageUrl} data-testid="meme">
              <Text fontSize={fontSize}>{topText}</Text>
              <Text fontSize={fontSize}>{bottomText}</Text>
            </RightContainer>
          ) : null}
        </SubContainer>
      </MainContainer>
    )
  }
}
export default MemeGenerator

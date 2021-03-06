import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: null
  }

  boxToShow = () => {
    if (this.state.selected === 'profile') {
      return <Profile />
    } else if (this.state.selected === 'photo') {
      return <Photos />
    } else if (this.state.selected === 'cocktail') {
      return <Cocktails />
    } else if (this.state.selected === 'pokemon') {
      return <Pokemon />
    } else {
      return null
    }
  }

  setBoxState = (id) => {
    this.setState({
      selected: id
    })
  }



  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected.
    Which component should have state? Which component should have methods to control state?
    Where should these methods be called?

    */


    const detailsToDisplay = this.boxToShow()

    return (
      <div>
        <MenuBar selectedItem={this.state.selected} setBoxState={this.setBoxState}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox

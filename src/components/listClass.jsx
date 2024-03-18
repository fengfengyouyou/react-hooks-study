import { Component } from "react"

export default class ListCom extends Component {
  constructor(props) {
    // super(props)
    this.state = {
      name: 'llili'
    }
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
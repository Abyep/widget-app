import React from "react"
import { render } from "react-dom"
import api from "./Api"
import "./index.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: "",
      phone_number: "",
    }
  }

  componentDidMount() {
    //this api call should generally be used with a middleware like saga but since its a small widget we are not using middleware
    api.getData().then((res) =>
      Object.keys(res).map((key) => {
        this.setState({
          labels: res[key].labels,
          phone_number: res[key].phone_number,
        })
      })
    )
  }

  render() {
    return (
      <div>
        <button className="button">
          <div>{this.state.labels}</div>
          <div className="number">
            <strong>{this.state.phone_number}</strong>
          </div>
        </button>
      </div>
    )
  }
}

render(<App />, document.getElementById("app"))

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';


class NeoApp extends Component {
    render() {
        const title = "Neo App";
        const subtitle = "An app to track the Neo in the sky!"

        return (
          <div className="App">
            <Header title={title} subtitle={subtitle} />
            <Content />
          </div>
        );
      }
  }


class Header extends Component {
    render() {
        return (
        <div className="App">
            <h2>{this.props.title}</h2>
            <h3>{this.props.subtitle}</h3>
        </div>
    )
    }
}


ReactDOM.render(<NeoApp />,document.getElementById('root')
  );

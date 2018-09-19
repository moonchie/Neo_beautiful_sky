import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './index.css';


// style for material design
const styles = {
    title: {
      cursor: 'pointer',
    },
  };

class NeoApp extends Component {
    render() {
        const title = "Neo App";

        return (
          <MuiThemeProvider>
            <Header title={title} />
            <Content />
        </MuiThemeProvider>
        );
      }
  }


class Header extends Component {
    render() {
        return (
        <div className="App">
            {/* <h1 className="display-3">{this.props.title}</h1> */}
            <AppBar title={<span style={styles.title}>{this.props.title}</span>} showMenuIconButton= {false}>
            </AppBar>

        </div>
    )
    }
}


ReactDOM.render(<NeoApp />,document.getElementById('root')
  );

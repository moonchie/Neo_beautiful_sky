import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import Button from '@material-ui/core/Button';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


// style for material design
const styles = {
    title: {
      cursor: 'pointer',
    },
  };

class NeoApp extends Component {
    render() {
        const title = "Neo App";
        const subtitle = "An app to track the Neo in the sky!"

        return (
          <MuiThemeProvider>
            <Header title={title} subtitle={subtitle} />
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
            <h3 className="lead">{this.props.subtitle}</h3>
            </AppBar>

        </div>
    )
    }
}


ReactDOM.render(<NeoApp />,document.getElementById('root')
  );

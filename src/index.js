import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './index.css';



class NeoApp extends Component {
    render() {
        const title = "Neo App";
        return (
            <MuiThemeProvider>
                <div>
                    <Header title={title} />
                    <Content />
                </div>
            </MuiThemeProvider>
        );
      }
  }


class Header extends Component {
    render() {
        return (
        <div>
            <AppBar showMenuIconButton= {false} color= 'primary' title={<span>{this.props.title}</span>}>
            </AppBar>
        </div>
        );
    }
}


ReactDOM.render(<NeoApp />,document.getElementById('root')
  );

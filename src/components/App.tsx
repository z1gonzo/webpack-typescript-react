import * as React from 'react';

import PageInterface from '../PageInterface';
import SocialTab from './SocialTab'

class App extends React.Component<PageInterface, {}> {


  render() {
    return (
    <div
      style={{
        height: `100vh`,
        width: `100vw`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`
      }}
    >
      <h1>Welcome to React with Typescript</h1>
      <p>The color of this page is: {this.props.color ? this.props.color : "There is no data for this "}</p>
      <SocialTab />
    </div>
    );
  }
}

export default App;
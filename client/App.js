import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Banner from './Banner';
const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div className="App">
      <Header>
        <div className="flex nav-responsive">
          <div id="logo">
            <div>
              <img src="./images/vocodeLogo.png" />
            </div>
            <div className="logo-text">
              <h1>Vocode</h1>
            </div>
          </div>
          <div id="menu">
            <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
              <Menu.Item key="1" className="menu-item-responsive">
                <a href="https://github.com/daft-thunk/electricVocode#vocode">
                  <Icon type="profile" />Docs
                </a>
              </Menu.Item>
              <Menu.Item key="2" className="menu-item-responsive">
                <a href="https://mega.nz/#!CmBXHILR!WJvKwb1YKp7dM59NdyqmnI3MMx7RvXRIZ_-cyG-OPoo">
                  <Icon type="download" />Download
                </a>
              </Menu.Item>
              <Menu.Item key="3" className="menu-item-responsive">
                <a href="https://github.com/daft-thunk/electricVocode">
                  <Icon type="github" />GitHub
                </a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>
      <Banner />
      <div id="intro">
        <p>
          Vocode is a desktop application that allows users to perform a number
          of useful commands with their voice. The app can populate a user's
          clipboard with a snippet (a text template) which can be pasted into
          any text editor. Users can add other user snippets, create new
          snippets, and manage all this information in one central place. The
          app also provides a user the ability to display websites in the app
          with a voice command.
        </p>
        <hr width="55%" />
      </div>
      <div className="flex-around blurb-responsive">
        <div className="blurb">
          <h1>Use it Anywhere!</h1>
          <p>
            Vocode was built as a hybrid application using Electron. This allows
            you to use call on vocode anywhere you like. On your desktop in
            editors like VS Code or Atom and in the browser in websites like
            Codepen or Repl, Vocode is always ready to help.
          </p>
        </div>
        <div className="content-img">
          <img src="./images/inEditor.jpeg" />
        </div>
      </div>
      <hr width="55%" />
      <div className="flex-around blurb-responsive">
        <div className="content-img">
          <img src="./images/time.jpeg" />
        </div>
        <div className="blurb">
          <h1>Increase Productivity</h1>
          <p>
            {' '}
            Developers spend a ton of time copying the same code over and over
            again. Boilerplate code that is already available seeks to solve
            this problem, but often ends up giving entire folders of files you
            don't need and can be confusing to navigate. Vocode solves this
            problem by allowing users to create their own snippets and having
            templates available in pieces instead of entire projects.{' '}
          </p>
        </div>
      </div>
      <hr width="55%" />
      <div className="flex-around blurb-responsive">
        <div className="blurb">
          <h1>Collaborative</h1>
          <p>
            Vocode comes out of the box with useful templates that we use on a
            daily basis. Something else you need? No problem, users can add
            templates and find snippets they never knew they needed on the
            discover page. Whenever anyone in the community adds a new command
            other developers can check it out and see if it might be useful to
            them.
          </p>
        </div>
        <div className="content-img">
          <img src="./images/fistBump.jpeg" />
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>
        Daft Thunk Inc
        <a href="https://github.com/daft-thunk">
          <Icon type="github" />
        </a>
        <a href="https://www.facebook.com/daft.thunk.9">
          <Icon type="facebook" />
        </a>
        <a href="https://twitter.com/daft_thunk">
          <Icon type="twitter" />
        </a>
      </Footer>
    </div>
  );
}

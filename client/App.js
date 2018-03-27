import React from 'react';
import { Layout, Menu, Carousel, Icon } from 'antd';
const { Header, Content, Footer } = Layout;


export default function App(){
    return (
      <div className="App">
        <Layout className="layout" style={{height: '100vh'}}>
        <Header>
          <div className="flex">
            <div id="logo"> <div><img src="./vocodeLogo.png" /></div><div className="logo-text"><h1>Vocode</h1></div> </div>
              <div id="menu">
                <Menu
                  mode="horizontal"
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1"><a href="https://github.com/daft-thunk/electricVocode#vocode"><Icon type="profile" />Docs</a></Menu.Item>
                  <Menu.Item key="2"><a href="https://mega.nz/#!GzJRRJAD!ZOV2Uaxb7wk3Bws3M1WEmiE5nzEPuk2LHMrcI70dmbk"><Icon type="download" />Download</a></Menu.Item>
                  <Menu.Item key="3"><a href="https://github.com/daft-thunk/electricVocode"><Icon type="github" />GitHub</a></Menu.Item>
                </Menu>
              </div>
          </div>
        </Header>
        <Content>
            <Carousel autoplay>
              <div style={{height: '400px'}}><img src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d39fe8df8ff9407562e2f89aec3c1318&auto=format&fit=crop&w=2550&q=80" /> </div>
              <div style={{height: '400px'}}><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=2550&q=80" /> </div>
              <div style={{height: '400px'}}><img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96b6eb1c3bac5a2a548d7f90020bef2f&auto=format&fit=crop&w=2550&q=80" /> </div>
            </Carousel>
          <div className="second-frame flex-around">
            <div>
              <h1>Look mom no hands!</h1>
              <p>Simply tell Vocode what code snippet you would like generated and BAM, it's available in you clipboard. Vocode is operates in the background and can be used in a variety of applications such as Visual Studio Code and Repl.it. </p>
            </div>
            <div>
              <h1>Take care of yourself.</h1>
              <p>39% of surveyed programmers say injuries caused by repetitive typing have ruined their lives. Professionals who use Vocode are 57% less likely to incur injuries related to excessive typing. Vocode allows you to not only increase your productivity but also to increase you quality of life. </p>
            </div>
            <div>
              <h1>Add your own!</h1>
              <p>Vocode comes out of the box with useful macros with React and Node developers in mind. Not in that group? No problem! Vocode give you the ability to create your own dictionary of snippets. Simply add the command and Vocode will listen and execute your new snippet. </p>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Daft Thunk Inc <a href="https://github.com/daft-thunk"><Icon type="github" /></a> <a href="https://www.facebook.com/daft.thunk.9"><Icon type="facebook" /></a> <a href="https://twitter.com/daft_thunk"><Icon type="twitter" /></a>
        </Footer>
      </Layout>
      </div>
    );
  }


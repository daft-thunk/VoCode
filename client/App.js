import React from 'react';
import { Layout, Menu, Carousel } from 'antd';
const { Header, Content, Footer } = Layout;


export default function App(){
    return (
      <div className="App">
        <Layout className="layout" style={{height: '100vh'}}>
        <Header>
          <div className="flex">
            <div id="logo"> <div><img src="http://icons.iconarchive.com/icons/danieledesantis/playstation-flat/48/playstation-triangle-dark-icon.png" /></div><div className="logo-text"><h1>Vocode</h1></div> </div>
              <div id="menu">
                <Menu
                  mode="horizontal"
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">Docs</Menu.Item>
                  <Menu.Item key="2"><a href="https://mega.nz/#F!u3gCRYAB!0R1mjrgczahCDICaq2I8Pw">Download</a></Menu.Item>
                  <Menu.Item key="3"><a href="https://github.com/daft-thunk/electricVocode">GitHub</a></Menu.Item>
                </Menu>
              </div>
          </div>
        </Header>
        <Content>
            <Carousel autoplay>
              <div style={{height: '400px', background: 'url(https://www.sheffield.ac.uk/polopoly_fs/1.761228!/image/digital-coding-785.jpg)'}} />
              <div style={{height: '400px', background: 'url(https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce688dc72023ad0264348abbc506bf40&auto=format&fit=crop&w=1648&q=80)'}} />
              <div style={{height: '400px', background: 'url(https://images.unsplash.com/photo-1489438497675-d1a8d6e0632e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c788b591f6863b3c79475b5712739a9&auto=format&fit=crop&w=1573&q=80)'}} />
            </Carousel>
          <div className="second-frame flex-around">
            <div>
              <h1>Playing with balls of wool</h1>
              <p>I'm going to lap some water out of my master's cup meow meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat then cats take over the world
              Kitty poochy kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff yet eat from dog's food yet be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day pelt around the house and up and down stairs chasing phantoms. </p>
            </div>
            <div>
              <h1>Playing with balls of wool</h1>
              <p>I'm going to lap some water out of my master's cup meow meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat then cats take over the world
              Kitty poochy kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff yet eat from dog's food yet be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day pelt around the house and up and down stairs chasing phantoms. </p>
            </div>
            <div>
              <h1>Playing with balls of wool</h1>
              <p>I'm going to lap some water out of my master's cup meow meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat then cats take over the world
              Kitty poochy kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff yet eat from dog's food yet be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day pelt around the house and up and down stairs chasing phantoms. </p>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Daft thunk boiz
        </Footer>
      </Layout>
      </div>
    );
  }


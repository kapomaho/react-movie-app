import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
    Container, Divider, Grid, Header, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'
import { menuStyle, fixedMenuStyle } from './helpers/styleHelper';

import MoviesPage from './components/pages/MoviesPage';

import { Link, Route } from 'react-router-dom';

class App extends Component {

    state = {
        menuFixed: null,
        overlayFixed: false,
    };


    stickTopMenu = () => this.setState({ menuFixed: true })


    unStickTopMenu = () => this.setState({ menuFixed: null })

    render() {
        const { menuFixed } = this.state

        return (
            <div className="App">
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                            </Menu.Item>
                            <Menu.Item header>Movieapp</Menu.Item>
                            <Menu.Item as={Link} to="/movies">
                                Movies
                            </Menu.Item>
                            <Menu.Item as='a'>Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>

                <Container text>

                    <Route path='/movies' component={MoviesPage}></Route>
                    <hr/>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis cupiditate
                        debitis deleniti eligendi excepturi itaque iure officia pariatur quis repellat reprehenderit
                        similique sint, suscipit temporibus ullam velit voluptas. Perspiciatis.
                    </div>
                    <div>Consequuntur cumque dolores ea, eaque, eos in itaque, labore laborum molestias natus placeat
                        velit veritatis vitae. Beatae dignissimos illum, impedit nihil pariatur quasi sit totam unde.
                        Explicabo, soluta veritatis? Illum?
                    </div>
                    <div>Amet at cum dolore dolores eligendi eveniet laborum praesentium tempora voluptates. A ad
                        architecto consectetur deleniti enim eveniet, expedita hic ipsam obcaecati optio pariatur
                        possimus, provident quis rem soluta. Debitis.
                    </div>
                    <div>Atque aut autem cumque delectus eos ex nam necessitatibus quibusdam repellendus unde? Accusamus
                        autem consectetur culpa, ducimus error eum excepturi ipsa libero necessitatibus, nihil quidem
                        reprehenderit saepe ut veritatis voluptatem?
                    </div>
                    <div>Dolores excepturi, fugiat illo in maxime neque ut. Ab ad aliquam cupiditate deserunt dolor eum
                        excepturi, fuga illum inventore iure nisi obcaecati quae quaerat repellat repellendus rerum
                        suscipit velit voluptatem!
                    </div>
                    <div>Aliquid architecto blanditiis est laudantium quis quos saepe sit veniam! Accusantium amet at
                        autem beatae dolore fuga illo labore laborum libero nam necessitatibus perferendis quam, quasi
                        recusandae suscipit. At, id.
                    </div>
                    <div>Accusantium aperiam beatae cupiditate dolor ea earum error est ex excepturi expedita facilis
                        fugit harum, in, ipsum magnam neque perspiciatis ratione recusandae reprehenderit repudiandae
                        sit temporibus tenetur vel vero voluptatum.
                    </div>
                    <div>Corporis dolores error facere hic, iure laboriosam laborum molestias pariatur quaerat
                        reiciendis. Asperiores blanditiis cumque deleniti dolore error id ipsa modi nihil, nisi, odit
                        praesentium quasi quibusdam quos unde, veritatis?
                    </div>
                    <div>Accusantium, ad amet asperiores beatae culpa delectus, deleniti dolorem doloribus ea earum
                        eligendi excepturi in incidunt ipsam iure magnam maxime molestiae nam nesciunt omnis rerum sint
                        ut vel voluptate voluptatem.
                    </div>
                    <div>Dolorum excepturi ipsa minima reprehenderit sequi vel veniam? At blanditiis culpa deleniti
                        dolorum ea esse est, exercitationem fuga fugiat impedit, iure magnam omnis perferendis
                        reprehenderit suscipit? Minima non soluta veritatis.
                    </div>



                </Container>

                <Segment
                    inverted
                    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
                    vertical
                >
                    <Container textAlign='center'>
                        <Grid columns={4} divided stackable inverted>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 1' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 2' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 3' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Footer Header' />
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider inverted section />
                        <Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
                        <List horizontal inverted divided link>
                            <List.Item as='a' href='#'>Site Map</List.Item>
                            <List.Item as='a' href='#'>Contact Us</List.Item>
                            <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                            <List.Item as='a' href='#'>Privacy Policy</List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default App;
import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Terra from '../images/terra.png'
import Romance from '../images/romance.gif'
import CNN from '../images/CNN.png'
import Beatpal from '../images/beatpal.png'
import Sanitation from '../images/sanitation.png'
import Resolution from '../images/resolution.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Max Van Buskirk" className="avatar" />
            <t.H1 primary align="center">
              Max Van Buskirk
            </t.H1>
            <t.LargeP align="center" max45>
            Fullstack Engineer and Musician
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Contact Me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Who am I?
            </t.H2>
            <t.P align="center" max70 className="who-desc">
            A recent graduate of Fullstack Academy, and armed with a liberal arts degree in Music Composition, I am a dedicated philomath
            who loves to find novel solutions to important problems. I think both programming and music are my tools to create and contribute to society something new and exciting.
            </t.P>
            <t.H2 primary align="center" bold className="portfolio">
              Notable Projects
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Romance} alt="Romancing.ai" style={{objectFit:'stretch'}}/>
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Romancing.AI</t.H2>
                <t.P>Heart Rate Monitor and Video Carousel</t.P>
                  <t.P bold>(React, Flask, Python, Socket.io)</t.P>
                <t.P>Romancing.AI is one flank of Breathing.AI that aims to look into human stress
                  levels when shown visual motion stimuli. The PWA reads your heart rate from a webcam feed
                  while showing a carousel of videos, all with personalized results at the end.
                </t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://www.romancing.ai">
                  See here!
                </LinkButton>
                <br/>
                <br/>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
            <DivWrapper>
                <t.H2 bold>Genre-rator</t.H2>
                <t.P>Deep learning Convolutional Neural Net</t.P>
                  <t.P bold>(Python, NumPy, Tensorflow, Keras)</t.P>
                <t.P>Genre-rator uses the latest methods in audio anaylsis and machine learning techniques to
                  classify audio samples into 1 of 10 genres. It was pre-trained on 20000 samples of audio, and was
                  inspired by my wishes to more objectively categorize my own music. Current model operates with ~89% success rate against training test set.
                </t.P>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={CNN} alt="Neural Net" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Terra} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Terra 2042</t.H2>
                <t.P>In-Browser Multiplayer Tabletop Card Game</t.P>
                  <t.P bold>(React, Node, MongoDB, Socket.io, Express)</t.P>
                <t.P>Set in post apocalyptic future, this game is based loosely on Blizzard's Hearthstone, but runs completely in the browser, with fullstack javascript. Play with a friend, earn gold, and buy new cards!</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="http://terra-2042.herokuapp.com/">
                  Play
                </LinkButton>
                <br/>
                <br/>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://github.com/MADE-Game/TERRA2042/blob/master/README.md">
                  Github
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Beat Pal</t.H2>
                <t.P>Small Beat Pad Web App</t.P>
                <t.P>Developed over a weekend for Fullstack Academy's Stack-a-thon, Beat Pal was a project that connected my two passions, engineering and music. I utilized the Tone.js API to create robust functionality and created the UI myself in a deep dive of flexbox and CSS/HTML.</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="http://beatpal.herokuapp.com/">
                  Try it out
                </LinkButton>
                <br/>
                <br/>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://github.com/cmax1018/beatpal">
                  Github
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Beatpal} alt="Beatpal" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Sanitation} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Department of Sanitation</t.H2>
                <t.P>Mock Waste Analytics Dashboard Website</t.P>
                <t.P bold>(React, Express, PostgreSQL, OAuth, Node, Chart.js)</t.P>
                <t.P>Fullstack application that authenticates user sign ups and provides real
                  time data analtyics in the form of charts, tables and graphs to display
                  trash pickups, waste bin count, and includes a settings panel for preference selection.</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://sanitationdepartment.herokuapp.com">
                  Check it out!
                </LinkButton>
                <br ></br>
                <br ></br>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://github.com/cmax1018/Sanitation-dept">
                  Github
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Resolution</t.H2>
                <t.P>My latest EP</t.P>
                <t.P>Here for my music? You can find my latest work below.</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://distrokid.com/hyperfollow/maxvanbuskirk/resolution">
                  Resolution - EP
                </LinkButton>
                <br />
                <br />
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="http://youtube.com/user/TheMaxMontage">
                  Youtube
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Resolution} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Want to work together?</t.H1>
            <t.LargeP>
              Get in touch!
            </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

class AboutMe extends React.Component {
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
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
          <Content>
              <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Max Van Buskirk" className="avatar" />
            </Content>
            <t.H1 green align="center">
              Max Van Buskirk - Fullstack Engineer
            </t.H1>
            <t.LargeP align="center" max70>
              Hello! I'm Max, a software engineer with a penchant for music composition, AI, and game development. I am now engaged in a plethora of freelance work, ranging from a family-owned business looking to create work-hour tracking, to non-profits trying to establish a web presence. <br />If you'd like to work with me, please reach out!
             <br /><br />
            After making some strong industry connections as a 3rd-party technical recruiter in NYC, I realized my passion for creation and architecture pointed me away from recruiting and towards programming. I had taken some CS courses in the past, and was hoping to whet my skills in web development as well. I graduated in April '20 from Fullstack Academy's Web Development curriculum armed with in-depth knowledge of javascript, React, Node, and just solid engineering practices across the board.
            </t.LargeP>
          </AboveFold>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "profile.jpg" }) {
      ...fluidImage
    }
  }
`;

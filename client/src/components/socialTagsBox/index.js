import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Box = styled.div`
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.white};
  width: 30rem;
  padding: 0.4rem 1rem 1rem 1rem;
`;

const SocialLinkStyledElement = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 5px;
`;

const StyledLink = styled.a`
  a:link {
    color: ${(props) => props.theme.colors.checkboxGray};
    font-weight: 600;
    text-decoration: none;
  }
  margin-left: 0.7rem;
`;

const Icon = styled.i`
  color: ${(props) => props.theme.colors.turquoise};
`;

function SocialLinkElement({ socialIcon, socialLink, isEmail }) {
  if ({ isEmail })
    return (
      <SocialLinkStyledElement>
        <Icon>
          <FontAwesomeIcon icon={socialIcon}></FontAwesomeIcon>
        </Icon>
        <StyledLink>
          <EmailLink email={socialLink}></EmailLink>
        </StyledLink>
      </SocialLinkStyledElement>
    );
  else
    return (
      <SocialLinkStyledElement>
        <FontAwesomeIcon icon={socialIcon}></FontAwesomeIcon>
        <StyledLink>
          <Link socialLink={socialLink}></Link>
        </StyledLink>
      </SocialLinkStyledElement>
    );
}

function Link({ socialLink }) {
  return <a href={socialLink}>{socialLink}</a>;
}

function EmailLink({ email }) {
  return (
    <a href="mailto:" {...email}>
      {email}
    </a>
  );
}

export const SocialTagsBox = ({ socialLinks }) => {
  return (
    <Box>
      <h3>Get in Touch</h3>

      <SocialLinkElement
        socialIcon={faFacebook}
        socialLink={socialLinks[0]["facebook"]}
      ></SocialLinkElement>

      <SocialLinkElement
        socialIcon={faEnvelope}
        socialLink={socialLinks[1]["email"]}
      ></SocialLinkElement>

      <SocialLinkElement
        socialIcon={faLaptop}
        socialLink={socialLinks[2]["website"]}
      ></SocialLinkElement>
    </Box>
  );
};

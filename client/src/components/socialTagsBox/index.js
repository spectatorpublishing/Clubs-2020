import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLaptop,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faLaptop, faDesktop);

const Box = styled.div`
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.white};
  width: 25rem;
  padding: 0.4rem 1rem 1rem 1rem;
  margin: 1rem;
`;

const SocialLinkStyledElement = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0 0.5rem 0.6rem;
  padding: 0.2rem;
`;

const StyledLink = styled.a`
  a:link {
    color: ${(props) => props.theme.colors.checkboxGray};
    font-weight: 550;
    text-decoration: none;
  }
  margin-left: 0.7rem;
`;

const Icon = styled.i`
  color: ${(props) => props.theme.colors.turquoise};
`;

function EmailLink({ email }) {
  return (
    <a href="mailto:" {...email}>
      {email}
    </a>
  );
}

function SocialLinkElement({ linkType, link }) {
  const iconDict = {
    facebook: { type: "fab", img: "facebook-f" },
    instagram: { type: "fab", img: "instagram" },
    twitter: { type: "fab", img: "twitter" },
    email: { type: "fas", img: "envelope" },
    website: { type: "fas", img: "desktop" },
  };
  const icon = iconDict[linkType];
  if (linkType === "email") {
    return (
      <SocialLinkStyledElement>
        <Icon>
          <FontAwesomeIcon icon={[icon.type, icon.img]}></FontAwesomeIcon>
        </Icon>
        <StyledLink>
          <EmailLink email={link}></EmailLink>
        </StyledLink>
      </SocialLinkStyledElement>
    );
  } else {
    return (
      <SocialLinkStyledElement>
        <Icon>
          <FontAwesomeIcon icon={[icon.type, icon.img]}></FontAwesomeIcon>
        </Icon>
        <StyledLink>
          <a href={link}>{linkType}</a>
        </StyledLink>
      </SocialLinkStyledElement>
    );
  }
}

function AllSocialLinks({ socialLinks }) {
  return (
    <div>
      {socialLinks.map((socialLink) => (
        <div>
          <SocialLinkElement
            linkType={socialLink.key}
            link={socialLink.link}
          ></SocialLinkElement>
        </div>
      ))}
    </div>
  );
  //return links.map((key, index) => <div key={index}>{links[index]}</div>);
}

export const SocialTagsBox = ({ socialLinks }) => {
  return (
    <Box>
      <h3>Get in Touch</h3>
      <AllSocialLinks socialLinks={socialLinks} />
    </Box>
  );
};

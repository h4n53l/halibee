import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterLink, 
    FooterLinkItems, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkTitle, 
    FooterWrap, 
    SocialMedia,
    SocialMediaLogo, 
    SocialMediaWrap,
    SocialMediaIcons,
    SocialMediaIconLink, 
    WebsiteRights
} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/about'>Who We Are</FooterLink>
                                <FooterLink to='/investors'>Investors</FooterLink>
                                <FooterLink to='/testimonials'>Testimonials</FooterLink>
                                <FooterLink to='/terms'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/about'>Facebook</FooterLink>
                                <FooterLink to='/testimonials'>Instagram</FooterLink>
                                <FooterLink to='/careers'>Twitter</FooterLink>
                                <FooterLink to='/investors'>Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>Careers</FooterLinkTitle>
                                <FooterLink to='/about'>Vacancies</FooterLink>
                                <FooterLink to='/careers'>Training Blog</FooterLink>
                                <FooterLink to='/investors'>Staff Reviews</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/about'>Customer Care</FooterLink>
                                <FooterLink to='/about'>Give Feedback</FooterLink>
                                <FooterLink to='/testimonials'>Office Address</FooterLink>
                                <FooterLink to='/careers'>Contact Details</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/'>Halibee</SocialMediaLogo>
                        <WebsiteRights>
                            Halibee© {new Date().getFullYear()}&nbsp;
                            All rights reserved
                            </WebsiteRights>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialMediaIconLink>
                        </SocialMediaIcons>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialMediaIconLink>
                        </SocialMediaIcons>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialMediaIconLink>
                        </SocialMediaIcons>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube /></SocialMediaIconLink>
                        </SocialMediaIcons>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href='/' target='_blank' aria-label='LinkedIn'><FaLinkedin /></SocialMediaIconLink>
                        </SocialMediaIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

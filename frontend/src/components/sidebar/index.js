import React from 'react';
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarLinkScroll, SideBarMenu, SideBarWrapper } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} toggle={toggle} >
            <Icon  onClick={toggle}>
                <CloseIcon  />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='/categories' onClick={toggle}>Categories</SideBarLink>
                    <SideBarLink to='/dashboard' onClick={toggle}>Dashboard</SideBarLink>
                    <SideBarLink to='/register' onClick={toggle}>Register</SideBarLink>
                    <SideBarLink to='/login' onClick={toggle}>Login</SideBarLink>
                    <SideBarLinkScroll 
                    to='halibee-invitation' 
                    onClick={toggle}>
                        Become a Halibee
                        </SideBarLinkScroll>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default Sidebar;

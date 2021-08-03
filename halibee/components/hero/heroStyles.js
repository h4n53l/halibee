import styled from 'styled-components';


export const HeroSection = styled.section`
  	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 70vh;
	padding: 1em;
	box-sizing: border-box;
	color: white;
	background: url(https://images.unsplash.com/photo-1500417148159-68083bd7333a) center center no-repeat;
	background-size: cover;
`;

export const HeroTitle = styled.h1`
	max-width: 16em;
	margin: 0;
	font-size: 12vh;
	font-weight: bold;
	line-height: .9;
	span {
    font-weight: bolder;
    font-size: 15vh;
  }
`;

export const HeroSubtitle = styled.h3`
	text-decoration: none;
  color: white;
  font-size: 5vh;
  font-weight: bold;
  span{
	  font-weight: normal;
	  font-style: italic;
  }
`;
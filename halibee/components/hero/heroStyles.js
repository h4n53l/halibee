import styled from 'styled-components';


export const HeroSection = styled.section`
  	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	align-items: center;
	text-align: center;
	height: calc(70vh);
	width: 100%;
	color: white;
	background: url('https://images.unsplash.com/photo-1500417148159-68083bd7333a') 100% no-repeat;
	background-size: cover;
`;

export const HeroTitle = styled.h1`
	width: 100vw;
	margin: 10px;
	font-size: 8vh;
	font-weight: bold;
	line-height: .9;
	overflow-wrap: break-word;
	span {
    font-weight: bolder;
    font-size: 11vh;
	}
`;

export const HeroSubtitle = styled.h3`
	color: white;
	font-size: 5vh;
	font-weight: bold;
	overflow-wrap: break-word;
	span{
		font-weight: normal;
		font-style: italic;
	}
`;
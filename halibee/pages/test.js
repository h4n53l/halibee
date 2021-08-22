import Card from "../components/card";
import CardWrapper from "../components/cardWrapper";
import Section from "../components/section";
import Wrapper from "../components/wrapper";

const test = () => {
  return (
 <> 
  <Section title="Test Section"
  isStatic = {true}
   text="Hi" 
   subText="Hello"
   button="Yes"
   buttonText="Yes"
   image="https://via.placeholder.com/150"
   />

   <Wrapper>
       <CardWrapper>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
           <Card name="test"/>
       </CardWrapper>
       
   </Wrapper>
   </>
)}

export default test;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: #2E8B57;
  padding: 15px 25px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 30%;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  
`;

const PickupBox = styled.div`
  background-color: #98FF98;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 550px;
  
`;

const PickupInfoBox = styled.div`
 
  padding: 15px;
  border-radius: 8px;
  color: black;
  margin-top: 15px;
`;

const PickupInfo = styled.p`
  margin: 20px 50px;
`;



const Button = styled.button`
  padding: 10px 20px;
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }

  margin-top: 15px;
`;

const UserPickups = () => {
  const user = {
    no: '01',
    type: 'Plastic',
    amount: '10kg',
    address: '123 Main St, Anytown, USA',
    status: 'Processing',
    
  };

  return (
    <Container>
      <Header>
        <Title>Your Pickups</Title>
      </Header>
      <PickupBox>
        
        <PickupInfoBox>
          <PickupInfo><strong>Request No :</strong> {user.no}</PickupInfo>
          <PickupInfo><strong>Type :</strong> {user.type}</PickupInfo>
          <PickupInfo><strong>Amount :</strong> {user.amount}</PickupInfo>
          <PickupInfo><strong>Address:</strong> {user.address}</PickupInfo>
          <PickupInfo><strong>Request Status:</strong> {user.status}</PickupInfo>
        </PickupInfoBox>
        
      </PickupBox>
      
      <Link to="/profile">
      <Button>Back</Button>
      </Link>
    </Container>
  );
};

export default UserPickups;

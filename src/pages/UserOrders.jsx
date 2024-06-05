import React from 'react';
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

const OrderBox = styled.div`
  background-color: #98FF98;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 550px;
  
`;

const OrderInfoBox = styled.div`
 
  padding: 15px;
  border-radius: 8px;
  color: black;
  margin-top: 15px;
`;

const OrderInfo = styled.p`
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

const UserOrders = () => {
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
        <Title>Your Orders</Title>
      </Header>
      <OrderBox>
        
        <OrderInfoBox>
          <OrderInfo><strong>Request No :</strong> {user.no}</OrderInfo>
          <OrderInfo><strong>Type :</strong> {user.type}</OrderInfo>
          <OrderInfo><strong>Amount :</strong> {user.amount}</OrderInfo>
          <OrderInfo><strong>Address:</strong> {user.address}</OrderInfo>
          <OrderInfo><strong>Request Status:</strong> {user.status}</OrderInfo>
        </OrderInfoBox>
        
      </OrderBox>
      
      <Button>Back</Button>
    </Container>
  );
};

export default UserOrders;

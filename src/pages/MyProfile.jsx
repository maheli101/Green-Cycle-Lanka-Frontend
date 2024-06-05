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
  width: 20%;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  
`;

const ProfileBox = styled.div`
  background-color: #98FF98;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 550px;
  
`;

const UserInfoBox = styled.div`
 
  padding: 15px;
  border-radius: 8px;
  color: black;
  margin-top: 15px;
`;

const UserInfo = styled.p`
  margin: 20px 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
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
`;

const EditButton = styled(Button)`
  margin-top: 15px;
`;

const MyProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '(123) 456-7890'
  };

  return (
    <Container>
      <Header>
        <Title>User Profile</Title>
      </Header>
      <ProfileBox>
        <p>
          Welcome to your User Profile, where you can view orders and your Pickup Requests at Convenience.
        </p>
        <UserInfoBox>
          <UserInfo><strong>Name:</strong> {user.name}</UserInfo>
          <UserInfo><strong>Email:</strong> {user.email}</UserInfo>
          <UserInfo><strong>Address:</strong> {user.address}</UserInfo>
          <UserInfo><strong>Phone Number:</strong> {user.phone}</UserInfo>
        </UserInfoBox>
        <ButtonContainer>
          <Button className='Pickup'>View Pickup Request</Button>
          <Button className='Order'>View Order Request</Button>
        </ButtonContainer>
      </ProfileBox>
      <EditButton>Edit Profile</EditButton>
    </Container>
  );
};

export default MyProfile;

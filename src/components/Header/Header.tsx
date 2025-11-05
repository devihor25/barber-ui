import React from "react";
import styled from "styled-components";
import { Bell, ChevronDown } from "lucide-react";
import scissorsIcon from "../../../public/logo.svg"; // your barber scissors logo

const HeaderContainer = styled.header`
  background-color: #0e0e0e;
  padding: 27px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1e1e1e;

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 26px;
    height: 26px;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;

const ViewAppointments = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  text-transform: lowercase;

  @media (max-width: 768px) {
    display: none; /* hide on mobile */
  }
`;

const Badge = styled.span`
  background-color: #ac8745;
  color: #111;
  font-weight: 600;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #2a2a2a;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BellWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BellIcon = styled(Bell)`
  fill: #ffffff;
  stroke: none;
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const NotificationDot = styled.span`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 7px;
  height: 7px;
  background-color: #ac8745;
  border-radius: 50%;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Chevron = styled(ChevronDown)`
  @media (max-width: 768px) {
    display: none; /* hide dropdown arrow on mobile */
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* Left Logo */}
      <LeftSection>
        <Logo>
          <img src={scissorsIcon} alt="logo" />
        </Logo>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <ViewAppointments>
          <span>view appointments</span>
          <Badge>0</Badge>
        </ViewAppointments>

        <Divider />

        <BellWrapper>
          <BellIcon />
          <NotificationDot />
        </BellWrapper>

        <Profile>
          <ProfileImage src="img-avatar.png" alt="Profile" />
          <Chevron size={16} color="#fff" strokeWidth={1.5} />
        </Profile>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;

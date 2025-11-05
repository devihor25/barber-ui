import React from "react";
import styled from "styled-components";
import {
  Link as LinkIcon,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  MoreVertical,
  AudioLines
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard/ServiceCard";
import { WorksGallery } from "../components/WorksGallery/WorksGallery";
import { ReviewCard } from "../components/ReviewCard/ReviewCard";
import { FaqCard } from "../components/FaqCard/FaqCard";
import Header from "../components/Header/Header";
import { mockWorks, mockReviews, mockFaq, mockServices } from "../mock";
// --- Styled Components ---



const MenuIcon = styled(MoreVertical)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #bbb;
  cursor: pointer;
`;




const Bio = styled.p`
  font-size: 18px;
  color: #ccc;
  line-height: 1.7;
  max-width: 680px;
`;

const StatGrid = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 24px;
  flex-wrap: wrap;

  div {
    text-align: left;

    span {
      display: block;
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }

    small {
      display: block;
      color: #888;
      font-size: 13px;
      margin-top: 4px;
      text-transform: lowercase;
    }
  }

  @media (max-width: 768px) {
    justify-content: start;
    margin-top: 5px;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const NoOverflow = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden; /* keeps sliders/grids from forcing horizontal scroll */
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const PageWrapper = styled.div`
  background-color: #0f0f0f;
  color: #fff;
  min-height: 100vh;
  overflow-x: clip;           /* avoids horizontal scroll without hiding needed content */
  display: flex;
  flex-direction: column;
  width: 100%;               
   font-family: "Enkle", sans-serif;
`;

const ProfileLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); /* allow columns to shrink */
  column-gap: 40px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  padding: 60px clamp(16px, 5vw, 80px);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 40px clamp(16px, 4vw, 40px);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 24px 16px;
    row-gap: 40px;
    min-height: auto;
  }
`;

const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 0 20px;
  min-width: 0;                         /* <-- key so text/images don’t force overflow */
  @media (max-width: 767px) {
    gap: 16px;
    padding: 0 12px;
    align-items: start;
    text-align: left;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 80px;
  width: 100%;
  margin: 0 auto;
  min-width: 0;                         /* <-- prevents wrapping/overflow issues in grid */

  h3 {
    font-size: 16px;
    font-weight: 500;
    text-transform: lowercase;
    color: #888;
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
    gap: 60px;
  }
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 16px;
  object-fit: cover;


  @media (max-width: 767px) {
    width: 300px;
    height: 383px;
  }
`;

const Name = styled.h2`
  font-size: clamp(22px, 5vw, 28px);    /* responsive size */
  font-weight: 600;
  text-transform: lowercase;
  color: #fff;
  margin-top: 8px;
  word-break: break-word;
`;

const Role = styled.p`
  color: #aaa;
  font-size: clamp(14px, 3.6vw, 16px);
  text-transform: lowercase;
  margin-top: -8px;
`;

const ShopLink = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #d4d4d4;
  font-size: 14px;
  cursor: pointer;
  flex-wrap: wrap;                       /* safe on tiny widths */
  justify-content: center;

  a {
    color: #e0e0e0;
    text-decoration: underline;
    transition: color 0.2s ease;
  }
  a:hover { color: #fff; }
`;

const Availability = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #aaa;
  font-size: 13px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  span { color: #ccc; }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  svg { color: #999; cursor: pointer; transition: color 0.2s ease; }
  svg:hover { color: #fff; }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const BookButton = styled.button`
  background-color: #264E36;
  color: #fff;
  border: none;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 12px;
  transition: background 0.2s ease;
  width: 100%;
  max-width: 100%;    
  &:hover { background-color: #317244; }

  @media (min-width: 768px) {
    width: auto;                         /* desktop keeps original size */
    max-width: none;
  }
`;
const ReadMore = styled.button`
  background-color: #E0E0E0;
  color: #121212;
  border: none;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;
const Buttons = styled.div`
display: flex;
justify-content: center;
gap: 12px;
margin-top: 20px;
@media (max-width: 1024px) {
    justify-content: start;
  }
`;
// --- MAIN COMPONENT ---
const ProfilePage: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <ProfileLayout>
        {/* LEFT SECTION */}
        <ProfileLeft>
          <ImageWrapper>
            <ProfileImage src="img-avatar.png" alt="Profile" />
            <MenuIcon size={18} />
          </ImageWrapper>

          <Name>malik johnson</Name>
          <Role>senior barber | somerville ma</Role>

          <ShopLink>
            <LinkIcon size={16} />
            <a href="#">Good Looks Barbershop</a>
          </ShopLink>

          <Availability>
            <Calendar size={16} />
            <span>next available • today at 3PM</span>
          </Availability>

          <SocialIcons>
            <AudioLines size={18} />
            <Facebook size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
          </SocialIcons>

          <BookButton>book an appointment</BookButton>
        </ProfileLeft>

        {/* RIGHT SECTION */}
        <RightSection>
          <Bio>
            I’ve been cutting hair for 7 years, and for me, it’s more than just
            a job—it’s a craft. Whether you want a fresh fade, a classic cut, or
            a beard.
          </Bio>

          <StatGrid>
            <div>
              <span>7</span>
              <small>years cutting</small>
            </div>
            <div>
              <span>en/sp</span>
              <small>languages i speak</small>
            </div>
          </StatGrid>

          <div>
            <h3>my cuts</h3>
            <WorksGallery works={mockWorks} />
          </div>

          <div>
            <h3>services & add-ons</h3>
            <ServicesContainer>
              {mockServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
                   <Buttons>
          <ReadMore>view all services</ReadMore>
          </Buttons>
            </ServicesContainer>
          </div>

          <div>
            <h3>testimonials</h3>
            <ReviewCard reviews={mockReviews} />
          </div>

          <div>
            <h3>got questions?</h3>
            <FaqCard items={mockFaq} />
          </div>
        </RightSection>
      </ProfileLayout>
    </PageWrapper>
  );
};

export default ProfilePage;

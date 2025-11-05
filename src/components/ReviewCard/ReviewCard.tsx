import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export type Review = {
  id: string;
  name: string;
  avatar: string;
  date: string;
  comment: string;
};

type Props = {
  reviews: Review[];
};

const Container = styled.div`
  position: relative;
   background-color: #0e0e0e;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  .slick-slide > div {
    margin: 0 8px;
  }

  .slick-list {
    margin: 0 -8px;
  }
`;

const Card = styled.div`
  border-radius: 16px;
  padding-top: 32px;
  color: #fff;
  position: relative;
  font-family: "Enkle", sans-serif;
  line-height: 1.6;
  min-height: 260px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #f1f1f1;
  text-transform: lowercase;
`;

const QuoteIcon = styled(Quote)`
  position: absolute;
  top: 24px;
  right: 28px;
  color: #555;
  opacity: 0.6;
`;

const Comment = styled.p`
  font-size: 15px;
  color: #ddd;
  margin-top: 8px;
`;

const Date = styled.span`
  font-size: 12px;
  color: #888;
  margin-top: 16px;
  display: block;
`;

const SliderNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
const Buttons = styled.div`
display: flex;
justify-content: space-between;
gap: 12px;
`;

const NavButton = styled.button`
  background: #1c1c1c;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
  }
`;

const ReadMore = styled.button`
  background-color: #1c1c1c;
  color: #fff;
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

export const ReviewCard: React.FC<Props> = ({ reviews }) => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <Card key={review.id}>
            <QuoteIcon size={28} />
            <Header>
              <Avatar src={review.avatar} alt={review.name} />
              <Name>{review.name}</Name>
            </Header>
            <Comment>{review.comment}</Comment>
            <Date>{review.date}</Date>
          </Card>
        ))}
      </Slider>

      <Buttons>
      <ReadMore>read more reviews</ReadMore>
      <SliderNav>
        <NavButton onClick={() => sliderRef.current?.slickPrev()}>
          <ChevronLeft size={20} />
        </NavButton>
        <NavButton onClick={() => sliderRef.current?.slickNext()}>
          <ChevronRight size={20} />
        </NavButton>
        </SliderNav>
      </Buttons>

    </Container>
  );
};

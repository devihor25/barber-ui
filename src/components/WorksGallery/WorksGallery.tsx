import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Work = {
  id: number;
  image: string;
  title?: string;
};

interface WorksGalleryProps {
  works: Work[];
}

const GalleryWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 8px;

  .slick-slider {
    width: 100%;
  }

  .slick-slide > div {
    margin: 0 8px;
  }

  .slick-dots {
    bottom: -25px;
  }

  /* Ensure proper dot spacing and color */
  .slick-dots li button:before {
    font-size: 10px;
    color: #666;
    opacity: 0.8;
  }
  .slick-dots li.slick-active button:before {
    color: #fff;
    opacity: 1;
  }

  @media (max-width: 768px) {
    .slick-slide > div {
      margin: 0 4px;
    }
    .slick-dots {
      bottom: -20px;
    }
  }
       overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const WorkCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }

    @media (max-width: 1024px) {
      height: 260px;
    }

    @media (max-width: 768px) {
      height: 240px;
    }

    @media (max-width: 480px) {
      height: 200px;
    }
  }
`;

export const WorksGallery: React.FC<WorksGalleryProps> = ({ works }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <GalleryWrapper>
      <Slider {...settings}>
        {works.map((work) => (
          <WorkCard key={work.id}>
            <img src={work.image} alt={work.title || "work image"} />
          </WorkCard>
        ))}
      </Slider>
    </GalleryWrapper>
  );
};

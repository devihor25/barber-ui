import React from "react";
import styled from "styled-components";

type Service = {
  id: string | number;
  title: string;
  description: string;
  duration: string;
  price: string;
  addons?: string; // e.g. "7 add-ons available" or "no extras included"
};

type Props = {
  service: Service;
};

const Card = styled.div`
  background: #1b1b1b;
  border-radius: 14px;
  padding: 22px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: "Enkle", sans-serif;
  transition: all 0.2s ease;
  gap: 16px;

  &:hover {
    background: #222;
  }

  & + & {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ac8745;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    text-transform: lowercase;
    margin: 0;
  }

  p {
    font-size: 13px;
    color: #aaa;
    margin: 0;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const RightSection = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: 13px;
    color: #aaa;
  }

  strong {
    font-size: 15px;
    color: #fff;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ServiceCard: React.FC<Props> = ({ service }) => (
  <Card>
    <LeftSection>
      <span>{service.addons || "no extras included"}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </LeftSection>

    <RightSection>
      <span>{service.duration}</span>/<strong>{service.price}</strong>
    </RightSection>
  </Card>
);


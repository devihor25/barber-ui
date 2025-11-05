import React, { useState } from "react";
import styled from "styled-components";
import { ArrowRight, ArrowUp } from "lucide-react";

export type FaqItem = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  items: FaqItem[];
};

const Container = styled.div`
  background-color: #0f0f0f;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Card = styled.div<{ isOpen: boolean }>`
  background-color: ${(p) => (p.isOpen ? "#1a1a1a" : "#121212")};
  border-radius: 10px;
  padding: 20px 24px;
  color: #fff;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  text-transform: lowercase;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p<{ isOpen: boolean }>`
  font-size: 14px;
  color: #aaa;
  line-height: 1.6;
  margin-top: ${(p) => (p.isOpen ? "10px" : "0")};
  max-height: ${(p) => (p.isOpen ? "200px" : "0")};
  opacity: ${(p) => (p.isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const FaqCard: React.FC<Props> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Container>
      {items.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <Card key={faq.id} isOpen={isOpen} onClick={() => toggle(faq.id)}>
            <Header>
              <Title>{faq.title}</Title>
              <Icon>
                {isOpen ? (
                  <ArrowUp size={18} color="#aaa" />
                ) : (
                  <ArrowRight size={18} color="#aaa" />
                )}
              </Icon>
            </Header>
            <Description isOpen={isOpen}>{faq.description}</Description>
          </Card>
        );
      })}
    </Container>
  );
};

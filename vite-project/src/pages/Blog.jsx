import React from "react";
import { Card, Col, Row } from "antd";
import Hero from "../components/Hero";

import { cards } from "../assets/data";

const Blog = () => {
  return (
    <>
      <Hero />
      <div className="site-card-wrapper">
        <Row gutter={24} style={{ display: "contents" }}>
          <h1 style={{ marginTop: "1.5rem" }}>POSTS</h1>
        </Row>
        <Row gutter={16}>
          <Col span={16} style={{ marginInline: "auto", flex: "unset" }}>
            {cards.map((card, index) => {
              return (
                <Card key={index} style={{ margin: "20px 0" }} hoverable>
                  <div>
                    <img
                      className="cardImage"
                      src={card.url}
                      alt={card.title}
                    />
                    <h2
                      style={{
                        fontSize: "30px",
                        marginTop: "0.5em",
                        marginBottom: "0",
                      }}
                    >
                      {card.title}
                    </h2>
                    <div style={{ fontSize: "19px" }}>{card.description}</div>
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Blog;

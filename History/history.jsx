import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Stadium from "../assets/stadium.jpg"
import AI from "../assets/ai.webp"
import cert from "../assets/collab.jpg"
import Conference from "../assets/conference.jpg"
import Security from "../assets/AI.jpg"
import Collaboration from "../assets/achieve.jpg"
import Forestry from "../assets/forestry.webp"
import Phone from "../assets/tech.avif"
import AntGroup from "../assets/company.jpg"
import "swiper/css";
import "swiper/css/navigation";
import "./history.css";
const events = [

    {
        date: "2023.03",
        image: AntGroup,
        description:
        "Ant Group has formed a Technology Ethics Advisory Committee comprising seven external experts to provide strategic, directional, and specialized guidance on advancing ethical standards in technology. This initiative reinforces our commitment to responsible innovation and the ethical development of digital solutions.",

    },

    {
        date: "2023.04",
        image: Forestry,
        description: 
        "In partnership with the Forestry and Grassland Bureau of the Inner Mongolia Autonomous Region, Ant Group has launched a strategic initiative to support environmental conservation. As part of this commitment, we have pledged an additional 100 million yuan over three years to aid the ecological restoration of Hunshandake Sandy Land through our sustainability program, Ant Forest."

    },


    {
        date: "2023.05",
        image: Collaboration,
        description: 
        "The joint research project, ''Unconstrained Portrait Object Intelligent Perception and Understanding,'' led by Researcher Xing Junliang from Tsinghua University, alongside Li Jianshu, Zhao Wenbiao, and three other experts from Ant Group, was honored with the first prize at the Wu Wenjun Artificial Intelligence Science Award. This achievement highlights our dedication to advancing AI research and innovation."

    },
    


    {
        date: "2023.06",
        image: Phone,
        description:
        "Marking its 10th anniversary, Yu’e Bao has made a significant impact on users’ financial growth. As of May 1, 2023, the platform has generated a total of 386.7 billion yuan in earnings for its users over the past decade, reinforcing its role in empowering personal wealth management."


    },


    {
        date: "2023.07",
        image: Security,
        description: 
        "At the World Artificial Intelligence Conference (WAIC), Ant Group showcased its cutting-edge artificial intelligence technology. Among the highlights was ''Yijian 2.0'', the Ant AI Security Detection Platform 2.0, which was recognized as one of the key exhibits at the event, demonstrating our commitment to advancing AI-driven security solutions."


    },


    {
        date: "2023.09",
        image: Conference,
        description: 
        "The 2023 INCLUSION·Conference on the Bund took place at Huangpu World Expo Park in Shanghai, focusing on the theme ''Technology for a Sustainable Future''.Over the course of three days, the event brought together nearly 20 distinguished members from the Chinese Academy of Sciences and the Chinese Academy of Engineering, alongside Nobel Laureates, Turing Award winners, and more than 1,000 scholars, industry experts, and leaders from top global technology companies to explore the future of sustainable innovation."


    },


    {
      date: "2023.09",
      image: Stadium,
      description:
        "Hangzhou hosted the 19th Asian Games, where Ant Group's technology contributed to five groundbreaking milestones, including the first-ever fully digital cauldron lighting ceremony, the introduction of mobile payment services for the Games, the debut of digital franchise merchandise, and the first-ever carbon-neutral Asian Games."


    },



    {
      date: "2023.09",
      image: AI,
      description:
        "After the ''Interim Measures for the Management of Generative Artificial Intelligence Services'' were jointly released by seven Chinese ministries, Ant Group's Bailing large-scale model successfully completed the record-filing process. Several products powered by the Bailing model have passed internal testing and are set to be released to the public.",
    },
    {
      date: "2023.11",
      image: cert,
      description:
        "The joint project between Ant Group, Tsinghua University, and Alipay, named ''Key Technologies and Systems for Distributed Collaborative Risk Defense in High-Volume Transactions,'' received the first prize in the Zhejiang Provincial Science and Technology Progress category."


    },
  ];
  
  const HistoryTimeline = () => {
    return (
      <div className="history-container">
        <h2 className="history-title">Our History</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={10}
          className="history-swiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className="history-slide">
              <img src={event.image} alt={event.title} className="history-image" />
              <p className="history-date">{event.date}</p>
              <div className="history-description-container">
                <p className="history-description">{event.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="history-timeline">
          {["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"].map(
            (year, index) => (
              <span key={index} className={year === "2023" ? "active-year" : "timeline-year"}>
                {year}
              </span>
            )
          )}
        </div>
      </div>
    );
  };
  
  export default HistoryTimeline;
"use client";

import FaqItem from "@/components/faq/FaqItem";
import InputField from "@/components/home/InputField";
import { useState } from "react";

const FAQ__DATA = [
        {
          question: "What is Fanse?",
          answer:
            "Fanse is a subscription social platform for adult creators to monetize their content, connect with fans, and build a thriving online community. by providing the tools and support adult creators need to showcase their work, earn revenue, and grow their brands.",
        },
        {
          question: "Fix a problem",
          answer:
            "Anyone who is an adult (18+ years old) and has original adult content to share can become a creator on Fanse. Whether you are a creator, model, performer, artist, writer, or have unique talents to showcase, Fanse welcomes creators from various backgrounds and interests!",
        },
        {
          question: "How much can I make on Fanse?",
          answer:
            "Your earning potential is unlimited on Fans, and you're in complete control of your earnings. Fanse offers a competitive revenue share model where you take home 80% of your earnings.",
        },
        {
          question: "How long does it take to become a creator?",
          answer:
            "Becoming a creator on Fanse is quick and easy! It takes less than 5 minutes to create your account and complete our instant ID verification process. Once verified, you can start monetizing your content and connecting with your fans. Get started on your Fanse journey in no time!",
        },
        {
          question: "Is my content safe and secure on Fanse?",
          answer:
            "Yes, at Fanse, we prioritize the safety and security of our creators and their content. We have implemented robust measures to protect your privacy and ensure that your content is accessible only to your paying subscribers. Our platform is designed with advanced security features to safeguard your data and provide you with peace of mind.",
        },
        {
          question: "How does Fanse support creators' success?",
          answer:
            "Fanse is dedicated to supporting the success of our creators. We provide various features and tools to help you monetize your content, grow your fanbase, and enhance your brand. From customizable profile options to promotional tools and analytics, Fanse empowers creators to take control of their journey and achieve their goals.",
        },
        {
          question: "How does Fanse handle earnings?",
          answer:
            "Fanse utilizes a secure and reliable payment system to ensure smooth transactions and prompt payouts. We offer multiple payment options for creators, and you can track your earnings and withdraw funds easily from your creator dashboard. Fanse takes a small percentage of earnings as a platform fee, enabling you to keep the majority of your revenue.",
        },
        {
          question: "How can I grow my fanbase on Fanse?",
          answer:
            "Building a loyal fanbase takes time and effort, but Fanse provides you with the tools and resources to help you grow. Engage with your fans regularly, respond to their messages and comments, and offer exclusive content and incentives to keep them coming back for more. Utilize our promotional features, such as featured posts and collaborations with other creators, to expand your reach and attract new fans to your profile.",
        },
        {
          question: "Can I offer personalized content on Fanse?",
          answer:
            "Absolutely! Fanse allows you to offer personalized experiences and custom content to your fans. Whether it's personalized messages, custom photos or videos, or even one-on-one video calls, you have the flexibility to cater to your fans' individual desires and create unique experiences for them. This helps you build a deeper connection with your fans and provide them with a truly memorable and exclusive experience.       ",
        },
        {
          question: "Are there any content restrictions on Fanse?",
          answer:
            "While Fanse is an adult content platform, there are still guidelines and community standards in place to ensure a safe and respectful environment. We do not permit explicit or illegal content, harassment, or any form of non-consensual activity. We ask that creators adhere to these guidelines and respect the boundaries of their fans. For more detailed information, please refer to our content policies.",
        },
        {
          question: "Can I set my own prices for my content?",
          answer:
            "Yes, as a creator on Fanse, you have full control over pricing your content. You can set your own prices for subscriptions, individual posts, and any additional offerings you provide. We recommend pricing your content competitively based on market standards and the value you offer to your fans. Experimenting with different pricing strategies can help you find the sweet spot that maximizes your earnings.",
        },
        {
          question: "How do I get paid on Fanse?",
          answer:
            "Fanse provides secure and timely payments to creators. Once you reach the minimum payout threshold, you can request a payout, and your earnings will be transferred to your designated payment method. We offer various payment options, including direct bank transfers and electronic payment services, to accommodate creators worldwide. Rest assured, your earnings are handled with the utmost privacy and security.",
        },
        {
          question: "How can I interact with my fans on Fanse?",
          answer:
            "Fanse provides various features and tools to engage with your fans and build a thriving community. You can interact with your fans through direct messages, comments on posts, and live streams. Additionally, you have the option to offer exclusive perks, such as personalized shoutouts, private chats, or special content, to your loyal fans. Building meaningful connections and fostering engagement with your audience is a key aspect of success on Fanse.",
        },
        {
          question: "Does Fanse offer support & resources for us?",
          answer:
            "Absolutely! We are dedicated to supporting our creators every step of the way. Fanse provides comprehensive support and resources to help you optimize your content, grow your fanbase, and maximize your earnings. We offer tutorials, guides, and best practices to assist you in creating high-quality content and marketing strategies. Our support team is also available to answer any questions or concerns you may have, ensuring a smooth and enjoyable experience on the platform.",
        },
        {
          question: "Can I collaborate with other creators on Fanse?",
          answer:
            "Absolutely! Fanse encourages collaboration and networking among creators. You can connect and collaborate with other creators on the platform to create joint content, promotions, or exclusive collaborations. Collaborations can help expand your reach, attract new fans, and provide exciting content for your existing audience. We believe in the power of community and collaboration to drive success on Fanse.",
        },
        {
          question: "How do I promote my Fanse profile & attract Fans?",
          answer:
            "Fanse provides several tools and features to help you promote your profile and attract fans. You can utilize social media platforms, such as Twitter, Instagram, or TikTok, to share teasers, previews, and exclusive content from your Fanse profile. Engage with your existing fanbase and encourage them to join you on Fanse. Additionally, take advantage of our marketing support and promotional materials, which include banners, graphics, and other resources to showcase your Fanse presence.",
        },
        
];

const Faq = () => {
  const [searched, setSearched] = useState("");
  const [activeFaq, setActiveFaq] = useState<boolean[]>(
    Array(FAQ__DATA.length).fill(false),
  );

  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-start">
      <div className="flex w-[90%] max-w-[800px] flex-col items-center justify-start gap-20">
        <div className="flex w-full max-w-[550px] flex-col items-center justify-start gap-3">
          <h3 className="text-2xl font-medium text-black">
            How can we help you?
          </h3>
          <InputField
            handler={(e) => {
              setSearched(e.target.value);
            }}
            label="Describe your issue"
            value={searched}
            ico="/search.svg"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-3">
          <p className="text-base font-medium text-black">Browse help topics</p>
          <div className="flex w-full flex-col items-start justify-start overflow-hidden rounded-xl border border-solid border-[#a9acaa]">
            {FAQ__DATA.filter((elem) => {
              if (
                elem.question.toLowerCase().includes(searched.toLowerCase()) ||
                elem.answer.toLowerCase().includes(searched.toLowerCase())
              ) {
                return elem;
              }
            }).map((elem, idx) => {
              return (
                <FaqItem
                  {...elem}
                  active={activeFaq[idx]}
                  setActive={setActiveFaq}
                  idx={idx}
                  key={elem.question + idx}
                />
              );
            })}
          </div>
        </div>
      </div>
      <a
                  href="mailto:support@fanse.io"
                  target="blank"
                  style={{ marginTop:70, maxWidth: 350 , fontSize: 17}}
                  className="flex h-[50px]  w-full items-center justify-center gap-3 rounded-full rounded-full border border-black bg-black p-1.5 px-8 text-base text-sm font-normal text-white transition-all transition-all duration-100 hover:bg-white hover:text-black text-[17px]"
                >
                  {" "}
                 Need more help ? Contact us
                </a>
    </div>
    
  );
  
};

export default Faq;

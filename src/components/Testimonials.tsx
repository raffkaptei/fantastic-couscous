"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <TestimonialCard
          image={userOneImg}
          name="Sarah Mwangi"
          title="Owner, Smart Bakers – Nairobi"
          fullText="We cut our electricity bill by 30% in just two months thanks to their energy audit and equipment recommendations. I had no idea we were wasting so much power until they showed us the numbers."
        />
        <TestimonialCard
          image={userTwoImg}
          name="Peter Odhiambo"
          title="Manager, Uptown Printing Services"
          fullText="Their team made the entire process simple and non-disruptive. We didn’t need to pause our operations at all, yet we still discovered new ways to reduce our energy usage."
        />
        <TestimonialCard
          image={userThreeImg}
          name="Linda Wanjiku"
          title="Director, EcoBeauty Supplies"
          fullText="Great ROI from the audit. We’re saving over KES 15,000 monthly on power costs — which we now reinvest into marketing. I highly recommend them to any small business."
        />
      </div>
    </Container>
  );
};

interface TestimonialCardProps {
  image: any;
  name: string;
  title: string;
  fullText: string;
}

function TestimonialCard({ image, name, title, fullText }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);

  const shortText = fullText.slice(0, 90) + (fullText.length > 90 ? "..." : "");

  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 py-10 rounded-2xl dark:bg-trueGray-800">
      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        “{expanded ? fullText : shortText}”
        {fullText.length > 90 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-sm font-semibold text-indigo-600 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <Avatar image={image} name={name} title={title} />
    </div>
  );
}

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-6 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12">
        <Image
          src={props.image}
          width="48"
          height="48"
          alt={props.name}
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-md font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">{props.title}</div>
      </div>
    </div>
  );
}

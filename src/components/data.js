import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Cut Energy Costs Without Compromising Productivity",
  desc: "We help small businesses reduce electricity bills by identifying inefficient usage patterns and recommending smarter alternatives. Our tools work seamlessly with your operations to deliver savings.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Smart Usage Insights",
      desc: "Get clear reports on which devices consume the most energy and when.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Tailored Energy Audit",
      desc: "Our experts assess your setup and propose actionable steps to save power.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "No Operational Downtime",
      desc: "Enjoy full audits and implementations without disrupting your business.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Scalable, Reliable & Easy to Use",
  desc: "Our solutions are designed for small businesses looking to grow sustainably. Whether you run a bakery, salon, or printing shop, we provide tools and tips that evolve with you.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile-Friendly Reports",
      desc: "Access energy data and savings insights from any device, anytime.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Built on Proven Tech",
      desc: "We use tested hardware and cloud-based dashboards to ensure reliability.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Light & Eco Mode Options",
      desc: "Energy dashboards adapt to dark or light themes for better accessibility.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };

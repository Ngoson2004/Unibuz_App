import { InfiniteMovingCardsProps } from "@/shared/components/ui/infinite-moving-cards";
import { Fivestars } from "@/features/landing/components/FiveStars";
import profile1 from "@/shared/assets/media/testimonials/Adam.png";
import profile2 from "@/shared/assets/media/testimonials/Clara.png";
import profile3 from "@/shared/assets/media/testimonials/Jane.png";
import profile4 from "@/shared/assets/media/testimonials/Kevin.png";
import profile5 from "@/shared/assets/media/testimonials/Kylie.png";
import profile6 from "@/shared/assets/media/testimonials/Paul.png";
import profile7 from "@/shared/assets/media/testimonials/Sara.png";
import profile8 from "@/shared/assets/media/testimonials/Sophia.png";

export const testimonials: InfiniteMovingCardsProps["items"] = [
  {
    quote:
      "I met my best friends and my current partner from an event on UniBuz! Have been using it ever since and recommending it to anyone I know.",
    name: "Adam Hubermann",
    title: "Undergrad Student | University of Melbourne",
    image: profile1,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote:
      "I found my dream job through a connection I made on UniBuz! I can't thank the team enough for creating this platform.",
    name: "Clara Boston",
    title: "Master Student | Monash University",
    image: profile2,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote:
      "I was struggling to find a house when first moved from Brisbane to Melbourne. Thanks to Unibuz, I have been able to rent one : D",
    name: "Jane Mary",
    title: "Student | Victoria University",
    image: profile3,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote:
      "I am from Belgium and Unibuz has helped me connect with other students who comes from the same country as mine! It is so diverse <3",
    name: "Kevin Bry",
    title: "PhD Student | Swinburne University",
    image: profile4,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote:
      "My go-to app for meeting new friends. Perfect for international students!",
    name: "Kylie Fehring",
    title: "Student | LaTrobe University",
    image: profile5,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote:
      "Finally found some mates who love playing Valorant on Unibuz ^^ We love meeting each other at offline sessions.",
    name: "Paul Park",
    title: "Undergrad Student | Swinburne University",
    image: profile6,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote:
      "I've been using UniBuz for a while now and it's been amazing. I've made so many friends and connections that I wouldn't have otherwise.",
    name: "Sara Henn",
    title: "Undergrad Student | University of Sydney",
    image: profile7,
    icon: <Fivestars className="pb-1" />,
  },
  {
    quote: "Great app, beautiful interface and very user friendly.",
    name: "Sophia Carter",
    title: "Master Student | Australia National University",
    image: profile8,
    icon: <Fivestars className="pb-1" />,
  },
];

import dynamic from "next/dynamic";

export const HeroSection = dynamic(() => import("./HeroSection"));
export const KnowlageSection = dynamic(() => import("./KnowlageSection"));
export const LogosSection = dynamic(() => import("./LogosSection"));
export const FieldSection = dynamic(() => import("./FieldSection"));
export const TestimonialSection = dynamic(() => import("./TestimonialSection"));

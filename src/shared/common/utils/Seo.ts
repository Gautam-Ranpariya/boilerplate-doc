import { Metadata } from "next";

const SeoConfig = (title: string, description: string): Metadata => {
  return {
    title,
    description,
  };
};

export default SeoConfig;

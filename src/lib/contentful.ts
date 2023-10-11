import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string;
  type: string;
  date: string;
  description: string;
  content: Document;
  slug: string;
  image: {
      fields:{
        description:string,
        file:{
          url:string;
        }
      }
  };
}

export interface JobListing {
  title: string;
  slug: string;
  description: string;
  salary: string;
  duties: Document;
  qualifications: Document;
  benefits: Document;
  image: {
      fields:{
        description:string,
        file:{
          url:string;
        }
      }
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

// dynamic route in nextJS
import React from "react";
import RenderBlocks from "@/utils/RenderBlocks";
import axios from "axios";

export default function Page({ page }) {
  return (
    <div>
      <RenderBlocks layout={page.layout} />
    </div>
  );
}

// runs when running build
// it will check the rest collections api and mapp through all the pages that are returned
// for every returned page it returns the slug
// if page have slug 'index' thats home page
// this is first step - so it just generates list of slugs
export const getStaticPaths = async () => {
  const pageReq = await axios("/api/pages?limit=100");
  const pageData = pageReq.data;

  const returnObj = {
    paths: pageData.docs.map(({ slug }) => {
      return {
        params: { slug: slug !== "index" ? slug.split("/") : false },
      };
    }),
    fallback: false,
  };
  return returnObj;
};

// stage 2 is executing this and all those specific data are fetched based on above slugs
export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || "index";

  //fetch page
  const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`);
  let pageData = pageReq.data.docs[0];

  return {
    props: {
      page: pageData,
    },
  };
};
// data from this return are received in top component as {page} data

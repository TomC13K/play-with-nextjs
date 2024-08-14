import { blocks } from "@/blocks/blockList";
import React from "react";

// each page layout will map all the blocks and their blocktypes from blocklist
// blocType is slug, and then it retrieves and render the block with data from the CMS
const RenderBlocks = ({ layout }) => {
  <div>
    {layout.map((block, i) => {
      const Block = blocks[block.blockType];
      if (Block) {
        return <Block key={i} {...block} />;
      }
      return null;
    })}
  </div>;
};

export default RenderBlocks;

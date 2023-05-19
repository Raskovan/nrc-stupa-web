import React from "react";
import classes from "../../styles/Details.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Nrc1 from '../../assets/nrc_1.jpg'
// import Nrc2 from '../../assets/nrc_2.jpg'
import { getEntries } from "../../contentfull";
import { BLOCKS } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          // height={node.data.target.fields.file.details.image.height}
          width="100%"
          alt={node.data.target.fields.description}
        />
      );
    }
  }
};

function Nrc() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    getEntries("pages").then(res => {
      const stupasData = res.map(obj => obj.fields).filter(page => page.id === "nrc")[0];
      setData(stupasData);
    });
  }, []);
  return <div className={classes.container}>{documentToReactComponents(data?.body, renderOptions)}</div>;
}
export default Nrc;

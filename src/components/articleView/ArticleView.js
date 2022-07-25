import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import { Container } from "./Styles";
import * as API from "../../fetch.js";

export default function ArticleView() {
  const { currentSelectedArticle, setCurrentSelectedArticle } =
    React.useContext(GlobalStateContext);

  const [articleXML, setARticleXML] = useState(null);

  const fetchFullArticle = async (id) => {
    const articleXML = await API.fetchFullArticle(id);

    const body = articleXML.body.querySelector(".body");
    const pdfURL = body.querySelector(
      'a[href^="http://data.riksdagen.se/fil/"]'
    );

    API.fetchArticlePDF(pdfURL);
    console.log(pdfURL);
    // const pdfurls = Array.from(
    //   parsed.window.document.querySelectorAll('a[href^="https://"]')
    // );

    // console.log(pdfurls);
    // console.log;
    // setARticleXML(articleXML);

    // document
    //   .querySelector("#article-full")
    //   .setAttribute("dangerouslySetInnerHTML", {
    //     _html: `${articleXML.body.querySelector(".body")}`,
    //   });
  };
  useEffect(() => {
    if (currentSelectedArticle) {
      fetchFullArticle(currentSelectedArticle);
    }
  }, [currentSelectedArticle]);

  return (
    <Container type="big">
      <Container type="content-flex">
        {articleXML ? (
          <Container
            type="article-view"
            dangerouslySetInnerHTML={{ __html: `${articleXML}` }}
          >
            {/* {articleXML.map((item) => {
              console.log(item);
            })} */}
          </Container>
        ) : (
          <Container> </Container>
        )}
      </Container>
    </Container>
  );
}

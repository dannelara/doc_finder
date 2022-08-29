import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "../../../globals/GlobalState";
import { Container } from "./Styles";
import * as API from "../../../fetch.js";

export default function ArticleView() {
  const { currentSelectedArticle, setCurrentSelectedArticle } =
    React.useContext(GlobalStateContext);

  const [articleXML, setARticleXML] = useState(null);

  const fetchFullArticle = async (id) => {
    const text = await API.fetchFullArticle(id);

    // const parsed = new window.DOMParser().parseFromString(text, "text");

    setARticleXML(text);
  };

  useEffect(() => {
    if (currentSelectedArticle) {
      fetchFullArticle(currentSelectedArticle);
      // fixArticleHTML();
      const currentArticleInView = document.querySelector("#article-view");

      if (currentArticleInView?.scrollTop > 0) {
        currentArticleInView.scrollTop = 0;
      }
    }
  }, [currentSelectedArticle]);

  return (
    <Container type="big">
      <Container type="content-flex">
        {articleXML ? (
          <Container
            id="article-view"
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

import React from "react";
import { P } from "../../utils";
import { Container, StyledA } from "./Styles";
import sanitizeString from "../../helpers/sanitizeString";
import { GlobalStateContext } from "../../globals/GlobalState";
export default function Article({ article }) {
  return (
    <Container type="big">
      <Container type="top">
        <P type="title">
          {sanitizeString(article.titel).charAt(0).toUpperCase() +
            sanitizeString(article.titel).slice(1)}
        </P>
      </Container>
      <Container type="desc">
        <P type="desc">{sanitizeString(article.summary)}</P>
      </Container>

      <Container type="bottom">
        <Container type="bottom-sub">
          <P type="desc">{article.datum.substring(0, 10)}</P>
        </Container>
        {article.dokument_url_html && (
          <Container type="bottom-sub">
            <StyledA href={article.dokument_url_html}>Till artikel</StyledA>
          </Container>
        )}
      </Container>
    </Container>
  );
}

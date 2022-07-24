import React, { useState } from "react";
import { P } from "../../utils";
import { Container, StyledA } from "./Styles";
import sanitizeString from "../../helpers/sanitizeString";
import { GlobalStateContext } from "../../globals/GlobalState";
export default function Article({ article, onClick }) {
  const [bg, setBG] = useState("#ffff");
  return (
    <Container
      type="big"
      onClick={onClick}
      //   style={{
      //     backgroundColor: bg,
      //   }}
    >
      <Container type="top">
        <P type="title">
          {sanitizeString(article.titel).charAt(0).toUpperCase() +
            sanitizeString(article.titel).slice(1)}{" "}
          - {article.publicerad.substring(0, 10)}
        </P>
      </Container>
      {/* <Container type="desc">
        <P type="desc">{sanitizeString(article.summary)}</P>
      </Container> */}

      <Container type="bottom">
        <Container type="bottom-small">
          {article.doktyp && (
            <Container type="bottom-sub">
              <P type="light">Dokument typ: </P>
              <P type="default">{article.dokumentnamn}</P>
            </Container>
          )}
          {article.dokument_url_html && (
            <Container type="bottom-sub">
              <StyledA href={article.dokument_url_html}>Visa orginal</StyledA>
            </Container>
          )}
        </Container>

        {article.organ && (
          <Container type="bottom-small">
            <Container type="bottom-sub">
              <P type="light">Organ: </P>
              <P type="default">{article.organ}</P>
            </Container>

            {article.undertitel && (
              <Container type="bottom-sub">
                <P type="light">Av: </P>
                <P type="default">{article.undertitel}</P>
              </Container>
            )}
            {/* {article.doktyp && (
            <Container type="bottom-sub">
              <P type="default">Dokument typ: </P>
              <P type="light">{article.dokumentnamn}</P>
            </Container>
          )}
          {article.dokument_url_html && (
            <Container type="bottom-sub">
              <StyledA href={article.dokument_url_html}>Visa orginal</StyledA>
            </Container>
          )} */}
          </Container>
        )}
      </Container>
    </Container>
  );
}

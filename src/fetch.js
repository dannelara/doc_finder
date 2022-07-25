import fetch from "node-fetch";

export async function fetchNames() {
  const url = process.env.REACT_APP_NAME_URL;

  try {
    const response = await fetch(url);

    const answer = await response.json();
    return answer;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchArticles(nextUrl, keyword, searchOptions, page) {
  // console.log(page);
  const currentPage = page ? page : 1;

  keyword = keyword.replace(" ", "+");

  let url;

  if (!nextUrl) {
    url = `https://data.riksdagen.se/dokumentlista/?sok=${keyword}&doktyp=&rm=&from=${searchOptions.start}&tom=${searchOptions.end}&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=datum&sortorder=desc&rapport=&utformat=json&a=s&p=${page}`;
  } else {
    url = nextUrl;
  }

  try {
    const response = await fetch(url);

    const answer = await response.json();

    return answer;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFullArticle(id) {
  const url = `//data.riksdagen.se/dokument/${id}.html`;

  const response = await fetch(url);

  const answer = await response.text();

  // const parsed = new window.DOMParser().parseFromString(answer, "text/html");
  return answer;
}

export async function fetchArticlePDF(url) {
  const response = await fetch(url);

  console.log(response);
}

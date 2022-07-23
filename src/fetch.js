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

export async function fetchArticles(nextUrl, keyword, searchOptions) {
  keyword = keyword.replace(" ", "+");

  let url;

  if (!nextUrl) {
    url = `https://data.riksdagen.se/dokumentlista/?sok=${keyword}&doktyp=&rm=&from=${searchOptions.start}&tom=${searchOptions.end}&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=datum&sortorder=desc&rapport=&utformat=json&a=s`;
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

/**
 * Filter all user input.
 *
 * @author Daniel Martinez Lara
 * @version 1.0.0
 */

/**
 * Method to filter possible bad input.
 *
 * @param {string} sentence - The sentence to filter.
 * @returns {string} - The filtered input.
 */

export default (string) => {
  let filteredSentence;
  if (checkBadWords(string)) {
    filteredSentence = replaceString(string);
  } else {
    throw new Error("Försök igen!");
  }
  return filteredSentence;
};

/**
 * Method to replcae possible bad input.
 *
 * @param {string} string - the string to replace characters from.
 * @returns {string} - The replaced string.
 */
const replaceString = (string) => {
  return string
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

/**
 * Method to check the input for bad words.
 *
 * @param {string} string - the string to replace characters from.
 * @returns {string} - The replaced string.
 */
const checkBadWords = (string) => {
  let valid = true;
  const bannedWord = ["<script>", "</script>"];
  bannedWord.forEach((badWord) => {
    if (string.includes(badWord)) {
      valid = false;
    }
  });
  return valid;
};

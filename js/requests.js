const TRELLO_API = 'cda33ce6abce02250524b0a019e111a7'
const TRELLO_TOKEN = '9030fe39125e16ef5cda171ac179edcc59c768c0b930cf76d369a4ea2797cd77'
const PROJECT_LIST_ID = '59722a00877dfde4b1feaa70'
const BOARD_ID = 'JwRH1hMD'

/**
 * Performs a General HTTP request which calls callback with JSON
 * @param {Function} callback 
 * @param {String} url 
 */
const generalRequest = function (callback, url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => callback(data))
}
/**
 * Takes a card, and attached its dats in a HTML string to "TheList"
 * @param {Card} card 
 */
const putOnPage = function (card) {
  const list = document.getElementById('TheList')
  let attach = `<div class="section dark"><h3>${card.name}</h3><p>${card.desc}</p>`
  card.urls.map((url) => {
    attach += `<p><a href="${url}" rel='noopener'>${url}</a><br>`
  })
  attach += `Last Modified: ${card.dateLastActivity.substring(0, 10)}</p></div>`
  attach += '<br>'

  list.innerHTML += attach
}
/**
 * Makes request to Trello asking for a given card's attachments
 * HAVE NOT TESTES WITH NON URL ATTACHMENTS
 * @param {Card} card 
 */
const getAttachments = function (card) {
  const url = `https://api.trello.com/1/cards/${card.id}/attachments?&fields=url,&key=${TRELLO_API}&token=${TRELLO_TOKEN}`
  const getUrls = x => x.map((attachment) => attachment.url)
  generalRequest((response) => {
    card.urls = getUrls(response)
    putOnPage(card)
  }, url)
}
/**
 * Gets attachments for each card in cards
 * also end up appending urls to the card object
 * @param {Array} cards 
 */
const useThem = (cards) => {
  cards.map((card) => getAttachments(card))
}
/**
 * Makes request to TRELLO for all cards,
 * filters out all not in desired list,
 * then calls useThem with said cards
 */
const trelloJSONImport = function () {
  const url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?fields=name,url,idList,desc,dateLastActivity,?&key=${TRELLO_API}&token=${TRELLO_TOKEN}`
  generalRequest((response) => {
    const cards = response.filter(function (card) {
      return card.idList === PROJECT_LIST_ID
    })
    useThem(cards)
  }, url)
}
trelloJSONImport()

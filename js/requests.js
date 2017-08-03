const TRELLO_API = 'cda33ce6abce02250524b0a019e111a7'
const TRELLO_TOKEN = '9030fe39125e16ef5cda171ac179edcc59c768c0b930cf76d369a4ea2797cd77'
const BOARD_ID = 'JwRH1hMD'
const PROJECT_LIST_ID = '59722a00877dfde4b1feaa70'
var ID = 0

function putOnPage (cards) {
  var list = document.getElementById('TheList')
  for (var i = 0; i < cards.length; i++) {
    var curr = cards[i]
    var attach = `<div class="section dark"><h3>${curr.name}</h3><p>${curr.desc}</p>`
    for (var j = 0; j < curr.urls.length; j++) {
      attach += `<p><a href="${curr.urls[j]}" rel='noopener'>${curr.urls[j]}</a><br>`
    }
    attach += `Last Modified: ${curr.dateLastActivity.substring(0, 10)}</p></div>`
    if (i !== cards.length - 1) attach += '<br>'
    list.innerHTML += attach
  }
}
function generalRequest (callback, url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => callback(data))
}
function trelloJSON (callback) {
  var url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?fields=name,url,idList,desc,dateLastActivity,?&key=${TRELLO_API}&token=${TRELLO_TOKEN}`
  generalRequest(function (response) {
    callback(response)
  }, url)
}
var getAttachments = function (callback, cards) {
  var cardId = cards[ID].id
  ID++
  var url = `https://api.trello.com/1/cards/${cardId}/attachments?&fields=url,&key=${TRELLO_API}&token=${TRELLO_TOKEN}`

  generalRequest(function (response) {
    callback(response)
  }, url)
}
var useThem = function (cards) {
  cards.map(function (card, index) {
    getAttachments(function (response) {
      cards[index].urls = response.map(function (attachment) {
        return attachment.url
      })
      putOnPage([cards[index]])
    }, cards)
  })
}
var getThem = function () {
  trelloJSON(function (response) {
    var cards = response.filter(function (card) {
      return card.idList === PROJECT_LIST_ID
    })
    useThem(cards)
  })
}
getThem()

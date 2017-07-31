const TRELLO_API = 'cda33ce6abce02250524b0a019e111a7'
const TRELLO_TOKEN = '9030fe39125e16ef5cda171ac179edcc59c768c0b930cf76d369a4ea2797cd77'
const BOARD_ID = 'JwRH1hMD'
const PROJECT_LIST_ID = '59722a00877dfde4b1feaa70'
var PROJECT_CARDS = []
const PROJECT_URLS = []
var ID = 0
var ID_COUNTER = 0

function putOnPage(p) {
  var list = document.getElementById('TheList')
  for (var i = 0; i < p.length; i++) {
    var curr = p[i]
    var attach = `<div class="section dark"><h3>${curr.name}</h3><p>${curr.desc}</p>`
    for (var j = 0; j < PROJECT_URLS[i].length; j++) {
      attach += `<p><a href="${PROJECT_URLS[i][j].url}" rel='noopener'>${PROJECT_URLS[i][j].url}</a><br>`
    }
    attach += `Last Modified:${curr.dateLastActivity.substring(0, 10)}</p></div>`
    if (i !== p.length - 1) attach += '<br>'
    list.innerHTML += attach
  }
}
function trelloJSON(callback) {
  var url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?fields=name,url,idList,desc,dateLastActivity,?&key=${TRELLO_API}&token=${TRELLO_TOKEN}`
  var xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', url, true)
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText)
    }
  }
  xobj.send(null)
}
var getAttachments = function (callback) {
  var cardId = PROJECT_CARDS[ID].id
  var url = `https://api.trello.com/1/cards/${cardId}/attachments?&fields=url,&key=${TRELLO_API}&token=${TRELLO_TOKEN}`
  var xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', url, true)
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      // console.log(xobj.responseText);
      callback(xobj.responseText)
    }
  }
  xobj.send(null)
}
var useThem = function () {
  var readyToPrint = function () {
    if (PROJECT_URLS.length === PROJECT_CARDS.length) {
      putOnPage(PROJECT_CARDS)
    }
  }
  for (var i = 0; i < PROJECT_CARDS.length; i++) {
    ID = i
    getAttachments(function (response) {
      var actual = JSON.parse(response)
      PROJECT_URLS[ID_COUNTER] = actual
      ID_COUNTER++
      readyToPrint()
    })
  }
}
var checkThem = function (p) {
  PROJECT_CARDS = p.filter(function (card) {
    return card.idList === PROJECT_LIST_ID
  })
}
var getThem = function () {
  trelloJSON(function (response) {
    var actual = JSON.parse(response)
    checkThem(actual)
    useThem()
  })
}
getThem()

// Retrieving URL Parameters

const urlParams = new URLSearchParams(window.location.search)
const access = urlParams.get('vue');
const tableLinks = document.querySelectorAll("a.no-link");

for (var i = 0; i < tableLinks.length; i++) {
  tableLinks[i].addEventListener("click", disabledLink);
}

function disabledLink(event) {
  event.preventDefault();
}

function activateLinks() {

  for (var i = 0; i < tableLinks.length; i++) {
    tableLinks[i].href = tableLinks[i].dataset.link;
    tableLinks[i].classList.remove("no-link");
    tableLinks[i].removeEventListener("click", disabledLink);
  }

}

function showItems(hiddenClass, displayMode) {
  var hiddenItems = document.getElementsByClassName(hiddenClass);
  for (var i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].style.display = displayMode;
  }
}

if (access == "profs") {

  // rendre visible
  activateLinks();
  showItems("profs-visible", "block");
  showItems("profs-visible-cell", "table-cell");
   

} else if (access == "all") {

  // rendre visible:
  activateLinks();

  showItems("profs-visible", "block");
  showItems("profs-visible-cell", "table-cell");

  // lien édition .edit-link
  showItems("edit-link", "block");

  // .profs
  showItems("profs", "block");

}

if (access) {
  // ajouter le paramètre sur tous les liens
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = anchors[i].href + "?" + urlParams;
  }
}


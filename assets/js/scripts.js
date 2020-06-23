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

if (access == "profs") {

  // rendre visible
  activateLinks();

} else if (access == "all") {

  // rendre visible:
  activateLinks();

  // lien édition .edit-link
  var editLink = document.getElementsByClassName("edit-link");
  for (var i = 0; i < editLink.length; i++) {
    editLink[i].style.display = "block";
  }

  // .profs
  var listeProfs = document.getElementsByClassName("profs");
  for (var i = 0; i < listeProfs.length; i++) {
    listeProfs[i].style.display = "block";
  }

}

if (access) {
  // ajouter le paramètre sur tous les liens
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = anchors[i].href + "?" + urlParams;
  }
}


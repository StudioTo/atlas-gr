// Retrieving URL Parameters

// test for: ?id=admin

const urlParams = new URLSearchParams(window.location.search)
const access = urlParams.get('id');

if (access) {
  // ajouter le paramètre tous les liens
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = anchors[i].href + "?" + urlParams;
  }
}

if (access == "profs") {

  // rendre visible

} else if (access == "all") {

  // rendre visible:

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


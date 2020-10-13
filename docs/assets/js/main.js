"use strict";
const fr = new FileReader(),
  uploadBtn = document.querySelector(".js__profile-trigger"),
  fileField = document.querySelector(".js__profile-upload-btn"),
  profileImage = document.querySelector(".js__profile-image"),
  profilePreview = document.querySelector(".js__profile-preview");
function getImage(e) {
  const r = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage), fr.readAsDataURL(r);
}
function writeImage() {
  (profileImage.style.backgroundImage = `url(${fr.result})`),
    (profilePreview.style.backgroundImage = `url(${fr.result})`);
}
function fakeFileClick() {
  fileField.click();
}
uploadBtn.addEventListener("click", fakeFileClick), fileField.addEventListener("change", getImage);

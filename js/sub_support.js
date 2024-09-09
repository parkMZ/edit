const selectFile = document.querySelector(".input-file input");
const fileList = document.querySelector(".file-list");

selectFile.addEventListener("change", () => {
  fileInput();
});

// 파일 첨부
fileList.addEventListener("click", (e) => {
  const btnDeleteFile = e.target;
  if (btnDeleteFile.matches(".btn-delete-file")) {
    btnDeleteFile.closest(".file-item").remove();
  }
});

function fileInput() {
  const fileItem = document.createElement("span");
  fileItem.classList.add("file-item");
  fileItem.style.display = "flex";
  fileItem.style.alignItems = "center";
  fileItem.style.columnGap = "10px";

  const file = selectFile.files[0].name;
  const fileName = document.createElement("span");
  fileName.classList.add("file-name");
  fileName.innerText = file;

  const btnDeleteFile = document.createElement("button");
  btnDeleteFile.classList.add("btn-delete-file");
  btnDeleteFile.type = "button";

  fileList.append(fileItem);
  fileItem.append(fileName);
  fileItem.append(btnDeleteFile);
}

// 입력 폼 활성화, 비활성화
const agreeBox = document.querySelector(".sub-wrap .agree-box input.agree");
const disagreeBox = document.querySelector(
  ".sub-wrap .agree-box input.disagree"
);
const form = document.querySelectorAll(
  ".form-content form input, .form-content form textarea"
);
const formFileList = document.querySelector(
  ".tech-inquiry .input-file .file-list"
);

agreeBox.addEventListener("click", (e) => {
  form.forEach((item) => {
    item.disabled = false;
    formFileList.style.backgroundColor = "#fff";
  });
});
disagreeBox.addEventListener("click", () => {
  form.forEach((item) => {
    item.disabled = true;
    formFileList.style.backgroundColor = "#f2f2f2";
  });
});

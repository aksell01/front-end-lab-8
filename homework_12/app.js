// Your code goes here
let doc = document,
    rootNode = doc.getElementById("root"),
    preview = doc.createElement("div"),
    h1 = doc.createElement("h1");
flextanks = doc.createElement("div");
let createPreviewTree = (arr, parentUl) => {
    preview.appendChild(h1);
    arr.forEach((tank) => {
        let div = doc.createElement("div"),
            a = doc.createElement("a"),
            img = doc.createElement("img"),
            imgf = doc.createElement("img"),
            p = doc.createElement("p"),
            span = doc.createElement("span"),
            liba = doc.createElement("p");
        preview.id = "previewTanks";
        flextanks.className = "flextanks";
        imgf.className = "countryflag";
        liba.className = "textControl";
        p.className = "textDecoration";
        p.textContent = tank.model;
        span.className = "tooltip";
        span.textContent = tank.level;
        img.className = "tank";
        h1.innerHTML = "Most popular tanks";
        div.className = "tanks";
        imgf.setAttribute("src", tank.country_image);
        img.setAttribute("src", tank.preview);
        imgf.title = tank.country;
        img.title = "Click to details";
        div.appendChild(img);
        liba.appendChild(imgf);
        liba.appendChild(span);
        liba.appendChild(p);
        div.appendChild(liba);
        flextanks.appendChild(div);
        preview.appendChild(flextanks);
        rootNode.appendChild(preview);
        div.addEventListener("click", () => {
            location.hash = tank.model;
        });
    });
}

function CheckTankDetailTree() {
    const div1 = doc.getElementById("previewTanks");
    let tankhash = location.hash.slice(1);
    tanks.forEach(item => {
        if (item.model === tankhash) {
            createTankDetailTree(item);
        }
    });
    const backLink = document.getElementsByClassName('back');
    backLink[0].addEventListener('click', (e) => {
        location.hash = '';
        window.history.go();
    });
}

function createTankDetailTree(tank) {
    let div2 = doc.getElementById("previewTanks"),
        newTree = doc.createElement("div");
    newTree.className = "ditails";
    div = doc.createElement("div");
    mainblock = doc.createElement("div");
    div.className = "header";
    p = doc.createElement("p");
    h1 = doc.createElement("h1");
    imgF = doc.createElement("img");
    prevBlock = doc.createElement("div");
    prevBlock.className = "flex-left";
    tankImgPrew = doc.createElement("img");
    prevBlock.innerHTML = "<h2>Preview</h2>";
    span = doc.createElement("span");
    imgF.setAttribute("src", tank.country_image);
    imgF.title = tank.country;
    tankImgPrew.title = tank.model;
    tankImgPrew.setAttribute("src", tank.preview);
    h1.textContent = " " + tank.model.toUpperCase() + " ";
    span.textContent = "(level " + tank.level + ")";
    mainblock.className = "mainblock";
    div.appendChild(imgF);
    div.appendChild(h1);
    h1.appendChild(span);
    prevBlock.appendChild(tankImgPrew);
    mainblock.appendChild(prevBlock);

    let character = document.createElement("div");
    character.className = "right";
    character.innerHTML = "<h2>Characteristic</h2>";
    mainblock.appendChild(character);

    let table = document.createElement("table");

    for (key in tank.details) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.className = "td1";
        td.innerHTML = key.replace(/_/g, ' ');
        let tdinfo = document.createElement('td');
        tdinfo.className = "td2";
        tdinfo.innerHTML = tank.details[key];
        tr.appendChild(td);
        tr.appendChild(tdinfo);
        table.appendChild(tr);
    }
    character.appendChild(table);
    mainblock.appendChild(character);

    back = doc.createElement("a");
    back.className = "back";
    back.innerHTML = "Back to list view";
    back.href = "#";
    newTree.appendChild(div);
    newTree.appendChild(mainblock);
    newTree.appendChild(back);
    rootNode.replaceChild(newTree, div2);

}
createPreviewTree(tanks, rootNode);
window.onhashchange = CheckTankDetailTree;
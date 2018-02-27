let rootNode = document.getElementById("root"),
 parentUl = document.createElement("ul"),
 doc = document;
 
 
let createTreeView = (arr,parentUl) =>{
	arr.forEach((item) => {
		let p = doc.createElement("p"),
			li = doc.createElement("li"),
			icon = doc.createElement("i");
			ul = doc.createElement("ul");
	p.innerHTML = item.title;
	p.className = 'folderAndFile';
	icon.innerHTML = item.folder ?  'folder' : 'insert_drive_file';
	icon.className = item.folder ? 'material-icons folder' : 'material-icons file';
	p.appendChild(icon);
	li.appendChild(p);
	parentUl.appendChild(li);
	item.folder ? p.addEventListener('click',check = (event) =>{
		event.currentTarget.parentNode.classList.toggle('clicked');
		let icon = event.target.querySelector('.material-icons');
    icon.textContent = icon.textContent === 'folder_open' ? icon.textContent = 'folder' : icon.textContent = 'folder_open';
	}) : null;
			if (item.children){
				ul.className = 'childFold';
				li.appendChild(ul);
				createTreeView(item.children, ul);
			}
			if (!item.children && item.folder){
				let empty = doc.createElement("p");
				empty.textContent = 'Folder is empty';
				empty.className = 'empty';
				li.appendChild(empty);
			}
});
};

createTreeView(parentUl);
rootNode.appendChild(parentUl);
// aqui pego os componentes da DOM que vou fazer alterações
const btn = document.getElementById('btn')
const menu = document.getElementById('menu')
const iconMenu = document.getElementById('icon_menu')
const logo = document.getElementById('logo_img')
let largura = window.innerWidth; // pega a largura do navegador

function abreFechaMenu() {
	menu.classList.toggle('active') // o .toggle adiciona ou remove a classe que eu desejo
	if (menu.classList.value === 'active') { // . value me traz ezatamente a class
		icon_menu.setAttribute('src', 'assets/menu-buguer-close.svg');
	} else {
		icon_menu.setAttribute('src', 'assets/menu-buguer-open.svg');
	}
}

btn.addEventListener('click', abreFechaMenu)

if(largura > '1200'){
	logo.setAttribute('src', 'assets/logo-desktop.svg');
}

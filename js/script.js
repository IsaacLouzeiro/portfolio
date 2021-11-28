// Aos animate library init
AOS.init();

// change language of website
function languageWebsite() {
    
    // HOME CONTENT
    // welcome to my website
    document.getElementById("Welcome").textContent = "Bem vindo ao meu site!";
    // Recently my passion is creating websites. I'm very curious and constantly searching for new things to learn.
    document.getElementById("WhatIDo").textContent = "Recentemente minha paixão é criar sites. Eu sou uma pessoa curiosa, constantemente procurando coisas novas para aprender.";
    // Buttons of navigation
    document.getElementById("btnOne").textContent = "Quem sou eu?";
    document.getElementById("btnTwo").textContent = "Projetos";
    document.getElementById("btnThree").textContent = "Contato";
    // profission
    document.getElementById("profission").textContent = "Desenvolvedor Front-end";

    // ABOUT ME
    // title
    document.getElementById("aboutMe").textContent = "Sobre mim";
    // about text
    document.getElementById("aboutText1").textContent = "Comecei o curso de Desenvolvimento de Sistemas na ETEC Professor Basilídes de Godoy em 2019, e terminei em 2020. Fiz meu projeto de TCC de um sistema de PetShop em Asp.Net MVC, trabalhei com o front-end da aplicação utilizando HTML, CSS, JavaScript e Bootstrap, e no back-end em Asp.Net MVC. Ganhei um certificado de “Melhor aluno Evolução em Desenvolvimento”, pelo meu esforço e empenho em aprender no curso.";
    document.getElementById("aboutText2").textContent = "Entrei no Instituto Proa em 2021, no curso ProProfissão 4.0 de programação Java Web, e sinto que aprendi bastante na parte comunicativa e técnica de trabalho, além de concluir com o TCC (Demoday) de um sistema de Economia para jovens de baixa renda, trabalhando principalmente no front-end do sistema.";
    document.getElementById("aboutText3").textContent = "Sou uma pessoa bastante curiosa, que gosta de aprender e expandir meus conhecimentos. A cada dia tento melhorar minhas habilidades para que eu possa crescer profissionalmente.";
    // skill
    document.getElementById("skill").textContent = "Habilidades";

    // MY WORK
    // title
    document.getElementById("myWork").textContent = "Meus trabalhos";
    // button see more
    document.getElementById("btnSeeMore").textContent = "Veja mais";
    // title projects
    document.getElementById("subtProj1").textContent = "Produtora Alivisual";
    document.getElementById("subtProj2").textContent = "Portifolio de fotografia";
    document.getElementById("subtProj3").textContent = "API Instagram Feed";
    document.getElementById("subtProj4").textContent = "Site Finans";
    document.getElementById("subtProj5").textContent = "Petshop institucional";
    document.getElementById("subtProj6").textContent = "Museu de Arte Moderna";
    document.getElementById("subtProj7").textContent = "Notícias da cidade";
    document.getElementById("subtProj8").textContent = "Site institucional";
    // btn projects
    document.getElementById("abtProj1").innerHTML = "<i class='fa fa-window-maximize'></i> Site";
    document.getElementById("abtProj2").innerHTML = "<i class='fa fa-window-maximize'></i> Site";
    document.getElementById("abtProj3").innerHTML = "<i class='fa fa-github'></i> Sobre";
    document.getElementById("abtProj4").innerHTML = "<i class='fa fa-github'></i> Sobre";
    document.getElementById("abtProj5").innerHTML = "<i class='fa fa-github'></i> Sobre";
    document.getElementById("abtProj6").innerHTML = "<i class='fa fa-github'></i> Sobre";
    document.getElementById("abtProj7").innerHTML = "<i class='fa fa-github'></i> Sobre";
    document.getElementById("abtProj8").innerHTML = "<i class='fa fa-github'></i> Sobre";

    // CONTACT
    // title
    document.getElementById("TitleContact").textContent = "Contato";
    // subtitle
    document.getElementById("subContact").textContent = "Se você está interessado no meu trabalho, ou precisa de informações adicionais, por favor, entre em contato.";
    


}

// SETTING BUTTON LANGUAGE

const memLangPt = localStorage.getItem('pt');

const memLangEn = localStorage.getItem('en');

// if has the lang pt on localStorage
if (memLangPt) {
    document.getElementById("btPt").classList.add("active");
    languageWebsite();
}

// if has the lang en on localStorage
if (memLangEn) {
    document.getElementById("btEn").classList.add("active");
}



function langBtn(btn, lang) {
    location.reload();
    switch (lang) {
        case 'pt':
            // remove the lang on localStorage
            localStorage.removeItem('en');
            // insert active class
            btn.classList.add("active");
            languageWebsite();

            // if has the classe active
            if (btn.classList.contains('active')) {
                // add the lang on localStorage
                localStorage.setItem('pt', true)
                languageWebsite();
                return
            }
            // else remove
            localStorage.removeItem('pt');
            break;

        case 'en':
            // remove the lang on localStorage
            localStorage.removeItem('pt');
            // insert active class
            btn.classList.add("active");

            // if has the classe active
            if (btn.classList.contains('active')) {
                // add the lang on localStorage
                localStorage.setItem('en', true)
                return
            }
            // else remove
            localStorage.removeItem('en');
            break;
    
        default:
            break;
    }
}
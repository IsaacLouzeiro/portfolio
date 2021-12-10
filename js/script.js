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
    // career
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
    // subtitle
    document.getElementById("myWorkSubtitle").textContent = "Clique no projeto para ver mais sobre ele";
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
    for (let i = 1; i <= 2; i++) {
        titleModal = "abtProj" + i;
        document.getElementById(titleModal).innerHTML = "<i class='fa fa-window-maximize'></i> Site";
    }
    for (let i = 3; i <= 8; i++) {
        titleModal = "abtProj" + i;
        document.getElementById(titleModal).innerHTML = "<i class='fa fa-github'></i> Sobre";
    }
    

    // MY WORK MODAL
    
    // title project modal
    staticBackdropLabel1
    document.getElementById("staticBackdropLabel1").textContent = "Produtora Alivisual";
    document.getElementById("staticBackdropLabel2").textContent = "Portifolio de fotografia";
    document.getElementById("staticBackdropLabel3").textContent = "API Instagram Feed";
    document.getElementById("staticBackdropLabel4").textContent = "Site Finans";
    document.getElementById("staticBackdropLabel5").textContent = "Petshop institucional";
    document.getElementById("staticBackdropLabel6").textContent = "Museu de Arte Moderna";
    document.getElementById("staticBackdropLabel7").textContent = "Notícias da cidade";
    document.getElementById("staticBackdropLabel8").textContent = "Site institucional";

    // title "about" project modal
    let titleModalProject = "Sobre:";
    for (let i = 1; i <= 8; i++) {
        titleModal = "abtTitleModal" + i;
        document.getElementById(titleModal).textContent = titleModalProject;
    }

    // content about project
    document.getElementById("contProj1").textContent = "O site foi criado para a Alivisual, uma produtora de audiovisual & fotografia de São Paulo.";
    document.getElementById("contProj2").textContent = "Portfolio de fotografia desenvolvido para o fotógrafo Leandro Louzeiro.";
    document.getElementById("contProj3").textContent = "Site criado com o intuito de utilizar o Instagram Basic Display API do Facebook Developer para fins de estudos.";
    document.getElementById("contProj4").textContent = "Site fictício de finança.";
    document.getElementById("contProj5").textContent = "Site baseado no meu projeto de TCC em Asp.Net, apenas com Html, Css e Bootstrap.";
    document.getElementById("contProj6").textContent = "Site feito por mim, sobre o Museu de Arte Moderna de São Paulo. Site sem ligações com o museu. ";
    document.getElementById("contProj7").textContent = "Projeto do site de uma cidade fictícia.";
    document.getElementById("contProj8").textContent = "Esse site foi todo criado por mim, com a finalidade de apresentar o Trabalho de Conclusão de Módulo na Etec de Desenvolvimento de sistemas 1º Semestre, e adquirir experiência no decorrer desse projeto.";

    // in this project it was used
    let titleModalSkill = "Nesse projeto foi usado:";
    for (let i = 1; i <= 8; i++) {
        titleSkill = "titleSkill" + i;
        document.getElementById(titleSkill).textContent = titleModalSkill;
    }

    // buttons modal
    for (let i = 1; i <= 8; i++) {
        ws = "ws" + i;
        document.getElementById(ws).innerHTML = "<i class='fa fa-window-maximize'></i> Site";
    }
    
    // CONTACT
    // title
    document.getElementById("TitleContact").textContent = "Contato";
    // subtitle
    document.getElementById("subContact").textContent = "Se você está interessado no meu trabalho, ou precisa de informações adicionais, por favor, entre em contato.";
    


}

// SETTING BUTTON LANGUAGE

const memLangPt = localStorage.getItem('pt');

const memLangEn = localStorage.getItem('en');

document.getElementById("btEn").classList.add("active");
// if has the lang pt on localStorage
if (memLangPt) {
    document.getElementById("btPt").classList.add("active");
    document.getElementById("btEn").classList.remove("active");
    languageWebsite();
}

// if has the lang en on localStorage
if (memLangEn) {
    document.getElementById("btEn").classList.add("active");
    document.getElementById("btPt").classList.remove("active");
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
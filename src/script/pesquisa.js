const dowloads = [{
        titulo: '3CXPhone',
        imagem: 'https://raw.githubusercontent.com/RafaelMiranda21/support/main/src/imagens/apps/3CXPhone.png',
        end: 'src/dowloads/3CXPhone6.msi'
    },
    {
        titulo: 'eyeBeam',
        imagem: 'https://raw.githubusercontent.com/RafaelMiranda21/support/main/src/imagens/apps/eyebeam.png',
        end: 'src/dowloads/eyeBeam.rar'
    },
    {
        titulo: 'pacoteOffice',
        imagem: 'https://raw.githubusercontent.com/RafaelMiranda21/support/main/src/imagens/apps/office.png',
        end: 'src/dowloads/OfficeSetup.exe'
    },
    {
        titulo: 'Winrar',
        imagem: 'https://github.com/RafaelMiranda21/support/blob/main/src/imagens/apps/WinRAR.png?raw=true',
        end: 'src/dowloads/winrar-x64.exe'
    },
    {
        titulo: 'Adobe Reader',
        imagem: 'https://raw.githubusercontent.com/RafaelMiranda21/support/main/src/imagens/apps/adobereader.png',
        end: 'src/dowloads/readerdc.exe'
    }
]

document.getElementById('formulario').addEventListener('submit', pesquisa);
var conteudo = document.getElementById('dowloads');

function pesquisa(e) {
    var pesquisar = document.getElementById('pesquisar').value;
    buscarPesquisa(pesquisar);
    e.preventDefault();
}

function buscarPesquisa(p) {
    estiliza();
    conteudo.innerHTML = "";
    const dowload = dowloads.filter(d => d.titulo.toUpperCase().includes(p.toUpperCase()));
    dowload.map((val) => {
        conteudo.innerHTML += `
            <div class="conteudo-dowload">
            <a href="` + val.end + `">
            <img src="` + val.imagem + `" />
             <h1>` + val.titulo + `</h1>
             </a>
            </div>
        `;
    });

}

function estiliza() {
    var formulario = document.getElementById('formulario');
    formulario.style.right = "2%";
    formulario.style.top = "5%";
    formulario.style.transition = "all linear 500ms";
    conteudo.style.zIndex = '999';
}
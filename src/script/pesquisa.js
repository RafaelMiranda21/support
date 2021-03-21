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
    },
    {
        titulo: 'Sankhya 64x',
        imagem: 'https://github.com/RafaelMiranda21/support/blob/main/src/imagens/apps/Sankhya.png?raw=true',
        end: 'https://drive.google.com/u/1/uc?id=1UhIseknf5LnH6od-S8kcwlLbjcZ836iK&export=download'
    },
    {
        titulo: 'Sankhya 32x',
        imagem: 'https://github.com/RafaelMiranda21/support/blob/main/src/imagens/apps/Sankhya.png?raw=true',
        end: 'https://drive.google.com/u/1/uc?id=1xYQ4G1fVxbKEPf2fdgKtml-0SxV1zx4Z&export=download'
    },
    {
        titulo: 'Foxit Reader',
        imagem: 'https://github.com/RafaelMiranda21/support/blob/main/src/imagens/apps/Foxit.png?raw=true',
        end: 'https://drive.google.com/file/d/1ZOSsBpGY_3uz1ePp-bA_noYZInCGTEm9/view?usp=sharing'
    },
]

document.getElementById('formulario').addEventListener('submit', pesquisa);
var areaDowload = document.getElementById('area-dowload');

function pesquisa(e) {
    var pesquisar = document.getElementById('pesquisar').value;
    buscarPesquisa(pesquisar);
    e.preventDefault();
}

function buscarPesquisa(p) {
    estiliza();
    const dowload = dowloads.filter(d => d.titulo.toUpperCase().includes(p.toUpperCase()));
    if (dowload.length == 0) {
        if (document.getElementById('dowloads-container')) {
            document.getElementById('area-dowload').removeChild(document.getElementById('dowloads-container'));
        } else {
            document.getElementById('area-dowload').removeChild(document.getElementById('dowloads-container'));
        }
        areaDowload.innerHTML += `
          <div class="mensagem-container" id="mensagem-container">
              <div class="mensagem-wrapper" >
                <img src="https://github.com/RafaelMiranda21/support/blob/main/src/imagens/Mater.png?raw=true"/>
                <div class="mensagem">
                    <h1>Desculpe Dowload não encontrado</h1>
                    <h3>Chame o Rafael para adicionar o dowload</h3>
                </div>
                
              </div>       
          </div>    
        `;
    } else {
        if (dowload.length > 5 || window.innerWidth < 1025) {
            if (document.getElementById('mensagem-container')) {
                document.getElementById('area-dowload').removeChild(document.getElementById('mensagem-container'));
            } else {
                document.getElementById('area-dowload').removeChild(document.getElementById('dowloads-container'));
            }

            areaDowload.innerHTML += `
        <div class="swiper-container" id="dowloads-container">
            <div class="swiper-wrapper" id="swiper-wrapper">

            </div>
        </div>
        `;
            var conteudoSwiper = document.getElementById('swiper-wrapper');
            dowload.map((val) => {
                conteudoSwiper.innerHTML += `
                    <div class="swiper-slide">
                        <a href="` + val.end + `" target="_blanck">
                        <img src="` + val.imagem + `" />
                        <h1>` + val.titulo + `</h1>
                        </a>
                    </div>
            `;
            });
            var swiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                },
                // loop: true,
            });
        } else {
            if (document.getElementById('mensagem-container')) {
                document.getElementById('area-dowload').removeChild(document.getElementById('mensagem-container'));
            } else {
                document.getElementById('area-dowload').removeChild(document.getElementById('dowloads-container'));
            }

            areaDowload.innerHTML += `
        <div class="dowloads-container" id="dowloads-container">
            <div class="dowloads-wrapper" id="dowloads-wrapper">
            </div>
        </div>
        `;
            var conteudoDowload = document.getElementById('dowloads-wrapper');
            dowload.map((val) => {
                conteudoDowload.innerHTML += `
                        <div class="conteudo-dowload">
                            <a href="` + val.end + `" target="_blanck">
                            <img src="` + val.imagem + `" />
                            <h1>` + val.titulo + `</h1>
                            </a>
                        </div>  
        `;
            });
        }
    }
}



function estiliza() {
    var formulario = document.getElementById('formulario');
    formulario.style.right = "2%";
    formulario.style.top = "5%";
    formulario.style.transition = "all linear 500ms";
    areaDowload.style.zIndex = "999";
}
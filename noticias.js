class Jornalista{
    constructor(foto,nome){
        this.foto = foto;
        this.nome = nome;
    }
    analisarNoticias(){
        console.log('Analisando a Noticia');
    }
}
class Noticia extends Jornalista{
    constructor(foto,nome,artigo){
        super(foto,nome);
        this.artigo = artigo;
    }
    analisarNoticias(){
        super.analisarNoticias();
    }
    inserirVideo(){
        console.log('Inserindo Video');
    }
}

const Lula = new Noticia('Jair Bolsonaro' ,'milicia.jpg',157);
const Bolsonaro = new Noticia('Luiz Inacio','calango.jpg',171);
const Eneas = new Noticia('Bomba','Nuclear',5656);
const GrandePerda = new Jornalista('Ricardo Eugênio Boechat','Ricardo.jpg')
const Ancora = new Jornalista('Willian Bonner','Bonner.png')
const Encontro = new Jornalista('Fatima Bernardes','Tvglobinho.webp')

var Noticias= [Lula,Bolsonaro,Eneas];
var Jornalistas = [GrandePerda,Ancora,Encontro];


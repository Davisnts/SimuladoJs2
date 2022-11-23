//Utilizei o material de apoio para relembrar a Estrutura de classes
//Criar SuperClasse, chamada JORNALISTA com construtor com 2 assinaturas/atributos: foto e nome do jornalista
class Jornalista{
    constructor(foto,nome){
        this.foto = foto;
        this.nome = nome;
    }
//6. Dentro desta SuperClasse JORNALISTA, deverá criar um método para as ANALISAR NOTICIAS (analisarNoticias)
    analisarNoticias(){
        console.log('Analisando a Noticia');
    }
}
//Deverá criar também a SubClasse NOTICIA que deverá estar apta para HERDAR tudo da SuperClasse JORNALISTA
class Noticia extends Jornalista{
    constructor(foto,nome,artigo){
        super(foto,nome);
        this.artigo = artigo;
    }
    analisarNoticias(){
    // Nesta SubClasse , deverá existir o método ‘analisarNoticias()’ e dentro dele deve ser chamado o método analisarNoticias() da SuperClasse JORNALISTA;
        super.analisarNoticias();
    }
    //Nesta SubClasse Noticia, também deverá ser criado outro método chamado inserirVideos()

    inserirVideo(){
        console.log('Inserindo Video');
    }
}
//Criar um array chamado Noticias e inserir nele 3 codigos de noticias;
//Instanciado uma NOTICIA com 3 assinaturas como parâmetros;
const Lula = new Noticia('Jair Bolsonaro' ,'milicia.jpg',157);
const Bolsonaro = new Noticia('Luiz Inacio','calango.jpg',171);
const Eneas = new Noticia('Bomba','Nuclear',5656);
//E outra instancia de um JORNALISTA FAMOSO com 2 assinatura como parâmetros.
const JornalistaFamoso = new Jornalista('Ricardo Eugênio Boechat','Ricardo.jpg')
const Ancora = new Jornalista('Willian Bonner','Bonner.png')
const Encontro = new Jornalista('Fatima Bernardes','Tvglobinho.webp')

//Criar um array chamado Noticias e inserir nele 3 codigos de noticias;
var Noticias = [Lula,Bolsonaro,Eneas];
//Criar um array chamado Jornalistas e inserir nele 3 nomes de jornalistas da subclasse JORNALISTA do item 7 acima;
var Jornalistas = [JornalistaFamoso,Ancora,Encontro]
console.log (Lula);
console.log (JornalistaFamoso);
//Utilizando o recurso de Regex, criar algum classe/objeto ou function que faça sentido com a utilização prática do regex nestes 2 arrays.
console.log (Noticias.slice(1,2)); // Mostra Apenas uma Noticia


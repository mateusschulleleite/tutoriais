import React, { useState } from "react";
import "./Tutors.css";
import TutorsList from "../TutorsList";
import TutorView from "../TutorView";

let listaDeTutoriais = [
  {
    nome: "Relatórios",
    primeiro: {
      nome: "Como Tirar Um Relatório de Inconsistências do Site",
      link: "https://youtu.be/ihR0hk-cLdQ",
    },
    segundo: {
      nome: "Como Tirar Relatorio/Planilha de Cadastro de Produto",
      link: "https://youtu.be/IfnWinrAYv4",
    },
  },
  {
    nome: "Gerais",
    primeiro: {
      nome: "Incluir Informação em Notificação de Email",
      link: "https://youtu.be/kTrR5zFoDa0",
    },
    segundo: {
      nome: "Link de Carrinho Rápido",
      link: "https://www.youtube.com/watch?v=JnLv0KqUqw4",
    },
    terceiro: {
      nome: "Como Configurar Autenticação de Dois Fatores",
      link: "https://www.youtube.com/watch?v=dKMdgRcTP_c",
    },
    quarto: {
      nome: "Colocar Mensagem no Checkout",
      link: "https://www.youtube.com/watch?v=v4rx6qJ5Zj8",
    },
    quinto: {
      nome: "Colocar o Site em Manutenção",
      link: "https://www.youtube.com/watch?v=1TQUSImbUco",
    },
    sexto: {
      nome: "Embalagem de Presente",
      link: "https://www.youtube.com/watch?v=gNNvBTM-EnA",
    },
    setimo: {
      nome: "Alterar Horários de Atendimento do Site",
      link: "https://www.youtube.com/watch?v=eyN3tdaJuOA&ab_channel=Suporte|Magazord",
    },
    oitavo: {
      nome: "Alterar Contatos do Site",
      link: "https://www.youtube.com/watch?v=HNzD6Z9c6Ac&ab_channel=Suporte|Magazord",
    },
    nono: {
      nome: "Carrinhos Abandonados",
      link: "https://www.youtube.com/watch?v=qeriOhYvLOI&ab_channel=Suporte|Magazord",
    },
    decimo: {
      nome: "Ativar ou Desativar o Compra Sem Cadastro",
      link: "https://youtu.be/onQlTzWMmm0",
    },
    decimoPrimeiro: {
      nome: "Tirar ou Colocar os Produtos Sem Estoque do Site",
      link: "https://youtu.be/SuupxZQGpSs",
    },
    decimoSegundo: {
      nome: "Trocar o Modelo de Checkout",
      link: "https://youtu.be/RqCWmbqOSfI",
    },
    decimoTerceiro: {
      nome: "Desativar o Newsletter Para um Cliente Específico",
      link: "https://youtu.be/yyv5Togpsts",
    },
  },
  {
    nome: "Menu",
    primeiro: {
      nome: "Colocar Imagem no Menu",
      link: "https://www.youtube.com/watch?v=beryKwuHI_A&ab_channel=Suporte|Magazord",
    },
    segundo: {
      nome: "Cadastrar Submenu",
      link: "https://youtu.be/rIfYT3B0EuI",
    },
  },
  {
    nome: "Banners",
    primeiro: {
      nome: "Colocar Banner Para Rolar Automaticamente",
      link: "https://www.youtube.com/watch?v=SbTtPqK8Zwk",
    },
    segundo: {
      nome: "Colocar Vídeo em Banner",
      link: "https://www.youtube.com/watch?v=gbbUoUk6W8s&feature=youtu.be",
    },
    terceiro: {
      nome: "Banner em Página de Pesquisa/Categoria",
      link: "https://www.youtube.com/watch?v=GRFVK3F42Hw",
    },
    quarto: {
      nome: "Alterar os Banners do Site",
      link: "https://www.youtube.com/watch?v=EHO8DRwCf9I",
    },
    quinto: {
      nome: "Alterar o Título de um Banner ou Vitrine",
      link: "https://www.youtube.com/watch?v=5JRST4XMBIY",
    },
    sexto: {
      nome: "Inserir um Novo Componente de Banner Carrossel",
      link: "https://www.youtube.com/watch?v=dtlKk2MkMyU",
    },
    setimo: {
      nome: "Colocar Link em um Banner",
      link: "https://www.youtube.com/watch?v=cFivQQxuckI&ab_channel=Suporte|Magazord",
    },
    oitavo: {
      nome: "Cadastro de Banner Completo",
      link: "https://youtu.be/AlJ0558115w",
    },
    nono: {
      nome: "Inserir Um Novo Banner no Grupo de Banner",
      link: "https://youtu.be/vi5Z4z2gx9g",
    },
  },
  {
    nome: "Vitrines",
    primeiro: {
      nome: "Como Criar Vitrine Dinâmica",
      link: "https://www.youtube.com/watch?v=g2wAWu8oCJI",
    },
    segundo: {
      nome: "Colocar Vitrine na Página Inicial",
      link: "https://www.youtube.com/watch?v=x9vqJMX57ko",
    },
    terceiro: {
      nome: "Como Criar Vitrine Normal",
      link: "https://www.youtube.com/watch?v=LeEPCXUZ5zM",
    },
    quarto: {
      nome: "Alterar a Quantidade de Produtos Exibidos na Vitrine da Página Inicial",
      link: "https://youtu.be/1HcFmojvQMQ",
    },
  },
  {
    nome: "Produto",
    primeiro: {
      nome: "Cadastrar Uma Nova Derivação(Produto Filho) Em Produto Existente",
      link: "https://youtu.be/oyMSHxDpdQA",
    },
    segundo: {
      nome: "Colocar Tag em Produtos Especificos",
      link: "https://youtu.be/7fUD0NAL4Ls",
    },
    terceiro: {
      nome: "Alterar o Preço do Produto Manualmente",
      link: "https://www.youtube.com/watch?v=KY1y2flTq4g",
    },
    quarto: {
      nome: "Importação de Tabela de Preço",
      link: "https://www.youtube.com/watch?v=EPnSO0C_ci8",
    },
    quinto: {
      nome: "Alterar o Título do Produto",
      link: "https://www.youtube.com/watch?v=vTkhGfiebr0&list=PLoJJ9tJkPE4gvN_9_SriPmoSWXUZXyj5d&index=24&ab_channel=Suporte|Magazord",
    },
    sexto: {
      nome: "Ativar Produto Agrupador",
      link: "https://www.youtube.com/watch?v=Rfs_DPG1awI",
    },
    setimo: {
      nome: "Desconto em Lote",
      link: "https://www.youtube.com/watch?v=BEp3JSSekaQ&list=PLoJJ9tJkPE4gvN_9_SriPmoSWXUZXyj5d&index=3",
    },
    oitavo: {
      nome: "Atualização em Lote",
      link: "https://www.youtube.com/watch?v=nR4BGLctsaY&list=PLoJJ9tJkPE4gvN_9_SriPmoSWXUZXyj5d&index=4",
    },
    nono: {
      nome: "Importar Mídias do Produto por Planilha",
      link: "https://www.youtube.com/watch?v=mMbJSfQnei0&ab_channel=Suporte|Magazord",
    },
    decimo: {
      nome: "Colocar Tabela de Medidas no Produto",
      link: "https://www.youtube.com/watch?v=Y_iP4DG05u4&ab_channel=Suporte|Magazord",
    },
    decimoPrimeiro: {
      nome: "Vídeo do Youtube/Arquivo na Descrição do Produto",
      link: "https://www.youtube.com/watch?v=0fkLGj_C9YE&ab_channel=Suporte|Magazord",
    },
    decimoSegundo: {
      nome: "Colocar Preço no Produto",
      link: "https://www.youtube.com/watch?v=DVZKEAJ5fII&ab_channel=Suporte|Magazord",
    },
    decimoTerceiro: {
      nome: "Alterar a Ordem da Derivação na Página do Produto",
      link: "https://www.youtube.com/watch?v=mNMIX4HgHbg&ab_channel=Suporte|Magazord",
    },
    decimoQuarto: {
      nome: "Ativar/Desativar Produtos em Lote",
      link: "https://www.youtube.com/watch?v=cpHeTtGW08M&ab_channel=Suporte|Magazord",
    },
    decimoQuinto: {
      nome: "Colocar/Retirar Estoque",
      link: "https://www.youtube.com/watch?v=OSnmoQegLR0&ab_channel=Suporte|Magazord",
    },
    decimoSexto: {
      nome: "Não Aparece a Característica Para Selecionar",
      link: "https://www.youtube.com/watch?v=3G7g3kC29Jc&ab_channel=Suporte|Magazord",
    },
    decimoSetimo: {
      nome: "Tags de Produtos",
      link: "https://youtu.be/6KoJK5MQMGA",
    },
    decimoOitavo: {
      nome: "Video do Youtube ou Arquivo nas Mídias do Produto",
      link: "https://youtu.be/Yr7-RMqmIOM",
    },
    decimoNono: {
      nome: "Cadastro de Produto Completo (Tela Nova)",
      link: "https://youtu.be/BcZMgSh4XkA",
    },
    vigesimo: {
      nome: "Replicar Produtos de Uma Loja Para Outra",
      link: "https://youtu.be/90o1R3WzJz4",
    },
    vigesimoPrimeiro: {
      nome: "Como Alterar a Descrição do Produto",
      link: "https://drive.google.com/file/d/1HcGuh9iL2DGD6TMweYtWo1n0gimKpty5/view?usp=sharing",
    },
    vigesimoSegundo: {
      nome: "Cadastro de Produto Por Planilha",
      link: "https://drive.google.com/file/d/10VKRM2Hx0lADGrugJcMah6ALvHw_xry3/view?usp=sharing",
    },
    vigesimoTerceiro: {
      nome: "Atualizar a Data de Lançamento em Lote",
      link: "https://drive.google.com/file/d/10yzosTJbP9QBMRQI5McK8uM7liXqpoyD/view?usp=sharing",
    },
    vigesimoQuarto: {
      nome: "Alterar a Ordem das Derivações na Pagina do Produto",
      link: "https://drive.google.com/file/d/10oWzgriEK17P_snPg4Q8dOhAyzTf3C3l/view?usp=sharing",
    },
    vigesimoQuinto: {
      nome: "Cadastrar Novos Items na Lista de Derivação (Cores, Tamanhos)",
      link: "https://drive.google.com/file/d/10zIHZPXsI3IzYWTiJmuzJiRI2oiuGecu/view?usp=sharing",
    },
    vigesimoSexto: {
      nome: "Importação de Características Por Planilha",
      link: "https://drive.google.com/file/d/11KMoZwWOaKm0no0bo1A97rHSf9drYAe9/view?usp=sharing",
    },
  },
  {
    nome: "Kit",
    primeiro: {
      nome: "Como Cadastrar Kit (Tela antiga)",
      link: "https://www.youtube.com/watch?v=z23CScdRdys&ab_channel=Suporte|Magazord",
    },
    segundo: {
      nome: "Como Cadastrar Kit (Tela nova)",
      link: "https://drive.google.com/file/d/1S9SqWZqfPs5DFkheL-WQCYnlI1tXvQV8/view?usp=sharing",
    }
  },
  {
    nome: "Blog",
    primeiro: {
      nome: "Colocar o Blog no Menu Principal",
      link: "https://www.youtube.com/watch?v=FqMdSaDfrlM",
    },
    segundo: {
      nome: "Colocar o Blog na Página Inicial",
      link: "https://www.youtube.com/watch?v=wlYNWPS-VXM",
    },
    terceiro: {
      nome: "Criar um Post Para o Blog",
      link: "https://www.youtube.com/watch?v=aFHdkQhUhZs",
    },
    quarto: {
      nome: "Colocar o Blog no Menu Institucional",
      link: "https://youtu.be/I0XtsesQgEA",
    },
    quinto: {
      nome: "Alterar os Destaques do Blog",
      link: "https://drive.google.com/file/d/19bwV3dwtNefzQ6G0s3heFa9kioTCL6Ph/view?usp=sharing",
    },
  },
  {
    nome: "Páginas",
    primeiro: {
      nome: "Filtro de Página",
      link: "https://www.youtube.com/watch?v=xwfP2vAmlK8&list=PLoJJ9tJkPE4gvN_9_SriPmoSWXUZXyj5d&ab_channel=Suporte|Magazord",
    },
    segundo: {
      nome: "Como Alterar o Conteúdo de Página Institucional",
      link: "https://www.youtube.com/watch?v=cvqYqeELcYg&ab_channel=Suporte|Magazord",
    },
    terceiro: {
      nome: "Colocar Conteúdo em Página de Pesquisa Categoria",
      link: "https://youtu.be/nqknw30xX_E",
    },
    quarto: {
      nome: "Alterar a Ordem dos Componentes na Landing Page",
      link: "https://drive.google.com/file/d/1TxdME7attV3QcgFKRfRtOkw_C8p-J60j/view?usp=sharing",
    },
    quinto: {
      nome: "Alterar a Ordem dos Produtos na Página de Pesquisa",
      link: "https://drive.google.com/file/d/10VpzEjpfp7aX5qMpgsDTVahPPeM7w74N/view?usp=sharing",
    },
    sexto: {
      nome: "Criar Uma Página de Pesquisa e Filtrar Por Vitrine",
      link: "https://drive.google.com/file/d/10_AKU8-zZSJlZ5XZxTKTRYJi6rG61AZK/view?usp=sharing",
    },
  },
  {
    nome: "Cupom",
    primeiro: {
      nome: "Cupom de Desconto - Geral",
      link: "https://www.youtube.com/watch?v=H2Vll5yDpAQ&list=PLoJJ9tJkPE4gvN_9_SriPmoSWXUZXyj5d&index=2",
    },
  },
  {
    nome: "Promoção",
    primeiro: {
      nome: "Promoções - Geral",
      link: "https://www.youtube.com/watch?v=klEmNnE0kRc&list=PLoJJ9tJkPE4gvN_9_SriPmoSWXUZXyj5d&index=5",
    },
  },
  {
    nome: "Pop Up",
    primeiro: {
      nome: "Pop Up - Completo",
      link: "https://drive.google.com/file/d/1Q2kallfgQE5luVx3n12FSrcbb7Z0rduL/view?usp=sharing",
    },
  },
];

export default function Tutors() {
  const [itemLista, setItemLista] = useState(null);
  const [subtutoriais, setSubtutoriais] = useState([])

  return (
    <section className="tutors">
      <TutorsList
        tutoriais={listaDeTutoriais}
        itemSelecionado={itemLista}
        setItemLista={setItemLista}
        setSubtutoriais={setSubtutoriais}
      />
      <TutorView 
        subtutoriais={subtutoriais}
      />
    </section>
  );
}

let opcao = "";
const imoveis = [];
do {
  opcao = prompt(
    "Bem vindo ao cadastro de Imóveis!\n\n" +
      "Total de imóveis cadastrados: " +
      imoveis.length +
      "\n\nEscolha uma das opções abaixo:\n1. Cadastrar Imóvel \n2. Consultar Imóveis \n3. Sair"
  );
  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Qual o nome do proprietário?");
      imovel.quartos = prompt("Quantos quartos tem o imóvel?");
      imovel.banheiros = prompt("Quantos banheiros tem o imóvel?");
      imovel.garagem = prompt("Imóvel possui garagem?");

      const confirmacao = confirm(
        "Deseja salvar este imóvel?\n" +
          "\nProprietario: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem?: " +
          imovel.garagem
      );
      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário " +
            imoveis[i].proprietario +
            "\nQuartos " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
  }
} while (opcao !== "3");

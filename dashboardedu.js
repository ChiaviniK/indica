document.addEventListener('DOMContentLoaded', () => {
    // COPIE E COLE O CONTEÚDO COMPLETO DOS SEUS ARQUIVOS JSON AQUI
    const alunosData = [
  {
    "id_aluno": 1,
    "nome": "Marina Mendes",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 2,
    "nome": "Luiz Henrique Barbosa",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 3,
    "nome": "Anna Liz Siqueira",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 4,
    "nome": "Theodoro Camargo",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 5,
    "nome": "Isabelly Andrade",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 6,
    "nome": "Mirella Gomes",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 7,
    "nome": "Samuel Cirino",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 8,
    "nome": "Elisa Lopes",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 9,
    "nome": "Marcos Vinicius Macedo",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 10,
    "nome": "Josué Albuquerque",
    "idade": 20,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 11,
    "nome": "Maria Helena Rios",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 12,
    "nome": "Dra. Maria Helena Moraes",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 13,
    "nome": "Luiz Fernando Mendonça",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 14,
    "nome": "Joaquim Oliveira",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 15,
    "nome": "Juan Almeida",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 16,
    "nome": "Sra. Evelyn da Conceição",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 17,
    "nome": "Antônio Andrade",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 18,
    "nome": "Apollo Martins",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 19,
    "nome": "João Vitor Costela",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 20,
    "nome": "Ian Gomes",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 21,
    "nome": "José Pedro Novais",
    "idade": 20,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 22,
    "nome": "Caio Albuquerque",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 23,
    "nome": "Isis Cardoso",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 24,
    "nome": "Joana Novaes",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 25,
    "nome": "Sra. Maria Luísa Fonseca",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 26,
    "nome": "Sra. Eduarda da Rosa",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 27,
    "nome": "Melina Carvalho",
    "idade": 20,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 28,
    "nome": "Helena Fonseca",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 29,
    "nome": "Joana Lopes",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 30,
    "nome": "Manuela da Conceição",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 31,
    "nome": "Benicio Barros",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 32,
    "nome": "Maria das Neves",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 33,
    "nome": "Luana Duarte",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 34,
    "nome": "Srta. Sophie Borges",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 35,
    "nome": "Rafaela Costela",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 36,
    "nome": "Gustavo Henrique Moura",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 37,
    "nome": "Ana Lívia Araújo",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 38,
    "nome": "Leandro Marques",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 39,
    "nome": "Ana Clara Gomes",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 40,
    "nome": "Joaquim Silva",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 41,
    "nome": "Sr. Antony Cunha",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 42,
    "nome": "Bruna Rodrigues",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 43,
    "nome": "Julia Garcia",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 44,
    "nome": "Dra. Heloisa Abreu",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 45,
    "nome": "Ana da Costa",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 46,
    "nome": "Marcelo Duarte",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 47,
    "nome": "Isabela Machado",
    "idade": 18,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 48,
    "nome": "Davi Luiz da Rosa",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 49,
    "nome": "Sr. Brayan Leão",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 50,
    "nome": "Ana Luiza Campos",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 51,
    "nome": "Yasmin Ramos",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 52,
    "nome": "Rhavi Cavalcante",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 53,
    "nome": "Marcos Vinicius Martins",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 54,
    "nome": "João Gabriel Sampaio",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 55,
    "nome": "Pietra Mendes",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 56,
    "nome": "Kevin Vasconcelos",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 57,
    "nome": "Benjamim Sales",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 58,
    "nome": "Cecilia Ferreira",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 59,
    "nome": "Lunna Dias",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 60,
    "nome": "Ana Beatriz Lopes",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 61,
    "nome": "Dr. Ian Garcia",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 62,
    "nome": "Yago Montenegro",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 63,
    "nome": "Mariana Machado",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 64,
    "nome": "Isabelly da Rocha",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 65,
    "nome": "Paulo Fernandes",
    "idade": 18,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 66,
    "nome": "Luiz Gustavo Pinto",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 67,
    "nome": "Valentina Leão",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 68,
    "nome": "Thomas Pinto",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 69,
    "nome": "Davi Lucca Cavalcanti",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 70,
    "nome": "Fernanda Siqueira",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 71,
    "nome": "Vitor Gabriel Souza",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 72,
    "nome": "Ana Julia Moraes",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 73,
    "nome": "Melissa Aragão",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 74,
    "nome": "Aurora Ramos",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 75,
    "nome": "Luara Pimenta",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 76,
    "nome": "Carolina Santos",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 77,
    "nome": "Bella da Luz",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 78,
    "nome": "Marcos Vinicius Siqueira",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 79,
    "nome": "Maria Laura Campos",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 80,
    "nome": "Ana Lívia Nogueira",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 81,
    "nome": "Luiz Miguel Sales",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 82,
    "nome": "Sr. Carlos Eduardo Silveira",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 83,
    "nome": "Daniel Cardoso",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 84,
    "nome": "Carolina Garcia",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 85,
    "nome": "Lucas Gabriel Rodrigues",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 86,
    "nome": "Sr. Felipe Barbosa",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 87,
    "nome": "Bruna Sá",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 88,
    "nome": "Gabrielly Marques",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 89,
    "nome": "Sara da Cruz",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 90,
    "nome": "Eduardo Rocha",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 91,
    "nome": "Sra. Helena Martins",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 92,
    "nome": "Sra. Isadora Cavalcanti",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 93,
    "nome": "Isabel Siqueira",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 94,
    "nome": "Leandro das Neves",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 95,
    "nome": "Sra. Esther Caldeira",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 96,
    "nome": "Vinícius Rios",
    "idade": 18,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 97,
    "nome": "Maria Fernanda Sousa",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 98,
    "nome": "Felipe Marques",
    "idade": 20,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 99,
    "nome": "Yan Ramos",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 100,
    "nome": "Luara Farias",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 101,
    "nome": "Lunna da Paz",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 102,
    "nome": "Srta. Ana Sophia Santos",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 103,
    "nome": "João Felipe Almeida",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 104,
    "nome": "Lorenzo Santos",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 105,
    "nome": "Ágatha Pimenta",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 106,
    "nome": "Ana Carolina Fonseca",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 107,
    "nome": "Vitor da Luz",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 108,
    "nome": "Ravi Lucca Pimenta",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 109,
    "nome": "Diogo Camargo",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 110,
    "nome": "Maria Luísa Montenegro",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 111,
    "nome": "Ana Cecília Marques",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 112,
    "nome": "Valentina Dias",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 113,
    "nome": "Lavínia Camargo",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 114,
    "nome": "Rodrigo Alves",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 115,
    "nome": "Vitória Farias",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 116,
    "nome": "Diogo Fernandes",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 117,
    "nome": "Maria Albuquerque",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 118,
    "nome": "Melina Gonçalves",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 119,
    "nome": "Gustavo Henrique Oliveira",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 120,
    "nome": "Renan Azevedo",
    "idade": 18,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 121,
    "nome": "Dra. Juliana Novais",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 122,
    "nome": "Heloísa Almeida",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 123,
    "nome": "Benjamin Freitas",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 124,
    "nome": "Bruna da Mota",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 125,
    "nome": "Vicente Fonseca",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 126,
    "nome": "Mirella Dias",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 127,
    "nome": "Sra. Clara da Costa",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 128,
    "nome": "Isabelly Fernandes",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 129,
    "nome": "Maria Helena Farias",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 130,
    "nome": "Elisa Correia",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 131,
    "nome": "Alana da Paz",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 132,
    "nome": "Ana Cecília Silveira",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 133,
    "nome": "Renan Peixoto",
    "idade": 18,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 134,
    "nome": "Eloah Cunha",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 135,
    "nome": "Mariana Monteiro",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 136,
    "nome": "Mateus Santos",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 137,
    "nome": "Renan Ferreira",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 138,
    "nome": "Ana Sophia Guerra",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 139,
    "nome": "Lorena da Cruz",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 140,
    "nome": "Lucas Gabriel Peixoto",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 141,
    "nome": "Sra. Ágatha Barbosa",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 142,
    "nome": "Sr. Francisco Mendonça",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 143,
    "nome": "Nathan Fogaça",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 144,
    "nome": "Lorena Ramos",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 145,
    "nome": "Maitê Nunes",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 146,
    "nome": "Leandro Macedo",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 147,
    "nome": "Pietra da Mota",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 148,
    "nome": "Cauã Freitas",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 149,
    "nome": "Luigi Sousa",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 150,
    "nome": "Helena Oliveira",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 151,
    "nome": "Letícia Cavalcanti",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 152,
    "nome": "Bárbara Rios",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 153,
    "nome": "Dante Nunes",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 154,
    "nome": "Sophie Cardoso",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 155,
    "nome": "Rhavi Nascimento",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 156,
    "nome": "Stella Ribeiro",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 157,
    "nome": "Lavínia Almeida",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 158,
    "nome": "Mariana Teixeira",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 159,
    "nome": "Ana Sophia Sá",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 160,
    "nome": "Giovanna das Neves",
    "idade": 16,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 161,
    "nome": "Danilo Pereira",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 162,
    "nome": "Caroline Pereira",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 163,
    "nome": "Alana Gonçalves",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 164,
    "nome": "Vitor Gabriel Marques",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 165,
    "nome": "Ravy da Cruz",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 166,
    "nome": "Otávio da Cruz",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 167,
    "nome": "Srta. Olivia Gomes",
    "idade": 18,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 168,
    "nome": "Dr. Antony Souza",
    "idade": 20,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 169,
    "nome": "Eloá Macedo",
    "idade": 19,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 170,
    "nome": "Maria Luísa Correia",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 171,
    "nome": "Thiago das Neves",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 172,
    "nome": "Otto Brito",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 173,
    "nome": "Sr. Luiz Fernando Santos",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 174,
    "nome": "Ian Cunha",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 175,
    "nome": "Gael Henrique Alves",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 176,
    "nome": "Isadora da Cruz",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 177,
    "nome": "João Felipe Leão",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 178,
    "nome": "Dra. Maria Julia Farias",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 179,
    "nome": "Ana Nogueira",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 180,
    "nome": "Leandro Macedo",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 181,
    "nome": "Mateus Jesus",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 182,
    "nome": "Benjamim da Rocha",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 183,
    "nome": "Maria Júlia Cavalcante",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 184,
    "nome": "Maria Luísa Mendes",
    "idade": 14,
    "sexo": "Masculino",
    "turma": "3A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 185,
    "nome": "Rael Rios",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 186,
    "nome": "Jade Nunes",
    "idade": 15,
    "sexo": "Feminino",
    "turma": "2B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 187,
    "nome": "Ian Cardoso",
    "idade": 14,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 188,
    "nome": "Otto Nogueira",
    "idade": 19,
    "sexo": "Feminino",
    "turma": "3A",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 189,
    "nome": "Rafaela Moraes",
    "idade": 15,
    "sexo": "Masculino",
    "turma": "3B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 190,
    "nome": "Sra. Ana Lívia Mendes",
    "idade": 22,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 191,
    "nome": "João Miguel Silva",
    "idade": 17,
    "sexo": "Masculino",
    "turma": "1A",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 192,
    "nome": "Gustavo Brito",
    "idade": 18,
    "sexo": "Feminino",
    "turma": "3B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 193,
    "nome": "Rafaela Alves",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 194,
    "nome": "Luiz Fernando Barbosa",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "1B",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 195,
    "nome": "João Guilherme Leão",
    "idade": 22,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2023
  },
  {
    "id_aluno": 196,
    "nome": "Maria Vitória Borges",
    "idade": 16,
    "sexo": "Masculino",
    "turma": "1B",
    "ano_ingresso": 2020
  },
  {
    "id_aluno": 197,
    "nome": "Lucas Gabriel da Cunha",
    "idade": 21,
    "sexo": "Feminino",
    "turma": "1A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 198,
    "nome": "Mateus Silveira",
    "idade": 17,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2021
  },
  {
    "id_aluno": 199,
    "nome": "Ian Carvalho",
    "idade": 21,
    "sexo": "Masculino",
    "turma": "2B",
    "ano_ingresso": 2022
  },
  {
    "id_aluno": 200,
    "nome": "Sr. Cauã Moraes",
    "idade": 20,
    "sexo": "Feminino",
    "turma": "2A",
    "ano_ingresso": 2021
  }
];
    const avaliacoesData = [
  {
    "id_avaliacao": 1,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 2,
    "id_professor": 10,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 3,
    "id_professor": 2,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 4,
    "id_professor": 17,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 5,
    "id_professor": 5,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 6,
    "id_professor": 4,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 7,
    "id_professor": 12,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 8,
    "id_professor": 10,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 9,
    "id_professor": 12,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 10,
    "id_professor": 10,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 11,
    "id_professor": 10,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 12,
    "id_professor": 16,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 13,
    "id_professor": 1,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 14,
    "id_professor": 26,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 15,
    "id_professor": 5,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 16,
    "id_professor": 5,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 17,
    "id_professor": 26,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 18,
    "id_professor": 19,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 19,
    "id_professor": 14,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 20,
    "id_professor": 2,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 21,
    "id_professor": 30,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 22,
    "id_professor": 29,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 23,
    "id_professor": 10,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 24,
    "id_professor": 29,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 25,
    "id_professor": 10,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 26,
    "id_professor": 7,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 27,
    "id_professor": 6,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 28,
    "id_professor": 27,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 29,
    "id_professor": 24,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 30,
    "id_professor": 16,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 31,
    "id_professor": 1,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 32,
    "id_professor": 4,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 33,
    "id_professor": 18,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 34,
    "id_professor": 12,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 35,
    "id_professor": 3,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 36,
    "id_professor": 28,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 37,
    "id_professor": 2,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 38,
    "id_professor": 14,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 39,
    "id_professor": 16,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 40,
    "id_professor": 19,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 41,
    "id_professor": 10,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 42,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 43,
    "id_professor": 15,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 44,
    "id_professor": 29,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 45,
    "id_professor": 11,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 46,
    "id_professor": 26,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 47,
    "id_professor": 13,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 48,
    "id_professor": 16,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 49,
    "id_professor": 27,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 50,
    "id_professor": 24,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 51,
    "id_professor": 27,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 52,
    "id_professor": 20,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 53,
    "id_professor": 5,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 54,
    "id_professor": 25,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 55,
    "id_professor": 5,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 56,
    "id_professor": 17,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 57,
    "id_professor": 21,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 58,
    "id_professor": 15,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 59,
    "id_professor": 25,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 60,
    "id_professor": 15,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 61,
    "id_professor": 22,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 62,
    "id_professor": 15,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 63,
    "id_professor": 5,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 64,
    "id_professor": 28,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 65,
    "id_professor": 24,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 66,
    "id_professor": 11,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 67,
    "id_professor": 3,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 68,
    "id_professor": 26,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 69,
    "id_professor": 20,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 70,
    "id_professor": 22,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 71,
    "id_professor": 20,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 72,
    "id_professor": 14,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 73,
    "id_professor": 13,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 74,
    "id_professor": 8,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 75,
    "id_professor": 29,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 76,
    "id_professor": 13,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 77,
    "id_professor": 11,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 78,
    "id_professor": 18,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 79,
    "id_professor": 2,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 80,
    "id_professor": 22,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 5,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 81,
    "id_professor": 29,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 82,
    "id_professor": 15,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 83,
    "id_professor": 24,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 84,
    "id_professor": 9,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 85,
    "id_professor": 21,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 86,
    "id_professor": 3,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 87,
    "id_professor": 28,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 88,
    "id_professor": 6,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 89,
    "id_professor": 23,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 90,
    "id_professor": 1,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 91,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 92,
    "id_professor": 21,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 93,
    "id_professor": 26,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 94,
    "id_professor": 25,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 95,
    "id_professor": 23,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 96,
    "id_professor": 10,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 97,
    "id_professor": 18,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 98,
    "id_professor": 21,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 99,
    "id_professor": 4,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 5,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 100,
    "id_professor": 21,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 101,
    "id_professor": 18,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 102,
    "id_professor": 3,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 103,
    "id_professor": 7,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 104,
    "id_professor": 20,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 105,
    "id_professor": 18,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 106,
    "id_professor": 19,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 107,
    "id_professor": 25,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 108,
    "id_professor": 2,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 109,
    "id_professor": 19,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 110,
    "id_professor": 17,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 111,
    "id_professor": 7,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 112,
    "id_professor": 25,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 113,
    "id_professor": 16,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 114,
    "id_professor": 17,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 115,
    "id_professor": 29,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 116,
    "id_professor": 1,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 117,
    "id_professor": 4,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 118,
    "id_professor": 22,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 119,
    "id_professor": 30,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 120,
    "id_professor": 18,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 121,
    "id_professor": 6,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 122,
    "id_professor": 1,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 123,
    "id_professor": 9,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 124,
    "id_professor": 26,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 125,
    "id_professor": 7,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 126,
    "id_professor": 8,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 127,
    "id_professor": 27,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 128,
    "id_professor": 23,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 129,
    "id_professor": 27,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 130,
    "id_professor": 29,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 131,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 132,
    "id_professor": 15,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 133,
    "id_professor": 3,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 134,
    "id_professor": 26,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 135,
    "id_professor": 18,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 136,
    "id_professor": 20,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 137,
    "id_professor": 11,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 138,
    "id_professor": 13,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 139,
    "id_professor": 19,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 140,
    "id_professor": 2,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 141,
    "id_professor": 16,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 142,
    "id_professor": 28,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 143,
    "id_professor": 30,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 144,
    "id_professor": 1,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 145,
    "id_professor": 11,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 146,
    "id_professor": 14,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 147,
    "id_professor": 6,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 148,
    "id_professor": 14,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 149,
    "id_professor": 1,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 150,
    "id_professor": 28,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 151,
    "id_professor": 17,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 152,
    "id_professor": 11,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 153,
    "id_professor": 13,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 154,
    "id_professor": 9,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 155,
    "id_professor": 3,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 156,
    "id_professor": 4,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 157,
    "id_professor": 4,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 158,
    "id_professor": 18,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 159,
    "id_professor": 6,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 160,
    "id_professor": 10,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 161,
    "id_professor": 5,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 162,
    "id_professor": 6,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 163,
    "id_professor": 9,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 164,
    "id_professor": 25,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 165,
    "id_professor": 3,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 166,
    "id_professor": 5,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 167,
    "id_professor": 10,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 168,
    "id_professor": 14,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 169,
    "id_professor": 22,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 170,
    "id_professor": 6,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 171,
    "id_professor": 2,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 172,
    "id_professor": 20,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 173,
    "id_professor": 11,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 174,
    "id_professor": 6,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 175,
    "id_professor": 1,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 176,
    "id_professor": 23,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 177,
    "id_professor": 2,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 178,
    "id_professor": 10,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 179,
    "id_professor": 13,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 180,
    "id_professor": 4,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 181,
    "id_professor": 11,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 182,
    "id_professor": 5,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 183,
    "id_professor": 14,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 184,
    "id_professor": 29,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 185,
    "id_professor": 11,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 186,
    "id_professor": 9,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 187,
    "id_professor": 13,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 188,
    "id_professor": 27,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 189,
    "id_professor": 29,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 190,
    "id_professor": 4,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 191,
    "id_professor": 2,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 192,
    "id_professor": 7,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 193,
    "id_professor": 8,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 194,
    "id_professor": 25,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 195,
    "id_professor": 20,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 196,
    "id_professor": 19,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 197,
    "id_professor": 8,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 198,
    "id_professor": 16,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 199,
    "id_professor": 17,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 200,
    "id_professor": 25,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 201,
    "id_professor": 17,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 202,
    "id_professor": 13,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 203,
    "id_professor": 4,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 204,
    "id_professor": 9,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 205,
    "id_professor": 2,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 206,
    "id_professor": 11,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 207,
    "id_professor": 15,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 208,
    "id_professor": 18,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 209,
    "id_professor": 14,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 210,
    "id_professor": 3,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 211,
    "id_professor": 16,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 212,
    "id_professor": 1,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 213,
    "id_professor": 14,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 214,
    "id_professor": 21,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 215,
    "id_professor": 8,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 216,
    "id_professor": 30,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 217,
    "id_professor": 29,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 218,
    "id_professor": 1,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 219,
    "id_professor": 9,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 220,
    "id_professor": 18,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 221,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 222,
    "id_professor": 22,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 223,
    "id_professor": 4,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 224,
    "id_professor": 8,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 225,
    "id_professor": 25,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 226,
    "id_professor": 18,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 227,
    "id_professor": 21,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 228,
    "id_professor": 26,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 229,
    "id_professor": 5,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 230,
    "id_professor": 10,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 231,
    "id_professor": 19,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 232,
    "id_professor": 14,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 233,
    "id_professor": 15,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 234,
    "id_professor": 3,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 235,
    "id_professor": 28,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 236,
    "id_professor": 21,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 237,
    "id_professor": 17,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 238,
    "id_professor": 7,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 239,
    "id_professor": 26,
    "ano": 2021,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 240,
    "id_professor": 5,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 241,
    "id_professor": 12,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 242,
    "id_professor": 18,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 243,
    "id_professor": 6,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 244,
    "id_professor": 26,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 245,
    "id_professor": 8,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 246,
    "id_professor": 18,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 247,
    "id_professor": 14,
    "ano": 2023,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 248,
    "id_professor": 30,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 249,
    "id_professor": 18,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 250,
    "id_professor": 15,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 251,
    "id_professor": 2,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 252,
    "id_professor": 1,
    "ano": 2022,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 253,
    "id_professor": 27,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 254,
    "id_professor": 15,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 255,
    "id_professor": 27,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 3,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 256,
    "id_professor": 20,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 257,
    "id_professor": 10,
    "ano": 2024,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 258,
    "id_professor": 21,
    "ano": 2021,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 259,
    "id_professor": 6,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 260,
    "id_professor": 1,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 261,
    "id_professor": 2,
    "ano": 2023,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 262,
    "id_professor": 30,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 263,
    "id_professor": 30,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 264,
    "id_professor": 16,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 265,
    "id_professor": 9,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 266,
    "id_professor": 20,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 267,
    "id_professor": 9,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 268,
    "id_professor": 27,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 269,
    "id_professor": 22,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 3,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 270,
    "id_professor": 13,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 271,
    "id_professor": 12,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 2,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 272,
    "id_professor": 27,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 273,
    "id_professor": 21,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 2,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 274,
    "id_professor": 7,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 275,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 3,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 276,
    "id_professor": 27,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 5,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 277,
    "id_professor": 17,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 278,
    "id_professor": 10,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 279,
    "id_professor": 2,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 280,
    "id_professor": 6,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 281,
    "id_professor": 24,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 282,
    "id_professor": 18,
    "ano": 2022,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 283,
    "id_professor": 19,
    "ano": 2023,
    "pontualidade": 4,
    "preparo_aula": 2,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 284,
    "id_professor": 3,
    "ano": 2022,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 3,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 285,
    "id_professor": 10,
    "ano": 2021,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 286,
    "id_professor": 3,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 4,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 287,
    "id_professor": 13,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 288,
    "id_professor": 23,
    "ano": 2024,
    "pontualidade": 4,
    "preparo_aula": 3,
    "clareza": 1,
    "relacao_aluno": 2
  },
  {
    "id_avaliacao": 289,
    "id_professor": 4,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 5,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 290,
    "id_professor": 27,
    "ano": 2021,
    "pontualidade": 4,
    "preparo_aula": 5,
    "clareza": 3,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 291,
    "id_professor": 5,
    "ano": 2024,
    "pontualidade": 3,
    "preparo_aula": 4,
    "clareza": 5,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 292,
    "id_professor": 24,
    "ano": 2021,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 293,
    "id_professor": 18,
    "ano": 2022,
    "pontualidade": 2,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 294,
    "id_professor": 9,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 4,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 295,
    "id_professor": 29,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 1,
    "clareza": 2,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 296,
    "id_professor": 14,
    "ano": 2024,
    "pontualidade": 1,
    "preparo_aula": 1,
    "clareza": 1,
    "relacao_aluno": 3
  },
  {
    "id_avaliacao": 297,
    "id_professor": 7,
    "ano": 2024,
    "pontualidade": 2,
    "preparo_aula": 5,
    "clareza": 1,
    "relacao_aluno": 1
  },
  {
    "id_avaliacao": 298,
    "id_professor": 20,
    "ano": 2022,
    "pontualidade": 3,
    "preparo_aula": 3,
    "clareza": 2,
    "relacao_aluno": 5
  },
  {
    "id_avaliacao": 299,
    "id_professor": 17,
    "ano": 2023,
    "pontualidade": 1,
    "preparo_aula": 2,
    "clareza": 4,
    "relacao_aluno": 4
  },
  {
    "id_avaliacao": 300,
    "id_professor": 26,
    "ano": 2023,
    "pontualidade": 5,
    "preparo_aula": 3,
    "clareza": 4,
    "relacao_aluno": 3
  }
];
    const faltasData = [
  {
    "id_falta": 1,
    "id_aluno": 9,
    "disciplina": "Biologia",
    "data": "2024-09-12",
    "justificada": "True"
  },
  {
    "id_falta": 2,
    "id_aluno": 51,
    "disciplina": "Física",
    "data": "2024-11-13",
    "justificada": "True"
  },
  {
    "id_falta": 3,
    "id_aluno": 118,
    "disciplina": "Matemática",
    "data": "2025-03-25",
    "justificada": "False"
  },
  {
    "id_falta": 4,
    "id_aluno": 189,
    "disciplina": "Geografia",
    "data": "2025-06-05",
    "justificada": "False"
  },
  {
    "id_falta": 5,
    "id_aluno": 198,
    "disciplina": "Física",
    "data": "2024-12-21",
    "justificada": "False"
  },
  {
    "id_falta": 6,
    "id_aluno": 25,
    "disciplina": "Física",
    "data": "2024-07-29",
    "justificada": "False"
  },
  {
    "id_falta": 7,
    "id_aluno": 134,
    "disciplina": "Português",
    "data": "2025-06-20",
    "justificada": "True"
  },
  {
    "id_falta": 8,
    "id_aluno": 171,
    "disciplina": "História",
    "data": "2024-08-27",
    "justificada": "False"
  },
  {
    "id_falta": 9,
    "id_aluno": 54,
    "disciplina": "Biologia",
    "data": "2025-04-20",
    "justificada": "False"
  },
  {
    "id_falta": 10,
    "id_aluno": 122,
    "disciplina": "Matemática",
    "data": "2024-10-24",
    "justificada": "True"
  },
  {
    "id_falta": 11,
    "id_aluno": 100,
    "disciplina": "Física",
    "data": "2025-03-06",
    "justificada": "False"
  },
  {
    "id_falta": 12,
    "id_aluno": 175,
    "disciplina": "Química",
    "data": "2025-03-11",
    "justificada": "True"
  },
  {
    "id_falta": 13,
    "id_aluno": 80,
    "disciplina": "História",
    "data": "2024-10-24",
    "justificada": "True"
  },
  {
    "id_falta": 14,
    "id_aluno": 83,
    "disciplina": "Química",
    "data": "2025-07-24",
    "justificada": "True"
  },
  {
    "id_falta": 15,
    "id_aluno": 41,
    "disciplina": "História",
    "data": "2025-03-13",
    "justificada": "True"
  },
  {
    "id_falta": 16,
    "id_aluno": 162,
    "disciplina": "Português",
    "data": "2024-11-01",
    "justificada": "True"
  },
  {
    "id_falta": 17,
    "id_aluno": 187,
    "disciplina": "Biologia",
    "data": "2024-11-17",
    "justificada": "True"
  },
  {
    "id_falta": 18,
    "id_aluno": 11,
    "disciplina": "Física",
    "data": "2024-10-25",
    "justificada": "False"
  },
  {
    "id_falta": 19,
    "id_aluno": 191,
    "disciplina": "Matemática",
    "data": "2025-03-17",
    "justificada": "True"
  },
  {
    "id_falta": 20,
    "id_aluno": 141,
    "disciplina": "Biologia",
    "data": "2024-09-21",
    "justificada": "True"
  },
  {
    "id_falta": 21,
    "id_aluno": 134,
    "disciplina": "Química",
    "data": "2025-03-20",
    "justificada": "True"
  },
  {
    "id_falta": 22,
    "id_aluno": 32,
    "disciplina": "Português",
    "data": "2024-10-01",
    "justificada": "True"
  },
  {
    "id_falta": 23,
    "id_aluno": 65,
    "disciplina": "Inglês",
    "data": "2024-12-17",
    "justificada": "False"
  },
  {
    "id_falta": 24,
    "id_aluno": 124,
    "disciplina": "Geografia",
    "data": "2025-04-13",
    "justificada": "True"
  },
  {
    "id_falta": 25,
    "id_aluno": 164,
    "disciplina": "Física",
    "data": "2024-12-05",
    "justificada": "True"
  },
  {
    "id_falta": 26,
    "id_aluno": 77,
    "disciplina": "Inglês",
    "data": "2025-07-06",
    "justificada": "True"
  },
  {
    "id_falta": 27,
    "id_aluno": 51,
    "disciplina": "Biologia",
    "data": "2024-12-18",
    "justificada": "False"
  },
  {
    "id_falta": 28,
    "id_aluno": 93,
    "disciplina": "Geografia",
    "data": "2025-04-17",
    "justificada": "False"
  },
  {
    "id_falta": 29,
    "id_aluno": 14,
    "disciplina": "Biologia",
    "data": "2025-02-19",
    "justificada": "True"
  },
  {
    "id_falta": 30,
    "id_aluno": 171,
    "disciplina": "História",
    "data": "2024-09-28",
    "justificada": "True"
  },
  {
    "id_falta": 31,
    "id_aluno": 56,
    "disciplina": "Português",
    "data": "2024-09-10",
    "justificada": "True"
  },
  {
    "id_falta": 32,
    "id_aluno": 29,
    "disciplina": "Física",
    "data": "2024-12-30",
    "justificada": "True"
  },
  {
    "id_falta": 33,
    "id_aluno": 61,
    "disciplina": "Matemática",
    "data": "2024-09-28",
    "justificada": "True"
  },
  {
    "id_falta": 34,
    "id_aluno": 163,
    "disciplina": "Geografia",
    "data": "2024-12-01",
    "justificada": "False"
  },
  {
    "id_falta": 35,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
  {
    "id_falta": 36,
    "id_aluno": 84,
    "disciplina": "Inglês",
    "data": "2024-08-30",
    "justificada": "False"
  },
  {
    "id_falta": 37,
    "id_aluno": 4,
    "disciplina": "Matemática",
    "data": "2024-09-26",
    "justificada": "True"
  },
  {
    "id_falta": 38,
    "id_aluno": 43,
    "disciplina": "Inglês",
    "data": "2025-03-01",
    "justificada": "True"
  },
  {
    "id_falta": 39,
    "id_aluno": 71,
    "disciplina": "História",
    "data": "2025-04-07",
    "justificada": "False"
  },
  {
    "id_falta": 40,
    "id_aluno": 150,
    "disciplina": "Geografia",
    "data": "2025-03-11",
    "justificada": "True"
  },
  {
    "id_falta": 41,
    "id_aluno": 31,
    "disciplina": "Física",
    "data": "2025-04-06",
    "justificada": "True"
  },
  {
    "id_falta": 42,
    "id_aluno": 102,
    "disciplina": "Inglês",
    "data": "2025-02-27",
    "justificada": "True"
  },
  {
    "id_falta": 43,
    "id_aluno": 63,
    "disciplina": "Biologia",
    "data": "2024-10-22",
    "justificada": "True"
  },
  {
    "id_falta": 44,
    "id_aluno": 3,
    "disciplina": "Física",
    "data": "2025-03-20",
    "justificada": "True"
  },
  {
    "id_falta": 45,
    "id_aluno": 11,
    "disciplina": "História",
    "data": "2024-10-08",
    "justificada": "True"
  },
  {
    "id_falta": 46,
    "id_aluno": 149,
    "disciplina": "Português",
    "data": "2025-05-26",
    "justificada": "False"
  },
  {
    "id_falta": 47,
    "id_aluno": 177,
    "disciplina": "História",
    "data": "2024-09-03",
    "justificada": "True"
  },
  {
    "id_falta": 48,
    "id_aluno": 122,
    "disciplina": "Geografia",
    "data": "2024-09-28",
    "justificada": "True"
  },
  {
    "id_falta": 49,
    "id_aluno": 177,
    "disciplina": "Matemática",
    "data": "2024-08-11",
    "justificada": "True"
  },
  {
    "id_falta": 50,
    "id_aluno": 153,
    "disciplina": "Inglês",
    "data": "2025-07-09",
    "justificada": "False"
  },
  {
    "id_falta": 51,
    "id_aluno": 40,
    "disciplina": "Química",
    "data": "2025-03-05",
    "justificada": "False"
  },
  {
    "id_falta": 52,
    "id_aluno": 96,
    "disciplina": "Português",
    "data": "2024-08-12",
    "justificada": "False"
  },
  {
    "id_falta": 53,
    "id_aluno": 198,
    "disciplina": "Matemática",
    "data": "2025-06-18",
    "justificada": "True"
  },
  {
    "id_falta": 54,
    "id_aluno": 23,
    "disciplina": "Biologia",
    "data": "2024-10-15",
    "justificada": "True"
  },
  {
    "id_falta": 55,
    "id_aluno": 64,
    "disciplina": "Matemática",
    "data": "2025-01-18",
    "justificada": "True"
  },
  {
    "id_falta": 56,
    "id_aluno": 41,
    "disciplina": "Português",
    "data": "2024-09-03",
    "justificada": "True"
  },
  {
    "id_falta": 57,
    "id_aluno": 128,
    "disciplina": "Física",
    "data": "2024-10-25",
    "justificada": "True"
  },
  {
    "id_falta": 58,
    "id_aluno": 24,
    "disciplina": "Inglês",
    "data": "2024-10-21",
    "justificada": "True"
  },
  {
    "id_falta": 59,
    "id_aluno": 176,
    "disciplina": "Matemática",
    "data": "2024-09-07",
    "justificada": "True"
  },
  {
    "id_falta": 60,
    "id_aluno": 159,
    "disciplina": "Português",
    "data": "2025-05-17",
    "justificada": "False"
  },
  {
    "id_falta": 61,
    "id_aluno": 87,
    "disciplina": "Biologia",
    "data": "2025-02-03",
    "justificada": "True"
  },
  {
    "id_falta": 62,
    "id_aluno": 195,
    "disciplina": "Matemática",
    "data": "2025-01-02",
    "justificada": "True"
  },
  {
    "id_falta": 63,
    "id_aluno": 161,
    "disciplina": "Biologia",
    "data": "2025-05-06",
    "justificada": "True"
  },
  {
    "id_falta": 64,
    "id_aluno": 16,
    "disciplina": "Geografia",
    "data": "2025-03-06",
    "justificada": "True"
  },
  {
    "id_falta": 65,
    "id_aluno": 16,
    "disciplina": "Física",
    "data": "2025-05-14",
    "justificada": "False"
  },
  {
    "id_falta": 66,
    "id_aluno": 92,
    "disciplina": "Geografia",
    "data": "2024-08-07",
    "justificada": "False"
  },
  {
    "id_falta": 67,
    "id_aluno": 166,
    "disciplina": "Geografia",
    "data": "2025-06-19",
    "justificada": "True"
  },
  {
    "id_falta": 68,
    "id_aluno": 40,
    "disciplina": "Biologia",
    "data": "2024-12-04",
    "justificada": "False"
  },
  {
    "id_falta": 69,
    "id_aluno": 180,
    "disciplina": "Biologia",
    "data": "2025-02-07",
    "justificada": "True"
  },
  {
    "id_falta": 70,
    "id_aluno": 138,
    "disciplina": "Física",
    "data": "2024-10-07",
    "justificada": "True"
  },
  {
    "id_falta": 71,
    "id_aluno": 28,
    "disciplina": "Inglês",
    "data": "2025-07-09",
    "justificada": "False"
  },
  {
    "id_falta": 72,
    "id_aluno": 33,
    "disciplina": "Português",
    "data": "2025-01-28",
    "justificada": "False"
  },
  {
    "id_falta": 73,
    "id_aluno": 125,
    "disciplina": "Biologia",
    "data": "2025-02-17",
    "justificada": "False"
  },
  {
    "id_falta": 74,
    "id_aluno": 60,
    "disciplina": "História",
    "data": "2025-03-24",
    "justificada": "True"
  },
  {
    "id_falta": 75,
    "id_aluno": 82,
    "disciplina": "História",
    "data": "2025-02-15",
    "justificada": "True"
  },
  {
    "id_falta": 76,
    "id_aluno": 143,
    "disciplina": "Biologia",
    "data": "2024-10-13",
    "justificada": "False"
  },
  {
    "id_falta": 77,
    "id_aluno": 166,
    "disciplina": "Português",
    "data": "2024-10-09",
    "justificada": "True"
  },
  {
    "id_falta": 78,
    "id_aluno": 194,
    "disciplina": "Matemática",
    "data": "2025-03-28",
    "justificada": "False"
  },
  {
    "id_falta": 79,
    "id_aluno": 89,
    "disciplina": "Português",
    "data": "2025-03-02",
    "justificada": "True"
  },
  {
    "id_falta": 80,
    "id_aluno": 113,
    "disciplina": "Geografia",
    "data": "2025-05-11",
    "justificada": "False"
  },
  {
    "id_falta": 81,
    "id_aluno": 188,
    "disciplina": "Física",
    "data": "2024-08-22",
    "justificada": "True"
  },
  {
    "id_falta": 82,
    "id_aluno": 50,
    "disciplina": "Física",
    "data": "2025-01-14",
    "justificada": "True"
  },
  {
    "id_falta": 83,
    "id_aluno": 6,
    "disciplina": "Biologia",
    "data": "2024-10-12",
    "justificada": "False"
  },
  {
    "id_falta": 84,
    "id_aluno": 177,
    "disciplina": "História",
    "data": "2024-12-21",
    "justificada": "False"
  },
  {
    "id_falta": 85,
    "id_aluno": 97,
    "disciplina": "Biologia",
    "data": "2025-05-28",
    "justificada": "False"
  },
  {
    "id_falta": 86,
    "id_aluno": 92,
    "disciplina": "Geografia",
    "data": "2024-12-12",
    "justificada": "True"
  },
  {
    "id_falta": 87,
    "id_aluno": 186,
    "disciplina": "História",
    "data": "2025-04-11",
    "justificada": "True"
  },
  {
    "id_falta": 88,
    "id_aluno": 35,
    "disciplina": "Português",
    "data": "2025-03-28",
    "justificada": "False"
  },
  {
    "id_falta": 89,
    "id_aluno": 65,
    "disciplina": "Biologia",
    "data": "2024-09-18",
    "justificada": "False"
  },
  {
    "id_falta": 90,
    "id_aluno": 11,
    "disciplina": "Física",
    "data": "2024-10-07",
    "justificada": "True"
  },
  {
    "id_falta": 91,
    "id_aluno": 125,
    "disciplina": "Inglês",
    "data": "2024-11-24",
    "justificada": "False"
  },
  {
    "id_falta": 92,
    "id_aluno": 181,
    "disciplina": "Matemática",
    "data": "2024-12-04",
    "justificada": "False"
  },
  {
    "id_falta": 93,
    "id_aluno": 113,
    "disciplina": "História",
    "data": "2024-11-05",
    "justificada": "False"
  },
  {
    "id_falta": 94,
    "id_aluno": 144,
    "disciplina": "Matemática",
    "data": "2024-12-23",
    "justificada": "False"
  },
  {
    "id_falta": 95,
    "id_aluno": 76,
    "disciplina": "Inglês",
    "data": "2024-11-20",
    "justificada": "False"
  },
  {
    "id_falta": 96,
    "id_aluno": 139,
    "disciplina": "Matemática",
    "data": "2025-06-13",
    "justificada": "True"
  },
  {
    "id_falta": 97,
    "id_aluno": 179,
    "disciplina": "Português",
    "data": "2024-09-04",
    "justificada": "False"
  },
  {
    "id_falta": 98,
    "id_aluno": 126,
    "disciplina": "Química",
    "data": "2024-11-07",
    "justificada": "False"
  },
  {
    "id_falta": 99,
    "id_aluno": 49,
    "disciplina": "Matemática",
    "data": "2024-10-13",
    "justificada": "False"
  },
  {
    "id_falta": 100,
    "id_aluno": 146,
    "disciplina": "Português",
    "data": "2025-07-29",
    "justificada": "True"
  },
  {
    "id_falta": 101,
    "id_aluno": 48,
    "disciplina": "Química",
    "data": "2025-01-15",
    "justificada": "True"
  },
  {
    "id_falta": 102,
    "id_aluno": 140,
    "disciplina": "Química",
    "data": "2025-04-29",
    "justificada": "False"
  },
  {
    "id_falta": 103,
    "id_aluno": 90,
    "disciplina": "História",
    "data": "2024-11-03",
    "justificada": "False"
  },
  {
    "id_falta": 104,
    "id_aluno": 83,
    "disciplina": "Inglês",
    "data": "2024-08-23",
    "justificada": "True"
  },
  {
    "id_falta": 105,
    "id_aluno": 188,
    "disciplina": "Física",
    "data": "2025-06-29",
    "justificada": "True"
  },
  {
    "id_falta": 106,
    "id_aluno": 120,
    "disciplina": "Biologia",
    "data": "2025-03-18",
    "justificada": "False"
  },
  {
    "id_falta": 107,
    "id_aluno": 71,
    "disciplina": "Física",
    "data": "2024-12-03",
    "justificada": "True"
  },
  {
    "id_falta": 108,
    "id_aluno": 154,
    "disciplina": "Geografia",
    "data": "2024-08-22",
    "justificada": "False"
  },
  {
    "id_falta": 109,
    "id_aluno": 142,
    "disciplina": "Português",
    "data": "2025-05-23",
    "justificada": "False"
  },
  {
    "id_falta": 110,
    "id_aluno": 42,
    "disciplina": "Inglês",
    "data": "2024-09-17",
    "justificada": "True"
  },
  {
    "id_falta": 111,
    "id_aluno": 18,
    "disciplina": "História",
    "data": "2025-04-24",
    "justificada": "True"
  },
  {
    "id_falta": 112,
    "id_aluno": 136,
    "disciplina": "Português",
    "data": "2024-10-10",
    "justificada": "True"
  },
  {
    "id_falta": 113,
    "id_aluno": 40,
    "disciplina": "Inglês",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 114,
    "id_aluno": 116,
    "disciplina": "Português",
    "data": "2024-10-26",
    "justificada": "False"
  },
  {
    "id_falta": 115,
    "id_aluno": 76,
    "disciplina": "Inglês",
    "data": "2025-05-15",
    "justificada": "True"
  },
  {
    "id_falta": 116,
    "id_aluno": 68,
    "disciplina": "Biologia",
    "data": "2025-03-04",
    "justificada": "True"
  },
  {
    "id_falta": 117,
    "id_aluno": 139,
    "disciplina": "Inglês",
    "data": "2025-03-23",
    "justificada": "True"
  },
  {
    "id_falta": 118,
    "id_aluno": 94,
    "disciplina": "Inglês",
    "data": "2024-12-30",
    "justificada": "False"
  },
  {
    "id_falta": 119,
    "id_aluno": 117,
    "disciplina": "Geografia",
    "data": "2025-07-27",
    "justificada": "True"
  },
  {
    "id_falta": 120,
    "id_aluno": 1,
    "disciplina": "Geografia",
    "data": "2025-07-25",
    "justificada": "False"
  },
  {
    "id_falta": 121,
    "id_aluno": 199,
    "disciplina": "História",
    "data": "2025-06-22",
    "justificada": "True"
  },
  {
    "id_falta": 122,
    "id_aluno": 164,
    "disciplina": "Biologia",
    "data": "2025-06-04",
    "justificada": "False"
  },
  {
    "id_falta": 123,
    "id_aluno": 130,
    "disciplina": "Física",
    "data": "2025-07-28",
    "justificada": "True"
  },
  {
    "id_falta": 124,
    "id_aluno": 98,
    "disciplina": "Química",
    "data": "2024-09-04",
    "justificada": "True"
  },
  {
    "id_falta": 125,
    "id_aluno": 188,
    "disciplina": "História",
    "data": "2025-07-28",
    "justificada": "False"
  },
  {
    "id_falta": 126,
    "id_aluno": 48,
    "disciplina": "Física",
    "data": "2024-10-18",
    "justificada": "False"
  },
  {
    "id_falta": 127,
    "id_aluno": 5,
    "disciplina": "Física",
    "data": "2024-08-24",
    "justificada": "False"
  },
  {
    "id_falta": 128,
    "id_aluno": 159,
    "disciplina": "Inglês",
    "data": "2024-08-24",
    "justificada": "False"
  },
  {
    "id_falta": 129,
    "id_aluno": 94,
    "disciplina": "Inglês",
    "data": "2024-09-16",
    "justificada": "False"
  },
  {
    "id_falta": 130,
    "id_aluno": 199,
    "disciplina": "Matemática",
    "data": "2025-04-17",
    "justificada": "False"
  },
  {
    "id_falta": 131,
    "id_aluno": 159,
    "disciplina": "Português",
    "data": "2024-12-18",
    "justificada": "False"
  },
  {
    "id_falta": 132,
    "id_aluno": 62,
    "disciplina": "Inglês",
    "data": "2025-03-07",
    "justificada": "False"
  },
  {
    "id_falta": 133,
    "id_aluno": 83,
    "disciplina": "Português",
    "data": "2025-03-02",
    "justificada": "False"
  },
  {
    "id_falta": 134,
    "id_aluno": 185,
    "disciplina": "Física",
    "data": "2025-04-21",
    "justificada": "False"
  },
  {
    "id_falta": 135,
    "id_aluno": 17,
    "disciplina": "Inglês",
    "data": "2024-10-28",
    "justificada": "True"
  },
  {
    "id_falta": 136,
    "id_aluno": 169,
    "disciplina": "Inglês",
    "data": "2025-06-24",
    "justificada": "False"
  },
  {
    "id_falta": 137,
    "id_aluno": 138,
    "disciplina": "História",
    "data": "2024-11-28",
    "justificada": "True"
  },
  {
    "id_falta": 138,
    "id_aluno": 100,
    "disciplina": "Biologia",
    "data": "2024-10-02",
    "justificada": "True"
  },
  {
    "id_falta": 139,
    "id_aluno": 49,
    "disciplina": "Física",
    "data": "2025-01-17",
    "justificada": "False"
  },
  {
    "id_falta": 140,
    "id_aluno": 135,
    "disciplina": "História",
    "data": "2024-09-17",
    "justificada": "False"
  },
  {
    "id_falta": 141,
    "id_aluno": 175,
    "disciplina": "Português",
    "data": "2024-10-16",
    "justificada": "False"
  },
  {
    "id_falta": 142,
    "id_aluno": 128,
    "disciplina": "Química",
    "data": "2025-07-07",
    "justificada": "True"
  },
  {
    "id_falta": 143,
    "id_aluno": 197,
    "disciplina": "Português",
    "data": "2025-06-28",
    "justificada": "True"
  },
  {
    "id_falta": 144,
    "id_aluno": 142,
    "disciplina": "Física",
    "data": "2025-03-12",
    "justificada": "True"
  },
  {
    "id_falta": 145,
    "id_aluno": 40,
    "disciplina": "Português",
    "data": "2024-11-28",
    "justificada": "True"
  },
  {
    "id_falta": 146,
    "id_aluno": 157,
    "disciplina": "Biologia",
    "data": "2024-10-09",
    "justificada": "True"
  },
  {
    "id_falta": 147,
    "id_aluno": 73,
    "disciplina": "Inglês",
    "data": "2025-04-12",
    "justificada": "True"
  },
  {
    "id_falta": 148,
    "id_aluno": 83,
    "disciplina": "Química",
    "data": "2025-03-22",
    "justificada": "False"
  },
  {
    "id_falta": 149,
    "id_aluno": 105,
    "disciplina": "Química",
    "data": "2025-04-20",
    "justificada": "True"
  },
  {
    "id_falta": 150,
    "id_aluno": 165,
    "disciplina": "Geografia",
    "data": "2024-09-27",
    "justificada": "True"
  },
  {
    "id_falta": 151,
    "id_aluno": 83,
    "disciplina": "Geografia",
    "data": "2024-12-22",
    "justificada": "False"
  },
  {
    "id_falta": 152,
    "id_aluno": 29,
    "disciplina": "História",
    "data": "2025-05-24",
    "justificada": "False"
  },
  {
    "id_falta": 153,
    "id_aluno": 25,
    "disciplina": "Inglês",
    "data": "2024-08-26",
    "justificada": "True"
  },
  {
    "id_falta": 154,
    "id_aluno": 134,
    "disciplina": "Química",
    "data": "2025-07-04",
    "justificada": "False"
  },
  {
    "id_falta": 155,
    "id_aluno": 169,
    "disciplina": "Português",
    "data": "2025-05-23",
    "justificada": "True"
  },
  {
    "id_falta": 156,
    "id_aluno": 18,
    "disciplina": "Física",
    "data": "2024-11-27",
    "justificada": "True"
  },
  {
    "id_falta": 157,
    "id_aluno": 12,
    "disciplina": "Geografia",
    "data": "2024-12-12",
    "justificada": "False"
  },
  {
    "id_falta": 158,
    "id_aluno": 34,
    "disciplina": "Química",
    "data": "2024-07-31",
    "justificada": "False"
  },
  {
    "id_falta": 159,
    "id_aluno": 46,
    "disciplina": "Química",
    "data": "2025-07-29",
    "justificada": "True"
  },
  {
    "id_falta": 160,
    "id_aluno": 9,
    "disciplina": "Física",
    "data": "2024-12-21",
    "justificada": "False"
  },
  {
    "id_falta": 161,
    "id_aluno": 52,
    "disciplina": "Geografia",
    "data": "2025-05-28",
    "justificada": "False"
  },
  {
    "id_falta": 162,
    "id_aluno": 28,
    "disciplina": "História",
    "data": "2025-02-11",
    "justificada": "False"
  },
  {
    "id_falta": 163,
    "id_aluno": 125,
    "disciplina": "Português",
    "data": "2025-01-30",
    "justificada": "False"
  },
  {
    "id_falta": 164,
    "id_aluno": 50,
    "disciplina": "Inglês",
    "data": "2025-04-26",
    "justificada": "False"
  },
  {
    "id_falta": 165,
    "id_aluno": 26,
    "disciplina": "Português",
    "data": "2025-01-21",
    "justificada": "True"
  },
  {
    "id_falta": 166,
    "id_aluno": 9,
    "disciplina": "Inglês",
    "data": "2025-02-12",
    "justificada": "True"
  },
  {
    "id_falta": 167,
    "id_aluno": 147,
    "disciplina": "Física",
    "data": "2024-09-29",
    "justificada": "False"
  },
  {
    "id_falta": 168,
    "id_aluno": 165,
    "disciplina": "Português",
    "data": "2024-08-02",
    "justificada": "True"
  },
  {
    "id_falta": 169,
    "id_aluno": 100,
    "disciplina": "Inglês",
    "data": "2025-02-09",
    "justificada": "False"
  },
  {
    "id_falta": 170,
    "id_aluno": 169,
    "disciplina": "História",
    "data": "2025-02-21",
    "justificada": "False"
  },
  {
    "id_falta": 171,
    "id_aluno": 126,
    "disciplina": "Biologia",
    "data": "2025-07-13",
    "justificada": "False"
  },
  {
    "id_falta": 172,
    "id_aluno": 135,
    "disciplina": "Química",
    "data": "2025-07-24",
    "justificada": "False"
  },
  {
    "id_falta": 173,
    "id_aluno": 160,
    "disciplina": "Português",
    "data": "2025-07-23",
    "justificada": "False"
  },
  {
    "id_falta": 174,
    "id_aluno": 180,
    "disciplina": "Português",
    "data": "2025-07-05",
    "justificada": "False"
  },
  {
    "id_falta": 175,
    "id_aluno": 152,
    "disciplina": "Química",
    "data": "2025-06-27",
    "justificada": "True"
  },
  {
    "id_falta": 176,
    "id_aluno": 66,
    "disciplina": "Física",
    "data": "2024-12-08",
    "justificada": "True"
  },
  {
    "id_falta": 177,
    "id_aluno": 13,
    "disciplina": "Inglês",
    "data": "2024-09-17",
    "justificada": "True"
  },
  {
    "id_falta": 178,
    "id_aluno": 94,
    "disciplina": "Matemática",
    "data": "2025-01-25",
    "justificada": "False"
  },
  {
    "id_falta": 179,
    "id_aluno": 57,
    "disciplina": "Português",
    "data": "2025-07-19",
    "justificada": "True"
  },
  {
    "id_falta": 180,
    "id_aluno": 156,
    "disciplina": "Geografia",
    "data": "2025-07-14",
    "justificada": "False"
  },
  {
    "id_falta": 181,
    "id_aluno": 184,
    "disciplina": "História",
    "data": "2025-05-14",
    "justificada": "False"
  },
  {
    "id_falta": 182,
    "id_aluno": 19,
    "disciplina": "Matemática",
    "data": "2025-07-24",
    "justificada": "True"
  },
  {
    "id_falta": 183,
    "id_aluno": 4,
    "disciplina": "História",
    "data": "2025-01-23",
    "justificada": "False"
  },
  {
    "id_falta": 184,
    "id_aluno": 54,
    "disciplina": "História",
    "data": "2024-10-03",
    "justificada": "False"
  },
  {
    "id_falta": 185,
    "id_aluno": 168,
    "disciplina": "Inglês",
    "data": "2025-03-17",
    "justificada": "False"
  },
  {
    "id_falta": 186,
    "id_aluno": 126,
    "disciplina": "Biologia",
    "data": "2025-06-02",
    "justificada": "True"
  },
  {
    "id_falta": 187,
    "id_aluno": 21,
    "disciplina": "Química",
    "data": "2025-02-12",
    "justificada": "False"
  },
  {
    "id_falta": 188,
    "id_aluno": 120,
    "disciplina": "Inglês",
    "data": "2024-09-17",
    "justificada": "False"
  },
  {
    "id_falta": 189,
    "id_aluno": 164,
    "disciplina": "Geografia",
    "data": "2025-04-03",
    "justificada": "False"
  },
  {
    "id_falta": 190,
    "id_aluno": 16,
    "disciplina": "Geografia",
    "data": "2024-07-29",
    "justificada": "True"
  },
  {
    "id_falta": 191,
    "id_aluno": 93,
    "disciplina": "Física",
    "data": "2025-02-26",
    "justificada": "True"
  },
  {
    "id_falta": 192,
    "id_aluno": 143,
    "disciplina": "Biologia",
    "data": "2025-07-09",
    "justificada": "False"
  },
  {
    "id_falta": 193,
    "id_aluno": 191,
    "disciplina": "Biologia",
    "data": "2024-07-30",
    "justificada": "False"
  },
  {
    "id_falta": 194,
    "id_aluno": 107,
    "disciplina": "Química",
    "data": "2024-11-17",
    "justificada": "False"
  },
  {
    "id_falta": 195,
    "id_aluno": 95,
    "disciplina": "Física",
    "data": "2025-02-08",
    "justificada": "False"
  },
  {
    "id_falta": 196,
    "id_aluno": 182,
    "disciplina": "Português",
    "data": "2025-05-08",
    "justificada": "False"
  },
  {
    "id_falta": 197,
    "id_aluno": 15,
    "disciplina": "Matemática",
    "data": "2025-06-30",
    "justificada": "False"
  },
  {
    "id_falta": 198,
    "id_aluno": 158,
    "disciplina": "Química",
    "data": "2025-07-01",
    "justificada": "False"
  },
  {
    "id_falta": 199,
    "id_aluno": 69,
    "disciplina": "História",
    "data": "2025-05-15",
    "justificada": "True"
  },
  {
    "id_falta": 200,
    "id_aluno": 136,
    "disciplina": "Biologia",
    "data": "2025-03-12",
    "justificada": "True"
  },
  {
    "id_falta": 201,
    "id_aluno": 11,
    "disciplina": "Matemática",
    "data": "2025-05-23",
    "justificada": "True"
  },
  {
    "id_falta": 202,
    "id_aluno": 188,
    "disciplina": "Física",
    "data": "2024-11-05",
    "justificada": "True"
  },
  {
    "id_falta": 203,
    "id_aluno": 19,
    "disciplina": "Matemática",
    "data": "2024-08-09",
    "justificada": "False"
  },
  {
    "id_falta": 204,
    "id_aluno": 78,
    "disciplina": "Matemática",
    "data": "2025-03-17",
    "justificada": "False"
  },
  {
    "id_falta": 205,
    "id_aluno": 20,
    "disciplina": "Física",
    "data": "2025-05-24",
    "justificada": "True"
  },
  {
    "id_falta": 206,
    "id_aluno": 56,
    "disciplina": "Português",
    "data": "2024-08-06",
    "justificada": "False"
  },
  {
    "id_falta": 207,
    "id_aluno": 133,
    "disciplina": "Biologia",
    "data": "2024-12-02",
    "justificada": "False"
  },
  {
    "id_falta": 208,
    "id_aluno": 25,
    "disciplina": "Matemática",
    "data": "2025-04-22",
    "justificada": "True"
  },
  {
    "id_falta": 209,
    "id_aluno": 26,
    "disciplina": "Geografia",
    "data": "2024-09-12",
    "justificada": "False"
  },
  {
    "id_falta": 210,
    "id_aluno": 186,
    "disciplina": "Química",
    "data": "2025-03-30",
    "justificada": "False"
  },
  {
    "id_falta": 211,
    "id_aluno": 60,
    "disciplina": "Química",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 212,
    "id_aluno": 137,
    "disciplina": "Física",
    "data": "2024-10-05",
    "justificada": "False"
  },
  {
    "id_falta": 213,
    "id_aluno": 99,
    "disciplina": "Química",
    "data": "2025-02-21",
    "justificada": "False"
  },
  {
    "id_falta": 214,
    "id_aluno": 49,
    "disciplina": "Química",
    "data": "2024-11-03",
    "justificada": "True"
  },
  {
    "id_falta": 215,
    "id_aluno": 50,
    "disciplina": "Química",
    "data": "2024-12-03",
    "justificada": "True"
  },
  {
    "id_falta": 216,
    "id_aluno": 135,
    "disciplina": "Química",
    "data": "2024-11-11",
    "justificada": "True"
  },
  {
    "id_falta": 217,
    "id_aluno": 169,
    "disciplina": "Geografia",
    "data": "2025-05-06",
    "justificada": "True"
  },
  {
    "id_falta": 218,
    "id_aluno": 64,
    "disciplina": "História",
    "data": "2024-10-22",
    "justificada": "False"
  },
  {
    "id_falta": 219,
    "id_aluno": 146,
    "disciplina": "Inglês",
    "data": "2025-01-25",
    "justificada": "True"
  },
  {
    "id_falta": 220,
    "id_aluno": 161,
    "disciplina": "História",
    "data": "2025-07-17",
    "justificada": "True"
  },
  {
    "id_falta": 221,
    "id_aluno": 46,
    "disciplina": "Geografia",
    "data": "2024-10-27",
    "justificada": "False"
  },
  {
    "id_falta": 222,
    "id_aluno": 143,
    "disciplina": "Química",
    "data": "2025-05-06",
    "justificada": "True"
  },
  {
    "id_falta": 223,
    "id_aluno": 192,
    "disciplina": "Física",
    "data": "2024-09-13",
    "justificada": "False"
  },
  {
    "id_falta": 224,
    "id_aluno": 143,
    "disciplina": "Química",
    "data": "2025-07-26",
    "justificada": "True"
  },
  {
    "id_falta": 225,
    "id_aluno": 107,
    "disciplina": "História",
    "data": "2025-06-09",
    "justificada": "True"
  },
  {
    "id_falta": 226,
    "id_aluno": 192,
    "disciplina": "Biologia",
    "data": "2025-05-03",
    "justificada": "False"
  },
  {
    "id_falta": 227,
    "id_aluno": 28,
    "disciplina": "História",
    "data": "2024-10-21",
    "justificada": "True"
  },
  {
    "id_falta": 228,
    "id_aluno": 197,
    "disciplina": "História",
    "data": "2025-07-14",
    "justificada": "False"
  },
  {
    "id_falta": 229,
    "id_aluno": 164,
    "disciplina": "Matemática",
    "data": "2025-06-06",
    "justificada": "False"
  },
  {
    "id_falta": 230,
    "id_aluno": 148,
    "disciplina": "Português",
    "data": "2025-06-12",
    "justificada": "False"
  },
  {
    "id_falta": 231,
    "id_aluno": 92,
    "disciplina": "Matemática",
    "data": "2025-01-22",
    "justificada": "False"
  },
  {
    "id_falta": 232,
    "id_aluno": 173,
    "disciplina": "História",
    "data": "2024-08-04",
    "justificada": "True"
  },
  {
    "id_falta": 233,
    "id_aluno": 118,
    "disciplina": "Inglês",
    "data": "2024-12-18",
    "justificada": "False"
  },
  {
    "id_falta": 234,
    "id_aluno": 180,
    "disciplina": "Química",
    "data": "2025-05-19",
    "justificada": "True"
  },
  {
    "id_falta": 235,
    "id_aluno": 171,
    "disciplina": "História",
    "data": "2025-04-20",
    "justificada": "False"
  },
  {
    "id_falta": 236,
    "id_aluno": 110,
    "disciplina": "Português",
    "data": "2024-09-16",
    "justificada": "False"
  },
  {
    "id_falta": 237,
    "id_aluno": 27,
    "disciplina": "História",
    "data": "2025-07-29",
    "justificada": "False"
  },
  {
    "id_falta": 238,
    "id_aluno": 43,
    "disciplina": "Química",
    "data": "2025-07-24",
    "justificada": "False"
  },
  {
    "id_falta": 239,
    "id_aluno": 47,
    "disciplina": "Inglês",
    "data": "2025-01-02",
    "justificada": "True"
  },
  {
    "id_falta": 240,
    "id_aluno": 141,
    "disciplina": "Química",
    "data": "2024-10-29",
    "justificada": "False"
  },
  {
    "id_falta": 241,
    "id_aluno": 103,
    "disciplina": "História",
    "data": "2025-04-04",
    "justificada": "True"
  },
  {
    "id_falta": 242,
    "id_aluno": 130,
    "disciplina": "Inglês",
    "data": "2025-01-31",
    "justificada": "True"
  },
  {
    "id_falta": 243,
    "id_aluno": 87,
    "disciplina": "Química",
    "data": "2024-09-04",
    "justificada": "False"
  },
  {
    "id_falta": 244,
    "id_aluno": 169,
    "disciplina": "Inglês",
    "data": "2025-01-21",
    "justificada": "False"
  },
  {
    "id_falta": 245,
    "id_aluno": 41,
    "disciplina": "Química",
    "data": "2025-03-22",
    "justificada": "False"
  },
  {
    "id_falta": 246,
    "id_aluno": 137,
    "disciplina": "Física",
    "data": "2024-09-21",
    "justificada": "True"
  },
  {
    "id_falta": 247,
    "id_aluno": 154,
    "disciplina": "Geografia",
    "data": "2025-02-01",
    "justificada": "False"
  },
  {
    "id_falta": 248,
    "id_aluno": 114,
    "disciplina": "História",
    "data": "2025-07-04",
    "justificada": "False"
  },
  {
    "id_falta": 249,
    "id_aluno": 91,
    "disciplina": "Química",
    "data": "2025-07-17",
    "justificada": "False"
  },
  {
    "id_falta": 250,
    "id_aluno": 81,
    "disciplina": "Matemática",
    "data": "2025-02-19",
    "justificada": "True"
  },
  {
    "id_falta": 251,
    "id_aluno": 141,
    "disciplina": "Inglês",
    "data": "2025-04-27",
    "justificada": "False"
  },
  {
    "id_falta": 252,
    "id_aluno": 84,
    "disciplina": "Geografia",
    "data": "2024-11-12",
    "justificada": "True"
  },
  {
    "id_falta": 253,
    "id_aluno": 96,
    "disciplina": "Biologia",
    "data": "2025-04-19",
    "justificada": "True"
  },
  {
    "id_falta": 254,
    "id_aluno": 106,
    "disciplina": "Química",
    "data": "2024-11-27",
    "justificada": "False"
  },
  {
    "id_falta": 255,
    "id_aluno": 196,
    "disciplina": "Física",
    "data": "2025-07-08",
    "justificada": "False"
  },
  {
    "id_falta": 256,
    "id_aluno": 163,
    "disciplina": "Matemática",
    "data": "2025-07-10",
    "justificada": "True"
  },
  {
    "id_falta": 257,
    "id_aluno": 111,
    "disciplina": "Matemática",
    "data": "2024-09-23",
    "justificada": "False"
  },
  {
    "id_falta": 258,
    "id_aluno": 186,
    "disciplina": "Inglês",
    "data": "2025-06-07",
    "justificada": "False"
  },
  {
    "id_falta": 259,
    "id_aluno": 83,
    "disciplina": "Física",
    "data": "2024-09-25",
    "justificada": "True"
  },
  {
    "id_falta": 260,
    "id_aluno": 156,
    "disciplina": "Português",
    "data": "2025-04-07",
    "justificada": "True"
  },
  {
    "id_falta": 261,
    "id_aluno": 62,
    "disciplina": "Inglês",
    "data": "2025-03-12",
    "justificada": "True"
  },
  {
    "id_falta": 262,
    "id_aluno": 145,
    "disciplina": "Português",
    "data": "2025-06-17",
    "justificada": "False"
  },
  {
    "id_falta": 263,
    "id_aluno": 140,
    "disciplina": "História",
    "data": "2024-09-11",
    "justificada": "False"
  },
  {
    "id_falta": 264,
    "id_aluno": 55,
    "disciplina": "Biologia",
    "data": "2024-11-21",
    "justificada": "True"
  },
  {
    "id_falta": 265,
    "id_aluno": 97,
    "disciplina": "Inglês",
    "data": "2025-05-21",
    "justificada": "False"
  },
  {
    "id_falta": 266,
    "id_aluno": 197,
    "disciplina": "Português",
    "data": "2025-03-18",
    "justificada": "False"
  },
  {
    "id_falta": 267,
    "id_aluno": 141,
    "disciplina": "Português",
    "data": "2024-08-22",
    "justificada": "True"
  },
  {
    "id_falta": 268,
    "id_aluno": 191,
    "disciplina": "Geografia",
    "data": "2024-10-12",
    "justificada": "False"
  },
  {
    "id_falta": 269,
    "id_aluno": 66,
    "disciplina": "Inglês",
    "data": "2025-03-05",
    "justificada": "True"
  },
  {
    "id_falta": 270,
    "id_aluno": 93,
    "disciplina": "Português",
    "data": "2024-09-10",
    "justificada": "False"
  },
  {
    "id_falta": 271,
    "id_aluno": 116,
    "disciplina": "Biologia",
    "data": "2024-09-12",
    "justificada": "False"
  },
  {
    "id_falta": 272,
    "id_aluno": 115,
    "disciplina": "Matemática",
    "data": "2025-07-09",
    "justificada": "False"
  },
  {
    "id_falta": 273,
    "id_aluno": 102,
    "disciplina": "Física",
    "data": "2024-12-21",
    "justificada": "False"
  },
  {
    "id_falta": 274,
    "id_aluno": 1,
    "disciplina": "Matemática",
    "data": "2025-04-17",
    "justificada": "True"
  },
  {
    "id_falta": 275,
    "id_aluno": 186,
    "disciplina": "Inglês",
    "data": "2024-07-29",
    "justificada": "False"
  },
  {
    "id_falta": 276,
    "id_aluno": 9,
    "disciplina": "Inglês",
    "data": "2025-03-19",
    "justificada": "False"
  },
  {
    "id_falta": 277,
    "id_aluno": 73,
    "disciplina": "Inglês",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 278,
    "id_aluno": 153,
    "disciplina": "Física",
    "data": "2025-05-22",
    "justificada": "False"
  },
  {
    "id_falta": 279,
    "id_aluno": 5,
    "disciplina": "Química",
    "data": "2025-05-05",
    "justificada": "True"
  },
  {
    "id_falta": 280,
    "id_aluno": 133,
    "disciplina": "Física",
    "data": "2024-10-06",
    "justificada": "True"
  },
  {
    "id_falta": 281,
    "id_aluno": 35,
    "disciplina": "Biologia",
    "data": "2024-10-06",
    "justificada": "True"
  },
  {
    "id_falta": 282,
    "id_aluno": 78,
    "disciplina": "Biologia",
    "data": "2025-01-04",
    "justificada": "False"
  },
  {
    "id_falta": 283,
    "id_aluno": 2,
    "disciplina": "História",
    "data": "2025-07-12",
    "justificada": "True"
  },
  {
    "id_falta": 284,
    "id_aluno": 77,
    "disciplina": "Matemática",
    "data": "2024-11-16",
    "justificada": "False"
  },
  {
    "id_falta": 285,
    "id_aluno": 57,
    "disciplina": "Biologia",
    "data": "2024-11-10",
    "justificada": "False"
  },
  {
    "id_falta": 286,
    "id_aluno": 55,
    "disciplina": "Biologia",
    "data": "2024-09-19",
    "justificada": "False"
  },
  {
    "id_falta": 287,
    "id_aluno": 81,
    "disciplina": "Matemática",
    "data": "2025-06-13",
    "justificada": "True"
  },
  {
    "id_falta": 288,
    "id_aluno": 6,
    "disciplina": "Inglês",
    "data": "2024-11-09",
    "justificada": "True"
  },
  {
    "id_falta": 289,
    "id_aluno": 198,
    "disciplina": "História",
    "data": "2025-03-25",
    "justificada": "False"
  },
  {
    "id_falta": 290,
    "id_aluno": 177,
    "disciplina": "Matemática",
    "data": "2025-06-22",
    "justificada": "False"
  },
  {
    "id_falta": 291,
    "id_aluno": 71,
    "disciplina": "Biologia",
    "data": "2025-03-23",
    "justificada": "True"
  },
  {
    "id_falta": 292,
    "id_aluno": 142,
    "disciplina": "Matemática",
    "data": "2024-10-14",
    "justificada": "True"
  },
  {
    "id_falta": 293,
    "id_aluno": 131,
    "disciplina": "Biologia",
    "data": "2025-07-29",
    "justificada": "True"
  },
  {
    "id_falta": 294,
    "id_aluno": 143,
    "disciplina": "Inglês",
    "data": "2025-07-04",
    "justificada": "False"
  },
  {
    "id_falta": 295,
    "id_aluno": 147,
    "disciplina": "Português",
    "data": "2024-08-03",
    "justificada": "False"
  },
  {
    "id_falta": 296,
    "id_aluno": 147,
    "disciplina": "História",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 297,
    "id_aluno": 40,
    "disciplina": "Português",
    "data": "2024-08-05",
    "justificada": "False"
  },
  {
    "id_falta": 298,
    "id_aluno": 25,
    "disciplina": "Biologia",
    "data": "2024-10-04",
    "justificada": "True"
  },
  {
    "id_falta": 299,
    "id_aluno": 10,
    "disciplina": "Biologia",
    "data": "2025-06-19",
    "justificada": "True"
  },
  {
    "id_falta": 300,
    "id_aluno": 118,
    "disciplina": "História",
    "data": "2024-08-22",
    "justificada": "False"
  },
  {
    "id_falta": 301,
    "id_aluno": 92,
    "disciplina": "Biologia",
    "data": "2025-02-15",
    "justificada": "False"
  },
  {
    "id_falta": 302,
    "id_aluno": 40,
    "disciplina": "Biologia",
    "data": "2025-06-09",
    "justificada": "False"
  },
  {
    "id_falta": 303,
    "id_aluno": 36,
    "disciplina": "Biologia",
    "data": "2024-10-16",
    "justificada": "True"
  },
  {
    "id_falta": 304,
    "id_aluno": 68,
    "disciplina": "Matemática",
    "data": "2024-12-25",
    "justificada": "False"
  },
  {
    "id_falta": 305,
    "id_aluno": 94,
    "disciplina": "Português",
    "data": "2024-10-28",
    "justificada": "True"
  },
  {
    "id_falta": 306,
    "id_aluno": 150,
    "disciplina": "História",
    "data": "2024-11-02",
    "justificada": "False"
  },
  {
    "id_falta": 307,
    "id_aluno": 64,
    "disciplina": "História",
    "data": "2024-09-13",
    "justificada": "True"
  },
  {
    "id_falta": 308,
    "id_aluno": 60,
    "disciplina": "Inglês",
    "data": "2025-06-18",
    "justificada": "True"
  },
  {
    "id_falta": 309,
    "id_aluno": 66,
    "disciplina": "Física",
    "data": "2024-11-06",
    "justificada": "True"
  },
  {
    "id_falta": 310,
    "id_aluno": 77,
    "disciplina": "História",
    "data": "2024-09-07",
    "justificada": "True"
  },
  {
    "id_falta": 311,
    "id_aluno": 24,
    "disciplina": "Biologia",
    "data": "2024-12-27",
    "justificada": "True"
  },
  {
    "id_falta": 312,
    "id_aluno": 147,
    "disciplina": "Geografia",
    "data": "2025-03-18",
    "justificada": "True"
  },
  {
    "id_falta": 313,
    "id_aluno": 103,
    "disciplina": "Inglês",
    "data": "2024-10-17",
    "justificada": "False"
  },
  {
    "id_falta": 314,
    "id_aluno": 146,
    "disciplina": "História",
    "data": "2024-12-19",
    "justificada": "False"
  },
  {
    "id_falta": 315,
    "id_aluno": 56,
    "disciplina": "Matemática",
    "data": "2024-11-13",
    "justificada": "False"
  },
  {
    "id_falta": 316,
    "id_aluno": 188,
    "disciplina": "Física",
    "data": "2024-11-20",
    "justificada": "False"
  },
  {
    "id_falta": 317,
    "id_aluno": 20,
    "disciplina": "Português",
    "data": "2024-09-18",
    "justificada": "False"
  },
  {
    "id_falta": 318,
    "id_aluno": 186,
    "disciplina": "História",
    "data": "2025-01-12",
    "justificada": "True"
  },
  {
    "id_falta": 319,
    "id_aluno": 84,
    "disciplina": "História",
    "data": "2025-05-12",
    "justificada": "True"
  },
  {
    "id_falta": 320,
    "id_aluno": 124,
    "disciplina": "Inglês",
    "data": "2024-08-12",
    "justificada": "True"
  },
  {
    "id_falta": 321,
    "id_aluno": 45,
    "disciplina": "Química",
    "data": "2024-07-29",
    "justificada": "False"
  },
  {
    "id_falta": 322,
    "id_aluno": 125,
    "disciplina": "Química",
    "data": "2024-08-07",
    "justificada": "True"
  },
  {
    "id_falta": 323,
    "id_aluno": 177,
    "disciplina": "Geografia",
    "data": "2025-06-13",
    "justificada": "True"
  },
  {
    "id_falta": 324,
    "id_aluno": 180,
    "disciplina": "Inglês",
    "data": "2025-05-19",
    "justificada": "False"
  },
  {
    "id_falta": 325,
    "id_aluno": 148,
    "disciplina": "História",
    "data": "2024-11-02",
    "justificada": "False"
  },
  {
    "id_falta": 326,
    "id_aluno": 25,
    "disciplina": "Geografia",
    "data": "2024-12-17",
    "justificada": "True"
  },
  {
    "id_falta": 327,
    "id_aluno": 153,
    "disciplina": "Física",
    "data": "2025-05-17",
    "justificada": "True"
  },
  {
    "id_falta": 328,
    "id_aluno": 165,
    "disciplina": "Matemática",
    "data": "2025-02-26",
    "justificada": "False"
  },
  {
    "id_falta": 329,
    "id_aluno": 77,
    "disciplina": "Biologia",
    "data": "2025-03-23",
    "justificada": "True"
  },
  {
    "id_falta": 330,
    "id_aluno": 10,
    "disciplina": "Português",
    "data": "2024-11-24",
    "justificada": "True"
  },
  {
    "id_falta": 331,
    "id_aluno": 188,
    "disciplina": "Matemática",
    "data": "2024-11-28",
    "justificada": "True"
  },
  {
    "id_falta": 332,
    "id_aluno": 148,
    "disciplina": "História",
    "data": "2024-12-28",
    "justificada": "False"
  },
  {
    "id_falta": 333,
    "id_aluno": 98,
    "disciplina": "Inglês",
    "data": "2025-06-28",
    "justificada": "False"
  },
  {
    "id_falta": 334,
    "id_aluno": 21,
    "disciplina": "Química",
    "data": "2025-04-16",
    "justificada": "True"
  },
  {
    "id_falta": 335,
    "id_aluno": 200,
    "disciplina": "Inglês",
    "data": "2024-09-14",
    "justificada": "False"
  },
  {
    "id_falta": 336,
    "id_aluno": 15,
    "disciplina": "Biologia",
    "data": "2024-10-30",
    "justificada": "False"
  },
  {
    "id_falta": 337,
    "id_aluno": 198,
    "disciplina": "Inglês",
    "data": "2025-03-18",
    "justificada": "True"
  },
  {
    "id_falta": 338,
    "id_aluno": 86,
    "disciplina": "Geografia",
    "data": "2025-02-13",
    "justificada": "False"
  },
  {
    "id_falta": 339,
    "id_aluno": 90,
    "disciplina": "Química",
    "data": "2025-01-19",
    "justificada": "True"
  },
  {
    "id_falta": 340,
    "id_aluno": 112,
    "disciplina": "Química",
    "data": "2024-10-29",
    "justificada": "True"
  },
  {
    "id_falta": 341,
    "id_aluno": 107,
    "disciplina": "Inglês",
    "data": "2025-05-16",
    "justificada": "True"
  },
  {
    "id_falta": 342,
    "id_aluno": 31,
    "disciplina": "Biologia",
    "data": "2024-11-19",
    "justificada": "True"
  },
  {
    "id_falta": 343,
    "id_aluno": 198,
    "disciplina": "História",
    "data": "2025-06-11",
    "justificada": "False"
  },
  {
    "id_falta": 344,
    "id_aluno": 59,
    "disciplina": "Química",
    "data": "2025-05-11",
    "justificada": "False"
  },
  {
    "id_falta": 345,
    "id_aluno": 192,
    "disciplina": "Matemática",
    "data": "2025-04-24",
    "justificada": "True"
  },
  {
    "id_falta": 346,
    "id_aluno": 168,
    "disciplina": "Biologia",
    "data": "2025-01-30",
    "justificada": "True"
  },
  {
    "id_falta": 347,
    "id_aluno": 155,
    "disciplina": "Inglês",
    "data": "2024-10-07",
    "justificada": "True"
  },
  {
    "id_falta": 348,
    "id_aluno": 3,
    "disciplina": "Química",
    "data": "2024-08-30",
    "justificada": "False"
  },
  {
    "id_falta": 349,
    "id_aluno": 163,
    "disciplina": "Física",
    "data": "2024-12-11",
    "justificada": "False"
  },
  {
    "id_falta": 350,
    "id_aluno": 200,
    "disciplina": "Matemática",
    "data": "2024-11-16",
    "justificada": "False"
  },
  {
    "id_falta": 351,
    "id_aluno": 162,
    "disciplina": "Português",
    "data": "2025-04-16",
    "justificada": "True"
  },
  {
    "id_falta": 352,
    "id_aluno": 98,
    "disciplina": "Física",
    "data": "2025-04-11",
    "justificada": "False"
  },
  {
    "id_falta": 353,
    "id_aluno": 14,
    "disciplina": "Química",
    "data": "2025-06-23",
    "justificada": "True"
  },
  {
    "id_falta": 354,
    "id_aluno": 79,
    "disciplina": "Biologia",
    "data": "2024-12-05",
    "justificada": "True"
  },
  {
    "id_falta": 355,
    "id_aluno": 135,
    "disciplina": "Física",
    "data": "2025-07-02",
    "justificada": "True"
  },
  {
    "id_falta": 356,
    "id_aluno": 11,
    "disciplina": "Biologia",
    "data": "2025-04-09",
    "justificada": "True"
  },
  {
    "id_falta": 357,
    "id_aluno": 82,
    "disciplina": "Biologia",
    "data": "2025-07-25",
    "justificada": "True"
  },
  {
    "id_falta": 358,
    "id_aluno": 139,
    "disciplina": "Português",
    "data": "2024-11-26",
    "justificada": "False"
  },
  {
    "id_falta": 359,
    "id_aluno": 145,
    "disciplina": "Biologia",
    "data": "2025-03-29",
    "justificada": "False"
  },
  {
    "id_falta": 360,
    "id_aluno": 39,
    "disciplina": "Química",
    "data": "2025-04-10",
    "justificada": "False"
  },
  {
    "id_falta": 361,
    "id_aluno": 84,
    "disciplina": "Inglês",
    "data": "2025-05-28",
    "justificada": "False"
  },
  {
    "id_falta": 362,
    "id_aluno": 129,
    "disciplina": "Geografia",
    "data": "2025-03-21",
    "justificada": "True"
  },
  {
    "id_falta": 363,
    "id_aluno": 179,
    "disciplina": "Geografia",
    "data": "2025-03-09",
    "justificada": "False"
  },
  {
    "id_falta": 364,
    "id_aluno": 57,
    "disciplina": "Física",
    "data": "2024-09-25",
    "justificada": "False"
  },
  {
    "id_falta": 365,
    "id_aluno": 40,
    "disciplina": "História",
    "data": "2024-09-28",
    "justificada": "True"
  },
  {
    "id_falta": 366,
    "id_aluno": 13,
    "disciplina": "Física",
    "data": "2024-08-14",
    "justificada": "False"
  },
  {
    "id_falta": 367,
    "id_aluno": 173,
    "disciplina": "Matemática",
    "data": "2024-08-23",
    "justificada": "False"
  },
  {
    "id_falta": 368,
    "id_aluno": 188,
    "disciplina": "Matemática",
    "data": "2024-08-17",
    "justificada": "False"
  },
  {
    "id_falta": 369,
    "id_aluno": 101,
    "disciplina": "Português",
    "data": "2024-07-30",
    "justificada": "True"
  },
  {
    "id_falta": 370,
    "id_aluno": 115,
    "disciplina": "Matemática",
    "data": "2025-01-06",
    "justificada": "False"
  },
  {
    "id_falta": 371,
    "id_aluno": 193,
    "disciplina": "Química",
    "data": "2025-06-28",
    "justificada": "True"
  },
  {
    "id_falta": 372,
    "id_aluno": 153,
    "disciplina": "Português",
    "data": "2024-08-12",
    "justificada": "False"
  },
  {
    "id_falta": 373,
    "id_aluno": 148,
    "disciplina": "Português",
    "data": "2024-11-03",
    "justificada": "False"
  },
  {
    "id_falta": 374,
    "id_aluno": 130,
    "disciplina": "Inglês",
    "data": "2025-04-06",
    "justificada": "False"
  },
  {
    "id_falta": 375,
    "id_aluno": 24,
    "disciplina": "Física",
    "data": "2025-06-05",
    "justificada": "False"
  },
  {
    "id_falta": 376,
    "id_aluno": 57,
    "disciplina": "Geografia",
    "data": "2025-04-25",
    "justificada": "True"
  },
  {
    "id_falta": 377,
    "id_aluno": 111,
    "disciplina": "Biologia",
    "data": "2024-09-15",
    "justificada": "True"
  },
  {
    "id_falta": 378,
    "id_aluno": 75,
    "disciplina": "Biologia",
    "data": "2025-04-18",
    "justificada": "True"
  },
  {
    "id_falta": 379,
    "id_aluno": 101,
    "disciplina": "Geografia",
    "data": "2025-03-10",
    "justificada": "True"
  },
  {
    "id_falta": 380,
    "id_aluno": 38,
    "disciplina": "Matemática",
    "data": "2024-09-01",
    "justificada": "False"
  },
  {
    "id_falta": 381,
    "id_aluno": 34,
    "disciplina": "Matemática",
    "data": "2024-12-23",
    "justificada": "False"
  },
  {
    "id_falta": 382,
    "id_aluno": 87,
    "disciplina": "Português",
    "data": "2024-09-04",
    "justificada": "False"
  },
  {
    "id_falta": 383,
    "id_aluno": 22,
    "disciplina": "Matemática",
    "data": "2024-11-09",
    "justificada": "False"
  },
  {
    "id_falta": 384,
    "id_aluno": 122,
    "disciplina": "Geografia",
    "data": "2024-11-25",
    "justificada": "True"
  },
  {
    "id_falta": 385,
    "id_aluno": 147,
    "disciplina": "Português",
    "data": "2024-07-29",
    "justificada": "True"
  },
  {
    "id_falta": 386,
    "id_aluno": 191,
    "disciplina": "Português",
    "data": "2025-05-17",
    "justificada": "False"
  },
  {
    "id_falta": 387,
    "id_aluno": 13,
    "disciplina": "Português",
    "data": "2025-03-13",
    "justificada": "False"
  },
  {
    "id_falta": 388,
    "id_aluno": 141,
    "disciplina": "História",
    "data": "2025-07-22",
    "justificada": "True"
  },
  {
    "id_falta": 389,
    "id_aluno": 103,
    "disciplina": "Química",
    "data": "2025-05-12",
    "justificada": "False"
  },
  {
    "id_falta": 390,
    "id_aluno": 68,
    "disciplina": "História",
    "data": "2025-04-24",
    "justificada": "False"
  },
  {
    "id_falta": 391,
    "id_aluno": 22,
    "disciplina": "Português",
    "data": "2025-02-13",
    "justificada": "False"
  },
  {
    "id_falta": 392,
    "id_aluno": 103,
    "disciplina": "História",
    "data": "2025-01-22",
    "justificada": "True"
  },
  {
    "id_falta": 393,
    "id_aluno": 129,
    "disciplina": "Biologia",
    "data": "2024-08-23",
    "justificada": "True"
  },
  {
    "id_falta": 394,
    "id_aluno": 112,
    "disciplina": "Biologia",
    "data": "2024-11-25",
    "justificada": "False"
  },
  {
    "id_falta": 395,
    "id_aluno": 199,
    "disciplina": "Inglês",
    "data": "2025-02-23",
    "justificada": "True"
  },
  {
    "id_falta": 396,
    "id_aluno": 179,
    "disciplina": "Português",
    "data": "2025-05-14",
    "justificada": "True"
  },
  {
    "id_falta": 397,
    "id_aluno": 34,
    "disciplina": "Inglês",
    "data": "2025-02-05",
    "justificada": "False"
  },
  {
    "id_falta": 398,
    "id_aluno": 196,
    "disciplina": "Biologia",
    "data": "2024-12-03",
    "justificada": "False"
  },
  {
    "id_falta": 399,
    "id_aluno": 35,
    "disciplina": "Química",
    "data": "2025-04-22",
    "justificada": "False"
  },
  {
    "id_falta": 400,
    "id_aluno": 124,
    "disciplina": "Física",
    "data": "2024-11-03",
    "justificada": "True"
  },
  {
    "id_falta": 401,
    "id_aluno": 144,
    "disciplina": "Biologia",
    "data": "2024-09-22",
    "justificada": "False"
  },
  {
    "id_falta": 402,
    "id_aluno": 51,
    "disciplina": "História",
    "data": "2024-08-14",
    "justificada": "True"
  },
  {
    "id_falta": 403,
    "id_aluno": 125,
    "disciplina": "Português",
    "data": "2024-12-24",
    "justificada": "False"
  },
  {
    "id_falta": 404,
    "id_aluno": 102,
    "disciplina": "Biologia",
    "data": "2025-05-29",
    "justificada": "False"
  },
  {
    "id_falta": 405,
    "id_aluno": 167,
    "disciplina": "Matemática",
    "data": "2025-05-20",
    "justificada": "False"
  },
  {
    "id_falta": 406,
    "id_aluno": 147,
    "disciplina": "Química",
    "data": "2025-06-29",
    "justificada": "False"
  },
  {
    "id_falta": 407,
    "id_aluno": 51,
    "disciplina": "Química",
    "data": "2025-01-14",
    "justificada": "False"
  },
  {
    "id_falta": 408,
    "id_aluno": 144,
    "disciplina": "Física",
    "data": "2025-02-18",
    "justificada": "True"
  },
  {
    "id_falta": 409,
    "id_aluno": 158,
    "disciplina": "Matemática",
    "data": "2024-11-17",
    "justificada": "True"
  },
  {
    "id_falta": 410,
    "id_aluno": 189,
    "disciplina": "Biologia",
    "data": "2024-12-03",
    "justificada": "False"
  },
  {
    "id_falta": 411,
    "id_aluno": 135,
    "disciplina": "Biologia",
    "data": "2025-03-22",
    "justificada": "True"
  },
  {
    "id_falta": 412,
    "id_aluno": 64,
    "disciplina": "História",
    "data": "2025-06-25",
    "justificada": "False"
  },
  {
    "id_falta": 413,
    "id_aluno": 63,
    "disciplina": "Inglês",
    "data": "2025-04-04",
    "justificada": "False"
  },
  {
    "id_falta": 414,
    "id_aluno": 19,
    "disciplina": "Português",
    "data": "2024-08-29",
    "justificada": "False"
  },
  {
    "id_falta": 415,
    "id_aluno": 69,
    "disciplina": "Inglês",
    "data": "2025-07-10",
    "justificada": "False"
  },
  {
    "id_falta": 416,
    "id_aluno": 199,
    "disciplina": "Geografia",
    "data": "2025-07-01",
    "justificada": "True"
  },
  {
    "id_falta": 417,
    "id_aluno": 111,
    "disciplina": "Química",
    "data": "2025-05-16",
    "justificada": "True"
  },
  {
    "id_falta": 418,
    "id_aluno": 83,
    "disciplina": "História",
    "data": "2025-01-09",
    "justificada": "True"
  },
  {
    "id_falta": 419,
    "id_aluno": 176,
    "disciplina": "Inglês",
    "data": "2024-12-16",
    "justificada": "False"
  },
  {
    "id_falta": 420,
    "id_aluno": 148,
    "disciplina": "Português",
    "data": "2024-10-30",
    "justificada": "True"
  },
  {
    "id_falta": 421,
    "id_aluno": 23,
    "disciplina": "História",
    "data": "2024-09-11",
    "justificada": "True"
  },
  {
    "id_falta": 422,
    "id_aluno": 29,
    "disciplina": "Química",
    "data": "2025-05-01",
    "justificada": "False"
  },
  {
    "id_falta": 423,
    "id_aluno": 172,
    "disciplina": "Geografia",
    "data": "2025-05-19",
    "justificada": "True"
  },
  {
    "id_falta": 424,
    "id_aluno": 106,
    "disciplina": "Português",
    "data": "2025-05-09",
    "justificada": "False"
  },
  {
    "id_falta": 425,
    "id_aluno": 109,
    "disciplina": "Inglês",
    "data": "2025-06-14",
    "justificada": "False"
  },
  {
    "id_falta": 426,
    "id_aluno": 94,
    "disciplina": "Biologia",
    "data": "2024-12-23",
    "justificada": "True"
  },
  {
    "id_falta": 427,
    "id_aluno": 90,
    "disciplina": "Português",
    "data": "2025-03-20",
    "justificada": "True"
  },
  {
    "id_falta": 428,
    "id_aluno": 49,
    "disciplina": "Matemática",
    "data": "2024-12-21",
    "justificada": "True"
  },
  {
    "id_falta": 429,
    "id_aluno": 83,
    "disciplina": "Português",
    "data": "2025-03-08",
    "justificada": "True"
  },
  {
    "id_falta": 430,
    "id_aluno": 89,
    "disciplina": "Português",
    "data": "2025-04-23",
    "justificada": "True"
  },
  {
    "id_falta": 431,
    "id_aluno": 153,
    "disciplina": "Biologia",
    "data": "2024-09-07",
    "justificada": "False"
  },
  {
    "id_falta": 432,
    "id_aluno": 168,
    "disciplina": "Inglês",
    "data": "2025-07-09",
    "justificada": "False"
  },
  {
    "id_falta": 433,
    "id_aluno": 7,
    "disciplina": "Matemática",
    "data": "2025-07-24",
    "justificada": "False"
  },
  {
    "id_falta": 434,
    "id_aluno": 198,
    "disciplina": "Inglês",
    "data": "2025-05-13",
    "justificada": "False"
  },
  {
    "id_falta": 435,
    "id_aluno": 79,
    "disciplina": "História",
    "data": "2025-01-18",
    "justificada": "True"
  },
  {
    "id_falta": 436,
    "id_aluno": 44,
    "disciplina": "Matemática",
    "data": "2025-01-02",
    "justificada": "False"
  },
  {
    "id_falta": 437,
    "id_aluno": 90,
    "disciplina": "Matemática",
    "data": "2024-11-26",
    "justificada": "True"
  },
  {
    "id_falta": 438,
    "id_aluno": 158,
    "disciplina": "Química",
    "data": "2024-10-18",
    "justificada": "False"
  },
  {
    "id_falta": 439,
    "id_aluno": 114,
    "disciplina": "Biologia",
    "data": "2025-01-23",
    "justificada": "False"
  },
  {
    "id_falta": 440,
    "id_aluno": 160,
    "disciplina": "História",
    "data": "2025-02-21",
    "justificada": "True"
  },
  {
    "id_falta": 441,
    "id_aluno": 38,
    "disciplina": "Física",
    "data": "2025-07-14",
    "justificada": "True"
  },
  {
    "id_falta": 442,
    "id_aluno": 113,
    "disciplina": "Química",
    "data": "2024-12-29",
    "justificada": "False"
  },
  {
    "id_falta": 443,
    "id_aluno": 12,
    "disciplina": "Matemática",
    "data": "2025-06-03",
    "justificada": "False"
  },
  {
    "id_falta": 444,
    "id_aluno": 60,
    "disciplina": "Inglês",
    "data": "2025-04-21",
    "justificada": "True"
  },
  {
    "id_falta": 445,
    "id_aluno": 52,
    "disciplina": "Inglês",
    "data": "2025-03-19",
    "justificada": "False"
  },
  {
    "id_falta": 446,
    "id_aluno": 176,
    "disciplina": "Química",
    "data": "2025-05-31",
    "justificada": "False"
  },
  {
    "id_falta": 447,
    "id_aluno": 96,
    "disciplina": "Química",
    "data": "2025-04-21",
    "justificada": "True"
  },
  {
    "id_falta": 448,
    "id_aluno": 40,
    "disciplina": "Português",
    "data": "2025-01-04",
    "justificada": "True"
  },
  {
    "id_falta": 449,
    "id_aluno": 194,
    "disciplina": "Geografia",
    "data": "2025-06-19",
    "justificada": "True"
  },
  {
    "id_falta": 450,
    "id_aluno": 187,
    "disciplina": "Matemática",
    "data": "2024-08-26",
    "justificada": "True"
  },
  {
    "id_falta": 451,
    "id_aluno": 22,
    "disciplina": "Química",
    "data": "2024-11-26",
    "justificada": "True"
  },
  {
    "id_falta": 452,
    "id_aluno": 29,
    "disciplina": "Inglês",
    "data": "2024-11-04",
    "justificada": "False"
  },
  {
    "id_falta": 453,
    "id_aluno": 190,
    "disciplina": "Português",
    "data": "2024-11-04",
    "justificada": "True"
  },
  {
    "id_falta": 454,
    "id_aluno": 14,
    "disciplina": "Física",
    "data": "2025-07-14",
    "justificada": "False"
  },
  {
    "id_falta": 455,
    "id_aluno": 63,
    "disciplina": "Física",
    "data": "2024-10-06",
    "justificada": "True"
  },
  {
    "id_falta": 456,
    "id_aluno": 159,
    "disciplina": "Biologia",
    "data": "2025-01-14",
    "justificada": "True"
  },
  {
    "id_falta": 457,
    "id_aluno": 38,
    "disciplina": "Química",
    "data": "2024-12-03",
    "justificada": "False"
  },
  {
    "id_falta": 458,
    "id_aluno": 74,
    "disciplina": "Matemática",
    "data": "2024-11-19",
    "justificada": "False"
  },
  {
    "id_falta": 459,
    "id_aluno": 4,
    "disciplina": "Português",
    "data": "2025-07-25",
    "justificada": "False"
  },
  {
    "id_falta": 460,
    "id_aluno": 88,
    "disciplina": "Física",
    "data": "2024-12-27",
    "justificada": "True"
  },
  {
    "id_falta": 461,
    "id_aluno": 178,
    "disciplina": "Física",
    "data": "2025-04-22",
    "justificada": "True"
  },
  {
    "id_falta": 462,
    "id_aluno": 29,
    "disciplina": "Português",
    "data": "2025-06-10",
    "justificada": "False"
  },
  {
    "id_falta": 463,
    "id_aluno": 79,
    "disciplina": "Inglês",
    "data": "2025-04-28",
    "justificada": "True"
  },
  {
    "id_falta": 464,
    "id_aluno": 116,
    "disciplina": "Biologia",
    "data": "2024-09-02",
    "justificada": "True"
  },
  {
    "id_falta": 465,
    "id_aluno": 121,
    "disciplina": "Geografia",
    "data": "2025-03-13",
    "justificada": "True"
  },
  {
    "id_falta": 466,
    "id_aluno": 6,
    "disciplina": "História",
    "data": "2025-06-18",
    "justificada": "False"
  },
  {
    "id_falta": 467,
    "id_aluno": 85,
    "disciplina": "Matemática",
    "data": "2024-09-01",
    "justificada": "False"
  },
  {
    "id_falta": 468,
    "id_aluno": 54,
    "disciplina": "Química",
    "data": "2025-04-22",
    "justificada": "False"
  },
  {
    "id_falta": 469,
    "id_aluno": 190,
    "disciplina": "Geografia",
    "data": "2025-02-09",
    "justificada": "True"
  },
  {
    "id_falta": 470,
    "id_aluno": 138,
    "disciplina": "Biologia",
    "data": "2025-02-13",
    "justificada": "True"
  },
  {
    "id_falta": 471,
    "id_aluno": 55,
    "disciplina": "Química",
    "data": "2025-03-21",
    "justificada": "True"
  },
  {
    "id_falta": 472,
    "id_aluno": 53,
    "disciplina": "Português",
    "data": "2025-01-27",
    "justificada": "True"
  },
  {
    "id_falta": 473,
    "id_aluno": 140,
    "disciplina": "Física",
    "data": "2024-07-30",
    "justificada": "False"
  },
  {
    "id_falta": 474,
    "id_aluno": 134,
    "disciplina": "Inglês",
    "data": "2025-07-03",
    "justificada": "False"
  },
  {
    "id_falta": 475,
    "id_aluno": 193,
    "disciplina": "Português",
    "data": "2024-08-15",
    "justificada": "False"
  },
  {
    "id_falta": 476,
    "id_aluno": 67,
    "disciplina": "Inglês",
    "data": "2025-05-01",
    "justificada": "False"
  },
  {
    "id_falta": 477,
    "id_aluno": 141,
    "disciplina": "Geografia",
    "data": "2024-08-03",
    "justificada": "True"
  },
  {
    "id_falta": 478,
    "id_aluno": 124,
    "disciplina": "História",
    "data": "2025-06-04",
    "justificada": "False"
  },
  {
    "id_falta": 479,
    "id_aluno": 160,
    "disciplina": "Matemática",
    "data": "2024-10-11",
    "justificada": "True"
  },
  {
    "id_falta": 480,
    "id_aluno": 187,
    "disciplina": "Geografia",
    "data": "2025-04-08",
    "justificada": "True"
  },
  {
    "id_falta": 481,
    "id_aluno": 37,
    "disciplina": "Matemática",
    "data": "2024-08-22",
    "justificada": "False"
  },
  {
    "id_falta": 482,
    "id_aluno": 178,
    "disciplina": "Geografia",
    "data": "2025-05-19",
    "justificada": "True"
  },
  {
    "id_falta": 483,
    "id_aluno": 179,
    "disciplina": "Inglês",
    "data": "2025-04-13",
    "justificada": "False"
  },
  {
    "id_falta": 484,
    "id_aluno": 172,
    "disciplina": "Química",
    "data": "2024-10-19",
    "justificada": "True"
  },
  {
    "id_falta": 485,
    "id_aluno": 5,
    "disciplina": "Português",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 486,
    "id_aluno": 97,
    "disciplina": "Biologia",
    "data": "2024-12-08",
    "justificada": "True"
  },
  {
    "id_falta": 487,
    "id_aluno": 150,
    "disciplina": "Inglês",
    "data": "2025-06-16",
    "justificada": "True"
  },
  {
    "id_falta": 488,
    "id_aluno": 170,
    "disciplina": "Inglês",
    "data": "2024-08-12",
    "justificada": "False"
  },
  {
    "id_falta": 489,
    "id_aluno": 135,
    "disciplina": "Matemática",
    "data": "2024-11-24",
    "justificada": "False"
  },
  {
    "id_falta": 490,
    "id_aluno": 12,
    "disciplina": "Matemática",
    "data": "2025-07-12",
    "justificada": "True"
  },
  {
    "id_falta": 491,
    "id_aluno": 66,
    "disciplina": "Física",
    "data": "2025-06-28",
    "justificada": "False"
  },
  {
    "id_falta": 492,
    "id_aluno": 44,
    "disciplina": "Matemática",
    "data": "2025-03-02",
    "justificada": "True"
  },
  {
    "id_falta": 493,
    "id_aluno": 16,
    "disciplina": "Física",
    "data": "2024-09-23",
    "justificada": "False"
  },
  {
    "id_falta": 494,
    "id_aluno": 73,
    "disciplina": "Matemática",
    "data": "2025-01-03",
    "justificada": "False"
  },
  {
    "id_falta": 495,
    "id_aluno": 52,
    "disciplina": "Química",
    "data": "2025-05-10",
    "justificada": "True"
  },
  {
    "id_falta": 496,
    "id_aluno": 179,
    "disciplina": "Português",
    "data": "2024-09-02",
    "justificada": "True"
  },
  {
    "id_falta": 497,
    "id_aluno": 159,
    "disciplina": "Geografia",
    "data": "2025-04-09",
    "justificada": "False"
  },
  {
    "id_falta": 498,
    "id_aluno": 70,
    "disciplina": "Inglês",
    "data": "2025-03-28",
    "justificada": "True"
  },
  {
    "id_falta": 499,
    "id_aluno": 14,
    "disciplina": "História",
    "data": "2025-02-26",
    "justificada": "False"
  },
  {
    "id_falta": 500,
    "id_aluno": 120,
    "disciplina": "Geografia",
    "data": "2025-01-09",
    "justificada": "False"
  },
  {
    "id_falta": 501,
    "id_aluno": 168,
    "disciplina": "Português",
    "data": "2025-07-24",
    "justificada": "True"
  },
  {
    "id_falta": 502,
    "id_aluno": 3,
    "disciplina": "Matemática",
    "data": "2025-02-22",
    "justificada": "False"
  },
  {
    "id_falta": 503,
    "id_aluno": 18,
    "disciplina": "História",
    "data": "2025-06-26",
    "justificada": "False"
  },
  {
    "id_falta": 504,
    "id_aluno": 100,
    "disciplina": "Inglês",
    "data": "2024-08-28",
    "justificada": "False"
  },
  {
    "id_falta": 505,
    "id_aluno": 170,
    "disciplina": "Matemática",
    "data": "2024-12-10",
    "justificada": "True"
  },
  {
    "id_falta": 506,
    "id_aluno": 70,
    "disciplina": "Inglês",
    "data": "2025-05-22",
    "justificada": "True"
  },
  {
    "id_falta": 507,
    "id_aluno": 170,
    "disciplina": "Matemática",
    "data": "2024-08-20",
    "justificada": "True"
  },
  {
    "id_falta": 508,
    "id_aluno": 169,
    "disciplina": "Geografia",
    "data": "2025-04-23",
    "justificada": "True"
  },
  {
    "id_falta": 509,
    "id_aluno": 93,
    "disciplina": "História",
    "data": "2025-03-03",
    "justificada": "False"
  },
  {
    "id_falta": 510,
    "id_aluno": 28,
    "disciplina": "Matemática",
    "data": "2025-01-29",
    "justificada": "True"
  },
  {
    "id_falta": 511,
    "id_aluno": 5,
    "disciplina": "História",
    "data": "2025-04-18",
    "justificada": "False"
  },
  {
    "id_falta": 512,
    "id_aluno": 75,
    "disciplina": "Matemática",
    "data": "2025-05-02",
    "justificada": "False"
  },
  {
    "id_falta": 513,
    "id_aluno": 167,
    "disciplina": "Biologia",
    "data": "2025-05-18",
    "justificada": "True"
  },
  {
    "id_falta": 514,
    "id_aluno": 99,
    "disciplina": "Português",
    "data": "2024-11-11",
    "justificada": "True"
  },
  {
    "id_falta": 515,
    "id_aluno": 60,
    "disciplina": "Inglês",
    "data": "2025-07-11",
    "justificada": "False"
  },
  {
    "id_falta": 516,
    "id_aluno": 98,
    "disciplina": "História",
    "data": "2024-09-24",
    "justificada": "False"
  },
  {
    "id_falta": 517,
    "id_aluno": 131,
    "disciplina": "Português",
    "data": "2024-09-22",
    "justificada": "False"
  },
  {
    "id_falta": 518,
    "id_aluno": 182,
    "disciplina": "Português",
    "data": "2025-01-18",
    "justificada": "False"
  },
  {
    "id_falta": 519,
    "id_aluno": 26,
    "disciplina": "Português",
    "data": "2025-07-10",
    "justificada": "False"
  },
  {
    "id_falta": 520,
    "id_aluno": 81,
    "disciplina": "Inglês",
    "data": "2025-01-09",
    "justificada": "True"
  },
  {
    "id_falta": 521,
    "id_aluno": 125,
    "disciplina": "Geografia",
    "data": "2024-11-16",
    "justificada": "True"
  },
  {
    "id_falta": 522,
    "id_aluno": 153,
    "disciplina": "Português",
    "data": "2024-09-08",
    "justificada": "True"
  },
  {
    "id_falta": 523,
    "id_aluno": 137,
    "disciplina": "Geografia",
    "data": "2025-07-03",
    "justificada": "False"
  },
  {
    "id_falta": 524,
    "id_aluno": 23,
    "disciplina": "Química",
    "data": "2025-03-06",
    "justificada": "True"
  },
  {
    "id_falta": 525,
    "id_aluno": 48,
    "disciplina": "Física",
    "data": "2025-01-26",
    "justificada": "False"
  },
  {
    "id_falta": 526,
    "id_aluno": 51,
    "disciplina": "Química",
    "data": "2025-04-16",
    "justificada": "False"
  },
  {
    "id_falta": 527,
    "id_aluno": 129,
    "disciplina": "Física",
    "data": "2024-11-08",
    "justificada": "False"
  },
  {
    "id_falta": 528,
    "id_aluno": 118,
    "disciplina": "Português",
    "data": "2025-05-15",
    "justificada": "True"
  },
  {
    "id_falta": 529,
    "id_aluno": 144,
    "disciplina": "História",
    "data": "2025-04-09",
    "justificada": "True"
  },
  {
    "id_falta": 530,
    "id_aluno": 183,
    "disciplina": "Física",
    "data": "2024-09-04",
    "justificada": "False"
  },
  {
    "id_falta": 531,
    "id_aluno": 6,
    "disciplina": "Geografia",
    "data": "2024-10-08",
    "justificada": "False"
  },
  {
    "id_falta": 532,
    "id_aluno": 11,
    "disciplina": "Matemática",
    "data": "2025-07-10",
    "justificada": "True"
  },
  {
    "id_falta": 533,
    "id_aluno": 64,
    "disciplina": "História",
    "data": "2024-08-21",
    "justificada": "False"
  },
  {
    "id_falta": 534,
    "id_aluno": 136,
    "disciplina": "Física",
    "data": "2025-01-14",
    "justificada": "True"
  },
  {
    "id_falta": 535,
    "id_aluno": 79,
    "disciplina": "Português",
    "data": "2024-10-08",
    "justificada": "False"
  },
  {
    "id_falta": 536,
    "id_aluno": 86,
    "disciplina": "Português",
    "data": "2025-01-10",
    "justificada": "True"
  },
  {
    "id_falta": 537,
    "id_aluno": 126,
    "disciplina": "Biologia",
    "data": "2025-07-28",
    "justificada": "True"
  },
  {
    "id_falta": 538,
    "id_aluno": 101,
    "disciplina": "História",
    "data": "2025-02-20",
    "justificada": "False"
  },
  {
    "id_falta": 539,
    "id_aluno": 191,
    "disciplina": "Química",
    "data": "2025-02-10",
    "justificada": "False"
  },
  {
    "id_falta": 540,
    "id_aluno": 41,
    "disciplina": "História",
    "data": "2025-02-16",
    "justificada": "False"
  },
  {
    "id_falta": 541,
    "id_aluno": 5,
    "disciplina": "Física",
    "data": "2024-08-23",
    "justificada": "False"
  },
  {
    "id_falta": 542,
    "id_aluno": 89,
    "disciplina": "História",
    "data": "2025-02-04",
    "justificada": "False"
  },
  {
    "id_falta": 543,
    "id_aluno": 176,
    "disciplina": "Inglês",
    "data": "2024-10-20",
    "justificada": "False"
  },
  {
    "id_falta": 544,
    "id_aluno": 91,
    "disciplina": "Geografia",
    "data": "2024-12-30",
    "justificada": "False"
  },
  {
    "id_falta": 545,
    "id_aluno": 91,
    "disciplina": "Matemática",
    "data": "2024-11-13",
    "justificada": "False"
  },
  {
    "id_falta": 546,
    "id_aluno": 161,
    "disciplina": "História",
    "data": "2024-08-04",
    "justificada": "False"
  },
  {
    "id_falta": 547,
    "id_aluno": 78,
    "disciplina": "Português",
    "data": "2024-08-16",
    "justificada": "True"
  },
  {
    "id_falta": 548,
    "id_aluno": 61,
    "disciplina": "Química",
    "data": "2025-04-02",
    "justificada": "False"
  },
  {
    "id_falta": 549,
    "id_aluno": 129,
    "disciplina": "História",
    "data": "2024-10-24",
    "justificada": "False"
  },
  {
    "id_falta": 550,
    "id_aluno": 71,
    "disciplina": "Matemática",
    "data": "2024-11-21",
    "justificada": "True"
  },
  {
    "id_falta": 551,
    "id_aluno": 16,
    "disciplina": "Inglês",
    "data": "2025-07-25",
    "justificada": "False"
  },
  {
    "id_falta": 552,
    "id_aluno": 161,
    "disciplina": "Português",
    "data": "2025-03-24",
    "justificada": "True"
  },
  {
    "id_falta": 553,
    "id_aluno": 66,
    "disciplina": "Matemática",
    "data": "2025-05-09",
    "justificada": "True"
  },
  {
    "id_falta": 554,
    "id_aluno": 100,
    "disciplina": "Matemática",
    "data": "2025-07-12",
    "justificada": "True"
  },
  {
    "id_falta": 555,
    "id_aluno": 8,
    "disciplina": "História",
    "data": "2024-09-20",
    "justificada": "True"
  },
  {
    "id_falta": 556,
    "id_aluno": 143,
    "disciplina": "Português",
    "data": "2025-02-19",
    "justificada": "True"
  },
  {
    "id_falta": 557,
    "id_aluno": 72,
    "disciplina": "Biologia",
    "data": "2024-10-03",
    "justificada": "True"
  },
  {
    "id_falta": 558,
    "id_aluno": 58,
    "disciplina": "Química",
    "data": "2024-08-12",
    "justificada": "True"
  },
  {
    "id_falta": 559,
    "id_aluno": 39,
    "disciplina": "Inglês",
    "data": "2025-03-21",
    "justificada": "False"
  },
  {
    "id_falta": 560,
    "id_aluno": 88,
    "disciplina": "História",
    "data": "2025-06-02",
    "justificada": "False"
  },
  {
    "id_falta": 561,
    "id_aluno": 101,
    "disciplina": "Geografia",
    "data": "2024-11-11",
    "justificada": "True"
  },
  {
    "id_falta": 562,
    "id_aluno": 169,
    "disciplina": "História",
    "data": "2025-01-27",
    "justificada": "False"
  },
  {
    "id_falta": 563,
    "id_aluno": 36,
    "disciplina": "Biologia",
    "data": "2025-04-08",
    "justificada": "False"
  },
  {
    "id_falta": 564,
    "id_aluno": 23,
    "disciplina": "Inglês",
    "data": "2025-04-26",
    "justificada": "True"
  },
  {
    "id_falta": 565,
    "id_aluno": 187,
    "disciplina": "Química",
    "data": "2025-04-11",
    "justificada": "False"
  },
  {
    "id_falta": 566,
    "id_aluno": 98,
    "disciplina": "Geografia",
    "data": "2024-12-06",
    "justificada": "True"
  },
  {
    "id_falta": 567,
    "id_aluno": 134,
    "disciplina": "História",
    "data": "2024-12-08",
    "justificada": "False"
  },
  {
    "id_falta": 568,
    "id_aluno": 174,
    "disciplina": "Matemática",
    "data": "2025-01-23",
    "justificada": "False"
  },
  {
    "id_falta": 569,
    "id_aluno": 157,
    "disciplina": "História",
    "data": "2024-10-18",
    "justificada": "False"
  },
  {
    "id_falta": 570,
    "id_aluno": 161,
    "disciplina": "Inglês",
    "data": "2024-09-19",
    "justificada": "False"
  },
  {
    "id_falta": 571,
    "id_aluno": 176,
    "disciplina": "Português",
    "data": "2025-03-15",
    "justificada": "False"
  },
  {
    "id_falta": 572,
    "id_aluno": 59,
    "disciplina": "Biologia",
    "data": "2025-01-12",
    "justificada": "True"
  },
  {
    "id_falta": 573,
    "id_aluno": 107,
    "disciplina": "Física",
    "data": "2025-01-31",
    "justificada": "True"
  },
  {
    "id_falta": 574,
    "id_aluno": 62,
    "disciplina": "Química",
    "data": "2024-08-25",
    "justificada": "True"
  },
  {
    "id_falta": 575,
    "id_aluno": 147,
    "disciplina": "Matemática",
    "data": "2025-04-10",
    "justificada": "False"
  },
  {
    "id_falta": 576,
    "id_aluno": 40,
    "disciplina": "Geografia",
    "data": "2025-05-25",
    "justificada": "True"
  },
  {
    "id_falta": 577,
    "id_aluno": 110,
    "disciplina": "Geografia",
    "data": "2024-09-22",
    "justificada": "True"
  },
  {
    "id_falta": 578,
    "id_aluno": 80,
    "disciplina": "Português",
    "data": "2024-10-15",
    "justificada": "False"
  },
  {
    "id_falta": 579,
    "id_aluno": 155,
    "disciplina": "Português",
    "data": "2024-12-29",
    "justificada": "True"
  },
  {
    "id_falta": 580,
    "id_aluno": 85,
    "disciplina": "Física",
    "data": "2025-01-24",
    "justificada": "True"
  },
  {
    "id_falta": 581,
    "id_aluno": 115,
    "disciplina": "Geografia",
    "data": "2024-08-06",
    "justificada": "False"
  },
  {
    "id_falta": 582,
    "id_aluno": 139,
    "disciplina": "Inglês",
    "data": "2025-01-25",
    "justificada": "True"
  },
  {
    "id_falta": 583,
    "id_aluno": 34,
    "disciplina": "Geografia",
    "data": "2024-09-21",
    "justificada": "True"
  },
  {
    "id_falta": 584,
    "id_aluno": 53,
    "disciplina": "Biologia",
    "data": "2024-11-21",
    "justificada": "True"
  },
  {
    "id_falta": 585,
    "id_aluno": 168,
    "disciplina": "Matemática",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 586,
    "id_aluno": 36,
    "disciplina": "Geografia",
    "data": "2025-06-01",
    "justificada": "True"
  },
  {
    "id_falta": 587,
    "id_aluno": 149,
    "disciplina": "Português",
    "data": "2025-05-26",
    "justificada": "True"
  },
  {
    "id_falta": 588,
    "id_aluno": 139,
    "disciplina": "História",
    "data": "2025-01-04",
    "justificada": "False"
  },
  {
    "id_falta": 589,
    "id_aluno": 176,
    "disciplina": "Inglês",
    "data": "2024-12-19",
    "justificada": "True"
  },
  {
    "id_falta": 590,
    "id_aluno": 52,
    "disciplina": "Inglês",
    "data": "2025-04-06",
    "justificada": "False"
  },
  {
    "id_falta": 591,
    "id_aluno": 36,
    "disciplina": "História",
    "data": "2024-12-26",
    "justificada": "True"
  },
  {
    "id_falta": 592,
    "id_aluno": 80,
    "disciplina": "História",
    "data": "2025-06-21",
    "justificada": "False"
  },
  {
    "id_falta": 593,
    "id_aluno": 177,
    "disciplina": "Matemática",
    "data": "2024-10-22",
    "justificada": "True"
  },
  {
    "id_falta": 594,
    "id_aluno": 181,
    "disciplina": "Matemática",
    "data": "2025-04-19",
    "justificada": "False"
  },
  {
    "id_falta": 595,
    "id_aluno": 135,
    "disciplina": "Física",
    "data": "2024-08-06",
    "justificada": "False"
  },
  {
    "id_falta": 596,
    "id_aluno": 35,
    "disciplina": "Biologia",
    "data": "2024-12-05",
    "justificada": "True"
  },
  {
    "id_falta": 597,
    "id_aluno": 111,
    "disciplina": "Geografia",
    "data": "2025-04-27",
    "justificada": "False"
  },
  {
    "id_falta": 598,
    "id_aluno": 198,
    "disciplina": "Química",
    "data": "2024-12-31",
    "justificada": "True"
  },
  {
    "id_falta": 599,
    "id_aluno": 38,
    "disciplina": "Biologia",
    "data": "2025-07-15",
    "justificada": "True"
  },
  {
    "id_falta": 600,
    "id_aluno": 168,
    "disciplina": "Física",
    "data": "2024-12-11",
    "justificada": "True"
  },
  {
    "id_falta": 601,
    "id_aluno": 145,
    "disciplina": "Inglês",
    "data": "2025-04-12",
    "justificada": "False"
  },
  {
    "id_falta": 602,
    "id_aluno": 41,
    "disciplina": "Matemática",
    "data": "2025-02-26",
    "justificada": "False"
  },
  {
    "id_falta": 603,
    "id_aluno": 82,
    "disciplina": "Português",
    "data": "2024-08-19",
    "justificada": "False"
  },
  {
    "id_falta": 604,
    "id_aluno": 18,
    "disciplina": "Matemática",
    "data": "2025-07-16",
    "justificada": "False"
  },
  {
    "id_falta": 605,
    "id_aluno": 143,
    "disciplina": "História",
    "data": "2025-06-19",
    "justificada": "True"
  },
  {
    "id_falta": 606,
    "id_aluno": 137,
    "disciplina": "História",
    "data": "2025-02-07",
    "justificada": "False"
  },
  {
    "id_falta": 607,
    "id_aluno": 185,
    "disciplina": "Matemática",
    "data": "2025-01-28",
    "justificada": "True"
  },
  {
    "id_falta": 608,
    "id_aluno": 31,
    "disciplina": "Inglês",
    "data": "2025-04-23",
    "justificada": "False"
  },
  {
    "id_falta": 609,
    "id_aluno": 48,
    "disciplina": "Português",
    "data": "2025-07-21",
    "justificada": "False"
  },
  {
    "id_falta": 610,
    "id_aluno": 82,
    "disciplina": "Português",
    "data": "2024-08-03",
    "justificada": "True"
  },
  {
    "id_falta": 611,
    "id_aluno": 38,
    "disciplina": "Geografia",
    "data": "2024-09-17",
    "justificada": "True"
  },
  {
    "id_falta": 612,
    "id_aluno": 187,
    "disciplina": "Inglês",
    "data": "2024-08-14",
    "justificada": "True"
  },
  {
    "id_falta": 613,
    "id_aluno": 8,
    "disciplina": "Física",
    "data": "2025-04-11",
    "justificada": "False"
  },
  {
    "id_falta": 614,
    "id_aluno": 196,
    "disciplina": "Química",
    "data": "2025-03-02",
    "justificada": "False"
  },
  {
    "id_falta": 615,
    "id_aluno": 82,
    "disciplina": "Geografia",
    "data": "2024-09-25",
    "justificada": "True"
  },
  {
    "id_falta": 616,
    "id_aluno": 106,
    "disciplina": "Física",
    "data": "2025-01-20",
    "justificada": "True"
  },
  {
    "id_falta": 617,
    "id_aluno": 106,
    "disciplina": "Geografia",
    "data": "2025-01-04",
    "justificada": "False"
  },
  {
    "id_falta": 618,
    "id_aluno": 78,
    "disciplina": "Português",
    "data": "2025-06-29",
    "justificada": "True"
  },
  {
    "id_falta": 619,
    "id_aluno": 114,
    "disciplina": "Física",
    "data": "2024-11-16",
    "justificada": "False"
  },
  {
    "id_falta": 620,
    "id_aluno": 191,
    "disciplina": "Geografia",
    "data": "2025-06-28",
    "justificada": "False"
  },
  {
    "id_falta": 621,
    "id_aluno": 164,
    "disciplina": "Português",
    "data": "2025-07-09",
    "justificada": "True"
  },
  {
    "id_falta": 622,
    "id_aluno": 190,
    "disciplina": "Geografia",
    "data": "2025-03-25",
    "justificada": "True"
  },
  {
    "id_falta": 623,
    "id_aluno": 71,
    "disciplina": "Química",
    "data": "2024-10-06",
    "justificada": "False"
  },
  {
    "id_falta": 624,
    "id_aluno": 39,
    "disciplina": "Geografia",
    "data": "2025-01-17",
    "justificada": "True"
  },
  {
    "id_falta": 625,
    "id_aluno": 200,
    "disciplina": "Química",
    "data": "2024-12-31",
    "justificada": "True"
  },
  {
    "id_falta": 626,
    "id_aluno": 49,
    "disciplina": "Geografia",
    "data": "2024-08-22",
    "justificada": "True"
  },
  {
    "id_falta": 627,
    "id_aluno": 28,
    "disciplina": "Português",
    "data": "2024-11-28",
    "justificada": "True"
  },
  {
    "id_falta": 628,
    "id_aluno": 34,
    "disciplina": "Inglês",
    "data": "2024-10-30",
    "justificada": "False"
  },
  {
    "id_falta": 629,
    "id_aluno": 48,
    "disciplina": "Inglês",
    "data": "2024-09-20",
    "justificada": "False"
  },
  {
    "id_falta": 630,
    "id_aluno": 7,
    "disciplina": "Matemática",
    "data": "2025-07-21",
    "justificada": "False"
  },
  {
    "id_falta": 631,
    "id_aluno": 196,
    "disciplina": "Química",
    "data": "2025-01-24",
    "justificada": "True"
  },
  {
    "id_falta": 632,
    "id_aluno": 157,
    "disciplina": "História",
    "data": "2025-04-22",
    "justificada": "True"
  },
  {
    "id_falta": 633,
    "id_aluno": 158,
    "disciplina": "Geografia",
    "data": "2024-09-08",
    "justificada": "False"
  },
  {
    "id_falta": 634,
    "id_aluno": 69,
    "disciplina": "Inglês",
    "data": "2025-06-01",
    "justificada": "False"
  },
  {
    "id_falta": 635,
    "id_aluno": 156,
    "disciplina": "História",
    "data": "2025-02-28",
    "justificada": "False"
  },
  {
    "id_falta": 636,
    "id_aluno": 146,
    "disciplina": "Química",
    "data": "2024-08-18",
    "justificada": "False"
  },
  {
    "id_falta": 637,
    "id_aluno": 157,
    "disciplina": "Física",
    "data": "2025-05-31",
    "justificada": "True"
  },
  {
    "id_falta": 638,
    "id_aluno": 60,
    "disciplina": "História",
    "data": "2024-10-30",
    "justificada": "False"
  },
  {
    "id_falta": 639,
    "id_aluno": 153,
    "disciplina": "Inglês",
    "data": "2024-12-14",
    "justificada": "True"
  },
  {
    "id_falta": 640,
    "id_aluno": 60,
    "disciplina": "Geografia",
    "data": "2025-02-05",
    "justificada": "False"
  },
  {
    "id_falta": 641,
    "id_aluno": 60,
    "disciplina": "Física",
    "data": "2025-01-06",
    "justificada": "True"
  },
  {
    "id_falta": 642,
    "id_aluno": 176,
    "disciplina": "Biologia",
    "data": "2025-06-12",
    "justificada": "False"
  },
  {
    "id_falta": 643,
    "id_aluno": 7,
    "disciplina": "Geografia",
    "data": "2025-04-17",
    "justificada": "False"
  },
  {
    "id_falta": 644,
    "id_aluno": 92,
    "disciplina": "Física",
    "data": "2025-05-28",
    "justificada": "False"
  },
  {
    "id_falta": 645,
    "id_aluno": 21,
    "disciplina": "História",
    "data": "2024-08-06",
    "justificada": "False"
  },
  {
    "id_falta": 646,
    "id_aluno": 177,
    "disciplina": "Matemática",
    "data": "2024-12-27",
    "justificada": "False"
  },
  {
    "id_falta": 647,
    "id_aluno": 200,
    "disciplina": "Matemática",
    "data": "2025-01-29",
    "justificada": "False"
  },
  {
    "id_falta": 648,
    "id_aluno": 123,
    "disciplina": "Biologia",
    "data": "2025-05-11",
    "justificada": "True"
  },
  {
    "id_falta": 649,
    "id_aluno": 35,
    "disciplina": "História",
    "data": "2025-02-03",
    "justificada": "False"
  },
  {
    "id_falta": 650,
    "id_aluno": 129,
    "disciplina": "Português",
    "data": "2024-10-04",
    "justificada": "False"
  },
  {
    "id_falta": 651,
    "id_aluno": 155,
    "disciplina": "Inglês",
    "data": "2024-09-29",
    "justificada": "True"
  },
  {
    "id_falta": 652,
    "id_aluno": 121,
    "disciplina": "Inglês",
    "data": "2025-07-02",
    "justificada": "False"
  },
  {
    "id_falta": 653,
    "id_aluno": 183,
    "disciplina": "Química",
    "data": "2024-08-20",
    "justificada": "False"
  },
  {
    "id_falta": 654,
    "id_aluno": 167,
    "disciplina": "História",
    "data": "2024-12-22",
    "justificada": "True"
  },
  {
    "id_falta": 655,
    "id_aluno": 96,
    "disciplina": "Física",
    "data": "2025-04-14",
    "justificada": "True"
  },
  {
    "id_falta": 656,
    "id_aluno": 48,
    "disciplina": "Geografia",
    "data": "2024-12-03",
    "justificada": "False"
  },
  {
    "id_falta": 657,
    "id_aluno": 100,
    "disciplina": "Biologia",
    "data": "2025-06-08",
    "justificada": "False"
  },
  {
    "id_falta": 658,
    "id_aluno": 126,
    "disciplina": "História",
    "data": "2025-07-19",
    "justificada": "True"
  },
  {
    "id_falta": 659,
    "id_aluno": 122,
    "disciplina": "História",
    "data": "2025-02-25",
    "justificada": "True"
  },
  {
    "id_falta": 660,
    "id_aluno": 36,
    "disciplina": "Geografia",
    "data": "2025-07-06",
    "justificada": "False"
  },
  {
    "id_falta": 661,
    "id_aluno": 42,
    "disciplina": "Português",
    "data": "2024-11-23",
    "justificada": "True"
  },
  {
    "id_falta": 662,
    "id_aluno": 50,
    "disciplina": "Química",
    "data": "2025-03-11",
    "justificada": "False"
  },
  {
    "id_falta": 663,
    "id_aluno": 58,
    "disciplina": "Inglês",
    "data": "2025-02-25",
    "justificada": "False"
  },
  {
    "id_falta": 664,
    "id_aluno": 9,
    "disciplina": "Geografia",
    "data": "2024-12-04",
    "justificada": "False"
  },
  {
    "id_falta": 665,
    "id_aluno": 105,
    "disciplina": "Inglês",
    "data": "2024-12-27",
    "justificada": "True"
  },
  {
    "id_falta": 666,
    "id_aluno": 196,
    "disciplina": "Inglês",
    "data": "2025-01-16",
    "justificada": "False"
  },
  {
    "id_falta": 667,
    "id_aluno": 4,
    "disciplina": "Biologia",
    "data": "2025-04-01",
    "justificada": "False"
  },
  {
    "id_falta": 668,
    "id_aluno": 70,
    "disciplina": "Matemática",
    "data": "2024-12-02",
    "justificada": "True"
  },
  {
    "id_falta": 669,
    "id_aluno": 106,
    "disciplina": "Química",
    "data": "2025-05-06",
    "justificada": "True"
  },
  {
    "id_falta": 670,
    "id_aluno": 57,
    "disciplina": "Geografia",
    "data": "2025-03-01",
    "justificada": "False"
  },
  {
    "id_falta": 671,
    "id_aluno": 191,
    "disciplina": "Geografia",
    "data": "2024-10-14",
    "justificada": "True"
  },
  {
    "id_falta": 672,
    "id_aluno": 172,
    "disciplina": "Física",
    "data": "2025-01-19",
    "justificada": "False"
  },
  {
    "id_falta": 673,
    "id_aluno": 52,
    "disciplina": "Química",
    "data": "2024-08-10",
    "justificada": "False"
  },
  {
    "id_falta": 674,
    "id_aluno": 194,
    "disciplina": "Geografia",
    "data": "2025-06-25",
    "justificada": "True"
  },
  {
    "id_falta": 675,
    "id_aluno": 53,
    "disciplina": "História",
    "data": "2024-09-02",
    "justificada": "True"
  },
  {
    "id_falta": 676,
    "id_aluno": 17,
    "disciplina": "Matemática",
    "data": "2025-04-08",
    "justificada": "True"
  },
  {
    "id_falta": 677,
    "id_aluno": 46,
    "disciplina": "Química",
    "data": "2025-04-19",
    "justificada": "True"
  },
  {
    "id_falta": 678,
    "id_aluno": 113,
    "disciplina": "Matemática",
    "data": "2025-01-03",
    "justificada": "False"
  },
  {
    "id_falta": 679,
    "id_aluno": 158,
    "disciplina": "Matemática",
    "data": "2025-07-09",
    "justificada": "False"
  },
  {
    "id_falta": 680,
    "id_aluno": 126,
    "disciplina": "Inglês",
    "data": "2025-03-02",
    "justificada": "True"
  },
  {
    "id_falta": 681,
    "id_aluno": 177,
    "disciplina": "Matemática",
    "data": "2024-09-26",
    "justificada": "False"
  },
  {
    "id_falta": 682,
    "id_aluno": 84,
    "disciplina": "Química",
    "data": "2024-11-25",
    "justificada": "False"
  },
  {
    "id_falta": 683,
    "id_aluno": 118,
    "disciplina": "Química",
    "data": "2025-01-27",
    "justificada": "False"
  },
  {
    "id_falta": 684,
    "id_aluno": 64,
    "disciplina": "Inglês",
    "data": "2025-03-05",
    "justificada": "False"
  },
  {
    "id_falta": 685,
    "id_aluno": 110,
    "disciplina": "Português",
    "data": "2024-09-27",
    "justificada": "True"
  },
  {
    "id_falta": 686,
    "id_aluno": 104,
    "disciplina": "Inglês",
    "data": "2025-07-22",
    "justificada": "True"
  },
  {
    "id_falta": 687,
    "id_aluno": 199,
    "disciplina": "Inglês",
    "data": "2025-01-07",
    "justificada": "True"
  },
  {
    "id_falta": 688,
    "id_aluno": 11,
    "disciplina": "Geografia",
    "data": "2024-12-06",
    "justificada": "False"
  },
  {
    "id_falta": 689,
    "id_aluno": 156,
    "disciplina": "Português",
    "data": "2024-12-25",
    "justificada": "True"
  },
  {
    "id_falta": 690,
    "id_aluno": 189,
    "disciplina": "Matemática",
    "data": "2024-10-25",
    "justificada": "True"
  },
  {
    "id_falta": 691,
    "id_aluno": 98,
    "disciplina": "Química",
    "data": "2024-09-25",
    "justificada": "False"
  },
  {
    "id_falta": 692,
    "id_aluno": 185,
    "disciplina": "Geografia",
    "data": "2025-04-02",
    "justificada": "True"
  },
  {
    "id_falta": 693,
    "id_aluno": 81,
    "disciplina": "História",
    "data": "2024-11-20",
    "justificada": "True"
  },
  {
    "id_falta": 694,
    "id_aluno": 101,
    "disciplina": "Física",
    "data": "2024-11-09",
    "justificada": "False"
  },
  {
    "id_falta": 695,
    "id_aluno": 157,
    "disciplina": "Biologia",
    "data": "2024-09-12",
    "justificada": "False"
  },
  {
    "id_falta": 696,
    "id_aluno": 191,
    "disciplina": "Geografia",
    "data": "2024-11-26",
    "justificada": "False"
  },
  {
    "id_falta": 697,
    "id_aluno": 147,
    "disciplina": "Português",
    "data": "2025-07-28",
    "justificada": "False"
  },
  {
    "id_falta": 698,
    "id_aluno": 153,
    "disciplina": "Matemática",
    "data": "2024-12-30",
    "justificada": "False"
  },
  {
    "id_falta": 699,
    "id_aluno": 138,
    "disciplina": "Inglês",
    "data": "2025-01-22",
    "justificada": "False"
  },
  {
    "id_falta": 700,
    "id_aluno": 135,
    "disciplina": "Biologia",
    "data": "2025-05-06",
    "justificada": "False"
  },
  {
    "id_falta": 701,
    "id_aluno": 165,
    "disciplina": "História",
    "data": "2024-12-04",
    "justificada": "True"
  },
  {
    "id_falta": 702,
    "id_aluno": 181,
    "disciplina": "Inglês",
    "data": "2025-07-17",
    "justificada": "True"
  },
  {
    "id_falta": 703,
    "id_aluno": 10,
    "disciplina": "Matemática",
    "data": "2024-07-30",
    "justificada": "True"
  },
  {
    "id_falta": 704,
    "id_aluno": 134,
    "disciplina": "Inglês",
    "data": "2025-01-24",
    "justificada": "True"
  },
  {
    "id_falta": 705,
    "id_aluno": 28,
    "disciplina": "Inglês",
    "data": "2025-06-14",
    "justificada": "False"
  },
  {
    "id_falta": 706,
    "id_aluno": 116,
    "disciplina": "História",
    "data": "2024-11-23",
    "justificada": "True"
  },
  {
    "id_falta": 707,
    "id_aluno": 117,
    "disciplina": "Química",
    "data": "2024-12-03",
    "justificada": "False"
  },
  {
    "id_falta": 708,
    "id_aluno": 11,
    "disciplina": "História",
    "data": "2025-02-07",
    "justificada": "True"
  },
  {
    "id_falta": 709,
    "id_aluno": 63,
    "disciplina": "Física",
    "data": "2024-11-01",
    "justificada": "True"
  },
  {
    "id_falta": 710,
    "id_aluno": 133,
    "disciplina": "Inglês",
    "data": "2025-01-21",
    "justificada": "False"
  },
  {
    "id_falta": 711,
    "id_aluno": 138,
    "disciplina": "Matemática",
    "data": "2025-05-30",
    "justificada": "True"
  },
  {
    "id_falta": 712,
    "id_aluno": 102,
    "disciplina": "Português",
    "data": "2025-02-27",
    "justificada": "True"
  },
  {
    "id_falta": 713,
    "id_aluno": 189,
    "disciplina": "Química",
    "data": "2024-12-07",
    "justificada": "True"
  },
  {
    "id_falta": 714,
    "id_aluno": 11,
    "disciplina": "Física",
    "data": "2025-06-15",
    "justificada": "False"
  },
  {
    "id_falta": 715,
    "id_aluno": 143,
    "disciplina": "Matemática",
    "data": "2025-07-02",
    "justificada": "False"
  },
  {
    "id_falta": 716,
    "id_aluno": 100,
    "disciplina": "Biologia",
    "data": "2025-06-15",
    "justificada": "False"
  },
  {
    "id_falta": 717,
    "id_aluno": 133,
    "disciplina": "Química",
    "data": "2025-06-25",
    "justificada": "False"
  },
  {
    "id_falta": 718,
    "id_aluno": 196,
    "disciplina": "Biologia",
    "data": "2024-09-16",
    "justificada": "False"
  },
  {
    "id_falta": 719,
    "id_aluno": 162,
    "disciplina": "Geografia",
    "data": "2024-10-20",
    "justificada": "False"
  },
  {
    "id_falta": 720,
    "id_aluno": 13,
    "disciplina": "Português",
    "data": "2025-04-22",
    "justificada": "False"
  },
  {
    "id_falta": 721,
    "id_aluno": 49,
    "disciplina": "Física",
    "data": "2025-05-11",
    "justificada": "False"
  },
  {
    "id_falta": 722,
    "id_aluno": 75,
    "disciplina": "Matemática",
    "data": "2024-11-08",
    "justificada": "True"
  },
  {
    "id_falta": 723,
    "id_aluno": 113,
    "disciplina": "Física",
    "data": "2025-02-04",
    "justificada": "True"
  },
  {
    "id_falta": 724,
    "id_aluno": 102,
    "disciplina": "Matemática",
    "data": "2025-04-22",
    "justificada": "True"
  },
  {
    "id_falta": 725,
    "id_aluno": 78,
    "disciplina": "Português",
    "data": "2025-06-01",
    "justificada": "True"
  },
  {
    "id_falta": 726,
    "id_aluno": 199,
    "disciplina": "Química",
    "data": "2025-02-16",
    "justificada": "True"
  },
  {
    "id_falta": 727,
    "id_aluno": 74,
    "disciplina": "Física",
    "data": "2025-05-27",
    "justificada": "True"
  },
  {
    "id_falta": 728,
    "id_aluno": 119,
    "disciplina": "Inglês",
    "data": "2024-09-09",
    "justificada": "True"
  },
  {
    "id_falta": 729,
    "id_aluno": 43,
    "disciplina": "Matemática",
    "data": "2024-07-31",
    "justificada": "True"
  },
  {
    "id_falta": 730,
    "id_aluno": 109,
    "disciplina": "Física",
    "data": "2025-03-16",
    "justificada": "True"
  },
  {
    "id_falta": 731,
    "id_aluno": 76,
    "disciplina": "Física",
    "data": "2025-06-14",
    "justificada": "True"
  },
  {
    "id_falta": 732,
    "id_aluno": 157,
    "disciplina": "História",
    "data": "2025-07-25",
    "justificada": "False"
  },
  {
    "id_falta": 733,
    "id_aluno": 14,
    "disciplina": "Português",
    "data": "2025-06-01",
    "justificada": "True"
  },
  {
    "id_falta": 734,
    "id_aluno": 177,
    "disciplina": "Geografia",
    "data": "2024-08-28",
    "justificada": "True"
  },
  {
    "id_falta": 735,
    "id_aluno": 133,
    "disciplina": "História",
    "data": "2024-11-30",
    "justificada": "False"
  },
  {
    "id_falta": 736,
    "id_aluno": 37,
    "disciplina": "Física",
    "data": "2024-10-14",
    "justificada": "True"
  },
  {
    "id_falta": 737,
    "id_aluno": 119,
    "disciplina": "Geografia",
    "data": "2025-03-12",
    "justificada": "True"
  },
  {
    "id_falta": 738,
    "id_aluno": 166,
    "disciplina": "Português",
    "data": "2024-12-31",
    "justificada": "False"
  },
  {
    "id_falta": 739,
    "id_aluno": 116,
    "disciplina": "Inglês",
    "data": "2025-05-07",
    "justificada": "False"
  },
  {
    "id_falta": 740,
    "id_aluno": 24,
    "disciplina": "Geografia",
    "data": "2025-03-26",
    "justificada": "True"
  },
  {
    "id_falta": 741,
    "id_aluno": 185,
    "disciplina": "Geografia",
    "data": "2024-09-30",
    "justificada": "False"
  },
  {
    "id_falta": 742,
    "id_aluno": 129,
    "disciplina": "Física",
    "data": "2024-11-23",
    "justificada": "False"
  },
  {
    "id_falta": 743,
    "id_aluno": 29,
    "disciplina": "Física",
    "data": "2025-02-23",
    "justificada": "True"
  },
  {
    "id_falta": 744,
    "id_aluno": 47,
    "disciplina": "Biologia",
    "data": "2024-09-03",
    "justificada": "True"
  },
  {
    "id_falta": 745,
    "id_aluno": 200,
    "disciplina": "Química",
    "data": "2025-02-20",
    "justificada": "True"
  },
  {
    "id_falta": 746,
    "id_aluno": 150,
    "disciplina": "Biologia",
    "data": "2025-06-28",
    "justificada": "True"
  },
  {
    "id_falta": 747,
    "id_aluno": 179,
    "disciplina": "Matemática",
    "data": "2024-12-23",
    "justificada": "False"
  },
  {
    "id_falta": 748,
    "id_aluno": 140,
    "disciplina": "Português",
    "data": "2025-04-29",
    "justificada": "False"
  },
  {
    "id_falta": 749,
    "id_aluno": 35,
    "disciplina": "Física",
    "data": "2025-02-20",
    "justificada": "False"
  },
  {
    "id_falta": 750,
    "id_aluno": 101,
    "disciplina": "Física",
    "data": "2025-04-07",
    "justificada": "True"
  },
  {
    "id_falta": 751,
    "id_aluno": 106,
    "disciplina": "Inglês",
    "data": "2025-03-27",
    "justificada": "False"
  },
  {
    "id_falta": 752,
    "id_aluno": 83,
    "disciplina": "Inglês",
    "data": "2024-09-15",
    "justificada": "True"
  },
  {
    "id_falta": 753,
    "id_aluno": 116,
    "disciplina": "Português",
    "data": "2024-08-30",
    "justificada": "True"
  },
  {
    "id_falta": 754,
    "id_aluno": 7,
    "disciplina": "Inglês",
    "data": "2025-04-20",
    "justificada": "False"
  },
  {
    "id_falta": 755,
    "id_aluno": 46,
    "disciplina": "Biologia",
    "data": "2025-05-20",
    "justificada": "False"
  },
  {
    "id_falta": 756,
    "id_aluno": 117,
    "disciplina": "Inglês",
    "data": "2024-09-19",
    "justificada": "True"
  },
  {
    "id_falta": 757,
    "id_aluno": 152,
    "disciplina": "Física",
    "data": "2024-08-24",
    "justificada": "False"
  },
  {
    "id_falta": 758,
    "id_aluno": 183,
    "disciplina": "Português",
    "data": "2025-04-08",
    "justificada": "True"
  },
  {
    "id_falta": 759,
    "id_aluno": 52,
    "disciplina": "Geografia",
    "data": "2025-07-27",
    "justificada": "True"
  },
  {
    "id_falta": 760,
    "id_aluno": 117,
    "disciplina": "Inglês",
    "data": "2024-10-02",
    "justificada": "False"
  },
  {
    "id_falta": 761,
    "id_aluno": 24,
    "disciplina": "Português",
    "data": "2024-12-07",
    "justificada": "False"
  },
  {
    "id_falta": 762,
    "id_aluno": 65,
    "disciplina": "Português",
    "data": "2024-08-17",
    "justificada": "False"
  },
  {
    "id_falta": 763,
    "id_aluno": 83,
    "disciplina": "Química",
    "data": "2024-10-10",
    "justificada": "False"
  },
  {
    "id_falta": 764,
    "id_aluno": 178,
    "disciplina": "História",
    "data": "2024-10-28",
    "justificada": "True"
  },
  {
    "id_falta": 765,
    "id_aluno": 167,
    "disciplina": "Biologia",
    "data": "2025-02-07",
    "justificada": "False"
  },
  {
    "id_falta": 766,
    "id_aluno": 183,
    "disciplina": "Português",
    "data": "2025-04-06",
    "justificada": "False"
  },
  {
    "id_falta": 767,
    "id_aluno": 42,
    "disciplina": "Português",
    "data": "2024-09-10",
    "justificada": "False"
  },
  {
    "id_falta": 768,
    "id_aluno": 184,
    "disciplina": "História",
    "data": "2024-10-13",
    "justificada": "False"
  },
  {
    "id_falta": 769,
    "id_aluno": 188,
    "disciplina": "Biologia",
    "data": "2025-02-12",
    "justificada": "True"
  },
  {
    "id_falta": 770,
    "id_aluno": 32,
    "disciplina": "Português",
    "data": "2025-05-24",
    "justificada": "True"
  },
  {
    "id_falta": 771,
    "id_aluno": 24,
    "disciplina": "História",
    "data": "2024-09-17",
    "justificada": "True"
  },
  {
    "id_falta": 772,
    "id_aluno": 30,
    "disciplina": "Inglês",
    "data": "2025-04-14",
    "justificada": "False"
  },
  {
    "id_falta": 773,
    "id_aluno": 181,
    "disciplina": "História",
    "data": "2024-11-19",
    "justificada": "False"
  },
  {
    "id_falta": 774,
    "id_aluno": 116,
    "disciplina": "Geografia",
    "data": "2025-07-20",
    "justificada": "True"
  },
  {
    "id_falta": 775,
    "id_aluno": 163,
    "disciplina": "Matemática",
    "data": "2025-03-19",
    "justificada": "False"
  },
  {
    "id_falta": 776,
    "id_aluno": 93,
    "disciplina": "Biologia",
    "data": "2025-02-02",
    "justificada": "False"
  },
  {
    "id_falta": 777,
    "id_aluno": 22,
    "disciplina": "Química",
    "data": "2024-10-29",
    "justificada": "False"
  },
  {
    "id_falta": 778,
    "id_aluno": 135,
    "disciplina": "História",
    "data": "2025-02-11",
    "justificada": "True"
  },
  {
    "id_falta": 779,
    "id_aluno": 182,
    "disciplina": "Inglês",
    "data": "2025-07-02",
    "justificada": "False"
  },
  {
    "id_falta": 780,
    "id_aluno": 99,
    "disciplina": "Física",
    "data": "2024-09-02",
    "justificada": "False"
  },
  {
    "id_falta": 781,
    "id_aluno": 187,
    "disciplina": "Química",
    "data": "2025-04-30",
    "justificada": "False"
  },
  {
    "id_falta": 782,
    "id_aluno": 131,
    "disciplina": "Inglês",
    "data": "2025-01-01",
    "justificada": "False"
  },
  {
    "id_falta": 783,
    "id_aluno": 157,
    "disciplina": "Matemática",
    "data": "2025-04-08",
    "justificada": "True"
  },
  {
    "id_falta": 784,
    "id_aluno": 41,
    "disciplina": "Biologia",
    "data": "2025-02-26",
    "justificada": "True"
  },
  {
    "id_falta": 785,
    "id_aluno": 97,
    "disciplina": "Geografia",
    "data": "2025-07-24",
    "justificada": "False"
  },
  {
    "id_falta": 786,
    "id_aluno": 141,
    "disciplina": "Português",
    "data": "2024-08-20",
    "justificada": "True"
  },
  {
    "id_falta": 787,
    "id_aluno": 98,
    "disciplina": "Matemática",
    "data": "2025-06-04",
    "justificada": "False"
  },
  {
    "id_falta": 788,
    "id_aluno": 12,
    "disciplina": "Geografia",
    "data": "2024-10-17",
    "justificada": "False"
  },
  {
    "id_falta": 789,
    "id_aluno": 197,
    "disciplina": "Física",
    "data": "2024-12-14",
    "justificada": "False"
  },
  {
    "id_falta": 790,
    "id_aluno": 44,
    "disciplina": "Química",
    "data": "2024-12-30",
    "justificada": "True"
  },
  {
    "id_falta": 791,
    "id_aluno": 86,
    "disciplina": "Física",
    "data": "2025-01-14",
    "justificada": "True"
  },
  {
    "id_falta": 792,
    "id_aluno": 145,
    "disciplina": "Física",
    "data": "2024-09-10",
    "justificada": "False"
  },
  {
    "id_falta": 793,
    "id_aluno": 169,
    "disciplina": "Inglês",
    "data": "2024-12-01",
    "justificada": "False"
  },
  {
    "id_falta": 794,
    "id_aluno": 39,
    "disciplina": "Inglês",
    "data": "2025-01-10",
    "justificada": "True"
  },
  {
    "id_falta": 795,
    "id_aluno": 42,
    "disciplina": "Inglês",
    "data": "2024-11-21",
    "justificada": "False"
  },
  {
    "id_falta": 796,
    "id_aluno": 38,
    "disciplina": "Biologia",
    "data": "2025-05-28",
    "justificada": "False"
  },
  {
    "id_falta": 797,
    "id_aluno": 46,
    "disciplina": "História",
    "data": "2024-08-02",
    "justificada": "False"
  },
  {
    "id_falta": 798,
    "id_aluno": 197,
    "disciplina": "Biologia",
    "data": "2024-11-11",
    "justificada": "False"
  },
  {
    "id_falta": 799,
    "id_aluno": 183,
    "disciplina": "História",
    "data": "2025-04-17",
    "justificada": "False"
  },
  {
    "id_falta": 800,
    "id_aluno": 14,
    "disciplina": "Biologia",
    "data": "2025-01-25",
    "justificada": "True"
  },
  {
    "id_falta": 801,
    "id_aluno": 108,
    "disciplina": "Geografia",
    "data": "2024-12-06",
    "justificada": "True"
  },
  {
    "id_falta": 802,
    "id_aluno": 79,
    "disciplina": "Inglês",
    "data": "2025-03-03",
    "justificada": "False"
  },
  {
    "id_falta": 803,
    "id_aluno": 80,
    "disciplina": "Física",
    "data": "2024-12-20",
    "justificada": "True"
  },
  {
    "id_falta": 804,
    "id_aluno": 187,
    "disciplina": "Biologia",
    "data": "2024-09-24",
    "justificada": "False"
  },
  {
    "id_falta": 805,
    "id_aluno": 197,
    "disciplina": "Matemática",
    "data": "2025-05-18",
    "justificada": "True"
  },
  {
    "id_falta": 806,
    "id_aluno": 115,
    "disciplina": "História",
    "data": "2025-04-06",
    "justificada": "True"
  },
  {
    "id_falta": 807,
    "id_aluno": 74,
    "disciplina": "Física",
    "data": "2025-07-29",
    "justificada": "True"
  },
  {
    "id_falta": 808,
    "id_aluno": 161,
    "disciplina": "Biologia",
    "data": "2025-03-24",
    "justificada": "True"
  },
  {
    "id_falta": 809,
    "id_aluno": 47,
    "disciplina": "Inglês",
    "data": "2024-09-05",
    "justificada": "False"
  },
  {
    "id_falta": 810,
    "id_aluno": 31,
    "disciplina": "História",
    "data": "2024-12-04",
    "justificada": "True"
  },
  {
    "id_falta": 811,
    "id_aluno": 34,
    "disciplina": "História",
    "data": "2025-02-02",
    "justificada": "False"
  },
  {
    "id_falta": 812,
    "id_aluno": 52,
    "disciplina": "Biologia",
    "data": "2025-05-31",
    "justificada": "False"
  },
  {
    "id_falta": 813,
    "id_aluno": 1,
    "disciplina": "História",
    "data": "2024-09-06",
    "justificada": "False"
  },
  {
    "id_falta": 814,
    "id_aluno": 160,
    "disciplina": "História",
    "data": "2024-08-01",
    "justificada": "True"
  },
  {
    "id_falta": 815,
    "id_aluno": 196,
    "disciplina": "História",
    "data": "2025-07-14",
    "justificada": "True"
  },
  {
    "id_falta": 816,
    "id_aluno": 65,
    "disciplina": "História",
    "data": "2024-10-23",
    "justificada": "True"
  },
  {
    "id_falta": 817,
    "id_aluno": 4,
    "disciplina": "Geografia",
    "data": "2024-09-26",
    "justificada": "True"
  },
  {
    "id_falta": 818,
    "id_aluno": 118,
    "disciplina": "Português",
    "data": "2025-01-22",
    "justificada": "False"
  },
  {
    "id_falta": 819,
    "id_aluno": 128,
    "disciplina": "Matemática",
    "data": "2025-07-17",
    "justificada": "False"
  },
  {
    "id_falta": 820,
    "id_aluno": 128,
    "disciplina": "Física",
    "data": "2024-11-03",
    "justificada": "False"
  },
  {
    "id_falta": 821,
    "id_aluno": 140,
    "disciplina": "História",
    "data": "2024-11-26",
    "justificada": "True"
  },
  {
    "id_falta": 822,
    "id_aluno": 2,
    "disciplina": "Inglês",
    "data": "2025-03-28",
    "justificada": "True"
  },
  {
    "id_falta": 823,
    "id_aluno": 156,
    "disciplina": "Biologia",
    "data": "2024-12-05",
    "justificada": "True"
  },
  {
    "id_falta": 824,
    "id_aluno": 127,
    "disciplina": "Física",
    "data": "2024-09-16",
    "justificada": "True"
  },
  {
    "id_falta": 825,
    "id_aluno": 61,
    "disciplina": "História",
    "data": "2025-05-30",
    "justificada": "False"
  },
  {
    "id_falta": 826,
    "id_aluno": 56,
    "disciplina": "Geografia",
    "data": "2024-08-26",
    "justificada": "False"
  },
  {
    "id_falta": 827,
    "id_aluno": 151,
    "disciplina": "Matemática",
    "data": "2025-05-20",
    "justificada": "True"
  },
  {
    "id_falta": 828,
    "id_aluno": 169,
    "disciplina": "Física",
    "data": "2025-06-11",
    "justificada": "True"
  },
  {
    "id_falta": 829,
    "id_aluno": 122,
    "disciplina": "Física",
    "data": "2025-03-28",
    "justificada": "True"
  },
  {
    "id_falta": 830,
    "id_aluno": 117,
    "disciplina": "História",
    "data": "2024-08-06",
    "justificada": "True"
  },
  {
    "id_falta": 831,
    "id_aluno": 105,
    "disciplina": "Física",
    "data": "2025-05-15",
    "justificada": "False"
  },
  {
    "id_falta": 832,
    "id_aluno": 114,
    "disciplina": "Inglês",
    "data": "2025-07-29",
    "justificada": "False"
  },
  {
    "id_falta": 833,
    "id_aluno": 21,
    "disciplina": "História",
    "data": "2024-12-21",
    "justificada": "False"
  },
  {
    "id_falta": 834,
    "id_aluno": 154,
    "disciplina": "Biologia",
    "data": "2025-04-19",
    "justificada": "False"
  },
  {
    "id_falta": 835,
    "id_aluno": 154,
    "disciplina": "Português",
    "data": "2025-07-24",
    "justificada": "True"
  },
  {
    "id_falta": 836,
    "id_aluno": 2,
    "disciplina": "Matemática",
    "data": "2024-10-22",
    "justificada": "False"
  },
  {
    "id_falta": 837,
    "id_aluno": 63,
    "disciplina": "Química",
    "data": "2024-09-19",
    "justificada": "True"
  },
  {
    "id_falta": 838,
    "id_aluno": 141,
    "disciplina": "Inglês",
    "data": "2025-03-23",
    "justificada": "True"
  },
  {
    "id_falta": 839,
    "id_aluno": 72,
    "disciplina": "História",
    "data": "2024-08-09",
    "justificada": "True"
  },
  {
    "id_falta": 840,
    "id_aluno": 159,
    "disciplina": "Inglês",
    "data": "2025-01-19",
    "justificada": "False"
  },
  {
    "id_falta": 841,
    "id_aluno": 161,
    "disciplina": "Física",
    "data": "2025-03-03",
    "justificada": "False"
  },
  {
    "id_falta": 842,
    "id_aluno": 143,
    "disciplina": "História",
    "data": "2025-04-10",
    "justificada": "True"
  },
  {
    "id_falta": 843,
    "id_aluno": 54,
    "disciplina": "Matemática",
    "data": "2025-06-16",
    "justificada": "True"
  },
  {
    "id_falta": 844,
    "id_aluno": 13,
    "disciplina": "Física",
    "data": "2025-04-24",
    "justificada": "True"
  },
  {
    "id_falta": 845,
    "id_aluno": 48,
    "disciplina": "Biologia",
    "data": "2025-03-25",
    "justificada": "True"
  },
  {
    "id_falta": 846,
    "id_aluno": 38,
    "disciplina": "Inglês",
    "data": "2025-04-20",
    "justificada": "True"
  },
  {
    "id_falta": 847,
    "id_aluno": 15,
    "disciplina": "Biologia",
    "data": "2025-07-27",
    "justificada": "True"
  },
  {
    "id_falta": 848,
    "id_aluno": 168,
    "disciplina": "História",
    "data": "2024-07-30",
    "justificada": "True"
  },
  {
    "id_falta": 849,
    "id_aluno": 90,
    "disciplina": "Inglês",
    "data": "2024-09-18",
    "justificada": "True"
  },
  {
    "id_falta": 850,
    "id_aluno": 10,
    "disciplina": "Física",
    "data": "2025-01-25",
    "justificada": "False"
  },
  {
    "id_falta": 851,
    "id_aluno": 38,
    "disciplina": "Português",
    "data": "2025-05-30",
    "justificada": "True"
  },
  {
    "id_falta": 852,
    "id_aluno": 9,
    "disciplina": "Inglês",
    "data": "2024-08-25",
    "justificada": "False"
  },
  {
    "id_falta": 853,
    "id_aluno": 171,
    "disciplina": "Matemática",
    "data": "2025-04-07",
    "justificada": "False"
  },
  {
    "id_falta": 854,
    "id_aluno": 148,
    "disciplina": "História",
    "data": "2025-03-12",
    "justificada": "False"
  },
  {
    "id_falta": 855,
    "id_aluno": 155,
    "disciplina": "Português",
    "data": "2024-12-23",
    "justificada": "True"
  },
  {
    "id_falta": 856,
    "id_aluno": 77,
    "disciplina": "Biologia",
    "data": "2024-10-29",
    "justificada": "True"
  },
  {
    "id_falta": 857,
    "id_aluno": 85,
    "disciplina": "Matemática",
    "data": "2024-12-22",
    "justificada": "False"
  },
  {
    "id_falta": 858,
    "id_aluno": 23,
    "disciplina": "Química",
    "data": "2025-01-04",
    "justificada": "False"
  },
  {
    "id_falta": 859,
    "id_aluno": 13,
    "disciplina": "Geografia",
    "data": "2024-09-28",
    "justificada": "True"
  },
  {
    "id_falta": 860,
    "id_aluno": 28,
    "disciplina": "Inglês",
    "data": "2025-01-28",
    "justificada": "True"
  },
  {
    "id_falta": 861,
    "id_aluno": 107,
    "disciplina": "Física",
    "data": "2024-10-21",
    "justificada": "True"
  },
  {
    "id_falta": 862,
    "id_aluno": 46,
    "disciplina": "Português",
    "data": "2025-01-08",
    "justificada": "False"
  },
  {
    "id_falta": 863,
    "id_aluno": 42,
    "disciplina": "Física",
    "data": "2024-12-13",
    "justificada": "False"
  },
  {
    "id_falta": 864,
    "id_aluno": 173,
    "disciplina": "Matemática",
    "data": "2025-04-11",
    "justificada": "True"
  },
  {
    "id_falta": 865,
    "id_aluno": 73,
    "disciplina": "Geografia",
    "data": "2025-07-14",
    "justificada": "True"
  },
  {
    "id_falta": 866,
    "id_aluno": 157,
    "disciplina": "Geografia",
    "data": "2025-06-22",
    "justificada": "False"
  },
  {
    "id_falta": 867,
    "id_aluno": 170,
    "disciplina": "Biologia",
    "data": "2024-08-08",
    "justificada": "False"
  },
  {
    "id_falta": 868,
    "id_aluno": 178,
    "disciplina": "Geografia",
    "data": "2025-05-18",
    "justificada": "False"
  },
  {
    "id_falta": 869,
    "id_aluno": 180,
    "disciplina": "Matemática",
    "data": "2025-03-28",
    "justificada": "True"
  },
  {
    "id_falta": 870,
    "id_aluno": 153,
    "disciplina": "Português",
    "data": "2025-05-23",
    "justificada": "True"
  },
  {
    "id_falta": 871,
    "id_aluno": 147,
    "disciplina": "Inglês",
    "data": "2024-09-25",
    "justificada": "False"
  },
  {
    "id_falta": 872,
    "id_aluno": 144,
    "disciplina": "Português",
    "data": "2024-11-25",
    "justificada": "False"
  },
  {
    "id_falta": 873,
    "id_aluno": 46,
    "disciplina": "Química",
    "data": "2025-06-04",
    "justificada": "False"
  },
  {
    "id_falta": 874,
    "id_aluno": 117,
    "disciplina": "Geografia",
    "data": "2024-08-16",
    "justificada": "False"
  },
  {
    "id_falta": 875,
    "id_aluno": 192,
    "disciplina": "Inglês",
    "data": "2025-01-10",
    "justificada": "True"
  },
  {
    "id_falta": 876,
    "id_aluno": 149,
    "disciplina": "Física",
    "data": "2024-08-20",
    "justificada": "True"
  },
  {
    "id_falta": 877,
    "id_aluno": 93,
    "disciplina": "Matemática",
    "data": "2024-08-13",
    "justificada": "False"
  },
  {
    "id_falta": 878,
    "id_aluno": 10,
    "disciplina": "Física",
    "data": "2025-03-17",
    "justificada": "True"
  },
  {
    "id_falta": 879,
    "id_aluno": 24,
    "disciplina": "Química",
    "data": "2024-09-11",
    "justificada": "True"
  },
  {
    "id_falta": 880,
    "id_aluno": 197,
    "disciplina": "História",
    "data": "2025-04-11",
    "justificada": "False"
  },
  {
    "id_falta": 881,
    "id_aluno": 77,
    "disciplina": "Química",
    "data": "2025-03-29",
    "justificada": "False"
  },
  {
    "id_falta": 882,
    "id_aluno": 83,
    "disciplina": "Física",
    "data": "2025-06-08",
    "justificada": "False"
  },
  {
    "id_falta": 883,
    "id_aluno": 95,
    "disciplina": "Química",
    "data": "2025-02-15",
    "justificada": "False"
  },
  {
    "id_falta": 884,
    "id_aluno": 98,
    "disciplina": "Física",
    "data": "2025-04-06",
    "justificada": "False"
  },
  {
    "id_falta": 885,
    "id_aluno": 18,
    "disciplina": "Matemática",
    "data": "2025-03-03",
    "justificada": "True"
  },
  {
    "id_falta": 886,
    "id_aluno": 195,
    "disciplina": "Biologia",
    "data": "2024-10-24",
    "justificada": "False"
  },
  {
    "id_falta": 887,
    "id_aluno": 110,
    "disciplina": "Física",
    "data": "2025-04-09",
    "justificada": "True"
  },
  {
    "id_falta": 888,
    "id_aluno": 141,
    "disciplina": "Física",
    "data": "2025-02-21",
    "justificada": "True"
  },
  {
    "id_falta": 889,
    "id_aluno": 17,
    "disciplina": "Biologia",
    "data": "2025-03-15",
    "justificada": "True"
  },
  {
    "id_falta": 890,
    "id_aluno": 75,
    "disciplina": "Inglês",
    "data": "2025-03-10",
    "justificada": "True"
  },
  {
    "id_falta": 891,
    "id_aluno": 121,
    "disciplina": "Português",
    "data": "2024-09-05",
    "justificada": "False"
  },
  {
    "id_falta": 892,
    "id_aluno": 35,
    "disciplina": "Geografia",
    "data": "2024-11-26",
    "justificada": "False"
  },
  {
    "id_falta": 893,
    "id_aluno": 32,
    "disciplina": "Inglês",
    "data": "2025-02-04",
    "justificada": "False"
  },
  {
    "id_falta": 894,
    "id_aluno": 178,
    "disciplina": "Química",
    "data": "2025-05-08",
    "justificada": "True"
  },
  {
    "id_falta": 895,
    "id_aluno": 71,
    "disciplina": "Inglês",
    "data": "2025-04-29",
    "justificada": "False"
  },
  {
    "id_falta": 896,
    "id_aluno": 85,
    "disciplina": "Biologia",
    "data": "2024-08-17",
    "justificada": "True"
  },
  {
    "id_falta": 897,
    "id_aluno": 135,
    "disciplina": "História",
    "data": "2025-07-14",
    "justificada": "False"
  },
  {
    "id_falta": 898,
    "id_aluno": 106,
    "disciplina": "Química",
    "data": "2025-01-30",
    "justificada": "True"
  },
  {
    "id_falta": 899,
    "id_aluno": 135,
    "disciplina": "Química",
    "data": "2025-04-12",
    "justificada": "True"
  },
  {
    "id_falta": 900,
    "id_aluno": 54,
    "disciplina": "História",
    "data": "2024-08-27",
    "justificada": "True"
  },
  {
    "id_falta": 901,
    "id_aluno": 179,
    "disciplina": "Português",
    "data": "2024-11-12",
    "justificada": "False"
  },
  {
    "id_falta": 902,
    "id_aluno": 54,
    "disciplina": "História",
    "data": "2024-10-25",
    "justificada": "False"
  },
  {
    "id_falta": 903,
    "id_aluno": 157,
    "disciplina": "Geografia",
    "data": "2025-02-14",
    "justificada": "False"
  },
  {
    "id_falta": 904,
    "id_aluno": 15,
    "disciplina": "Biologia",
    "data": "2025-06-03",
    "justificada": "False"
  },
  {
    "id_falta": 905,
    "id_aluno": 28,
    "disciplina": "Inglês",
    "data": "2024-11-18",
    "justificada": "False"
  },
  {
    "id_falta": 906,
    "id_aluno": 147,
    "disciplina": "Física",
    "data": "2024-09-28",
    "justificada": "False"
  },
  {
    "id_falta": 907,
    "id_aluno": 187,
    "disciplina": "Português",
    "data": "2024-10-09",
    "justificada": "True"
  },
  {
    "id_falta": 908,
    "id_aluno": 162,
    "disciplina": "Química",
    "data": "2024-12-31",
    "justificada": "False"
  },
  {
    "id_falta": 909,
    "id_aluno": 136,
    "disciplina": "Português",
    "data": "2024-08-07",
    "justificada": "True"
  },
  {
    "id_falta": 910,
    "id_aluno": 23,
    "disciplina": "Matemática",
    "data": "2025-06-10",
    "justificada": "False"
  },
  {
    "id_falta": 911,
    "id_aluno": 124,
    "disciplina": "Química",
    "data": "2025-04-06",
    "justificada": "False"
  },
  {
    "id_falta": 912,
    "id_aluno": 186,
    "disciplina": "Biologia",
    "data": "2024-08-31",
    "justificada": "True"
  },
  {
    "id_falta": 913,
    "id_aluno": 177,
    "disciplina": "Química",
    "data": "2025-07-20",
    "justificada": "False"
  },
  {
    "id_falta": 914,
    "id_aluno": 155,
    "disciplina": "História",
    "data": "2025-02-25",
    "justificada": "False"
  },
  {
    "id_falta": 915,
    "id_aluno": 181,
    "disciplina": "Inglês",
    "data": "2024-11-12",
    "justificada": "False"
  },
  {
    "id_falta": 916,
    "id_aluno": 74,
    "disciplina": "História",
    "data": "2024-09-26",
    "justificada": "True"
  },
  {
    "id_falta": 917,
    "id_aluno": 110,
    "disciplina": "Geografia",
    "data": "2024-09-23",
    "justificada": "False"
  },
  {
    "id_falta": 918,
    "id_aluno": 156,
    "disciplina": "História",
    "data": "2024-09-02",
    "justificada": "True"
  },
  {
    "id_falta": 919,
    "id_aluno": 82,
    "disciplina": "Química",
    "data": "2024-10-31",
    "justificada": "True"
  },
  {
    "id_falta": 920,
    "id_aluno": 67,
    "disciplina": "Biologia",
    "data": "2025-04-24",
    "justificada": "False"
  },
  {
    "id_falta": 921,
    "id_aluno": 135,
    "disciplina": "Inglês",
    "data": "2025-03-25",
    "justificada": "False"
  },
  {
    "id_falta": 922,
    "id_aluno": 148,
    "disciplina": "Matemática",
    "data": "2025-06-12",
    "justificada": "True"
  },
  {
    "id_falta": 923,
    "id_aluno": 160,
    "disciplina": "Biologia",
    "data": "2024-10-04",
    "justificada": "False"
  },
  {
    "id_falta": 924,
    "id_aluno": 91,
    "disciplina": "Biologia",
    "data": "2024-11-19",
    "justificada": "True"
  },
  {
    "id_falta": 925,
    "id_aluno": 34,
    "disciplina": "Inglês",
    "data": "2024-09-21",
    "justificada": "True"
  },
  {
    "id_falta": 926,
    "id_aluno": 158,
    "disciplina": "Inglês",
    "data": "2024-08-05",
    "justificada": "False"
  },
  {
    "id_falta": 927,
    "id_aluno": 145,
    "disciplina": "Geografia",
    "data": "2025-06-28",
    "justificada": "False"
  },
  {
    "id_falta": 928,
    "id_aluno": 128,
    "disciplina": "Matemática",
    "data": "2025-02-17",
    "justificada": "True"
  },
  {
    "id_falta": 929,
    "id_aluno": 134,
    "disciplina": "Matemática",
    "data": "2024-09-18",
    "justificada": "True"
  },
  {
    "id_falta": 930,
    "id_aluno": 187,
    "disciplina": "História",
    "data": "2024-12-28",
    "justificada": "True"
  },
  {
    "id_falta": 931,
    "id_aluno": 162,
    "disciplina": "Biologia",
    "data": "2025-01-08",
    "justificada": "False"
  },
  {
    "id_falta": 932,
    "id_aluno": 128,
    "disciplina": "Biologia",
    "data": "2025-03-11",
    "justificada": "True"
  },
  {
    "id_falta": 933,
    "id_aluno": 127,
    "disciplina": "Inglês",
    "data": "2024-10-20",
    "justificada": "False"
  },
  {
    "id_falta": 934,
    "id_aluno": 47,
    "disciplina": "Português",
    "data": "2024-10-23",
    "justificada": "False"
  },
  {
    "id_falta": 935,
    "id_aluno": 157,
    "disciplina": "Biologia",
    "data": "2024-11-17",
    "justificada": "True"
  },
  {
    "id_falta": 936,
    "id_aluno": 60,
    "disciplina": "Química",
    "data": "2025-02-27",
    "justificada": "True"
  },
  {
    "id_falta": 937,
    "id_aluno": 182,
    "disciplina": "História",
    "data": "2025-05-13",
    "justificada": "False"
  },
  {
    "id_falta": 938,
    "id_aluno": 75,
    "disciplina": "Inglês",
    "data": "2025-02-20",
    "justificada": "False"
  },
  {
    "id_falta": 939,
    "id_aluno": 50,
    "disciplina": "Geografia",
    "data": "2024-08-14",
    "justificada": "False"
  },
  {
    "id_falta": 940,
    "id_aluno": 1,
    "disciplina": "Matemática",
    "data": "2025-06-09",
    "justificada": "True"
  },
  {
    "id_falta": 941,
    "id_aluno": 31,
    "disciplina": "Português",
    "data": "2025-01-29",
    "justificada": "True"
  },
  {
    "id_falta": 942,
    "id_aluno": 7,
    "disciplina": "Biologia",
    "data": "2024-09-14",
    "justificada": "True"
  },
  {
    "id_falta": 943,
    "id_aluno": 120,
    "disciplina": "Inglês",
    "data": "2025-01-24",
    "justificada": "False"
  },
  {
    "id_falta": 944,
    "id_aluno": 161,
    "disciplina": "Português",
    "data": "2025-01-13",
    "justificada": "False"
  },
  {
    "id_falta": 945,
    "id_aluno": 31,
    "disciplina": "Física",
    "data": "2025-02-10",
    "justificada": "True"
  },
  {
    "id_falta": 946,
    "id_aluno": 189,
    "disciplina": "Inglês",
    "data": "2024-12-30",
    "justificada": "False"
  },
  {
    "id_falta": 947,
    "id_aluno": 54,
    "disciplina": "Química",
    "data": "2025-07-29",
    "justificada": "False"
  },
  {
    "id_falta": 948,
    "id_aluno": 158,
    "disciplina": "Biologia",
    "data": "2024-09-18",
    "justificada": "True"
  },
  {
    "id_falta": 949,
    "id_aluno": 107,
    "disciplina": "Inglês",
    "data": "2025-04-22",
    "justificada": "True"
  },
  {
    "id_falta": 950,
    "id_aluno": 106,
    "disciplina": "Português",
    "data": "2025-05-30",
    "justificada": "False"
  },
  {
    "id_falta": 951,
    "id_aluno": 12,
    "disciplina": "Física",
    "data": "2025-07-15",
    "justificada": "False"
  },
  {
    "id_falta": 952,
    "id_aluno": 86,
    "disciplina": "Matemática",
    "data": "2024-12-20",
    "justificada": "False"
  },
  {
    "id_falta": 953,
    "id_aluno": 90,
    "disciplina": "Biologia",
    "data": "2024-08-10",
    "justificada": "True"
  },
  {
    "id_falta": 954,
    "id_aluno": 144,
    "disciplina": "História",
    "data": "2025-02-01",
    "justificada": "False"
  },
  {
    "id_falta": 955,
    "id_aluno": 164,
    "disciplina": "Matemática",
    "data": "2025-02-09",
    "justificada": "True"
  },
  {
    "id_falta": 956,
    "id_aluno": 55,
    "disciplina": "História",
    "data": "2024-10-19",
    "justificada": "True"
  },
  {
    "id_falta": 957,
    "id_aluno": 3,
    "disciplina": "Física",
    "data": "2024-09-15",
    "justificada": "False"
  },
  {
    "id_falta": 958,
    "id_aluno": 164,
    "disciplina": "Inglês",
    "data": "2024-11-09",
    "justificada": "True"
  },
  {
    "id_falta": 959,
    "id_aluno": 52,
    "disciplina": "História",
    "data": "2025-06-18",
    "justificada": "False"
  },
  {
    "id_falta": 960,
    "id_aluno": 177,
    "disciplina": "Física",
    "data": "2024-08-11",
    "justificada": "False"
  },
  {
    "id_falta": 961,
    "id_aluno": 73,
    "disciplina": "História",
    "data": "2025-06-23",
    "justificada": "True"
  },
  {
    "id_falta": 962,
    "id_aluno": 66,
    "disciplina": "Matemática",
    "data": "2025-03-06",
    "justificada": "True"
  },
  {
    "id_falta": 963,
    "id_aluno": 18,
    "disciplina": "Biologia",
    "data": "2024-11-28",
    "justificada": "False"
  },
  {
    "id_falta": 964,
    "id_aluno": 79,
    "disciplina": "Física",
    "data": "2025-05-05",
    "justificada": "False"
  },
  {
    "id_falta": 965,
    "id_aluno": 77,
    "disciplina": "Química",
    "data": "2024-10-19",
    "justificada": "True"
  },
  {
    "id_falta": 966,
    "id_aluno": 130,
    "disciplina": "Física",
    "data": "2025-06-17",
    "justificada": "True"
  },
  {
    "id_falta": 967,
    "id_aluno": 141,
    "disciplina": "Matemática",
    "data": "2025-04-03",
    "justificada": "True"
  },
  {
    "id_falta": 968,
    "id_aluno": 83,
    "disciplina": "Biologia",
    "data": "2024-09-28",
    "justificada": "False"
  },
  {
    "id_falta": 969,
    "id_aluno": 197,
    "disciplina": "Biologia",
    "data": "2025-05-01",
    "justificada": "True"
  },
  {
    "id_falta": 970,
    "id_aluno": 2,
    "disciplina": "Português",
    "data": "2025-03-01",
    "justificada": "False"
  },
  {
    "id_falta": 971,
    "id_aluno": 30,
    "disciplina": "Geografia",
    "data": "2024-10-10",
    "justificada": "True"
  },
  {
    "id_falta": 972,
    "id_aluno": 176,
    "disciplina": "História",
    "data": "2025-05-28",
    "justificada": "False"
  },
  {
    "id_falta": 973,
    "id_aluno": 86,
    "disciplina": "Português",
    "data": "2024-09-25",
    "justificada": "True"
  },
  {
    "id_falta": 974,
    "id_aluno": 88,
    "disciplina": "História",
    "data": "2024-11-12",
    "justificada": "False"
  },
  {
    "id_falta": 975,
    "id_aluno": 102,
    "disciplina": "Física",
    "data": "2025-02-17",
    "justificada": "False"
  },
  {
    "id_falta": 976,
    "id_aluno": 186,
    "disciplina": "Física",
    "data": "2025-03-11",
    "justificada": "False"
  },
  {
    "id_falta": 977,
    "id_aluno": 146,
    "disciplina": "Biologia",
    "data": "2024-11-14",
    "justificada": "False"
  },
  {
    "id_falta": 978,
    "id_aluno": 158,
    "disciplina": "Biologia",
    "data": "2025-06-26",
    "justificada": "False"
  },
  {
    "id_falta": 979,
    "id_aluno": 8,
    "disciplina": "Física",
    "data": "2025-02-18",
    "justificada": "False"
  },
  {
    "id_falta": 980,
    "id_aluno": 45,
    "disciplina": "Português",
    "data": "2025-03-19",
    "justificada": "False"
  },
  {
    "id_falta": 981,
    "id_aluno": 50,
    "disciplina": "Física",
    "data": "2025-04-27",
    "justificada": "False"
  },
  {
    "id_falta": 982,
    "id_aluno": 85,
    "disciplina": "História",
    "data": "2025-05-09",
    "justificada": "False"
  },
  {
    "id_falta": 983,
    "id_aluno": 87,
    "disciplina": "Matemática",
    "data": "2024-08-08",
    "justificada": "True"
  },
  {
    "id_falta": 984,
    "id_aluno": 173,
    "disciplina": "História",
    "data": "2024-09-11",
    "justificada": "True"
  },
  {
    "id_falta": 985,
    "id_aluno": 123,
    "disciplina": "Biologia",
    "data": "2025-03-31",
    "justificada": "True"
  },
  {
    "id_falta": 986,
    "id_aluno": 122,
    "disciplina": "Física",
    "data": "2025-02-23",
    "justificada": "False"
  },
  {
    "id_falta": 987,
    "id_aluno": 10,
    "disciplina": "Inglês",
    "data": "2024-10-03",
    "justificada": "False"
  },
  {
    "id_falta": 988,
    "id_aluno": 166,
    "disciplina": "Química",
    "data": "2025-07-23",
    "justificada": "True"
  },
  {
    "id_falta": 989,
    "id_aluno": 35,
    "disciplina": "Física",
    "data": "2024-12-12",
    "justificada": "True"
  },
  {
    "id_falta": 990,
    "id_aluno": 124,
    "disciplina": "História",
    "data": "2025-03-15",
    "justificada": "True"
  },
  {
    "id_falta": 991,
    "id_aluno": 40,
    "disciplina": "Português",
    "data": "2024-11-24",
    "justificada": "False"
  },
  {
    "id_falta": 992,
    "id_aluno": 161,
    "disciplina": "Geografia",
    "data": "2025-04-27",
    "justificada": "False"
  },
  {
    "id_falta": 993,
    "id_aluno": 118,
    "disciplina": "História",
    "data": "2024-08-07",
    "justificada": "True"
  },
  {
    "id_falta": 994,
    "id_aluno": 138,
    "disciplina": "Geografia",
    "data": "2024-11-30",
    "justificada": "True"
  },
  {
    "id_falta": 995,
    "id_aluno": 86,
    "disciplina": "Geografia",
    "data": "2025-05-31",
    "justificada": "False"
  },
  {
    "id_falta": 996,
    "id_aluno": 119,
    "disciplina": "Português",
    "data": "2025-06-12",
    "justificada": "True"
  },
  {
    "id_falta": 997,
    "id_aluno": 106,
    "disciplina": "Química",
    "data": "2024-12-08",
    "justificada": "False"
  },
  {
    "id_falta": 998,
    "id_aluno": 191,
    "disciplina": "Inglês",
    "data": "2025-04-25",
    "justificada": "True"
  },
  {
    "id_falta": 999,
    "id_aluno": 15,
    "disciplina": "Português",
    "data": "2025-03-14",
    "justificada": "True"
  },
  {
    "id_falta": 1000,
    "id_aluno": 134,
    "disciplina": "Português",
    "data": "2025-06-11",
    "justificada": "False"
  },
   {
    "id_falta": 1001,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
   {
    "id_falta": 1002,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
   {
    "id_falta": 1003,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
   {
    "id_falta": 1004,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
   {
    "id_falta": 1005,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
   {
    "id_falta": 1006,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
   {
    "id_falta": 1007,
    "id_aluno": 112,
    "disciplina": "Português",
    "data": "2024-10-29",
    "justificada": "True"
  },
];
    const notasData = [
  {
    "id_nota": 1,
    "id_aluno": 117,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 8
  },
  {
    "id_nota": 2,
    "id_aluno": 142,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 3.1
  },
  {
    "id_nota": 3,
    "id_aluno": 38,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 7.4
  },
  {
    "id_nota": 4,
    "id_aluno": 99,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 0.9
  },
  {
    "id_nota": 5,
    "id_aluno": 49,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 7.6
  },
  {
    "id_nota": 6,
    "id_aluno": 154,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 0.5
  },
  {
    "id_nota": 7,
    "id_aluno": 131,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 8,
    "id_aluno": 192,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 9,
    "id_aluno": 35,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 1.7
  },
  {
    "id_nota": 10,
    "id_aluno": 18,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 3.6
  },
  {
    "id_nota": 11,
    "id_aluno": 71,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 4.4
  },
  {
    "id_nota": 12,
    "id_aluno": 198,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 6.2
  },
  {
    "id_nota": 13,
    "id_aluno": 107,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 8.8
  },
  {
    "id_nota": 14,
    "id_aluno": 88,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 0.9
  },
  {
    "id_nota": 15,
    "id_aluno": 130,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 8.1
  },
  {
    "id_nota": 16,
    "id_aluno": 69,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 1.8
  },
  {
    "id_nota": 17,
    "id_aluno": 1,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 4
  },
  {
    "id_nota": 18,
    "id_aluno": 73,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 9.6
  },
  {
    "id_nota": 19,
    "id_aluno": 186,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 2.7
  },
  {
    "id_nota": 20,
    "id_aluno": 77,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.9
  },
  {
    "id_nota": 21,
    "id_aluno": 151,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 8.5
  },
  {
    "id_nota": 22,
    "id_aluno": 149,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 8
  },
  {
    "id_nota": 23,
    "id_aluno": 169,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 6.5
  },
  {
    "id_nota": 24,
    "id_aluno": 126,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 8
  },
  {
    "id_nota": 25,
    "id_aluno": 39,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 1.1
  },
  {
    "id_nota": 26,
    "id_aluno": 115,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 7
  },
  {
    "id_nota": 27,
    "id_aluno": 138,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 0.6
  },
  {
    "id_nota": 28,
    "id_aluno": 124,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 9.4
  },
  {
    "id_nota": 29,
    "id_aluno": 89,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 1.6
  },
  {
    "id_nota": 30,
    "id_aluno": 86,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 4.2
  },
  {
    "id_nota": 31,
    "id_aluno": 142,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 5.9
  },
  {
    "id_nota": 32,
    "id_aluno": 196,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 8
  },
  {
    "id_nota": 33,
    "id_aluno": 140,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 6.8
  },
  {
    "id_nota": 34,
    "id_aluno": 97,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 1.8
  },
  {
    "id_nota": 35,
    "id_aluno": 117,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 3.8
  },
  {
    "id_nota": 36,
    "id_aluno": 83,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 3.6
  },
  {
    "id_nota": 37,
    "id_aluno": 49,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 0.3
  },
  {
    "id_nota": 38,
    "id_aluno": 179,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6.8
  },
  {
    "id_nota": 39,
    "id_aluno": 62,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 8.4
  },
  {
    "id_nota": 40,
    "id_aluno": 147,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 9.7
  },
  {
    "id_nota": 41,
    "id_aluno": 99,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 1.3
  },
  {
    "id_nota": 42,
    "id_aluno": 60,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 9.2
  },
  {
    "id_nota": 43,
    "id_aluno": 199,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 1.1
  },
  {
    "id_nota": 44,
    "id_aluno": 106,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 4.1
  },
  {
    "id_nota": 45,
    "id_aluno": 12,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 0.5
  },
  {
    "id_nota": 46,
    "id_aluno": 82,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.6
  },
  {
    "id_nota": 47,
    "id_aluno": 191,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 3.1
  },
  {
    "id_nota": 48,
    "id_aluno": 122,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7
  },
  {
    "id_nota": 49,
    "id_aluno": 181,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 6.8
  },
  {
    "id_nota": 50,
    "id_aluno": 98,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 7.7
  },
  {
    "id_nota": 51,
    "id_aluno": 99,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 5.8
  },
  {
    "id_nota": 52,
    "id_aluno": 170,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 5.7
  },
  {
    "id_nota": 53,
    "id_aluno": 167,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 9.8
  },
  {
    "id_nota": 54,
    "id_aluno": 39,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 6.7
  },
  {
    "id_nota": 55,
    "id_aluno": 127,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 3.4
  },
  {
    "id_nota": 56,
    "id_aluno": 10,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 5.2
  },
  {
    "id_nota": 57,
    "id_aluno": 33,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 58,
    "id_aluno": 129,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 1
  },
  {
    "id_nota": 59,
    "id_aluno": 152,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 60,
    "id_aluno": 85,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 2.5
  },
  {
    "id_nota": 61,
    "id_aluno": 26,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 3.5
  },
  {
    "id_nota": 62,
    "id_aluno": 113,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 6.8
  },
  {
    "id_nota": 63,
    "id_aluno": 26,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 3.8
  },
  {
    "id_nota": 64,
    "id_aluno": 135,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 8.4
  },
  {
    "id_nota": 65,
    "id_aluno": 117,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 5.6
  },
  {
    "id_nota": 66,
    "id_aluno": 4,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 9.9
  },
  {
    "id_nota": 67,
    "id_aluno": 185,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 0.5
  },
  {
    "id_nota": 68,
    "id_aluno": 37,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 6.4
  },
  {
    "id_nota": 69,
    "id_aluno": 105,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 1.6
  },
  {
    "id_nota": 70,
    "id_aluno": 168,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 71,
    "id_aluno": 40,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 72,
    "id_aluno": 20,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 8.7
  },
  {
    "id_nota": 73,
    "id_aluno": 121,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 0.7
  },
  {
    "id_nota": 74,
    "id_aluno": 68,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 4.9
  },
  {
    "id_nota": 75,
    "id_aluno": 87,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.4
  },
  {
    "id_nota": 76,
    "id_aluno": 160,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 9.7
  },
  {
    "id_nota": 77,
    "id_aluno": 178,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 0.5
  },
  {
    "id_nota": 78,
    "id_aluno": 102,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 2.2
  },
  {
    "id_nota": 79,
    "id_aluno": 167,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 6.4
  },
  {
    "id_nota": 80,
    "id_aluno": 21,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 4
  },
  {
    "id_nota": 81,
    "id_aluno": 85,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 2.3
  },
  {
    "id_nota": 82,
    "id_aluno": 173,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 4.6
  },
  {
    "id_nota": 83,
    "id_aluno": 137,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 8
  },
  {
    "id_nota": 84,
    "id_aluno": 98,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 4.5
  },
  {
    "id_nota": 85,
    "id_aluno": 82,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 8.6
  },
  {
    "id_nota": 86,
    "id_aluno": 161,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 87,
    "id_aluno": 184,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 1.2
  },
  {
    "id_nota": 88,
    "id_aluno": 195,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 5
  },
  {
    "id_nota": 89,
    "id_aluno": 125,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 6.5
  },
  {
    "id_nota": 90,
    "id_aluno": 139,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 1
  },
  {
    "id_nota": 91,
    "id_aluno": 10,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 4.1
  },
  {
    "id_nota": 92,
    "id_aluno": 159,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.6
  },
  {
    "id_nota": 93,
    "id_aluno": 18,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 0
  },
  {
    "id_nota": 94,
    "id_aluno": 61,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 0.9
  },
  {
    "id_nota": 95,
    "id_aluno": 162,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 6
  },
  {
    "id_nota": 96,
    "id_aluno": 176,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6.2
  },
  {
    "id_nota": 97,
    "id_aluno": 74,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 3
  },
  {
    "id_nota": 98,
    "id_aluno": 59,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 5.1
  },
  {
    "id_nota": 99,
    "id_aluno": 192,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.1
  },
  {
    "id_nota": 100,
    "id_aluno": 24,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 6.7
  },
  {
    "id_nota": 101,
    "id_aluno": 112,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 9.5
  },
  {
    "id_nota": 102,
    "id_aluno": 26,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.6
  },
  {
    "id_nota": 103,
    "id_aluno": 195,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 0.5
  },
  {
    "id_nota": 104,
    "id_aluno": 163,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 2.2
  },
  {
    "id_nota": 105,
    "id_aluno": 181,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 4.5
  },
  {
    "id_nota": 106,
    "id_aluno": 26,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 5.6
  },
  {
    "id_nota": 107,
    "id_aluno": 114,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 6.2
  },
  {
    "id_nota": 108,
    "id_aluno": 43,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 4.7
  },
  {
    "id_nota": 109,
    "id_aluno": 178,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 110,
    "id_aluno": 77,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7.2
  },
  {
    "id_nota": 111,
    "id_aluno": 8,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 1.1
  },
  {
    "id_nota": 112,
    "id_aluno": 12,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 7.6
  },
  {
    "id_nota": 113,
    "id_aluno": 84,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 2.2
  },
  {
    "id_nota": 114,
    "id_aluno": 15,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 3.4
  },
  {
    "id_nota": 115,
    "id_aluno": 76,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 8.3
  },
  {
    "id_nota": 116,
    "id_aluno": 92,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 117,
    "id_aluno": 96,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.9
  },
  {
    "id_nota": 118,
    "id_aluno": 111,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 5.2
  },
  {
    "id_nota": 119,
    "id_aluno": 38,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 120,
    "id_aluno": 63,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 0.5
  },
  {
    "id_nota": 121,
    "id_aluno": 136,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 1.6
  },
  {
    "id_nota": 122,
    "id_aluno": 106,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 1.4
  },
  {
    "id_nota": 123,
    "id_aluno": 145,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 7.2
  },
  {
    "id_nota": 124,
    "id_aluno": 175,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 7.2
  },
  {
    "id_nota": 125,
    "id_aluno": 47,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 1.1
  },
  {
    "id_nota": 126,
    "id_aluno": 44,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 6.1
  },
  {
    "id_nota": 127,
    "id_aluno": 45,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 1.9
  },
  {
    "id_nota": 128,
    "id_aluno": 21,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 9.3
  },
  {
    "id_nota": 129,
    "id_aluno": 157,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 3.9
  },
  {
    "id_nota": 130,
    "id_aluno": 98,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 4.6
  },
  {
    "id_nota": 131,
    "id_aluno": 159,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 7.8
  },
  {
    "id_nota": 132,
    "id_aluno": 175,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 7.2
  },
  {
    "id_nota": 133,
    "id_aluno": 62,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 1.1
  },
  {
    "id_nota": 134,
    "id_aluno": 128,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 4.1
  },
  {
    "id_nota": 135,
    "id_aluno": 150,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 9.3
  },
  {
    "id_nota": 136,
    "id_aluno": 37,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 8.4
  },
  {
    "id_nota": 137,
    "id_aluno": 60,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 5.9
  },
  {
    "id_nota": 138,
    "id_aluno": 119,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 7.7
  },
  {
    "id_nota": 139,
    "id_aluno": 164,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 4.5
  },
  {
    "id_nota": 140,
    "id_aluno": 66,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 6.6
  },
  {
    "id_nota": 141,
    "id_aluno": 118,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 9.6
  },
  {
    "id_nota": 142,
    "id_aluno": 66,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 1.3
  },
  {
    "id_nota": 143,
    "id_aluno": 171,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 5
  },
  {
    "id_nota": 144,
    "id_aluno": 3,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 5.3
  },
  {
    "id_nota": 145,
    "id_aluno": 120,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 0.5
  },
  {
    "id_nota": 146,
    "id_aluno": 74,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 9.4
  },
  {
    "id_nota": 147,
    "id_aluno": 174,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 8.4
  },
  {
    "id_nota": 148,
    "id_aluno": 140,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 4.8
  },
  {
    "id_nota": 149,
    "id_aluno": 41,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.1
  },
  {
    "id_nota": 150,
    "id_aluno": 19,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 9.2
  },
  {
    "id_nota": 151,
    "id_aluno": 114,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 1.8
  },
  {
    "id_nota": 152,
    "id_aluno": 89,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 5.8
  },
  {
    "id_nota": 153,
    "id_aluno": 151,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 7.3
  },
  {
    "id_nota": 154,
    "id_aluno": 77,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 1.3
  },
  {
    "id_nota": 155,
    "id_aluno": 164,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 3.9
  },
  {
    "id_nota": 156,
    "id_aluno": 109,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 6
  },
  {
    "id_nota": 157,
    "id_aluno": 177,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 8.8
  },
  {
    "id_nota": 158,
    "id_aluno": 65,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 5
  },
  {
    "id_nota": 159,
    "id_aluno": 117,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 3.8
  },
  {
    "id_nota": 160,
    "id_aluno": 78,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 9.8
  },
  {
    "id_nota": 161,
    "id_aluno": 51,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 9.2
  },
  {
    "id_nota": 162,
    "id_aluno": 99,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 7.6
  },
  {
    "id_nota": 163,
    "id_aluno": 124,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 2.7
  },
  {
    "id_nota": 164,
    "id_aluno": 28,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 165,
    "id_aluno": 61,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 9.7
  },
  {
    "id_nota": 166,
    "id_aluno": 98,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 4.5
  },
  {
    "id_nota": 167,
    "id_aluno": 147,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 1.3
  },
  {
    "id_nota": 168,
    "id_aluno": 92,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 4.1
  },
  {
    "id_nota": 169,
    "id_aluno": 148,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 7
  },
  {
    "id_nota": 170,
    "id_aluno": 76,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 7.5
  },
  {
    "id_nota": 171,
    "id_aluno": 180,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 3
  },
  {
    "id_nota": 172,
    "id_aluno": 76,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 7
  },
  {
    "id_nota": 173,
    "id_aluno": 6,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 8.6
  },
  {
    "id_nota": 174,
    "id_aluno": 169,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 7.1
  },
  {
    "id_nota": 175,
    "id_aluno": 102,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 9.4
  },
  {
    "id_nota": 176,
    "id_aluno": 71,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6.3
  },
  {
    "id_nota": 177,
    "id_aluno": 3,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 2
  },
  {
    "id_nota": 178,
    "id_aluno": 145,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6.2
  },
  {
    "id_nota": 179,
    "id_aluno": 176,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 2.9
  },
  {
    "id_nota": 180,
    "id_aluno": 200,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 3.5
  },
  {
    "id_nota": 181,
    "id_aluno": 191,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 6.7
  },
  {
    "id_nota": 182,
    "id_aluno": 13,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 9.8
  },
  {
    "id_nota": 183,
    "id_aluno": 156,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 6.5
  },
  {
    "id_nota": 184,
    "id_aluno": 191,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 9.6
  },
  {
    "id_nota": 185,
    "id_aluno": 128,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 5
  },
  {
    "id_nota": 186,
    "id_aluno": 74,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 6.9
  },
  {
    "id_nota": 187,
    "id_aluno": 199,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 3.2
  },
  {
    "id_nota": 188,
    "id_aluno": 59,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 1.2
  },
  {
    "id_nota": 189,
    "id_aluno": 156,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 3.5
  },
  {
    "id_nota": 190,
    "id_aluno": 91,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 4.8
  },
  {
    "id_nota": 191,
    "id_aluno": 57,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 5.7
  },
  {
    "id_nota": 192,
    "id_aluno": 163,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 6.7
  },
  {
    "id_nota": 193,
    "id_aluno": 49,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 4.2
  },
  {
    "id_nota": 194,
    "id_aluno": 159,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 7.5
  },
  {
    "id_nota": 195,
    "id_aluno": 65,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 8.4
  },
  {
    "id_nota": 196,
    "id_aluno": 174,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 2.9
  },
  {
    "id_nota": 197,
    "id_aluno": 194,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 8.5
  },
  {
    "id_nota": 198,
    "id_aluno": 185,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 8.1
  },
  {
    "id_nota": 199,
    "id_aluno": 197,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 5.2
  },
  {
    "id_nota": 200,
    "id_aluno": 169,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 0.3
  },
  {
    "id_nota": 201,
    "id_aluno": 175,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 1.5
  },
  {
    "id_nota": 202,
    "id_aluno": 36,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.7
  },
  {
    "id_nota": 203,
    "id_aluno": 161,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2
  },
  {
    "id_nota": 204,
    "id_aluno": 25,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 7.5
  },
  {
    "id_nota": 205,
    "id_aluno": 161,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 1.6
  },
  {
    "id_nota": 206,
    "id_aluno": 166,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.9
  },
  {
    "id_nota": 207,
    "id_aluno": 11,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.5
  },
  {
    "id_nota": 208,
    "id_aluno": 80,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 8.4
  },
  {
    "id_nota": 209,
    "id_aluno": 113,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 6.9
  },
  {
    "id_nota": 210,
    "id_aluno": 9,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 3
  },
  {
    "id_nota": 211,
    "id_aluno": 149,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 7.5
  },
  {
    "id_nota": 212,
    "id_aluno": 94,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 0.3
  },
  {
    "id_nota": 213,
    "id_aluno": 188,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 8.1
  },
  {
    "id_nota": 214,
    "id_aluno": 34,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 1
  },
  {
    "id_nota": 215,
    "id_aluno": 24,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 8.7
  },
  {
    "id_nota": 216,
    "id_aluno": 76,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 7.4
  },
  {
    "id_nota": 217,
    "id_aluno": 84,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 8.6
  },
  {
    "id_nota": 218,
    "id_aluno": 192,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 7.4
  },
  {
    "id_nota": 219,
    "id_aluno": 107,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 5.6
  },
  {
    "id_nota": 220,
    "id_aluno": 45,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 2.4
  },
  {
    "id_nota": 221,
    "id_aluno": 52,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 7.8
  },
  {
    "id_nota": 222,
    "id_aluno": 34,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 8
  },
  {
    "id_nota": 223,
    "id_aluno": 139,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 2.9
  },
  {
    "id_nota": 224,
    "id_aluno": 94,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 6.6
  },
  {
    "id_nota": 225,
    "id_aluno": 136,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 9.3
  },
  {
    "id_nota": 226,
    "id_aluno": 129,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 3.9
  },
  {
    "id_nota": 227,
    "id_aluno": 70,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 228,
    "id_aluno": 43,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 9.8
  },
  {
    "id_nota": 229,
    "id_aluno": 66,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 3.1
  },
  {
    "id_nota": 230,
    "id_aluno": 124,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 5.5
  },
  {
    "id_nota": 231,
    "id_aluno": 76,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 232,
    "id_aluno": 192,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 2.5
  },
  {
    "id_nota": 233,
    "id_aluno": 87,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.2
  },
  {
    "id_nota": 234,
    "id_aluno": 30,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7.8
  },
  {
    "id_nota": 235,
    "id_aluno": 120,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 8.7
  },
  {
    "id_nota": 236,
    "id_aluno": 20,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 8.3
  },
  {
    "id_nota": 237,
    "id_aluno": 37,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 9.1
  },
  {
    "id_nota": 238,
    "id_aluno": 194,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 7
  },
  {
    "id_nota": 239,
    "id_aluno": 58,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 6.5
  },
  {
    "id_nota": 240,
    "id_aluno": 174,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 7.6
  },
  {
    "id_nota": 241,
    "id_aluno": 186,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 5.5
  },
  {
    "id_nota": 242,
    "id_aluno": 173,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 6
  },
  {
    "id_nota": 243,
    "id_aluno": 102,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 7.8
  },
  {
    "id_nota": 244,
    "id_aluno": 143,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 9.6
  },
  {
    "id_nota": 245,
    "id_aluno": 94,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 2.9
  },
  {
    "id_nota": 246,
    "id_aluno": 24,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 1.8
  },
  {
    "id_nota": 247,
    "id_aluno": 102,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 6.8
  },
  {
    "id_nota": 248,
    "id_aluno": 4,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 1.9
  },
  {
    "id_nota": 249,
    "id_aluno": 68,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 1.7
  },
  {
    "id_nota": 250,
    "id_aluno": 138,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 5.1
  },
  {
    "id_nota": 251,
    "id_aluno": 32,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 3.8
  },
  {
    "id_nota": 252,
    "id_aluno": 117,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 4.3
  },
  {
    "id_nota": 253,
    "id_aluno": 95,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 5.6
  },
  {
    "id_nota": 254,
    "id_aluno": 173,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 1.3
  },
  {
    "id_nota": 255,
    "id_aluno": 192,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 5.8
  },
  {
    "id_nota": 256,
    "id_aluno": 173,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 2.6
  },
  {
    "id_nota": 257,
    "id_aluno": 68,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 3.3
  },
  {
    "id_nota": 258,
    "id_aluno": 150,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 7.1
  },
  {
    "id_nota": 259,
    "id_aluno": 98,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 1.5
  },
  {
    "id_nota": 260,
    "id_aluno": 164,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 1.5
  },
  {
    "id_nota": 261,
    "id_aluno": 96,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 3.2
  },
  {
    "id_nota": 262,
    "id_aluno": 28,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 0.5
  },
  {
    "id_nota": 263,
    "id_aluno": 173,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 9.3
  },
  {
    "id_nota": 264,
    "id_aluno": 60,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 6.2
  },
  {
    "id_nota": 265,
    "id_aluno": 121,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 6.6
  },
  {
    "id_nota": 266,
    "id_aluno": 7,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 4.9
  },
  {
    "id_nota": 267,
    "id_aluno": 159,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 5.7
  },
  {
    "id_nota": 268,
    "id_aluno": 144,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.6
  },
  {
    "id_nota": 269,
    "id_aluno": 84,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 7.8
  },
  {
    "id_nota": 270,
    "id_aluno": 157,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.2
  },
  {
    "id_nota": 271,
    "id_aluno": 57,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 2.2
  },
  {
    "id_nota": 272,
    "id_aluno": 166,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 1.8
  },
  {
    "id_nota": 273,
    "id_aluno": 17,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 0.7
  },
  {
    "id_nota": 274,
    "id_aluno": 163,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.1
  },
  {
    "id_nota": 275,
    "id_aluno": 119,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 4.2
  },
  {
    "id_nota": 276,
    "id_aluno": 180,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 5.4
  },
  {
    "id_nota": 277,
    "id_aluno": 78,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 0.9
  },
  {
    "id_nota": 278,
    "id_aluno": 167,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 2.2
  },
  {
    "id_nota": 279,
    "id_aluno": 105,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 2.1
  },
  {
    "id_nota": 280,
    "id_aluno": 30,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 3.3
  },
  {
    "id_nota": 281,
    "id_aluno": 36,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 3.6
  },
  {
    "id_nota": 282,
    "id_aluno": 12,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 2.2
  },
  {
    "id_nota": 283,
    "id_aluno": 10,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 7.5
  },
  {
    "id_nota": 284,
    "id_aluno": 78,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 5.3
  },
  {
    "id_nota": 285,
    "id_aluno": 127,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 10
  },
  {
    "id_nota": 286,
    "id_aluno": 30,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 8.2
  },
  {
    "id_nota": 287,
    "id_aluno": 25,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 9.8
  },
  {
    "id_nota": 288,
    "id_aluno": 61,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 289,
    "id_aluno": 138,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 6.7
  },
  {
    "id_nota": 290,
    "id_aluno": 35,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 291,
    "id_aluno": 100,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 9
  },
  {
    "id_nota": 292,
    "id_aluno": 117,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 6.1
  },
  {
    "id_nota": 293,
    "id_aluno": 95,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 6.2
  },
  {
    "id_nota": 294,
    "id_aluno": 172,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 295,
    "id_aluno": 191,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 6.8
  },
  {
    "id_nota": 296,
    "id_aluno": 179,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 3.2
  },
  {
    "id_nota": 297,
    "id_aluno": 139,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 9.2
  },
  {
    "id_nota": 298,
    "id_aluno": 108,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 9.4
  },
  {
    "id_nota": 299,
    "id_aluno": 151,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.9
  },
  {
    "id_nota": 300,
    "id_aluno": 191,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 5.4
  },
  {
    "id_nota": 301,
    "id_aluno": 187,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 2.8
  },
  {
    "id_nota": 302,
    "id_aluno": 40,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 9.1
  },
  {
    "id_nota": 303,
    "id_aluno": 107,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 8.2
  },
  {
    "id_nota": 304,
    "id_aluno": 168,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 3.7
  },
  {
    "id_nota": 305,
    "id_aluno": 26,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 8
  },
  {
    "id_nota": 306,
    "id_aluno": 126,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 307,
    "id_aluno": 158,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 0.4
  },
  {
    "id_nota": 308,
    "id_aluno": 105,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 9
  },
  {
    "id_nota": 309,
    "id_aluno": 72,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 1.9
  },
  {
    "id_nota": 310,
    "id_aluno": 9,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.1
  },
  {
    "id_nota": 311,
    "id_aluno": 177,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 9.5
  },
  {
    "id_nota": 312,
    "id_aluno": 95,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 1.7
  },
  {
    "id_nota": 313,
    "id_aluno": 56,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 314,
    "id_aluno": 114,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 5.4
  },
  {
    "id_nota": 315,
    "id_aluno": 114,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 316,
    "id_aluno": 61,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 0.7
  },
  {
    "id_nota": 317,
    "id_aluno": 93,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 6.7
  },
  {
    "id_nota": 318,
    "id_aluno": 26,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 7.7
  },
  {
    "id_nota": 319,
    "id_aluno": 176,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 8.6
  },
  {
    "id_nota": 320,
    "id_aluno": 95,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 4.2
  },
  {
    "id_nota": 321,
    "id_aluno": 140,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 1
  },
  {
    "id_nota": 322,
    "id_aluno": 166,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 5.4
  },
  {
    "id_nota": 323,
    "id_aluno": 92,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 324,
    "id_aluno": 16,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 9.8
  },
  {
    "id_nota": 325,
    "id_aluno": 102,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 7.8
  },
  {
    "id_nota": 326,
    "id_aluno": 71,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 6.5
  },
  {
    "id_nota": 327,
    "id_aluno": 49,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 9.4
  },
  {
    "id_nota": 328,
    "id_aluno": 32,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 7.5
  },
  {
    "id_nota": 329,
    "id_aluno": 117,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 1.5
  },
  {
    "id_nota": 330,
    "id_aluno": 24,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 4.6
  },
  {
    "id_nota": 331,
    "id_aluno": 170,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 3.3
  },
  {
    "id_nota": 332,
    "id_aluno": 55,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 0.9
  },
  {
    "id_nota": 333,
    "id_aluno": 165,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 0.5
  },
  {
    "id_nota": 334,
    "id_aluno": 164,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 7.9
  },
  {
    "id_nota": 335,
    "id_aluno": 153,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 5.6
  },
  {
    "id_nota": 336,
    "id_aluno": 6,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 5.7
  },
  {
    "id_nota": 337,
    "id_aluno": 13,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2.3
  },
  {
    "id_nota": 338,
    "id_aluno": 86,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2.6
  },
  {
    "id_nota": 339,
    "id_aluno": 63,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 3.9
  },
  {
    "id_nota": 340,
    "id_aluno": 33,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 6.3
  },
  {
    "id_nota": 341,
    "id_aluno": 145,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 4.3
  },
  {
    "id_nota": 342,
    "id_aluno": 53,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 0.2
  },
  {
    "id_nota": 343,
    "id_aluno": 18,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 6.7
  },
  {
    "id_nota": 344,
    "id_aluno": 196,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 5.3
  },
  {
    "id_nota": 345,
    "id_aluno": 142,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 6.4
  },
  {
    "id_nota": 346,
    "id_aluno": 54,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 6.2
  },
  {
    "id_nota": 347,
    "id_aluno": 151,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7.6
  },
  {
    "id_nota": 348,
    "id_aluno": 56,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.9
  },
  {
    "id_nota": 349,
    "id_aluno": 60,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 7
  },
  {
    "id_nota": 350,
    "id_aluno": 85,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 0.7
  },
  {
    "id_nota": 351,
    "id_aluno": 199,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 9.3
  },
  {
    "id_nota": 352,
    "id_aluno": 38,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 1.1
  },
  {
    "id_nota": 353,
    "id_aluno": 153,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 7.9
  },
  {
    "id_nota": 354,
    "id_aluno": 1,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 3
  },
  {
    "id_nota": 355,
    "id_aluno": 71,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.9
  },
  {
    "id_nota": 356,
    "id_aluno": 38,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 7.7
  },
  {
    "id_nota": 357,
    "id_aluno": 34,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 4.4
  },
  {
    "id_nota": 358,
    "id_aluno": 139,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 4
  },
  {
    "id_nota": 359,
    "id_aluno": 65,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 360,
    "id_aluno": 45,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 4.7
  },
  {
    "id_nota": 361,
    "id_aluno": 29,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 5.3
  },
  {
    "id_nota": 362,
    "id_aluno": 170,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 1.4
  },
  {
    "id_nota": 363,
    "id_aluno": 7,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 3.9
  },
  {
    "id_nota": 364,
    "id_aluno": 34,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 8
  },
  {
    "id_nota": 365,
    "id_aluno": 4,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 5.5
  },
  {
    "id_nota": 366,
    "id_aluno": 92,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 367,
    "id_aluno": 61,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 1.4
  },
  {
    "id_nota": 368,
    "id_aluno": 151,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 6.8
  },
  {
    "id_nota": 369,
    "id_aluno": 83,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 9.1
  },
  {
    "id_nota": 370,
    "id_aluno": 5,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 8
  },
  {
    "id_nota": 371,
    "id_aluno": 45,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 7.3
  },
  {
    "id_nota": 372,
    "id_aluno": 68,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 3.7
  },
  {
    "id_nota": 373,
    "id_aluno": 14,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 9.5
  },
  {
    "id_nota": 374,
    "id_aluno": 33,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 5.5
  },
  {
    "id_nota": 375,
    "id_aluno": 190,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 5.6
  },
  {
    "id_nota": 376,
    "id_aluno": 108,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 1.2
  },
  {
    "id_nota": 377,
    "id_aluno": 135,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 378,
    "id_aluno": 30,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6
  },
  {
    "id_nota": 379,
    "id_aluno": 191,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 5.4
  },
  {
    "id_nota": 380,
    "id_aluno": 17,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 9.5
  },
  {
    "id_nota": 381,
    "id_aluno": 122,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 3
  },
  {
    "id_nota": 382,
    "id_aluno": 115,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 7.5
  },
  {
    "id_nota": 383,
    "id_aluno": 200,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 9
  },
  {
    "id_nota": 384,
    "id_aluno": 93,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 3.4
  },
  {
    "id_nota": 385,
    "id_aluno": 132,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 4.1
  },
  {
    "id_nota": 386,
    "id_aluno": 152,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 6.5
  },
  {
    "id_nota": 387,
    "id_aluno": 28,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 5.1
  },
  {
    "id_nota": 388,
    "id_aluno": 116,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 1.6
  },
  {
    "id_nota": 389,
    "id_aluno": 129,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.2
  },
  {
    "id_nota": 390,
    "id_aluno": 57,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 8.3
  },
  {
    "id_nota": 391,
    "id_aluno": 158,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 1.9
  },
  {
    "id_nota": 392,
    "id_aluno": 12,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 1.8
  },
  {
    "id_nota": 393,
    "id_aluno": 187,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 8
  },
  {
    "id_nota": 394,
    "id_aluno": 169,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 395,
    "id_aluno": 134,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 8.5
  },
  {
    "id_nota": 396,
    "id_aluno": 78,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 9.3
  },
  {
    "id_nota": 397,
    "id_aluno": 118,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.9
  },
  {
    "id_nota": 398,
    "id_aluno": 165,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 4.6
  },
  {
    "id_nota": 399,
    "id_aluno": 8,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 5.5
  },
  {
    "id_nota": 400,
    "id_aluno": 16,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 2.9
  },
  {
    "id_nota": 401,
    "id_aluno": 123,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 0.7
  },
  {
    "id_nota": 402,
    "id_aluno": 103,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 1
  },
  {
    "id_nota": 403,
    "id_aluno": 110,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 7.3
  },
  {
    "id_nota": 404,
    "id_aluno": 176,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 4.9
  },
  {
    "id_nota": 405,
    "id_aluno": 28,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 3.3
  },
  {
    "id_nota": 406,
    "id_aluno": 126,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 1.3
  },
  {
    "id_nota": 407,
    "id_aluno": 183,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 6.6
  },
  {
    "id_nota": 408,
    "id_aluno": 114,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 1
  },
  {
    "id_nota": 409,
    "id_aluno": 19,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.2
  },
  {
    "id_nota": 410,
    "id_aluno": 21,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 9
  },
  {
    "id_nota": 411,
    "id_aluno": 83,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 3.2
  },
  {
    "id_nota": 412,
    "id_aluno": 156,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 413,
    "id_aluno": 38,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 6.2
  },
  {
    "id_nota": 414,
    "id_aluno": 17,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 3.1
  },
  {
    "id_nota": 415,
    "id_aluno": 33,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 5.8
  },
  {
    "id_nota": 416,
    "id_aluno": 71,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 5.7
  },
  {
    "id_nota": 417,
    "id_aluno": 160,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 3.6
  },
  {
    "id_nota": 418,
    "id_aluno": 163,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 3.2
  },
  {
    "id_nota": 419,
    "id_aluno": 150,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 4.3
  },
  {
    "id_nota": 420,
    "id_aluno": 141,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 0
  },
  {
    "id_nota": 421,
    "id_aluno": 183,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 2.5
  },
  {
    "id_nota": 422,
    "id_aluno": 84,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 2.2
  },
  {
    "id_nota": 423,
    "id_aluno": 98,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 7.4
  },
  {
    "id_nota": 424,
    "id_aluno": 153,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 4.4
  },
  {
    "id_nota": 425,
    "id_aluno": 136,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 8.4
  },
  {
    "id_nota": 426,
    "id_aluno": 76,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 1.3
  },
  {
    "id_nota": 427,
    "id_aluno": 117,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 7.3
  },
  {
    "id_nota": 428,
    "id_aluno": 130,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 8.8
  },
  {
    "id_nota": 429,
    "id_aluno": 155,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.6
  },
  {
    "id_nota": 430,
    "id_aluno": 111,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 3.6
  },
  {
    "id_nota": 431,
    "id_aluno": 26,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 3.1
  },
  {
    "id_nota": 432,
    "id_aluno": 180,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 5.5
  },
  {
    "id_nota": 433,
    "id_aluno": 30,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 1.8
  },
  {
    "id_nota": 434,
    "id_aluno": 168,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.1
  },
  {
    "id_nota": 435,
    "id_aluno": 167,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 8.4
  },
  {
    "id_nota": 436,
    "id_aluno": 197,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 8.6
  },
  {
    "id_nota": 437,
    "id_aluno": 142,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 1.4
  },
  {
    "id_nota": 438,
    "id_aluno": 185,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 5.4
  },
  {
    "id_nota": 439,
    "id_aluno": 56,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 2.6
  },
  {
    "id_nota": 440,
    "id_aluno": 111,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 8.9
  },
  {
    "id_nota": 441,
    "id_aluno": 116,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 0.8
  },
  {
    "id_nota": 442,
    "id_aluno": 59,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 0.8
  },
  {
    "id_nota": 443,
    "id_aluno": 106,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 0.2
  },
  {
    "id_nota": 444,
    "id_aluno": 87,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 5.1
  },
  {
    "id_nota": 445,
    "id_aluno": 117,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 0.3
  },
  {
    "id_nota": 446,
    "id_aluno": 103,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 5.8
  },
  {
    "id_nota": 447,
    "id_aluno": 107,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 4.1
  },
  {
    "id_nota": 448,
    "id_aluno": 187,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 5.9
  },
  {
    "id_nota": 449,
    "id_aluno": 25,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 9.1
  },
  {
    "id_nota": 450,
    "id_aluno": 81,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 5.5
  },
  {
    "id_nota": 451,
    "id_aluno": 110,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 5.4
  },
  {
    "id_nota": 452,
    "id_aluno": 81,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 10
  },
  {
    "id_nota": 453,
    "id_aluno": 171,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 4.7
  },
  {
    "id_nota": 454,
    "id_aluno": 66,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 7.8
  },
  {
    "id_nota": 455,
    "id_aluno": 96,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 3.7
  },
  {
    "id_nota": 456,
    "id_aluno": 40,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.2
  },
  {
    "id_nota": 457,
    "id_aluno": 176,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 7.7
  },
  {
    "id_nota": 458,
    "id_aluno": 122,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 7.3
  },
  {
    "id_nota": 459,
    "id_aluno": 18,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 2.9
  },
  {
    "id_nota": 460,
    "id_aluno": 24,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 4.6
  },
  {
    "id_nota": 461,
    "id_aluno": 22,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 5.1
  },
  {
    "id_nota": 462,
    "id_aluno": 24,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 4
  },
  {
    "id_nota": 463,
    "id_aluno": 111,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 5
  },
  {
    "id_nota": 464,
    "id_aluno": 25,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 6.6
  },
  {
    "id_nota": 465,
    "id_aluno": 191,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 8.5
  },
  {
    "id_nota": 466,
    "id_aluno": 190,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 8.1
  },
  {
    "id_nota": 467,
    "id_aluno": 96,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 6.1
  },
  {
    "id_nota": 468,
    "id_aluno": 34,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 1.7
  },
  {
    "id_nota": 469,
    "id_aluno": 143,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 5.1
  },
  {
    "id_nota": 470,
    "id_aluno": 16,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 471,
    "id_aluno": 151,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 1.8
  },
  {
    "id_nota": 472,
    "id_aluno": 144,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 9.5
  },
  {
    "id_nota": 473,
    "id_aluno": 144,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 474,
    "id_aluno": 85,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 9.7
  },
  {
    "id_nota": 475,
    "id_aluno": 172,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 7.4
  },
  {
    "id_nota": 476,
    "id_aluno": 32,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 4.8
  },
  {
    "id_nota": 477,
    "id_aluno": 106,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 3.6
  },
  {
    "id_nota": 478,
    "id_aluno": 91,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 2.2
  },
  {
    "id_nota": 479,
    "id_aluno": 171,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 4.9
  },
  {
    "id_nota": 480,
    "id_aluno": 193,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 0.6
  },
  {
    "id_nota": 481,
    "id_aluno": 109,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.7
  },
  {
    "id_nota": 482,
    "id_aluno": 185,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 0.4
  },
  {
    "id_nota": 483,
    "id_aluno": 14,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 2.1
  },
  {
    "id_nota": 484,
    "id_aluno": 74,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 9.1
  },
  {
    "id_nota": 485,
    "id_aluno": 154,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 3.6
  },
  {
    "id_nota": 486,
    "id_aluno": 80,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 4.7
  },
  {
    "id_nota": 487,
    "id_aluno": 91,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 488,
    "id_aluno": 27,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 0.5
  },
  {
    "id_nota": 489,
    "id_aluno": 148,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 9.8
  },
  {
    "id_nota": 490,
    "id_aluno": 130,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 3.2
  },
  {
    "id_nota": 491,
    "id_aluno": 55,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 492,
    "id_aluno": 40,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 5.2
  },
  {
    "id_nota": 493,
    "id_aluno": 169,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 8.3
  },
  {
    "id_nota": 494,
    "id_aluno": 124,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 8.3
  },
  {
    "id_nota": 495,
    "id_aluno": 58,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 2.6
  },
  {
    "id_nota": 496,
    "id_aluno": 28,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 5.4
  },
  {
    "id_nota": 497,
    "id_aluno": 90,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 1.7
  },
  {
    "id_nota": 498,
    "id_aluno": 143,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 6.5
  },
  {
    "id_nota": 499,
    "id_aluno": 95,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 3.7
  },
  {
    "id_nota": 500,
    "id_aluno": 30,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 6.5
  },
  {
    "id_nota": 501,
    "id_aluno": 196,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 8.4
  },
  {
    "id_nota": 502,
    "id_aluno": 72,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.2
  },
  {
    "id_nota": 503,
    "id_aluno": 147,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.8
  },
  {
    "id_nota": 504,
    "id_aluno": 58,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 9.1
  },
  {
    "id_nota": 505,
    "id_aluno": 110,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 5.2
  },
  {
    "id_nota": 506,
    "id_aluno": 144,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 3.5
  },
  {
    "id_nota": 507,
    "id_aluno": 197,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 8.7
  },
  {
    "id_nota": 508,
    "id_aluno": 160,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 4.9
  },
  {
    "id_nota": 509,
    "id_aluno": 158,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 4.8
  },
  {
    "id_nota": 510,
    "id_aluno": 173,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6
  },
  {
    "id_nota": 511,
    "id_aluno": 165,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 5
  },
  {
    "id_nota": 512,
    "id_aluno": 143,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 1.4
  },
  {
    "id_nota": 513,
    "id_aluno": 7,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 1.7
  },
  {
    "id_nota": 514,
    "id_aluno": 156,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 0.8
  },
  {
    "id_nota": 515,
    "id_aluno": 169,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 6.4
  },
  {
    "id_nota": 516,
    "id_aluno": 178,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 2.1
  },
  {
    "id_nota": 517,
    "id_aluno": 69,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 1.9
  },
  {
    "id_nota": 518,
    "id_aluno": 8,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 3.6
  },
  {
    "id_nota": 519,
    "id_aluno": 47,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 7.2
  },
  {
    "id_nota": 520,
    "id_aluno": 70,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 1.2
  },
  {
    "id_nota": 521,
    "id_aluno": 180,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 2.3
  },
  {
    "id_nota": 522,
    "id_aluno": 196,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 8.1
  },
  {
    "id_nota": 523,
    "id_aluno": 80,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 7.2
  },
  {
    "id_nota": 524,
    "id_aluno": 87,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 4.8
  },
  {
    "id_nota": 525,
    "id_aluno": 90,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 4.8
  },
  {
    "id_nota": 526,
    "id_aluno": 2,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 2.1
  },
  {
    "id_nota": 527,
    "id_aluno": 47,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 1.6
  },
  {
    "id_nota": 528,
    "id_aluno": 37,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 8.3
  },
  {
    "id_nota": 529,
    "id_aluno": 145,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 0.2
  },
  {
    "id_nota": 530,
    "id_aluno": 169,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 0.4
  },
  {
    "id_nota": 531,
    "id_aluno": 103,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 5.7
  },
  {
    "id_nota": 532,
    "id_aluno": 18,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 1.6
  },
  {
    "id_nota": 533,
    "id_aluno": 37,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 6.3
  },
  {
    "id_nota": 534,
    "id_aluno": 190,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 0.4
  },
  {
    "id_nota": 535,
    "id_aluno": 163,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 5.7
  },
  {
    "id_nota": 536,
    "id_aluno": 8,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.6
  },
  {
    "id_nota": 537,
    "id_aluno": 24,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 2.6
  },
  {
    "id_nota": 538,
    "id_aluno": 192,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 1.8
  },
  {
    "id_nota": 539,
    "id_aluno": 136,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 9.6
  },
  {
    "id_nota": 540,
    "id_aluno": 56,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 6
  },
  {
    "id_nota": 541,
    "id_aluno": 97,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 5.6
  },
  {
    "id_nota": 542,
    "id_aluno": 108,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 0.2
  },
  {
    "id_nota": 543,
    "id_aluno": 117,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 7.2
  },
  {
    "id_nota": 544,
    "id_aluno": 88,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 545,
    "id_aluno": 41,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 2.8
  },
  {
    "id_nota": 546,
    "id_aluno": 95,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 0.9
  },
  {
    "id_nota": 547,
    "id_aluno": 80,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 4.5
  },
  {
    "id_nota": 548,
    "id_aluno": 185,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 9.9
  },
  {
    "id_nota": 549,
    "id_aluno": 84,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 8.7
  },
  {
    "id_nota": 550,
    "id_aluno": 199,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 1.7
  },
  {
    "id_nota": 551,
    "id_aluno": 146,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 8.3
  },
  {
    "id_nota": 552,
    "id_aluno": 153,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 6
  },
  {
    "id_nota": 553,
    "id_aluno": 22,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7.9
  },
  {
    "id_nota": 554,
    "id_aluno": 14,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 8.2
  },
  {
    "id_nota": 555,
    "id_aluno": 40,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 1.8
  },
  {
    "id_nota": 556,
    "id_aluno": 41,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 6.6
  },
  {
    "id_nota": 557,
    "id_aluno": 194,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 2.6
  },
  {
    "id_nota": 558,
    "id_aluno": 159,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 7.2
  },
  {
    "id_nota": 559,
    "id_aluno": 13,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 3.4
  },
  {
    "id_nota": 560,
    "id_aluno": 173,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 4.5
  },
  {
    "id_nota": 561,
    "id_aluno": 21,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 5.9
  },
  {
    "id_nota": 562,
    "id_aluno": 70,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 2.3
  },
  {
    "id_nota": 563,
    "id_aluno": 114,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 3.9
  },
  {
    "id_nota": 564,
    "id_aluno": 170,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 1.1
  },
  {
    "id_nota": 565,
    "id_aluno": 109,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 2
  },
  {
    "id_nota": 566,
    "id_aluno": 125,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 8.6
  },
  {
    "id_nota": 567,
    "id_aluno": 156,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 5
  },
  {
    "id_nota": 568,
    "id_aluno": 114,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 4.2
  },
  {
    "id_nota": 569,
    "id_aluno": 107,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 1.5
  },
  {
    "id_nota": 570,
    "id_aluno": 70,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 1
  },
  {
    "id_nota": 571,
    "id_aluno": 56,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 4.8
  },
  {
    "id_nota": 572,
    "id_aluno": 194,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.1
  },
  {
    "id_nota": 573,
    "id_aluno": 132,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 0.4
  },
  {
    "id_nota": 574,
    "id_aluno": 30,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 7.8
  },
  {
    "id_nota": 575,
    "id_aluno": 89,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 5
  },
  {
    "id_nota": 576,
    "id_aluno": 111,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 1.2
  },
  {
    "id_nota": 577,
    "id_aluno": 29,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 4.8
  },
  {
    "id_nota": 578,
    "id_aluno": 73,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 1.3
  },
  {
    "id_nota": 579,
    "id_aluno": 174,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 6
  },
  {
    "id_nota": 580,
    "id_aluno": 174,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 8.3
  },
  {
    "id_nota": 581,
    "id_aluno": 152,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 9
  },
  {
    "id_nota": 582,
    "id_aluno": 125,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 7.7
  },
  {
    "id_nota": 583,
    "id_aluno": 135,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 6.5
  },
  {
    "id_nota": 584,
    "id_aluno": 171,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 5.2
  },
  {
    "id_nota": 585,
    "id_aluno": 79,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 3.7
  },
  {
    "id_nota": 586,
    "id_aluno": 12,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 0.4
  },
  {
    "id_nota": 587,
    "id_aluno": 57,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 5.3
  },
  {
    "id_nota": 588,
    "id_aluno": 102,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 2.3
  },
  {
    "id_nota": 589,
    "id_aluno": 154,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 8
  },
  {
    "id_nota": 590,
    "id_aluno": 15,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 7.9
  },
  {
    "id_nota": 591,
    "id_aluno": 2,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 3.8
  },
  {
    "id_nota": 592,
    "id_aluno": 53,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.9
  },
  {
    "id_nota": 593,
    "id_aluno": 78,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 7.4
  },
  {
    "id_nota": 594,
    "id_aluno": 55,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 7.6
  },
  {
    "id_nota": 595,
    "id_aluno": 197,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 7
  },
  {
    "id_nota": 596,
    "id_aluno": 36,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 1
  },
  {
    "id_nota": 597,
    "id_aluno": 196,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 1.3
  },
  {
    "id_nota": 598,
    "id_aluno": 66,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 4.8
  },
  {
    "id_nota": 599,
    "id_aluno": 75,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 2.3
  },
  {
    "id_nota": 600,
    "id_aluno": 84,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 8.6
  },
  {
    "id_nota": 601,
    "id_aluno": 31,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.8
  },
  {
    "id_nota": 602,
    "id_aluno": 2,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 8.8
  },
  {
    "id_nota": 603,
    "id_aluno": 128,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 4.1
  },
  {
    "id_nota": 604,
    "id_aluno": 192,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 1.9
  },
  {
    "id_nota": 605,
    "id_aluno": 111,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 7.1
  },
  {
    "id_nota": 606,
    "id_aluno": 45,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 7.9
  },
  {
    "id_nota": 607,
    "id_aluno": 34,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 5.8
  },
  {
    "id_nota": 608,
    "id_aluno": 98,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 1.2
  },
  {
    "id_nota": 609,
    "id_aluno": 137,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 0.1
  },
  {
    "id_nota": 610,
    "id_aluno": 181,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.5
  },
  {
    "id_nota": 611,
    "id_aluno": 59,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 6.9
  },
  {
    "id_nota": 612,
    "id_aluno": 129,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 3.2
  },
  {
    "id_nota": 613,
    "id_aluno": 144,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 3.6
  },
  {
    "id_nota": 614,
    "id_aluno": 172,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 1.5
  },
  {
    "id_nota": 615,
    "id_aluno": 91,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 6.5
  },
  {
    "id_nota": 616,
    "id_aluno": 19,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2.5
  },
  {
    "id_nota": 617,
    "id_aluno": 102,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 8.5
  },
  {
    "id_nota": 618,
    "id_aluno": 190,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 4.2
  },
  {
    "id_nota": 619,
    "id_aluno": 11,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 3.7
  },
  {
    "id_nota": 620,
    "id_aluno": 112,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 2.8
  },
  {
    "id_nota": 621,
    "id_aluno": 5,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 6.8
  },
  {
    "id_nota": 622,
    "id_aluno": 118,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 7.5
  },
  {
    "id_nota": 623,
    "id_aluno": 20,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 4.1
  },
  {
    "id_nota": 624,
    "id_aluno": 81,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 7.8
  },
  {
    "id_nota": 625,
    "id_aluno": 148,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 4.8
  },
  {
    "id_nota": 626,
    "id_aluno": 110,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 3.7
  },
  {
    "id_nota": 627,
    "id_aluno": 147,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 5.5
  },
  {
    "id_nota": 628,
    "id_aluno": 104,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 2.5
  },
  {
    "id_nota": 629,
    "id_aluno": 182,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 3.1
  },
  {
    "id_nota": 630,
    "id_aluno": 164,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 3.4
  },
  {
    "id_nota": 631,
    "id_aluno": 107,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 7.1
  },
  {
    "id_nota": 632,
    "id_aluno": 75,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7.4
  },
  {
    "id_nota": 633,
    "id_aluno": 30,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 634,
    "id_aluno": 104,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 6.6
  },
  {
    "id_nota": 635,
    "id_aluno": 6,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 7.5
  },
  {
    "id_nota": 636,
    "id_aluno": 84,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 4.5
  },
  {
    "id_nota": 637,
    "id_aluno": 44,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 638,
    "id_aluno": 159,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 1.6
  },
  {
    "id_nota": 639,
    "id_aluno": 118,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 2.1
  },
  {
    "id_nota": 640,
    "id_aluno": 177,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 4
  },
  {
    "id_nota": 641,
    "id_aluno": 93,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 3.4
  },
  {
    "id_nota": 642,
    "id_aluno": 23,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.5
  },
  {
    "id_nota": 643,
    "id_aluno": 112,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 7
  },
  {
    "id_nota": 644,
    "id_aluno": 28,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 7.1
  },
  {
    "id_nota": 645,
    "id_aluno": 63,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 1.6
  },
  {
    "id_nota": 646,
    "id_aluno": 112,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 647,
    "id_aluno": 151,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 648,
    "id_aluno": 103,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 0.9
  },
  {
    "id_nota": 649,
    "id_aluno": 135,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 1.5
  },
  {
    "id_nota": 650,
    "id_aluno": 21,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 9.3
  },
  {
    "id_nota": 651,
    "id_aluno": 102,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 4.4
  },
  {
    "id_nota": 652,
    "id_aluno": 80,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 0.6
  },
  {
    "id_nota": 653,
    "id_aluno": 191,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 2.2
  },
  {
    "id_nota": 654,
    "id_aluno": 87,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 0.8
  },
  {
    "id_nota": 655,
    "id_aluno": 57,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 0.4
  },
  {
    "id_nota": 656,
    "id_aluno": 86,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 3.8
  },
  {
    "id_nota": 657,
    "id_aluno": 200,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 9.8
  },
  {
    "id_nota": 658,
    "id_aluno": 44,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.1
  },
  {
    "id_nota": 659,
    "id_aluno": 20,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 5.2
  },
  {
    "id_nota": 660,
    "id_aluno": 131,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 7.1
  },
  {
    "id_nota": 661,
    "id_aluno": 163,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 6
  },
  {
    "id_nota": 662,
    "id_aluno": 30,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.5
  },
  {
    "id_nota": 663,
    "id_aluno": 136,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 8.2
  },
  {
    "id_nota": 664,
    "id_aluno": 131,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 6.4
  },
  {
    "id_nota": 665,
    "id_aluno": 50,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 4.4
  },
  {
    "id_nota": 666,
    "id_aluno": 199,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 2
  },
  {
    "id_nota": 667,
    "id_aluno": 90,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 668,
    "id_aluno": 90,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 8
  },
  {
    "id_nota": 669,
    "id_aluno": 187,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 2.9
  },
  {
    "id_nota": 670,
    "id_aluno": 166,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 0.3
  },
  {
    "id_nota": 671,
    "id_aluno": 38,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 6
  },
  {
    "id_nota": 672,
    "id_aluno": 61,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 5.2
  },
  {
    "id_nota": 673,
    "id_aluno": 27,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 2.3
  },
  {
    "id_nota": 674,
    "id_aluno": 38,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 1.7
  },
  {
    "id_nota": 675,
    "id_aluno": 66,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 0.4
  },
  {
    "id_nota": 676,
    "id_aluno": 51,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 2.4
  },
  {
    "id_nota": 677,
    "id_aluno": 45,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 0
  },
  {
    "id_nota": 678,
    "id_aluno": 155,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 1.6
  },
  {
    "id_nota": 679,
    "id_aluno": 40,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 10
  },
  {
    "id_nota": 680,
    "id_aluno": 195,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 7.8
  },
  {
    "id_nota": 681,
    "id_aluno": 195,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 3.5
  },
  {
    "id_nota": 682,
    "id_aluno": 168,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 4
  },
  {
    "id_nota": 683,
    "id_aluno": 20,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 5.9
  },
  {
    "id_nota": 684,
    "id_aluno": 46,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 5.2
  },
  {
    "id_nota": 685,
    "id_aluno": 198,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 7.4
  },
  {
    "id_nota": 686,
    "id_aluno": 161,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 0.7
  },
  {
    "id_nota": 687,
    "id_aluno": 127,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 0.9
  },
  {
    "id_nota": 688,
    "id_aluno": 119,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 2.8
  },
  {
    "id_nota": 689,
    "id_aluno": 194,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 8.3
  },
  {
    "id_nota": 690,
    "id_aluno": 145,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 9.2
  },
  {
    "id_nota": 691,
    "id_aluno": 195,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 3.5
  },
  {
    "id_nota": 692,
    "id_aluno": 149,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 693,
    "id_aluno": 115,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.8
  },
  {
    "id_nota": 694,
    "id_aluno": 175,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6.1
  },
  {
    "id_nota": 695,
    "id_aluno": 145,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 1.9
  },
  {
    "id_nota": 696,
    "id_aluno": 165,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 9.3
  },
  {
    "id_nota": 697,
    "id_aluno": 163,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 5.7
  },
  {
    "id_nota": 698,
    "id_aluno": 160,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 2.6
  },
  {
    "id_nota": 699,
    "id_aluno": 83,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 4.1
  },
  {
    "id_nota": 700,
    "id_aluno": 161,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 1.1
  },
  {
    "id_nota": 701,
    "id_aluno": 81,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 0.7
  },
  {
    "id_nota": 702,
    "id_aluno": 39,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 2.9
  },
  {
    "id_nota": 703,
    "id_aluno": 113,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 9.5
  },
  {
    "id_nota": 704,
    "id_aluno": 18,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 8
  },
  {
    "id_nota": 705,
    "id_aluno": 121,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 9.6
  },
  {
    "id_nota": 706,
    "id_aluno": 114,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 8.8
  },
  {
    "id_nota": 707,
    "id_aluno": 162,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 8.1
  },
  {
    "id_nota": 708,
    "id_aluno": 78,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 5.7
  },
  {
    "id_nota": 709,
    "id_aluno": 71,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 6.9
  },
  {
    "id_nota": 710,
    "id_aluno": 152,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 9.7
  },
  {
    "id_nota": 711,
    "id_aluno": 15,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 5.6
  },
  {
    "id_nota": 712,
    "id_aluno": 91,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 7.7
  },
  {
    "id_nota": 713,
    "id_aluno": 130,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 7.6
  },
  {
    "id_nota": 714,
    "id_aluno": 19,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 9.6
  },
  {
    "id_nota": 715,
    "id_aluno": 80,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 4.6
  },
  {
    "id_nota": 716,
    "id_aluno": 119,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 4.6
  },
  {
    "id_nota": 717,
    "id_aluno": 116,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 5.9
  },
  {
    "id_nota": 718,
    "id_aluno": 10,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 0.3
  },
  {
    "id_nota": 719,
    "id_aluno": 15,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 1.2
  },
  {
    "id_nota": 720,
    "id_aluno": 95,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 0.7
  },
  {
    "id_nota": 721,
    "id_aluno": 74,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6.3
  },
  {
    "id_nota": 722,
    "id_aluno": 20,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 9.9
  },
  {
    "id_nota": 723,
    "id_aluno": 166,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 6.8
  },
  {
    "id_nota": 724,
    "id_aluno": 24,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 2.3
  },
  {
    "id_nota": 725,
    "id_aluno": 158,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 3.2
  },
  {
    "id_nota": 726,
    "id_aluno": 153,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 9.6
  },
  {
    "id_nota": 727,
    "id_aluno": 130,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 5.2
  },
  {
    "id_nota": 728,
    "id_aluno": 99,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 729,
    "id_aluno": 119,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 8.3
  },
  {
    "id_nota": 730,
    "id_aluno": 149,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 2.5
  },
  {
    "id_nota": 731,
    "id_aluno": 142,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 0.9
  },
  {
    "id_nota": 732,
    "id_aluno": 190,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 6.7
  },
  {
    "id_nota": 733,
    "id_aluno": 11,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 8.2
  },
  {
    "id_nota": 734,
    "id_aluno": 116,
    "disciplina": "Matemática",
    "bimestre": "3º",
    "nota": 0.8
  },
  {
    "id_nota": 735,
    "id_aluno": 147,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 9.3
  },
  {
    "id_nota": 736,
    "id_aluno": 167,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 4.8
  },
  {
    "id_nota": 737,
    "id_aluno": 49,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 3.5
  },
  {
    "id_nota": 738,
    "id_aluno": 83,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 8.9
  },
  {
    "id_nota": 739,
    "id_aluno": 155,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 2.7
  },
  {
    "id_nota": 740,
    "id_aluno": 122,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 9.5
  },
  {
    "id_nota": 741,
    "id_aluno": 129,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 6.8
  },
  {
    "id_nota": 742,
    "id_aluno": 39,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 9.1
  },
  {
    "id_nota": 743,
    "id_aluno": 16,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 5
  },
  {
    "id_nota": 744,
    "id_aluno": 116,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 2
  },
  {
    "id_nota": 745,
    "id_aluno": 27,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 7.4
  },
  {
    "id_nota": 746,
    "id_aluno": 88,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 8.7
  },
  {
    "id_nota": 747,
    "id_aluno": 183,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.1
  },
  {
    "id_nota": 748,
    "id_aluno": 22,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 2
  },
  {
    "id_nota": 749,
    "id_aluno": 130,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 2.5
  },
  {
    "id_nota": 750,
    "id_aluno": 166,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 6.2
  },
  {
    "id_nota": 751,
    "id_aluno": 45,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 1.6
  },
  {
    "id_nota": 752,
    "id_aluno": 11,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 1.1
  },
  {
    "id_nota": 753,
    "id_aluno": 64,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 9.2
  },
  {
    "id_nota": 754,
    "id_aluno": 182,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 6.8
  },
  {
    "id_nota": 755,
    "id_aluno": 113,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 6.6
  },
  {
    "id_nota": 756,
    "id_aluno": 113,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 6.1
  },
  {
    "id_nota": 757,
    "id_aluno": 135,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 7.6
  },
  {
    "id_nota": 758,
    "id_aluno": 134,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 5.4
  },
  {
    "id_nota": 759,
    "id_aluno": 157,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 0.4
  },
  {
    "id_nota": 760,
    "id_aluno": 41,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 4.8
  },
  {
    "id_nota": 761,
    "id_aluno": 94,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 6.2
  },
  {
    "id_nota": 762,
    "id_aluno": 96,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 4.9
  },
  {
    "id_nota": 763,
    "id_aluno": 73,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 9.9
  },
  {
    "id_nota": 764,
    "id_aluno": 100,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 9
  },
  {
    "id_nota": 765,
    "id_aluno": 105,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 8.7
  },
  {
    "id_nota": 766,
    "id_aluno": 199,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.9
  },
  {
    "id_nota": 767,
    "id_aluno": 87,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 9.8
  },
  {
    "id_nota": 768,
    "id_aluno": 174,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 9.2
  },
  {
    "id_nota": 769,
    "id_aluno": 154,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.8
  },
  {
    "id_nota": 770,
    "id_aluno": 14,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 2.2
  },
  {
    "id_nota": 771,
    "id_aluno": 162,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 5.8
  },
  {
    "id_nota": 772,
    "id_aluno": 166,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.5
  },
  {
    "id_nota": 773,
    "id_aluno": 86,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 8
  },
  {
    "id_nota": 774,
    "id_aluno": 17,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 4.8
  },
  {
    "id_nota": 775,
    "id_aluno": 85,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 5.4
  },
  {
    "id_nota": 776,
    "id_aluno": 25,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 5
  },
  {
    "id_nota": 777,
    "id_aluno": 143,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 3.9
  },
  {
    "id_nota": 778,
    "id_aluno": 174,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 6.9
  },
  {
    "id_nota": 779,
    "id_aluno": 99,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 1.7
  },
  {
    "id_nota": 780,
    "id_aluno": 73,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 9.8
  },
  {
    "id_nota": 781,
    "id_aluno": 65,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 782,
    "id_aluno": 186,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 4.6
  },
  {
    "id_nota": 783,
    "id_aluno": 169,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6.9
  },
  {
    "id_nota": 784,
    "id_aluno": 155,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 0.1
  },
  {
    "id_nota": 785,
    "id_aluno": 39,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 2.1
  },
  {
    "id_nota": 786,
    "id_aluno": 86,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.8
  },
  {
    "id_nota": 787,
    "id_aluno": 21,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 3.3
  },
  {
    "id_nota": 788,
    "id_aluno": 150,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6.1
  },
  {
    "id_nota": 789,
    "id_aluno": 170,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 2.6
  },
  {
    "id_nota": 790,
    "id_aluno": 37,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 5.5
  },
  {
    "id_nota": 791,
    "id_aluno": 90,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 2.4
  },
  {
    "id_nota": 792,
    "id_aluno": 80,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 4.7
  },
  {
    "id_nota": 793,
    "id_aluno": 168,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 6.1
  },
  {
    "id_nota": 794,
    "id_aluno": 179,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 3.7
  },
  {
    "id_nota": 795,
    "id_aluno": 170,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 5
  },
  {
    "id_nota": 796,
    "id_aluno": 101,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 2.1
  },
  {
    "id_nota": 797,
    "id_aluno": 34,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 7
  },
  {
    "id_nota": 798,
    "id_aluno": 153,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 3.7
  },
  {
    "id_nota": 799,
    "id_aluno": 182,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 8.5
  },
  {
    "id_nota": 800,
    "id_aluno": 22,
    "disciplina": "Biologia",
    "bimestre": "1º",
    "nota": 2.8
  },
  {
    "id_nota": 801,
    "id_aluno": 80,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 1.8
  },
  {
    "id_nota": 802,
    "id_aluno": 144,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 1.3
  },
  {
    "id_nota": 803,
    "id_aluno": 97,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 5.8
  },
  {
    "id_nota": 804,
    "id_aluno": 165,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2.3
  },
  {
    "id_nota": 805,
    "id_aluno": 85,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 1
  },
  {
    "id_nota": 806,
    "id_aluno": 33,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 2.7
  },
  {
    "id_nota": 807,
    "id_aluno": 172,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 2.4
  },
  {
    "id_nota": 808,
    "id_aluno": 180,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 4.3
  },
  {
    "id_nota": 809,
    "id_aluno": 190,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 3.8
  },
  {
    "id_nota": 810,
    "id_aluno": 176,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 1.5
  },
  {
    "id_nota": 811,
    "id_aluno": 135,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 9.6
  },
  {
    "id_nota": 812,
    "id_aluno": 24,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 1.5
  },
  {
    "id_nota": 813,
    "id_aluno": 166,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 8.1
  },
  {
    "id_nota": 814,
    "id_aluno": 172,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 1.8
  },
  {
    "id_nota": 815,
    "id_aluno": 109,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5
  },
  {
    "id_nota": 816,
    "id_aluno": 131,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 10
  },
  {
    "id_nota": 817,
    "id_aluno": 93,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 818,
    "id_aluno": 5,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 5.2
  },
  {
    "id_nota": 819,
    "id_aluno": 93,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 7.2
  },
  {
    "id_nota": 820,
    "id_aluno": 80,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 7.9
  },
  {
    "id_nota": 821,
    "id_aluno": 47,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 3
  },
  {
    "id_nota": 822,
    "id_aluno": 55,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.6
  },
  {
    "id_nota": 823,
    "id_aluno": 88,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 5.7
  },
  {
    "id_nota": 824,
    "id_aluno": 197,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 4
  },
  {
    "id_nota": 825,
    "id_aluno": 125,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 6.9
  },
  {
    "id_nota": 826,
    "id_aluno": 50,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 0.6
  },
  {
    "id_nota": 827,
    "id_aluno": 58,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 8.1
  },
  {
    "id_nota": 828,
    "id_aluno": 36,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.8
  },
  {
    "id_nota": 829,
    "id_aluno": 40,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 6.3
  },
  {
    "id_nota": 830,
    "id_aluno": 20,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 4.5
  },
  {
    "id_nota": 831,
    "id_aluno": 76,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 3.3
  },
  {
    "id_nota": 832,
    "id_aluno": 26,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 3.6
  },
  {
    "id_nota": 833,
    "id_aluno": 130,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.6
  },
  {
    "id_nota": 834,
    "id_aluno": 198,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 9.3
  },
  {
    "id_nota": 835,
    "id_aluno": 139,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 2.6
  },
  {
    "id_nota": 836,
    "id_aluno": 190,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 0.2
  },
  {
    "id_nota": 837,
    "id_aluno": 135,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 1.2
  },
  {
    "id_nota": 838,
    "id_aluno": 10,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 8.7
  },
  {
    "id_nota": 839,
    "id_aluno": 170,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 9.6
  },
  {
    "id_nota": 840,
    "id_aluno": 87,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 2
  },
  {
    "id_nota": 841,
    "id_aluno": 197,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 5.8
  },
  {
    "id_nota": 842,
    "id_aluno": 159,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 6.5
  },
  {
    "id_nota": 843,
    "id_aluno": 34,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 1.7
  },
  {
    "id_nota": 844,
    "id_aluno": 153,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 7.8
  },
  {
    "id_nota": 845,
    "id_aluno": 97,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 3.6
  },
  {
    "id_nota": 846,
    "id_aluno": 40,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 6.7
  },
  {
    "id_nota": 847,
    "id_aluno": 42,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 4.9
  },
  {
    "id_nota": 848,
    "id_aluno": 47,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 7.4
  },
  {
    "id_nota": 849,
    "id_aluno": 178,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 8.9
  },
  {
    "id_nota": 850,
    "id_aluno": 198,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 3.8
  },
  {
    "id_nota": 851,
    "id_aluno": 160,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 2.9
  },
  {
    "id_nota": 852,
    "id_aluno": 43,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 6.3
  },
  {
    "id_nota": 853,
    "id_aluno": 185,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 1.4
  },
  {
    "id_nota": 854,
    "id_aluno": 113,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 1.7
  },
  {
    "id_nota": 855,
    "id_aluno": 12,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 8.1
  },
  {
    "id_nota": 856,
    "id_aluno": 106,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 3.4
  },
  {
    "id_nota": 857,
    "id_aluno": 94,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 6.3
  },
  {
    "id_nota": 858,
    "id_aluno": 174,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 5.7
  },
  {
    "id_nota": 859,
    "id_aluno": 185,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 8.5
  },
  {
    "id_nota": 860,
    "id_aluno": 61,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 0.7
  },
  {
    "id_nota": 861,
    "id_aluno": 114,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 1.6
  },
  {
    "id_nota": 862,
    "id_aluno": 157,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 2.3
  },
  {
    "id_nota": 863,
    "id_aluno": 73,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 3.2
  },
  {
    "id_nota": 864,
    "id_aluno": 193,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 2.9
  },
  {
    "id_nota": 865,
    "id_aluno": 192,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 2.7
  },
  {
    "id_nota": 866,
    "id_aluno": 115,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 6.4
  },
  {
    "id_nota": 867,
    "id_aluno": 60,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 2.7
  },
  {
    "id_nota": 868,
    "id_aluno": 137,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 4.4
  },
  {
    "id_nota": 869,
    "id_aluno": 62,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 8.6
  },
  {
    "id_nota": 870,
    "id_aluno": 80,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 3.6
  },
  {
    "id_nota": 871,
    "id_aluno": 121,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.9
  },
  {
    "id_nota": 872,
    "id_aluno": 50,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 9.7
  },
  {
    "id_nota": 873,
    "id_aluno": 95,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 4.1
  },
  {
    "id_nota": 874,
    "id_aluno": 174,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 1.8
  },
  {
    "id_nota": 875,
    "id_aluno": 147,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 0.2
  },
  {
    "id_nota": 876,
    "id_aluno": 113,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 7.3
  },
  {
    "id_nota": 877,
    "id_aluno": 119,
    "disciplina": "Química",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 878,
    "id_aluno": 197,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 9.4
  },
  {
    "id_nota": 879,
    "id_aluno": 73,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 7
  },
  {
    "id_nota": 880,
    "id_aluno": 200,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 0.8
  },
  {
    "id_nota": 881,
    "id_aluno": 98,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 1.7
  },
  {
    "id_nota": 882,
    "id_aluno": 129,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 1
  },
  {
    "id_nota": 883,
    "id_aluno": 136,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 0.6
  },
  {
    "id_nota": 884,
    "id_aluno": 108,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 8.8
  },
  {
    "id_nota": 885,
    "id_aluno": 42,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 5.5
  },
  {
    "id_nota": 886,
    "id_aluno": 52,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 0.3
  },
  {
    "id_nota": 887,
    "id_aluno": 155,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 4
  },
  {
    "id_nota": 888,
    "id_aluno": 36,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 7.6
  },
  {
    "id_nota": 889,
    "id_aluno": 65,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 0.8
  },
  {
    "id_nota": 890,
    "id_aluno": 14,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 2.6
  },
  {
    "id_nota": 891,
    "id_aluno": 165,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 1.6
  },
  {
    "id_nota": 892,
    "id_aluno": 124,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 6.5
  },
  {
    "id_nota": 893,
    "id_aluno": 96,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 8.9
  },
  {
    "id_nota": 894,
    "id_aluno": 142,
    "disciplina": "Geografia",
    "bimestre": "4º",
    "nota": 3.1
  },
  {
    "id_nota": 895,
    "id_aluno": 27,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2.5
  },
  {
    "id_nota": 896,
    "id_aluno": 183,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 2.8
  },
  {
    "id_nota": 897,
    "id_aluno": 133,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6.3
  },
  {
    "id_nota": 898,
    "id_aluno": 32,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 1.3
  },
  {
    "id_nota": 899,
    "id_aluno": 73,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 8.4
  },
  {
    "id_nota": 900,
    "id_aluno": 22,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 0.3
  },
  {
    "id_nota": 901,
    "id_aluno": 196,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6.6
  },
  {
    "id_nota": 902,
    "id_aluno": 42,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 8.6
  },
  {
    "id_nota": 903,
    "id_aluno": 70,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 3.3
  },
  {
    "id_nota": 904,
    "id_aluno": 116,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.8
  },
  {
    "id_nota": 905,
    "id_aluno": 132,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 9.7
  },
  {
    "id_nota": 906,
    "id_aluno": 38,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 5.4
  },
  {
    "id_nota": 907,
    "id_aluno": 112,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 2.7
  },
  {
    "id_nota": 908,
    "id_aluno": 24,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.4
  },
  {
    "id_nota": 909,
    "id_aluno": 57,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.7
  },
  {
    "id_nota": 910,
    "id_aluno": 116,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 7
  },
  {
    "id_nota": 911,
    "id_aluno": 90,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 1.8
  },
  {
    "id_nota": 912,
    "id_aluno": 7,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 6
  },
  {
    "id_nota": 913,
    "id_aluno": 107,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 6.3
  },
  {
    "id_nota": 914,
    "id_aluno": 14,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 6.4
  },
  {
    "id_nota": 915,
    "id_aluno": 102,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 5.6
  },
  {
    "id_nota": 916,
    "id_aluno": 129,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 5.2
  },
  {
    "id_nota": 917,
    "id_aluno": 96,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 6.4
  },
  {
    "id_nota": 918,
    "id_aluno": 61,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 3.1
  },
  {
    "id_nota": 919,
    "id_aluno": 99,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 3.5
  },
  {
    "id_nota": 920,
    "id_aluno": 21,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 5.4
  },
  {
    "id_nota": 921,
    "id_aluno": 96,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 8
  },
  {
    "id_nota": 922,
    "id_aluno": 58,
    "disciplina": "Português",
    "bimestre": "4º",
    "nota": 4.4
  },
  {
    "id_nota": 923,
    "id_aluno": 8,
    "disciplina": "Biologia",
    "bimestre": "3º",
    "nota": 3.7
  },
  {
    "id_nota": 924,
    "id_aluno": 82,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 2.6
  },
  {
    "id_nota": 925,
    "id_aluno": 26,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 3
  },
  {
    "id_nota": 926,
    "id_aluno": 183,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 0
  },
  {
    "id_nota": 927,
    "id_aluno": 167,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 8.2
  },
  {
    "id_nota": 928,
    "id_aluno": 86,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 8.5
  },
  {
    "id_nota": 929,
    "id_aluno": 38,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 3.4
  },
  {
    "id_nota": 930,
    "id_aluno": 36,
    "disciplina": "Geografia",
    "bimestre": "2º",
    "nota": 4.7
  },
  {
    "id_nota": 931,
    "id_aluno": 10,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 0.1
  },
  {
    "id_nota": 932,
    "id_aluno": 74,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 9.2
  },
  {
    "id_nota": 933,
    "id_aluno": 121,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 9.5
  },
  {
    "id_nota": 934,
    "id_aluno": 179,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 4.8
  },
  {
    "id_nota": 935,
    "id_aluno": 36,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 0.1
  },
  {
    "id_nota": 936,
    "id_aluno": 195,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 4.3
  },
  {
    "id_nota": 937,
    "id_aluno": 181,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 2.9
  },
  {
    "id_nota": 938,
    "id_aluno": 121,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 2.3
  },
  {
    "id_nota": 939,
    "id_aluno": 115,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.1
  },
  {
    "id_nota": 940,
    "id_aluno": 158,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 3.7
  },
  {
    "id_nota": 941,
    "id_aluno": 2,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 4.1
  },
  {
    "id_nota": 942,
    "id_aluno": 21,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 5.6
  },
  {
    "id_nota": 943,
    "id_aluno": 5,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 3.9
  },
  {
    "id_nota": 944,
    "id_aluno": 66,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 1.6
  },
  {
    "id_nota": 945,
    "id_aluno": 56,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 7.4
  },
  {
    "id_nota": 946,
    "id_aluno": 39,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 3.9
  },
  {
    "id_nota": 947,
    "id_aluno": 141,
    "disciplina": "Matemática",
    "bimestre": "4º",
    "nota": 3.8
  },
  {
    "id_nota": 948,
    "id_aluno": 187,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 2.6
  },
  {
    "id_nota": 949,
    "id_aluno": 156,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 4.2
  },
  {
    "id_nota": 950,
    "id_aluno": 136,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 2.4
  },
  {
    "id_nota": 951,
    "id_aluno": 109,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 7.6
  },
  {
    "id_nota": 952,
    "id_aluno": 29,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 9.1
  },
  {
    "id_nota": 953,
    "id_aluno": 199,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 8.1
  },
  {
    "id_nota": 954,
    "id_aluno": 74,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 6.8
  },
  {
    "id_nota": 955,
    "id_aluno": 61,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 2.8
  },
  {
    "id_nota": 956,
    "id_aluno": 78,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 7.4
  },
  {
    "id_nota": 957,
    "id_aluno": 32,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 8.1
  },
  {
    "id_nota": 958,
    "id_aluno": 13,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 4.1
  },
  {
    "id_nota": 959,
    "id_aluno": 62,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 8.5
  },
  {
    "id_nota": 960,
    "id_aluno": 108,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 1.8
  },
  {
    "id_nota": 961,
    "id_aluno": 164,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 2.9
  },
  {
    "id_nota": 962,
    "id_aluno": 160,
    "disciplina": "Química",
    "bimestre": "3º",
    "nota": 6.4
  },
  {
    "id_nota": 963,
    "id_aluno": 118,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 6.2
  },
  {
    "id_nota": 964,
    "id_aluno": 17,
    "disciplina": "Português",
    "bimestre": "1º",
    "nota": 2.7
  },
  {
    "id_nota": 965,
    "id_aluno": 29,
    "disciplina": "Física",
    "bimestre": "4º",
    "nota": 6.2
  },
  {
    "id_nota": 966,
    "id_aluno": 128,
    "disciplina": "Física",
    "bimestre": "2º",
    "nota": 1.9
  },
  {
    "id_nota": 967,
    "id_aluno": 153,
    "disciplina": "Inglês",
    "bimestre": "2º",
    "nota": 0.2
  },
  {
    "id_nota": 968,
    "id_aluno": 138,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 0.5
  },
  {
    "id_nota": 969,
    "id_aluno": 5,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 5.3
  },
  {
    "id_nota": 970,
    "id_aluno": 162,
    "disciplina": "Português",
    "bimestre": "3º",
    "nota": 1.9
  },
  {
    "id_nota": 971,
    "id_aluno": 132,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 1
  },
  {
    "id_nota": 972,
    "id_aluno": 148,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 2.7
  },
  {
    "id_nota": 973,
    "id_aluno": 62,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 7.2
  },
  {
    "id_nota": 974,
    "id_aluno": 184,
    "disciplina": "Geografia",
    "bimestre": "1º",
    "nota": 7.3
  },
  {
    "id_nota": 975,
    "id_aluno": 37,
    "disciplina": "Biologia",
    "bimestre": "4º",
    "nota": 2.3
  },
  {
    "id_nota": 976,
    "id_aluno": 75,
    "disciplina": "Português",
    "bimestre": "2º",
    "nota": 1.5
  },
  {
    "id_nota": 977,
    "id_aluno": 110,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 4.9
  },
  {
    "id_nota": 978,
    "id_aluno": 1,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 3.4
  },
  {
    "id_nota": 979,
    "id_aluno": 158,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 3.1
  },
  {
    "id_nota": 980,
    "id_aluno": 91,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 8
  },
  {
    "id_nota": 981,
    "id_aluno": 62,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 10
  },
  {
    "id_nota": 982,
    "id_aluno": 147,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 4.6
  },
  {
    "id_nota": 983,
    "id_aluno": 107,
    "disciplina": "Química",
    "bimestre": "1º",
    "nota": 7.9
  },
  {
    "id_nota": 984,
    "id_aluno": 48,
    "disciplina": "Química",
    "bimestre": "4º",
    "nota": 3.3
  },
  {
    "id_nota": 985,
    "id_aluno": 171,
    "disciplina": "História",
    "bimestre": "2º",
    "nota": 8.4
  },
  {
    "id_nota": 986,
    "id_aluno": 172,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 9.5
  },
  {
    "id_nota": 987,
    "id_aluno": 22,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 0.6
  },
  {
    "id_nota": 988,
    "id_aluno": 135,
    "disciplina": "História",
    "bimestre": "1º",
    "nota": 7.8
  },
  {
    "id_nota": 989,
    "id_aluno": 93,
    "disciplina": "Inglês",
    "bimestre": "3º",
    "nota": 0.7
  },
  {
    "id_nota": 990,
    "id_aluno": 18,
    "disciplina": "Biologia",
    "bimestre": "2º",
    "nota": 4.7
  },
  {
    "id_nota": 991,
    "id_aluno": 135,
    "disciplina": "História",
    "bimestre": "4º",
    "nota": 1.9
  },
  {
    "id_nota": 992,
    "id_aluno": 140,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 8.4
  },
  {
    "id_nota": 993,
    "id_aluno": 130,
    "disciplina": "Física",
    "bimestre": "3º",
    "nota": 8.2
  },
  {
    "id_nota": 994,
    "id_aluno": 130,
    "disciplina": "Inglês",
    "bimestre": "4º",
    "nota": 8.3
  },
  {
    "id_nota": 995,
    "id_aluno": 142,
    "disciplina": "Matemática",
    "bimestre": "1º",
    "nota": 1.2
  },
  {
    "id_nota": 996,
    "id_aluno": 6,
    "disciplina": "Física",
    "bimestre": "1º",
    "nota": 7.7
  },
  {
    "id_nota": 997,
    "id_aluno": 100,
    "disciplina": "Matemática",
    "bimestre": "2º",
    "nota": 2.5
  },
  {
    "id_nota": 998,
    "id_aluno": 121,
    "disciplina": "Inglês",
    "bimestre": "1º",
    "nota": 7.7
  },
  {
    "id_nota": 999,
    "id_aluno": 12,
    "disciplina": "História",
    "bimestre": "3º",
    "nota": 4.4
  },
  {
    "id_nota": 1000,
    "id_aluno": 163,
    "disciplina": "Geografia",
    "bimestre": "3º",
    "nota": 7.4
  }
];
    const professoresData = [
  {
    "id_professor": 1,
    "nome": "Luiz Felipe das Neves",
    "disciplina": "Português",
    "tempo_casa_anos": 16,
    "formacao": "Mestrado"
  },
  {
    "id_professor": 2,
    "nome": "Nathan da Rocha",
    "disciplina": "Matemática",
    "tempo_casa_anos": 3,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 3,
    "nome": "Maria Eduarda Mendonça",
    "disciplina": "História",
    "tempo_casa_anos": 16,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 4,
    "nome": "Zoe Aparecida",
    "disciplina": "Biologia",
    "tempo_casa_anos": 12,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 5,
    "nome": "Raul Andrade",
    "disciplina": "Biologia",
    "tempo_casa_anos": 14,
    "formacao": "Bacharelado"
  },
  {
    "id_professor": 6,
    "nome": "Ana Cecília Leão",
    "disciplina": "Inglês",
    "tempo_casa_anos": 11,
    "formacao": "Mestrado"
  },
  {
    "id_professor": 7,
    "nome": "Dr. Igor Ramos",
    "disciplina": "Português",
    "tempo_casa_anos": 11,
    "formacao": "Bacharelado"
  },
  {
    "id_professor": 8,
    "nome": "José Pedro Moreira",
    "disciplina": "Inglês",
    "tempo_casa_anos": 4,
    "formacao": "Mestrado"
  },
  {
    "id_professor": 9,
    "nome": "Davi Barros",
    "disciplina": "Biologia",
    "tempo_casa_anos": 6,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 10,
    "nome": "Dra. Nicole Sousa",
    "disciplina": "Química",
    "tempo_casa_anos": 11,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 11,
    "nome": "Srta. Hellena da Paz",
    "disciplina": "Biologia",
    "tempo_casa_anos": 14,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 12,
    "nome": "Vitor Novais",
    "disciplina": "Inglês",
    "tempo_casa_anos": 16,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 13,
    "nome": "Ana Laura Martins",
    "disciplina": "Inglês",
    "tempo_casa_anos": 10,
    "formacao": "Bacharelado"
  },
  {
    "id_professor": 14,
    "nome": "José Pedro da Costa",
    "disciplina": "Português",
    "tempo_casa_anos": 13,
    "formacao": "Bacharelado"
  },
  {
    "id_professor": 15,
    "nome": "Esther Guerra",
    "disciplina": "Matemática",
    "tempo_casa_anos": 18,
    "formacao": "Mestrado"
  },
  {
    "id_professor": 16,
    "nome": "Anthony Gabriel da Mata",
    "disciplina": "Química",
    "tempo_casa_anos": 2,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 17,
    "nome": "Daniela Barbosa",
    "disciplina": "Física",
    "tempo_casa_anos": 15,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 18,
    "nome": "Theodoro Farias",
    "disciplina": "Biologia",
    "tempo_casa_anos": 3,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 19,
    "nome": "Clarice Monteiro",
    "disciplina": "Matemática",
    "tempo_casa_anos": 11,
    "formacao": "Bacharelado"
  },
  {
    "id_professor": 20,
    "nome": "Ana Beatriz Siqueira",
    "disciplina": "Português",
    "tempo_casa_anos": 9,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 21,
    "nome": "Diogo Camargo",
    "disciplina": "Geografia",
    "tempo_casa_anos": 11,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 22,
    "nome": "Pietra Silveira",
    "disciplina": "Matemática",
    "tempo_casa_anos": 4,
    "formacao": "Licenciatura"
  },
  {
    "id_professor": 23,
    "nome": "Bento Sampaio",
    "disciplina": "Biologia",
    "tempo_casa_anos": 13,
    "formacao": "Bacharelado"
  },
  {
    "id_professor": 24,
    "nome": "Ana Liz Siqueira",
    "disciplina": "Matemática",
    "tempo_casa_anos": 17,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 25,
    "nome": "Vicente Costela",
    "disciplina": "História",
    "tempo_casa_anos": 1,
    "formacao": "Mestrado"
  },
  {
    "id_professor": 26,
    "nome": "Isaque Sousa",
    "disciplina": "Inglês",
    "tempo_casa_anos": 18,
    "formacao": "Mestrado"
  },
  {
    "id_professor": 27,
    "nome": "Clara Nogueira",
    "disciplina": "Inglês",
    "tempo_casa_anos": 15,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 28,
    "nome": "Ágatha Guerra",
    "disciplina": "Biologia",
    "tempo_casa_anos": 14,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 29,
    "nome": "Sr. Ravi Lucca Oliveira",
    "disciplina": "História",
    "tempo_casa_anos": 2,
    "formacao": "Doutorado"
  },
  {
    "id_professor": 30,
    "nome": "Ana Laura da Costa",
    "disciplina": "Química",
    "tempo_casa_anos": 7,
    "formacao": "Bacharelado"
  }
];

  const dashboardDisplay = document.getElementById('dashboard-display');
    const dashboardCardsEdu = document.querySelectorAll('#dashboards-edu .card');
    const showDataBtn = document.getElementById('showDataBtn');
    const dataOverlay = document.getElementById('dataOverlay');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');
    
    const allData = {
        'Alunos': alunosData,
        'Notas': notasData,
        'Faltas': faltasData,
        'Professores': professoresData,
        'Avaliações': avaliacoesData
    };

    let chartInstances = {};

    const destroyChart = (chartId) => {
        if (chartInstances[chartId]) {
            chartInstances[chartId].destroy();
            delete chartInstances[chartId];
        }
    };
    
    if (dashboardCardsEdu.length > 0) {
        dashboardCardsEdu.forEach(card => {
            card.addEventListener('click', (event) => {
                dashboardCardsEdu.forEach(c => c.classList.remove('active-card'));
                card.classList.add('active-card');
                
                const dashboardType = card.dataset.dashboard;
                renderEduDashboard(dashboardType);
            });
        });
    }

    showDataBtn.addEventListener('click', () => {
        setupDataExplorer();
    });

    closeOverlayBtn.addEventListener('click', () => {
        dataOverlay.style.display = 'none';
    });
    
    function setupDataExplorer() {
        dataOverlay.style.display = 'flex';
        const dataTabsContainer = document.getElementById('dataTabs');
        const tableContainer = document.getElementById('dataTableContainer');

        dataTabsContainer.innerHTML = '';
        tableContainer.innerHTML = '';

        const dataNames = Object.keys(allData);

        dataNames.forEach(name => {
            const button = document.createElement('button');
            button.textContent = name;
            button.addEventListener('click', () => {
                dataTabsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderDataTable(`Dados Brutos - ${name}`, allData[name]);
            });
            dataTabsContainer.appendChild(button);
        });

        // Seleciona a primeira aba por padrão
        if (dataNames.length > 0) {
            dataTabsContainer.querySelector('button').click();
        }
    }

    function renderDataTable(title, data) {
        const overlayTitle = document.getElementById('overlayTitle');
        const tableContainer = document.getElementById('dataTableContainer');
        overlayTitle.textContent = title;

        if (!data || data.length === 0) {
            tableContainer.innerHTML = '<p>Nenhum dado encontrado.</p>';
            return;
        }

        const headers = Object.keys(data[0]);
        let tableHtml = `
            <table class="data-table">
                <thead>
                    <tr>
                        ${headers.map(h => `<th>${h}<br><input type="text" class="filter-input" data-column="${h}" placeholder="Filtrar"></th>`).join('')}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        tableContainer.innerHTML = tableHtml;

        const tbody = tableContainer.querySelector('tbody');

        function renderTableRows(filteredData) {
            tbody.innerHTML = filteredData.map(row => `
                <tr>
                    ${headers.map(h => `<td>${row[h]}</td>`).join('')}
                </tr>
            `).join('');
        }

        renderTableRows(data);

        const filterInputs = tableContainer.querySelectorAll('.filter-input');
        filterInputs.forEach(input => {
            input.addEventListener('input', () => {
                let filteredData = [...data];
                filterInputs.forEach(filterInput => {
                    const column = filterInput.dataset.column;
                    const value = filterInput.value.toLowerCase();
                    if (value) {
                        filteredData = filteredData.filter(row => 
                            String(row[column]).toLowerCase().includes(value)
                        );
                    }
                });
                renderTableRows(filteredData);
            });
        });
    }

    function renderEduDashboard(type) {
        dashboardDisplay.innerHTML = `
            <div class="loading-overlay">
                <div class="spinner"></div>
            </div>
        `;
        showDataBtn.classList.remove('visible');

        setTimeout(() => {
            let content = '';
            let dataToShow = null;
            let title = '';

            switch (type) {
                case 'desempenho-academico':
                    const notasPorDisciplina = notasData.reduce((acc, row) => {
                        const disciplina = row.disciplina;
                        acc[disciplina] = (acc[disciplina] || []).concat(row.nota);
                        return acc;
                    }, {});
                    const mediaNotasPorDisciplina = {};
                    Object.keys(notasPorDisciplina).forEach(disciplina => {
                        const notas = notasPorDisciplina[disciplina];
                        const media = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
                        mediaNotasPorDisciplina[disciplina] = media;
                    });
                    
                    const totalFaltas = faltasData.length;
                    const totalAlunos = alunosData.length;
                    const mediaFaltas = (totalFaltas / totalAlunos).toFixed(2);
                    
                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Desempenho Acadêmico</h2>
                            <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Média Geral das Notas:</strong><br> ${
                                        (notasData.reduce((sum, row) => sum + row.nota, 0) / notasData.length).toFixed(2)
                                    }
                                </div>
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Média de Faltas por Aluno:</strong><br> ${mediaFaltas}
                                </div>
                            </div>
                            
                            <h3 style="margin-top:20px;">Média de Notas por Disciplina</h3>
                            <div class="chart-container">
                                <canvas id="mediaNotasChart"></canvas>
                            </div>
                        </div>
                    `;
                    dashboardDisplay.innerHTML = content;
                    
                    const ctxMediaNotas = document.getElementById('mediaNotasChart').getContext('2d');
                    new Chart(ctxMediaNotas, {
                        type: 'bar',
                        data: {
                            labels: Object.keys(mediaNotasPorDisciplina),
                            datasets: [{
                                label: 'Média de Notas',
                                data: Object.values(mediaNotasPorDisciplina),
                                backgroundColor: '#007bff',
                            }]
                        },
                        options: { responsive: true, scales: { y: { beginAtZero: true, max: 10 } } },
                    });
                    
                    dataToShow = notasData;
                    title = 'Dados Brutos - Notas';
                    break;
                case 'satisfacao-aluno':
                    const avaliacaoMediaGeral = ['pontualidade', 'preparo_aula', 'clareza', 'relacao_aluno'].reduce((acc, key) => {
                        acc[key] = (avaliacoesData.reduce((sum, row) => sum + (row[key] || 0), 0) / avaliacoesData.length).toFixed(2);
                        return acc;
                    }, {});

                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Satisfação do Aluno</h2>
                            <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Pontualidade:</strong><br> ${avaliacaoMediaGeral.pontualidade}
                                </div>
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Preparo da Aula:</strong><br> ${avaliacaoMediaGeral.preparo_aula}
                                </div>
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Clareza:</strong><br> ${avaliacaoMediaGeral.clareza}
                                </div>
                            </div>
                            
                            <h3 style="margin-top:20px;">Média de Avaliações por Critério</h3>
                            <div class="chart-container">
                                <canvas id="satisfacaoChart"></canvas>
                            </div>
                        </div>
                    `;
                    dashboardDisplay.innerHTML = content;
                    
                    const ctxSatisfacao = document.getElementById('satisfacaoChart').getContext('2d');
                    new Chart(ctxSatisfacao, {
                        type: 'bar',
                        data: {
                            labels: ['Pontualidade', 'Preparo da Aula', 'Clareza', 'Relação com Aluno'],
                            datasets: [{
                                label: 'Média de Avaliação',
                                data: Object.values(avaliacaoMediaGeral),
                                backgroundColor: '#28a745',
                            }]
                        },
                        options: { responsive: true, scales: { y: { beginAtZero: true, max: 5 } } },
                    });
                    
                    dataToShow = avaliacoesData;
                    title = 'Dados Brutos - Avaliações';
                    break;
                case 'analise-docentes':
                    const professoresPorFormacao = professoresData.reduce((acc, row) => {
                        const formacao = row.formacao;
                        acc[formacao] = (acc[formacao] || 0) + 1;
                        return acc;
                    }, {});

                    const tempoMedioCasa = (professoresData.reduce((sum, row) => sum + row.tempo_casa_anos, 0) / professoresData.length).toFixed(2);
                    
                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Análise de Docentes</h2>
                            <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Total de Professores:</strong><br> ${professoresData.length}
                                </div>
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Tempo Médio de Casa:</strong><br> ${tempoMedioCasa} anos
                                </div>
                            </div>
                            
                            <h3 style="margin-top:20px;">Professores por Formação</h3>
                            <div class="chart-container">
                                <canvas id="formacaoChart"></canvas>
                            </div>
                        </div>
                    `;
                    dashboardDisplay.innerHTML = content;
                    
                    const ctxFormacao = document.getElementById('formacaoChart').getContext('2d');
                    new Chart(ctxFormacao, {
                        type: 'pie',
                        data: {
                            labels: Object.keys(professoresPorFormacao),
                            datasets: [{
                                data: Object.values(professoresPorFormacao),
                                backgroundColor: ['#007bff', '#17a2b8', '#ffc107', '#dc3545'],
                            }]
                        },
                        options: { responsive: true },
                    });
                    
                    dataToShow = professoresData;
                    title = 'Dados Brutos - Professores';
                    break;
                case 'analise-individual':
                    content = `
                        <div class="dashboard-content">
                            <h2>Análise Individual de Aluno</h2>
                            <div class="search-box">
                                <input type="text" id="studentSearch" placeholder="Digite o nome do aluno...">
                                <div class="search-results" id="searchResults"></div>
                            </div>
                            
                            <div id="studentDataContainer" style="margin-top:20px;">
                                <p>Selecione um aluno acima para visualizar seus dados.</p>
                            </div>
                        </div>
                    `;
                    dashboardDisplay.innerHTML = content;

                    const searchInput = document.getElementById('studentSearch');
                    const searchResults = document.getElementById('searchResults');
                    const studentDataContainer = document.getElementById('studentDataContainer');

                    searchInput.addEventListener('input', () => {
                        const searchTerm = searchInput.value.toLowerCase();
                        searchResults.innerHTML = '';
                        if (searchTerm.length > 2) {
                            const filteredStudents = alunosData.filter(student => student.nome.toLowerCase().includes(searchTerm));
                            if (filteredStudents.length > 0) {
                                filteredStudents.forEach(student => {
                                    const resultItem = document.createElement('div');
                                    resultItem.textContent = student.nome;
                                    resultItem.addEventListener('click', () => {
                                        displayStudentData(student.id_aluno);
                                        searchInput.value = student.nome;
                                        searchResults.innerHTML = '';
                                    });
                                    searchResults.appendChild(resultItem);
                                });
                            } else {
                                searchResults.innerHTML = '<div>Nenhum aluno encontrado.</div>';
                            }
                        }
                    });

                    function displayStudentData(studentId) {
                        const student = alunosData.find(s => s.id_aluno === studentId);
                        if (!student) {
                            studentDataContainer.innerHTML = '<p>Aluno não encontrado.</p>';
                            return;
                        }

                        const studentNotas = notasData.filter(n => n.id_aluno === studentId);
                        const studentFaltas = faltasData.filter(f => f.id_aluno === studentId);
                        
                        const notasPorDisciplina = studentNotas.reduce((acc, row) => {
                            acc[row.disciplina] = row.nota;
                            return acc;
                        }, {});

                        const disciplinas = [...new Set(studentNotas.map(n => n.disciplina))];
                        const notas = disciplinas.map(d => notasPorDisciplina[d]);
                        
                        const aptidaoPorArea = {
                            'Exatas': [],
                            'Humanas': [],
                            'Linguagens': []
                        };
                        
                        const disciplinaParaCategoria = {
                            'Matemática': 'Exatas',
                            'Física': 'Exatas',
                            'Química': 'Exatas',
                            'História': 'Humanas',
                            'Geografia': 'Humanas',
                            'Biologia': 'Humanas',
                            'Português': 'Linguagens',
                            'Inglês': 'Linguagens'
                        };

                        studentNotas.forEach(nota => {
                            const categoria = disciplinaParaCategoria[nota.disciplina];
                            if (categoria) {
                                aptidaoPorArea[categoria].push(nota.nota);
                            }
                        });
                        
                        const mediasAptidao = Object.keys(aptidaoPorArea).reduce((acc, area) => {
                            const notasArea = aptidaoPorArea[area];
                            if (notasArea.length > 0) {
                                acc[area] = notasArea.reduce((sum, n) => sum + n, 0) / notasArea.length;
                            } else {
                                acc[area] = 0;
                            }
                            return acc;
                        }, {});

                        const faltasPorDisciplina = studentFaltas.reduce((acc, row) => {
                            acc[row.disciplina] = (acc[row.disciplina] || 0) + 1;
                            return acc;
                        }, {});

                        const disciplinasComFaltas = [...new Set(studentFaltas.map(f => f.disciplina))];
                        const faltasDoAluno = disciplinasComFaltas.map(d => faltasPorDisciplina[d]);

                        const alunosDaTurma = alunosData.filter(a => a.turma === student.turma);
                        const faltasDaTurmaPorDisciplina = faltasData.filter(f => alunosDaTurma.some(a => a.id_aluno === f.id_aluno));
                        const faltasDaTurmaAgg = faltasDaTurmaPorDisciplina.reduce((acc, row) => {
                            acc[row.disciplina] = (acc[row.disciplina] || 0) + 1;
                            return acc;
                        }, {});

                        const mediaFaltasTurma = disciplinasComFaltas.map(d => {
                            const totalFaltasNaDisciplina = faltasDaTurmaAgg[d] || 0;
                            const alunosComFaltas = faltasDaTurmaPorDisciplina.filter(f => f.disciplina === d);
                            return totalFaltasNaDisciplina / alunosComFaltas.length;
                        });
                        
                        let gradesTable = '';
                        if (studentNotas.length > 0) {
                            gradesTable += `<h3>Notas por Disciplina</h3>`;
                            gradesTable += `<table style="width:100%; border-collapse: collapse; margin-top: 10px;">
                                                <thead><tr><th style="border: 1px solid #ddd; padding: 8px;">Disciplina</th><th style="border: 1px solid #ddd; padding: 8px;">Nota</th></tr></thead>
                                                <tbody>`;
                            studentNotas.forEach(nota => {
                                gradesTable += `<tr><td style="border: 1px solid #ddd; padding: 8px;">${nota.disciplina}</td><td style="border: 1px solid #ddd; padding: 8px;">${nota.nota}</td></tr>`;
                            });
                            gradesTable += `</tbody></table>`;
                        } else {
                            gradesTable += `<p>Nenhuma nota encontrada.</p>`;
                        }

                        let absencesTable = '';
                        if (studentFaltas.length > 0) {
                            const faltasPorDisciplinaDisplay = studentFaltas.reduce((acc, row) => {
                                acc[row.disciplina] = (acc[row.disciplina] || 0) + 1;
                                return acc;
                            }, {});
                            
                            absencesTable += `<h3>Faltas por Disciplina</h3>`;
                            absencesTable += `<table style="width:100%; border-collapse: collapse; margin-top: 10px;">
                                                <thead><tr><th style="border: 1px solid #ddd; padding: 8px;">Disciplina</th><th style="border: 1px solid #ddd; padding: 8px;">Total de Faltas</th></tr></thead>
                                                <tbody>`;
                            Object.keys(faltasPorDisciplinaDisplay).forEach(disciplina => {
                                absencesTable += `<tr><td style="border: 1px solid #ddd; padding: 8px;">${disciplina}</td><td style="border: 1px solid #ddd; padding: 8px;">${faltasPorDisciplinaDisplay[disciplina]}</td></tr>`;
                            });
                            absencesTable += `</tbody></table>`;
                        } else {
                            absencesTable += `<p>Nenhuma falta encontrada.</p>`;
                        }

                        studentDataContainer.innerHTML = `
                            <div class="dashboard-content">
                                <h3>Informações de ${student.nome}</h3>
                                <p><strong>Idade:</strong> ${student.idade}</p>
                                <p><strong>Turma:</strong> ${student.turma}</p>
                                
                                <div style="margin-top:20px;">
                                    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                                        <div style="flex: 1; min-width: 300px;">
                                            ${gradesTable}
                                        </div>
                                        <div style="flex: 1; min-width: 300px;">
                                            ${absencesTable}
                                        </div>
                                    </div>
                                </div>
                                
                                <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                                    <div style="flex: 1; min-width: 300px;">
                                        <h4 style="margin-top:20px;">Notas por Disciplina (Gráfico)</h4>
                                        <div class="chart-container">
                                            <canvas id="studentGradesChart"></canvas>
                                        </div>
                                    </div>
                                    <div style="flex: 1; min-width: 300px;">
                                        <h4 style="margin-top:20px;">Aptidão por Área</h4>
                                        <div class="chart-container">
                                            <canvas id="studentAptitudeChart"></canvas>
                                        </div>
                                    </div>
                                </div>

                                <div style="flex: 1; min-width: 300px;">
                                    <h4 style="margin-top:20px;">Faltas por Disciplina (vs. Média da Turma)</h4>
                                    <div class="chart-container">
                                        <canvas id="studentAbsencesChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        `;

                        const ctxGrades = document.getElementById('studentGradesChart').getContext('2d');
                        new Chart(ctxGrades, {
                            type: 'bar',
                            data: {
                                labels: disciplinas,
                                datasets: [{
                                    label: 'Nota',
                                    data: notas,
                                    backgroundColor: '#007bff'
                                }]
                            },
                            options: {
                                responsive: true,
                                scales: {
                                    y: { beginAtZero: true, max: 10 }
                                }
                            }
                        });

                        const ctxAptitude = document.getElementById('studentAptitudeChart').getContext('2d');
                        new Chart(ctxAptitude, {
                            type: 'radar',
                            data: {
                                labels: Object.keys(mediasAptidao),
                                datasets: [{
                                    label: 'Média por Área',
                                    data: Object.values(mediasAptidao),
                                    backgroundColor: 'rgba(40, 167, 69, 0.2)',
                                    borderColor: '#28a745',
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                responsive: true,
                                scales: {
                                    r: {
                                        angleLines: { display: false },
                                        suggestedMin: 0,
                                        suggestedMax: 10
                                    }
                                }
                            }
                        });
                        
                        const ctxAbsences = document.getElementById('studentAbsencesChart').getContext('2d');
                        new Chart(ctxAbsences, {
                            type: 'bar',
                            data: {
                                labels: disciplinasComFaltas,
                                datasets: [{
                                    label: 'Faltas do Aluno',
                                    data: faltasDoAluno,
                                    backgroundColor: 'rgba(0, 123, 255, 0.8)',
                                },
                                {
                                    label: 'Média da Turma',
                                    data: mediaFaltasTurma,
                                    backgroundColor: 'rgba(220, 53, 69, 0.8)',
                                }]
                            },
                            options: {
                                responsive: true,
                                scales: {
                                    y: { beginAtZero: true }
                                }
                            }
                        });
                    }
                    
                    dataToShow = alunosData;
                    title = 'Dados Brutos - Alunos';
                    break;
                default:
                    dashboardDisplay.innerHTML = `<p>Dashboard não encontrado.</p>`;
            }
            
            currentData = { title: title, data: dataToShow };
            showDataBtn.classList.add('visible');

        }, 500);
    }
});
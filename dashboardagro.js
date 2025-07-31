document.addEventListener('DOMContentLoaded', () => {
    const fazendasData = [
  {
    "id_fazenda": 1,
    "nome_fazenda": "Sá Santos - EI",
    "estado": "SP",
    "hectares": 1176,
    "responsavel": "Nathan Barros",
    "data_cadastro": "2023-05-15"
  },
  {
    "id_fazenda": 2,
    "nome_fazenda": "da Rocha e Filhos",
    "estado": "SP",
    "hectares": 910,
    "responsavel": "Dr. João Pedro Casa Grande",
    "data_cadastro": "2024-03-04"
  },
  {
    "id_fazenda": 3,
    "nome_fazenda": "Novaes",
    "estado": "MT",
    "hectares": 1344,
    "responsavel": "Giovanna Dias",
    "data_cadastro": "2025-07-18"
  },
  {
    "id_fazenda": 4,
    "nome_fazenda": "Moraes",
    "estado": "MG",
    "hectares": 1180,
    "responsavel": "Dante Correia",
    "data_cadastro": "2022-10-30"
  },
  {
    "id_fazenda": 5,
    "nome_fazenda": "Pereira e Filhos",
    "estado": "MG",
    "hectares": 1145,
    "responsavel": "Letícia Pastor",
    "data_cadastro": "2023-08-16"
  },
  {
    "id_fazenda": 6,
    "nome_fazenda": "Aragão Monteiro - ME",
    "estado": "MG",
    "hectares": 1094,
    "responsavel": "Vinícius Andrade",
    "data_cadastro": "2023-02-12"
  },
  {
    "id_fazenda": 7,
    "nome_fazenda": "Pacheco",
    "estado": "SP",
    "hectares": 171,
    "responsavel": "Vitor Pacheco",
    "data_cadastro": "2025-06-30"
  },
  {
    "id_fazenda": 8,
    "nome_fazenda": "Cardoso",
    "estado": "RS",
    "hectares": 516,
    "responsavel": "Anna Liz Viana",
    "data_cadastro": "2023-11-04"
  },
  {
    "id_fazenda": 9,
    "nome_fazenda": "Silva",
    "estado": "SP",
    "hectares": 1288,
    "responsavel": "Manuela Moraes",
    "data_cadastro": "2024-12-24"
  },
  {
    "id_fazenda": 10,
    "nome_fazenda": "Martins",
    "estado": "RS",
    "hectares": 380,
    "responsavel": "Diogo Caldeira",
    "data_cadastro": "2024-11-07"
  },
  {
    "id_fazenda": 11,
    "nome_fazenda": "Macedo",
    "estado": "GO",
    "hectares": 137,
    "responsavel": "Luana Gomes",
    "data_cadastro": "2022-11-29"
  },
  {
    "id_fazenda": 12,
    "nome_fazenda": "Pereira - EI",
    "estado": "SP",
    "hectares": 1446,
    "responsavel": "Clara Pires",
    "data_cadastro": "2024-11-19"
  },
  {
    "id_fazenda": 13,
    "nome_fazenda": "Macedo Marques - EI",
    "estado": "SP",
    "hectares": 1173,
    "responsavel": "Dra. Maria Flor Gomes",
    "data_cadastro": "2023-10-05"
  },
  {
    "id_fazenda": 14,
    "nome_fazenda": "Costa",
    "estado": "SP",
    "hectares": 921,
    "responsavel": "Alice Mendonça",
    "data_cadastro": "2024-10-28"
  },
  {
    "id_fazenda": 15,
    "nome_fazenda": "Fogaça",
    "estado": "MG",
    "hectares": 180,
    "responsavel": "Dr. Isaac Azevedo",
    "data_cadastro": "2023-10-25"
  },
  {
    "id_fazenda": 16,
    "nome_fazenda": "Barros",
    "estado": "MG",
    "hectares": 1382,
    "responsavel": "Dr. Matheus Souza",
    "data_cadastro": "2025-06-10"
  },
  {
    "id_fazenda": 17,
    "nome_fazenda": "Nogueira - ME",
    "estado": "RS",
    "hectares": 819,
    "responsavel": "João Lucas Pacheco",
    "data_cadastro": "2025-04-29"
  },
  {
    "id_fazenda": 18,
    "nome_fazenda": "Lima",
    "estado": "RS",
    "hectares": 393,
    "responsavel": "Manuella Correia",
    "data_cadastro": "2024-08-15"
  },
  {
    "id_fazenda": 19,
    "nome_fazenda": "da Rocha",
    "estado": "SP",
    "hectares": 1487,
    "responsavel": "Luiz Henrique Alves",
    "data_cadastro": "2022-09-29"
  },
  {
    "id_fazenda": 20,
    "nome_fazenda": "Almeida",
    "estado": "RS",
    "hectares": 855,
    "responsavel": "Maria Vitória Lima",
    "data_cadastro": "2023-04-17"
  }
];
    const colheitasData = [
  {
    "id_fazenda": 1,
    "cultura": "Cana-de-Açúcar",
    "safra": "2022/23",
    "hectares_colhidos": 200.31,
    "quantidade_toneladas": 291.13
  },
  {
    "id_fazenda": 2,
    "cultura": "Café",
    "safra": "2022/23",
    "hectares_colhidos": 171.63,
    "quantidade_toneladas": 475.33
  },
  {
    "id_fazenda": 3,
    "cultura": "Milho",
    "safra": "2023/24",
    "hectares_colhidos": 253.46,
    "quantidade_toneladas": 89.85
  },
  {
    "id_fazenda": 4,
    "cultura": "Café",
    "safra": "2023/24",
    "hectares_colhidos": 288.75,
    "quantidade_toneladas": 165.61
  },
  {
    "id_fazenda": 5,
    "cultura": "Café",
    "safra": "2022/23",
    "hectares_colhidos": 235.94,
    "quantidade_toneladas": 71.25
  },
  {
    "id_fazenda": 5,
    "cultura": "Milho",
    "safra": "2022/23",
    "hectares_colhidos": 231.11,
    "quantidade_toneladas": 313.75
  },
  {
    "id_fazenda": 5,
    "cultura": "Café",
    "safra": "2022/23",
    "hectares_colhidos": 182.94,
    "quantidade_toneladas": 130.84
  },
  {
    "id_fazenda": 6,
    "cultura": "Café",
    "safra": "2022/23",
    "hectares_colhidos": 209.56,
    "quantidade_toneladas": 248.77
  },
  {
    "id_fazenda": 7,
    "cultura": "Algodão",
    "safra": "2023/24",
    "hectares_colhidos": 216.49,
    "quantidade_toneladas": 199.5
  },
  {
    "id_fazenda": 7,
    "cultura": "Cana-de-Açúcar",
    "safra": "2023/24",
    "hectares_colhidos": 147.42,
    "quantidade_toneladas": 98.62
  },
  {
    "id_fazenda": 7,
    "cultura": "Milho",
    "safra": "2022/23",
    "hectares_colhidos": 128.49,
    "quantidade_toneladas": 485.03
  },
  {
    "id_fazenda": 8,
    "cultura": "Cana-de-Açúcar",
    "safra": "2022/23",
    "hectares_colhidos": 225.29,
    "quantidade_toneladas": 494.36
  },
  {
    "id_fazenda": 8,
    "cultura": "Milho",
    "safra": "2022/23",
    "hectares_colhidos": 61.35,
    "quantidade_toneladas": 478.26
  },
  {
    "id_fazenda": 9,
    "cultura": "Algodão",
    "safra": "2023/24",
    "hectares_colhidos": 209.48,
    "quantidade_toneladas": 436.05
  },
  {
    "id_fazenda": 9,
    "cultura": "Milho",
    "safra": "2023/24",
    "hectares_colhidos": 127.41,
    "quantidade_toneladas": 40.08
  },
  {
    "id_fazenda": 10,
    "cultura": "Cana-de-Açúcar",
    "safra": "2023/24",
    "hectares_colhidos": 124.3,
    "quantidade_toneladas": 470.79
  },
  {
    "id_fazenda": 10,
    "cultura": "Algodão",
    "safra": "2022/23",
    "hectares_colhidos": 160.99,
    "quantidade_toneladas": 236.77
  },
  {
    "id_fazenda": 10,
    "cultura": "Soja",
    "safra": "2022/23",
    "hectares_colhidos": 160.42,
    "quantidade_toneladas": 209.89
  },
  {
    "id_fazenda": 11,
    "cultura": "Soja",
    "safra": "2023/24",
    "hectares_colhidos": 159.68,
    "quantidade_toneladas": 322.71
  },
  {
    "id_fazenda": 11,
    "cultura": "Soja",
    "safra": "2022/23",
    "hectares_colhidos": 94.44,
    "quantidade_toneladas": 211.06
  },
  {
    "id_fazenda": 11,
    "cultura": "Café",
    "safra": "2023/24",
    "hectares_colhidos": 143.79,
    "quantidade_toneladas": 222.78
  },
  {
    "id_fazenda": 12,
    "cultura": "Soja",
    "safra": "2022/23",
    "hectares_colhidos": 144.44,
    "quantidade_toneladas": 330.13
  },
  {
    "id_fazenda": 12,
    "cultura": "Soja",
    "safra": "2022/23",
    "hectares_colhidos": 62.13,
    "quantidade_toneladas": 301.01
  },
  {
    "id_fazenda": 12,
    "cultura": "Algodão",
    "safra": "2022/23",
    "hectares_colhidos": 123.99,
    "quantidade_toneladas": 175.26
  },
  {
    "id_fazenda": 13,
    "cultura": "Milho",
    "safra": "2023/24",
    "hectares_colhidos": 181.19,
    "quantidade_toneladas": 362.06
  },
  {
    "id_fazenda": 14,
    "cultura": "Cana-de-Açúcar",
    "safra": "2022/23",
    "hectares_colhidos": 82.52,
    "quantidade_toneladas": 352.02
  },
  {
    "id_fazenda": 15,
    "cultura": "Milho",
    "safra": "2022/23",
    "hectares_colhidos": 36.45,
    "quantidade_toneladas": 358.99
  },
  {
    "id_fazenda": 15,
    "cultura": "Café",
    "safra": "2022/23",
    "hectares_colhidos": 161.91,
    "quantidade_toneladas": 204.36
  },
  {
    "id_fazenda": 15,
    "cultura": "Algodão",
    "safra": "2022/23",
    "hectares_colhidos": 119.82,
    "quantidade_toneladas": 202.69
  },
  {
    "id_fazenda": 16,
    "cultura": "Café",
    "safra": "2022/23",
    "hectares_colhidos": 57.02,
    "quantidade_toneladas": 89.41
  },
  {
    "id_fazenda": 17,
    "cultura": "Soja",
    "safra": "2023/24",
    "hectares_colhidos": 99.34,
    "quantidade_toneladas": 370.48
  },
  {
    "id_fazenda": 17,
    "cultura": "Cana-de-Açúcar",
    "safra": "2023/24",
    "hectares_colhidos": 191.67,
    "quantidade_toneladas": 76.43
  },
  {
    "id_fazenda": 17,
    "cultura": "Milho",
    "safra": "2022/23",
    "hectares_colhidos": 11.02,
    "quantidade_toneladas": 387.39
  },
  {
    "id_fazenda": 18,
    "cultura": "Cana-de-Açúcar",
    "safra": "2023/24",
    "hectares_colhidos": 258.07,
    "quantidade_toneladas": 280.88
  },
  {
    "id_fazenda": 19,
    "cultura": "Algodão",
    "safra": "2023/24",
    "hectares_colhidos": 78.98,
    "quantidade_toneladas": 302.65
  },
  {
    "id_fazenda": 20,
    "cultura": "Cana-de-Açúcar",
    "safra": "2023/24",
    "hectares_colhidos": 138.14,
    "quantidade_toneladas": 308.58
  },
  {
    "id_fazenda": 20,
    "cultura": "Soja",
    "safra": "2022/23",
    "hectares_colhidos": 265.83,
    "quantidade_toneladas": 153.49
  }
];
    const custosData = [
  {
    "id_fazenda": 1,
    "data": "2024-08-22",
    "categoria": "Mão de Obra",
    "valor": 16582.31
  },
  {
    "id_fazenda": 1,
    "data": "2025-06-12",
    "categoria": "Irrigação",
    "valor": 1929.46
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-21",
    "categoria": "Irrigação",
    "valor": 2046.21
  },
  {
    "id_fazenda": 1,
    "data": "2024-11-24",
    "categoria": "Colheita",
    "valor": 1697.7
  },
  {
    "id_fazenda": 1,
    "data": "2024-12-17",
    "categoria": "Insumos",
    "valor": 13672.93
  },
  {
    "id_fazenda": 1,
    "data": "2024-11-13",
    "categoria": "Mão de Obra",
    "valor": 6670.39
  },
  {
    "id_fazenda": 1,
    "data": "2024-11-06",
    "categoria": "Insumos",
    "valor": 1931.6
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-07",
    "categoria": "Equipamentos",
    "valor": 19880.97
  },
  {
    "id_fazenda": 2,
    "data": "2025-01-09",
    "categoria": "Transporte",
    "valor": 6403.23
  },
  {
    "id_fazenda": 2,
    "data": "2024-12-06",
    "categoria": "Transporte",
    "valor": 14138.76
  },
  {
    "id_fazenda": 2,
    "data": "2025-04-10",
    "categoria": "Mão de Obra",
    "valor": 11873.37
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-20",
    "categoria": "Mão de Obra",
    "valor": 4370.97
  },
  {
    "id_fazenda": 3,
    "data": "2025-04-23",
    "categoria": "Transporte",
    "valor": 12000.36
  },
  {
    "id_fazenda": 3,
    "data": "2024-12-01",
    "categoria": "Insumos",
    "valor": 2769.4
  },
  {
    "id_fazenda": 3,
    "data": "2025-02-06",
    "categoria": "Colheita",
    "valor": 7133.62
  },
  {
    "id_fazenda": 3,
    "data": "2025-04-18",
    "categoria": "Equipamentos",
    "valor": 16585.03
  },
  {
    "id_fazenda": 3,
    "data": "2024-08-12",
    "categoria": "Equipamentos",
    "valor": 17022.88
  },
  {
    "id_fazenda": 3,
    "data": "2025-05-05",
    "categoria": "Insumos",
    "valor": 6563.82
  },
  {
    "id_fazenda": 4,
    "data": "2024-09-20",
    "categoria": "Insumos",
    "valor": 14197.77
  },
  {
    "id_fazenda": 4,
    "data": "2025-05-10",
    "categoria": "Colheita",
    "valor": 7254.96
  },
  {
    "id_fazenda": 4,
    "data": "2025-04-27",
    "categoria": "Equipamentos",
    "valor": 10968.28
  },
  {
    "id_fazenda": 4,
    "data": "2025-01-01",
    "categoria": "Transporte",
    "valor": 4971.97
  },
  {
    "id_fazenda": 5,
    "data": "2025-04-16",
    "categoria": "Insumos",
    "valor": 11855.97
  },
  {
    "id_fazenda": 5,
    "data": "2025-04-17",
    "categoria": "Transporte",
    "valor": 11049.99
  },
  {
    "id_fazenda": 5,
    "data": "2024-08-02",
    "categoria": "Insumos",
    "valor": 10189.6
  },
  {
    "id_fazenda": 6,
    "data": "2025-05-28",
    "categoria": "Mão de Obra",
    "valor": 18743.94
  },
  {
    "id_fazenda": 6,
    "data": "2025-04-26",
    "categoria": "Transporte",
    "valor": 6456.56
  },
  {
    "id_fazenda": 6,
    "data": "2025-03-23",
    "categoria": "Mão de Obra",
    "valor": 17108.16
  },
  {
    "id_fazenda": 6,
    "data": "2024-12-25",
    "categoria": "Colheita",
    "valor": 10982.43
  },
  {
    "id_fazenda": 6,
    "data": "2025-03-22",
    "categoria": "Mão de Obra",
    "valor": 7723.21
  },
  {
    "id_fazenda": 6,
    "data": "2024-11-08",
    "categoria": "Irrigação",
    "valor": 12671.51
  },
  {
    "id_fazenda": 6,
    "data": "2024-12-24",
    "categoria": "Equipamentos",
    "valor": 10874.41
  },
  {
    "id_fazenda": 6,
    "data": "2025-05-25",
    "categoria": "Transporte",
    "valor": 10457.08
  },
  {
    "id_fazenda": 7,
    "data": "2024-08-02",
    "categoria": "Mão de Obra",
    "valor": 5421.71
  },
  {
    "id_fazenda": 7,
    "data": "2024-12-14",
    "categoria": "Colheita",
    "valor": 19605.9
  },
  {
    "id_fazenda": 7,
    "data": "2025-04-16",
    "categoria": "Insumos",
    "valor": 3245.94
  },
  {
    "id_fazenda": 7,
    "data": "2025-02-13",
    "categoria": "Equipamentos",
    "valor": 12883.75
  },
  {
    "id_fazenda": 8,
    "data": "2025-06-08",
    "categoria": "Transporte",
    "valor": 17113.33
  },
  {
    "id_fazenda": 8,
    "data": "2024-08-20",
    "categoria": "Mão de Obra",
    "valor": 19980.75
  },
  {
    "id_fazenda": 8,
    "data": "2025-04-08",
    "categoria": "Equipamentos",
    "valor": 1864.35
  },
  {
    "id_fazenda": 9,
    "data": "2024-12-30",
    "categoria": "Mão de Obra",
    "valor": 16314.83
  },
  {
    "id_fazenda": 9,
    "data": "2024-10-07",
    "categoria": "Irrigação",
    "valor": 1214.65
  },
  {
    "id_fazenda": 9,
    "data": "2024-10-29",
    "categoria": "Irrigação",
    "valor": 14110.32
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-03",
    "categoria": "Colheita",
    "valor": 16013.71
  },
  {
    "id_fazenda": 9,
    "data": "2025-05-05",
    "categoria": "Colheita",
    "valor": 6705.4
  },
  {
    "id_fazenda": 10,
    "data": "2025-03-14",
    "categoria": "Colheita",
    "valor": 15573.62
  },
  {
    "id_fazenda": 10,
    "data": "2024-08-28",
    "categoria": "Insumos",
    "valor": 14030.88
  },
  {
    "id_fazenda": 10,
    "data": "2025-05-22",
    "categoria": "Colheita",
    "valor": 8524.94
  },
  {
    "id_fazenda": 10,
    "data": "2025-06-14",
    "categoria": "Mão de Obra",
    "valor": 12703.87
  },
  {
    "id_fazenda": 10,
    "data": "2025-04-16",
    "categoria": "Insumos",
    "valor": 16808.81
  },
  {
    "id_fazenda": 10,
    "data": "2025-04-06",
    "categoria": "Irrigação",
    "valor": 7279.78
  },
  {
    "id_fazenda": 10,
    "data": "2025-04-23",
    "categoria": "Colheita",
    "valor": 18523.32
  },
  {
    "id_fazenda": 11,
    "data": "2025-01-02",
    "categoria": "Equipamentos",
    "valor": 16147.83
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-03",
    "categoria": "Transporte",
    "valor": 3579.32
  },
  {
    "id_fazenda": 11,
    "data": "2024-11-24",
    "categoria": "Irrigação",
    "valor": 12916.81
  },
  {
    "id_fazenda": 11,
    "data": "2025-06-01",
    "categoria": "Mão de Obra",
    "valor": 18022.64
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-26",
    "categoria": "Equipamentos",
    "valor": 15895.79
  },
  {
    "id_fazenda": 11,
    "data": "2025-05-18",
    "categoria": "Equipamentos",
    "valor": 18628.01
  },
  {
    "id_fazenda": 12,
    "data": "2025-02-12",
    "categoria": "Mão de Obra",
    "valor": 6687.53
  },
  {
    "id_fazenda": 12,
    "data": "2024-11-26",
    "categoria": "Transporte",
    "valor": 13885.75
  },
  {
    "id_fazenda": 12,
    "data": "2024-09-17",
    "categoria": "Mão de Obra",
    "valor": 11181.82
  },
  {
    "id_fazenda": 13,
    "data": "2025-05-29",
    "categoria": "Mão de Obra",
    "valor": 14024.37
  },
  {
    "id_fazenda": 13,
    "data": "2025-02-19",
    "categoria": "Colheita",
    "valor": 2258.05
  },
  {
    "id_fazenda": 13,
    "data": "2025-02-09",
    "categoria": "Irrigação",
    "valor": 6328.74
  },
  {
    "id_fazenda": 13,
    "data": "2024-08-11",
    "categoria": "Insumos",
    "valor": 7443.9
  },
  {
    "id_fazenda": 14,
    "data": "2024-11-26",
    "categoria": "Transporte",
    "valor": 11151.19
  },
  {
    "id_fazenda": 14,
    "data": "2025-02-16",
    "categoria": "Irrigação",
    "valor": 11848.65
  },
  {
    "id_fazenda": 14,
    "data": "2024-11-04",
    "categoria": "Equipamentos",
    "valor": 4560.2
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-02",
    "categoria": "Insumos",
    "valor": 17427.28
  },
  {
    "id_fazenda": 14,
    "data": "2024-08-03",
    "categoria": "Colheita",
    "valor": 14400.06
  },
  {
    "id_fazenda": 14,
    "data": "2024-11-26",
    "categoria": "Colheita",
    "valor": 14486.96
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-20",
    "categoria": "Equipamentos",
    "valor": 2649.16
  },
  {
    "id_fazenda": 15,
    "data": "2024-10-29",
    "categoria": "Irrigação",
    "valor": 8060.09
  },
  {
    "id_fazenda": 15,
    "data": "2025-06-16",
    "categoria": "Colheita",
    "valor": 5106.66
  },
  {
    "id_fazenda": 15,
    "data": "2025-01-25",
    "categoria": "Colheita",
    "valor": 4325.24
  },
  {
    "id_fazenda": 15,
    "data": "2024-09-17",
    "categoria": "Colheita",
    "valor": 15913.94
  },
  {
    "id_fazenda": 16,
    "data": "2025-02-24",
    "categoria": "Insumos",
    "valor": 9431.71
  },
  {
    "id_fazenda": 16,
    "data": "2025-06-20",
    "categoria": "Insumos",
    "valor": 16181.48
  },
  {
    "id_fazenda": 16,
    "data": "2025-02-03",
    "categoria": "Mão de Obra",
    "valor": 3927.48
  },
  {
    "id_fazenda": 16,
    "data": "2025-05-27",
    "categoria": "Colheita",
    "valor": 18549.1
  },
  {
    "id_fazenda": 17,
    "data": "2024-12-11",
    "categoria": "Mão de Obra",
    "valor": 6896.82
  },
  {
    "id_fazenda": 17,
    "data": "2024-11-04",
    "categoria": "Colheita",
    "valor": 3722.61
  },
  {
    "id_fazenda": 17,
    "data": "2025-03-22",
    "categoria": "Insumos",
    "valor": 16620.63
  },
  {
    "id_fazenda": 17,
    "data": "2025-04-28",
    "categoria": "Mão de Obra",
    "valor": 13857.63
  },
  {
    "id_fazenda": 17,
    "data": "2024-11-29",
    "categoria": "Irrigação",
    "valor": 4898.56
  },
  {
    "id_fazenda": 17,
    "data": "2025-04-09",
    "categoria": "Insumos",
    "valor": 9728
  },
  {
    "id_fazenda": 17,
    "data": "2024-08-14",
    "categoria": "Transporte",
    "valor": 17431.39
  },
  {
    "id_fazenda": 17,
    "data": "2024-11-07",
    "categoria": "Insumos",
    "valor": 1078.09
  },
  {
    "id_fazenda": 18,
    "data": "2024-11-02",
    "categoria": "Transporte",
    "valor": 17114.36
  },
  {
    "id_fazenda": 18,
    "data": "2024-09-20",
    "categoria": "Insumos",
    "valor": 7332.51
  },
  {
    "id_fazenda": 18,
    "data": "2024-11-06",
    "categoria": "Insumos",
    "valor": 2958.95
  },
  {
    "id_fazenda": 19,
    "data": "2025-06-23",
    "categoria": "Transporte",
    "valor": 6937.14
  },
  {
    "id_fazenda": 19,
    "data": "2025-05-25",
    "categoria": "Mão de Obra",
    "valor": 15411.38
  },
  {
    "id_fazenda": 19,
    "data": "2024-10-18",
    "categoria": "Transporte",
    "valor": 17950.58
  },
  {
    "id_fazenda": 19,
    "data": "2024-09-24",
    "categoria": "Colheita",
    "valor": 4810.55
  },
  {
    "id_fazenda": 19,
    "data": "2024-08-21",
    "categoria": "Colheita",
    "valor": 6256.34
  },
  {
    "id_fazenda": 19,
    "data": "2025-04-29",
    "categoria": "Colheita",
    "valor": 15682.95
  },
  {
    "id_fazenda": 19,
    "data": "2024-08-16",
    "categoria": "Transporte",
    "valor": 3235.37
  },
  {
    "id_fazenda": 19,
    "data": "2025-03-17",
    "categoria": "Irrigação",
    "valor": 3992.42
  },
  {
    "id_fazenda": 20,
    "data": "2025-04-02",
    "categoria": "Insumos",
    "valor": 19207.66
  },
  {
    "id_fazenda": 20,
    "data": "2024-09-08",
    "categoria": "Mão de Obra",
    "valor": 10767.15
  },
  {
    "id_fazenda": 20,
    "data": "2024-09-30",
    "categoria": "Irrigação",
    "valor": 11308.05
  }
];
    const climaData = [
  {
    "id_fazenda": 1,
    "data": "2025-07-01 22:30:06.006477",
    "temperatura_media": 34.5,
    "precipitacao_mm": 26.5,
    "vento_kmh": 10.4
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-02 22:30:06.006477",
    "temperatura_media": 24.4,
    "precipitacao_mm": 16.4,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-03 22:30:06.006477",
    "temperatura_media": 26.2,
    "precipitacao_mm": 25.9,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-04 22:30:06.006477",
    "temperatura_media": 29.7,
    "precipitacao_mm": 4.9,
    "vento_kmh": 2.4
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-05 22:30:06.006477",
    "temperatura_media": 32.4,
    "precipitacao_mm": 8.8,
    "vento_kmh": 7.1
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-06 22:30:06.006477",
    "temperatura_media": 34.2,
    "precipitacao_mm": 2.2,
    "vento_kmh": 4.2
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-07 22:30:06.006477",
    "temperatura_media": 24.4,
    "precipitacao_mm": 22,
    "vento_kmh": 11.4
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-08 22:30:06.006477",
    "temperatura_media": 33.3,
    "precipitacao_mm": 2.8,
    "vento_kmh": 12.3
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-09 22:30:06.006477",
    "temperatura_media": 28.4,
    "precipitacao_mm": 14.5,
    "vento_kmh": 1.6
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-10 22:30:06.006477",
    "temperatura_media": 34,
    "precipitacao_mm": 4.9,
    "vento_kmh": 17.9
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-11 22:30:06.006477",
    "temperatura_media": 20.7,
    "precipitacao_mm": 3,
    "vento_kmh": 4.9
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-12 22:30:06.006477",
    "temperatura_media": 21.2,
    "precipitacao_mm": 20.9,
    "vento_kmh": 14.7
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-13 22:30:06.006477",
    "temperatura_media": 30.4,
    "precipitacao_mm": 8,
    "vento_kmh": 6.3
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-14 22:30:06.006477",
    "temperatura_media": 22,
    "precipitacao_mm": 1.5,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-15 22:30:06.006477",
    "temperatura_media": 32.3,
    "precipitacao_mm": 4.6,
    "vento_kmh": 7.9
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-16 22:30:06.006477",
    "temperatura_media": 25.3,
    "precipitacao_mm": 8.8,
    "vento_kmh": 13.6
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-17 22:30:06.006477",
    "temperatura_media": 28.2,
    "precipitacao_mm": 6,
    "vento_kmh": 1.5
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-18 22:30:06.006477",
    "temperatura_media": 20.9,
    "precipitacao_mm": 8.8,
    "vento_kmh": 2.6
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-19 22:30:06.006477",
    "temperatura_media": 32.3,
    "precipitacao_mm": 9.3,
    "vento_kmh": 8.6
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-20 22:30:06.006477",
    "temperatura_media": 26.3,
    "precipitacao_mm": 19.8,
    "vento_kmh": 2.7
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-21 22:30:06.006477",
    "temperatura_media": 27.3,
    "precipitacao_mm": 5.5,
    "vento_kmh": 17.8
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-22 22:30:06.006477",
    "temperatura_media": 24.3,
    "precipitacao_mm": 13.4,
    "vento_kmh": 6
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-23 22:30:06.006477",
    "temperatura_media": 25.9,
    "precipitacao_mm": 6.8,
    "vento_kmh": 6.1
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-24 22:30:06.006477",
    "temperatura_media": 19,
    "precipitacao_mm": 22.6,
    "vento_kmh": 13.7
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-25 22:30:06.006477",
    "temperatura_media": 19.5,
    "precipitacao_mm": 10.3,
    "vento_kmh": 11.3
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-26 22:30:06.006477",
    "temperatura_media": 34.5,
    "precipitacao_mm": 17.7,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-27 22:30:06.006477",
    "temperatura_media": 32.3,
    "precipitacao_mm": 24.6,
    "vento_kmh": 9
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-28 22:30:06.006477",
    "temperatura_media": 27.1,
    "precipitacao_mm": 26,
    "vento_kmh": 10
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-29 22:30:06.006477",
    "temperatura_media": 33,
    "precipitacao_mm": 14.3,
    "vento_kmh": 2.5
  },
  {
    "id_fazenda": 1,
    "data": "2025-07-30 22:30:06.006477",
    "temperatura_media": 33.3,
    "precipitacao_mm": 21.4,
    "vento_kmh": 10.5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-01 22:30:06.006809",
    "temperatura_media": 33.3,
    "precipitacao_mm": 24,
    "vento_kmh": 13.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-02 22:30:06.006809",
    "temperatura_media": 28.5,
    "precipitacao_mm": 3.6,
    "vento_kmh": 15.4
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-03 22:30:06.006809",
    "temperatura_media": 20.9,
    "precipitacao_mm": 29.5,
    "vento_kmh": 19.5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-04 22:30:06.006809",
    "temperatura_media": 31.7,
    "precipitacao_mm": 3.8,
    "vento_kmh": 9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-05 22:30:06.006809",
    "temperatura_media": 34.8,
    "precipitacao_mm": 13.1,
    "vento_kmh": 19.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-06 22:30:06.006809",
    "temperatura_media": 28.7,
    "precipitacao_mm": 25,
    "vento_kmh": 5.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-07 22:30:06.006809",
    "temperatura_media": 33.5,
    "precipitacao_mm": 27.4,
    "vento_kmh": 2.3
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-08 22:30:06.006809",
    "temperatura_media": 24.6,
    "precipitacao_mm": 11.9,
    "vento_kmh": 7.2
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-09 22:30:06.006809",
    "temperatura_media": 22.7,
    "precipitacao_mm": 13.7,
    "vento_kmh": 17.6
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-10 22:30:06.006809",
    "temperatura_media": 31.4,
    "precipitacao_mm": 18.7,
    "vento_kmh": 10.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-11 22:30:06.006809",
    "temperatura_media": 25.1,
    "precipitacao_mm": 12.4,
    "vento_kmh": 3.8
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-12 22:30:06.006809",
    "temperatura_media": 28,
    "precipitacao_mm": 22.8,
    "vento_kmh": 18.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-13 22:30:06.006809",
    "temperatura_media": 33.7,
    "precipitacao_mm": 16.9,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-14 22:30:06.006809",
    "temperatura_media": 22.9,
    "precipitacao_mm": 16.1,
    "vento_kmh": 7.5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-15 22:30:06.006809",
    "temperatura_media": 25,
    "precipitacao_mm": 11.5,
    "vento_kmh": 10.2
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-16 22:30:06.006809",
    "temperatura_media": 28.4,
    "precipitacao_mm": 1.1,
    "vento_kmh": 6.2
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-17 22:30:06.006809",
    "temperatura_media": 20.4,
    "precipitacao_mm": 18.3,
    "vento_kmh": 14.2
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-18 22:30:06.006809",
    "temperatura_media": 18.7,
    "precipitacao_mm": 26.7,
    "vento_kmh": 7.3
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-19 22:30:06.006809",
    "temperatura_media": 22,
    "precipitacao_mm": 22.4,
    "vento_kmh": 18.5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-20 22:30:06.006809",
    "temperatura_media": 33.2,
    "precipitacao_mm": 0.6,
    "vento_kmh": 16.5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-21 22:30:06.006809",
    "temperatura_media": 23.2,
    "precipitacao_mm": 8.4,
    "vento_kmh": 10.3
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-22 22:30:06.006809",
    "temperatura_media": 29.8,
    "precipitacao_mm": 2.9,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-23 22:30:06.006809",
    "temperatura_media": 20.3,
    "precipitacao_mm": 29.2,
    "vento_kmh": 9.4
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-24 22:30:06.006809",
    "temperatura_media": 32,
    "precipitacao_mm": 8.1,
    "vento_kmh": 8.9
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-25 22:30:06.006809",
    "temperatura_media": 29,
    "precipitacao_mm": 5.6,
    "vento_kmh": 5
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-26 22:30:06.006809",
    "temperatura_media": 32,
    "precipitacao_mm": 22.2,
    "vento_kmh": 15.4
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-27 22:30:06.006809",
    "temperatura_media": 32.7,
    "precipitacao_mm": 24.6,
    "vento_kmh": 10.8
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-28 22:30:06.006809",
    "temperatura_media": 20.7,
    "precipitacao_mm": 9.3,
    "vento_kmh": 10.6
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-29 22:30:06.006809",
    "temperatura_media": 20.3,
    "precipitacao_mm": 25.5,
    "vento_kmh": 17.7
  },
  {
    "id_fazenda": 2,
    "data": "2025-07-30 22:30:06.006809",
    "temperatura_media": 18.5,
    "precipitacao_mm": 5.8,
    "vento_kmh": 16.8
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-01 22:30:06.007054",
    "temperatura_media": 32.2,
    "precipitacao_mm": 7.5,
    "vento_kmh": 9.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-02 22:30:06.007054",
    "temperatura_media": 33.6,
    "precipitacao_mm": 21.1,
    "vento_kmh": 6.2
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-03 22:30:06.007054",
    "temperatura_media": 32,
    "precipitacao_mm": 15.2,
    "vento_kmh": 13.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-04 22:30:06.007054",
    "temperatura_media": 20.1,
    "precipitacao_mm": 0.9,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-05 22:30:06.007054",
    "temperatura_media": 28.1,
    "precipitacao_mm": 5.3,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-06 22:30:06.007054",
    "temperatura_media": 28,
    "precipitacao_mm": 10.5,
    "vento_kmh": 4.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-07 22:30:06.007054",
    "temperatura_media": 33.2,
    "precipitacao_mm": 22.5,
    "vento_kmh": 14.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-08 22:30:06.007054",
    "temperatura_media": 22.8,
    "precipitacao_mm": 11.6,
    "vento_kmh": 4.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-09 22:30:06.007054",
    "temperatura_media": 27.7,
    "precipitacao_mm": 28.9,
    "vento_kmh": 17.3
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-10 22:30:06.007054",
    "temperatura_media": 29,
    "precipitacao_mm": 20.3,
    "vento_kmh": 6.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-11 22:30:06.007054",
    "temperatura_media": 25,
    "precipitacao_mm": 0.6,
    "vento_kmh": 15.8
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-12 22:30:06.007054",
    "temperatura_media": 31,
    "precipitacao_mm": 0.3,
    "vento_kmh": 18.3
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-13 22:30:06.007054",
    "temperatura_media": 29,
    "precipitacao_mm": 18,
    "vento_kmh": 1.2
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-14 22:30:06.007054",
    "temperatura_media": 22.3,
    "precipitacao_mm": 24.2,
    "vento_kmh": 6.8
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-15 22:30:06.007054",
    "temperatura_media": 34.4,
    "precipitacao_mm": 19.3,
    "vento_kmh": 9.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-16 22:30:06.007054",
    "temperatura_media": 24.4,
    "precipitacao_mm": 10.5,
    "vento_kmh": 5.8
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-17 22:30:06.007054",
    "temperatura_media": 25.9,
    "precipitacao_mm": 20.3,
    "vento_kmh": 16.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-18 22:30:06.007054",
    "temperatura_media": 24.8,
    "precipitacao_mm": 3.1,
    "vento_kmh": 10.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-19 22:30:06.007054",
    "temperatura_media": 29.3,
    "precipitacao_mm": 25.3,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-20 22:30:06.007054",
    "temperatura_media": 29,
    "precipitacao_mm": 18.3,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-21 22:30:06.007054",
    "temperatura_media": 19.8,
    "precipitacao_mm": 1.9,
    "vento_kmh": 19.8
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-22 22:30:06.007054",
    "temperatura_media": 28.9,
    "precipitacao_mm": 25.8,
    "vento_kmh": 6
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-23 22:30:06.007054",
    "temperatura_media": 30.1,
    "precipitacao_mm": 26.8,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-24 22:30:06.007054",
    "temperatura_media": 20.5,
    "precipitacao_mm": 23,
    "vento_kmh": 18.1
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-25 22:30:06.007054",
    "temperatura_media": 31.7,
    "precipitacao_mm": 24.1,
    "vento_kmh": 12.4
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-26 22:30:06.007054",
    "temperatura_media": 29.2,
    "precipitacao_mm": 20.4,
    "vento_kmh": 14.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-27 22:30:06.007054",
    "temperatura_media": 29.1,
    "precipitacao_mm": 29.9,
    "vento_kmh": 5.9
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-28 22:30:06.007054",
    "temperatura_media": 25.1,
    "precipitacao_mm": 11.6,
    "vento_kmh": 1.7
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-29 22:30:06.007054",
    "temperatura_media": 30,
    "precipitacao_mm": 17.2,
    "vento_kmh": 4.6
  },
  {
    "id_fazenda": 3,
    "data": "2025-07-30 22:30:06.007054",
    "temperatura_media": 30.4,
    "precipitacao_mm": 6.7,
    "vento_kmh": 11.2
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-01 22:30:06.007301",
    "temperatura_media": 31.3,
    "precipitacao_mm": 27.2,
    "vento_kmh": 13.8
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-02 22:30:06.007301",
    "temperatura_media": 26.6,
    "precipitacao_mm": 25.4,
    "vento_kmh": 17
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-03 22:30:06.007301",
    "temperatura_media": 32.9,
    "precipitacao_mm": 5.4,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-04 22:30:06.007301",
    "temperatura_media": 20.2,
    "precipitacao_mm": 7.8,
    "vento_kmh": 16.4
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-05 22:30:06.007301",
    "temperatura_media": 31,
    "precipitacao_mm": 5.5,
    "vento_kmh": 13.9
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-06 22:30:06.007301",
    "temperatura_media": 23.7,
    "precipitacao_mm": 2.7,
    "vento_kmh": 7.8
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-07 22:30:06.007301",
    "temperatura_media": 30.7,
    "precipitacao_mm": 9.2,
    "vento_kmh": 16
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-08 22:30:06.007301",
    "temperatura_media": 23.6,
    "precipitacao_mm": 7.8,
    "vento_kmh": 6.6
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-09 22:30:06.007301",
    "temperatura_media": 32.5,
    "precipitacao_mm": 14.1,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-10 22:30:06.007301",
    "temperatura_media": 27.9,
    "precipitacao_mm": 28.3,
    "vento_kmh": 2.4
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-11 22:30:06.007301",
    "temperatura_media": 33.1,
    "precipitacao_mm": 15,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-12 22:30:06.007301",
    "temperatura_media": 24.5,
    "precipitacao_mm": 9,
    "vento_kmh": 2
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-13 22:30:06.007301",
    "temperatura_media": 32.5,
    "precipitacao_mm": 4.1,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-14 22:30:06.007301",
    "temperatura_media": 25,
    "precipitacao_mm": 17.1,
    "vento_kmh": 18.2
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-15 22:30:06.007301",
    "temperatura_media": 25.8,
    "precipitacao_mm": 9.5,
    "vento_kmh": 14.6
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-16 22:30:06.007301",
    "temperatura_media": 31.2,
    "precipitacao_mm": 14.6,
    "vento_kmh": 13
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-17 22:30:06.007301",
    "temperatura_media": 21,
    "precipitacao_mm": 19,
    "vento_kmh": 1.1
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-18 22:30:06.007301",
    "temperatura_media": 22.6,
    "precipitacao_mm": 22.8,
    "vento_kmh": 4.2
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-19 22:30:06.007301",
    "temperatura_media": 31,
    "precipitacao_mm": 14.7,
    "vento_kmh": 15.5
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-20 22:30:06.007301",
    "temperatura_media": 19.5,
    "precipitacao_mm": 18.4,
    "vento_kmh": 13
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-21 22:30:06.007301",
    "temperatura_media": 24.9,
    "precipitacao_mm": 29,
    "vento_kmh": 8.3
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-22 22:30:06.007301",
    "temperatura_media": 18.6,
    "precipitacao_mm": 6,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-23 22:30:06.007301",
    "temperatura_media": 18.2,
    "precipitacao_mm": 9.7,
    "vento_kmh": 16.8
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-24 22:30:06.007301",
    "temperatura_media": 21.2,
    "precipitacao_mm": 20.3,
    "vento_kmh": 12.9
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-25 22:30:06.007301",
    "temperatura_media": 22.2,
    "precipitacao_mm": 20.8,
    "vento_kmh": 7.5
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-26 22:30:06.007301",
    "temperatura_media": 20.2,
    "precipitacao_mm": 11.5,
    "vento_kmh": 12.2
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-27 22:30:06.007301",
    "temperatura_media": 20.8,
    "precipitacao_mm": 24.7,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-28 22:30:06.007301",
    "temperatura_media": 22.9,
    "precipitacao_mm": 21.8,
    "vento_kmh": 12.3
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-29 22:30:06.007301",
    "temperatura_media": 23.7,
    "precipitacao_mm": 26.6,
    "vento_kmh": 19.9
  },
  {
    "id_fazenda": 4,
    "data": "2025-07-30 22:30:06.007301",
    "temperatura_media": 23.8,
    "precipitacao_mm": 27,
    "vento_kmh": 7.8
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-01 22:30:06.007528",
    "temperatura_media": 21.2,
    "precipitacao_mm": 28.4,
    "vento_kmh": 18.4
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-02 22:30:06.007528",
    "temperatura_media": 24.9,
    "precipitacao_mm": 6.9,
    "vento_kmh": 14.8
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-03 22:30:06.007528",
    "temperatura_media": 20.2,
    "precipitacao_mm": 22,
    "vento_kmh": 12.2
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-04 22:30:06.007528",
    "temperatura_media": 20.9,
    "precipitacao_mm": 11,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-05 22:30:06.007528",
    "temperatura_media": 18.6,
    "precipitacao_mm": 26.3,
    "vento_kmh": 5.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-06 22:30:06.007528",
    "temperatura_media": 27.1,
    "precipitacao_mm": 1.5,
    "vento_kmh": 19.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-07 22:30:06.007528",
    "temperatura_media": 29.3,
    "precipitacao_mm": 19.6,
    "vento_kmh": 1.4
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-08 22:30:06.007528",
    "temperatura_media": 29.7,
    "precipitacao_mm": 12.5,
    "vento_kmh": 8.2
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-09 22:30:06.007528",
    "temperatura_media": 27.3,
    "precipitacao_mm": 14.2,
    "vento_kmh": 3.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-10 22:30:06.007528",
    "temperatura_media": 29.8,
    "precipitacao_mm": 18.9,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-11 22:30:06.007528",
    "temperatura_media": 29.2,
    "precipitacao_mm": 19.9,
    "vento_kmh": 6.1
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-12 22:30:06.007528",
    "temperatura_media": 28.3,
    "precipitacao_mm": 4.1,
    "vento_kmh": 16.8
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-13 22:30:06.007528",
    "temperatura_media": 19.8,
    "precipitacao_mm": 21.6,
    "vento_kmh": 3.2
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-14 22:30:06.007528",
    "temperatura_media": 19.9,
    "precipitacao_mm": 3.2,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-15 22:30:06.007528",
    "temperatura_media": 21.4,
    "precipitacao_mm": 7.9,
    "vento_kmh": 10.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-16 22:30:06.007528",
    "temperatura_media": 21.4,
    "precipitacao_mm": 21.1,
    "vento_kmh": 6.6
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-17 22:30:06.007528",
    "temperatura_media": 18.7,
    "precipitacao_mm": 14.9,
    "vento_kmh": 4.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-18 22:30:06.007528",
    "temperatura_media": 33.9,
    "precipitacao_mm": 9.9,
    "vento_kmh": 1.1
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-19 22:30:06.007528",
    "temperatura_media": 29.4,
    "precipitacao_mm": 27.2,
    "vento_kmh": 16.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-20 22:30:06.007528",
    "temperatura_media": 29.4,
    "precipitacao_mm": 4.5,
    "vento_kmh": 2.7
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-21 22:30:06.007528",
    "temperatura_media": 26.7,
    "precipitacao_mm": 21.7,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-22 22:30:06.007528",
    "temperatura_media": 22.4,
    "precipitacao_mm": 6.9,
    "vento_kmh": 19.8
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-23 22:30:06.007528",
    "temperatura_media": 23,
    "precipitacao_mm": 13.9,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-24 22:30:06.007528",
    "temperatura_media": 21,
    "precipitacao_mm": 1.2,
    "vento_kmh": 6.5
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-25 22:30:06.007528",
    "temperatura_media": 31.6,
    "precipitacao_mm": 9.4,
    "vento_kmh": 15
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-26 22:30:06.007528",
    "temperatura_media": 19.6,
    "precipitacao_mm": 22.7,
    "vento_kmh": 1.9
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-27 22:30:06.007528",
    "temperatura_media": 32.5,
    "precipitacao_mm": 19.9,
    "vento_kmh": 4.2
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-28 22:30:06.007528",
    "temperatura_media": 24.1,
    "precipitacao_mm": 13.1,
    "vento_kmh": 12.8
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-29 22:30:06.007528",
    "temperatura_media": 32.9,
    "precipitacao_mm": 2.8,
    "vento_kmh": 16.5
  },
  {
    "id_fazenda": 5,
    "data": "2025-07-30 22:30:06.007528",
    "temperatura_media": 21.1,
    "precipitacao_mm": 12,
    "vento_kmh": 19.3
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-01 22:30:06.007760",
    "temperatura_media": 22.6,
    "precipitacao_mm": 11.6,
    "vento_kmh": 17.2
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-02 22:30:06.007760",
    "temperatura_media": 31.6,
    "precipitacao_mm": 19.5,
    "vento_kmh": 16.1
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-03 22:30:06.007760",
    "temperatura_media": 19.9,
    "precipitacao_mm": 20.9,
    "vento_kmh": 2.1
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-04 22:30:06.007760",
    "temperatura_media": 34,
    "precipitacao_mm": 4.8,
    "vento_kmh": 8.9
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-05 22:30:06.007760",
    "temperatura_media": 28,
    "precipitacao_mm": 24.1,
    "vento_kmh": 13.9
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-06 22:30:06.007760",
    "temperatura_media": 21.1,
    "precipitacao_mm": 11.4,
    "vento_kmh": 7.8
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-07 22:30:06.007760",
    "temperatura_media": 18.5,
    "precipitacao_mm": 20.5,
    "vento_kmh": 16.9
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-08 22:30:06.007760",
    "temperatura_media": 34.5,
    "precipitacao_mm": 3.9,
    "vento_kmh": 18.5
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-09 22:30:06.007760",
    "temperatura_media": 19.9,
    "precipitacao_mm": 12.3,
    "vento_kmh": 1.9
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-10 22:30:06.007760",
    "temperatura_media": 22.4,
    "precipitacao_mm": 9.4,
    "vento_kmh": 14.4
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-11 22:30:06.007760",
    "temperatura_media": 29.5,
    "precipitacao_mm": 23,
    "vento_kmh": 12
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-12 22:30:06.007760",
    "temperatura_media": 27.6,
    "precipitacao_mm": 29.3,
    "vento_kmh": 13.7
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-13 22:30:06.007760",
    "temperatura_media": 23.8,
    "precipitacao_mm": 15.7,
    "vento_kmh": 14.3
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-14 22:30:06.007760",
    "temperatura_media": 19.6,
    "precipitacao_mm": 19.9,
    "vento_kmh": 5.7
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-15 22:30:06.007760",
    "temperatura_media": 23.9,
    "precipitacao_mm": 20.3,
    "vento_kmh": 8.3
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-16 22:30:06.007760",
    "temperatura_media": 32.3,
    "precipitacao_mm": 16.8,
    "vento_kmh": 19.8
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-17 22:30:06.007760",
    "temperatura_media": 18.9,
    "precipitacao_mm": 19.3,
    "vento_kmh": 4
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-18 22:30:06.007760",
    "temperatura_media": 32.4,
    "precipitacao_mm": 25.6,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-19 22:30:06.007760",
    "temperatura_media": 19.3,
    "precipitacao_mm": 14.7,
    "vento_kmh": 5.6
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-20 22:30:06.007760",
    "temperatura_media": 34.5,
    "precipitacao_mm": 1.5,
    "vento_kmh": 5.2
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-21 22:30:06.007760",
    "temperatura_media": 28.9,
    "precipitacao_mm": 12.1,
    "vento_kmh": 5.5
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-22 22:30:06.007760",
    "temperatura_media": 25.8,
    "precipitacao_mm": 24,
    "vento_kmh": 9.5
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-23 22:30:06.007760",
    "temperatura_media": 32.6,
    "precipitacao_mm": 13.4,
    "vento_kmh": 3.3
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-24 22:30:06.007760",
    "temperatura_media": 26.5,
    "precipitacao_mm": 19.6,
    "vento_kmh": 3
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-25 22:30:06.007760",
    "temperatura_media": 25,
    "precipitacao_mm": 16.7,
    "vento_kmh": 1
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-26 22:30:06.007760",
    "temperatura_media": 19.5,
    "precipitacao_mm": 18.1,
    "vento_kmh": 12.8
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-27 22:30:06.007760",
    "temperatura_media": 23.2,
    "precipitacao_mm": 15.3,
    "vento_kmh": 4.9
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-28 22:30:06.007760",
    "temperatura_media": 29.4,
    "precipitacao_mm": 28.5,
    "vento_kmh": 7.9
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-29 22:30:06.007760",
    "temperatura_media": 18.9,
    "precipitacao_mm": 6.7,
    "vento_kmh": 9.6
  },
  {
    "id_fazenda": 6,
    "data": "2025-07-30 22:30:06.007760",
    "temperatura_media": 27.5,
    "precipitacao_mm": 18.6,
    "vento_kmh": 10
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-01 22:30:06.007980",
    "temperatura_media": 29.2,
    "precipitacao_mm": 21.5,
    "vento_kmh": 3.2
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-02 22:30:06.007980",
    "temperatura_media": 30.9,
    "precipitacao_mm": 6.7,
    "vento_kmh": 7.5
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-03 22:30:06.007980",
    "temperatura_media": 32.1,
    "precipitacao_mm": 28.9,
    "vento_kmh": 6.5
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-04 22:30:06.007980",
    "temperatura_media": 26.9,
    "precipitacao_mm": 21.1,
    "vento_kmh": 1.9
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-05 22:30:06.007980",
    "temperatura_media": 20.8,
    "precipitacao_mm": 4.2,
    "vento_kmh": 14.6
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-06 22:30:06.007980",
    "temperatura_media": 30.3,
    "precipitacao_mm": 3.2,
    "vento_kmh": 12.6
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-07 22:30:06.007980",
    "temperatura_media": 21.2,
    "precipitacao_mm": 27.9,
    "vento_kmh": 8.5
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-08 22:30:06.007980",
    "temperatura_media": 25.8,
    "precipitacao_mm": 23.4,
    "vento_kmh": 14.6
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-09 22:30:06.007980",
    "temperatura_media": 19.8,
    "precipitacao_mm": 12.4,
    "vento_kmh": 18.6
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-10 22:30:06.007980",
    "temperatura_media": 32.2,
    "precipitacao_mm": 17.7,
    "vento_kmh": 15.7
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-11 22:30:06.007980",
    "temperatura_media": 25.7,
    "precipitacao_mm": 19.8,
    "vento_kmh": 19.2
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-12 22:30:06.007980",
    "temperatura_media": 20.3,
    "precipitacao_mm": 15,
    "vento_kmh": 11.1
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-13 22:30:06.007980",
    "temperatura_media": 18.8,
    "precipitacao_mm": 28.1,
    "vento_kmh": 16.9
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-14 22:30:06.007980",
    "temperatura_media": 26.2,
    "precipitacao_mm": 15.2,
    "vento_kmh": 18.5
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-15 22:30:06.007980",
    "temperatura_media": 21,
    "precipitacao_mm": 17.4,
    "vento_kmh": 14.9
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-16 22:30:06.007980",
    "temperatura_media": 20.2,
    "precipitacao_mm": 11.6,
    "vento_kmh": 12.4
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-17 22:30:06.007980",
    "temperatura_media": 33,
    "precipitacao_mm": 15.1,
    "vento_kmh": 8.3
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-18 22:30:06.007980",
    "temperatura_media": 34.7,
    "precipitacao_mm": 27.5,
    "vento_kmh": 15.5
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-19 22:30:06.007980",
    "temperatura_media": 22.7,
    "precipitacao_mm": 28.9,
    "vento_kmh": 19.4
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-20 22:30:06.007980",
    "temperatura_media": 25.7,
    "precipitacao_mm": 4,
    "vento_kmh": 8.8
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-21 22:30:06.007980",
    "temperatura_media": 29.9,
    "precipitacao_mm": 22.5,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-22 22:30:06.007980",
    "temperatura_media": 29.9,
    "precipitacao_mm": 25.8,
    "vento_kmh": 14.5
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-23 22:30:06.007980",
    "temperatura_media": 33.9,
    "precipitacao_mm": 19,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-24 22:30:06.007980",
    "temperatura_media": 28.6,
    "precipitacao_mm": 8.7,
    "vento_kmh": 7.6
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-25 22:30:06.007980",
    "temperatura_media": 29.4,
    "precipitacao_mm": 29.4,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-26 22:30:06.007980",
    "temperatura_media": 34.3,
    "precipitacao_mm": 15.1,
    "vento_kmh": 14.2
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-27 22:30:06.007980",
    "temperatura_media": 23.5,
    "precipitacao_mm": 3.5,
    "vento_kmh": 7.7
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-28 22:30:06.007980",
    "temperatura_media": 26.2,
    "precipitacao_mm": 17.1,
    "vento_kmh": 13.7
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-29 22:30:06.007980",
    "temperatura_media": 25.1,
    "precipitacao_mm": 22.4,
    "vento_kmh": 17
  },
  {
    "id_fazenda": 7,
    "data": "2025-07-30 22:30:06.007980",
    "temperatura_media": 22.9,
    "precipitacao_mm": 25.4,
    "vento_kmh": 16.4
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-01 22:30:06.008229",
    "temperatura_media": 26.9,
    "precipitacao_mm": 0.8,
    "vento_kmh": 3.8
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-02 22:30:06.008229",
    "temperatura_media": 29.4,
    "precipitacao_mm": 6,
    "vento_kmh": 15.3
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-03 22:30:06.008229",
    "temperatura_media": 20.7,
    "precipitacao_mm": 8.6,
    "vento_kmh": 5.8
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-04 22:30:06.008229",
    "temperatura_media": 32.3,
    "precipitacao_mm": 20.7,
    "vento_kmh": 6.6
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-05 22:30:06.008229",
    "temperatura_media": 30.8,
    "precipitacao_mm": 1,
    "vento_kmh": 16.5
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-06 22:30:06.008229",
    "temperatura_media": 19.7,
    "precipitacao_mm": 26,
    "vento_kmh": 15.1
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-07 22:30:06.008229",
    "temperatura_media": 32.7,
    "precipitacao_mm": 22.3,
    "vento_kmh": 11.7
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-08 22:30:06.008229",
    "temperatura_media": 22,
    "precipitacao_mm": 23.5,
    "vento_kmh": 16.2
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-09 22:30:06.008229",
    "temperatura_media": 22.9,
    "precipitacao_mm": 19.9,
    "vento_kmh": 18.6
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-10 22:30:06.008229",
    "temperatura_media": 24.6,
    "precipitacao_mm": 28.7,
    "vento_kmh": 19.5
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-11 22:30:06.008229",
    "temperatura_media": 23.3,
    "precipitacao_mm": 16.6,
    "vento_kmh": 1.2
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-12 22:30:06.008229",
    "temperatura_media": 22.3,
    "precipitacao_mm": 18.6,
    "vento_kmh": 15.8
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-13 22:30:06.008229",
    "temperatura_media": 32.8,
    "precipitacao_mm": 24.9,
    "vento_kmh": 18.3
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-14 22:30:06.008229",
    "temperatura_media": 30,
    "precipitacao_mm": 19.4,
    "vento_kmh": 15.3
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-15 22:30:06.008229",
    "temperatura_media": 27.3,
    "precipitacao_mm": 18.1,
    "vento_kmh": 15.7
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-16 22:30:06.008229",
    "temperatura_media": 34.4,
    "precipitacao_mm": 8.8,
    "vento_kmh": 4.4
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-17 22:30:06.008229",
    "temperatura_media": 29.6,
    "precipitacao_mm": 5.6,
    "vento_kmh": 4.3
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-18 22:30:06.008229",
    "temperatura_media": 26.7,
    "precipitacao_mm": 11.3,
    "vento_kmh": 9.1
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-19 22:30:06.008229",
    "temperatura_media": 27.5,
    "precipitacao_mm": 3.9,
    "vento_kmh": 12.1
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-20 22:30:06.008229",
    "temperatura_media": 22.3,
    "precipitacao_mm": 9.9,
    "vento_kmh": 14.5
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-21 22:30:06.008229",
    "temperatura_media": 20.6,
    "precipitacao_mm": 4.6,
    "vento_kmh": 7.1
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-22 22:30:06.008229",
    "temperatura_media": 18.9,
    "precipitacao_mm": 28,
    "vento_kmh": 12.7
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-23 22:30:06.008229",
    "temperatura_media": 29.3,
    "precipitacao_mm": 14.7,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-24 22:30:06.008229",
    "temperatura_media": 24.1,
    "precipitacao_mm": 23.5,
    "vento_kmh": 7
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-25 22:30:06.008229",
    "temperatura_media": 21.7,
    "precipitacao_mm": 5.5,
    "vento_kmh": 2.3
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-26 22:30:06.008229",
    "temperatura_media": 26.6,
    "precipitacao_mm": 12.5,
    "vento_kmh": 11.2
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-27 22:30:06.008229",
    "temperatura_media": 19.6,
    "precipitacao_mm": 6.6,
    "vento_kmh": 5.1
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-28 22:30:06.008229",
    "temperatura_media": 23.6,
    "precipitacao_mm": 10.8,
    "vento_kmh": 5.2
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-29 22:30:06.008229",
    "temperatura_media": 30.8,
    "precipitacao_mm": 15.9,
    "vento_kmh": 19.9
  },
  {
    "id_fazenda": 8,
    "data": "2025-07-30 22:30:06.008229",
    "temperatura_media": 32,
    "precipitacao_mm": 29.4,
    "vento_kmh": 1.2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-01 22:30:06.008531",
    "temperatura_media": 29.4,
    "precipitacao_mm": 13.4,
    "vento_kmh": 18.2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-02 22:30:06.008531",
    "temperatura_media": 28.4,
    "precipitacao_mm": 18.6,
    "vento_kmh": 19.2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-03 22:30:06.008531",
    "temperatura_media": 29.6,
    "precipitacao_mm": 9.6,
    "vento_kmh": 18.4
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-04 22:30:06.008531",
    "temperatura_media": 34.1,
    "precipitacao_mm": 11.6,
    "vento_kmh": 11.3
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-05 22:30:06.008531",
    "temperatura_media": 22.8,
    "precipitacao_mm": 27.3,
    "vento_kmh": 16.6
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-06 22:30:06.008531",
    "temperatura_media": 24.4,
    "precipitacao_mm": 24.1,
    "vento_kmh": 9.5
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-07 22:30:06.008531",
    "temperatura_media": 18.7,
    "precipitacao_mm": 26.9,
    "vento_kmh": 4.7
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-08 22:30:06.008531",
    "temperatura_media": 26.7,
    "precipitacao_mm": 28.4,
    "vento_kmh": 4.2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-09 22:30:06.008531",
    "temperatura_media": 34.3,
    "precipitacao_mm": 16.1,
    "vento_kmh": 1.1
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-10 22:30:06.008531",
    "temperatura_media": 19.1,
    "precipitacao_mm": 20.1,
    "vento_kmh": 15.7
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-11 22:30:06.008531",
    "temperatura_media": 32.7,
    "precipitacao_mm": 12.7,
    "vento_kmh": 3
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-12 22:30:06.008531",
    "temperatura_media": 27.1,
    "precipitacao_mm": 21.1,
    "vento_kmh": 19.5
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-13 22:30:06.008531",
    "temperatura_media": 31.2,
    "precipitacao_mm": 19.4,
    "vento_kmh": 18.9
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-14 22:30:06.008531",
    "temperatura_media": 30.7,
    "precipitacao_mm": 4.6,
    "vento_kmh": 9.7
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-15 22:30:06.008531",
    "temperatura_media": 23.6,
    "precipitacao_mm": 2.6,
    "vento_kmh": 2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-16 22:30:06.008531",
    "temperatura_media": 31.5,
    "precipitacao_mm": 16.7,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-17 22:30:06.008531",
    "temperatura_media": 21.9,
    "precipitacao_mm": 7.8,
    "vento_kmh": 8.4
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-18 22:30:06.008531",
    "temperatura_media": 28.7,
    "precipitacao_mm": 13,
    "vento_kmh": 1.3
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-19 22:30:06.008531",
    "temperatura_media": 29.4,
    "precipitacao_mm": 16,
    "vento_kmh": 13.2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-20 22:30:06.008531",
    "temperatura_media": 28.5,
    "precipitacao_mm": 22.7,
    "vento_kmh": 12.1
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-21 22:30:06.008531",
    "temperatura_media": 29.9,
    "precipitacao_mm": 2.2,
    "vento_kmh": 18.6
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-22 22:30:06.008531",
    "temperatura_media": 19.8,
    "precipitacao_mm": 23.6,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-23 22:30:06.008531",
    "temperatura_media": 19.5,
    "precipitacao_mm": 23,
    "vento_kmh": 9.3
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-24 22:30:06.008531",
    "temperatura_media": 24.7,
    "precipitacao_mm": 19.8,
    "vento_kmh": 10
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-25 22:30:06.008531",
    "temperatura_media": 27.1,
    "precipitacao_mm": 4.1,
    "vento_kmh": 8.4
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-26 22:30:06.008531",
    "temperatura_media": 31.6,
    "precipitacao_mm": 16.4,
    "vento_kmh": 19.2
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-27 22:30:06.008531",
    "temperatura_media": 20.4,
    "precipitacao_mm": 20.3,
    "vento_kmh": 18.4
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-28 22:30:06.008531",
    "temperatura_media": 31.5,
    "precipitacao_mm": 21.9,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-29 22:30:06.008531",
    "temperatura_media": 34.1,
    "precipitacao_mm": 16.6,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 9,
    "data": "2025-07-30 22:30:06.008531",
    "temperatura_media": 20.1,
    "precipitacao_mm": 0.2,
    "vento_kmh": 12.3
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-01 22:30:06.008756",
    "temperatura_media": 27.1,
    "precipitacao_mm": 28.4,
    "vento_kmh": 6.8
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-02 22:30:06.008756",
    "temperatura_media": 30.7,
    "precipitacao_mm": 27.1,
    "vento_kmh": 7.5
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-03 22:30:06.008756",
    "temperatura_media": 25,
    "precipitacao_mm": 19.4,
    "vento_kmh": 10.7
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-04 22:30:06.008756",
    "temperatura_media": 20.7,
    "precipitacao_mm": 6.6,
    "vento_kmh": 16.9
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-05 22:30:06.008756",
    "temperatura_media": 21.3,
    "precipitacao_mm": 5.4,
    "vento_kmh": 16.2
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-06 22:30:06.008756",
    "temperatura_media": 32.5,
    "precipitacao_mm": 25.5,
    "vento_kmh": 18.7
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-07 22:30:06.008756",
    "temperatura_media": 34.9,
    "precipitacao_mm": 13.8,
    "vento_kmh": 11.4
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-08 22:30:06.008756",
    "temperatura_media": 22.9,
    "precipitacao_mm": 2,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-09 22:30:06.008756",
    "temperatura_media": 30.3,
    "precipitacao_mm": 14.6,
    "vento_kmh": 7.3
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-10 22:30:06.008756",
    "temperatura_media": 20.2,
    "precipitacao_mm": 19.7,
    "vento_kmh": 2.9
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-11 22:30:06.008756",
    "temperatura_media": 28.5,
    "precipitacao_mm": 27,
    "vento_kmh": 7
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-12 22:30:06.008756",
    "temperatura_media": 25.7,
    "precipitacao_mm": 18.5,
    "vento_kmh": 6.8
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-13 22:30:06.008756",
    "temperatura_media": 27.9,
    "precipitacao_mm": 17,
    "vento_kmh": 7.9
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-14 22:30:06.008756",
    "temperatura_media": 23.4,
    "precipitacao_mm": 12.8,
    "vento_kmh": 1.1
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-15 22:30:06.008756",
    "temperatura_media": 22.2,
    "precipitacao_mm": 6.6,
    "vento_kmh": 15.1
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-16 22:30:06.008756",
    "temperatura_media": 25.4,
    "precipitacao_mm": 25.2,
    "vento_kmh": 3.6
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-17 22:30:06.008756",
    "temperatura_media": 30.5,
    "precipitacao_mm": 26.3,
    "vento_kmh": 9.8
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-18 22:30:06.008756",
    "temperatura_media": 24.1,
    "precipitacao_mm": 9.2,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-19 22:30:06.008756",
    "temperatura_media": 21,
    "precipitacao_mm": 18.2,
    "vento_kmh": 17
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-20 22:30:06.008756",
    "temperatura_media": 32.6,
    "precipitacao_mm": 4.2,
    "vento_kmh": 11.2
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-21 22:30:06.008756",
    "temperatura_media": 22.5,
    "precipitacao_mm": 26.6,
    "vento_kmh": 2.5
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-22 22:30:06.008756",
    "temperatura_media": 19.3,
    "precipitacao_mm": 0.6,
    "vento_kmh": 10.6
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-23 22:30:06.008756",
    "temperatura_media": 18.5,
    "precipitacao_mm": 17.5,
    "vento_kmh": 8.7
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-24 22:30:06.008756",
    "temperatura_media": 28,
    "precipitacao_mm": 27.2,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-25 22:30:06.008756",
    "temperatura_media": 27.2,
    "precipitacao_mm": 30,
    "vento_kmh": 10
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-26 22:30:06.008756",
    "temperatura_media": 31.2,
    "precipitacao_mm": 11,
    "vento_kmh": 5.2
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-27 22:30:06.008756",
    "temperatura_media": 31.1,
    "precipitacao_mm": 22,
    "vento_kmh": 6.5
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-28 22:30:06.008756",
    "temperatura_media": 25.9,
    "precipitacao_mm": 15.3,
    "vento_kmh": 8.5
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-29 22:30:06.008756",
    "temperatura_media": 26.5,
    "precipitacao_mm": 19.9,
    "vento_kmh": 17.1
  },
  {
    "id_fazenda": 10,
    "data": "2025-07-30 22:30:06.008756",
    "temperatura_media": 31.7,
    "precipitacao_mm": 18.4,
    "vento_kmh": 4.2
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-01 22:30:06.008983",
    "temperatura_media": 26.7,
    "precipitacao_mm": 13.4,
    "vento_kmh": 4.4
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-02 22:30:06.008983",
    "temperatura_media": 34.1,
    "precipitacao_mm": 19.8,
    "vento_kmh": 19.4
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-03 22:30:06.008983",
    "temperatura_media": 30.5,
    "precipitacao_mm": 14.5,
    "vento_kmh": 7.8
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-04 22:30:06.008983",
    "temperatura_media": 21.7,
    "precipitacao_mm": 14.6,
    "vento_kmh": 2.2
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-05 22:30:06.008983",
    "temperatura_media": 24.3,
    "precipitacao_mm": 1.3,
    "vento_kmh": 4.9
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-06 22:30:06.008983",
    "temperatura_media": 33.4,
    "precipitacao_mm": 10.8,
    "vento_kmh": 9.9
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-07 22:30:06.008983",
    "temperatura_media": 25.7,
    "precipitacao_mm": 1.4,
    "vento_kmh": 19.6
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-08 22:30:06.008983",
    "temperatura_media": 23.5,
    "precipitacao_mm": 21.1,
    "vento_kmh": 10.9
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-09 22:30:06.008983",
    "temperatura_media": 32.1,
    "precipitacao_mm": 25,
    "vento_kmh": 6
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-10 22:30:06.008983",
    "temperatura_media": 27.3,
    "precipitacao_mm": 5.2,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-11 22:30:06.008983",
    "temperatura_media": 24.2,
    "precipitacao_mm": 19.6,
    "vento_kmh": 16.9
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-12 22:30:06.008983",
    "temperatura_media": 26.8,
    "precipitacao_mm": 11.3,
    "vento_kmh": 18.2
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-13 22:30:06.008983",
    "temperatura_media": 26.8,
    "precipitacao_mm": 10.6,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-14 22:30:06.008983",
    "temperatura_media": 26.3,
    "precipitacao_mm": 14.5,
    "vento_kmh": 12.5
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-15 22:30:06.008983",
    "temperatura_media": 26.5,
    "precipitacao_mm": 4.2,
    "vento_kmh": 4.1
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-16 22:30:06.008983",
    "temperatura_media": 19.3,
    "precipitacao_mm": 19.3,
    "vento_kmh": 5
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-17 22:30:06.008983",
    "temperatura_media": 21.2,
    "precipitacao_mm": 10.9,
    "vento_kmh": 14.6
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-18 22:30:06.008983",
    "temperatura_media": 20,
    "precipitacao_mm": 6.9,
    "vento_kmh": 16.4
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-19 22:30:06.008983",
    "temperatura_media": 30.2,
    "precipitacao_mm": 14.4,
    "vento_kmh": 10.1
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-20 22:30:06.008983",
    "temperatura_media": 21.6,
    "precipitacao_mm": 4.8,
    "vento_kmh": 16.8
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-21 22:30:06.008983",
    "temperatura_media": 18.4,
    "precipitacao_mm": 1.3,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-22 22:30:06.008983",
    "temperatura_media": 20.7,
    "precipitacao_mm": 18.9,
    "vento_kmh": 1.7
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-23 22:30:06.008983",
    "temperatura_media": 27.7,
    "precipitacao_mm": 1.7,
    "vento_kmh": 5.9
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-24 22:30:06.008983",
    "temperatura_media": 21.1,
    "precipitacao_mm": 28.7,
    "vento_kmh": 12.4
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-25 22:30:06.008983",
    "temperatura_media": 27.6,
    "precipitacao_mm": 0.6,
    "vento_kmh": 14.7
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-26 22:30:06.008983",
    "temperatura_media": 29.2,
    "precipitacao_mm": 8.5,
    "vento_kmh": 2.6
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-27 22:30:06.008983",
    "temperatura_media": 25.6,
    "precipitacao_mm": 29.8,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-28 22:30:06.008983",
    "temperatura_media": 20.9,
    "precipitacao_mm": 24.9,
    "vento_kmh": 12.4
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-29 22:30:06.008983",
    "temperatura_media": 31.5,
    "precipitacao_mm": 24.6,
    "vento_kmh": 4.5
  },
  {
    "id_fazenda": 11,
    "data": "2025-07-30 22:30:06.008983",
    "temperatura_media": 29.2,
    "precipitacao_mm": 7.9,
    "vento_kmh": 14.8
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-01 22:30:06.009197",
    "temperatura_media": 23.8,
    "precipitacao_mm": 13.6,
    "vento_kmh": 12.2
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-02 22:30:06.009197",
    "temperatura_media": 21.9,
    "precipitacao_mm": 11.6,
    "vento_kmh": 3.1
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-03 22:30:06.009197",
    "temperatura_media": 21.4,
    "precipitacao_mm": 25.8,
    "vento_kmh": 10.6
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-04 22:30:06.009197",
    "temperatura_media": 25.1,
    "precipitacao_mm": 4.5,
    "vento_kmh": 2.8
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-05 22:30:06.009197",
    "temperatura_media": 26.1,
    "precipitacao_mm": 18.4,
    "vento_kmh": 1.7
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-06 22:30:06.009197",
    "temperatura_media": 31.3,
    "precipitacao_mm": 15.1,
    "vento_kmh": 3.2
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-07 22:30:06.009197",
    "temperatura_media": 26.2,
    "precipitacao_mm": 3.9,
    "vento_kmh": 12.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-08 22:30:06.009197",
    "temperatura_media": 32.1,
    "precipitacao_mm": 26.9,
    "vento_kmh": 15.7
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-09 22:30:06.009197",
    "temperatura_media": 29,
    "precipitacao_mm": 15.7,
    "vento_kmh": 8
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-10 22:30:06.009197",
    "temperatura_media": 18.7,
    "precipitacao_mm": 15.9,
    "vento_kmh": 5.4
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-11 22:30:06.009197",
    "temperatura_media": 31.6,
    "precipitacao_mm": 23.7,
    "vento_kmh": 8.2
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-12 22:30:06.009197",
    "temperatura_media": 28,
    "precipitacao_mm": 22.2,
    "vento_kmh": 15.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-13 22:30:06.009197",
    "temperatura_media": 29.8,
    "precipitacao_mm": 2.9,
    "vento_kmh": 3.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-14 22:30:06.009197",
    "temperatura_media": 26.1,
    "precipitacao_mm": 7,
    "vento_kmh": 17.3
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-15 22:30:06.009197",
    "temperatura_media": 22.8,
    "precipitacao_mm": 26.3,
    "vento_kmh": 8.8
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-16 22:30:06.009197",
    "temperatura_media": 21.2,
    "precipitacao_mm": 21.3,
    "vento_kmh": 16
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-17 22:30:06.009197",
    "temperatura_media": 27.8,
    "precipitacao_mm": 3.5,
    "vento_kmh": 1.1
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-18 22:30:06.009197",
    "temperatura_media": 29.1,
    "precipitacao_mm": 20.6,
    "vento_kmh": 7
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-19 22:30:06.009197",
    "temperatura_media": 24.2,
    "precipitacao_mm": 4.6,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-20 22:30:06.009197",
    "temperatura_media": 22.3,
    "precipitacao_mm": 25.6,
    "vento_kmh": 9
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-21 22:30:06.009197",
    "temperatura_media": 24.2,
    "precipitacao_mm": 8.3,
    "vento_kmh": 13.9
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-22 22:30:06.009197",
    "temperatura_media": 30.8,
    "precipitacao_mm": 12.4,
    "vento_kmh": 15.9
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-23 22:30:06.009197",
    "temperatura_media": 26.2,
    "precipitacao_mm": 11.1,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-24 22:30:06.009197",
    "temperatura_media": 22.3,
    "precipitacao_mm": 9.2,
    "vento_kmh": 7.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-25 22:30:06.009197",
    "temperatura_media": 30,
    "precipitacao_mm": 22.1,
    "vento_kmh": 17.2
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-26 22:30:06.009197",
    "temperatura_media": 29.2,
    "precipitacao_mm": 22.4,
    "vento_kmh": 9.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-27 22:30:06.009197",
    "temperatura_media": 29.9,
    "precipitacao_mm": 4.9,
    "vento_kmh": 5.1
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-28 22:30:06.009197",
    "temperatura_media": 24.8,
    "precipitacao_mm": 10.2,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-29 22:30:06.009197",
    "temperatura_media": 29.8,
    "precipitacao_mm": 21.2,
    "vento_kmh": 4.1
  },
  {
    "id_fazenda": 12,
    "data": "2025-07-30 22:30:06.009197",
    "temperatura_media": 34.4,
    "precipitacao_mm": 0.2,
    "vento_kmh": 2.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-01 22:30:06.009465",
    "temperatura_media": 20.5,
    "precipitacao_mm": 27.8,
    "vento_kmh": 9.3
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-02 22:30:06.009465",
    "temperatura_media": 19.1,
    "precipitacao_mm": 6.7,
    "vento_kmh": 2.5
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-03 22:30:06.009465",
    "temperatura_media": 18.6,
    "precipitacao_mm": 11.5,
    "vento_kmh": 19.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-04 22:30:06.009465",
    "temperatura_media": 28.4,
    "precipitacao_mm": 15.6,
    "vento_kmh": 14.5
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-05 22:30:06.009465",
    "temperatura_media": 28.2,
    "precipitacao_mm": 28.4,
    "vento_kmh": 16.6
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-06 22:30:06.009465",
    "temperatura_media": 28.9,
    "precipitacao_mm": 13.2,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-07 22:30:06.009465",
    "temperatura_media": 29.2,
    "precipitacao_mm": 24.1,
    "vento_kmh": 6.4
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-08 22:30:06.009465",
    "temperatura_media": 18.6,
    "precipitacao_mm": 18,
    "vento_kmh": 10.8
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-09 22:30:06.009465",
    "temperatura_media": 21.9,
    "precipitacao_mm": 5.1,
    "vento_kmh": 1.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-10 22:30:06.009465",
    "temperatura_media": 22.1,
    "precipitacao_mm": 0,
    "vento_kmh": 4
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-11 22:30:06.009465",
    "temperatura_media": 34.9,
    "precipitacao_mm": 23.4,
    "vento_kmh": 7.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-12 22:30:06.009465",
    "temperatura_media": 24.7,
    "precipitacao_mm": 17.6,
    "vento_kmh": 10.8
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-13 22:30:06.009465",
    "temperatura_media": 30.5,
    "precipitacao_mm": 2.1,
    "vento_kmh": 2.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-14 22:30:06.009465",
    "temperatura_media": 22.8,
    "precipitacao_mm": 24.9,
    "vento_kmh": 18.4
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-15 22:30:06.009465",
    "temperatura_media": 23.9,
    "precipitacao_mm": 28.9,
    "vento_kmh": 6.3
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-16 22:30:06.009465",
    "temperatura_media": 28.3,
    "precipitacao_mm": 5.8,
    "vento_kmh": 18.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-17 22:30:06.009465",
    "temperatura_media": 27.8,
    "precipitacao_mm": 7.8,
    "vento_kmh": 8.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-18 22:30:06.009465",
    "temperatura_media": 19.8,
    "precipitacao_mm": 2.2,
    "vento_kmh": 6.6
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-19 22:30:06.009465",
    "temperatura_media": 34.1,
    "precipitacao_mm": 24.1,
    "vento_kmh": 19.2
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-20 22:30:06.009465",
    "temperatura_media": 32.9,
    "precipitacao_mm": 24.4,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-21 22:30:06.009465",
    "temperatura_media": 29.8,
    "precipitacao_mm": 29,
    "vento_kmh": 11.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-22 22:30:06.009465",
    "temperatura_media": 31.1,
    "precipitacao_mm": 22.7,
    "vento_kmh": 19.3
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-23 22:30:06.009465",
    "temperatura_media": 25.8,
    "precipitacao_mm": 13.8,
    "vento_kmh": 12.1
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-24 22:30:06.009465",
    "temperatura_media": 18.5,
    "precipitacao_mm": 3.5,
    "vento_kmh": 2.3
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-25 22:30:06.009465",
    "temperatura_media": 28.8,
    "precipitacao_mm": 29.8,
    "vento_kmh": 13.9
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-26 22:30:06.009465",
    "temperatura_media": 21.9,
    "precipitacao_mm": 9.5,
    "vento_kmh": 19.2
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-27 22:30:06.009465",
    "temperatura_media": 26.8,
    "precipitacao_mm": 0.3,
    "vento_kmh": 16.8
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-28 22:30:06.009465",
    "temperatura_media": 22.2,
    "precipitacao_mm": 2.8,
    "vento_kmh": 13.8
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-29 22:30:06.009465",
    "temperatura_media": 32,
    "precipitacao_mm": 2.3,
    "vento_kmh": 18.7
  },
  {
    "id_fazenda": 13,
    "data": "2025-07-30 22:30:06.009465",
    "temperatura_media": 26.1,
    "precipitacao_mm": 10.6,
    "vento_kmh": 18
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-01 22:30:06.009682",
    "temperatura_media": 22.6,
    "precipitacao_mm": 28.4,
    "vento_kmh": 14
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-02 22:30:06.009682",
    "temperatura_media": 33.5,
    "precipitacao_mm": 15,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-03 22:30:06.009682",
    "temperatura_media": 30.5,
    "precipitacao_mm": 26.2,
    "vento_kmh": 4.9
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-04 22:30:06.009682",
    "temperatura_media": 21.4,
    "precipitacao_mm": 7.5,
    "vento_kmh": 12.8
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-05 22:30:06.009682",
    "temperatura_media": 20.7,
    "precipitacao_mm": 3.2,
    "vento_kmh": 18.5
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-06 22:30:06.009682",
    "temperatura_media": 29.5,
    "precipitacao_mm": 19.9,
    "vento_kmh": 12.7
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-07 22:30:06.009682",
    "temperatura_media": 31,
    "precipitacao_mm": 16.2,
    "vento_kmh": 1.8
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-08 22:30:06.009682",
    "temperatura_media": 26.2,
    "precipitacao_mm": 18.6,
    "vento_kmh": 10.4
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-09 22:30:06.009682",
    "temperatura_media": 34.8,
    "precipitacao_mm": 26.9,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-10 22:30:06.009682",
    "temperatura_media": 26.3,
    "precipitacao_mm": 29.5,
    "vento_kmh": 18.4
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-11 22:30:06.009682",
    "temperatura_media": 22.8,
    "precipitacao_mm": 6.7,
    "vento_kmh": 12
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-12 22:30:06.009682",
    "temperatura_media": 18.9,
    "precipitacao_mm": 24,
    "vento_kmh": 10.1
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-13 22:30:06.009682",
    "temperatura_media": 27.2,
    "precipitacao_mm": 15.1,
    "vento_kmh": 8.5
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-14 22:30:06.009682",
    "temperatura_media": 29.7,
    "precipitacao_mm": 5.2,
    "vento_kmh": 19.6
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-15 22:30:06.009682",
    "temperatura_media": 29.9,
    "precipitacao_mm": 13.8,
    "vento_kmh": 14.1
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-16 22:30:06.009682",
    "temperatura_media": 18.2,
    "precipitacao_mm": 6.3,
    "vento_kmh": 12
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-17 22:30:06.009682",
    "temperatura_media": 23.5,
    "precipitacao_mm": 18.4,
    "vento_kmh": 5.9
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-18 22:30:06.009682",
    "temperatura_media": 27.3,
    "precipitacao_mm": 7.1,
    "vento_kmh": 10
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-19 22:30:06.009682",
    "temperatura_media": 28.4,
    "precipitacao_mm": 11,
    "vento_kmh": 10.5
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-20 22:30:06.009682",
    "temperatura_media": 21.6,
    "precipitacao_mm": 21,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-21 22:30:06.009682",
    "temperatura_media": 32.5,
    "precipitacao_mm": 8.4,
    "vento_kmh": 4.4
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-22 22:30:06.009682",
    "temperatura_media": 20.2,
    "precipitacao_mm": 17.3,
    "vento_kmh": 5.3
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-23 22:30:06.009682",
    "temperatura_media": 19.7,
    "precipitacao_mm": 8.1,
    "vento_kmh": 5.5
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-24 22:30:06.009682",
    "temperatura_media": 25.3,
    "precipitacao_mm": 11.4,
    "vento_kmh": 3.8
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-25 22:30:06.009682",
    "temperatura_media": 34.3,
    "precipitacao_mm": 4.5,
    "vento_kmh": 16.3
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-26 22:30:06.009682",
    "temperatura_media": 21,
    "precipitacao_mm": 15,
    "vento_kmh": 19.9
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-27 22:30:06.009682",
    "temperatura_media": 32.4,
    "precipitacao_mm": 15.5,
    "vento_kmh": 14.7
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-28 22:30:06.009682",
    "temperatura_media": 31.4,
    "precipitacao_mm": 9,
    "vento_kmh": 11.7
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-29 22:30:06.009682",
    "temperatura_media": 27.7,
    "precipitacao_mm": 12,
    "vento_kmh": 14.1
  },
  {
    "id_fazenda": 14,
    "data": "2025-07-30 22:30:06.009682",
    "temperatura_media": 19,
    "precipitacao_mm": 24.4,
    "vento_kmh": 10.1
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-01 22:30:06.009895",
    "temperatura_media": 28.7,
    "precipitacao_mm": 13.5,
    "vento_kmh": 7.4
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-02 22:30:06.009895",
    "temperatura_media": 24.1,
    "precipitacao_mm": 16.8,
    "vento_kmh": 18.7
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-03 22:30:06.009895",
    "temperatura_media": 22.4,
    "precipitacao_mm": 0.6,
    "vento_kmh": 3.3
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-04 22:30:06.009895",
    "temperatura_media": 32.7,
    "precipitacao_mm": 28.9,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-05 22:30:06.009895",
    "temperatura_media": 27.8,
    "precipitacao_mm": 19.5,
    "vento_kmh": 4.3
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-06 22:30:06.009895",
    "temperatura_media": 31.3,
    "precipitacao_mm": 10.7,
    "vento_kmh": 13.8
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-07 22:30:06.009895",
    "temperatura_media": 26.3,
    "precipitacao_mm": 22.1,
    "vento_kmh": 17.9
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-08 22:30:06.009895",
    "temperatura_media": 24.5,
    "precipitacao_mm": 8.6,
    "vento_kmh": 13
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-09 22:30:06.009895",
    "temperatura_media": 20.5,
    "precipitacao_mm": 5,
    "vento_kmh": 16.3
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-10 22:30:06.009895",
    "temperatura_media": 23.7,
    "precipitacao_mm": 18.9,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-11 22:30:06.009895",
    "temperatura_media": 32.4,
    "precipitacao_mm": 2.1,
    "vento_kmh": 4.1
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-12 22:30:06.009895",
    "temperatura_media": 21.9,
    "precipitacao_mm": 9.5,
    "vento_kmh": 6.5
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-13 22:30:06.009895",
    "temperatura_media": 22.5,
    "precipitacao_mm": 19.3,
    "vento_kmh": 6.2
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-14 22:30:06.009895",
    "temperatura_media": 25.6,
    "precipitacao_mm": 25.9,
    "vento_kmh": 7.9
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-15 22:30:06.009895",
    "temperatura_media": 28,
    "precipitacao_mm": 29,
    "vento_kmh": 8.9
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-16 22:30:06.009895",
    "temperatura_media": 21.1,
    "precipitacao_mm": 0.7,
    "vento_kmh": 14.8
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-17 22:30:06.009895",
    "temperatura_media": 29.3,
    "precipitacao_mm": 28.2,
    "vento_kmh": 14.3
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-18 22:30:06.009895",
    "temperatura_media": 19.4,
    "precipitacao_mm": 5,
    "vento_kmh": 3
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-19 22:30:06.009895",
    "temperatura_media": 19.1,
    "precipitacao_mm": 26.4,
    "vento_kmh": 11.4
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-20 22:30:06.009895",
    "temperatura_media": 18.4,
    "precipitacao_mm": 11.9,
    "vento_kmh": 15.5
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-21 22:30:06.009895",
    "temperatura_media": 19.4,
    "precipitacao_mm": 7.9,
    "vento_kmh": 4
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-22 22:30:06.009895",
    "temperatura_media": 29.1,
    "precipitacao_mm": 26.6,
    "vento_kmh": 6.9
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-23 22:30:06.009895",
    "temperatura_media": 22.2,
    "precipitacao_mm": 8.5,
    "vento_kmh": 12.9
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-24 22:30:06.009895",
    "temperatura_media": 20.2,
    "precipitacao_mm": 25.2,
    "vento_kmh": 1.5
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-25 22:30:06.009895",
    "temperatura_media": 29.3,
    "precipitacao_mm": 25.8,
    "vento_kmh": 7.2
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-26 22:30:06.009895",
    "temperatura_media": 26.1,
    "precipitacao_mm": 29.2,
    "vento_kmh": 11.3
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-27 22:30:06.009895",
    "temperatura_media": 22.6,
    "precipitacao_mm": 13.3,
    "vento_kmh": 19.4
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-28 22:30:06.009895",
    "temperatura_media": 29.9,
    "precipitacao_mm": 5.3,
    "vento_kmh": 12.4
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-29 22:30:06.009895",
    "temperatura_media": 28.7,
    "precipitacao_mm": 19.1,
    "vento_kmh": 11.7
  },
  {
    "id_fazenda": 15,
    "data": "2025-07-30 22:30:06.009895",
    "temperatura_media": 26.9,
    "precipitacao_mm": 19.2,
    "vento_kmh": 6.9
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-01 22:30:06.010110",
    "temperatura_media": 23.9,
    "precipitacao_mm": 16.2,
    "vento_kmh": 16.3
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-02 22:30:06.010110",
    "temperatura_media": 25.5,
    "precipitacao_mm": 11,
    "vento_kmh": 5.9
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-03 22:30:06.010110",
    "temperatura_media": 23.2,
    "precipitacao_mm": 0,
    "vento_kmh": 16.5
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-04 22:30:06.010110",
    "temperatura_media": 32.4,
    "precipitacao_mm": 10.3,
    "vento_kmh": 9.9
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-05 22:30:06.010110",
    "temperatura_media": 18.1,
    "precipitacao_mm": 27.7,
    "vento_kmh": 19
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-06 22:30:06.010110",
    "temperatura_media": 26.1,
    "precipitacao_mm": 0.3,
    "vento_kmh": 9.2
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-07 22:30:06.010110",
    "temperatura_media": 23,
    "precipitacao_mm": 6.9,
    "vento_kmh": 1.1
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-08 22:30:06.010110",
    "temperatura_media": 24.4,
    "precipitacao_mm": 12.4,
    "vento_kmh": 11.7
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-09 22:30:06.010110",
    "temperatura_media": 24.7,
    "precipitacao_mm": 4.9,
    "vento_kmh": 15
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-10 22:30:06.010110",
    "temperatura_media": 24.6,
    "precipitacao_mm": 11.4,
    "vento_kmh": 6
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-11 22:30:06.010110",
    "temperatura_media": 25.2,
    "precipitacao_mm": 7.2,
    "vento_kmh": 15.5
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-12 22:30:06.010110",
    "temperatura_media": 33.5,
    "precipitacao_mm": 24.2,
    "vento_kmh": 14
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-13 22:30:06.010110",
    "temperatura_media": 22.8,
    "precipitacao_mm": 22.3,
    "vento_kmh": 16.4
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-14 22:30:06.010110",
    "temperatura_media": 25,
    "precipitacao_mm": 25.6,
    "vento_kmh": 4.5
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-15 22:30:06.010110",
    "temperatura_media": 22.9,
    "precipitacao_mm": 19.1,
    "vento_kmh": 12.7
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-16 22:30:06.010110",
    "temperatura_media": 22.6,
    "precipitacao_mm": 18.7,
    "vento_kmh": 4.6
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-17 22:30:06.010110",
    "temperatura_media": 18.3,
    "precipitacao_mm": 1.5,
    "vento_kmh": 11.2
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-18 22:30:06.010110",
    "temperatura_media": 21.2,
    "precipitacao_mm": 3.1,
    "vento_kmh": 6.1
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-19 22:30:06.010110",
    "temperatura_media": 30.2,
    "precipitacao_mm": 21.8,
    "vento_kmh": 5.4
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-20 22:30:06.010110",
    "temperatura_media": 20.6,
    "precipitacao_mm": 14.8,
    "vento_kmh": 7.5
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-21 22:30:06.010110",
    "temperatura_media": 23.3,
    "precipitacao_mm": 24,
    "vento_kmh": 20
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-22 22:30:06.010110",
    "temperatura_media": 25.9,
    "precipitacao_mm": 23.7,
    "vento_kmh": 7.3
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-23 22:30:06.010110",
    "temperatura_media": 32.3,
    "precipitacao_mm": 28.5,
    "vento_kmh": 2.1
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-24 22:30:06.010110",
    "temperatura_media": 31.2,
    "precipitacao_mm": 2.1,
    "vento_kmh": 9.9
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-25 22:30:06.010110",
    "temperatura_media": 21.3,
    "precipitacao_mm": 25.2,
    "vento_kmh": 16.5
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-26 22:30:06.010110",
    "temperatura_media": 32.1,
    "precipitacao_mm": 3.7,
    "vento_kmh": 15.6
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-27 22:30:06.010110",
    "temperatura_media": 22.2,
    "precipitacao_mm": 23.1,
    "vento_kmh": 9.4
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-28 22:30:06.010110",
    "temperatura_media": 30.5,
    "precipitacao_mm": 1,
    "vento_kmh": 9.8
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-29 22:30:06.010110",
    "temperatura_media": 31.1,
    "precipitacao_mm": 15.6,
    "vento_kmh": 19.7
  },
  {
    "id_fazenda": 16,
    "data": "2025-07-30 22:30:06.010110",
    "temperatura_media": 26,
    "precipitacao_mm": 20.4,
    "vento_kmh": 6.9
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-01 22:30:06.010349",
    "temperatura_media": 23.5,
    "precipitacao_mm": 18.9,
    "vento_kmh": 1.8
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-02 22:30:06.010349",
    "temperatura_media": 33.9,
    "precipitacao_mm": 15.6,
    "vento_kmh": 5.8
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-03 22:30:06.010349",
    "temperatura_media": 28.9,
    "precipitacao_mm": 6,
    "vento_kmh": 17.9
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-04 22:30:06.010349",
    "temperatura_media": 32.7,
    "precipitacao_mm": 6.5,
    "vento_kmh": 3.1
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-05 22:30:06.010349",
    "temperatura_media": 28.8,
    "precipitacao_mm": 9.7,
    "vento_kmh": 4.2
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-06 22:30:06.010349",
    "temperatura_media": 22.7,
    "precipitacao_mm": 3.6,
    "vento_kmh": 16
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-07 22:30:06.010349",
    "temperatura_media": 18.2,
    "precipitacao_mm": 1.3,
    "vento_kmh": 15.9
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-08 22:30:06.010349",
    "temperatura_media": 26.1,
    "precipitacao_mm": 17.9,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-09 22:30:06.010349",
    "temperatura_media": 19.5,
    "precipitacao_mm": 4.7,
    "vento_kmh": 2.7
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-10 22:30:06.010349",
    "temperatura_media": 28.5,
    "precipitacao_mm": 27.9,
    "vento_kmh": 19.9
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-11 22:30:06.010349",
    "temperatura_media": 28.6,
    "precipitacao_mm": 1.8,
    "vento_kmh": 13.2
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-12 22:30:06.010349",
    "temperatura_media": 29.9,
    "precipitacao_mm": 23.7,
    "vento_kmh": 3.4
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-13 22:30:06.010349",
    "temperatura_media": 22,
    "precipitacao_mm": 29.5,
    "vento_kmh": 16
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-14 22:30:06.010349",
    "temperatura_media": 30.9,
    "precipitacao_mm": 24.2,
    "vento_kmh": 9.3
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-15 22:30:06.010349",
    "temperatura_media": 21.3,
    "precipitacao_mm": 20.7,
    "vento_kmh": 7.8
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-16 22:30:06.010349",
    "temperatura_media": 20.3,
    "precipitacao_mm": 27,
    "vento_kmh": 10.2
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-17 22:30:06.010349",
    "temperatura_media": 25.4,
    "precipitacao_mm": 8.8,
    "vento_kmh": 14.2
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-18 22:30:06.010349",
    "temperatura_media": 21.2,
    "precipitacao_mm": 5.6,
    "vento_kmh": 7.6
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-19 22:30:06.010349",
    "temperatura_media": 30.5,
    "precipitacao_mm": 8.3,
    "vento_kmh": 16.8
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-20 22:30:06.010349",
    "temperatura_media": 33.5,
    "precipitacao_mm": 16.6,
    "vento_kmh": 2.3
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-21 22:30:06.010349",
    "temperatura_media": 20.6,
    "precipitacao_mm": 8.9,
    "vento_kmh": 6
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-22 22:30:06.010349",
    "temperatura_media": 24.2,
    "precipitacao_mm": 0,
    "vento_kmh": 13.1
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-23 22:30:06.010349",
    "temperatura_media": 24.4,
    "precipitacao_mm": 5.6,
    "vento_kmh": 1.4
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-24 22:30:06.010349",
    "temperatura_media": 32.6,
    "precipitacao_mm": 23.3,
    "vento_kmh": 5.5
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-25 22:30:06.010349",
    "temperatura_media": 30.3,
    "precipitacao_mm": 19.7,
    "vento_kmh": 11.2
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-26 22:30:06.010349",
    "temperatura_media": 24.6,
    "precipitacao_mm": 15.7,
    "vento_kmh": 10.5
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-27 22:30:06.010349",
    "temperatura_media": 27.4,
    "precipitacao_mm": 18.4,
    "vento_kmh": 7.1
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-28 22:30:06.010349",
    "temperatura_media": 28.9,
    "precipitacao_mm": 3.3,
    "vento_kmh": 10.9
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-29 22:30:06.010349",
    "temperatura_media": 19.1,
    "precipitacao_mm": 25.1,
    "vento_kmh": 3.5
  },
  {
    "id_fazenda": 17,
    "data": "2025-07-30 22:30:06.010349",
    "temperatura_media": 32.8,
    "precipitacao_mm": 6.1,
    "vento_kmh": 10.2
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-01 22:30:06.010560",
    "temperatura_media": 19.7,
    "precipitacao_mm": 17.1,
    "vento_kmh": 16.9
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-02 22:30:06.010560",
    "temperatura_media": 29.2,
    "precipitacao_mm": 15.8,
    "vento_kmh": 14.3
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-03 22:30:06.010560",
    "temperatura_media": 22.4,
    "precipitacao_mm": 11,
    "vento_kmh": 12.5
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-04 22:30:06.010560",
    "temperatura_media": 19.2,
    "precipitacao_mm": 27.9,
    "vento_kmh": 5
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-05 22:30:06.010560",
    "temperatura_media": 26.4,
    "precipitacao_mm": 26.7,
    "vento_kmh": 2.5
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-06 22:30:06.010560",
    "temperatura_media": 31.6,
    "precipitacao_mm": 1.8,
    "vento_kmh": 11.6
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-07 22:30:06.010560",
    "temperatura_media": 34,
    "precipitacao_mm": 12.5,
    "vento_kmh": 8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-08 22:30:06.010560",
    "temperatura_media": 30,
    "precipitacao_mm": 24.7,
    "vento_kmh": 6.1
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-09 22:30:06.010560",
    "temperatura_media": 18.7,
    "precipitacao_mm": 2.1,
    "vento_kmh": 6.8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-10 22:30:06.010560",
    "temperatura_media": 34.1,
    "precipitacao_mm": 28.8,
    "vento_kmh": 2.8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-11 22:30:06.010560",
    "temperatura_media": 30.3,
    "precipitacao_mm": 15.9,
    "vento_kmh": 4.6
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-12 22:30:06.010560",
    "temperatura_media": 26.9,
    "precipitacao_mm": 7.5,
    "vento_kmh": 12.9
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-13 22:30:06.010560",
    "temperatura_media": 21,
    "precipitacao_mm": 22.5,
    "vento_kmh": 8.9
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-14 22:30:06.010560",
    "temperatura_media": 19.8,
    "precipitacao_mm": 19.2,
    "vento_kmh": 7.8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-15 22:30:06.010560",
    "temperatura_media": 25.8,
    "precipitacao_mm": 20,
    "vento_kmh": 17.8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-16 22:30:06.010560",
    "temperatura_media": 20.8,
    "precipitacao_mm": 5.4,
    "vento_kmh": 8.6
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-17 22:30:06.010560",
    "temperatura_media": 23.7,
    "precipitacao_mm": 4.7,
    "vento_kmh": 20
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-18 22:30:06.010560",
    "temperatura_media": 25.5,
    "precipitacao_mm": 10.6,
    "vento_kmh": 7
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-19 22:30:06.010560",
    "temperatura_media": 34.9,
    "precipitacao_mm": 9.7,
    "vento_kmh": 8.1
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-20 22:30:06.010560",
    "temperatura_media": 31,
    "precipitacao_mm": 12.9,
    "vento_kmh": 14.8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-21 22:30:06.010560",
    "temperatura_media": 28.3,
    "precipitacao_mm": 16.9,
    "vento_kmh": 5.1
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-22 22:30:06.010560",
    "temperatura_media": 31,
    "precipitacao_mm": 27.8,
    "vento_kmh": 5.8
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-23 22:30:06.010560",
    "temperatura_media": 34.3,
    "precipitacao_mm": 13.4,
    "vento_kmh": 8.5
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-24 22:30:06.010560",
    "temperatura_media": 30.3,
    "precipitacao_mm": 29.5,
    "vento_kmh": 12.3
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-25 22:30:06.010560",
    "temperatura_media": 26.8,
    "precipitacao_mm": 29.8,
    "vento_kmh": 6.7
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-26 22:30:06.010560",
    "temperatura_media": 23.1,
    "precipitacao_mm": 6.7,
    "vento_kmh": 17.3
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-27 22:30:06.010560",
    "temperatura_media": 18.4,
    "precipitacao_mm": 24.7,
    "vento_kmh": 14.1
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-28 22:30:06.010560",
    "temperatura_media": 22.7,
    "precipitacao_mm": 16.6,
    "vento_kmh": 11.6
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-29 22:30:06.010560",
    "temperatura_media": 33.7,
    "precipitacao_mm": 4.6,
    "vento_kmh": 1.7
  },
  {
    "id_fazenda": 18,
    "data": "2025-07-30 22:30:06.010560",
    "temperatura_media": 24,
    "precipitacao_mm": 4.2,
    "vento_kmh": 8
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-01 22:30:06.010772",
    "temperatura_media": 27.9,
    "precipitacao_mm": 7,
    "vento_kmh": 16.4
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-02 22:30:06.010772",
    "temperatura_media": 19.6,
    "precipitacao_mm": 12,
    "vento_kmh": 18.4
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-03 22:30:06.010772",
    "temperatura_media": 30.5,
    "precipitacao_mm": 21.7,
    "vento_kmh": 16.1
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-04 22:30:06.010772",
    "temperatura_media": 20.9,
    "precipitacao_mm": 24.8,
    "vento_kmh": 14.1
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-05 22:30:06.010772",
    "temperatura_media": 27.8,
    "precipitacao_mm": 27.2,
    "vento_kmh": 12.3
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-06 22:30:06.010772",
    "temperatura_media": 23.1,
    "precipitacao_mm": 21.9,
    "vento_kmh": 11.9
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-07 22:30:06.010772",
    "temperatura_media": 19.3,
    "precipitacao_mm": 1.7,
    "vento_kmh": 15.6
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-08 22:30:06.010772",
    "temperatura_media": 23.9,
    "precipitacao_mm": 24.5,
    "vento_kmh": 8.9
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-09 22:30:06.010772",
    "temperatura_media": 32.8,
    "precipitacao_mm": 26.1,
    "vento_kmh": 5.3
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-10 22:30:06.010772",
    "temperatura_media": 29.1,
    "precipitacao_mm": 18.1,
    "vento_kmh": 1.2
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-11 22:30:06.010772",
    "temperatura_media": 31.2,
    "precipitacao_mm": 11.5,
    "vento_kmh": 6.8
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-12 22:30:06.010772",
    "temperatura_media": 18.7,
    "precipitacao_mm": 16.2,
    "vento_kmh": 3.8
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-13 22:30:06.010772",
    "temperatura_media": 26.5,
    "precipitacao_mm": 6.6,
    "vento_kmh": 2
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-14 22:30:06.010772",
    "temperatura_media": 30.4,
    "precipitacao_mm": 11.8,
    "vento_kmh": 9.5
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-15 22:30:06.010772",
    "temperatura_media": 28.1,
    "precipitacao_mm": 15.1,
    "vento_kmh": 5.2
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-16 22:30:06.010772",
    "temperatura_media": 22.9,
    "precipitacao_mm": 11.8,
    "vento_kmh": 3.5
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-17 22:30:06.010772",
    "temperatura_media": 19.4,
    "precipitacao_mm": 17.1,
    "vento_kmh": 1.9
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-18 22:30:06.010772",
    "temperatura_media": 24.8,
    "precipitacao_mm": 2.6,
    "vento_kmh": 10.5
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-19 22:30:06.010772",
    "temperatura_media": 31.2,
    "precipitacao_mm": 3.9,
    "vento_kmh": 3.6
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-20 22:30:06.010772",
    "temperatura_media": 27.5,
    "precipitacao_mm": 14.6,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-21 22:30:06.010772",
    "temperatura_media": 21.3,
    "precipitacao_mm": 18.5,
    "vento_kmh": 15
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-22 22:30:06.010772",
    "temperatura_media": 22.2,
    "precipitacao_mm": 2.1,
    "vento_kmh": 15.8
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-23 22:30:06.010772",
    "temperatura_media": 23.5,
    "precipitacao_mm": 27.7,
    "vento_kmh": 2.7
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-24 22:30:06.010772",
    "temperatura_media": 29.4,
    "precipitacao_mm": 12.7,
    "vento_kmh": 7.6
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-25 22:30:06.010772",
    "temperatura_media": 23.5,
    "precipitacao_mm": 17.8,
    "vento_kmh": 1.5
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-26 22:30:06.010772",
    "temperatura_media": 23.2,
    "precipitacao_mm": 29.6,
    "vento_kmh": 12.7
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-27 22:30:06.010772",
    "temperatura_media": 34.8,
    "precipitacao_mm": 13.3,
    "vento_kmh": 3.8
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-28 22:30:06.010772",
    "temperatura_media": 18.8,
    "precipitacao_mm": 24.5,
    "vento_kmh": 4.8
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-29 22:30:06.010772",
    "temperatura_media": 24.4,
    "precipitacao_mm": 22.7,
    "vento_kmh": 17.2
  },
  {
    "id_fazenda": 19,
    "data": "2025-07-30 22:30:06.010772",
    "temperatura_media": 19.9,
    "precipitacao_mm": 1.6,
    "vento_kmh": 19
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-01 22:30:06.010982",
    "temperatura_media": 33.8,
    "precipitacao_mm": 26.1,
    "vento_kmh": 16.6
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-02 22:30:06.010982",
    "temperatura_media": 18.2,
    "precipitacao_mm": 20.8,
    "vento_kmh": 3.1
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-03 22:30:06.010982",
    "temperatura_media": 25.7,
    "precipitacao_mm": 0.7,
    "vento_kmh": 5
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-04 22:30:06.010982",
    "temperatura_media": 27.1,
    "precipitacao_mm": 6.1,
    "vento_kmh": 10.9
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-05 22:30:06.010982",
    "temperatura_media": 22.4,
    "precipitacao_mm": 14.5,
    "vento_kmh": 14.9
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-06 22:30:06.010982",
    "temperatura_media": 20.4,
    "precipitacao_mm": 21,
    "vento_kmh": 1.3
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-07 22:30:06.010982",
    "temperatura_media": 27.9,
    "precipitacao_mm": 19.9,
    "vento_kmh": 1.8
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-08 22:30:06.010982",
    "temperatura_media": 20.9,
    "precipitacao_mm": 8.5,
    "vento_kmh": 16
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-09 22:30:06.010982",
    "temperatura_media": 28.5,
    "precipitacao_mm": 1.6,
    "vento_kmh": 13.4
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-10 22:30:06.010982",
    "temperatura_media": 18.1,
    "precipitacao_mm": 11.7,
    "vento_kmh": 6.2
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-11 22:30:06.010982",
    "temperatura_media": 32.5,
    "precipitacao_mm": 19.8,
    "vento_kmh": 17.4
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-12 22:30:06.010982",
    "temperatura_media": 18.3,
    "precipitacao_mm": 26,
    "vento_kmh": 13.3
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-13 22:30:06.010982",
    "temperatura_media": 21.9,
    "precipitacao_mm": 11.4,
    "vento_kmh": 19.6
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-14 22:30:06.010982",
    "temperatura_media": 19.7,
    "precipitacao_mm": 9.5,
    "vento_kmh": 17.5
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-15 22:30:06.010982",
    "temperatura_media": 27,
    "precipitacao_mm": 5.6,
    "vento_kmh": 10.5
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-16 22:30:06.010982",
    "temperatura_media": 25.8,
    "precipitacao_mm": 27.8,
    "vento_kmh": 1.4
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-17 22:30:06.010982",
    "temperatura_media": 22.2,
    "precipitacao_mm": 15.9,
    "vento_kmh": 7.3
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-18 22:30:06.010982",
    "temperatura_media": 24.7,
    "precipitacao_mm": 4.7,
    "vento_kmh": 7.6
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-19 22:30:06.010982",
    "temperatura_media": 24,
    "precipitacao_mm": 18.8,
    "vento_kmh": 5.5
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-20 22:30:06.010982",
    "temperatura_media": 34.6,
    "precipitacao_mm": 15,
    "vento_kmh": 16.4
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-21 22:30:06.010982",
    "temperatura_media": 28.6,
    "precipitacao_mm": 26.4,
    "vento_kmh": 17.9
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-22 22:30:06.010982",
    "temperatura_media": 31.9,
    "precipitacao_mm": 0.9,
    "vento_kmh": 11.5
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-23 22:30:06.010982",
    "temperatura_media": 22.8,
    "precipitacao_mm": 4.6,
    "vento_kmh": 18
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-24 22:30:06.010982",
    "temperatura_media": 29.2,
    "precipitacao_mm": 2.6,
    "vento_kmh": 8.3
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-25 22:30:06.010982",
    "temperatura_media": 34.3,
    "precipitacao_mm": 18.4,
    "vento_kmh": 12.9
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-26 22:30:06.010982",
    "temperatura_media": 21.9,
    "precipitacao_mm": 7.2,
    "vento_kmh": 3.9
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-27 22:30:06.010982",
    "temperatura_media": 34.5,
    "precipitacao_mm": 27.3,
    "vento_kmh": 7.3
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-28 22:30:06.010982",
    "temperatura_media": 27.2,
    "precipitacao_mm": 6.2,
    "vento_kmh": 3.6
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-29 22:30:06.010982",
    "temperatura_media": 27.2,
    "precipitacao_mm": 24,
    "vento_kmh": 17.4
  },
  {
    "id_fazenda": 20,
    "data": "2025-07-30 22:30:06.010982",
    "temperatura_media": 23.3,
    "precipitacao_mm": 21.2,
    "vento_kmh": 11
  }
];
    const sensoresData = [
  {
    "id_sensor": 1,
    "id_fazenda": 1,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-765",
    "ativo": "False",
    "data_instalacao": "2024-01-18"
  },
  {
    "id_sensor": 2,
    "id_fazenda": 1,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-559",
    "ativo": "True",
    "data_instalacao": "2024-02-16"
  },
  {
    "id_sensor": 3,
    "id_fazenda": 1,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-877",
    "ativo": "True",
    "data_instalacao": "2025-03-19"
  },
  {
    "id_sensor": 4,
    "id_fazenda": 1,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-532",
    "ativo": "True",
    "data_instalacao": "2023-10-22"
  },
  {
    "id_sensor": 5,
    "id_fazenda": 2,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-320",
    "ativo": "True",
    "data_instalacao": "2025-03-01"
  },
  {
    "id_sensor": 6,
    "id_fazenda": 2,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-194",
    "ativo": "False",
    "data_instalacao": "2024-06-15"
  },
  {
    "id_sensor": 7,
    "id_fazenda": 2,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-467",
    "ativo": "True",
    "data_instalacao": "2024-07-08"
  },
  {
    "id_sensor": 8,
    "id_fazenda": 2,
    "tipo_sensor": "CO2",
    "modelo": "MOD-370",
    "ativo": "True",
    "data_instalacao": "2025-06-16"
  },
  {
    "id_sensor": 9,
    "id_fazenda": 2,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-570",
    "ativo": "True",
    "data_instalacao": "2023-12-05"
  },
  {
    "id_sensor": 10,
    "id_fazenda": 3,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-665",
    "ativo": "True",
    "data_instalacao": "2025-07-13"
  },
  {
    "id_sensor": 11,
    "id_fazenda": 3,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-733",
    "ativo": "True",
    "data_instalacao": "2024-09-05"
  },
  {
    "id_sensor": 12,
    "id_fazenda": 3,
    "tipo_sensor": "CO2",
    "modelo": "MOD-296",
    "ativo": "True",
    "data_instalacao": "2024-01-16"
  },
  {
    "id_sensor": 13,
    "id_fazenda": 3,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-777",
    "ativo": "True",
    "data_instalacao": "2025-01-27"
  },
  {
    "id_sensor": 14,
    "id_fazenda": 3,
    "tipo_sensor": "pH",
    "modelo": "MOD-181",
    "ativo": "True",
    "data_instalacao": "2024-07-09"
  },
  {
    "id_sensor": 15,
    "id_fazenda": 3,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-489",
    "ativo": "True",
    "data_instalacao": "2024-12-26"
  },
  {
    "id_sensor": 16,
    "id_fazenda": 4,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-954",
    "ativo": "True",
    "data_instalacao": "2024-09-21"
  },
  {
    "id_sensor": 17,
    "id_fazenda": 4,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-479",
    "ativo": "True",
    "data_instalacao": "2025-07-17"
  },
  {
    "id_sensor": 18,
    "id_fazenda": 4,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-786",
    "ativo": "True",
    "data_instalacao": "2024-01-23"
  },
  {
    "id_sensor": 19,
    "id_fazenda": 4,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-799",
    "ativo": "True",
    "data_instalacao": "2024-02-09"
  },
  {
    "id_sensor": 20,
    "id_fazenda": 4,
    "tipo_sensor": "CO2",
    "modelo": "MOD-750",
    "ativo": "True",
    "data_instalacao": "2025-05-15"
  },
  {
    "id_sensor": 21,
    "id_fazenda": 4,
    "tipo_sensor": "CO2",
    "modelo": "MOD-846",
    "ativo": "True",
    "data_instalacao": "2024-08-12"
  },
  {
    "id_sensor": 22,
    "id_fazenda": 5,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-488",
    "ativo": "True",
    "data_instalacao": "2025-05-22"
  },
  {
    "id_sensor": 23,
    "id_fazenda": 5,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-804",
    "ativo": "True",
    "data_instalacao": "2024-09-10"
  },
  {
    "id_sensor": 24,
    "id_fazenda": 5,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-432",
    "ativo": "True",
    "data_instalacao": "2024-10-24"
  },
  {
    "id_sensor": 25,
    "id_fazenda": 5,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-941",
    "ativo": "True",
    "data_instalacao": "2024-02-18"
  },
  {
    "id_sensor": 26,
    "id_fazenda": 6,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-374",
    "ativo": "True",
    "data_instalacao": "2024-09-12"
  },
  {
    "id_sensor": 27,
    "id_fazenda": 6,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-680",
    "ativo": "True",
    "data_instalacao": "2025-04-29"
  },
  {
    "id_sensor": 28,
    "id_fazenda": 6,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-771",
    "ativo": "False",
    "data_instalacao": "2024-07-11"
  },
  {
    "id_sensor": 29,
    "id_fazenda": 6,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-758",
    "ativo": "False",
    "data_instalacao": "2023-08-05"
  },
  {
    "id_sensor": 30,
    "id_fazenda": 6,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-371",
    "ativo": "True",
    "data_instalacao": "2024-12-05"
  },
  {
    "id_sensor": 31,
    "id_fazenda": 7,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-674",
    "ativo": "True",
    "data_instalacao": "2024-09-04"
  },
  {
    "id_sensor": 32,
    "id_fazenda": 7,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-698",
    "ativo": "False",
    "data_instalacao": "2025-07-20"
  },
  {
    "id_sensor": 33,
    "id_fazenda": 7,
    "tipo_sensor": "CO2",
    "modelo": "MOD-508",
    "ativo": "True",
    "data_instalacao": "2024-07-26"
  },
  {
    "id_sensor": 34,
    "id_fazenda": 7,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-241",
    "ativo": "False",
    "data_instalacao": "2025-07-01"
  },
  {
    "id_sensor": 35,
    "id_fazenda": 8,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-981",
    "ativo": "True",
    "data_instalacao": "2024-04-08"
  },
  {
    "id_sensor": 36,
    "id_fazenda": 8,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-742",
    "ativo": "True",
    "data_instalacao": "2024-02-10"
  },
  {
    "id_sensor": 37,
    "id_fazenda": 8,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-532",
    "ativo": "True",
    "data_instalacao": "2023-11-07"
  },
  {
    "id_sensor": 38,
    "id_fazenda": 9,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-710",
    "ativo": "False",
    "data_instalacao": "2024-10-22"
  },
  {
    "id_sensor": 39,
    "id_fazenda": 9,
    "tipo_sensor": "CO2",
    "modelo": "MOD-357",
    "ativo": "True",
    "data_instalacao": "2024-07-05"
  },
  {
    "id_sensor": 40,
    "id_fazenda": 9,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-838",
    "ativo": "True",
    "data_instalacao": "2024-01-21"
  },
  {
    "id_sensor": 41,
    "id_fazenda": 9,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-649",
    "ativo": "True",
    "data_instalacao": "2025-01-26"
  },
  {
    "id_sensor": 42,
    "id_fazenda": 9,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-448",
    "ativo": "True",
    "data_instalacao": "2024-08-22"
  },
  {
    "id_sensor": 43,
    "id_fazenda": 9,
    "tipo_sensor": "pH",
    "modelo": "MOD-545",
    "ativo": "True",
    "data_instalacao": "2024-08-19"
  },
  {
    "id_sensor": 44,
    "id_fazenda": 10,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-839",
    "ativo": "True",
    "data_instalacao": "2024-07-21"
  },
  {
    "id_sensor": 45,
    "id_fazenda": 10,
    "tipo_sensor": "CO2",
    "modelo": "MOD-880",
    "ativo": "True",
    "data_instalacao": "2023-12-25"
  },
  {
    "id_sensor": 46,
    "id_fazenda": 10,
    "tipo_sensor": "CO2",
    "modelo": "MOD-208",
    "ativo": "True",
    "data_instalacao": "2023-11-30"
  },
  {
    "id_sensor": 47,
    "id_fazenda": 10,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-619",
    "ativo": "True",
    "data_instalacao": "2024-11-10"
  },
  {
    "id_sensor": 48,
    "id_fazenda": 10,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-482",
    "ativo": "True",
    "data_instalacao": "2024-08-03"
  },
  {
    "id_sensor": 49,
    "id_fazenda": 10,
    "tipo_sensor": "CO2",
    "modelo": "MOD-897",
    "ativo": "True",
    "data_instalacao": "2025-06-19"
  },
  {
    "id_sensor": 50,
    "id_fazenda": 11,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-119",
    "ativo": "True",
    "data_instalacao": "2025-03-17"
  },
  {
    "id_sensor": 51,
    "id_fazenda": 11,
    "tipo_sensor": "pH",
    "modelo": "MOD-999",
    "ativo": "True",
    "data_instalacao": "2023-08-16"
  },
  {
    "id_sensor": 52,
    "id_fazenda": 11,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-159",
    "ativo": "True",
    "data_instalacao": "2025-01-03"
  },
  {
    "id_sensor": 53,
    "id_fazenda": 11,
    "tipo_sensor": "CO2",
    "modelo": "MOD-180",
    "ativo": "True",
    "data_instalacao": "2023-11-09"
  },
  {
    "id_sensor": 54,
    "id_fazenda": 11,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-597",
    "ativo": "True",
    "data_instalacao": "2023-10-01"
  },
  {
    "id_sensor": 55,
    "id_fazenda": 12,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-775",
    "ativo": "False",
    "data_instalacao": "2024-09-27"
  },
  {
    "id_sensor": 56,
    "id_fazenda": 12,
    "tipo_sensor": "CO2",
    "modelo": "MOD-269",
    "ativo": "True",
    "data_instalacao": "2025-02-20"
  },
  {
    "id_sensor": 57,
    "id_fazenda": 12,
    "tipo_sensor": "CO2",
    "modelo": "MOD-993",
    "ativo": "False",
    "data_instalacao": "2024-10-12"
  },
  {
    "id_sensor": 58,
    "id_fazenda": 12,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-652",
    "ativo": "True",
    "data_instalacao": "2025-07-09"
  },
  {
    "id_sensor": 59,
    "id_fazenda": 13,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-787",
    "ativo": "True",
    "data_instalacao": "2023-10-05"
  },
  {
    "id_sensor": 60,
    "id_fazenda": 13,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-629",
    "ativo": "False",
    "data_instalacao": "2025-04-17"
  },
  {
    "id_sensor": 61,
    "id_fazenda": 13,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-353",
    "ativo": "True",
    "data_instalacao": "2025-04-28"
  },
  {
    "id_sensor": 62,
    "id_fazenda": 13,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-446",
    "ativo": "True",
    "data_instalacao": "2025-02-09"
  },
  {
    "id_sensor": 63,
    "id_fazenda": 13,
    "tipo_sensor": "CO2",
    "modelo": "MOD-667",
    "ativo": "True",
    "data_instalacao": "2024-07-30"
  },
  {
    "id_sensor": 64,
    "id_fazenda": 14,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-172",
    "ativo": "True",
    "data_instalacao": "2024-02-03"
  },
  {
    "id_sensor": 65,
    "id_fazenda": 14,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-169",
    "ativo": "True",
    "data_instalacao": "2023-10-08"
  },
  {
    "id_sensor": 66,
    "id_fazenda": 14,
    "tipo_sensor": "pH",
    "modelo": "MOD-172",
    "ativo": "True",
    "data_instalacao": "2025-03-10"
  },
  {
    "id_sensor": 67,
    "id_fazenda": 14,
    "tipo_sensor": "pH",
    "modelo": "MOD-785",
    "ativo": "False",
    "data_instalacao": "2023-07-31"
  },
  {
    "id_sensor": 68,
    "id_fazenda": 15,
    "tipo_sensor": "CO2",
    "modelo": "MOD-235",
    "ativo": "False",
    "data_instalacao": "2024-12-23"
  },
  {
    "id_sensor": 69,
    "id_fazenda": 15,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-903",
    "ativo": "False",
    "data_instalacao": "2024-01-21"
  },
  {
    "id_sensor": 70,
    "id_fazenda": 15,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-294",
    "ativo": "True",
    "data_instalacao": "2024-04-02"
  },
  {
    "id_sensor": 71,
    "id_fazenda": 15,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-774",
    "ativo": "False",
    "data_instalacao": "2025-06-14"
  },
  {
    "id_sensor": 72,
    "id_fazenda": 16,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-520",
    "ativo": "False",
    "data_instalacao": "2024-01-23"
  },
  {
    "id_sensor": 73,
    "id_fazenda": 16,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-155",
    "ativo": "True",
    "data_instalacao": "2024-11-06"
  },
  {
    "id_sensor": 74,
    "id_fazenda": 16,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-512",
    "ativo": "True",
    "data_instalacao": "2024-05-01"
  },
  {
    "id_sensor": 75,
    "id_fazenda": 16,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-354",
    "ativo": "True",
    "data_instalacao": "2024-04-26"
  },
  {
    "id_sensor": 76,
    "id_fazenda": 16,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-649",
    "ativo": "False",
    "data_instalacao": "2023-10-22"
  },
  {
    "id_sensor": 77,
    "id_fazenda": 17,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-287",
    "ativo": "True",
    "data_instalacao": "2024-12-24"
  },
  {
    "id_sensor": 78,
    "id_fazenda": 17,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-355",
    "ativo": "True",
    "data_instalacao": "2025-07-07"
  },
  {
    "id_sensor": 79,
    "id_fazenda": 17,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-927",
    "ativo": "True",
    "data_instalacao": "2024-07-28"
  },
  {
    "id_sensor": 80,
    "id_fazenda": 17,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-767",
    "ativo": "True",
    "data_instalacao": "2023-09-24"
  },
  {
    "id_sensor": 81,
    "id_fazenda": 18,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-270",
    "ativo": "False",
    "data_instalacao": "2024-12-09"
  },
  {
    "id_sensor": 82,
    "id_fazenda": 18,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-592",
    "ativo": "True",
    "data_instalacao": "2025-04-16"
  },
  {
    "id_sensor": 83,
    "id_fazenda": 18,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-160",
    "ativo": "True",
    "data_instalacao": "2025-02-17"
  },
  {
    "id_sensor": 84,
    "id_fazenda": 19,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-499",
    "ativo": "True",
    "data_instalacao": "2024-09-15"
  },
  {
    "id_sensor": 85,
    "id_fazenda": 19,
    "tipo_sensor": "Luminosidade",
    "modelo": "MOD-392",
    "ativo": "False",
    "data_instalacao": "2025-01-20"
  },
  {
    "id_sensor": 86,
    "id_fazenda": 19,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-848",
    "ativo": "False",
    "data_instalacao": "2024-09-07"
  },
  {
    "id_sensor": 87,
    "id_fazenda": 19,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-294",
    "ativo": "True",
    "data_instalacao": "2025-01-08"
  },
  {
    "id_sensor": 88,
    "id_fazenda": 19,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-159",
    "ativo": "True",
    "data_instalacao": "2023-12-10"
  },
  {
    "id_sensor": 89,
    "id_fazenda": 19,
    "tipo_sensor": "Nitrogênio",
    "modelo": "MOD-421",
    "ativo": "True",
    "data_instalacao": "2024-02-25"
  },
  {
    "id_sensor": 90,
    "id_fazenda": 20,
    "tipo_sensor": "CO2",
    "modelo": "MOD-588",
    "ativo": "True",
    "data_instalacao": "2024-09-29"
  },
  {
    "id_sensor": 91,
    "id_fazenda": 20,
    "tipo_sensor": "Umidade do Solo",
    "modelo": "MOD-620",
    "ativo": "True",
    "data_instalacao": "2024-05-23"
  },
  {
    "id_sensor": 92,
    "id_fazenda": 20,
    "tipo_sensor": "Temperatura",
    "modelo": "MOD-170",
    "ativo": "True",
    "data_instalacao": "2024-03-20"
  }
];
    const leiturasSensoresData = [
  {
    "id_sensor": 1,
    "data_hora": "2025-07-01 22:30:05.982651",
    "valor": 65.77
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-02 22:30:05.982651",
    "valor": 26.17
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-03 22:30:05.982651",
    "valor": 15.79
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-04 22:30:05.982651",
    "valor": 85.13
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-05 22:30:05.982651",
    "valor": 27.16
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-06 22:30:05.982651",
    "valor": 58.51
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-07 22:30:05.982651",
    "valor": 60.74
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-08 22:30:05.982651",
    "valor": 42.73
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-09 22:30:05.982651",
    "valor": 57.53
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-10 22:30:05.982651",
    "valor": 52.05
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-11 22:30:05.982651",
    "valor": 89.12
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-12 22:30:05.982651",
    "valor": 23.38
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-13 22:30:05.982651",
    "valor": 69.46
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-14 22:30:05.982651",
    "valor": 26.48
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-15 22:30:05.982651",
    "valor": 40.62
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-16 22:30:05.982651",
    "valor": 65.45
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-17 22:30:05.982651",
    "valor": 32
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-18 22:30:05.982651",
    "valor": 33.46
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-19 22:30:05.982651",
    "valor": 72.67
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-20 22:30:05.982651",
    "valor": 11.53
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-21 22:30:05.982651",
    "valor": 46.25
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-22 22:30:05.982651",
    "valor": 94.86
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-23 22:30:05.982651",
    "valor": 94.65
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-24 22:30:05.982651",
    "valor": 11.59
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-25 22:30:05.982651",
    "valor": 24.18
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-26 22:30:05.982651",
    "valor": 28.87
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-27 22:30:05.982651",
    "valor": 88.99
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-28 22:30:05.982651",
    "valor": 84.28
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-29 22:30:05.982651",
    "valor": 84.13
  },
  {
    "id_sensor": 1,
    "data_hora": "2025-07-30 22:30:05.982651",
    "valor": 38.26
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-01 22:30:05.982967",
    "valor": 19.2
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-02 22:30:05.982967",
    "valor": 80.04
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-03 22:30:05.982967",
    "valor": 68.32
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-04 22:30:05.982967",
    "valor": 60.05
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-05 22:30:05.982967",
    "valor": 93.85
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-06 22:30:05.982967",
    "valor": 63.86
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-07 22:30:05.982967",
    "valor": 5.7
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-08 22:30:05.982967",
    "valor": 78.54
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-09 22:30:05.982967",
    "valor": 31.94
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-10 22:30:05.982967",
    "valor": 64.7
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-11 22:30:05.982967",
    "valor": 89.5
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-12 22:30:05.982967",
    "valor": 17.09
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-13 22:30:05.982967",
    "valor": 15.39
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-14 22:30:05.982967",
    "valor": 14.63
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-15 22:30:05.982967",
    "valor": 54.79
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-16 22:30:05.982967",
    "valor": 29.51
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-17 22:30:05.982967",
    "valor": 59.43
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-18 22:30:05.982967",
    "valor": 69.59
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-19 22:30:05.982967",
    "valor": 23.32
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-20 22:30:05.982967",
    "valor": 62.08
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-21 22:30:05.982967",
    "valor": 28.76
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-22 22:30:05.982967",
    "valor": 48.97
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-23 22:30:05.982967",
    "valor": 86.48
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-24 22:30:05.982967",
    "valor": 81.15
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-25 22:30:05.982967",
    "valor": 13.31
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-26 22:30:05.982967",
    "valor": 43.12
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-27 22:30:05.982967",
    "valor": 29.9
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-28 22:30:05.982967",
    "valor": 5.32
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-29 22:30:05.982967",
    "valor": 74.4
  },
  {
    "id_sensor": 2,
    "data_hora": "2025-07-30 22:30:05.982967",
    "valor": 62.34
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-01 22:30:05.983164",
    "valor": 28.58
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-02 22:30:05.983164",
    "valor": 71.71
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-03 22:30:05.983164",
    "valor": 54.65
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-04 22:30:05.983164",
    "valor": 43.49
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-05 22:30:05.983164",
    "valor": 5.87
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-06 22:30:05.983164",
    "valor": 11.77
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-07 22:30:05.983164",
    "valor": 84.48
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-08 22:30:05.983164",
    "valor": 86.35
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-09 22:30:05.983164",
    "valor": 54.1
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-10 22:30:05.983164",
    "valor": 80.11
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-11 22:30:05.983164",
    "valor": 57.43
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-12 22:30:05.983164",
    "valor": 18.33
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-13 22:30:05.983164",
    "valor": 16.47
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-14 22:30:05.983164",
    "valor": 32.74
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-15 22:30:05.983164",
    "valor": 85.91
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-16 22:30:05.983164",
    "valor": 76.65
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-17 22:30:05.983164",
    "valor": 82.46
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-18 22:30:05.983164",
    "valor": 85.9
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-19 22:30:05.983164",
    "valor": 23.91
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-20 22:30:05.983164",
    "valor": 27.46
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-21 22:30:05.983164",
    "valor": 14.25
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-22 22:30:05.983164",
    "valor": 75.21
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-23 22:30:05.983164",
    "valor": 84.57
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-24 22:30:05.983164",
    "valor": 41.57
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-25 22:30:05.983164",
    "valor": 60.86
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-26 22:30:05.983164",
    "valor": 18.91
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-27 22:30:05.983164",
    "valor": 88.69
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-28 22:30:05.983164",
    "valor": 82.81
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-29 22:30:05.983164",
    "valor": 92.86
  },
  {
    "id_sensor": 3,
    "data_hora": "2025-07-30 22:30:05.983164",
    "valor": 77.97
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-01 22:30:05.983377",
    "valor": 84.33
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-02 22:30:05.983377",
    "valor": 7.23
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-03 22:30:05.983377",
    "valor": 71.29
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-04 22:30:05.983377",
    "valor": 34.9
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-05 22:30:05.983377",
    "valor": 88.77
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-06 22:30:05.983377",
    "valor": 77.2
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-07 22:30:05.983377",
    "valor": 82.77
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-08 22:30:05.983377",
    "valor": 77.97
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-09 22:30:05.983377",
    "valor": 29.01
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-10 22:30:05.983377",
    "valor": 75.86
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-11 22:30:05.983377",
    "valor": 14.73
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-12 22:30:05.983377",
    "valor": 83.5
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-13 22:30:05.983377",
    "valor": 82.27
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-14 22:30:05.983377",
    "valor": 25.02
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-15 22:30:05.983377",
    "valor": 78.49
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-16 22:30:05.983377",
    "valor": 46.43
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-17 22:30:05.983377",
    "valor": 32.47
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-18 22:30:05.983377",
    "valor": 76.58
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-19 22:30:05.983377",
    "valor": 25.48
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-20 22:30:05.983377",
    "valor": 7.13
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-21 22:30:05.983377",
    "valor": 22.38
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-22 22:30:05.983377",
    "valor": 34.54
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-23 22:30:05.983377",
    "valor": 82.79
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-24 22:30:05.983377",
    "valor": 92.02
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-25 22:30:05.983377",
    "valor": 30.12
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-26 22:30:05.983377",
    "valor": 62.73
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-27 22:30:05.983377",
    "valor": 40.97
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-28 22:30:05.983377",
    "valor": 93.3
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-29 22:30:05.983377",
    "valor": 53.26
  },
  {
    "id_sensor": 4,
    "data_hora": "2025-07-30 22:30:05.983377",
    "valor": 89.53
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-01 22:30:05.983617",
    "valor": 15.38
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-02 22:30:05.983617",
    "valor": 92.34
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-03 22:30:05.983617",
    "valor": 21.07
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-04 22:30:05.983617",
    "valor": 91.63
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-05 22:30:05.983617",
    "valor": 28.89
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-06 22:30:05.983617",
    "valor": 14.76
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-07 22:30:05.983617",
    "valor": 44.11
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-08 22:30:05.983617",
    "valor": 70.57
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-09 22:30:05.983617",
    "valor": 33.23
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-10 22:30:05.983617",
    "valor": 59.56
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-11 22:30:05.983617",
    "valor": 51.03
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-12 22:30:05.983617",
    "valor": 39.67
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-13 22:30:05.983617",
    "valor": 56.89
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-14 22:30:05.983617",
    "valor": 27.93
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-15 22:30:05.983617",
    "valor": 68.79
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-16 22:30:05.983617",
    "valor": 5.15
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-17 22:30:05.983617",
    "valor": 88.3
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-18 22:30:05.983617",
    "valor": 53.46
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-19 22:30:05.983617",
    "valor": 69.75
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-20 22:30:05.983617",
    "valor": 71.78
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-21 22:30:05.983617",
    "valor": 65.36
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-22 22:30:05.983617",
    "valor": 37.78
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-23 22:30:05.983617",
    "valor": 11.3
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-24 22:30:05.983617",
    "valor": 64.78
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-25 22:30:05.983617",
    "valor": 34.72
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-26 22:30:05.983617",
    "valor": 33.25
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-27 22:30:05.983617",
    "valor": 81.32
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-28 22:30:05.983617",
    "valor": 69.78
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-29 22:30:05.983617",
    "valor": 32.03
  },
  {
    "id_sensor": 5,
    "data_hora": "2025-07-30 22:30:05.983617",
    "valor": 32.84
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-01 22:30:05.983822",
    "valor": 41.76
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-02 22:30:05.983822",
    "valor": 41.22
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-03 22:30:05.983822",
    "valor": 31.61
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-04 22:30:05.983822",
    "valor": 16.46
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-05 22:30:05.983822",
    "valor": 42.84
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-06 22:30:05.983822",
    "valor": 89.63
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-07 22:30:05.983822",
    "valor": 65.96
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-08 22:30:05.983822",
    "valor": 86.25
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-09 22:30:05.983822",
    "valor": 60.4
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-10 22:30:05.983822",
    "valor": 32.09
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-11 22:30:05.983822",
    "valor": 54.31
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-12 22:30:05.983822",
    "valor": 5.04
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-13 22:30:05.983822",
    "valor": 30.82
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-14 22:30:05.983822",
    "valor": 43.69
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-15 22:30:05.983822",
    "valor": 57.2
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-16 22:30:05.983822",
    "valor": 63.92
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-17 22:30:05.983822",
    "valor": 46.85
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-18 22:30:05.983822",
    "valor": 44.79
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-19 22:30:05.983822",
    "valor": 24.23
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-20 22:30:05.983822",
    "valor": 47.59
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-21 22:30:05.983822",
    "valor": 86.11
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-22 22:30:05.983822",
    "valor": 76.64
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-23 22:30:05.983822",
    "valor": 20.27
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-24 22:30:05.983822",
    "valor": 12.63
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-25 22:30:05.983822",
    "valor": 51.39
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-26 22:30:05.983822",
    "valor": 61.96
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-27 22:30:05.983822",
    "valor": 35.17
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-28 22:30:05.983822",
    "valor": 78.66
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-29 22:30:05.983822",
    "valor": 72.6
  },
  {
    "id_sensor": 6,
    "data_hora": "2025-07-30 22:30:05.983822",
    "valor": 65.55
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-01 22:30:05.984041",
    "valor": 25.22
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-02 22:30:05.984041",
    "valor": 22.92
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-03 22:30:05.984041",
    "valor": 7.2
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-04 22:30:05.984041",
    "valor": 27.04
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-05 22:30:05.984041",
    "valor": 47.76
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-06 22:30:05.984041",
    "valor": 81.48
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-07 22:30:05.984041",
    "valor": 11.55
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-08 22:30:05.984041",
    "valor": 42.3
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-09 22:30:05.984041",
    "valor": 61.68
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-10 22:30:05.984041",
    "valor": 22.5
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-11 22:30:05.984041",
    "valor": 67.67
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-12 22:30:05.984041",
    "valor": 49.49
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-13 22:30:05.984041",
    "valor": 26.96
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-14 22:30:05.984041",
    "valor": 64.05
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-15 22:30:05.984041",
    "valor": 5.5
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-16 22:30:05.984041",
    "valor": 72.59
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-17 22:30:05.984041",
    "valor": 74.3
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-18 22:30:05.984041",
    "valor": 14.59
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-19 22:30:05.984041",
    "valor": 43.26
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-20 22:30:05.984041",
    "valor": 20.83
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-21 22:30:05.984041",
    "valor": 91.22
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-22 22:30:05.984041",
    "valor": 51.62
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-23 22:30:05.984041",
    "valor": 9.52
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-24 22:30:05.984041",
    "valor": 27.43
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-25 22:30:05.984041",
    "valor": 81.35
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-26 22:30:05.984041",
    "valor": 46.08
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-27 22:30:05.984041",
    "valor": 77.13
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-28 22:30:05.984041",
    "valor": 65.08
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-29 22:30:05.984041",
    "valor": 93.91
  },
  {
    "id_sensor": 7,
    "data_hora": "2025-07-30 22:30:05.984041",
    "valor": 58.59
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-01 22:30:05.984320",
    "valor": 90.5
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-02 22:30:05.984320",
    "valor": 85.23
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-03 22:30:05.984320",
    "valor": 60.14
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-04 22:30:05.984320",
    "valor": 69.73
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-05 22:30:05.984320",
    "valor": 50.43
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-06 22:30:05.984320",
    "valor": 79.75
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-07 22:30:05.984320",
    "valor": 54.31
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-08 22:30:05.984320",
    "valor": 85.75
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-09 22:30:05.984320",
    "valor": 71.93
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-10 22:30:05.984320",
    "valor": 47.72
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-11 22:30:05.984320",
    "valor": 28.33
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-12 22:30:05.984320",
    "valor": 27.25
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-13 22:30:05.984320",
    "valor": 62.39
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-14 22:30:05.984320",
    "valor": 73.92
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-15 22:30:05.984320",
    "valor": 51.92
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-16 22:30:05.984320",
    "valor": 61.41
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-17 22:30:05.984320",
    "valor": 29.71
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-18 22:30:05.984320",
    "valor": 11.97
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-19 22:30:05.984320",
    "valor": 30.72
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-20 22:30:05.984320",
    "valor": 29.45
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-21 22:30:05.984320",
    "valor": 33.77
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-22 22:30:05.984320",
    "valor": 53.61
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-23 22:30:05.984320",
    "valor": 17.45
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-24 22:30:05.984320",
    "valor": 25.81
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-25 22:30:05.984320",
    "valor": 67.46
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-26 22:30:05.984320",
    "valor": 68.58
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-27 22:30:05.984320",
    "valor": 10.78
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-28 22:30:05.984320",
    "valor": 41.68
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-29 22:30:05.984320",
    "valor": 53.84
  },
  {
    "id_sensor": 8,
    "data_hora": "2025-07-30 22:30:05.984320",
    "valor": 42.42
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-01 22:30:05.984505",
    "valor": 23.62
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-02 22:30:05.984505",
    "valor": 42.81
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-03 22:30:05.984505",
    "valor": 86.44
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-04 22:30:05.984505",
    "valor": 57.57
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-05 22:30:05.984505",
    "valor": 67.6
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-06 22:30:05.984505",
    "valor": 82.11
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-07 22:30:05.984505",
    "valor": 73.9
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-08 22:30:05.984505",
    "valor": 39.23
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-09 22:30:05.984505",
    "valor": 5.53
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-10 22:30:05.984505",
    "valor": 36.66
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-11 22:30:05.984505",
    "valor": 72.81
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-12 22:30:05.984505",
    "valor": 81.81
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-13 22:30:05.984505",
    "valor": 90.81
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-14 22:30:05.984505",
    "valor": 42.71
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-15 22:30:05.984505",
    "valor": 72.28
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-16 22:30:05.984505",
    "valor": 54.15
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-17 22:30:05.984505",
    "valor": 59.29
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-18 22:30:05.984505",
    "valor": 24.85
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-19 22:30:05.984505",
    "valor": 24.75
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-20 22:30:05.984505",
    "valor": 44.23
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-21 22:30:05.984505",
    "valor": 7.61
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-22 22:30:05.984505",
    "valor": 35.25
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-23 22:30:05.984505",
    "valor": 66.12
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-24 22:30:05.984505",
    "valor": 41.39
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-25 22:30:05.984505",
    "valor": 19.85
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-26 22:30:05.984505",
    "valor": 47.07
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-27 22:30:05.984505",
    "valor": 16.49
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-28 22:30:05.984505",
    "valor": 61
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-29 22:30:05.984505",
    "valor": 7.43
  },
  {
    "id_sensor": 9,
    "data_hora": "2025-07-30 22:30:05.984505",
    "valor": 40.46
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-01 22:30:05.984733",
    "valor": 55.8
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-02 22:30:05.984733",
    "valor": 7.44
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-03 22:30:05.984733",
    "valor": 62.85
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-04 22:30:05.984733",
    "valor": 17.21
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-05 22:30:05.984733",
    "valor": 46.55
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-06 22:30:05.984733",
    "valor": 9.53
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-07 22:30:05.984733",
    "valor": 39.12
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-08 22:30:05.984733",
    "valor": 24.05
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-09 22:30:05.984733",
    "valor": 34.42
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-10 22:30:05.984733",
    "valor": 73.51
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-11 22:30:05.984733",
    "valor": 39.12
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-12 22:30:05.984733",
    "valor": 72.68
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-13 22:30:05.984733",
    "valor": 79.87
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-14 22:30:05.984733",
    "valor": 27.7
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-15 22:30:05.984733",
    "valor": 12.37
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-16 22:30:05.984733",
    "valor": 6.74
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-17 22:30:05.984733",
    "valor": 53.55
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-18 22:30:05.984733",
    "valor": 94.99
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-19 22:30:05.984733",
    "valor": 36.5
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-20 22:30:05.984733",
    "valor": 63.51
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-21 22:30:05.984733",
    "valor": 75.31
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-22 22:30:05.984733",
    "valor": 63.66
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-23 22:30:05.984733",
    "valor": 72.88
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-24 22:30:05.984733",
    "valor": 90.47
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-25 22:30:05.984733",
    "valor": 22.94
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-26 22:30:05.984733",
    "valor": 6.83
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-27 22:30:05.984733",
    "valor": 18.71
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-28 22:30:05.984733",
    "valor": 16.36
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-29 22:30:05.984733",
    "valor": 65.25
  },
  {
    "id_sensor": 10,
    "data_hora": "2025-07-30 22:30:05.984733",
    "valor": 55.76
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-01 22:30:05.984936",
    "valor": 24.62
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-02 22:30:05.984936",
    "valor": 67.95
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-03 22:30:05.984936",
    "valor": 74.02
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-04 22:30:05.984936",
    "valor": 20.1
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-05 22:30:05.984936",
    "valor": 59.65
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-06 22:30:05.984936",
    "valor": 72.31
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-07 22:30:05.984936",
    "valor": 15.31
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-08 22:30:05.984936",
    "valor": 78.74
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-09 22:30:05.984936",
    "valor": 91.82
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-10 22:30:05.984936",
    "valor": 14.73
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-11 22:30:05.984936",
    "valor": 7.31
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-12 22:30:05.984936",
    "valor": 33.08
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-13 22:30:05.984936",
    "valor": 65.96
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-14 22:30:05.984936",
    "valor": 91.24
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-15 22:30:05.984936",
    "valor": 40.7
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-16 22:30:05.984936",
    "valor": 69.35
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-17 22:30:05.984936",
    "valor": 11.84
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-18 22:30:05.984936",
    "valor": 67.16
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-19 22:30:05.984936",
    "valor": 61.45
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-20 22:30:05.984936",
    "valor": 14.17
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-21 22:30:05.984936",
    "valor": 74.52
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-22 22:30:05.984936",
    "valor": 81.53
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-23 22:30:05.984936",
    "valor": 59.04
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-24 22:30:05.984936",
    "valor": 15.89
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-25 22:30:05.984936",
    "valor": 93.55
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-26 22:30:05.984936",
    "valor": 75.44
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-27 22:30:05.984936",
    "valor": 36.25
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-28 22:30:05.984936",
    "valor": 43.55
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-29 22:30:05.984936",
    "valor": 38.35
  },
  {
    "id_sensor": 11,
    "data_hora": "2025-07-30 22:30:05.984936",
    "valor": 50.54
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-01 22:30:05.985132",
    "valor": 35.71
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-02 22:30:05.985132",
    "valor": 81.46
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-03 22:30:05.985132",
    "valor": 79.01
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-04 22:30:05.985132",
    "valor": 14.5
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-05 22:30:05.985132",
    "valor": 91.47
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-06 22:30:05.985132",
    "valor": 62.2
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-07 22:30:05.985132",
    "valor": 79.58
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-08 22:30:05.985132",
    "valor": 68.66
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-09 22:30:05.985132",
    "valor": 44.19
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-10 22:30:05.985132",
    "valor": 71.04
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-11 22:30:05.985132",
    "valor": 91.89
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-12 22:30:05.985132",
    "valor": 29.31
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-13 22:30:05.985132",
    "valor": 77.74
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-14 22:30:05.985132",
    "valor": 53.44
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-15 22:30:05.985132",
    "valor": 48.51
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-16 22:30:05.985132",
    "valor": 44.2
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-17 22:30:05.985132",
    "valor": 70.79
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-18 22:30:05.985132",
    "valor": 29.16
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-19 22:30:05.985132",
    "valor": 81.65
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-20 22:30:05.985132",
    "valor": 79.77
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-21 22:30:05.985132",
    "valor": 12.8
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-22 22:30:05.985132",
    "valor": 84.35
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-23 22:30:05.985132",
    "valor": 26.95
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-24 22:30:05.985132",
    "valor": 46.82
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-25 22:30:05.985132",
    "valor": 59.93
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-26 22:30:05.985132",
    "valor": 39.11
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-27 22:30:05.985132",
    "valor": 7.58
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-28 22:30:05.985132",
    "valor": 81.59
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-29 22:30:05.985132",
    "valor": 21.37
  },
  {
    "id_sensor": 12,
    "data_hora": "2025-07-30 22:30:05.985132",
    "valor": 24.09
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-01 22:30:05.985346",
    "valor": 76.8
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-02 22:30:05.985346",
    "valor": 35.63
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-03 22:30:05.985346",
    "valor": 84.23
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-04 22:30:05.985346",
    "valor": 68.11
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-05 22:30:05.985346",
    "valor": 29.86
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-06 22:30:05.985346",
    "valor": 5.91
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-07 22:30:05.985346",
    "valor": 90.33
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-08 22:30:05.985346",
    "valor": 12.71
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-09 22:30:05.985346",
    "valor": 69.81
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-10 22:30:05.985346",
    "valor": 48.97
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-11 22:30:05.985346",
    "valor": 73.23
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-12 22:30:05.985346",
    "valor": 67.15
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-13 22:30:05.985346",
    "valor": 63.13
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-14 22:30:05.985346",
    "valor": 49.17
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-15 22:30:05.985346",
    "valor": 76.36
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-16 22:30:05.985346",
    "valor": 13.37
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-17 22:30:05.985346",
    "valor": 24.94
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-18 22:30:05.985346",
    "valor": 67.26
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-19 22:30:05.985346",
    "valor": 32.56
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-20 22:30:05.985346",
    "valor": 57.34
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-21 22:30:05.985346",
    "valor": 47.59
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-22 22:30:05.985346",
    "valor": 52.78
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-23 22:30:05.985346",
    "valor": 43.3
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-24 22:30:05.985346",
    "valor": 72.13
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-25 22:30:05.985346",
    "valor": 34.77
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-26 22:30:05.985346",
    "valor": 68.26
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-27 22:30:05.985346",
    "valor": 29.38
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-28 22:30:05.985346",
    "valor": 27.63
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-29 22:30:05.985346",
    "valor": 15.86
  },
  {
    "id_sensor": 13,
    "data_hora": "2025-07-30 22:30:05.985346",
    "valor": 22.33
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-01 22:30:05.985541",
    "valor": 15.76
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-02 22:30:05.985541",
    "valor": 53.23
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-03 22:30:05.985541",
    "valor": 73.6
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-04 22:30:05.985541",
    "valor": 21.66
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-05 22:30:05.985541",
    "valor": 24.47
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-06 22:30:05.985541",
    "valor": 48.58
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-07 22:30:05.985541",
    "valor": 70.21
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-08 22:30:05.985541",
    "valor": 92.89
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-09 22:30:05.985541",
    "valor": 52.22
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-10 22:30:05.985541",
    "valor": 30.47
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-11 22:30:05.985541",
    "valor": 14.05
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-12 22:30:05.985541",
    "valor": 22.47
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-13 22:30:05.985541",
    "valor": 25.47
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-14 22:30:05.985541",
    "valor": 21.15
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-15 22:30:05.985541",
    "valor": 6.27
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-16 22:30:05.985541",
    "valor": 53.07
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-17 22:30:05.985541",
    "valor": 29.69
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-18 22:30:05.985541",
    "valor": 92.69
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-19 22:30:05.985541",
    "valor": 54.8
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-20 22:30:05.985541",
    "valor": 67.77
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-21 22:30:05.985541",
    "valor": 16.37
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-22 22:30:05.985541",
    "valor": 83.16
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-23 22:30:05.985541",
    "valor": 49.18
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-24 22:30:05.985541",
    "valor": 83.54
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-25 22:30:05.985541",
    "valor": 56.67
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-26 22:30:05.985541",
    "valor": 47.25
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-27 22:30:05.985541",
    "valor": 44.64
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-28 22:30:05.985541",
    "valor": 21.59
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-29 22:30:05.985541",
    "valor": 9.62
  },
  {
    "id_sensor": 14,
    "data_hora": "2025-07-30 22:30:05.985541",
    "valor": 89.7
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-01 22:30:05.985745",
    "valor": 48
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-02 22:30:05.985745",
    "valor": 78.99
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-03 22:30:05.985745",
    "valor": 41.06
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-04 22:30:05.985745",
    "valor": 11.67
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-05 22:30:05.985745",
    "valor": 61.65
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-06 22:30:05.985745",
    "valor": 9.82
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-07 22:30:05.985745",
    "valor": 18.43
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-08 22:30:05.985745",
    "valor": 55.66
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-09 22:30:05.985745",
    "valor": 32.35
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-10 22:30:05.985745",
    "valor": 94.45
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-11 22:30:05.985745",
    "valor": 15.66
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-12 22:30:05.985745",
    "valor": 73.8
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-13 22:30:05.985745",
    "valor": 59.57
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-14 22:30:05.985745",
    "valor": 76.17
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-15 22:30:05.985745",
    "valor": 25.31
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-16 22:30:05.985745",
    "valor": 52.03
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-17 22:30:05.985745",
    "valor": 45.55
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-18 22:30:05.985745",
    "valor": 44.84
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-19 22:30:05.985745",
    "valor": 82.41
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-20 22:30:05.985745",
    "valor": 94.1
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-21 22:30:05.985745",
    "valor": 32.48
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-22 22:30:05.985745",
    "valor": 60.89
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-23 22:30:05.985745",
    "valor": 59.87
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-24 22:30:05.985745",
    "valor": 71.61
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-25 22:30:05.985745",
    "valor": 90.28
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-26 22:30:05.985745",
    "valor": 23.7
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-27 22:30:05.985745",
    "valor": 23.99
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-28 22:30:05.985745",
    "valor": 64.44
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-29 22:30:05.985745",
    "valor": 19.14
  },
  {
    "id_sensor": 15,
    "data_hora": "2025-07-30 22:30:05.985745",
    "valor": 20.64
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-01 22:30:05.985940",
    "valor": 11.76
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-02 22:30:05.985940",
    "valor": 5.24
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-03 22:30:05.985940",
    "valor": 45.55
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-04 22:30:05.985940",
    "valor": 58.44
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-05 22:30:05.985940",
    "valor": 31.21
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-06 22:30:05.985940",
    "valor": 25.83
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-07 22:30:05.985940",
    "valor": 68.63
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-08 22:30:05.985940",
    "valor": 68.27
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-09 22:30:05.985940",
    "valor": 45.86
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-10 22:30:05.985940",
    "valor": 66.86
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-11 22:30:05.985940",
    "valor": 88.15
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-12 22:30:05.985940",
    "valor": 75.9
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-13 22:30:05.985940",
    "valor": 61.26
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-14 22:30:05.985940",
    "valor": 64.51
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-15 22:30:05.985940",
    "valor": 89.03
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-16 22:30:05.985940",
    "valor": 43.26
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-17 22:30:05.985940",
    "valor": 54.01
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-18 22:30:05.985940",
    "valor": 63.29
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-19 22:30:05.985940",
    "valor": 86.76
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-20 22:30:05.985940",
    "valor": 79.4
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-21 22:30:05.985940",
    "valor": 11.43
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-22 22:30:05.985940",
    "valor": 19.93
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-23 22:30:05.985940",
    "valor": 32.69
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-24 22:30:05.985940",
    "valor": 72.41
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-25 22:30:05.985940",
    "valor": 56.23
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-26 22:30:05.985940",
    "valor": 30.97
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-27 22:30:05.985940",
    "valor": 16.19
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-28 22:30:05.985940",
    "valor": 66.98
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-29 22:30:05.985940",
    "valor": 67.98
  },
  {
    "id_sensor": 16,
    "data_hora": "2025-07-30 22:30:05.985940",
    "valor": 89.84
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-01 22:30:05.986140",
    "valor": 50.04
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-02 22:30:05.986140",
    "valor": 49.44
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-03 22:30:05.986140",
    "valor": 12.24
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-04 22:30:05.986140",
    "valor": 8.59
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-05 22:30:05.986140",
    "valor": 43.88
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-06 22:30:05.986140",
    "valor": 34.01
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-07 22:30:05.986140",
    "valor": 27.53
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-08 22:30:05.986140",
    "valor": 13.22
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-09 22:30:05.986140",
    "valor": 91.57
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-10 22:30:05.986140",
    "valor": 80.24
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-11 22:30:05.986140",
    "valor": 56.77
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-12 22:30:05.986140",
    "valor": 90.57
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-13 22:30:05.986140",
    "valor": 94.96
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-14 22:30:05.986140",
    "valor": 65.51
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-15 22:30:05.986140",
    "valor": 29.26
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-16 22:30:05.986140",
    "valor": 8.62
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-17 22:30:05.986140",
    "valor": 73.06
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-18 22:30:05.986140",
    "valor": 47.35
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-19 22:30:05.986140",
    "valor": 63.64
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-20 22:30:05.986140",
    "valor": 87.45
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-21 22:30:05.986140",
    "valor": 21.33
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-22 22:30:05.986140",
    "valor": 57.68
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-23 22:30:05.986140",
    "valor": 62.13
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-24 22:30:05.986140",
    "valor": 49.26
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-25 22:30:05.986140",
    "valor": 13.21
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-26 22:30:05.986140",
    "valor": 36.32
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-27 22:30:05.986140",
    "valor": 35
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-28 22:30:05.986140",
    "valor": 65.31
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-29 22:30:05.986140",
    "valor": 82.2
  },
  {
    "id_sensor": 17,
    "data_hora": "2025-07-30 22:30:05.986140",
    "valor": 34.68
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-01 22:30:05.986362",
    "valor": 67.43
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-02 22:30:05.986362",
    "valor": 30.94
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-03 22:30:05.986362",
    "valor": 90.07
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-04 22:30:05.986362",
    "valor": 78.22
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-05 22:30:05.986362",
    "valor": 54.51
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-06 22:30:05.986362",
    "valor": 45.93
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-07 22:30:05.986362",
    "valor": 33.31
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-08 22:30:05.986362",
    "valor": 34.09
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-09 22:30:05.986362",
    "valor": 92.32
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-10 22:30:05.986362",
    "valor": 41.38
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-11 22:30:05.986362",
    "valor": 51.31
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-12 22:30:05.986362",
    "valor": 93.93
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-13 22:30:05.986362",
    "valor": 64.19
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-14 22:30:05.986362",
    "valor": 53.83
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-15 22:30:05.986362",
    "valor": 42.19
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-16 22:30:05.986362",
    "valor": 21.88
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-17 22:30:05.986362",
    "valor": 37.56
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-18 22:30:05.986362",
    "valor": 73.08
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-19 22:30:05.986362",
    "valor": 61.29
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-20 22:30:05.986362",
    "valor": 73.4
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-21 22:30:05.986362",
    "valor": 23.32
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-22 22:30:05.986362",
    "valor": 54.43
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-23 22:30:05.986362",
    "valor": 88.49
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-24 22:30:05.986362",
    "valor": 44.43
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-25 22:30:05.986362",
    "valor": 67.84
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-26 22:30:05.986362",
    "valor": 15.93
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-27 22:30:05.986362",
    "valor": 92.58
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-28 22:30:05.986362",
    "valor": 59.8
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-29 22:30:05.986362",
    "valor": 26.54
  },
  {
    "id_sensor": 18,
    "data_hora": "2025-07-30 22:30:05.986362",
    "valor": 19.25
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-01 22:30:05.986572",
    "valor": 54.58
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-02 22:30:05.986572",
    "valor": 54.7
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-03 22:30:05.986572",
    "valor": 13.39
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-04 22:30:05.986572",
    "valor": 94.3
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-05 22:30:05.986572",
    "valor": 87.16
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-06 22:30:05.986572",
    "valor": 46.53
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-07 22:30:05.986572",
    "valor": 15.57
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-08 22:30:05.986572",
    "valor": 79.89
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-09 22:30:05.986572",
    "valor": 49.85
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-10 22:30:05.986572",
    "valor": 69.49
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-11 22:30:05.986572",
    "valor": 50.8
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-12 22:30:05.986572",
    "valor": 29.61
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-13 22:30:05.986572",
    "valor": 80.13
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-14 22:30:05.986572",
    "valor": 93.22
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-15 22:30:05.986572",
    "valor": 26.94
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-16 22:30:05.986572",
    "valor": 54.61
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-17 22:30:05.986572",
    "valor": 39.52
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-18 22:30:05.986572",
    "valor": 87.97
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-19 22:30:05.986572",
    "valor": 50.74
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-20 22:30:05.986572",
    "valor": 84.14
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-21 22:30:05.986572",
    "valor": 82.76
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-22 22:30:05.986572",
    "valor": 29.86
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-23 22:30:05.986572",
    "valor": 76.1
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-24 22:30:05.986572",
    "valor": 42.34
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-25 22:30:05.986572",
    "valor": 89.08
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-26 22:30:05.986572",
    "valor": 50.7
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-27 22:30:05.986572",
    "valor": 78.85
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-28 22:30:05.986572",
    "valor": 30.46
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-29 22:30:05.986572",
    "valor": 31.87
  },
  {
    "id_sensor": 19,
    "data_hora": "2025-07-30 22:30:05.986572",
    "valor": 57.82
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-01 22:30:05.986789",
    "valor": 94.9
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-02 22:30:05.986789",
    "valor": 49.07
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-03 22:30:05.986789",
    "valor": 18.37
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-04 22:30:05.986789",
    "valor": 53.47
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-05 22:30:05.986789",
    "valor": 36.06
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-06 22:30:05.986789",
    "valor": 54.67
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-07 22:30:05.986789",
    "valor": 53.91
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-08 22:30:05.986789",
    "valor": 45.98
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-09 22:30:05.986789",
    "valor": 33.96
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-10 22:30:05.986789",
    "valor": 21.98
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-11 22:30:05.986789",
    "valor": 67.77
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-12 22:30:05.986789",
    "valor": 56.46
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-13 22:30:05.986789",
    "valor": 26.02
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-14 22:30:05.986789",
    "valor": 74.8
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-15 22:30:05.986789",
    "valor": 8.93
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-16 22:30:05.986789",
    "valor": 72.02
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-17 22:30:05.986789",
    "valor": 68.47
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-18 22:30:05.986789",
    "valor": 78.03
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-19 22:30:05.986789",
    "valor": 39.75
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-20 22:30:05.986789",
    "valor": 64.73
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-21 22:30:05.986789",
    "valor": 78.87
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-22 22:30:05.986789",
    "valor": 93.27
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-23 22:30:05.986789",
    "valor": 49.58
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-24 22:30:05.986789",
    "valor": 8.33
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-25 22:30:05.986789",
    "valor": 50.21
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-26 22:30:05.986789",
    "valor": 58.12
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-27 22:30:05.986789",
    "valor": 83.27
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-28 22:30:05.986789",
    "valor": 83.68
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-29 22:30:05.986789",
    "valor": 44.63
  },
  {
    "id_sensor": 20,
    "data_hora": "2025-07-30 22:30:05.986789",
    "valor": 52.34
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-01 22:30:05.986982",
    "valor": 46.12
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-02 22:30:05.986982",
    "valor": 70.02
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-03 22:30:05.986982",
    "valor": 41.9
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-04 22:30:05.986982",
    "valor": 63.93
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-05 22:30:05.986982",
    "valor": 18.89
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-06 22:30:05.986982",
    "valor": 47.25
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-07 22:30:05.986982",
    "valor": 92.23
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-08 22:30:05.986982",
    "valor": 35.47
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-09 22:30:05.986982",
    "valor": 67.34
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-10 22:30:05.986982",
    "valor": 63.49
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-11 22:30:05.986982",
    "valor": 81.66
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-12 22:30:05.986982",
    "valor": 81.71
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-13 22:30:05.986982",
    "valor": 82.34
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-14 22:30:05.986982",
    "valor": 39.2
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-15 22:30:05.986982",
    "valor": 33.5
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-16 22:30:05.986982",
    "valor": 69.68
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-17 22:30:05.986982",
    "valor": 73.35
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-18 22:30:05.986982",
    "valor": 83.51
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-19 22:30:05.986982",
    "valor": 8.23
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-20 22:30:05.986982",
    "valor": 11.16
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-21 22:30:05.986982",
    "valor": 61.8
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-22 22:30:05.986982",
    "valor": 87.88
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-23 22:30:05.986982",
    "valor": 94.77
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-24 22:30:05.986982",
    "valor": 72.21
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-25 22:30:05.986982",
    "valor": 44.06
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-26 22:30:05.986982",
    "valor": 13.86
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-27 22:30:05.986982",
    "valor": 62.04
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-28 22:30:05.986982",
    "valor": 83.53
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-29 22:30:05.986982",
    "valor": 44.93
  },
  {
    "id_sensor": 21,
    "data_hora": "2025-07-30 22:30:05.986982",
    "valor": 67.46
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-01 22:30:05.987173",
    "valor": 86.31
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-02 22:30:05.987173",
    "valor": 9.14
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-03 22:30:05.987173",
    "valor": 76.65
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-04 22:30:05.987173",
    "valor": 31.4
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-05 22:30:05.987173",
    "valor": 38.74
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-06 22:30:05.987173",
    "valor": 18.1
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-07 22:30:05.987173",
    "valor": 52.8
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-08 22:30:05.987173",
    "valor": 55.93
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-09 22:30:05.987173",
    "valor": 76.33
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-10 22:30:05.987173",
    "valor": 20.3
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-11 22:30:05.987173",
    "valor": 12.11
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-12 22:30:05.987173",
    "valor": 83.38
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-13 22:30:05.987173",
    "valor": 60.77
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-14 22:30:05.987173",
    "valor": 26.67
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-15 22:30:05.987173",
    "valor": 87.15
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-16 22:30:05.987173",
    "valor": 17.88
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-17 22:30:05.987173",
    "valor": 46.5
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-18 22:30:05.987173",
    "valor": 27.86
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-19 22:30:05.987173",
    "valor": 27.98
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-20 22:30:05.987173",
    "valor": 5.85
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-21 22:30:05.987173",
    "valor": 77.42
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-22 22:30:05.987173",
    "valor": 86.11
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-23 22:30:05.987173",
    "valor": 65.98
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-24 22:30:05.987173",
    "valor": 19.22
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-25 22:30:05.987173",
    "valor": 44.76
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-26 22:30:05.987173",
    "valor": 36.1
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-27 22:30:05.987173",
    "valor": 57.88
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-28 22:30:05.987173",
    "valor": 62.5
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-29 22:30:05.987173",
    "valor": 43.19
  },
  {
    "id_sensor": 22,
    "data_hora": "2025-07-30 22:30:05.987173",
    "valor": 27.51
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-01 22:30:05.987404",
    "valor": 81.08
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-02 22:30:05.987404",
    "valor": 22.93
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-03 22:30:05.987404",
    "valor": 39.62
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-04 22:30:05.987404",
    "valor": 48.49
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-05 22:30:05.987404",
    "valor": 26.35
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-06 22:30:05.987404",
    "valor": 56.47
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-07 22:30:05.987404",
    "valor": 56.73
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-08 22:30:05.987404",
    "valor": 94.34
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-09 22:30:05.987404",
    "valor": 31.57
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-10 22:30:05.987404",
    "valor": 93.02
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-11 22:30:05.987404",
    "valor": 64.24
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-12 22:30:05.987404",
    "valor": 29.7
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-13 22:30:05.987404",
    "valor": 55.93
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-14 22:30:05.987404",
    "valor": 66.72
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-15 22:30:05.987404",
    "valor": 72.02
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-16 22:30:05.987404",
    "valor": 9.41
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-17 22:30:05.987404",
    "valor": 59.58
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-18 22:30:05.987404",
    "valor": 49.71
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-19 22:30:05.987404",
    "valor": 86.37
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-20 22:30:05.987404",
    "valor": 30.76
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-21 22:30:05.987404",
    "valor": 76.9
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-22 22:30:05.987404",
    "valor": 59.64
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-23 22:30:05.987404",
    "valor": 36.71
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-24 22:30:05.987404",
    "valor": 62.3
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-25 22:30:05.987404",
    "valor": 60.88
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-26 22:30:05.987404",
    "valor": 66
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-27 22:30:05.987404",
    "valor": 69.88
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-28 22:30:05.987404",
    "valor": 64.33
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-29 22:30:05.987404",
    "valor": 80.45
  },
  {
    "id_sensor": 23,
    "data_hora": "2025-07-30 22:30:05.987404",
    "valor": 61.54
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-01 22:30:05.987607",
    "valor": 86.31
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-02 22:30:05.987607",
    "valor": 63.17
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-03 22:30:05.987607",
    "valor": 32.8
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-04 22:30:05.987607",
    "valor": 44.67
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-05 22:30:05.987607",
    "valor": 57.16
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-06 22:30:05.987607",
    "valor": 70.91
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-07 22:30:05.987607",
    "valor": 13.11
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-08 22:30:05.987607",
    "valor": 31.56
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-09 22:30:05.987607",
    "valor": 72.27
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-10 22:30:05.987607",
    "valor": 20.81
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-11 22:30:05.987607",
    "valor": 16.89
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-12 22:30:05.987607",
    "valor": 53.55
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-13 22:30:05.987607",
    "valor": 92.43
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-14 22:30:05.987607",
    "valor": 52.78
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-15 22:30:05.987607",
    "valor": 87.21
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-16 22:30:05.987607",
    "valor": 79.74
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-17 22:30:05.987607",
    "valor": 28.13
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-18 22:30:05.987607",
    "valor": 79.22
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-19 22:30:05.987607",
    "valor": 48.37
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-20 22:30:05.987607",
    "valor": 77.58
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-21 22:30:05.987607",
    "valor": 72.19
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-22 22:30:05.987607",
    "valor": 35.48
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-23 22:30:05.987607",
    "valor": 15.37
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-24 22:30:05.987607",
    "valor": 91.66
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-25 22:30:05.987607",
    "valor": 17.67
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-26 22:30:05.987607",
    "valor": 91.99
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-27 22:30:05.987607",
    "valor": 82.41
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-28 22:30:05.987607",
    "valor": 70.18
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-29 22:30:05.987607",
    "valor": 93.19
  },
  {
    "id_sensor": 24,
    "data_hora": "2025-07-30 22:30:05.987607",
    "valor": 92.05
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-01 22:30:05.987802",
    "valor": 77.41
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-02 22:30:05.987802",
    "valor": 37.92
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-03 22:30:05.987802",
    "valor": 76.16
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-04 22:30:05.987802",
    "valor": 6.25
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-05 22:30:05.987802",
    "valor": 53.29
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-06 22:30:05.987802",
    "valor": 45.93
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-07 22:30:05.987802",
    "valor": 65.55
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-08 22:30:05.987802",
    "valor": 65.51
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-09 22:30:05.987802",
    "valor": 57.61
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-10 22:30:05.987802",
    "valor": 79.02
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-11 22:30:05.987802",
    "valor": 89.63
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-12 22:30:05.987802",
    "valor": 14.75
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-13 22:30:05.987802",
    "valor": 26.04
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-14 22:30:05.987802",
    "valor": 7.25
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-15 22:30:05.987802",
    "valor": 84.58
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-16 22:30:05.987802",
    "valor": 55.53
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-17 22:30:05.987802",
    "valor": 87.37
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-18 22:30:05.987802",
    "valor": 24.92
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-19 22:30:05.987802",
    "valor": 10.69
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-20 22:30:05.987802",
    "valor": 79.15
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-21 22:30:05.987802",
    "valor": 86.84
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-22 22:30:05.987802",
    "valor": 32.2
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-23 22:30:05.987802",
    "valor": 41.75
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-24 22:30:05.987802",
    "valor": 17.58
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-25 22:30:05.987802",
    "valor": 90.16
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-26 22:30:05.987802",
    "valor": 32.39
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-27 22:30:05.987802",
    "valor": 49.34
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-28 22:30:05.987802",
    "valor": 13.75
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-29 22:30:05.987802",
    "valor": 84.85
  },
  {
    "id_sensor": 25,
    "data_hora": "2025-07-30 22:30:05.987802",
    "valor": 17.21
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-01 22:30:05.987992",
    "valor": 45.83
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-02 22:30:05.987992",
    "valor": 65.34
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-03 22:30:05.987992",
    "valor": 71.88
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-04 22:30:05.987992",
    "valor": 90.14
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-05 22:30:05.987992",
    "valor": 42.72
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-06 22:30:05.987992",
    "valor": 71.8
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-07 22:30:05.987992",
    "valor": 18.91
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-08 22:30:05.987992",
    "valor": 42.34
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-09 22:30:05.987992",
    "valor": 13.91
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-10 22:30:05.987992",
    "valor": 49.04
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-11 22:30:05.987992",
    "valor": 41.73
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-12 22:30:05.987992",
    "valor": 90.64
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-13 22:30:05.987992",
    "valor": 7.94
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-14 22:30:05.987992",
    "valor": 38.35
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-15 22:30:05.987992",
    "valor": 44.9
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-16 22:30:05.987992",
    "valor": 90.55
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-17 22:30:05.987992",
    "valor": 81.99
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-18 22:30:05.987992",
    "valor": 13.94
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-19 22:30:05.987992",
    "valor": 66.71
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-20 22:30:05.987992",
    "valor": 54
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-21 22:30:05.987992",
    "valor": 93.01
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-22 22:30:05.987992",
    "valor": 37.28
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-23 22:30:05.987992",
    "valor": 40.83
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-24 22:30:05.987992",
    "valor": 22.08
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-25 22:30:05.987992",
    "valor": 15.99
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-26 22:30:05.987992",
    "valor": 81.32
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-27 22:30:05.987992",
    "valor": 45.92
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-28 22:30:05.987992",
    "valor": 64.65
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-29 22:30:05.987992",
    "valor": 62.75
  },
  {
    "id_sensor": 26,
    "data_hora": "2025-07-30 22:30:05.987992",
    "valor": 58.74
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-01 22:30:05.988182",
    "valor": 6.92
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-02 22:30:05.988182",
    "valor": 75.81
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-03 22:30:05.988182",
    "valor": 26.92
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-04 22:30:05.988182",
    "valor": 16.33
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-05 22:30:05.988182",
    "valor": 55.81
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-06 22:30:05.988182",
    "valor": 11.17
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-07 22:30:05.988182",
    "valor": 73.86
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-08 22:30:05.988182",
    "valor": 23.64
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-09 22:30:05.988182",
    "valor": 24.44
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-10 22:30:05.988182",
    "valor": 83.27
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-11 22:30:05.988182",
    "valor": 34.57
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-12 22:30:05.988182",
    "valor": 18.28
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-13 22:30:05.988182",
    "valor": 86.05
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-14 22:30:05.988182",
    "valor": 5.26
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-15 22:30:05.988182",
    "valor": 82.26
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-16 22:30:05.988182",
    "valor": 18.02
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-17 22:30:05.988182",
    "valor": 16.7
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-18 22:30:05.988182",
    "valor": 27.56
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-19 22:30:05.988182",
    "valor": 20.7
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-20 22:30:05.988182",
    "valor": 64.5
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-21 22:30:05.988182",
    "valor": 7.32
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-22 22:30:05.988182",
    "valor": 6.34
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-23 22:30:05.988182",
    "valor": 76.1
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-24 22:30:05.988182",
    "valor": 26.41
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-25 22:30:05.988182",
    "valor": 34.14
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-26 22:30:05.988182",
    "valor": 20.68
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-27 22:30:05.988182",
    "valor": 9.72
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-28 22:30:05.988182",
    "valor": 71.75
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-29 22:30:05.988182",
    "valor": 52.35
  },
  {
    "id_sensor": 27,
    "data_hora": "2025-07-30 22:30:05.988182",
    "valor": 72.11
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-01 22:30:05.988411",
    "valor": 47.86
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-02 22:30:05.988411",
    "valor": 75.02
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-03 22:30:05.988411",
    "valor": 51.19
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-04 22:30:05.988411",
    "valor": 14.81
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-05 22:30:05.988411",
    "valor": 50.35
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-06 22:30:05.988411",
    "valor": 90.09
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-07 22:30:05.988411",
    "valor": 8.9
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-08 22:30:05.988411",
    "valor": 75.49
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-09 22:30:05.988411",
    "valor": 83.03
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-10 22:30:05.988411",
    "valor": 51.93
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-11 22:30:05.988411",
    "valor": 46.22
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-12 22:30:05.988411",
    "valor": 91.76
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-13 22:30:05.988411",
    "valor": 10.47
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-14 22:30:05.988411",
    "valor": 48.11
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-15 22:30:05.988411",
    "valor": 41.15
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-16 22:30:05.988411",
    "valor": 66.75
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-17 22:30:05.988411",
    "valor": 49.12
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-18 22:30:05.988411",
    "valor": 86.87
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-19 22:30:05.988411",
    "valor": 11.61
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-20 22:30:05.988411",
    "valor": 12.27
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-21 22:30:05.988411",
    "valor": 59.75
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-22 22:30:05.988411",
    "valor": 10.91
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-23 22:30:05.988411",
    "valor": 29.75
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-24 22:30:05.988411",
    "valor": 61.98
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-25 22:30:05.988411",
    "valor": 54.35
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-26 22:30:05.988411",
    "valor": 34.27
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-27 22:30:05.988411",
    "valor": 94.52
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-28 22:30:05.988411",
    "valor": 52.75
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-29 22:30:05.988411",
    "valor": 45.83
  },
  {
    "id_sensor": 28,
    "data_hora": "2025-07-30 22:30:05.988411",
    "valor": 59.49
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-01 22:30:05.988610",
    "valor": 13.93
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-02 22:30:05.988610",
    "valor": 68.16
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-03 22:30:05.988610",
    "valor": 81.75
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-04 22:30:05.988610",
    "valor": 63.58
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-05 22:30:05.988610",
    "valor": 74.21
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-06 22:30:05.988610",
    "valor": 69.88
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-07 22:30:05.988610",
    "valor": 24.35
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-08 22:30:05.988610",
    "valor": 45.64
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-09 22:30:05.988610",
    "valor": 25.56
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-10 22:30:05.988610",
    "valor": 35.5
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-11 22:30:05.988610",
    "valor": 45.81
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-12 22:30:05.988610",
    "valor": 42.44
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-13 22:30:05.988610",
    "valor": 13.56
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-14 22:30:05.988610",
    "valor": 43.41
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-15 22:30:05.988610",
    "valor": 64.86
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-16 22:30:05.988610",
    "valor": 38.69
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-17 22:30:05.988610",
    "valor": 18.74
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-18 22:30:05.988610",
    "valor": 88.07
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-19 22:30:05.988610",
    "valor": 11.04
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-20 22:30:05.988610",
    "valor": 79.86
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-21 22:30:05.988610",
    "valor": 13.39
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-22 22:30:05.988610",
    "valor": 13.69
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-23 22:30:05.988610",
    "valor": 71.49
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-24 22:30:05.988610",
    "valor": 78.06
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-25 22:30:05.988610",
    "valor": 55.07
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-26 22:30:05.988610",
    "valor": 57.78
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-27 22:30:05.988610",
    "valor": 55.54
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-28 22:30:05.988610",
    "valor": 34.67
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-29 22:30:05.988610",
    "valor": 16
  },
  {
    "id_sensor": 29,
    "data_hora": "2025-07-30 22:30:05.988610",
    "valor": 36.82
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-01 22:30:05.988803",
    "valor": 64.88
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-02 22:30:05.988803",
    "valor": 72.53
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-03 22:30:05.988803",
    "valor": 83.13
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-04 22:30:05.988803",
    "valor": 69.9
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-05 22:30:05.988803",
    "valor": 92.16
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-06 22:30:05.988803",
    "valor": 59.04
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-07 22:30:05.988803",
    "valor": 36.65
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-08 22:30:05.988803",
    "valor": 57.01
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-09 22:30:05.988803",
    "valor": 24.15
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-10 22:30:05.988803",
    "valor": 64.11
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-11 22:30:05.988803",
    "valor": 25.18
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-12 22:30:05.988803",
    "valor": 14.74
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-13 22:30:05.988803",
    "valor": 81.08
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-14 22:30:05.988803",
    "valor": 38.08
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-15 22:30:05.988803",
    "valor": 73.63
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-16 22:30:05.988803",
    "valor": 56.67
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-17 22:30:05.988803",
    "valor": 77.65
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-18 22:30:05.988803",
    "valor": 81.06
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-19 22:30:05.988803",
    "valor": 92.71
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-20 22:30:05.988803",
    "valor": 78.66
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-21 22:30:05.988803",
    "valor": 60.22
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-22 22:30:05.988803",
    "valor": 62.84
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-23 22:30:05.988803",
    "valor": 7.36
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-24 22:30:05.988803",
    "valor": 88.62
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-25 22:30:05.988803",
    "valor": 79.65
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-26 22:30:05.988803",
    "valor": 29.07
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-27 22:30:05.988803",
    "valor": 21.24
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-28 22:30:05.988803",
    "valor": 68.24
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-29 22:30:05.988803",
    "valor": 32.81
  },
  {
    "id_sensor": 30,
    "data_hora": "2025-07-30 22:30:05.988803",
    "valor": 35.58
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-01 22:30:05.988993",
    "valor": 5.55
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-02 22:30:05.988993",
    "valor": 83.29
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-03 22:30:05.988993",
    "valor": 55.97
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-04 22:30:05.988993",
    "valor": 41.07
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-05 22:30:05.988993",
    "valor": 17.77
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-06 22:30:05.988993",
    "valor": 61.99
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-07 22:30:05.988993",
    "valor": 7.76
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-08 22:30:05.988993",
    "valor": 72.15
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-09 22:30:05.988993",
    "valor": 24.36
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-10 22:30:05.988993",
    "valor": 42.78
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-11 22:30:05.988993",
    "valor": 35.68
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-12 22:30:05.988993",
    "valor": 38.3
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-13 22:30:05.988993",
    "valor": 69.94
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-14 22:30:05.988993",
    "valor": 74.92
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-15 22:30:05.988993",
    "valor": 56.08
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-16 22:30:05.988993",
    "valor": 12.65
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-17 22:30:05.988993",
    "valor": 9.73
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-18 22:30:05.988993",
    "valor": 19.17
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-19 22:30:05.988993",
    "valor": 60.61
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-20 22:30:05.988993",
    "valor": 65.66
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-21 22:30:05.988993",
    "valor": 29.49
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-22 22:30:05.988993",
    "valor": 64.57
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-23 22:30:05.988993",
    "valor": 48.71
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-24 22:30:05.988993",
    "valor": 44.78
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-25 22:30:05.988993",
    "valor": 29.59
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-26 22:30:05.988993",
    "valor": 72.94
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-27 22:30:05.988993",
    "valor": 15.24
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-28 22:30:05.988993",
    "valor": 43.69
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-29 22:30:05.988993",
    "valor": 30.49
  },
  {
    "id_sensor": 31,
    "data_hora": "2025-07-30 22:30:05.988993",
    "valor": 66.06
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-01 22:30:05.989201",
    "valor": 48.8
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-02 22:30:05.989201",
    "valor": 65.04
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-03 22:30:05.989201",
    "valor": 9.09
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-04 22:30:05.989201",
    "valor": 40.57
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-05 22:30:05.989201",
    "valor": 58.94
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-06 22:30:05.989201",
    "valor": 5.69
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-07 22:30:05.989201",
    "valor": 32.13
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-08 22:30:05.989201",
    "valor": 24.01
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-09 22:30:05.989201",
    "valor": 17.35
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-10 22:30:05.989201",
    "valor": 28
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-11 22:30:05.989201",
    "valor": 34.53
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-12 22:30:05.989201",
    "valor": 5.7
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-13 22:30:05.989201",
    "valor": 72.23
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-14 22:30:05.989201",
    "valor": 20.81
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-15 22:30:05.989201",
    "valor": 39.22
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-16 22:30:05.989201",
    "valor": 68.33
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-17 22:30:05.989201",
    "valor": 50.02
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-18 22:30:05.989201",
    "valor": 80
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-19 22:30:05.989201",
    "valor": 77.56
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-20 22:30:05.989201",
    "valor": 11.49
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-21 22:30:05.989201",
    "valor": 82.56
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-22 22:30:05.989201",
    "valor": 8.81
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-23 22:30:05.989201",
    "valor": 6.69
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-24 22:30:05.989201",
    "valor": 87.9
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-25 22:30:05.989201",
    "valor": 82.59
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-26 22:30:05.989201",
    "valor": 56.82
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-27 22:30:05.989201",
    "valor": 56.61
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-28 22:30:05.989201",
    "valor": 68.85
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-29 22:30:05.989201",
    "valor": 42.59
  },
  {
    "id_sensor": 32,
    "data_hora": "2025-07-30 22:30:05.989201",
    "valor": 15.37
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-01 22:30:05.989416",
    "valor": 6.88
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-02 22:30:05.989416",
    "valor": 34.23
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-03 22:30:05.989416",
    "valor": 77.12
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-04 22:30:05.989416",
    "valor": 60.63
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-05 22:30:05.989416",
    "valor": 79.88
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-06 22:30:05.989416",
    "valor": 87.78
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-07 22:30:05.989416",
    "valor": 12.93
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-08 22:30:05.989416",
    "valor": 81
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-09 22:30:05.989416",
    "valor": 26.9
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-10 22:30:05.989416",
    "valor": 58
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-11 22:30:05.989416",
    "valor": 52.16
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-12 22:30:05.989416",
    "valor": 40.62
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-13 22:30:05.989416",
    "valor": 32.92
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-14 22:30:05.989416",
    "valor": 35.56
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-15 22:30:05.989416",
    "valor": 34.98
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-16 22:30:05.989416",
    "valor": 20.13
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-17 22:30:05.989416",
    "valor": 50.94
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-18 22:30:05.989416",
    "valor": 15.26
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-19 22:30:05.989416",
    "valor": 50.9
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-20 22:30:05.989416",
    "valor": 86.53
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-21 22:30:05.989416",
    "valor": 36.44
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-22 22:30:05.989416",
    "valor": 70.46
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-23 22:30:05.989416",
    "valor": 78.71
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-24 22:30:05.989416",
    "valor": 78.35
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-25 22:30:05.989416",
    "valor": 26.26
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-26 22:30:05.989416",
    "valor": 18.18
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-27 22:30:05.989416",
    "valor": 22.75
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-28 22:30:05.989416",
    "valor": 59.22
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-29 22:30:05.989416",
    "valor": 73.42
  },
  {
    "id_sensor": 33,
    "data_hora": "2025-07-30 22:30:05.989416",
    "valor": 64
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-01 22:30:05.989613",
    "valor": 20.94
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-02 22:30:05.989613",
    "valor": 74.56
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-03 22:30:05.989613",
    "valor": 49.47
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-04 22:30:05.989613",
    "valor": 72.9
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-05 22:30:05.989613",
    "valor": 73.39
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-06 22:30:05.989613",
    "valor": 45.4
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-07 22:30:05.989613",
    "valor": 88.17
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-08 22:30:05.989613",
    "valor": 55.8
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-09 22:30:05.989613",
    "valor": 62.18
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-10 22:30:05.989613",
    "valor": 61.21
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-11 22:30:05.989613",
    "valor": 82.78
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-12 22:30:05.989613",
    "valor": 61.45
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-13 22:30:05.989613",
    "valor": 18.59
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-14 22:30:05.989613",
    "valor": 11.15
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-15 22:30:05.989613",
    "valor": 44.8
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-16 22:30:05.989613",
    "valor": 32.25
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-17 22:30:05.989613",
    "valor": 29.72
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-18 22:30:05.989613",
    "valor": 10.06
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-19 22:30:05.989613",
    "valor": 50.66
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-20 22:30:05.989613",
    "valor": 32.94
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-21 22:30:05.989613",
    "valor": 45.67
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-22 22:30:05.989613",
    "valor": 10.12
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-23 22:30:05.989613",
    "valor": 79.85
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-24 22:30:05.989613",
    "valor": 11.91
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-25 22:30:05.989613",
    "valor": 82.78
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-26 22:30:05.989613",
    "valor": 81.98
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-27 22:30:05.989613",
    "valor": 60.35
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-28 22:30:05.989613",
    "valor": 50.64
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-29 22:30:05.989613",
    "valor": 46.64
  },
  {
    "id_sensor": 34,
    "data_hora": "2025-07-30 22:30:05.989613",
    "valor": 54.89
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-01 22:30:05.989810",
    "valor": 76.26
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-02 22:30:05.989810",
    "valor": 85.63
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-03 22:30:05.989810",
    "valor": 45.48
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-04 22:30:05.989810",
    "valor": 77.88
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-05 22:30:05.989810",
    "valor": 63.67
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-06 22:30:05.989810",
    "valor": 33.94
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-07 22:30:05.989810",
    "valor": 47.81
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-08 22:30:05.989810",
    "valor": 18.58
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-09 22:30:05.989810",
    "valor": 10.57
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-10 22:30:05.989810",
    "valor": 14.32
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-11 22:30:05.989810",
    "valor": 85.92
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-12 22:30:05.989810",
    "valor": 35.91
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-13 22:30:05.989810",
    "valor": 69.29
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-14 22:30:05.989810",
    "valor": 50.41
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-15 22:30:05.989810",
    "valor": 20.53
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-16 22:30:05.989810",
    "valor": 27.3
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-17 22:30:05.989810",
    "valor": 44.4
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-18 22:30:05.989810",
    "valor": 44.55
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-19 22:30:05.989810",
    "valor": 52.05
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-20 22:30:05.989810",
    "valor": 19.29
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-21 22:30:05.989810",
    "valor": 38.56
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-22 22:30:05.989810",
    "valor": 30.46
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-23 22:30:05.989810",
    "valor": 41.79
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-24 22:30:05.989810",
    "valor": 35.45
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-25 22:30:05.989810",
    "valor": 58.81
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-26 22:30:05.989810",
    "valor": 76.03
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-27 22:30:05.989810",
    "valor": 63.26
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-28 22:30:05.989810",
    "valor": 10.93
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-29 22:30:05.989810",
    "valor": 13.51
  },
  {
    "id_sensor": 35,
    "data_hora": "2025-07-30 22:30:05.989810",
    "valor": 66.05
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-01 22:30:05.990002",
    "valor": 30.57
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-02 22:30:05.990002",
    "valor": 70.14
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-03 22:30:05.990002",
    "valor": 64.09
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-04 22:30:05.990002",
    "valor": 86.57
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-05 22:30:05.990002",
    "valor": 83.6
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-06 22:30:05.990002",
    "valor": 35
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-07 22:30:05.990002",
    "valor": 57.45
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-08 22:30:05.990002",
    "valor": 17.73
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-09 22:30:05.990002",
    "valor": 36.48
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-10 22:30:05.990002",
    "valor": 92.09
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-11 22:30:05.990002",
    "valor": 67.86
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-12 22:30:05.990002",
    "valor": 40.28
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-13 22:30:05.990002",
    "valor": 58.55
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-14 22:30:05.990002",
    "valor": 89.42
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-15 22:30:05.990002",
    "valor": 32.86
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-16 22:30:05.990002",
    "valor": 38.9
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-17 22:30:05.990002",
    "valor": 76.25
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-18 22:30:05.990002",
    "valor": 78.19
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-19 22:30:05.990002",
    "valor": 65.31
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-20 22:30:05.990002",
    "valor": 79.61
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-21 22:30:05.990002",
    "valor": 71.49
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-22 22:30:05.990002",
    "valor": 66.69
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-23 22:30:05.990002",
    "valor": 52.38
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-24 22:30:05.990002",
    "valor": 63.14
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-25 22:30:05.990002",
    "valor": 43.11
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-26 22:30:05.990002",
    "valor": 37.56
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-27 22:30:05.990002",
    "valor": 37.63
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-28 22:30:05.990002",
    "valor": 21.22
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-29 22:30:05.990002",
    "valor": 24.28
  },
  {
    "id_sensor": 36,
    "data_hora": "2025-07-30 22:30:05.990002",
    "valor": 90.29
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-01 22:30:05.990191",
    "valor": 48.76
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-02 22:30:05.990191",
    "valor": 25.39
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-03 22:30:05.990191",
    "valor": 17.38
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-04 22:30:05.990191",
    "valor": 11.94
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-05 22:30:05.990191",
    "valor": 81
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-06 22:30:05.990191",
    "valor": 14.1
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-07 22:30:05.990191",
    "valor": 74.38
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-08 22:30:05.990191",
    "valor": 80.16
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-09 22:30:05.990191",
    "valor": 84.53
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-10 22:30:05.990191",
    "valor": 8.4
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-11 22:30:05.990191",
    "valor": 35.31
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-12 22:30:05.990191",
    "valor": 73.97
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-13 22:30:05.990191",
    "valor": 16.79
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-14 22:30:05.990191",
    "valor": 38.9
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-15 22:30:05.990191",
    "valor": 19.6
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-16 22:30:05.990191",
    "valor": 79.82
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-17 22:30:05.990191",
    "valor": 74.4
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-18 22:30:05.990191",
    "valor": 77.81
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-19 22:30:05.990191",
    "valor": 19.9
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-20 22:30:05.990191",
    "valor": 44.39
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-21 22:30:05.990191",
    "valor": 41.98
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-22 22:30:05.990191",
    "valor": 65.87
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-23 22:30:05.990191",
    "valor": 26.38
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-24 22:30:05.990191",
    "valor": 44.98
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-25 22:30:05.990191",
    "valor": 30.64
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-26 22:30:05.990191",
    "valor": 72.37
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-27 22:30:05.990191",
    "valor": 45.4
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-28 22:30:05.990191",
    "valor": 53.06
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-29 22:30:05.990191",
    "valor": 32.85
  },
  {
    "id_sensor": 37,
    "data_hora": "2025-07-30 22:30:05.990191",
    "valor": 77.78
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-01 22:30:05.990419",
    "valor": 47.21
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-02 22:30:05.990419",
    "valor": 80.16
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-03 22:30:05.990419",
    "valor": 38.11
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-04 22:30:05.990419",
    "valor": 90.24
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-05 22:30:05.990419",
    "valor": 93.6
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-06 22:30:05.990419",
    "valor": 46.55
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-07 22:30:05.990419",
    "valor": 30.36
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-08 22:30:05.990419",
    "valor": 39.37
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-09 22:30:05.990419",
    "valor": 52.47
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-10 22:30:05.990419",
    "valor": 91.96
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-11 22:30:05.990419",
    "valor": 78.52
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-12 22:30:05.990419",
    "valor": 77.11
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-13 22:30:05.990419",
    "valor": 17.46
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-14 22:30:05.990419",
    "valor": 27.5
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-15 22:30:05.990419",
    "valor": 62.71
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-16 22:30:05.990419",
    "valor": 83.67
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-17 22:30:05.990419",
    "valor": 54.91
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-18 22:30:05.990419",
    "valor": 14.23
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-19 22:30:05.990419",
    "valor": 81.13
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-20 22:30:05.990419",
    "valor": 81.6
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-21 22:30:05.990419",
    "valor": 30.66
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-22 22:30:05.990419",
    "valor": 73.68
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-23 22:30:05.990419",
    "valor": 29.55
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-24 22:30:05.990419",
    "valor": 86.48
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-25 22:30:05.990419",
    "valor": 18.26
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-26 22:30:05.990419",
    "valor": 44.37
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-27 22:30:05.990419",
    "valor": 90.18
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-28 22:30:05.990419",
    "valor": 24.98
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-29 22:30:05.990419",
    "valor": 45.6
  },
  {
    "id_sensor": 38,
    "data_hora": "2025-07-30 22:30:05.990419",
    "valor": 36.46
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-01 22:30:05.990614",
    "valor": 7.4
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-02 22:30:05.990614",
    "valor": 9.79
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-03 22:30:05.990614",
    "valor": 50.18
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-04 22:30:05.990614",
    "valor": 26.22
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-05 22:30:05.990614",
    "valor": 94.51
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-06 22:30:05.990614",
    "valor": 38.74
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-07 22:30:05.990614",
    "valor": 7.54
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-08 22:30:05.990614",
    "valor": 88.77
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-09 22:30:05.990614",
    "valor": 80.53
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-10 22:30:05.990614",
    "valor": 63.5
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-11 22:30:05.990614",
    "valor": 76.22
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-12 22:30:05.990614",
    "valor": 17.38
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-13 22:30:05.990614",
    "valor": 30.82
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-14 22:30:05.990614",
    "valor": 79.68
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-15 22:30:05.990614",
    "valor": 67.65
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-16 22:30:05.990614",
    "valor": 17.49
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-17 22:30:05.990614",
    "valor": 68.5
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-18 22:30:05.990614",
    "valor": 45.37
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-19 22:30:05.990614",
    "valor": 5.47
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-20 22:30:05.990614",
    "valor": 12.13
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-21 22:30:05.990614",
    "valor": 28.03
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-22 22:30:05.990614",
    "valor": 80.15
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-23 22:30:05.990614",
    "valor": 54.39
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-24 22:30:05.990614",
    "valor": 70.45
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-25 22:30:05.990614",
    "valor": 52.5
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-26 22:30:05.990614",
    "valor": 15.01
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-27 22:30:05.990614",
    "valor": 30.93
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-28 22:30:05.990614",
    "valor": 32.1
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-29 22:30:05.990614",
    "valor": 9.3
  },
  {
    "id_sensor": 39,
    "data_hora": "2025-07-30 22:30:05.990614",
    "valor": 42.78
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-01 22:30:05.990806",
    "valor": 76.45
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-02 22:30:05.990806",
    "valor": 46.14
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-03 22:30:05.990806",
    "valor": 14.98
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-04 22:30:05.990806",
    "valor": 86.46
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-05 22:30:05.990806",
    "valor": 58.71
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-06 22:30:05.990806",
    "valor": 6.48
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-07 22:30:05.990806",
    "valor": 51.38
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-08 22:30:05.990806",
    "valor": 26.77
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-09 22:30:05.990806",
    "valor": 17.92
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-10 22:30:05.990806",
    "valor": 43.63
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-11 22:30:05.990806",
    "valor": 60.33
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-12 22:30:05.990806",
    "valor": 26.65
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-13 22:30:05.990806",
    "valor": 42.49
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-14 22:30:05.990806",
    "valor": 64.79
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-15 22:30:05.990806",
    "valor": 12.71
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-16 22:30:05.990806",
    "valor": 92.72
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-17 22:30:05.990806",
    "valor": 11.09
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-18 22:30:05.990806",
    "valor": 52.35
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-19 22:30:05.990806",
    "valor": 50.66
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-20 22:30:05.990806",
    "valor": 93.95
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-21 22:30:05.990806",
    "valor": 54.87
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-22 22:30:05.990806",
    "valor": 40.14
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-23 22:30:05.990806",
    "valor": 47.31
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-24 22:30:05.990806",
    "valor": 62.21
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-25 22:30:05.990806",
    "valor": 93.29
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-26 22:30:05.990806",
    "valor": 27.83
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-27 22:30:05.990806",
    "valor": 6.46
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-28 22:30:05.990806",
    "valor": 75.97
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-29 22:30:05.990806",
    "valor": 36.03
  },
  {
    "id_sensor": 40,
    "data_hora": "2025-07-30 22:30:05.990806",
    "valor": 70.96
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-01 22:30:05.990995",
    "valor": 61.54
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-02 22:30:05.990995",
    "valor": 74.44
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-03 22:30:05.990995",
    "valor": 71.17
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-04 22:30:05.990995",
    "valor": 34.93
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-05 22:30:05.990995",
    "valor": 8.99
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-06 22:30:05.990995",
    "valor": 54.14
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-07 22:30:05.990995",
    "valor": 78.22
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-08 22:30:05.990995",
    "valor": 20.76
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-09 22:30:05.990995",
    "valor": 75.12
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-10 22:30:05.990995",
    "valor": 46.82
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-11 22:30:05.990995",
    "valor": 67.59
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-12 22:30:05.990995",
    "valor": 61.86
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-13 22:30:05.990995",
    "valor": 78.03
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-14 22:30:05.990995",
    "valor": 10.68
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-15 22:30:05.990995",
    "valor": 74.86
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-16 22:30:05.990995",
    "valor": 46.19
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-17 22:30:05.990995",
    "valor": 31.41
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-18 22:30:05.990995",
    "valor": 8.94
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-19 22:30:05.990995",
    "valor": 22.95
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-20 22:30:05.990995",
    "valor": 8.77
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-21 22:30:05.990995",
    "valor": 89
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-22 22:30:05.990995",
    "valor": 51.38
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-23 22:30:05.990995",
    "valor": 94.02
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-24 22:30:05.990995",
    "valor": 53.87
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-25 22:30:05.990995",
    "valor": 27.8
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-26 22:30:05.990995",
    "valor": 72.8
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-27 22:30:05.990995",
    "valor": 22.2
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-28 22:30:05.990995",
    "valor": 37.13
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-29 22:30:05.990995",
    "valor": 75.28
  },
  {
    "id_sensor": 41,
    "data_hora": "2025-07-30 22:30:05.990995",
    "valor": 82.92
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-01 22:30:05.991187",
    "valor": 34.87
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-02 22:30:05.991187",
    "valor": 16.2
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-03 22:30:05.991187",
    "valor": 38.12
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-04 22:30:05.991187",
    "valor": 85.05
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-05 22:30:05.991187",
    "valor": 71.9
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-06 22:30:05.991187",
    "valor": 85.52
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-07 22:30:05.991187",
    "valor": 39.8
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-08 22:30:05.991187",
    "valor": 92.64
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-09 22:30:05.991187",
    "valor": 49.66
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-10 22:30:05.991187",
    "valor": 49.78
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-11 22:30:05.991187",
    "valor": 88.19
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-12 22:30:05.991187",
    "valor": 51.73
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-13 22:30:05.991187",
    "valor": 77.1
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-14 22:30:05.991187",
    "valor": 70.44
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-15 22:30:05.991187",
    "valor": 12.1
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-16 22:30:05.991187",
    "valor": 59.22
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-17 22:30:05.991187",
    "valor": 79.01
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-18 22:30:05.991187",
    "valor": 54.09
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-19 22:30:05.991187",
    "valor": 33.91
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-20 22:30:05.991187",
    "valor": 12.21
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-21 22:30:05.991187",
    "valor": 64.48
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-22 22:30:05.991187",
    "valor": 32.58
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-23 22:30:05.991187",
    "valor": 59.24
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-24 22:30:05.991187",
    "valor": 43.35
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-25 22:30:05.991187",
    "valor": 67.08
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-26 22:30:05.991187",
    "valor": 36.64
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-27 22:30:05.991187",
    "valor": 8.81
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-28 22:30:05.991187",
    "valor": 83.3
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-29 22:30:05.991187",
    "valor": 36.73
  },
  {
    "id_sensor": 42,
    "data_hora": "2025-07-30 22:30:05.991187",
    "valor": 94.83
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-01 22:30:05.991436",
    "valor": 29.71
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-02 22:30:05.991436",
    "valor": 93.2
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-03 22:30:05.991436",
    "valor": 90.31
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-04 22:30:05.991436",
    "valor": 11.75
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-05 22:30:05.991436",
    "valor": 62.38
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-06 22:30:05.991436",
    "valor": 37.7
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-07 22:30:05.991436",
    "valor": 77.1
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-08 22:30:05.991436",
    "valor": 66.15
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-09 22:30:05.991436",
    "valor": 90.75
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-10 22:30:05.991436",
    "valor": 17.85
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-11 22:30:05.991436",
    "valor": 59.68
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-12 22:30:05.991436",
    "valor": 75.32
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-13 22:30:05.991436",
    "valor": 8.13
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-14 22:30:05.991436",
    "valor": 11.05
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-15 22:30:05.991436",
    "valor": 75.07
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-16 22:30:05.991436",
    "valor": 37.97
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-17 22:30:05.991436",
    "valor": 39.46
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-18 22:30:05.991436",
    "valor": 56.05
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-19 22:30:05.991436",
    "valor": 59.46
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-20 22:30:05.991436",
    "valor": 66.12
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-21 22:30:05.991436",
    "valor": 90.39
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-22 22:30:05.991436",
    "valor": 38.48
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-23 22:30:05.991436",
    "valor": 73.68
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-24 22:30:05.991436",
    "valor": 56.65
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-25 22:30:05.991436",
    "valor": 52.65
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-26 22:30:05.991436",
    "valor": 40.82
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-27 22:30:05.991436",
    "valor": 63.46
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-28 22:30:05.991436",
    "valor": 27.47
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-29 22:30:05.991436",
    "valor": 15.21
  },
  {
    "id_sensor": 43,
    "data_hora": "2025-07-30 22:30:05.991436",
    "valor": 71.21
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-01 22:30:05.991619",
    "valor": 49.91
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-02 22:30:05.991619",
    "valor": 39.83
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-03 22:30:05.991619",
    "valor": 55.55
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-04 22:30:05.991619",
    "valor": 28.56
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-05 22:30:05.991619",
    "valor": 28.43
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-06 22:30:05.991619",
    "valor": 45.16
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-07 22:30:05.991619",
    "valor": 94.67
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-08 22:30:05.991619",
    "valor": 30.7
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-09 22:30:05.991619",
    "valor": 87.48
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-10 22:30:05.991619",
    "valor": 49.21
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-11 22:30:05.991619",
    "valor": 16.04
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-12 22:30:05.991619",
    "valor": 81.75
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-13 22:30:05.991619",
    "valor": 45.68
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-14 22:30:05.991619",
    "valor": 85.88
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-15 22:30:05.991619",
    "valor": 45.06
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-16 22:30:05.991619",
    "valor": 12.9
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-17 22:30:05.991619",
    "valor": 66.37
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-18 22:30:05.991619",
    "valor": 81.1
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-19 22:30:05.991619",
    "valor": 33.76
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-20 22:30:05.991619",
    "valor": 36.27
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-21 22:30:05.991619",
    "valor": 10.84
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-22 22:30:05.991619",
    "valor": 53.8
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-23 22:30:05.991619",
    "valor": 85.22
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-24 22:30:05.991619",
    "valor": 81.62
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-25 22:30:05.991619",
    "valor": 69.06
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-26 22:30:05.991619",
    "valor": 88.46
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-27 22:30:05.991619",
    "valor": 62.39
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-28 22:30:05.991619",
    "valor": 76.43
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-29 22:30:05.991619",
    "valor": 50.79
  },
  {
    "id_sensor": 44,
    "data_hora": "2025-07-30 22:30:05.991619",
    "valor": 15.92
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-01 22:30:05.991797",
    "valor": 23.09
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-02 22:30:05.991797",
    "valor": 17.5
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-03 22:30:05.991797",
    "valor": 76.13
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-04 22:30:05.991797",
    "valor": 7.37
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-05 22:30:05.991797",
    "valor": 54.86
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-06 22:30:05.991797",
    "valor": 38.2
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-07 22:30:05.991797",
    "valor": 77.33
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-08 22:30:05.991797",
    "valor": 54.65
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-09 22:30:05.991797",
    "valor": 60.08
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-10 22:30:05.991797",
    "valor": 12.76
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-11 22:30:05.991797",
    "valor": 32.84
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-12 22:30:05.991797",
    "valor": 94.96
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-13 22:30:05.991797",
    "valor": 69.7
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-14 22:30:05.991797",
    "valor": 52.31
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-15 22:30:05.991797",
    "valor": 74.22
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-16 22:30:05.991797",
    "valor": 79.1
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-17 22:30:05.991797",
    "valor": 11.64
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-18 22:30:05.991797",
    "valor": 92.51
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-19 22:30:05.991797",
    "valor": 62.81
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-20 22:30:05.991797",
    "valor": 45.5
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-21 22:30:05.991797",
    "valor": 66.21
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-22 22:30:05.991797",
    "valor": 36.01
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-23 22:30:05.991797",
    "valor": 84.02
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-24 22:30:05.991797",
    "valor": 75.22
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-25 22:30:05.991797",
    "valor": 62.58
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-26 22:30:05.991797",
    "valor": 21.38
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-27 22:30:05.991797",
    "valor": 91.96
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-28 22:30:05.991797",
    "valor": 43.94
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-29 22:30:05.991797",
    "valor": 86.96
  },
  {
    "id_sensor": 45,
    "data_hora": "2025-07-30 22:30:05.991797",
    "valor": 9.99
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-01 22:30:05.991976",
    "valor": 16.17
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-02 22:30:05.991976",
    "valor": 18.77
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-03 22:30:05.991976",
    "valor": 19.82
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-04 22:30:05.991976",
    "valor": 34.04
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-05 22:30:05.991976",
    "valor": 68.84
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-06 22:30:05.991976",
    "valor": 36.14
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-07 22:30:05.991976",
    "valor": 89.68
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-08 22:30:05.991976",
    "valor": 85.54
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-09 22:30:05.991976",
    "valor": 81.13
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-10 22:30:05.991976",
    "valor": 27.55
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-11 22:30:05.991976",
    "valor": 62.16
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-12 22:30:05.991976",
    "valor": 54.58
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-13 22:30:05.991976",
    "valor": 16.27
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-14 22:30:05.991976",
    "valor": 32.25
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-15 22:30:05.991976",
    "valor": 53.01
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-16 22:30:05.991976",
    "valor": 50.23
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-17 22:30:05.991976",
    "valor": 20.18
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-18 22:30:05.991976",
    "valor": 89.74
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-19 22:30:05.991976",
    "valor": 18.88
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-20 22:30:05.991976",
    "valor": 64.29
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-21 22:30:05.991976",
    "valor": 69.86
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-22 22:30:05.991976",
    "valor": 59.46
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-23 22:30:05.991976",
    "valor": 80.83
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-24 22:30:05.991976",
    "valor": 55.73
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-25 22:30:05.991976",
    "valor": 79.27
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-26 22:30:05.991976",
    "valor": 7.55
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-27 22:30:05.991976",
    "valor": 9.09
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-28 22:30:05.991976",
    "valor": 62.73
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-29 22:30:05.991976",
    "valor": 56.91
  },
  {
    "id_sensor": 46,
    "data_hora": "2025-07-30 22:30:05.991976",
    "valor": 63.6
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-01 22:30:05.992165",
    "valor": 74.03
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-02 22:30:05.992165",
    "valor": 42.49
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-03 22:30:05.992165",
    "valor": 62.51
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-04 22:30:05.992165",
    "valor": 49.82
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-05 22:30:05.992165",
    "valor": 61.44
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-06 22:30:05.992165",
    "valor": 31.07
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-07 22:30:05.992165",
    "valor": 91.1
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-08 22:30:05.992165",
    "valor": 48.47
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-09 22:30:05.992165",
    "valor": 77.42
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-10 22:30:05.992165",
    "valor": 66.65
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-11 22:30:05.992165",
    "valor": 31.77
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-12 22:30:05.992165",
    "valor": 11.57
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-13 22:30:05.992165",
    "valor": 10.39
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-14 22:30:05.992165",
    "valor": 44.56
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-15 22:30:05.992165",
    "valor": 48.58
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-16 22:30:05.992165",
    "valor": 23.36
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-17 22:30:05.992165",
    "valor": 59.6
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-18 22:30:05.992165",
    "valor": 33.13
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-19 22:30:05.992165",
    "valor": 69.65
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-20 22:30:05.992165",
    "valor": 71.08
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-21 22:30:05.992165",
    "valor": 82.47
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-22 22:30:05.992165",
    "valor": 92.78
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-23 22:30:05.992165",
    "valor": 16.77
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-24 22:30:05.992165",
    "valor": 38.35
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-25 22:30:05.992165",
    "valor": 55.55
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-26 22:30:05.992165",
    "valor": 33.72
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-27 22:30:05.992165",
    "valor": 46.98
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-28 22:30:05.992165",
    "valor": 29.07
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-29 22:30:05.992165",
    "valor": 27.31
  },
  {
    "id_sensor": 47,
    "data_hora": "2025-07-30 22:30:05.992165",
    "valor": 13.71
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-01 22:30:05.992406",
    "valor": 31.12
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-02 22:30:05.992406",
    "valor": 39.57
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-03 22:30:05.992406",
    "valor": 60.38
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-04 22:30:05.992406",
    "valor": 27.34
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-05 22:30:05.992406",
    "valor": 82.88
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-06 22:30:05.992406",
    "valor": 19.37
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-07 22:30:05.992406",
    "valor": 34.47
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-08 22:30:05.992406",
    "valor": 56.99
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-09 22:30:05.992406",
    "valor": 33.14
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-10 22:30:05.992406",
    "valor": 73.68
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-11 22:30:05.992406",
    "valor": 49.84
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-12 22:30:05.992406",
    "valor": 51.33
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-13 22:30:05.992406",
    "valor": 49.89
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-14 22:30:05.992406",
    "valor": 32.77
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-15 22:30:05.992406",
    "valor": 7.09
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-16 22:30:05.992406",
    "valor": 90.07
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-17 22:30:05.992406",
    "valor": 50.49
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-18 22:30:05.992406",
    "valor": 92
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-19 22:30:05.992406",
    "valor": 24.36
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-20 22:30:05.992406",
    "valor": 36.76
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-21 22:30:05.992406",
    "valor": 9.55
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-22 22:30:05.992406",
    "valor": 49.54
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-23 22:30:05.992406",
    "valor": 84.41
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-24 22:30:05.992406",
    "valor": 63.88
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-25 22:30:05.992406",
    "valor": 47.35
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-26 22:30:05.992406",
    "valor": 53.3
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-27 22:30:05.992406",
    "valor": 81.25
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-28 22:30:05.992406",
    "valor": 43.78
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-29 22:30:05.992406",
    "valor": 84.42
  },
  {
    "id_sensor": 48,
    "data_hora": "2025-07-30 22:30:05.992406",
    "valor": 70.48
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-01 22:30:05.992606",
    "valor": 73.75
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-02 22:30:05.992606",
    "valor": 37.93
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-03 22:30:05.992606",
    "valor": 41.05
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-04 22:30:05.992606",
    "valor": 56.33
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-05 22:30:05.992606",
    "valor": 22.52
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-06 22:30:05.992606",
    "valor": 54.79
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-07 22:30:05.992606",
    "valor": 11.62
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-08 22:30:05.992606",
    "valor": 50.38
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-09 22:30:05.992606",
    "valor": 73.8
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-10 22:30:05.992606",
    "valor": 30.17
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-11 22:30:05.992606",
    "valor": 94.02
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-12 22:30:05.992606",
    "valor": 66.24
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-13 22:30:05.992606",
    "valor": 15.69
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-14 22:30:05.992606",
    "valor": 92.76
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-15 22:30:05.992606",
    "valor": 40.45
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-16 22:30:05.992606",
    "valor": 76.54
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-17 22:30:05.992606",
    "valor": 35.52
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-18 22:30:05.992606",
    "valor": 89.51
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-19 22:30:05.992606",
    "valor": 72.95
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-20 22:30:05.992606",
    "valor": 22.92
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-21 22:30:05.992606",
    "valor": 50.82
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-22 22:30:05.992606",
    "valor": 50.01
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-23 22:30:05.992606",
    "valor": 9.08
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-24 22:30:05.992606",
    "valor": 17.33
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-25 22:30:05.992606",
    "valor": 34.97
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-26 22:30:05.992606",
    "valor": 47.64
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-27 22:30:05.992606",
    "valor": 46.13
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-28 22:30:05.992606",
    "valor": 59.56
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-29 22:30:05.992606",
    "valor": 51.4
  },
  {
    "id_sensor": 49,
    "data_hora": "2025-07-30 22:30:05.992606",
    "valor": 34.52
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-01 22:30:05.992798",
    "valor": 60.18
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-02 22:30:05.992798",
    "valor": 19.63
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-03 22:30:05.992798",
    "valor": 94.16
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-04 22:30:05.992798",
    "valor": 71.54
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-05 22:30:05.992798",
    "valor": 31.93
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-06 22:30:05.992798",
    "valor": 35.27
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-07 22:30:05.992798",
    "valor": 79.55
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-08 22:30:05.992798",
    "valor": 52.91
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-09 22:30:05.992798",
    "valor": 68.79
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-10 22:30:05.992798",
    "valor": 31.98
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-11 22:30:05.992798",
    "valor": 78.42
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-12 22:30:05.992798",
    "valor": 38.15
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-13 22:30:05.992798",
    "valor": 65.64
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-14 22:30:05.992798",
    "valor": 93.19
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-15 22:30:05.992798",
    "valor": 57.53
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-16 22:30:05.992798",
    "valor": 76.71
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-17 22:30:05.992798",
    "valor": 70.28
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-18 22:30:05.992798",
    "valor": 66.92
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-19 22:30:05.992798",
    "valor": 7.4
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-20 22:30:05.992798",
    "valor": 47.71
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-21 22:30:05.992798",
    "valor": 92.04
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-22 22:30:05.992798",
    "valor": 75.46
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-23 22:30:05.992798",
    "valor": 74.85
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-24 22:30:05.992798",
    "valor": 56.99
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-25 22:30:05.992798",
    "valor": 69.93
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-26 22:30:05.992798",
    "valor": 57.52
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-27 22:30:05.992798",
    "valor": 20.35
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-28 22:30:05.992798",
    "valor": 61.61
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-29 22:30:05.992798",
    "valor": 60.78
  },
  {
    "id_sensor": 50,
    "data_hora": "2025-07-30 22:30:05.992798",
    "valor": 80.71
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-01 22:30:05.992986",
    "valor": 18.3
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-02 22:30:05.992986",
    "valor": 66.27
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-03 22:30:05.992986",
    "valor": 7.84
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-04 22:30:05.992986",
    "valor": 90.34
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-05 22:30:05.992986",
    "valor": 14.89
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-06 22:30:05.992986",
    "valor": 6.7
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-07 22:30:05.992986",
    "valor": 33.23
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-08 22:30:05.992986",
    "valor": 18.63
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-09 22:30:05.992986",
    "valor": 67.15
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-10 22:30:05.992986",
    "valor": 41.93
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-11 22:30:05.992986",
    "valor": 74.75
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-12 22:30:05.992986",
    "valor": 87.85
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-13 22:30:05.992986",
    "valor": 83.55
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-14 22:30:05.992986",
    "valor": 71.23
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-15 22:30:05.992986",
    "valor": 10.61
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-16 22:30:05.992986",
    "valor": 17.43
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-17 22:30:05.992986",
    "valor": 23.66
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-18 22:30:05.992986",
    "valor": 34.25
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-19 22:30:05.992986",
    "valor": 64.6
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-20 22:30:05.992986",
    "valor": 52.29
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-21 22:30:05.992986",
    "valor": 33.24
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-22 22:30:05.992986",
    "valor": 20.59
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-23 22:30:05.992986",
    "valor": 87.09
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-24 22:30:05.992986",
    "valor": 35.81
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-25 22:30:05.992986",
    "valor": 36.89
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-26 22:30:05.992986",
    "valor": 74.48
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-27 22:30:05.992986",
    "valor": 69.88
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-28 22:30:05.992986",
    "valor": 62.9
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-29 22:30:05.992986",
    "valor": 67.4
  },
  {
    "id_sensor": 51,
    "data_hora": "2025-07-30 22:30:05.992986",
    "valor": 59.91
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-01 22:30:05.993183",
    "valor": 22.3
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-02 22:30:05.993183",
    "valor": 27.19
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-03 22:30:05.993183",
    "valor": 55.23
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-04 22:30:05.993183",
    "valor": 25.24
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-05 22:30:05.993183",
    "valor": 92.56
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-06 22:30:05.993183",
    "valor": 31.79
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-07 22:30:05.993183",
    "valor": 31.01
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-08 22:30:05.993183",
    "valor": 23.66
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-09 22:30:05.993183",
    "valor": 68.45
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-10 22:30:05.993183",
    "valor": 33.53
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-11 22:30:05.993183",
    "valor": 36.39
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-12 22:30:05.993183",
    "valor": 89.03
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-13 22:30:05.993183",
    "valor": 76.59
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-14 22:30:05.993183",
    "valor": 29.61
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-15 22:30:05.993183",
    "valor": 15.97
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-16 22:30:05.993183",
    "valor": 65.9
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-17 22:30:05.993183",
    "valor": 39.17
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-18 22:30:05.993183",
    "valor": 93.21
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-19 22:30:05.993183",
    "valor": 78.65
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-20 22:30:05.993183",
    "valor": 90.91
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-21 22:30:05.993183",
    "valor": 77.42
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-22 22:30:05.993183",
    "valor": 31.14
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-23 22:30:05.993183",
    "valor": 30.89
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-24 22:30:05.993183",
    "valor": 69.27
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-25 22:30:05.993183",
    "valor": 36.17
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-26 22:30:05.993183",
    "valor": 44.81
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-27 22:30:05.993183",
    "valor": 28.08
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-28 22:30:05.993183",
    "valor": 48.12
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-29 22:30:05.993183",
    "valor": 23.19
  },
  {
    "id_sensor": 52,
    "data_hora": "2025-07-30 22:30:05.993183",
    "valor": 53.47
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-01 22:30:05.993410",
    "valor": 88.97
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-02 22:30:05.993410",
    "valor": 67.66
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-03 22:30:05.993410",
    "valor": 17.35
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-04 22:30:05.993410",
    "valor": 60.41
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-05 22:30:05.993410",
    "valor": 57.81
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-06 22:30:05.993410",
    "valor": 26.82
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-07 22:30:05.993410",
    "valor": 65.29
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-08 22:30:05.993410",
    "valor": 52.79
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-09 22:30:05.993410",
    "valor": 62.42
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-10 22:30:05.993410",
    "valor": 9.72
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-11 22:30:05.993410",
    "valor": 42.2
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-12 22:30:05.993410",
    "valor": 69.56
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-13 22:30:05.993410",
    "valor": 14.05
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-14 22:30:05.993410",
    "valor": 74.37
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-15 22:30:05.993410",
    "valor": 5.47
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-16 22:30:05.993410",
    "valor": 54.53
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-17 22:30:05.993410",
    "valor": 88.62
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-18 22:30:05.993410",
    "valor": 41.62
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-19 22:30:05.993410",
    "valor": 89.15
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-20 22:30:05.993410",
    "valor": 84.06
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-21 22:30:05.993410",
    "valor": 47.97
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-22 22:30:05.993410",
    "valor": 22.95
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-23 22:30:05.993410",
    "valor": 91.75
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-24 22:30:05.993410",
    "valor": 33.91
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-25 22:30:05.993410",
    "valor": 63.13
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-26 22:30:05.993410",
    "valor": 86.71
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-27 22:30:05.993410",
    "valor": 13.05
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-28 22:30:05.993410",
    "valor": 56.67
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-29 22:30:05.993410",
    "valor": 53.16
  },
  {
    "id_sensor": 53,
    "data_hora": "2025-07-30 22:30:05.993410",
    "valor": 70.08
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-01 22:30:05.993613",
    "valor": 89.3
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-02 22:30:05.993613",
    "valor": 87.19
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-03 22:30:05.993613",
    "valor": 20.76
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-04 22:30:05.993613",
    "valor": 84.4
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-05 22:30:05.993613",
    "valor": 20.82
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-06 22:30:05.993613",
    "valor": 87.77
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-07 22:30:05.993613",
    "valor": 94.75
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-08 22:30:05.993613",
    "valor": 40.73
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-09 22:30:05.993613",
    "valor": 49.58
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-10 22:30:05.993613",
    "valor": 89.29
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-11 22:30:05.993613",
    "valor": 91.59
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-12 22:30:05.993613",
    "valor": 88.34
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-13 22:30:05.993613",
    "valor": 83.91
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-14 22:30:05.993613",
    "valor": 5.83
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-15 22:30:05.993613",
    "valor": 56.12
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-16 22:30:05.993613",
    "valor": 14.66
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-17 22:30:05.993613",
    "valor": 93.47
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-18 22:30:05.993613",
    "valor": 30.61
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-19 22:30:05.993613",
    "valor": 94.02
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-20 22:30:05.993613",
    "valor": 53.9
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-21 22:30:05.993613",
    "valor": 49.45
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-22 22:30:05.993613",
    "valor": 89.47
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-23 22:30:05.993613",
    "valor": 81.6
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-24 22:30:05.993613",
    "valor": 47.12
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-25 22:30:05.993613",
    "valor": 22.35
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-26 22:30:05.993613",
    "valor": 15.14
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-27 22:30:05.993613",
    "valor": 19.62
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-28 22:30:05.993613",
    "valor": 46.3
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-29 22:30:05.993613",
    "valor": 28.15
  },
  {
    "id_sensor": 54,
    "data_hora": "2025-07-30 22:30:05.993613",
    "valor": 21.76
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-01 22:30:05.993832",
    "valor": 71.3
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-02 22:30:05.993832",
    "valor": 76.17
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-03 22:30:05.993832",
    "valor": 56.1
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-04 22:30:05.993832",
    "valor": 73.16
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-05 22:30:05.993832",
    "valor": 20.79
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-06 22:30:05.993832",
    "valor": 82.05
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-07 22:30:05.993832",
    "valor": 85.73
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-08 22:30:05.993832",
    "valor": 79.43
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-09 22:30:05.993832",
    "valor": 51.38
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-10 22:30:05.993832",
    "valor": 12.81
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-11 22:30:05.993832",
    "valor": 65.23
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-12 22:30:05.993832",
    "valor": 21.63
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-13 22:30:05.993832",
    "valor": 17.66
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-14 22:30:05.993832",
    "valor": 34.12
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-15 22:30:05.993832",
    "valor": 27.32
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-16 22:30:05.993832",
    "valor": 28.47
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-17 22:30:05.993832",
    "valor": 26.2
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-18 22:30:05.993832",
    "valor": 72.84
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-19 22:30:05.993832",
    "valor": 90.86
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-20 22:30:05.993832",
    "valor": 32.18
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-21 22:30:05.993832",
    "valor": 70.06
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-22 22:30:05.993832",
    "valor": 6.03
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-23 22:30:05.993832",
    "valor": 63.83
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-24 22:30:05.993832",
    "valor": 67.35
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-25 22:30:05.993832",
    "valor": 10.59
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-26 22:30:05.993832",
    "valor": 15.64
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-27 22:30:05.993832",
    "valor": 32.61
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-28 22:30:05.993832",
    "valor": 41.49
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-29 22:30:05.993832",
    "valor": 50.23
  },
  {
    "id_sensor": 55,
    "data_hora": "2025-07-30 22:30:05.993832",
    "valor": 85.56
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-01 22:30:05.994026",
    "valor": 68.32
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-02 22:30:05.994026",
    "valor": 32.99
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-03 22:30:05.994026",
    "valor": 15.57
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-04 22:30:05.994026",
    "valor": 87.45
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-05 22:30:05.994026",
    "valor": 31.55
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-06 22:30:05.994026",
    "valor": 60.32
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-07 22:30:05.994026",
    "valor": 24.72
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-08 22:30:05.994026",
    "valor": 17.02
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-09 22:30:05.994026",
    "valor": 18.79
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-10 22:30:05.994026",
    "valor": 72.3
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-11 22:30:05.994026",
    "valor": 59.52
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-12 22:30:05.994026",
    "valor": 42.43
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-13 22:30:05.994026",
    "valor": 54.43
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-14 22:30:05.994026",
    "valor": 47.37
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-15 22:30:05.994026",
    "valor": 53.38
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-16 22:30:05.994026",
    "valor": 64.77
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-17 22:30:05.994026",
    "valor": 24.66
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-18 22:30:05.994026",
    "valor": 27.27
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-19 22:30:05.994026",
    "valor": 72.93
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-20 22:30:05.994026",
    "valor": 83.58
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-21 22:30:05.994026",
    "valor": 12.37
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-22 22:30:05.994026",
    "valor": 45.21
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-23 22:30:05.994026",
    "valor": 68.34
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-24 22:30:05.994026",
    "valor": 12.03
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-25 22:30:05.994026",
    "valor": 55.78
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-26 22:30:05.994026",
    "valor": 10.56
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-27 22:30:05.994026",
    "valor": 54.29
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-28 22:30:05.994026",
    "valor": 50.49
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-29 22:30:05.994026",
    "valor": 56.54
  },
  {
    "id_sensor": 56,
    "data_hora": "2025-07-30 22:30:05.994026",
    "valor": 18.49
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-01 22:30:05.994235",
    "valor": 34.53
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-02 22:30:05.994235",
    "valor": 51.83
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-03 22:30:05.994235",
    "valor": 15.46
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-04 22:30:05.994235",
    "valor": 23.49
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-05 22:30:05.994235",
    "valor": 57.48
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-06 22:30:05.994235",
    "valor": 13.18
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-07 22:30:05.994235",
    "valor": 50.93
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-08 22:30:05.994235",
    "valor": 77.78
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-09 22:30:05.994235",
    "valor": 45.81
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-10 22:30:05.994235",
    "valor": 51.19
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-11 22:30:05.994235",
    "valor": 46.11
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-12 22:30:05.994235",
    "valor": 10.2
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-13 22:30:05.994235",
    "valor": 46.61
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-14 22:30:05.994235",
    "valor": 77.62
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-15 22:30:05.994235",
    "valor": 70.1
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-16 22:30:05.994235",
    "valor": 40.64
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-17 22:30:05.994235",
    "valor": 78.48
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-18 22:30:05.994235",
    "valor": 72.12
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-19 22:30:05.994235",
    "valor": 57.05
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-20 22:30:05.994235",
    "valor": 9.08
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-21 22:30:05.994235",
    "valor": 36.01
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-22 22:30:05.994235",
    "valor": 10.74
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-23 22:30:05.994235",
    "valor": 94.47
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-24 22:30:05.994235",
    "valor": 89.11
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-25 22:30:05.994235",
    "valor": 11.21
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-26 22:30:05.994235",
    "valor": 89.04
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-27 22:30:05.994235",
    "valor": 7.86
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-28 22:30:05.994235",
    "valor": 41.8
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-29 22:30:05.994235",
    "valor": 74.21
  },
  {
    "id_sensor": 57,
    "data_hora": "2025-07-30 22:30:05.994235",
    "valor": 73.92
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-01 22:30:05.994430",
    "valor": 93.05
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-02 22:30:05.994430",
    "valor": 63.13
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-03 22:30:05.994430",
    "valor": 42.83
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-04 22:30:05.994430",
    "valor": 94.36
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-05 22:30:05.994430",
    "valor": 39.42
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-06 22:30:05.994430",
    "valor": 83.27
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-07 22:30:05.994430",
    "valor": 86.61
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-08 22:30:05.994430",
    "valor": 38.81
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-09 22:30:05.994430",
    "valor": 66.45
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-10 22:30:05.994430",
    "valor": 64.56
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-11 22:30:05.994430",
    "valor": 53.54
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-12 22:30:05.994430",
    "valor": 63.82
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-13 22:30:05.994430",
    "valor": 36.3
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-14 22:30:05.994430",
    "valor": 21.06
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-15 22:30:05.994430",
    "valor": 53.35
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-16 22:30:05.994430",
    "valor": 52.6
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-17 22:30:05.994430",
    "valor": 70.51
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-18 22:30:05.994430",
    "valor": 25.04
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-19 22:30:05.994430",
    "valor": 5.31
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-20 22:30:05.994430",
    "valor": 7.05
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-21 22:30:05.994430",
    "valor": 31.85
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-22 22:30:05.994430",
    "valor": 65.61
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-23 22:30:05.994430",
    "valor": 54
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-24 22:30:05.994430",
    "valor": 52.87
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-25 22:30:05.994430",
    "valor": 79.1
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-26 22:30:05.994430",
    "valor": 27.28
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-27 22:30:05.994430",
    "valor": 36.15
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-28 22:30:05.994430",
    "valor": 29.81
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-29 22:30:05.994430",
    "valor": 89.37
  },
  {
    "id_sensor": 58,
    "data_hora": "2025-07-30 22:30:05.994430",
    "valor": 70.25
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-01 22:30:05.994618",
    "valor": 15.16
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-02 22:30:05.994618",
    "valor": 77.85
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-03 22:30:05.994618",
    "valor": 42.73
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-04 22:30:05.994618",
    "valor": 73.94
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-05 22:30:05.994618",
    "valor": 84.54
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-06 22:30:05.994618",
    "valor": 6.41
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-07 22:30:05.994618",
    "valor": 23.55
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-08 22:30:05.994618",
    "valor": 14.08
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-09 22:30:05.994618",
    "valor": 8.02
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-10 22:30:05.994618",
    "valor": 58.8
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-11 22:30:05.994618",
    "valor": 68.3
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-12 22:30:05.994618",
    "valor": 9.38
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-13 22:30:05.994618",
    "valor": 71.65
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-14 22:30:05.994618",
    "valor": 41.2
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-15 22:30:05.994618",
    "valor": 26.09
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-16 22:30:05.994618",
    "valor": 24.55
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-17 22:30:05.994618",
    "valor": 82.74
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-18 22:30:05.994618",
    "valor": 10.08
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-19 22:30:05.994618",
    "valor": 50.35
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-20 22:30:05.994618",
    "valor": 31.03
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-21 22:30:05.994618",
    "valor": 78.42
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-22 22:30:05.994618",
    "valor": 70.84
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-23 22:30:05.994618",
    "valor": 33.7
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-24 22:30:05.994618",
    "valor": 58.81
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-25 22:30:05.994618",
    "valor": 65.53
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-26 22:30:05.994618",
    "valor": 33.86
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-27 22:30:05.994618",
    "valor": 32.16
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-28 22:30:05.994618",
    "valor": 17.89
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-29 22:30:05.994618",
    "valor": 64.42
  },
  {
    "id_sensor": 59,
    "data_hora": "2025-07-30 22:30:05.994618",
    "valor": 24.89
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-01 22:30:05.994800",
    "valor": 32.05
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-02 22:30:05.994800",
    "valor": 10.49
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-03 22:30:05.994800",
    "valor": 90.37
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-04 22:30:05.994800",
    "valor": 84.17
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-05 22:30:05.994800",
    "valor": 87.04
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-06 22:30:05.994800",
    "valor": 61.34
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-07 22:30:05.994800",
    "valor": 43.45
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-08 22:30:05.994800",
    "valor": 49.61
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-09 22:30:05.994800",
    "valor": 92.51
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-10 22:30:05.994800",
    "valor": 89.74
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-11 22:30:05.994800",
    "valor": 65.42
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-12 22:30:05.994800",
    "valor": 75.72
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-13 22:30:05.994800",
    "valor": 33.69
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-14 22:30:05.994800",
    "valor": 42.47
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-15 22:30:05.994800",
    "valor": 18.43
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-16 22:30:05.994800",
    "valor": 38.88
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-17 22:30:05.994800",
    "valor": 72.9
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-18 22:30:05.994800",
    "valor": 47.62
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-19 22:30:05.994800",
    "valor": 81.44
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-20 22:30:05.994800",
    "valor": 32.07
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-21 22:30:05.994800",
    "valor": 68.68
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-22 22:30:05.994800",
    "valor": 77.52
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-23 22:30:05.994800",
    "valor": 87.33
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-24 22:30:05.994800",
    "valor": 55.61
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-25 22:30:05.994800",
    "valor": 92.1
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-26 22:30:05.994800",
    "valor": 55.16
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-27 22:30:05.994800",
    "valor": 17.07
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-28 22:30:05.994800",
    "valor": 26.86
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-29 22:30:05.994800",
    "valor": 23.3
  },
  {
    "id_sensor": 60,
    "data_hora": "2025-07-30 22:30:05.994800",
    "valor": 63.2
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-01 22:30:05.995001",
    "valor": 88
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-02 22:30:05.995001",
    "valor": 81.24
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-03 22:30:05.995001",
    "valor": 13.32
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-04 22:30:05.995001",
    "valor": 70.21
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-05 22:30:05.995001",
    "valor": 22.14
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-06 22:30:05.995001",
    "valor": 29.16
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-07 22:30:05.995001",
    "valor": 65.63
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-08 22:30:05.995001",
    "valor": 59.26
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-09 22:30:05.995001",
    "valor": 83.63
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-10 22:30:05.995001",
    "valor": 21.93
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-11 22:30:05.995001",
    "valor": 73.55
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-12 22:30:05.995001",
    "valor": 70.19
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-13 22:30:05.995001",
    "valor": 55.3
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-14 22:30:05.995001",
    "valor": 48.15
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-15 22:30:05.995001",
    "valor": 83.25
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-16 22:30:05.995001",
    "valor": 34.97
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-17 22:30:05.995001",
    "valor": 91.13
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-18 22:30:05.995001",
    "valor": 6.38
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-19 22:30:05.995001",
    "valor": 89.34
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-20 22:30:05.995001",
    "valor": 91.59
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-21 22:30:05.995001",
    "valor": 15.56
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-22 22:30:05.995001",
    "valor": 94.96
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-23 22:30:05.995001",
    "valor": 48.1
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-24 22:30:05.995001",
    "valor": 26.83
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-25 22:30:05.995001",
    "valor": 59.4
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-26 22:30:05.995001",
    "valor": 23.41
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-27 22:30:05.995001",
    "valor": 87.36
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-28 22:30:05.995001",
    "valor": 54.69
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-29 22:30:05.995001",
    "valor": 74.8
  },
  {
    "id_sensor": 61,
    "data_hora": "2025-07-30 22:30:05.995001",
    "valor": 39.26
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-01 22:30:05.995264",
    "valor": 53.03
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-02 22:30:05.995264",
    "valor": 37.33
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-03 22:30:05.995264",
    "valor": 28.54
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-04 22:30:05.995264",
    "valor": 51.15
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-05 22:30:05.995264",
    "valor": 49.75
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-06 22:30:05.995264",
    "valor": 13.87
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-07 22:30:05.995264",
    "valor": 93.32
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-08 22:30:05.995264",
    "valor": 47.25
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-09 22:30:05.995264",
    "valor": 80.58
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-10 22:30:05.995264",
    "valor": 87.29
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-11 22:30:05.995264",
    "valor": 38.36
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-12 22:30:05.995264",
    "valor": 42.25
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-13 22:30:05.995264",
    "valor": 55.63
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-14 22:30:05.995264",
    "valor": 24.91
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-15 22:30:05.995264",
    "valor": 18.13
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-16 22:30:05.995264",
    "valor": 28.47
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-17 22:30:05.995264",
    "valor": 89.13
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-18 22:30:05.995264",
    "valor": 57.12
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-19 22:30:05.995264",
    "valor": 42.58
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-20 22:30:05.995264",
    "valor": 18.72
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-21 22:30:05.995264",
    "valor": 34.69
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-22 22:30:05.995264",
    "valor": 39.19
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-23 22:30:05.995264",
    "valor": 80
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-24 22:30:05.995264",
    "valor": 49.94
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-25 22:30:05.995264",
    "valor": 63.91
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-26 22:30:05.995264",
    "valor": 66.64
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-27 22:30:05.995264",
    "valor": 28.16
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-28 22:30:05.995264",
    "valor": 78.94
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-29 22:30:05.995264",
    "valor": 91.99
  },
  {
    "id_sensor": 62,
    "data_hora": "2025-07-30 22:30:05.995264",
    "valor": 62.75
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-01 22:30:05.995498",
    "valor": 49.15
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-02 22:30:05.995498",
    "valor": 20.14
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-03 22:30:05.995498",
    "valor": 76.55
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-04 22:30:05.995498",
    "valor": 20.23
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-05 22:30:05.995498",
    "valor": 69.83
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-06 22:30:05.995498",
    "valor": 48.95
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-07 22:30:05.995498",
    "valor": 87.52
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-08 22:30:05.995498",
    "valor": 53.79
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-09 22:30:05.995498",
    "valor": 62.76
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-10 22:30:05.995498",
    "valor": 10.29
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-11 22:30:05.995498",
    "valor": 8.04
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-12 22:30:05.995498",
    "valor": 81.2
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-13 22:30:05.995498",
    "valor": 90.07
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-14 22:30:05.995498",
    "valor": 65.14
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-15 22:30:05.995498",
    "valor": 73.79
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-16 22:30:05.995498",
    "valor": 42.12
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-17 22:30:05.995498",
    "valor": 80.83
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-18 22:30:05.995498",
    "valor": 25.83
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-19 22:30:05.995498",
    "valor": 68.65
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-20 22:30:05.995498",
    "valor": 5.82
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-21 22:30:05.995498",
    "valor": 50.52
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-22 22:30:05.995498",
    "valor": 38.59
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-23 22:30:05.995498",
    "valor": 60.61
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-24 22:30:05.995498",
    "valor": 65.01
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-25 22:30:05.995498",
    "valor": 60.49
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-26 22:30:05.995498",
    "valor": 48.49
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-27 22:30:05.995498",
    "valor": 48.91
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-28 22:30:05.995498",
    "valor": 5.6
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-29 22:30:05.995498",
    "valor": 54.65
  },
  {
    "id_sensor": 63,
    "data_hora": "2025-07-30 22:30:05.995498",
    "valor": 6.07
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-01 22:30:05.995685",
    "valor": 52.65
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-02 22:30:05.995685",
    "valor": 29.73
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-03 22:30:05.995685",
    "valor": 92.97
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-04 22:30:05.995685",
    "valor": 6.54
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-05 22:30:05.995685",
    "valor": 78.18
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-06 22:30:05.995685",
    "valor": 65.66
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-07 22:30:05.995685",
    "valor": 77.56
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-08 22:30:05.995685",
    "valor": 86.88
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-09 22:30:05.995685",
    "valor": 14.63
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-10 22:30:05.995685",
    "valor": 13.67
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-11 22:30:05.995685",
    "valor": 18.4
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-12 22:30:05.995685",
    "valor": 22.27
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-13 22:30:05.995685",
    "valor": 52.38
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-14 22:30:05.995685",
    "valor": 78.37
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-15 22:30:05.995685",
    "valor": 29.06
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-16 22:30:05.995685",
    "valor": 40.72
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-17 22:30:05.995685",
    "valor": 38.57
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-18 22:30:05.995685",
    "valor": 41.54
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-19 22:30:05.995685",
    "valor": 55.85
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-20 22:30:05.995685",
    "valor": 94.12
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-21 22:30:05.995685",
    "valor": 25.33
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-22 22:30:05.995685",
    "valor": 66.56
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-23 22:30:05.995685",
    "valor": 81.31
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-24 22:30:05.995685",
    "valor": 63.84
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-25 22:30:05.995685",
    "valor": 82.24
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-26 22:30:05.995685",
    "valor": 73.36
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-27 22:30:05.995685",
    "valor": 13.42
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-28 22:30:05.995685",
    "valor": 39.13
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-29 22:30:05.995685",
    "valor": 54.74
  },
  {
    "id_sensor": 64,
    "data_hora": "2025-07-30 22:30:05.995685",
    "valor": 10.05
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-01 22:30:05.995867",
    "valor": 5.85
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-02 22:30:05.995867",
    "valor": 20.42
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-03 22:30:05.995867",
    "valor": 49.99
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-04 22:30:05.995867",
    "valor": 44.05
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-05 22:30:05.995867",
    "valor": 75.59
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-06 22:30:05.995867",
    "valor": 55.93
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-07 22:30:05.995867",
    "valor": 82.22
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-08 22:30:05.995867",
    "valor": 13.58
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-09 22:30:05.995867",
    "valor": 52.53
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-10 22:30:05.995867",
    "valor": 8.83
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-11 22:30:05.995867",
    "valor": 24.03
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-12 22:30:05.995867",
    "valor": 83.13
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-13 22:30:05.995867",
    "valor": 84.88
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-14 22:30:05.995867",
    "valor": 47.8
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-15 22:30:05.995867",
    "valor": 9.19
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-16 22:30:05.995867",
    "valor": 11.69
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-17 22:30:05.995867",
    "valor": 88.3
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-18 22:30:05.995867",
    "valor": 85.94
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-19 22:30:05.995867",
    "valor": 55.72
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-20 22:30:05.995867",
    "valor": 7.96
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-21 22:30:05.995867",
    "valor": 88.59
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-22 22:30:05.995867",
    "valor": 33.3
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-23 22:30:05.995867",
    "valor": 91.53
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-24 22:30:05.995867",
    "valor": 57.83
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-25 22:30:05.995867",
    "valor": 72.7
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-26 22:30:05.995867",
    "valor": 69.14
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-27 22:30:05.995867",
    "valor": 40.85
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-28 22:30:05.995867",
    "valor": 11.92
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-29 22:30:05.995867",
    "valor": 19.62
  },
  {
    "id_sensor": 65,
    "data_hora": "2025-07-30 22:30:05.995867",
    "valor": 26.64
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-01 22:30:05.996047",
    "valor": 80.12
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-02 22:30:05.996047",
    "valor": 40.02
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-03 22:30:05.996047",
    "valor": 85.69
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-04 22:30:05.996047",
    "valor": 34.86
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-05 22:30:05.996047",
    "valor": 73
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-06 22:30:05.996047",
    "valor": 17.6
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-07 22:30:05.996047",
    "valor": 93.96
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-08 22:30:05.996047",
    "valor": 70.17
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-09 22:30:05.996047",
    "valor": 50.07
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-10 22:30:05.996047",
    "valor": 92.69
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-11 22:30:05.996047",
    "valor": 9.83
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-12 22:30:05.996047",
    "valor": 44.34
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-13 22:30:05.996047",
    "valor": 80.48
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-14 22:30:05.996047",
    "valor": 35.65
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-15 22:30:05.996047",
    "valor": 74.21
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-16 22:30:05.996047",
    "valor": 90.94
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-17 22:30:05.996047",
    "valor": 40.7
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-18 22:30:05.996047",
    "valor": 74.62
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-19 22:30:05.996047",
    "valor": 7.67
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-20 22:30:05.996047",
    "valor": 29.6
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-21 22:30:05.996047",
    "valor": 94.33
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-22 22:30:05.996047",
    "valor": 49.15
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-23 22:30:05.996047",
    "valor": 37.02
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-24 22:30:05.996047",
    "valor": 89.7
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-25 22:30:05.996047",
    "valor": 43.87
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-26 22:30:05.996047",
    "valor": 66.17
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-27 22:30:05.996047",
    "valor": 64.46
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-28 22:30:05.996047",
    "valor": 12.71
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-29 22:30:05.996047",
    "valor": 60.68
  },
  {
    "id_sensor": 66,
    "data_hora": "2025-07-30 22:30:05.996047",
    "valor": 76.82
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-01 22:30:05.996284",
    "valor": 69.18
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-02 22:30:05.996284",
    "valor": 12.38
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-03 22:30:05.996284",
    "valor": 18.88
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-04 22:30:05.996284",
    "valor": 69.05
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-05 22:30:05.996284",
    "valor": 62.05
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-06 22:30:05.996284",
    "valor": 71.57
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-07 22:30:05.996284",
    "valor": 33.5
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-08 22:30:05.996284",
    "valor": 14.59
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-09 22:30:05.996284",
    "valor": 5.47
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-10 22:30:05.996284",
    "valor": 32.74
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-11 22:30:05.996284",
    "valor": 37.39
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-12 22:30:05.996284",
    "valor": 29.28
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-13 22:30:05.996284",
    "valor": 16.93
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-14 22:30:05.996284",
    "valor": 21.87
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-15 22:30:05.996284",
    "valor": 45.4
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-16 22:30:05.996284",
    "valor": 54.93
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-17 22:30:05.996284",
    "valor": 41.72
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-18 22:30:05.996284",
    "valor": 7.36
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-19 22:30:05.996284",
    "valor": 36.85
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-20 22:30:05.996284",
    "valor": 13.38
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-21 22:30:05.996284",
    "valor": 58.82
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-22 22:30:05.996284",
    "valor": 34.2
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-23 22:30:05.996284",
    "valor": 39.67
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-24 22:30:05.996284",
    "valor": 31.27
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-25 22:30:05.996284",
    "valor": 39.9
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-26 22:30:05.996284",
    "valor": 12.62
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-27 22:30:05.996284",
    "valor": 86.1
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-28 22:30:05.996284",
    "valor": 86.47
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-29 22:30:05.996284",
    "valor": 93.04
  },
  {
    "id_sensor": 67,
    "data_hora": "2025-07-30 22:30:05.996284",
    "valor": 56.48
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-01 22:30:05.996481",
    "valor": 20.26
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-02 22:30:05.996481",
    "valor": 39.27
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-03 22:30:05.996481",
    "valor": 17.5
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-04 22:30:05.996481",
    "valor": 32.1
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-05 22:30:05.996481",
    "valor": 49.38
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-06 22:30:05.996481",
    "valor": 10.69
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-07 22:30:05.996481",
    "valor": 44.12
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-08 22:30:05.996481",
    "valor": 42.9
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-09 22:30:05.996481",
    "valor": 48.58
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-10 22:30:05.996481",
    "valor": 11.92
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-11 22:30:05.996481",
    "valor": 27.65
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-12 22:30:05.996481",
    "valor": 27.19
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-13 22:30:05.996481",
    "valor": 61.25
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-14 22:30:05.996481",
    "valor": 58.44
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-15 22:30:05.996481",
    "valor": 22.6
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-16 22:30:05.996481",
    "valor": 14.63
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-17 22:30:05.996481",
    "valor": 32.42
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-18 22:30:05.996481",
    "valor": 90.39
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-19 22:30:05.996481",
    "valor": 34.9
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-20 22:30:05.996481",
    "valor": 60.82
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-21 22:30:05.996481",
    "valor": 77.37
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-22 22:30:05.996481",
    "valor": 34.66
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-23 22:30:05.996481",
    "valor": 35.13
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-24 22:30:05.996481",
    "valor": 78.39
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-25 22:30:05.996481",
    "valor": 82.36
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-26 22:30:05.996481",
    "valor": 92.68
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-27 22:30:05.996481",
    "valor": 17.25
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-28 22:30:05.996481",
    "valor": 33.86
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-29 22:30:05.996481",
    "valor": 90.26
  },
  {
    "id_sensor": 68,
    "data_hora": "2025-07-30 22:30:05.996481",
    "valor": 23.08
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-01 22:30:05.996685",
    "valor": 33.28
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-02 22:30:05.996685",
    "valor": 91.81
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-03 22:30:05.996685",
    "valor": 92.19
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-04 22:30:05.996685",
    "valor": 31.23
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-05 22:30:05.996685",
    "valor": 67.55
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-06 22:30:05.996685",
    "valor": 49.19
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-07 22:30:05.996685",
    "valor": 56.83
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-08 22:30:05.996685",
    "valor": 26.82
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-09 22:30:05.996685",
    "valor": 38.84
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-10 22:30:05.996685",
    "valor": 78.48
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-11 22:30:05.996685",
    "valor": 40.36
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-12 22:30:05.996685",
    "valor": 15.25
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-13 22:30:05.996685",
    "valor": 55.75
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-14 22:30:05.996685",
    "valor": 58.3
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-15 22:30:05.996685",
    "valor": 54.11
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-16 22:30:05.996685",
    "valor": 66.35
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-17 22:30:05.996685",
    "valor": 54.51
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-18 22:30:05.996685",
    "valor": 90.77
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-19 22:30:05.996685",
    "valor": 46.55
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-20 22:30:05.996685",
    "valor": 68.75
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-21 22:30:05.996685",
    "valor": 44.46
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-22 22:30:05.996685",
    "valor": 31.22
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-23 22:30:05.996685",
    "valor": 67.36
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-24 22:30:05.996685",
    "valor": 78.71
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-25 22:30:05.996685",
    "valor": 76.61
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-26 22:30:05.996685",
    "valor": 41.82
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-27 22:30:05.996685",
    "valor": 49.94
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-28 22:30:05.996685",
    "valor": 62
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-29 22:30:05.996685",
    "valor": 26.78
  },
  {
    "id_sensor": 69,
    "data_hora": "2025-07-30 22:30:05.996685",
    "valor": 64.28
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-01 22:30:05.996879",
    "valor": 69.37
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-02 22:30:05.996879",
    "valor": 76.02
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-03 22:30:05.996879",
    "valor": 11.66
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-04 22:30:05.996879",
    "valor": 94.16
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-05 22:30:05.996879",
    "valor": 48.13
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-06 22:30:05.996879",
    "valor": 41.07
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-07 22:30:05.996879",
    "valor": 50.6
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-08 22:30:05.996879",
    "valor": 87.84
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-09 22:30:05.996879",
    "valor": 67.25
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-10 22:30:05.996879",
    "valor": 53.93
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-11 22:30:05.996879",
    "valor": 76.16
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-12 22:30:05.996879",
    "valor": 37.36
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-13 22:30:05.996879",
    "valor": 85.6
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-14 22:30:05.996879",
    "valor": 53.32
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-15 22:30:05.996879",
    "valor": 62.44
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-16 22:30:05.996879",
    "valor": 12.65
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-17 22:30:05.996879",
    "valor": 74.21
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-18 22:30:05.996879",
    "valor": 64.18
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-19 22:30:05.996879",
    "valor": 36.95
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-20 22:30:05.996879",
    "valor": 63.23
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-21 22:30:05.996879",
    "valor": 8.99
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-22 22:30:05.996879",
    "valor": 93.52
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-23 22:30:05.996879",
    "valor": 65.97
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-24 22:30:05.996879",
    "valor": 40.97
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-25 22:30:05.996879",
    "valor": 72.74
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-26 22:30:05.996879",
    "valor": 91.91
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-27 22:30:05.996879",
    "valor": 43.74
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-28 22:30:05.996879",
    "valor": 5.95
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-29 22:30:05.996879",
    "valor": 28.29
  },
  {
    "id_sensor": 70,
    "data_hora": "2025-07-30 22:30:05.996879",
    "valor": 50.96
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-01 22:30:05.997067",
    "valor": 51.69
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-02 22:30:05.997067",
    "valor": 57.25
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-03 22:30:05.997067",
    "valor": 56.77
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-04 22:30:05.997067",
    "valor": 45.12
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-05 22:30:05.997067",
    "valor": 40.2
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-06 22:30:05.997067",
    "valor": 74.51
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-07 22:30:05.997067",
    "valor": 57.97
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-08 22:30:05.997067",
    "valor": 50.04
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-09 22:30:05.997067",
    "valor": 36.05
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-10 22:30:05.997067",
    "valor": 7.21
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-11 22:30:05.997067",
    "valor": 14.41
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-12 22:30:05.997067",
    "valor": 42.44
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-13 22:30:05.997067",
    "valor": 91.56
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-14 22:30:05.997067",
    "valor": 15.45
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-15 22:30:05.997067",
    "valor": 89.66
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-16 22:30:05.997067",
    "valor": 17.75
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-17 22:30:05.997067",
    "valor": 33.07
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-18 22:30:05.997067",
    "valor": 45.98
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-19 22:30:05.997067",
    "valor": 23.62
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-20 22:30:05.997067",
    "valor": 48.46
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-21 22:30:05.997067",
    "valor": 47.85
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-22 22:30:05.997067",
    "valor": 44.43
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-23 22:30:05.997067",
    "valor": 67.71
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-24 22:30:05.997067",
    "valor": 33.7
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-25 22:30:05.997067",
    "valor": 32.02
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-26 22:30:05.997067",
    "valor": 77.92
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-27 22:30:05.997067",
    "valor": 15.36
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-28 22:30:05.997067",
    "valor": 81.43
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-29 22:30:05.997067",
    "valor": 63.32
  },
  {
    "id_sensor": 71,
    "data_hora": "2025-07-30 22:30:05.997067",
    "valor": 65.94
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-01 22:30:05.997272",
    "valor": 19.79
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-02 22:30:05.997272",
    "valor": 93.55
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-03 22:30:05.997272",
    "valor": 26.95
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-04 22:30:05.997272",
    "valor": 20.7
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-05 22:30:05.997272",
    "valor": 19.41
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-06 22:30:05.997272",
    "valor": 55.39
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-07 22:30:05.997272",
    "valor": 91.26
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-08 22:30:05.997272",
    "valor": 25.87
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-09 22:30:05.997272",
    "valor": 41.45
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-10 22:30:05.997272",
    "valor": 21.6
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-11 22:30:05.997272",
    "valor": 62.64
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-12 22:30:05.997272",
    "valor": 43.89
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-13 22:30:05.997272",
    "valor": 7.63
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-14 22:30:05.997272",
    "valor": 60.27
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-15 22:30:05.997272",
    "valor": 22.76
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-16 22:30:05.997272",
    "valor": 58.3
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-17 22:30:05.997272",
    "valor": 40
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-18 22:30:05.997272",
    "valor": 68.43
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-19 22:30:05.997272",
    "valor": 23.52
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-20 22:30:05.997272",
    "valor": 72.71
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-21 22:30:05.997272",
    "valor": 77.79
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-22 22:30:05.997272",
    "valor": 10.63
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-23 22:30:05.997272",
    "valor": 14.16
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-24 22:30:05.997272",
    "valor": 83.48
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-25 22:30:05.997272",
    "valor": 21.83
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-26 22:30:05.997272",
    "valor": 34.34
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-27 22:30:05.997272",
    "valor": 46.18
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-28 22:30:05.997272",
    "valor": 28.61
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-29 22:30:05.997272",
    "valor": 82.64
  },
  {
    "id_sensor": 72,
    "data_hora": "2025-07-30 22:30:05.997272",
    "valor": 52.49
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-01 22:30:05.997470",
    "valor": 62.52
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-02 22:30:05.997470",
    "valor": 58.73
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-03 22:30:05.997470",
    "valor": 60.02
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-04 22:30:05.997470",
    "valor": 57.83
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-05 22:30:05.997470",
    "valor": 36.31
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-06 22:30:05.997470",
    "valor": 81.1
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-07 22:30:05.997470",
    "valor": 60.56
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-08 22:30:05.997470",
    "valor": 78.24
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-09 22:30:05.997470",
    "valor": 68.54
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-10 22:30:05.997470",
    "valor": 31.77
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-11 22:30:05.997470",
    "valor": 60.3
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-12 22:30:05.997470",
    "valor": 12.63
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-13 22:30:05.997470",
    "valor": 17.06
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-14 22:30:05.997470",
    "valor": 15.61
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-15 22:30:05.997470",
    "valor": 32.48
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-16 22:30:05.997470",
    "valor": 21.47
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-17 22:30:05.997470",
    "valor": 67.41
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-18 22:30:05.997470",
    "valor": 50.97
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-19 22:30:05.997470",
    "valor": 42.64
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-20 22:30:05.997470",
    "valor": 17.41
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-21 22:30:05.997470",
    "valor": 39.53
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-22 22:30:05.997470",
    "valor": 21.72
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-23 22:30:05.997470",
    "valor": 62.2
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-24 22:30:05.997470",
    "valor": 67.41
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-25 22:30:05.997470",
    "valor": 63.07
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-26 22:30:05.997470",
    "valor": 94.99
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-27 22:30:05.997470",
    "valor": 54.94
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-28 22:30:05.997470",
    "valor": 49.07
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-29 22:30:05.997470",
    "valor": 17.63
  },
  {
    "id_sensor": 73,
    "data_hora": "2025-07-30 22:30:05.997470",
    "valor": 33.31
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-01 22:30:05.997676",
    "valor": 45.59
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-02 22:30:05.997676",
    "valor": 9.83
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-03 22:30:05.997676",
    "valor": 37.31
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-04 22:30:05.997676",
    "valor": 5.86
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-05 22:30:05.997676",
    "valor": 17.29
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-06 22:30:05.997676",
    "valor": 78.37
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-07 22:30:05.997676",
    "valor": 91.74
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-08 22:30:05.997676",
    "valor": 50.49
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-09 22:30:05.997676",
    "valor": 49.55
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-10 22:30:05.997676",
    "valor": 66.62
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-11 22:30:05.997676",
    "valor": 42.41
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-12 22:30:05.997676",
    "valor": 80.59
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-13 22:30:05.997676",
    "valor": 48.98
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-14 22:30:05.997676",
    "valor": 12.44
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-15 22:30:05.997676",
    "valor": 7.78
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-16 22:30:05.997676",
    "valor": 73.5
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-17 22:30:05.997676",
    "valor": 31.29
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-18 22:30:05.997676",
    "valor": 29.74
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-19 22:30:05.997676",
    "valor": 53.38
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-20 22:30:05.997676",
    "valor": 20.14
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-21 22:30:05.997676",
    "valor": 46.16
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-22 22:30:05.997676",
    "valor": 71.83
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-23 22:30:05.997676",
    "valor": 73.93
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-24 22:30:05.997676",
    "valor": 54.48
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-25 22:30:05.997676",
    "valor": 15.19
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-26 22:30:05.997676",
    "valor": 15.28
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-27 22:30:05.997676",
    "valor": 74.76
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-28 22:30:05.997676",
    "valor": 79.1
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-29 22:30:05.997676",
    "valor": 38.02
  },
  {
    "id_sensor": 74,
    "data_hora": "2025-07-30 22:30:05.997676",
    "valor": 79.03
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-01 22:30:05.997866",
    "valor": 8.74
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-02 22:30:05.997866",
    "valor": 69.71
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-03 22:30:05.997866",
    "valor": 54.17
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-04 22:30:05.997866",
    "valor": 94.08
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-05 22:30:05.997866",
    "valor": 14.22
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-06 22:30:05.997866",
    "valor": 79.71
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-07 22:30:05.997866",
    "valor": 72.62
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-08 22:30:05.997866",
    "valor": 31.79
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-09 22:30:05.997866",
    "valor": 94.94
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-10 22:30:05.997866",
    "valor": 45.48
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-11 22:30:05.997866",
    "valor": 36.37
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-12 22:30:05.997866",
    "valor": 78.51
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-13 22:30:05.997866",
    "valor": 44.52
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-14 22:30:05.997866",
    "valor": 94.46
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-15 22:30:05.997866",
    "valor": 74.81
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-16 22:30:05.997866",
    "valor": 26.33
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-17 22:30:05.997866",
    "valor": 77.96
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-18 22:30:05.997866",
    "valor": 57.91
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-19 22:30:05.997866",
    "valor": 36.56
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-20 22:30:05.997866",
    "valor": 68.97
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-21 22:30:05.997866",
    "valor": 61.95
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-22 22:30:05.997866",
    "valor": 19.94
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-23 22:30:05.997866",
    "valor": 17.53
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-24 22:30:05.997866",
    "valor": 23.6
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-25 22:30:05.997866",
    "valor": 23.62
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-26 22:30:05.997866",
    "valor": 10.34
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-27 22:30:05.997866",
    "valor": 36.57
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-28 22:30:05.997866",
    "valor": 30.3
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-29 22:30:05.997866",
    "valor": 53.49
  },
  {
    "id_sensor": 75,
    "data_hora": "2025-07-30 22:30:05.997866",
    "valor": 34.13
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-01 22:30:05.998058",
    "valor": 68.36
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-02 22:30:05.998058",
    "valor": 31.04
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-03 22:30:05.998058",
    "valor": 29.06
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-04 22:30:05.998058",
    "valor": 82.22
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-05 22:30:05.998058",
    "valor": 93.69
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-06 22:30:05.998058",
    "valor": 66.14
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-07 22:30:05.998058",
    "valor": 13.57
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-08 22:30:05.998058",
    "valor": 91.65
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-09 22:30:05.998058",
    "valor": 75.71
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-10 22:30:05.998058",
    "valor": 87.69
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-11 22:30:05.998058",
    "valor": 94.32
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-12 22:30:05.998058",
    "valor": 83.03
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-13 22:30:05.998058",
    "valor": 16.42
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-14 22:30:05.998058",
    "valor": 82.95
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-15 22:30:05.998058",
    "valor": 27.47
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-16 22:30:05.998058",
    "valor": 69.03
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-17 22:30:05.998058",
    "valor": 79.56
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-18 22:30:05.998058",
    "valor": 73.53
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-19 22:30:05.998058",
    "valor": 65.86
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-20 22:30:05.998058",
    "valor": 49.05
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-21 22:30:05.998058",
    "valor": 56.97
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-22 22:30:05.998058",
    "valor": 29.18
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-23 22:30:05.998058",
    "valor": 42.28
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-24 22:30:05.998058",
    "valor": 45.68
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-25 22:30:05.998058",
    "valor": 62.03
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-26 22:30:05.998058",
    "valor": 84.21
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-27 22:30:05.998058",
    "valor": 13.38
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-28 22:30:05.998058",
    "valor": 51.41
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-29 22:30:05.998058",
    "valor": 30.04
  },
  {
    "id_sensor": 76,
    "data_hora": "2025-07-30 22:30:05.998058",
    "valor": 89.27
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-01 22:30:05.998265",
    "valor": 38.22
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-02 22:30:05.998265",
    "valor": 90.52
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-03 22:30:05.998265",
    "valor": 34.46
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-04 22:30:05.998265",
    "valor": 5.22
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-05 22:30:05.998265",
    "valor": 74.67
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-06 22:30:05.998265",
    "valor": 70.95
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-07 22:30:05.998265",
    "valor": 70.78
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-08 22:30:05.998265",
    "valor": 46.26
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-09 22:30:05.998265",
    "valor": 64.77
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-10 22:30:05.998265",
    "valor": 37.24
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-11 22:30:05.998265",
    "valor": 10.7
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-12 22:30:05.998265",
    "valor": 53.1
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-13 22:30:05.998265",
    "valor": 24.6
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-14 22:30:05.998265",
    "valor": 43.67
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-15 22:30:05.998265",
    "valor": 24.07
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-16 22:30:05.998265",
    "valor": 29.17
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-17 22:30:05.998265",
    "valor": 79.55
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-18 22:30:05.998265",
    "valor": 35.4
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-19 22:30:05.998265",
    "valor": 57.01
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-20 22:30:05.998265",
    "valor": 55.95
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-21 22:30:05.998265",
    "valor": 48.68
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-22 22:30:05.998265",
    "valor": 35.94
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-23 22:30:05.998265",
    "valor": 66.43
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-24 22:30:05.998265",
    "valor": 9.36
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-25 22:30:05.998265",
    "valor": 13.96
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-26 22:30:05.998265",
    "valor": 75.55
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-27 22:30:05.998265",
    "valor": 46.36
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-28 22:30:05.998265",
    "valor": 16.18
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-29 22:30:05.998265",
    "valor": 82.19
  },
  {
    "id_sensor": 77,
    "data_hora": "2025-07-30 22:30:05.998265",
    "valor": 44.72
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-01 22:30:05.998492",
    "valor": 5.06
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-02 22:30:05.998492",
    "valor": 91.22
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-03 22:30:05.998492",
    "valor": 23.21
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-04 22:30:05.998492",
    "valor": 66.97
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-05 22:30:05.998492",
    "valor": 16.87
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-06 22:30:05.998492",
    "valor": 63.5
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-07 22:30:05.998492",
    "valor": 19.31
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-08 22:30:05.998492",
    "valor": 88.95
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-09 22:30:05.998492",
    "valor": 29.66
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-10 22:30:05.998492",
    "valor": 63.91
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-11 22:30:05.998492",
    "valor": 27.54
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-12 22:30:05.998492",
    "valor": 38.47
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-13 22:30:05.998492",
    "valor": 86.34
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-14 22:30:05.998492",
    "valor": 19.9
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-15 22:30:05.998492",
    "valor": 40.67
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-16 22:30:05.998492",
    "valor": 32.5
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-17 22:30:05.998492",
    "valor": 67.95
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-18 22:30:05.998492",
    "valor": 26.07
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-19 22:30:05.998492",
    "valor": 63.99
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-20 22:30:05.998492",
    "valor": 68.33
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-21 22:30:05.998492",
    "valor": 5.1
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-22 22:30:05.998492",
    "valor": 47.91
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-23 22:30:05.998492",
    "valor": 16.94
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-24 22:30:05.998492",
    "valor": 25.36
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-25 22:30:05.998492",
    "valor": 66.2
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-26 22:30:05.998492",
    "valor": 5.84
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-27 22:30:05.998492",
    "valor": 67.6
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-28 22:30:05.998492",
    "valor": 78.54
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-29 22:30:05.998492",
    "valor": 93.93
  },
  {
    "id_sensor": 78,
    "data_hora": "2025-07-30 22:30:05.998492",
    "valor": 43.01
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-01 22:30:05.998673",
    "valor": 16.9
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-02 22:30:05.998673",
    "valor": 11.37
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-03 22:30:05.998673",
    "valor": 39.48
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-04 22:30:05.998673",
    "valor": 70.77
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-05 22:30:05.998673",
    "valor": 14.22
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-06 22:30:05.998673",
    "valor": 33.2
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-07 22:30:05.998673",
    "valor": 84.29
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-08 22:30:05.998673",
    "valor": 17.34
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-09 22:30:05.998673",
    "valor": 74.61
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-10 22:30:05.998673",
    "valor": 72.78
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-11 22:30:05.998673",
    "valor": 16.98
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-12 22:30:05.998673",
    "valor": 94.36
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-13 22:30:05.998673",
    "valor": 17.86
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-14 22:30:05.998673",
    "valor": 52.75
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-15 22:30:05.998673",
    "valor": 5.76
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-16 22:30:05.998673",
    "valor": 63.5
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-17 22:30:05.998673",
    "valor": 44.61
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-18 22:30:05.998673",
    "valor": 70.02
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-19 22:30:05.998673",
    "valor": 61.53
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-20 22:30:05.998673",
    "valor": 18.62
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-21 22:30:05.998673",
    "valor": 42.05
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-22 22:30:05.998673",
    "valor": 66.79
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-23 22:30:05.998673",
    "valor": 82.4
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-24 22:30:05.998673",
    "valor": 12.8
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-25 22:30:05.998673",
    "valor": 14.04
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-26 22:30:05.998673",
    "valor": 72.72
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-27 22:30:05.998673",
    "valor": 58.06
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-28 22:30:05.998673",
    "valor": 39.56
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-29 22:30:05.998673",
    "valor": 91.69
  },
  {
    "id_sensor": 79,
    "data_hora": "2025-07-30 22:30:05.998673",
    "valor": 33.31
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-01 22:30:05.998850",
    "valor": 17.58
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-02 22:30:05.998850",
    "valor": 29.93
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-03 22:30:05.998850",
    "valor": 12.58
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-04 22:30:05.998850",
    "valor": 54.81
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-05 22:30:05.998850",
    "valor": 59
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-06 22:30:05.998850",
    "valor": 59.68
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-07 22:30:05.998850",
    "valor": 75.11
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-08 22:30:05.998850",
    "valor": 67.14
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-09 22:30:05.998850",
    "valor": 81.31
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-10 22:30:05.998850",
    "valor": 64.26
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-11 22:30:05.998850",
    "valor": 32.15
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-12 22:30:05.998850",
    "valor": 51.6
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-13 22:30:05.998850",
    "valor": 50.86
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-14 22:30:05.998850",
    "valor": 72.31
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-15 22:30:05.998850",
    "valor": 31.6
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-16 22:30:05.998850",
    "valor": 9.91
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-17 22:30:05.998850",
    "valor": 85.81
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-18 22:30:05.998850",
    "valor": 90.92
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-19 22:30:05.998850",
    "valor": 49.54
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-20 22:30:05.998850",
    "valor": 15.15
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-21 22:30:05.998850",
    "valor": 49.96
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-22 22:30:05.998850",
    "valor": 58.45
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-23 22:30:05.998850",
    "valor": 52.55
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-24 22:30:05.998850",
    "valor": 92.99
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-25 22:30:05.998850",
    "valor": 93.82
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-26 22:30:05.998850",
    "valor": 89.05
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-27 22:30:05.998850",
    "valor": 16.88
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-28 22:30:05.998850",
    "valor": 82.47
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-29 22:30:05.998850",
    "valor": 56.15
  },
  {
    "id_sensor": 80,
    "data_hora": "2025-07-30 22:30:05.998850",
    "valor": 37.89
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-01 22:30:05.999029",
    "valor": 66.46
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-02 22:30:05.999029",
    "valor": 73.65
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-03 22:30:05.999029",
    "valor": 90.9
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-04 22:30:05.999029",
    "valor": 74.33
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-05 22:30:05.999029",
    "valor": 6.5
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-06 22:30:05.999029",
    "valor": 11.08
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-07 22:30:05.999029",
    "valor": 28.6
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-08 22:30:05.999029",
    "valor": 8.58
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-09 22:30:05.999029",
    "valor": 10.44
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-10 22:30:05.999029",
    "valor": 76.04
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-11 22:30:05.999029",
    "valor": 50.59
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-12 22:30:05.999029",
    "valor": 61.57
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-13 22:30:05.999029",
    "valor": 50.09
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-14 22:30:05.999029",
    "valor": 42.39
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-15 22:30:05.999029",
    "valor": 68.16
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-16 22:30:05.999029",
    "valor": 12.42
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-17 22:30:05.999029",
    "valor": 53.29
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-18 22:30:05.999029",
    "valor": 60.44
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-19 22:30:05.999029",
    "valor": 29.97
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-20 22:30:05.999029",
    "valor": 32.89
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-21 22:30:05.999029",
    "valor": 51.02
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-22 22:30:05.999029",
    "valor": 23.29
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-23 22:30:05.999029",
    "valor": 77.73
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-24 22:30:05.999029",
    "valor": 53.28
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-25 22:30:05.999029",
    "valor": 40.17
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-26 22:30:05.999029",
    "valor": 62.09
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-27 22:30:05.999029",
    "valor": 80.11
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-28 22:30:05.999029",
    "valor": 66.3
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-29 22:30:05.999029",
    "valor": 10.95
  },
  {
    "id_sensor": 81,
    "data_hora": "2025-07-30 22:30:05.999029",
    "valor": 67.88
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-01 22:30:05.999226",
    "valor": 70.7
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-02 22:30:05.999226",
    "valor": 81.18
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-03 22:30:05.999226",
    "valor": 10.21
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-04 22:30:05.999226",
    "valor": 12.76
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-05 22:30:05.999226",
    "valor": 44.1
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-06 22:30:05.999226",
    "valor": 45.8
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-07 22:30:05.999226",
    "valor": 59.79
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-08 22:30:05.999226",
    "valor": 32.84
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-09 22:30:05.999226",
    "valor": 71.75
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-10 22:30:05.999226",
    "valor": 71.66
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-11 22:30:05.999226",
    "valor": 15.75
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-12 22:30:05.999226",
    "valor": 68.71
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-13 22:30:05.999226",
    "valor": 68.13
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-14 22:30:05.999226",
    "valor": 19.74
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-15 22:30:05.999226",
    "valor": 90.77
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-16 22:30:05.999226",
    "valor": 52.07
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-17 22:30:05.999226",
    "valor": 75.47
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-18 22:30:05.999226",
    "valor": 69.87
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-19 22:30:05.999226",
    "valor": 20.03
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-20 22:30:05.999226",
    "valor": 16.42
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-21 22:30:05.999226",
    "valor": 75.3
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-22 22:30:05.999226",
    "valor": 29.19
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-23 22:30:05.999226",
    "valor": 84.78
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-24 22:30:05.999226",
    "valor": 74.43
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-25 22:30:05.999226",
    "valor": 7.64
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-26 22:30:05.999226",
    "valor": 77.64
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-27 22:30:05.999226",
    "valor": 29.48
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-28 22:30:05.999226",
    "valor": 10.75
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-29 22:30:05.999226",
    "valor": 69.11
  },
  {
    "id_sensor": 82,
    "data_hora": "2025-07-30 22:30:05.999226",
    "valor": 56.9
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-01 22:30:05.999436",
    "valor": 11.94
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-02 22:30:05.999436",
    "valor": 45.97
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-03 22:30:05.999436",
    "valor": 37.41
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-04 22:30:05.999436",
    "valor": 49.96
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-05 22:30:05.999436",
    "valor": 56.02
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-06 22:30:05.999436",
    "valor": 38.09
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-07 22:30:05.999436",
    "valor": 27.96
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-08 22:30:05.999436",
    "valor": 14.26
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-09 22:30:05.999436",
    "valor": 56.65
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-10 22:30:05.999436",
    "valor": 70.05
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-11 22:30:05.999436",
    "valor": 25.56
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-12 22:30:05.999436",
    "valor": 50.79
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-13 22:30:05.999436",
    "valor": 8.96
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-14 22:30:05.999436",
    "valor": 82.66
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-15 22:30:05.999436",
    "valor": 27.01
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-16 22:30:05.999436",
    "valor": 47.46
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-17 22:30:05.999436",
    "valor": 39.47
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-18 22:30:05.999436",
    "valor": 18.51
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-19 22:30:05.999436",
    "valor": 88.8
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-20 22:30:05.999436",
    "valor": 82.17
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-21 22:30:05.999436",
    "valor": 54.76
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-22 22:30:05.999436",
    "valor": 87.26
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-23 22:30:05.999436",
    "valor": 71.66
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-24 22:30:05.999436",
    "valor": 42.74
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-25 22:30:05.999436",
    "valor": 33.96
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-26 22:30:05.999436",
    "valor": 42.46
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-27 22:30:05.999436",
    "valor": 69.83
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-28 22:30:05.999436",
    "valor": 29.41
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-29 22:30:05.999436",
    "valor": 12.01
  },
  {
    "id_sensor": 83,
    "data_hora": "2025-07-30 22:30:05.999436",
    "valor": 38.55
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-01 22:30:05.999632",
    "valor": 50.18
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-02 22:30:05.999632",
    "valor": 86.17
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-03 22:30:05.999632",
    "valor": 21.14
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-04 22:30:05.999632",
    "valor": 77.39
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-05 22:30:05.999632",
    "valor": 93.33
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-06 22:30:05.999632",
    "valor": 90.87
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-07 22:30:05.999632",
    "valor": 11.2
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-08 22:30:05.999632",
    "valor": 46.86
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-09 22:30:05.999632",
    "valor": 30.41
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-10 22:30:05.999632",
    "valor": 81.04
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-11 22:30:05.999632",
    "valor": 34.46
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-12 22:30:05.999632",
    "valor": 54.78
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-13 22:30:05.999632",
    "valor": 5.72
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-14 22:30:05.999632",
    "valor": 23.06
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-15 22:30:05.999632",
    "valor": 55.74
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-16 22:30:05.999632",
    "valor": 32.35
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-17 22:30:05.999632",
    "valor": 61.04
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-18 22:30:05.999632",
    "valor": 46.75
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-19 22:30:05.999632",
    "valor": 58.25
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-20 22:30:05.999632",
    "valor": 49.4
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-21 22:30:05.999632",
    "valor": 74.54
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-22 22:30:05.999632",
    "valor": 22.59
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-23 22:30:05.999632",
    "valor": 86.04
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-24 22:30:05.999632",
    "valor": 73.44
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-25 22:30:05.999632",
    "valor": 27.06
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-26 22:30:05.999632",
    "valor": 5.57
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-27 22:30:05.999632",
    "valor": 41.9
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-28 22:30:05.999632",
    "valor": 25.97
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-29 22:30:05.999632",
    "valor": 36.18
  },
  {
    "id_sensor": 84,
    "data_hora": "2025-07-30 22:30:05.999632",
    "valor": 80.56
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-01 22:30:05.999823",
    "valor": 83.95
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-02 22:30:05.999823",
    "valor": 90.59
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-03 22:30:05.999823",
    "valor": 5.13
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-04 22:30:05.999823",
    "valor": 64.16
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-05 22:30:05.999823",
    "valor": 81.41
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-06 22:30:05.999823",
    "valor": 70.45
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-07 22:30:05.999823",
    "valor": 14.36
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-08 22:30:05.999823",
    "valor": 52.68
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-09 22:30:05.999823",
    "valor": 26.44
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-10 22:30:05.999823",
    "valor": 49.28
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-11 22:30:05.999823",
    "valor": 10.39
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-12 22:30:05.999823",
    "valor": 94.73
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-13 22:30:05.999823",
    "valor": 69.05
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-14 22:30:05.999823",
    "valor": 13.37
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-15 22:30:05.999823",
    "valor": 87.91
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-16 22:30:05.999823",
    "valor": 85.76
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-17 22:30:05.999823",
    "valor": 51.78
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-18 22:30:05.999823",
    "valor": 68.08
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-19 22:30:05.999823",
    "valor": 38.52
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-20 22:30:05.999823",
    "valor": 92.71
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-21 22:30:05.999823",
    "valor": 12.64
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-22 22:30:05.999823",
    "valor": 13.6
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-23 22:30:05.999823",
    "valor": 17.02
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-24 22:30:05.999823",
    "valor": 78.8
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-25 22:30:05.999823",
    "valor": 11.73
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-26 22:30:05.999823",
    "valor": 56.1
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-27 22:30:05.999823",
    "valor": 44.15
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-28 22:30:05.999823",
    "valor": 91.78
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-29 22:30:05.999823",
    "valor": 26.31
  },
  {
    "id_sensor": 85,
    "data_hora": "2025-07-30 22:30:05.999823",
    "valor": 28.49
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-01 22:30:06.000017",
    "valor": 33.35
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-02 22:30:06.000017",
    "valor": 77.07
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-03 22:30:06.000017",
    "valor": 68.07
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-04 22:30:06.000017",
    "valor": 71.18
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-05 22:30:06.000017",
    "valor": 33.63
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-06 22:30:06.000017",
    "valor": 29.48
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-07 22:30:06.000017",
    "valor": 11.72
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-08 22:30:06.000017",
    "valor": 23.24
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-09 22:30:06.000017",
    "valor": 75.19
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-10 22:30:06.000017",
    "valor": 57.62
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-11 22:30:06.000017",
    "valor": 18.99
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-12 22:30:06.000017",
    "valor": 19.79
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-13 22:30:06.000017",
    "valor": 46.94
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-14 22:30:06.000017",
    "valor": 41.59
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-15 22:30:06.000017",
    "valor": 53.23
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-16 22:30:06.000017",
    "valor": 91.82
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-17 22:30:06.000017",
    "valor": 23.69
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-18 22:30:06.000017",
    "valor": 32.75
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-19 22:30:06.000017",
    "valor": 28.85
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-20 22:30:06.000017",
    "valor": 15.79
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-21 22:30:06.000017",
    "valor": 19.19
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-22 22:30:06.000017",
    "valor": 66.74
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-23 22:30:06.000017",
    "valor": 79.37
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-24 22:30:06.000017",
    "valor": 67.72
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-25 22:30:06.000017",
    "valor": 8.63
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-26 22:30:06.000017",
    "valor": 80.23
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-27 22:30:06.000017",
    "valor": 34.5
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-28 22:30:06.000017",
    "valor": 13.21
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-29 22:30:06.000017",
    "valor": 27.34
  },
  {
    "id_sensor": 86,
    "data_hora": "2025-07-30 22:30:06.000017",
    "valor": 37.02
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-01 22:30:06.000243",
    "valor": 51.21
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-02 22:30:06.000243",
    "valor": 65.95
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-03 22:30:06.000243",
    "valor": 28.42
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-04 22:30:06.000243",
    "valor": 94.16
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-05 22:30:06.000243",
    "valor": 7.8
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-06 22:30:06.000243",
    "valor": 41.4
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-07 22:30:06.000243",
    "valor": 45.7
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-08 22:30:06.000243",
    "valor": 72.33
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-09 22:30:06.000243",
    "valor": 27.49
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-10 22:30:06.000243",
    "valor": 46.58
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-11 22:30:06.000243",
    "valor": 77.35
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-12 22:30:06.000243",
    "valor": 17.58
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-13 22:30:06.000243",
    "valor": 6.08
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-14 22:30:06.000243",
    "valor": 79.73
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-15 22:30:06.000243",
    "valor": 93.43
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-16 22:30:06.000243",
    "valor": 16.76
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-17 22:30:06.000243",
    "valor": 79.13
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-18 22:30:06.000243",
    "valor": 38.5
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-19 22:30:06.000243",
    "valor": 61.73
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-20 22:30:06.000243",
    "valor": 63.02
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-21 22:30:06.000243",
    "valor": 57.41
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-22 22:30:06.000243",
    "valor": 28.29
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-23 22:30:06.000243",
    "valor": 78.15
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-24 22:30:06.000243",
    "valor": 6.96
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-25 22:30:06.000243",
    "valor": 10.8
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-26 22:30:06.000243",
    "valor": 86.22
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-27 22:30:06.000243",
    "valor": 44.91
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-28 22:30:06.000243",
    "valor": 16.59
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-29 22:30:06.000243",
    "valor": 86.46
  },
  {
    "id_sensor": 87,
    "data_hora": "2025-07-30 22:30:06.000243",
    "valor": 79.64
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-01 22:30:06.000461",
    "valor": 34.84
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-02 22:30:06.000461",
    "valor": 8.84
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-03 22:30:06.000461",
    "valor": 46.49
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-04 22:30:06.000461",
    "valor": 20.12
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-05 22:30:06.000461",
    "valor": 56.65
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-06 22:30:06.000461",
    "valor": 78.95
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-07 22:30:06.000461",
    "valor": 40.55
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-08 22:30:06.000461",
    "valor": 7.65
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-09 22:30:06.000461",
    "valor": 66.49
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-10 22:30:06.000461",
    "valor": 20.55
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-11 22:30:06.000461",
    "valor": 24.32
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-12 22:30:06.000461",
    "valor": 21.84
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-13 22:30:06.000461",
    "valor": 30.19
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-14 22:30:06.000461",
    "valor": 84.51
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-15 22:30:06.000461",
    "valor": 8.12
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-16 22:30:06.000461",
    "valor": 60.73
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-17 22:30:06.000461",
    "valor": 27.12
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-18 22:30:06.000461",
    "valor": 31.56
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-19 22:30:06.000461",
    "valor": 42.08
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-20 22:30:06.000461",
    "valor": 54.56
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-21 22:30:06.000461",
    "valor": 10.49
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-22 22:30:06.000461",
    "valor": 30.18
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-23 22:30:06.000461",
    "valor": 17.35
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-24 22:30:06.000461",
    "valor": 22.95
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-25 22:30:06.000461",
    "valor": 84.62
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-26 22:30:06.000461",
    "valor": 52.32
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-27 22:30:06.000461",
    "valor": 61.77
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-28 22:30:06.000461",
    "valor": 77.2
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-29 22:30:06.000461",
    "valor": 76.54
  },
  {
    "id_sensor": 88,
    "data_hora": "2025-07-30 22:30:06.000461",
    "valor": 94.05
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-01 22:30:06.000660",
    "valor": 75.37
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-02 22:30:06.000660",
    "valor": 37.32
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-03 22:30:06.000660",
    "valor": 54.01
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-04 22:30:06.000660",
    "valor": 48.62
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-05 22:30:06.000660",
    "valor": 87.14
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-06 22:30:06.000660",
    "valor": 50.22
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-07 22:30:06.000660",
    "valor": 39.95
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-08 22:30:06.000660",
    "valor": 21.18
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-09 22:30:06.000660",
    "valor": 33.7
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-10 22:30:06.000660",
    "valor": 24.71
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-11 22:30:06.000660",
    "valor": 85.62
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-12 22:30:06.000660",
    "valor": 75.07
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-13 22:30:06.000660",
    "valor": 10.27
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-14 22:30:06.000660",
    "valor": 94.24
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-15 22:30:06.000660",
    "valor": 52.65
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-16 22:30:06.000660",
    "valor": 74.02
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-17 22:30:06.000660",
    "valor": 94.96
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-18 22:30:06.000660",
    "valor": 92.66
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-19 22:30:06.000660",
    "valor": 14.01
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-20 22:30:06.000660",
    "valor": 64.12
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-21 22:30:06.000660",
    "valor": 28.99
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-22 22:30:06.000660",
    "valor": 78.47
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-23 22:30:06.000660",
    "valor": 87.55
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-24 22:30:06.000660",
    "valor": 10.03
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-25 22:30:06.000660",
    "valor": 94.68
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-26 22:30:06.000660",
    "valor": 24.75
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-27 22:30:06.000660",
    "valor": 81.19
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-28 22:30:06.000660",
    "valor": 76.77
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-29 22:30:06.000660",
    "valor": 36.93
  },
  {
    "id_sensor": 89,
    "data_hora": "2025-07-30 22:30:06.000660",
    "valor": 80.53
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-01 22:30:06.000876",
    "valor": 81.07
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-02 22:30:06.000876",
    "valor": 20.85
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-03 22:30:06.000876",
    "valor": 58.33
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-04 22:30:06.000876",
    "valor": 77.56
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-05 22:30:06.000876",
    "valor": 67.79
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-06 22:30:06.000876",
    "valor": 87.26
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-07 22:30:06.000876",
    "valor": 7.54
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-08 22:30:06.000876",
    "valor": 68.05
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-09 22:30:06.000876",
    "valor": 90.28
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-10 22:30:06.000876",
    "valor": 55.72
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-11 22:30:06.000876",
    "valor": 55.68
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-12 22:30:06.000876",
    "valor": 21.94
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-13 22:30:06.000876",
    "valor": 93.92
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-14 22:30:06.000876",
    "valor": 84.35
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-15 22:30:06.000876",
    "valor": 49.3
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-16 22:30:06.000876",
    "valor": 32.81
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-17 22:30:06.000876",
    "valor": 49.14
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-18 22:30:06.000876",
    "valor": 13.12
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-19 22:30:06.000876",
    "valor": 25.94
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-20 22:30:06.000876",
    "valor": 24.69
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-21 22:30:06.000876",
    "valor": 52.38
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-22 22:30:06.000876",
    "valor": 5.06
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-23 22:30:06.000876",
    "valor": 87.61
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-24 22:30:06.000876",
    "valor": 23.13
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-25 22:30:06.000876",
    "valor": 16.74
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-26 22:30:06.000876",
    "valor": 69.52
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-27 22:30:06.000876",
    "valor": 87.69
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-28 22:30:06.000876",
    "valor": 80.99
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-29 22:30:06.000876",
    "valor": 34.12
  },
  {
    "id_sensor": 90,
    "data_hora": "2025-07-30 22:30:06.000876",
    "valor": 6.97
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-01 22:30:06.001068",
    "valor": 57.79
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-02 22:30:06.001068",
    "valor": 87.55
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-03 22:30:06.001068",
    "valor": 74.69
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-04 22:30:06.001068",
    "valor": 81.18
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-05 22:30:06.001068",
    "valor": 82.46
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-06 22:30:06.001068",
    "valor": 91.45
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-07 22:30:06.001068",
    "valor": 38.62
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-08 22:30:06.001068",
    "valor": 89.77
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-09 22:30:06.001068",
    "valor": 40.6
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-10 22:30:06.001068",
    "valor": 14.09
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-11 22:30:06.001068",
    "valor": 32.16
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-12 22:30:06.001068",
    "valor": 17.28
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-13 22:30:06.001068",
    "valor": 19.18
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-14 22:30:06.001068",
    "valor": 90.38
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-15 22:30:06.001068",
    "valor": 76.27
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-16 22:30:06.001068",
    "valor": 91.46
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-17 22:30:06.001068",
    "valor": 63.43
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-18 22:30:06.001068",
    "valor": 20.68
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-19 22:30:06.001068",
    "valor": 92.19
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-20 22:30:06.001068",
    "valor": 67.42
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-21 22:30:06.001068",
    "valor": 88.6
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-22 22:30:06.001068",
    "valor": 75.83
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-23 22:30:06.001068",
    "valor": 25.09
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-24 22:30:06.001068",
    "valor": 58.01
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-25 22:30:06.001068",
    "valor": 20.78
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-26 22:30:06.001068",
    "valor": 32.61
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-27 22:30:06.001068",
    "valor": 66.96
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-28 22:30:06.001068",
    "valor": 16.46
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-29 22:30:06.001068",
    "valor": 70.59
  },
  {
    "id_sensor": 91,
    "data_hora": "2025-07-30 22:30:06.001068",
    "valor": 90.39
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-01 22:30:06.001406",
    "valor": 90.38
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-02 22:30:06.001406",
    "valor": 40.24
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-03 22:30:06.001406",
    "valor": 94.49
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-04 22:30:06.001406",
    "valor": 91.87
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-05 22:30:06.001406",
    "valor": 7.91
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-06 22:30:06.001406",
    "valor": 59.21
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-07 22:30:06.001406",
    "valor": 87.89
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-08 22:30:06.001406",
    "valor": 92.08
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-09 22:30:06.001406",
    "valor": 24.88
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-10 22:30:06.001406",
    "valor": 55.9
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-11 22:30:06.001406",
    "valor": 89.3
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-12 22:30:06.001406",
    "valor": 17.66
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-13 22:30:06.001406",
    "valor": 72.08
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-14 22:30:06.001406",
    "valor": 26.42
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-15 22:30:06.001406",
    "valor": 93.41
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-16 22:30:06.001406",
    "valor": 20.11
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-17 22:30:06.001406",
    "valor": 84.68
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-18 22:30:06.001406",
    "valor": 12.99
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-19 22:30:06.001406",
    "valor": 68.81
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-20 22:30:06.001406",
    "valor": 62.52
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-21 22:30:06.001406",
    "valor": 84.8
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-22 22:30:06.001406",
    "valor": 45.2
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-23 22:30:06.001406",
    "valor": 28.87
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-24 22:30:06.001406",
    "valor": 27.46
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-25 22:30:06.001406",
    "valor": 11.1
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-26 22:30:06.001406",
    "valor": 28.1
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-27 22:30:06.001406",
    "valor": 14.72
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-28 22:30:06.001406",
    "valor": 5.12
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-29 22:30:06.001406",
    "valor": 39.73
  },
  {
    "id_sensor": 92,
    "data_hora": "2025-07-30 22:30:06.001406",
    "valor": 70.93
  }
];
    const tecnicosVisitasData = [
  {
    "id_fazenda": 1,
    "data_visita": "2025-07-29",
    "tecnico": "Cecília Cunha",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Necessitatibus ab ullam fuga assumenda pariatur et fuga quasi."
  },
  {
    "id_fazenda": 1,
    "data_visita": "2025-07-29",
    "tecnico": "Bruna Montenegro",
    "motivo": "Verificação de pragas",
    "recomendacao": "A delectus quasi nesciunt corporis."
  },
  {
    "id_fazenda": 1,
    "data_visita": "2025-07-29",
    "tecnico": "Léo Araújo",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Laborum quam cupiditate voluptatem ratione."
  },
  {
    "id_fazenda": 1,
    "data_visita": "2025-07-29",
    "tecnico": "Thomas Moura",
    "motivo": "Verificação de pragas",
    "recomendacao": "Optio modi vero rem quis."
  },
  {
    "id_fazenda": 2,
    "data_visita": "2025-07-29",
    "tecnico": "José Moreira",
    "motivo": "Análise de solo",
    "recomendacao": "At ducimus autem iusto illum asperiores incidunt eveniet."
  },
  {
    "id_fazenda": 2,
    "data_visita": "2025-07-29",
    "tecnico": "Yan Rios",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Nobis perferendis repudiandae iure nobis delectus nemo maiores aliquid."
  },
  {
    "id_fazenda": 2,
    "data_visita": "2025-07-29",
    "tecnico": "Mirella Gonçalves",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Impedit accusamus eaque dolor enim debitis."
  },
  {
    "id_fazenda": 3,
    "data_visita": "2025-07-29",
    "tecnico": "Sr. Eduardo Sampaio",
    "motivo": "Análise de solo",
    "recomendacao": "Deserunt esse molestiae distinctio sapiente perspiciatis tenetur dignissimos."
  },
  {
    "id_fazenda": 3,
    "data_visita": "2025-07-29",
    "tecnico": "Aylla Oliveira",
    "motivo": "Verificação de pragas",
    "recomendacao": "Doloribus repellat adipisci harum inventore impedit expedita ad."
  },
  {
    "id_fazenda": 3,
    "data_visita": "2025-07-29",
    "tecnico": "Maitê Peixoto",
    "motivo": "Análise de solo",
    "recomendacao": "Voluptatibus aperiam exercitationem eius in ullam ullam nemo at."
  },
  {
    "id_fazenda": 3,
    "data_visita": "2025-07-29",
    "tecnico": "Dra. Cecilia Abreu",
    "motivo": "Revisão de sensores",
    "recomendacao": "Reprehenderit ea culpa corrupti corrupti culpa praesentium non."
  },
  {
    "id_fazenda": 3,
    "data_visita": "2025-07-29",
    "tecnico": "Sr. Luan Marques",
    "motivo": "Análise de solo",
    "recomendacao": "Magnam excepturi libero voluptatum optio a natus nobis."
  },
  {
    "id_fazenda": 4,
    "data_visita": "2025-07-29",
    "tecnico": "Luiz Miguel Andrade",
    "motivo": "Revisão de sensores",
    "recomendacao": "Nisi excepturi dolorem natus quod dolore assumenda autem."
  },
  {
    "id_fazenda": 4,
    "data_visita": "2025-07-29",
    "tecnico": "Emanuel Sousa",
    "motivo": "Análise de solo",
    "recomendacao": "Perferendis quae quasi corporis tempora occaecati."
  },
  {
    "id_fazenda": 5,
    "data_visita": "2025-07-29",
    "tecnico": "Matheus Santos",
    "motivo": "Revisão de sensores",
    "recomendacao": "Velit corporis suscipit laudantium labore recusandae illo aperiam officiis."
  },
  {
    "id_fazenda": 5,
    "data_visita": "2025-07-29",
    "tecnico": "Danilo Sousa",
    "motivo": "Revisão de sensores",
    "recomendacao": "Ipsam corrupti aliquam ullam natus nam ab blanditiis exercitationem."
  },
  {
    "id_fazenda": 6,
    "data_visita": "2025-07-29",
    "tecnico": "Bryan Andrade",
    "motivo": "Revisão de sensores",
    "recomendacao": "Unde doloribus cum facere."
  },
  {
    "id_fazenda": 6,
    "data_visita": "2025-07-29",
    "tecnico": "João Gabriel Oliveira",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Laborum ipsam ipsa at nesciunt libero vel omnis dignissimos maxime."
  },
  {
    "id_fazenda": 6,
    "data_visita": "2025-07-29",
    "tecnico": "Davi Lucas Fonseca",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Praesentium et corrupti quibusdam minus sed."
  },
  {
    "id_fazenda": 7,
    "data_visita": "2025-07-29",
    "tecnico": "Maria Liz Melo",
    "motivo": "Verificação de pragas",
    "recomendacao": "Eaque quis corrupti impedit eum."
  },
  {
    "id_fazenda": 7,
    "data_visita": "2025-07-29",
    "tecnico": "Isadora Porto",
    "motivo": "Análise de solo",
    "recomendacao": "Veritatis vitae facere molestias."
  },
  {
    "id_fazenda": 7,
    "data_visita": "2025-07-29",
    "tecnico": "Melina Andrade",
    "motivo": "Revisão de sensores",
    "recomendacao": "Non repellendus architecto inventore."
  },
  {
    "id_fazenda": 7,
    "data_visita": "2025-07-29",
    "tecnico": "Catarina Borges",
    "motivo": "Verificação de pragas",
    "recomendacao": "Architecto perferendis perspiciatis ea molestiae veniam."
  },
  {
    "id_fazenda": 8,
    "data_visita": "2025-07-29",
    "tecnico": "Dr. Vitor Ramos",
    "motivo": "Revisão de sensores",
    "recomendacao": "Sunt quasi quos quidem accusantium exercitationem occaecati."
  },
  {
    "id_fazenda": 8,
    "data_visita": "2025-07-29",
    "tecnico": "Amanda Duarte",
    "motivo": "Análise de solo",
    "recomendacao": "Placeat quibusdam enim error eaque vero eveniet consectetur."
  },
  {
    "id_fazenda": 9,
    "data_visita": "2025-07-29",
    "tecnico": "Daniel Caldeira",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Voluptatem vel est odio molestiae et dignissimos nihil."
  },
  {
    "id_fazenda": 9,
    "data_visita": "2025-07-29",
    "tecnico": "Calebe Pinto",
    "motivo": "Revisão de sensores",
    "recomendacao": "Tempora unde omnis eligendi veritatis sint eius."
  },
  {
    "id_fazenda": 9,
    "data_visita": "2025-07-29",
    "tecnico": "Dra. Marina Melo",
    "motivo": "Revisão de sensores",
    "recomendacao": "Placeat voluptatem repellendus nam dicta nulla."
  },
  {
    "id_fazenda": 9,
    "data_visita": "2025-07-29",
    "tecnico": "Benjamin da Cunha",
    "motivo": "Verificação de pragas",
    "recomendacao": "Blanditiis quaerat accusamus ex dolorem eligendi dolores delectus."
  },
  {
    "id_fazenda": 9,
    "data_visita": "2025-07-29",
    "tecnico": "Valentim Pires",
    "motivo": "Verificação de pragas",
    "recomendacao": "Dolorem velit error omnis distinctio nobis ipsam tempore laborum quasi."
  },
  {
    "id_fazenda": 10,
    "data_visita": "2025-07-29",
    "tecnico": "Luiz Miguel Sousa",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Mollitia necessitatibus reiciendis quos tempora."
  },
  {
    "id_fazenda": 10,
    "data_visita": "2025-07-29",
    "tecnico": "Anna Liz Andrade",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Quae neque quod harum incidunt vel aspernatur voluptatum reprehenderit."
  },
  {
    "id_fazenda": 10,
    "data_visita": "2025-07-29",
    "tecnico": "Marcos Vinicius Pereira",
    "motivo": "Revisão de sensores",
    "recomendacao": "Et dolorem enim quis quod inventore expedita unde non laborum."
  },
  {
    "id_fazenda": 11,
    "data_visita": "2025-07-29",
    "tecnico": "Raquel Nogueira",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Alias corrupti illo quis sed consectetur."
  },
  {
    "id_fazenda": 11,
    "data_visita": "2025-07-29",
    "tecnico": "Dr. Ravi Casa Grande",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Distinctio laboriosam distinctio iure rem dolor officia dolor."
  },
  {
    "id_fazenda": 11,
    "data_visita": "2025-07-29",
    "tecnico": "Giovanna Rocha",
    "motivo": "Revisão de sensores",
    "recomendacao": "Eum quis nemo recusandae fugit modi tenetur ea."
  },
  {
    "id_fazenda": 12,
    "data_visita": "2025-07-29",
    "tecnico": "Arthur Miguel Teixeira",
    "motivo": "Análise de solo",
    "recomendacao": "Ratione iusto totam quisquam qui veritatis."
  },
  {
    "id_fazenda": 12,
    "data_visita": "2025-07-29",
    "tecnico": "Maria Alice Abreu",
    "motivo": "Análise de solo",
    "recomendacao": "Quae odio rem suscipit laborum molestiae."
  },
  {
    "id_fazenda": 12,
    "data_visita": "2025-07-29",
    "tecnico": "Brayan Carvalho",
    "motivo": "Revisão de sensores",
    "recomendacao": "Quaerat sit repellat earum occaecati."
  },
  {
    "id_fazenda": 12,
    "data_visita": "2025-07-29",
    "tecnico": "Luana da Luz",
    "motivo": "Análise de solo",
    "recomendacao": "Dolor dolores autem hic enim blanditiis."
  },
  {
    "id_fazenda": 12,
    "data_visita": "2025-07-29",
    "tecnico": "Sra. Lara Gomes",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Saepe optio aperiam nam quia rerum explicabo facere."
  },
  {
    "id_fazenda": 13,
    "data_visita": "2025-07-29",
    "tecnico": "Pedro Lucas Nogueira",
    "motivo": "Revisão de sensores",
    "recomendacao": "Eos molestias nam odio doloribus non corrupti occaecati iusto quis."
  },
  {
    "id_fazenda": 13,
    "data_visita": "2025-07-29",
    "tecnico": "Beatriz Carvalho",
    "motivo": "Verificação de pragas",
    "recomendacao": "Commodi facere quibusdam pariatur nesciunt."
  },
  {
    "id_fazenda": 13,
    "data_visita": "2025-07-29",
    "tecnico": "Ayla Leão",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Accusantium ipsum facere quo illum explicabo cumque harum ratione voluptatem."
  },
  {
    "id_fazenda": 13,
    "data_visita": "2025-07-29",
    "tecnico": "Luana Siqueira",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Magnam corrupti facilis ea optio et."
  },
  {
    "id_fazenda": 13,
    "data_visita": "2025-07-29",
    "tecnico": "Maria Júlia Aparecida",
    "motivo": "Verificação de pragas",
    "recomendacao": "Vitae cum ipsum beatae quisquam quidem sapiente totam dolor."
  },
  {
    "id_fazenda": 14,
    "data_visita": "2025-07-29",
    "tecnico": "Catarina Vasconcelos",
    "motivo": "Revisão de sensores",
    "recomendacao": "Dolor velit expedita reiciendis sit consequuntur magnam."
  },
  {
    "id_fazenda": 14,
    "data_visita": "2025-07-29",
    "tecnico": "Thomas Correia",
    "motivo": "Análise de solo",
    "recomendacao": "Voluptatum voluptates ratione numquam cum."
  },
  {
    "id_fazenda": 15,
    "data_visita": "2025-07-29",
    "tecnico": "Henrique Camargo",
    "motivo": "Análise de solo",
    "recomendacao": "Mollitia quam quod ea earum provident voluptatum reprehenderit eveniet error."
  },
  {
    "id_fazenda": 15,
    "data_visita": "2025-07-29",
    "tecnico": "Ravi Rios",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Explicabo recusandae quia laudantium ullam expedita ad quaerat."
  },
  {
    "id_fazenda": 15,
    "data_visita": "2025-07-29",
    "tecnico": "Clara Cavalcanti",
    "motivo": "Revisão de sensores",
    "recomendacao": "Vero eius enim deleniti non consectetur debitis."
  },
  {
    "id_fazenda": 15,
    "data_visita": "2025-07-29",
    "tecnico": "Sr. Francisco Camargo",
    "motivo": "Revisão de sensores",
    "recomendacao": "Blanditiis quae facilis dignissimos harum deserunt dignissimos."
  },
  {
    "id_fazenda": 16,
    "data_visita": "2025-07-29",
    "tecnico": "Ayla Ferreira",
    "motivo": "Verificação de pragas",
    "recomendacao": "Modi non quos accusamus rem occaecati illo repellat delectus iusto voluptas."
  },
  {
    "id_fazenda": 16,
    "data_visita": "2025-07-29",
    "tecnico": "Gustavo Henrique da Conceição",
    "motivo": "Verificação de pragas",
    "recomendacao": "Nobis molestiae ut architecto placeat."
  },
  {
    "id_fazenda": 16,
    "data_visita": "2025-07-29",
    "tecnico": "Ana Clara Martins",
    "motivo": "Verificação de pragas",
    "recomendacao": "Saepe delectus ducimus saepe tempora iste adipisci maxime veritatis."
  },
  {
    "id_fazenda": 16,
    "data_visita": "2025-07-29",
    "tecnico": "Srta. Isis Nunes",
    "motivo": "Revisão de sensores",
    "recomendacao": "Facere impedit ex deleniti blanditiis molestias praesentium officia molestias."
  },
  {
    "id_fazenda": 16,
    "data_visita": "2025-07-29",
    "tecnico": "Joana da Luz",
    "motivo": "Revisão de sensores",
    "recomendacao": "Aliquid perferendis consectetur soluta repellendus a perspiciatis."
  },
  {
    "id_fazenda": 17,
    "data_visita": "2025-07-29",
    "tecnico": "Ester Mendonça",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Ex laboriosam quis sint odio qui minus."
  },
  {
    "id_fazenda": 17,
    "data_visita": "2025-07-29",
    "tecnico": "Ana Júlia Souza",
    "motivo": "Verificação de pragas",
    "recomendacao": "Cum officia ipsam iste expedita inventore animi aut est."
  },
  {
    "id_fazenda": 18,
    "data_visita": "2025-07-29",
    "tecnico": "Dr. Anthony Gabriel Siqueira",
    "motivo": "Revisão de sensores",
    "recomendacao": "Quis ex cupiditate odit suscipit sequi magnam beatae."
  },
  {
    "id_fazenda": 18,
    "data_visita": "2025-07-29",
    "tecnico": "Dra. Heloísa Nunes",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Mollitia libero asperiores est ipsam rerum eos."
  },
  {
    "id_fazenda": 18,
    "data_visita": "2025-07-29",
    "tecnico": "Ísis Gomes",
    "motivo": "Verificação de pragas",
    "recomendacao": "Ipsum atque consequatur neque aperiam."
  },
  {
    "id_fazenda": 18,
    "data_visita": "2025-07-29",
    "tecnico": "Theodoro Ramos",
    "motivo": "Verificação de pragas",
    "recomendacao": "Perferendis corrupti commodi blanditiis voluptatem."
  },
  {
    "id_fazenda": 18,
    "data_visita": "2025-07-29",
    "tecnico": "Maysa Cavalcante",
    "motivo": "Análise de solo",
    "recomendacao": "Voluptate iste eum autem qui veniam pariatur ab reiciendis."
  },
  {
    "id_fazenda": 19,
    "data_visita": "2025-07-29",
    "tecnico": "Manuella da Mata",
    "motivo": "Análise de solo",
    "recomendacao": "Eaque quae eius possimus incidunt eos architecto cupiditate."
  },
  {
    "id_fazenda": 19,
    "data_visita": "2025-07-29",
    "tecnico": "Bruno da Cunha",
    "motivo": "Revisão de sensores",
    "recomendacao": "Ad dicta dolor nobis maxime iste et dignissimos."
  },
  {
    "id_fazenda": 19,
    "data_visita": "2025-07-29",
    "tecnico": "Heloisa Rezende",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Temporibus assumenda non quis architecto ipsam nisi."
  },
  {
    "id_fazenda": 19,
    "data_visita": "2025-07-29",
    "tecnico": "Isabel Moraes",
    "motivo": "Análise de solo",
    "recomendacao": "Mollitia nisi quisquam aspernatur."
  },
  {
    "id_fazenda": 19,
    "data_visita": "2025-07-29",
    "tecnico": "Eduardo Correia",
    "motivo": "Revisão de sensores",
    "recomendacao": "Quod dolore esse vitae quisquam excepturi."
  },
  {
    "id_fazenda": 20,
    "data_visita": "2025-07-29",
    "tecnico": "Maria Laura Peixoto",
    "motivo": "Recomendação nutricional",
    "recomendacao": "Facere perspiciatis delectus non saepe."
  },
  {
    "id_fazenda": 20,
    "data_visita": "2025-07-29",
    "tecnico": "Cecilia Ramos",
    "motivo": "Revisão de sensores",
    "recomendacao": "Iure eum repellat quas error sunt ipsum eum quidem iure."
  },
  {
    "id_fazenda": 20,
    "data_visita": "2025-07-29",
    "tecnico": "Maria Viana",
    "motivo": "Análise de solo",
    "recomendacao": "Expedita iusto ullam iste veritatis adipisci."
  }
];
const dashboardDisplay = document.getElementById('dashboard-display');
    const dashboardCardsAgro = document.querySelectorAll('#dashboards-agro .card');

    let chartInstances = {};

    const destroyChart = (chartId) => {
        if (chartInstances[chartId]) {
            chartInstances[chartId].destroy();
            delete chartInstances[chartId];
        }
    };
    
    if (dashboardCardsAgro.length > 0) {
        dashboardCardsAgro.forEach(card => {
            card.addEventListener('click', (event) => {
                // Lógica do estado ativo
                dashboardCardsAgro.forEach(c => c.classList.remove('active-card'));
                card.classList.add('active-card');
                
                const dashboardType = card.dataset.dashboard;
                renderAgroDashboard(dashboardType);
            });
        });
    }
    // Variáveis de opções de filtro, declaradas uma única vez
    const fazendasOptionsHtml = fazendasData.map(f => `<option value="${f.id_fazenda}">${f.nome_fazenda}</option>`).join('');
    const tiposSensoresOptionsHtml = [...new Set(sensoresData.map(s => s.tipo_sensor))].map(t => `<option value="${t}">${t}</option>`).join('');
    const categoriasOptionsHtml = [...new Set(custosData.map(c => c.categoria))].map(c => `<option value="${c}">${c}</option>`).join('');

    if (dashboardCardsAgro.length > 0) {
        dashboardCardsAgro.forEach(card => {
            card.addEventListener('click', (event) => {
                const dashboardType = card.dataset.dashboard;
                renderAgroDashboard(dashboardType);
            });
        });
    }

    function renderAgroDashboard(type) {
        dashboardDisplay.innerHTML = `<p>Gerando dashboard...</p>`;
        for (const chartId in chartInstances) {
            destroyChart(chartId);
        }

        let content = '';
        switch (type) {
            case 'produtividade-agricola':
                const contentProd = `
                    <div class="dashboard-content">
                        <h2>Dashboard de Produtividade Agrícola</h2>
                        
                        <h3 style="margin-top:20px;">Filtro por Fazenda</h3>
                        <select id="fazendaFilterProdutividade" style="width: 200px; margin: 10px auto;">
                            <option value="geral">Geral</option>
                            ${fazendasOptionsHtml}
                        </select>

                        <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                            <div id="kpi-producao-total" style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                <strong>Produção Total:</strong><br> -
                            </div>
                            <div id="kpi-hectares" style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                <strong>Hectares Colhidos:</strong><br> -
                            </div>
                            <div id="kpi-produtividade" style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                <strong>Produtividade Média:</strong><br> -
                            </div>
                        </div>

                        <h3 style="margin-top:20px;">Produção por Cultura</h3>
                        <div class="chart-container">
                            <canvas id="producaoCulturaChart"></canvas>
                        </div>
                        
                        <h3 style="margin-top:20px;">Produtividade por Fazenda</h3>
                        <div class="chart-container">
                            <canvas id="produtividadeFazendaChart"></canvas>
                        </div>
                    </div>
                `;
                dashboardDisplay.innerHTML = contentProd;

                const fazendaFilterProdutividade = document.getElementById('fazendaFilterProdutividade');
                fazendaFilterProdutividade.addEventListener('change', (event) => {
                    renderProdutividade(event.target.value);
                });

                renderProdutividade('geral');

                function renderProdutividade(fazendaId) {
                    let dadosFiltrados = colheitasData;
                    if (fazendaId !== 'geral') {
                        dadosFiltrados = colheitasData.filter(c => c.id_fazenda === parseInt(fazendaId));
                    }
                    
                    const producaoPorCultura = dadosFiltrados.reduce((acc, row) => {
                        acc[row.cultura] = (acc[row.cultura] || 0) + (row.quantidade_toneladas || 0);
                        return acc;
                    }, {});

                    const totalProducao = dadosFiltrados.reduce((sum, row) => sum + (row.quantidade_toneladas || 0), 0);
                    const totalHectares = dadosFiltrados.reduce((sum, row) => sum + (row.hectares_colhidos || 0), 0);
                    const produtividadeMedia = (totalProducao / totalHectares).toFixed(2);
                    
                    document.getElementById('kpi-producao-total').innerHTML = `<strong>Produção Total:</strong><br> ${totalProducao.toFixed(2)} toneladas`;
                    document.getElementById('kpi-hectares').innerHTML = `<strong>Hectares Colhidos:</strong><br> ${totalHectares.toFixed(2)}`;
                    document.getElementById('kpi-produtividade').innerHTML = `<strong>Produtividade Média:</strong><br> ${produtividadeMedia} ton/ha`;

                    destroyChart('producaoCulturaChart');
                    const ctxProducaoCultura = document.getElementById('producaoCulturaChart').getContext('2d');
                    chartInstances.producaoCulturaChart = new Chart(ctxProducaoCultura, {
                        type: 'bar',
                        data: {
                            labels: Object.keys(producaoPorCultura),
                            datasets: [{
                                label: 'Produção Total (ton)',
                                data: Object.values(producaoPorCultura),
                                backgroundColor: '#28a745',
                            }]
                        },
                        options: { responsive: true, scales: { y: { beginAtZero: true } } },
                    });

                    const produtividadePorFazenda = fazendasData.reduce((acc, fazenda) => {
                        const colheitasDaFazenda = colheitasData.filter(c => c.id_fazenda === fazenda.id_fazenda);
                        if (colheitasDaFazenda.length > 0) {
                            const producao = colheitasDaFazenda.reduce((sum, c) => sum + c.quantidade_toneladas, 0);
                            const hectares = colheitasDaFazenda.reduce((sum, c) => sum + c.hectares_colhidos, 0);
                            acc[fazenda.nome_fazenda] = (producao / hectares).toFixed(2);
                        }
                        return acc;
                    }, {});

                    destroyChart('produtividadeFazendaChart');
                    const ctxProdutividadeFazenda = document.getElementById('produtividadeFazendaChart').getContext('2d');
                    chartInstances.produtividadeFazendaChart = new Chart(ctxProdutividadeFazenda, {
                        type: 'bar',
                        data: {
                            labels: Object.keys(produtividadePorFazenda),
                            datasets: [{
                                label: 'Produtividade (ton/ha)',
                                data: Object.values(produtividadePorFazenda),
                                backgroundColor: '#007bff',
                            }]
                        },
                        options: { responsive: true, scales: { y: { beginAtZero: true } } },
                    });
                }
                break;

            case 'monitoramento-sensores':
                const totalSensores = sensoresData.length;
                const sensoresAtivos = sensoresData.filter(s => s.ativo).length;
                const percentualAtivos = ((sensoresAtivos / totalSensores) * 100).toFixed(2);
                
                const contentSensores = `
                    <div class="dashboard-content">
                        <h2>Dashboard de Monitoramento de Sensores</h2>
                        <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                            <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                <strong>Sensores Ativos:</strong><br> ${percentualAtivos}%
                            </div>
                            <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                <strong>Sensores Totais:</strong><br> ${totalSensores}
                            </div>
                        </div>

                        <h3 style="margin-top:20px;">Filtros</h3>
                        <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                            <select id="fazendaFilter" style="width: 200px;">
                                <option value="geral">Geral</option>
                                ${fazendasOptionsHtml}
                            </select>
                            <select id="tipoSensorFilter" style="width: 200px;">
                                <option value="geral">Todos os Tipos</option>
                                ${tiposSensoresOptionsHtml}
                            </select>
                        </div>

                        <div id="sensoresChartContainer" class="flex-container">
                            <div class="chart-box">
                                <h4 style="text-align: center;">Distribuição de Sensores</h4>
                                <canvas id="sensoresPieChart"></canvas>
                            </div>
                            <div class="line-chart-box">
                                <h4 style="text-align: center;">Leituras ao Longo do Tempo</h4>
                                <canvas id="sensoresLineChart"></canvas>
                            </div>
                        </div>
                    </div>
                `;
                dashboardDisplay.innerHTML = contentSensores;
                
                const fazendaFilterSensores = document.getElementById('fazendaFilter');
                const tipoSensorFilter = document.getElementById('tipoSensorFilter');
                
                const updateSensoresCharts = () => {
                    renderSensoresPieChart(fazendaFilterSensores.value);
                    renderSensoresLineChart(fazendaFilterSensores.value, tipoSensorFilter.value);
                };

                fazendaFilterSensores.addEventListener('change', updateSensoresCharts);
                tipoSensorFilter.addEventListener('change', updateSensoresCharts);
                
                updateSensoresCharts();

                function renderSensoresPieChart(fazendaId) {
                    destroyChart('sensoresPieChart');
                    const ctx = document.getElementById('sensoresPieChart').getContext('2d');

                    let filteredSensores = sensoresData;
                    if (fazendaId !== 'geral') {
                        filteredSensores = filteredSensores.filter(s => s.id_fazenda === parseInt(fazendaId));
                    }
                    
                    const tipoSensores = filteredSensores.reduce((acc, row) => {
                        acc[row.tipo_sensor] = (acc[row.tipo_sensor] || 0) + 1;
                        return acc;
                    }, {});

                    chartInstances.sensoresPieChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: Object.keys(tipoSensores),
                            datasets: [{
                                data: Object.values(tipoSensores),
                                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6c757d'],
                            }]
                        },
                        options: { 
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: { callbacks: { label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    const total = filteredSensores.length;
                                    label += context.parsed + ' (' + ((context.parsed / total) * 100).toFixed(2) + '%)';
                                    return label;
                                }}}
                            }
                        }
                    });
                }

                function renderSensoresLineChart(fazendaId, tipoSensor) {
                    destroyChart('sensoresLineChart');
                    const ctx = document.getElementById('sensoresLineChart').getContext('2d');
                    
                    let labels = [];
                    let data = [];
                    
                    if (fazendaId !== 'geral' && tipoSensor !== 'geral') {
                        const sensoresDaFazendaDoTipo = sensoresData.filter(s => s.id_fazenda === parseInt(fazendaId) && s.tipo_sensor === tipoSensor);
                        const leiturasDoTipo = leiturasSensoresData.filter(l => sensoresDaFazendaDoTipo.some(s => s.id_sensor === l.id_sensor));
                        
                        const leiturasPorData = leiturasDoTipo.reduce((acc, row) => {
                            const data = row.data_hora.substring(0, 10);
                            acc[data] = (acc[data] || 0) + (row.valor || 0);
                            return acc;
                        }, {});

                        labels = Object.keys(leiturasPorData).sort();
                        data = labels.map(key => leiturasPorData[key]);
                    }

                    chartInstances.sensoresLineChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: `Leituras de ${tipoSensor}`,
                                data: data,
                                borderColor: '#007bff',
                                tension: 0.4,
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
                break;
            
            case 'analise-custos':
                const custoTotal = custosData.reduce((sum, row) => sum + (row.valor || 0), 0).toFixed(2);
                
                const fazendasOptionsCustos = fazendasData.map(f => `<option value="${f.id_fazenda}">${f.nome_fazenda}</option>`).join('');
                const categoriasOptions = [...new Set(custosData.map(c => c.categoria))].map(c => `<option value="${c}">${c}</option>`).join('');

                const contentCustos = `
                    <div class="dashboard-content">
                        <h2>Dashboard de Análise de Custos</h2>
                        <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                            <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                <strong>Custo Total:</strong><br> R$ ${custoTotal}
                            </div>
                        </div>

                        <h3 style="margin-top:20px;">Filtros</h3>
                        <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                            <select id="fazendaFilterCustos" style="width: 200px;">
                                <option value="geral">Geral</option>
                                ${fazendasOptionsCustos}
                            </select>
                            <select id="categoriaFilter" style="width: 200px;">
                                <option value="geral">Todas as Categorias</option>
                                ${categoriasOptions}
                            </select>
                        </div>
                        
                        <div id="custosChartContainer" class="flex-container">
                            <div class="chart-box">
                                <h4 style="text-align: center;">Distribuição de Custos</h4>
                                <canvas id="custosPieChart"></canvas>
                            </div>
                            <div class="line-chart-box">
                                <h4 style="text-align: center;">Custo ao Longo do Tempo</h4>
                                <canvas id="custosLineChart"></canvas>
                            </div>
                        </div>
                    </div>
                `;
                dashboardDisplay.innerHTML = contentCustos;
                
                const fazendaFilterCustos = document.getElementById('fazendaFilterCustos');
                const categoriaFilter = document.getElementById('categoriaFilter');
                
                const updateCustosCharts = () => {
                    renderCustosPieChart(fazendaFilterCustos.value);
                    renderCustosLineChart(fazendaFilterCustos.value, categoriaFilter.value);
                };

                fazendaFilterCustos.addEventListener('change', updateCustosCharts);
                categoriaFilter.addEventListener('change', updateCustosCharts);
                
                updateCustosCharts();

                function renderCustosPieChart(fazendaId) {
                    destroyChart('custosPieChart');
                    const ctx = document.getElementById('custosPieChart').getContext('2d');

                    let filteredCustos = custosData;
                    if (fazendaId !== 'geral') {
                        filteredCustos = filteredCustos.filter(c => c.id_fazenda === parseInt(fazendaId));
                    }

                    const custoPorCategoria = filteredCustos.reduce((acc, row) => {
                        acc[row.categoria] = (acc[row.categoria] || 0) + (row.valor || 0);
                        return acc;
                    }, {});

                    chartInstances.custosPieChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: Object.keys(custoPorCategoria),
                            datasets: [{
                                data: Object.values(custoPorCategoria),
                                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6c757d'],
                            }]
                        },
                        options: { 
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: { callbacks: { label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    const total = Object.values(custoPorCategoria).reduce((a, b) => a + b, 0);
                                    label += 'R$ ' + context.parsed.toFixed(2).replace('.', ',') + ' (' + ((context.parsed / total) * 100).toFixed(2) + '%)';
                                    return label;
                                }}}
                            }
                        }
                    });
                }

                function renderCustosLineChart(fazendaId, categoria) {
                    destroyChart('custosLineChart');
                    const ctx = document.getElementById('custosLineChart').getContext('2d');
                    
                    let labels = [];
                    let data = [];
                    
                    if (fazendaId !== 'geral' && categoria !== 'geral') {
                        const custosDaFazenda = custosData.filter(c => c.id_fazenda === parseInt(fazendaId) && c.categoria === categoria);
                        
                        const custosPorData = custosDaFazenda.reduce((acc, row) => {
                            const data = row.data;
                            acc[data] = (acc[data] || 0) + (row.valor || 0);
                            return acc;
                        }, {});

                        labels = Object.keys(custosPorData).sort();
                        data = labels.map(key => custosPorData[key]);
                    }

                    chartInstances.custosLineChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: `Custo de ${categoria}`,
                                data: data,
                                borderColor: '#dc3545',
                                tension: 0.4,
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
                break;

            default:
                dashboardDisplay.innerHTML = `<p>Dashboard não encontrado.</p>`;
        }
    }
});
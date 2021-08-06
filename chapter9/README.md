# Tabela Regex

|   `/abc/`   | Uma sequência de caracteres.                                   |
|:-----------:|----------------------------------------------------------------|
|  `/[abc]/`  | Qualquer caractere de um conjunto de caracteres.               |
|  `/[^abc]/` | Qualquer caractere que não esteja nesse conjunto de caracteres |
|  `/[0-9]/`  | Qualquer caractere nesse ranger.                               |
|  `/ x + /`  |  Uma ou mais ocorrências do padrão x                           |
|   `/x+?/`   | Uma ou mais ocorrências não-gulosa.                            |
|    `/x*/`   | Zero ou mais ocorrências.                                      |
|    `/x?/`   |  Zero ou uma ocorrência.                                       |
|  `/x{2,4}/` |  Duas a quatro ocorrências.                                    |
|  `/(abc)/`  | Um grupo.                                                      |
| `/a\|b\|c/` |  Qualquer um dos vários padrões.                               |
|     `\d`    | Qualquer caractere de dígito.                                  |
|    `/\w/`   |  Um caractere alfanumérico (“caractere de palavra”).           |
|    `/\s/`   | Um caractere de espaço em branco.                              |
|    `/./`    | Qualquer caractere, exceto novas linhas.                       |
|    `/\b/`   | Um limite de palavra.                                          |
|    `/^/`    |  Início da entrada.                                            |
|    `/$/`    | Fim da entrada.                                                |
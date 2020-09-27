#### Desafio 4-1: Header
“Transportai um punhado de terra todos os dias e fareis uma montanha.”

🚀 Sobre o desafio
Esse é o primeiro desafio da sequência de criação de um site de aulas particulares. A ideia é que você aplique, em pequenas doses, os conhecimentos aprendidos nas aulas. Nessa primeira etapa, você deve criar um header com dois links: Teachers e Students (aproveite a estrutura criada no módulo 03)

Estilização
Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

[x] - Deve ser aplicado um background;
[x] - Deve ser utilizada a fonte Roboto;
[x] - Utilize o conceito de 'box-sizing' e o seletor + para centralizar os seus links;
[x] - Utilize o 'after' e o 'transition' para aplicar um efeito visual nos links quando o mouse passar por cima.

#### Desafio 4-2: Card do Professor
“Sua única limitação é você mesmo!”

🚀 Sobre o desafio
Nessa etapa você deve utilizar o browser-sync e criar um card para apresentação das informações do professor.

- Browser-sync
[x] - Utilize as libs browser-sync e npm-run-all e rode os processos da sua aplicação e do browser-sync em paralelo.

- Card
Esse componente deve ser dividido em duas seções: imagem e detalhes. As seguintes informações são obrigatórias:

[x] - Imagem randômica de uma coleção de professores (utilize a api do unsplash);
[x] - Nome completo;
[x] - Idade;
[x] - Grau de escolaridade (ex.: Doutorado);
[x] - Tipo de aula (presencial ou à distância);
[x] - Acompanhamento (ex.: Matemática e Física);
[x] - Desde (data de cadastro na plataforma).

- Estilização
Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

[x] - A imagem deve ocupar 40% do card e os detalhes 60%.
[x] - Utilize o seletor first-child e border-top para estilizar as divisórias entre os items.
[x] - Utilize o seletor nth-child() para estilizar o label (ex.: Desde) e valor (ex.: 02/02/2020) do item.
[x] - Utilize o keyframes e o animation para fazer uma animação do card.
[x] - Utilize o box-shadow para aplicar uma sombra no card.

#### Desafio 4-3: Formulário e Rota de cadastro do Professor
“Tudo deveria se tornar o mais simples possível, mas não simplificado.”

🚀 Sobre o desafio
[x] - Nessa etapa você deve criar um formulário de cadastro do professor e uma rota do tipo "post" que irá realizar as validações e salvar os dados enviados.

- Formulário
Os seguintes campos são necessaŕios:

[x] - Avatar url: campo do tipo url para cadastrar o caminho da imagem do professor;
[x] - Nome completo: campo do tipo text;
[x] - Data de nascimento: campo do tipo date;
[x] - Grau de escolaridade: campo do tipo select (documentação do select) que deve conter as opções Ensino Médio Completo, Ensino Superior Completo, Mestrado e Doutorado;
[x] - Tipo de aula: campo do tipo radio que deve conter as opções Presencial e À distância;
[x] - Área de atuação: campo do tipo text que deve conter as informações das matérias que o professor pode lecionar.

- Rota

Crie um arquivo 'teachers.js' na raiz do seu projeto e faça a validação de todos os campos utilizando 'keys' e 
o constructor 'Object'. Além disso, utilize o método 'writeFile' da lib 'fs' para gerar um arquivo json que irá conter 
um array de todos os professores cadastrados. Ao final desses dois processos (validação e salvamento), 
faça o redirecionamento para a página de listagem de professores.

- Estilização
Você tem liberdade para escolher a estilização que preferir para esse desafio.


#### Desafio 4-4: Apresentação, edição e formatação dos dados de um professor
“Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.”

🚀 Sobre o desafio

[x] - Nessa etapa você deve criar duas rotas: uma para apresentar os dados do professor (show) e outra para a edição dos dados cadastrados (edit). Além disso, realize a formatação dos dados cadastrados para a correta exibição no HTML

## SHOW

[x] - Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo 'teachers.js', crie um método 'show' para buscar e retornar o professor a partir do 'id' fornecido na rota. Os seguintes dados precisam ser formatados:

[x] - Idade: Crie um arquivo utils.js que exporta uma função chamada 'age'. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
[x] - Grau de escolaridade: crie uma função 'graduation' no arquivo 'utils.js'. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: Ensino Médio Completo para o valor medio do 'select');
[x] - Acompanhamento: Utilize o método 'split' da string para gerar um array com as matérias que o professor leciona;
[x] - Desde: Utilize o constructor 'Intl' e seus métodos para gerar uma data no formato 'dia/mes/ano'.

[x] - Ao fim da apresentação dos dados, crie um link que irá redirecionar para a rota de edição dos dados cadastrados.

## Edição

[x] - Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo 'teachers.js', crie um método 'edit' para buscar e retornar o professor a partir do 'id' fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo 'fields.njk'). 

[x] - Por fim, crie uma função chamada date no arquivo utils.js. Essa função deve retornar a data no formato yyyy-mm-dd para a correta exibição no input do tipo date no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método 'splice' da string).

Estilização

[x] - Você tem liberdade para escolher a estilização que preferir para esse desafio.


#### Desafio 4-5: HTTP: PUT e DELETE
“A impaciência é um grande obstáculo para o bom êxito”

🚀 Sobre o desafio
Nessa etapa você irá implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.

## PUT

[x] - Crie uma rota para receber os dados do formulário de edição e propagar no arquivo 'json'. Lembre de sobrescrever o método POST do form para PUT (utilize a lib 'method-override'). Dentro do arquivo 'teachers.js', crie um método 'update' para buscar e retornar o professor a partir do 'id' fornecido na rota. Faça a busca pelo professor a partir do 'id' e atualize no arquivo json os dados que foram alterados (utilize o constructor Number para formatar o id como número). Por fim, redirecione para a página de apresentação dos dados de um professor (show).

## DELETE

[x] - Crie um botão na página de apresentação dos dados do professor. Esse botão irá chamar uma rota para deletar o professor do arquivo 'json'. Lembre de sobrescrever o método POST do form para DELETE (utilize a lib 'method-override'). Dentro do arquivo 'teachers.js', crie um método delete e gere um array com todos os professores, exceto o que deve ser removido (filter). Por fim, redirecione para a página de listagem dos professores.

## Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio. Porém algumas coisas são obrigatórias:

[x] - O botão de deletar deve ficar ao lado do botão de editar;
[x] - O botão de deletar deve ser da cor vermelha.


#### Desafio 4-6: Listagem de professores
“A persistência é o caminho do êxito.”

🚀 Sobre o desafio
Nessa etapa você deve listar todos os professores salvos no arquivo 'json' e apresentá-los em formato de tabela.

## Listagem

[x] - Crie uma rota para repassar para o arquivo de listagem os dados dos professores salvos no arquivo json.

## Tabela

[x] - Crie um arquivo que irá mostrar os dados dos professores em formato de tabela. Utilize Nome completo, Acompanhamento e Ação como cabeçalhos.

## Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

[x] - A tabela deve ocupar todo o espaçamento do cartão;
[x] - Os cabeçalhos e os valores devem estar centralizados;
[x] - A imagem deve ser apresentada antes do nome. Deve ter formato circular e tamanho de 40px;
[x] - O campo Acompanhamento deve apresentar as matérias lecionadas de forma separada (array, assim como na página de apresentação de dados de um professor).



#### Desafio 4-7: Estruturando estudantes

“Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.”

🚀 Sobre o desafio
Nessa etapa você deve reaproveitar para os estudantes toda a estrutura já criada para os professores. Além disso, deve implementar a lógica do menu ativo.

#Estrutura
Reaproveite o código obedecendo os seguintes padrões:

[x] - Crie um arquivo students.js com a mesma estrutura que o teachers.js. Insira ambos os arquivos dentro uma pasta controllers;
[x] - Crie um array students vazio dentro do arquivo json;
[x] - Crie uma pasta students com a mesma estrutura de views que os professores;
[x] - Crie as rotas dos estudantes seguindo a mesma estrutura dos professores.

#Menu Ativo
[x] - Crie um arquivo scripts.js e implemente a lógica do menu ativo utilizando o location e o includes da string. 
[x] - Além disso, implemente um botão de cadastro nas páginas de listagem de professores e estudantes.

#Formulário
Faça os ajustes de professores para estudantes no formulário de criação. Além disso, remova os campos:

[x] - Grau de escolaridade;
[x] - Tipo de aula;
[x] - Acompanhamento;
[x] - Desde.

e adicione os campos:

[x] - Email: campo do tipo email;
[x] - Ano escolar: campo do tipo select com todas as opções de anos escolares entre 5º ano do ensino fundamental e 3º ano do ensino médio;
[x] - Carga horária semanal: campo do tipo number que indica a quantidade de horas de aulas particulares que o aluno irá ter por semana.

#Salvando os dados
[x] - Faça os ajustes de professores para estudantes no método post do arquivo students.js. Além disso, implemente a nova estratégia de id (evitar repetição).

#Apresentação
Faça os ajustes de professores para estudantes na página de apresentação dos dados de um estudante. Além disso, faça duas alterações no arquivo utils.js:

[x] - Altere o retorno da função date para day, month, year, iso e birthDay (lembre de fazer o ajuste no método edit para buscar o .iso).
[x] - Crie uma função chamada grade que retorna os dados formatados a partir do valor selecionado no select (ex.: o valor 1EF representa 1º Ano do Ensino Fundamental).

#Edição
[x] - Faça os ajustes de professores para estudantes na página de edição dos dados de um estudante. 
[x] - Implemente o campo Aniverśario onde é apresentado o dia e o mês do aniversário do estudante. 
[x] - Além disso, altere tanto no edit.njk dos professores quanto no dos alunos a url da seção de avatar. 
[x] - Utilize o campo avatar_url cadastrado em vez da api do unsplash.

#Remoção
[x] - Crie um arquivo confirm.njk e importe ele no seu arquivo edit.njk. Esse arquivo deve ser responsável por escutar o evento (addEventListener) de submit do form de remoção e solicitar pela confirmação do usuário (confirm). Caso o usuário cancele a remoção, deve-se cancelar o form (método preventDefault).

#Listagem
[x] - Faça os ajustes de professores para estudantes na página de listagem dos dados de um estudante. 
[x] - Remova a coluna de Acompanhamento e adicione as de Email e Ano escolar.

#Estilização
[x] - Você tem liberdade para escolher a estilização que preferir para esse desafio.


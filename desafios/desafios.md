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

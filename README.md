Releitura Nubank - React Native App
Este projeto é uma releitura do aplicativo Android do banco Nubank, desenvolvido usando React Native, Expo, Expo Router e TypeScript. O objetivo é recriar a interface e algumas funcionalidades principais do app original, proporcionando uma experiência de usuário fluida e responsiva.

Tecnologias Utilizadas
React Native: Framework para desenvolvimento de aplicativos móveis nativos utilizando JavaScript e React.
Expo: Plataforma e ferramenta que facilita o desenvolvimento de apps React Native, simplificando o build, deploy e testes.
Expo Router: Gerenciamento de navegação no app, utilizando rotas declarativas de forma simples e eficiente.
TypeScript: Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e a manutenção do código.
Funcionalidades
Interface moderna e clean inspirada no design do Nubank.
Navegação fluida entre as telas usando o Expo Router.
Organização do código usando TypeScript para garantir segurança e escalabilidade.
Pré-requisitos
Certifique-se de ter instalado:

Node.js
Expo CLI: npm install -g expo-cli
Yarn (opcional, para gerenciamento de pacotes): npm install --global yarn
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/releitura_nubank.git
cd releitura_nubank
Instale as dependências:

bash
Copiar código
yarn install
# ou
npm install
Inicie o projeto:

bash
Copiar código
expo start
Estrutura do Projeto
app/: Contém as telas e rotas do aplicativo, organizadas de acordo com o Expo Router.
components/: Componentes reutilizáveis usados nas telas do app.
assets/: Imagens, fontes e outros recursos estáticos.
types/: Definições de tipos para o TypeScript.
Scripts Disponíveis
expo start: Inicia o app no modo de desenvolvimento.
expo build: Cria a build de produção do app.
lint: Verifica o código em busca de problemas de estilo ou sintaxe.
Contribuição
Contribuições são bem-vindas! Se você quiser colaborar, siga os passos:

Faça um fork do repositório.
Crie uma nova branch com suas alterações: git checkout -b minha-feature.
Envie suas mudanças: git commit -m 'Adicionei uma nova feature'.
Faça um push da sua branch: git push origin minha-feature.
Abra um Pull Request.
Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

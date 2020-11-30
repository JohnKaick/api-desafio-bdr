# Como iniciar api local

Utilize o comando do yarn para download as dependências do projeto:

```
yarn
```

Suba o container Docker utilizando a imagem postgres para carregar o database e poder testar a aplicação:

```
yarn docker:pg
```

Não tem migrations, mas para criação das tabelas no database automaticamente quando se inicia a aplicação:

```
yarn start:development
```

Execute o comando do seeds na raiz do projeto para criação do usuário admin, porque apenas usuários com regra 'admin' podem acessar o crud de usuários:

```
yarn sequelize db:seed:all
```
Ou
```
npx sequelize-cli db:seed:all
```
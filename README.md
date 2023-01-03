
# Cashforce challenge

Um desafio técnico para o processo seletivo da Cashforce


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:BrenoGodoy/cashforce-api-challenge.git
```

Entre no diretório do projeto

```bash
  cd cashforce-challenge
```

Navegue para a pasta do Back-End

```bash
  cd cashforce-api
```
Instale as dependências

```bash
  npm install
```

Crie o Banco de Dados

```bash
  npm run dbcreate
```

Inicie o servidor

```bash
  npm run start
```

Agora vamos iniciar o Front-End, Retorne para a pasta pai e em seguida navegue para a pasta onde está o Front-End

```bash
  cd ../
  cd cashforce-front
```

Instale as dependências

```bash
  npm install
```
inicialize o Front

```bash
  npm run dev
```

## Documentação da API

#### Retorna todos os orders

```http
  GET /orders
```


#### Retorna um buyer a partir do seu ID

```http
  GET /buyers/${id}
```


#### Retorna um provider a partir do seu ID

```http
  GET /providers/${id}
```



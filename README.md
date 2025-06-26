![logo 3](https://github.com/user-attachments/assets/826ff58f-3f63-4401-85d6-1175211ff7d4)
# teste-vaga-backend
Este repositório tem como fim testar os candidatos para a vaga de desenvolvedor full-stack no projeto [Veedis](https://veedis.com.br/).

Este teste tem como finalidade reproduzir ao máximo um ambiente de desenvolvimento realista, para simular uma Task que poderá ser atribuída ao dev.
Leia atentamente este README pois ele irá te ajudar a compreender as premissas do projeto e o que buscamos.

*Caso você tenha sugestões de como podemos melhorar esse teste, por favor sinta-se a vontade para enviar seu feedback a nós*

# Estrutura do projeto
- app/teste/controllers/main_controller.ts: Implementa a lógica da requisição
- app/teste/validators/midia_validator.ts: Realiza a validação, primariamente, de requisição
- app/tmp: Pasta aonde os vídeos convertidos deverão ser enviados
- start/teste/workers.ts: Worker que implementa toda a lógica de conversão e armazenamento dos vídeos

# Recursos
- Amostras de vídeos para serem testados: [link](https://drive.google.com/drive/folders/1qzlNjN6k2Cdq2YbOiImWyK64-pDGo9n0?usp=drive_link)
-  - As amostrar estão dentro da pasta `input`
   - A pasta `output` possui amostras dos vídeos convertidos

# Requisitos
- A api deve aceitar qualquer tipo de vídeo, e converte-los para .mp4
- Precisa ter uma boa relação tamanho x qualidade
- Você deve utilizar jobs com o BullMQ
- Você pode utilizar bibliotecas externas se preferir, mas você não precisa delas para concluir este teste

# Requisitos
- Você irá precisar de um banco de dados [Redis](https://redis.io/), podendo cria-lo utilizando o [Docker](https://www.docker.com) (caso haja alguma dúvida, entre em contato conosco)
- Node.js v22.14.0
- NPM v10.9.2
  
# O que deve ser feito?
- Desenvolva uma api que recebe arquivos de vídeos
- Otimiza esses vídeos e armazena-os em uma pasta temporária

# O que será avaliado?
- Qualidade e organização de código
- Código escrito a mão, ou seja, sem uso de IA
- Organização do reposiório
- Qualidade das funcionalidades
- Performance e tempo das funcionalidades
- Uso correto do (Typescript)[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html]

# Considerações
- Você pode utilizar IA, como o cursor ou github copilot, porém não recomendamos que você gere todo o código utilizando a IA pois estamos avaliando os **seu** código e não da IA
- É fundamental que você leia a documentação do [Adonisjs](https://adonisjs.com/), [BullMQ](https://bullmq.io/) e [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) para realizar a implementação adequada de suas funcionalidades
- Pergunte! Se você tiver dúvidas, não tenha medo de perguntar. Dúvidas são sempre bem vidas, elas que nos tornam melhores.

# Prazo para entrega
- 3 dias

Prerequisitos:
1. Tener un cuenta en AWS
2. Crear un usuario y un rol
3. Dar permisos para trabajar con  DynamoDB

COMANDOS PARA CORRER EL REST APP de Serverless
1. buscar la ubicacion de la carpeta del proyecto
2. usar el comando de serverless deploy
3. correr los soguientes comandos:

GET -> https://lsszv7bw66.execute-api.us-east-2.amazonaws.com/dev/todos
GET 1 ITEM -> https://lsszv7bw66.execute-api.us-east-2.amazonaws.com/dev/todos/4bba6eb0-be5c-11eb-8544-e1d9bc7de7f4
DELETE 1 ITEM -> https://lsszv7bw66.execute-api.us-east-2.amazonaws.com/dev/todos/4bba6eb0-be5c-11eb-8544-e1d9bc7de7f4
POST -> https://lsszv7bw66.execute-api.us-east-2.amazonaws.com/dev/todos
PUT -> https://lsszv7bw66.execute-api.us-east-2.amazonaws.com/dev/todos/id

id del put es de cualquier elemento de la tabla de DynamoDB

Link del video consultado: https://www.youtube.com/watch?v=2hwzFMoj-dA&feature=youtu.be&ab_channel=BridgingCode

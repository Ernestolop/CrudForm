# NextJs Crud Form
Para correr localmente se necesita la base de datos
```
docker-compose up -d
```

#Configurar variables de entorno
Renombrar el archivo .env.template a .env y configurar las variables de entorno

*MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/formdb
```

Reconstruir el proyecto los modulos de node y levantar NextJs
```
npm install
npm run dev
```

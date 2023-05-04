Exemplo de uso do liquibase

./liquibase 
  --driver=org.postgresql.Driver 
  --classpath=/file_path/postgresql-42.2.5.jre6.jar 
  --changeLogFile=/file_path/changelog.xml 
  --url=jdbc:postgresql://localhost:5432/teste 
  --username=usuario 
  --password=senha update
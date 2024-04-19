# Baixando a imagem
FROM nginx:latest 

# Já entra com um usuário, mas vai dar erro pq não existe este usuário
# USER ricardo

# Vai criar a pasta e já vai deixar o "cursor" na mesma
# WORKDIR /app

RUN apt-get update &&\
    apt-get install vim -y

# Copia pasta/arquivos do computador(html) para o caminho(/usr/share/nginx)
COPY html/ /usr/share/nginx/html

# EXPOSE 80

# ENTRYPOINT ["/docker-entrypoint.sh"]

# CMD ["nginx", "-g", "daemon off;"]
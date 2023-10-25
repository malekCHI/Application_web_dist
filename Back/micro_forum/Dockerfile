FROM openjdk:8
EXPOSE 8083

WORKDIR /app

ADD target/*.jar app.jar

CMD ["java", "-jar", "/app/app.jar"]

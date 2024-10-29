-   clone the repo :
-   setup tailwind : https://docs.keycloakify.dev/customization-strategies/css-level-customization/using-tailwind
-   eject login page: `npx keycloakify eject-page`
    -   https://youtu.be/PhNE-3EwwP8 (watch this video)
-   test the theme in keyclock admin for that install jdk and maven (https://docs.keycloakify.dev/testing-your-theme/in-a-keycloak-docker-container)
    -   `choco install openjdk` check version `java -version`
    -   `choco install maven` check version `mvn -version`
    -   run `npx keycloakify start-keycloak` or `yarn kc-dev --keycloak-version 25.0.2` (make sure docker is running)
        -   select version : `25.0` selected

```
The ftl files from .\dist_keycloak\theme are mounted in the Keycloak container.

Keycloak Admin console: http://localhost:8080
- user:     admin
- password: admin


Your theme is accessible at:
➜ https://my-theme.keycloakify.dev/

You can login with the following credentials:
- username: testuser
- password: password123

Watching for changes in .\
```

-   now update the template `npx keycloakify eject-page # Select login -> Template.tsx`
-   there is `src/login`, this `login` is theme name inside that we have all the `pages` (this might be confusing)

so when we are done: run the docker file to build the image, and run the container

-   `docker build -t docker-keycloak-with-theme -f ./Dockerfile .`
-   ```
    docker run \
        -e KEYCLOAK_ADMIN=admin \
        -e KEYCLOAK_ADMIN_PASSWORD=admin \
        -p 8080:8080 \
        docker-keycloak-with-theme
    ```

-   now you can view the admin panel in `localhost:8080`

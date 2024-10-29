# theme builder
FROM node:20.15.1-alpine as keycloakify_jar_builder

# Install Maven
RUN apk update && apk add maven

WORKDIR /app
COPY ./ ./
RUN npm i
RUN npm run build-keycloak-theme

# kc builder

FROM quay.io/keycloak/keycloak:25.0.2 as builder
WORKDIR /opt/keycloak

# Pyng App keycloakify theme
RUN mkdir -p /opt/keycloak/providers
COPY --from=keycloakify_jar_builder /app/dist_keycloak/keycloak-theme-for-kc-22-to-25.jar /opt/keycloak/providers/keycloakify.jar
ENV KC_HOSTNAME=localhost
RUN /opt/keycloak/bin/kc.sh build

# final

FROM quay.io/keycloak/keycloak:25.0.1

COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]

# docker build -t docker-keycloak-with-theme -f ./Dockerfile .

# docker run \
#     -e KEYCLOAK_ADMIN=admin \
#     -e KEYCLOAK_ADMIN_PASSWORD=admin \
#     -p 8080:8080 \
#     docker-keycloak-with-theme


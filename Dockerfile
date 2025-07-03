FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=runner /app /usr/share/nginx/html
COPY --from=builder /app/.next/static /usr/share/nginx/html/.next/static
COPY --from=builder /app/public /usr/share/nginx/html/public

RUN apk add --no-cache nodejs

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 80 3000

CMD ["sh", "-c", "cd /usr/share/nginx/html && node server.js & nginx -g 'daemon off;'"]
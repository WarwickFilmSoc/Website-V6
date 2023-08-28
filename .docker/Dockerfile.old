FROM node:18.17.1-alpine

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY ./public /app/public
COPY --chown=nextjs:nodejs ./.next/standalone /app
COPY --chown=nextjs:nodejs ./.next/static /app/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

WORKDIR /app
CMD ["node", "server.js"]
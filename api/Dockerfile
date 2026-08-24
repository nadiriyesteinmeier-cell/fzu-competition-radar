FROM node:22-alpine

WORKDIR /app
COPY package.json server.mjs ./
RUN mkdir -p /app/data && chown -R node:node /app

USER node
ENV NODE_ENV=production
ENV API_HOST=0.0.0.0
ENV PORT=8787
ENV DATA_DIR=/app/data
ENV ENABLE_MOCK_PAYMENT=false
EXPOSE 8787

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||8787)+'/health').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"
CMD ["node", "server.mjs"]


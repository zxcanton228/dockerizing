# Build
FROM oven/bun:1.2.8 AS build

WORKDIR /app

COPY package.json bun.lock ./

RUN --mount=type=cache,target=/root/.bun bun install --frozen-lockfile

COPY . .

RUN bun prisma generate
RUN bun run build

EXPOSE 4200
CMD ["bun", "run", "start"]

# Production
# FROM oven/bun:1.2.8 AS production

# WORKDIR /app
# COPY --from=build /app/dist ./dist
# COPY --from=build /app/.env.production /app/package.json /app/bun.lock ./

# RUN --mount=type=cache,target=/root/.bun bun install --frozen-lockfile --production

# EXPOSE 4200
# CMD ["bun", "run", "start"]

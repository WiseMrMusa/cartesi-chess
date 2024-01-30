start-frontend:
	cd chess-frontend && bun run dev

start-backend:
	cd chess-backend && sunodo build && sunodo run

start-docs:
	cd cartesi-chess && bun run dev
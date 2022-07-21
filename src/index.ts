import { app } from "./app";

const PORT = process.env.PORT || 3001;
export const server = app.listen(PORT, async () => {
    console.log('Server listening on ' + PORT);
});


import express from 'express';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 3000;
const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const frontendDirectory = path.join(currentDirectory, 'public');

app.use(express.static(frontendDirectory));

app.get('/', (_request, response) => {
  response.sendFile(path.join(frontendDirectory, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
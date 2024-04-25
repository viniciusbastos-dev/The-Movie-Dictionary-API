import app from "./app";
import { PORT } from "./src/utils/config";

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

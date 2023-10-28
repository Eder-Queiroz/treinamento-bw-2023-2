import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./config/sequelize";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: http://localhost:${process.env.PORT}`);
  connect();
});

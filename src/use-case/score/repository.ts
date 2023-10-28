import { Score } from "../../models/score";
import { ScoreType } from "./type";

const create = async (data: ScoreType) => Score.create(data);
const getAll = async () => Score.findAll();
const getById = async (id: number) => Score.findByPk(id);
const update = async (id: number, data: ScoreType) =>
  Score.update(data, { where: { id } });

export { create, getAll, getById, update };

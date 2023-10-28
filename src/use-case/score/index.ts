import { ScoreType } from "./type";
import { create, getAll, getById, update } from "./repository";
import { ApiError } from "../../config/Error";

const createScore = async (data: ScoreType) => {
  try {
    const score = await create(data);
    return score;
  } catch (error) {
    throw new ApiError("Erro ao criar um pontuação", error);
  }
};

const getAllScore = async () => {
  try {
    const score = await getAll();
    return score;
  } catch (error) {
    throw new ApiError("Erro ao buscar pontuação", error);
  }
};

const getScoreById = async (id: number) => {
  try {
    const score = await getById(id);
    return score;
  } catch (error) {
    throw new ApiError("Erro ao buscar pontuação", error);
  }
};

const updateOneScore = async (id: number, data: ScoreType) => {
  try {
    const score = await getById(id);
    if (!score) {
      throw new ApiError("Pontuação não encontrado", null);
    }

    const scoreUpdated = await update(id, data);
    return scoreUpdated;
  } catch (error) {
    throw new ApiError("Erro ao atualizar pontuação", error);
  }
};

export { createScore, getAllScore, getScoreById, updateOneScore };

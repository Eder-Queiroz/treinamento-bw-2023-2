import { Request, Response } from "express";
import {
  createScore,
  getAllScore,
  getScoreById,
  updateOneScore,
} from "../../use-case/score";

const insertScore = async (req: Request, res: Response) => {
  const { subject, score, student_id } = req.body;

  try {
    const response = await createScore({ subject, score, student_id });
    res.json({
      message: "Nota criada com sucesso",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getScores = async (req: Request, res: Response) => {
  try {
    const scores = await getAllScore();
    res.json({
      message: "Notas buscadas com sucesso",
      data: scores,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getScore = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const score = await getScoreById(parseInt(id));
    res.json({
      message: "Nota buscada com sucesso",
      data: score,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const updateScore = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { subject, score, student_id } = req.body;

    const response = await updateOneScore(parseInt(id), {
      subject,
      score,
      student_id,
    });
    res.json({
      message: "Nota atualizada com sucesso",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export { insertScore, getScores, getScore, updateScore };

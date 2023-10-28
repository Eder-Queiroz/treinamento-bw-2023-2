import { Request, Response } from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateOneStudent,
} from "../../use-case/students";

const insertStudent = async (req: Request, res: Response) => {
  const { name, cpf, age } = req.body;

  try {
    const student = await createStudent({ name, cpf, age });
    res.json({
      message: "Estudante criado com sucesso",
      data: student,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await getAllStudents();
    res.json({
      message: "Estudantes buscados com sucesso",
      data: students,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = await getStudentById(parseInt(id));
    res.json({
      message: "Estudante buscado com sucesso",
      data: student,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, cpf, age } = req.body;

    const student = await updateOneStudent(parseInt(id), { name, cpf, age });
    res.json({
      message: "Estudante atualizado com sucesso",
      data: student,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export { insertStudent, getStudents, getStudent, updateStudent };

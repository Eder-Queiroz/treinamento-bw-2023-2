import { StudentType } from "./type";
import { create, getAll, getById, update } from "./repository";
import { ApiError } from "../../config/Error";

const createStudent = async (data: StudentType) => {
  try {
    const student = await create(data);
    return student;
  } catch (error) {
    throw new ApiError("Erro ao criar um estudante", error);
  }
};

const getAllStudents = async () => {
  try {
    const students = await getAll();
    return students;
  } catch (error) {
    throw new ApiError("Erro ao buscar estudantes", error);
  }
};

const getStudentById = async (id: number) => {
  try {
    const student = await getById(id);
    return student;
  } catch (error) {
    throw new ApiError("Erro ao buscar estudante", error);
  }
};

const updateOneStudent = async (id: number, data: StudentType) => {
  try {
    const student = await getById(id);
    if (!student) {
      throw new ApiError("Estudante não encontrado", null);
    }

    const studentUpdated = await update(id, data);
    return studentUpdated;
  } catch (error) {
    throw new ApiError("Erro ao atualizar estudante", error);
  }
};

export { createStudent, getAllStudents, getStudentById, updateOneStudent };

import { Students } from "../../models/students";
import { StudentType } from "./type";

const create = async (data: StudentType) => Students.create(data);
const getAll = async () => Students.findAll();
const getById = async (id: number) => Students.findByPk(id);
const update = async (id: number, data: StudentType) =>
  Students.update(data, { where: { id } });

export { create, getAll, getById, update };

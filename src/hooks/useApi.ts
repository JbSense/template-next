'use client';

import { Student } from '@prisma/client';
import axios from 'axios';
import { FrequencyType } from 'types/frequencyType';
import { SessionDataType } from 'types/sessionDataType';
import { SignInType } from 'types/signInType';
import { StageDataType } from 'types/stageDataType';
import { StageType } from 'types/stageType';

export const useApi = () => {
  const session: SessionDataType = JSON.parse(
    localStorage.getItem('session') ?? '{}'
  );

  const http = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { Authorization: session?.token }
  });

  /* Auth Routes */
  const signIn = async (credentials: SignInType) => {
    const response = await http
      .post('auth/signIn', credentials)
      .then((response) => response);

    return response.data;
  };

  /* Stage Routes */
  const getStage = async () => {
    const response = await http.get<StageDataType>('stage/user');

    return response.data;
  };

  const getStageById = async (id: string) => {
    const response = await http.get<StageType>(`stage/${id}`);

    return response.data;
  };

  const createStage = async (data: StageType) => {
    data.school = session?.school.id;

    const response = await http.post<StageType>('stage', data);

    return response.data;
  };

  /* Student Routes */
  const createStudent = async (data: Student) => {
    const response = await http.post<Student>('student', data);

    return response.data;
  };

  const updateStudent = async (data: Student) => {
    const response = await http.put<Student>(`student/${data.id}`, data);

    return response.data;
  };

  const getStudentById = async (studentId: string) => {
    const response = await http.get<Student>(`student/${studentId}`);

    return response.data;
  };

  const getStudentByStage = async (stageId: string) => {
    const response = await http.get<Student[]>(`student/${stageId}/stage`);

    return response.data;
  };

  /* Frequency Routes */
  const createFrequency = async (data: FrequencyType[]) => {
    const response = await http.post('frequency', data);

    return response.data;
  };

  const upsertFrequency = async (data: FrequencyType) => {
    const response = await http.put('frequency', data);

    return response.data;
  };

  const getFrequencyByStageDate = async (stageId: string, date: string) => {
    const response = await http.get(`frequency/${stageId}/${date}/stage`);

    return response.data;
  };

  const getFrequencyByStudentDate = async (studentId: string, date: string) => {
    const response = await http.get(`frequency/${studentId}/${date}/student`);

    return response.data;
  };

  return {
    signIn,
    getStage,
    getStageById,
    createStage,
    createStudent,
    updateStudent,
    getStudentById,
    getStudentByStage,
    createFrequency,
    getFrequencyByStageDate,
    getFrequencyByStudentDate,
    upsertFrequency
  };
};

'use client';

import axios from 'axios';
import { SessionDataType } from 'types/sessionDataType';
import { SignInType } from 'types/signInType';
import { StageDataType } from 'types/stageDataType';

const session: SessionDataType = JSON.parse(
  localStorage.getItem('session') ?? '{}'
);

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { Authorization: session?.token }
});

async function signIn(credentials: SignInType) {
  const response = await http
    .post('auth/signIn', credentials)
    .then((response) => response);

  return response.data;
}

async function getStage() {
  const response = await http.get<StageDataType>('stage/user');

  return response.data;
}

export const api = {
  signIn,
  getStage
};

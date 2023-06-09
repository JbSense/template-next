'use client';

import { SessionDataType } from 'types/sessionDataType';

const sessionData = JSON.parse(
  localStorage.getItem('session') ?? '{}'
) as SessionDataType;

const token = sessionData.token;
const user = sessionData.user;
const schoolName = sessionData.school?.name;
const schoolNameFormated = schoolName?.replace(/\s/g, '-');

export const session = {
  token,
  schoolName,
  schoolNameFormated,
  user
};

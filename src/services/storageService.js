import { STORAGE_KEYS } from '../constants';

export const getSelectedParking = () => {
  const data = localStorage.getItem(STORAGE_KEYS.SELECTED_PARKING);
  return data ? JSON.parse(data) : null;
};

export const setSelectedParking = (parking) => {
  localStorage.setItem(
    STORAGE_KEYS.SELECTED_PARKING,
    JSON.stringify(parking)
  );
};

export const getUserData = () => {
  const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
  return data ? JSON.parse(data) : null;
};

export const setUserData = (userData) => {
  localStorage.setItem(
    STORAGE_KEYS.USER_DATA,
    JSON.stringify(userData)
  );
};

export const removeUserData = () => {
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
};
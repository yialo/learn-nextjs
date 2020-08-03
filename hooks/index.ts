import Router from 'next/router';
import { useCallback } from 'react';

export const useButtonClickHandler = (route: string) => useCallback(() => {
  Router.push(`/${route}`);
}, []);

import { NextPage } from 'next';

export type TypeRoles = {
  isOnlyAuth?: boolean;
};

export type NextPageAuth<T = {}> = NextPage<T> & TypeRoles;
export type ComponentWithAuthFields = { Component: TypeRoles };

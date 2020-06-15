import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const EXCHANGE_RATES = gql`
  query hello {
    hello
  }
`;

export const Hello = (props: HelloProps) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const getList = () => data;

  useEffect(() => {
    getList();
  }, [data]);

  console.log(loading);
  console.log(error);
  console.log(data);
  return (
    <h1>
      Hello fromasadsad {props.compiler} and! {props.framework}!
    </h1>
  );
};

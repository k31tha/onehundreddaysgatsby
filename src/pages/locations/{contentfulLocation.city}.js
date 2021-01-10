import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

const Title = styled.h1`
  text-transform: uppercase;
`;

export default function LocationComponent(props) {
  return <section>
  <h1>{props.params.city}</h1>
  <ul>
    <li>Country: {props.data.contentfulLocation.country}</li>
  </ul>
  </section>
}


export const query = graphql`
  query contentfulLocation($id: String) {
    contentfulLocation(id: {eq: $id}) {
          id
          city
          country
      }
  }
`
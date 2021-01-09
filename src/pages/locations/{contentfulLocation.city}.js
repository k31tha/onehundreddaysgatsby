import React from "react"
import { graphql } from "gatsby"

export default function LocationComponent(props) {
  return props.data.contentfulLocation.country + '|' + props.params.city 
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
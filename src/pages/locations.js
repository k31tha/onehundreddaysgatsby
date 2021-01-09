import * as React from "react"
import { Link, graphql } from "gatsby"

const LocationsPage = (props) => {
    return (
        <>
        <h1>Locations</h1>
        <ul>
        {props.data.allContentfulLocation.nodes.map(location => (
        <li key={location.city}>
          <Link to={location.locationPath}>{location.city}</Link> 
        </li>
      ))}
        </ul>
        </>
      )
}

export const query = graphql`
  query {
    allContentfulLocation {
        nodes {
      id
      country
      city
      locationPath: gatsbyPath(filePath: "/locations/{contentfulLocation.city}")
        }
    }
  }`

export default LocationsPage
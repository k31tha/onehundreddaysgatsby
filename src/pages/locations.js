import * as React from "react"
import { Link, graphql } from "gatsby"

const LocationsPage = (props) => {
  const locations = props.data.locations.nodes;
    return (
        <section>
        <h1>Locations</h1>
        <ul>
        {locations.map(location => (
        <li key={location.city}>
          <Link to={location.locationPath}>{location.city}</Link> 
        </li>
      ))}
        </ul>
        </section>
      )
}

export const query = graphql`
  query {
    locations: allContentfulLocation {
        nodes {
      id
      country
      city
      locationPath: gatsbyPath(filePath: "/locations/{contentfulLocation.city}")
        }
    }
  }`

export default LocationsPage
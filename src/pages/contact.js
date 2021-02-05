import * as React from "react";
import { graphql } from 'gatsby';
import { FormiumForm, defaultComponents  } from '@formium/react';
import { formium } from '../lib/formium';
import { Box, Container,Heading, Input, Textarea, Button } from "@chakra-ui/react"

function TextInput(props) {
  return <Input  {...props}  className="my-textinput" focusBorderColor="blue.200"  />
}
//{...props}

function TextArea(props) {
  return <Textarea  {...props} className="my-textarea" focusBorderColor="blue.500" />
}

function Header(props) {
  return <Box as="section" marginBottom="1.45rem">
    
    <Heading as="h2">{props.page.title}</Heading>
      
    </Box> 
}

function SubmitButton(props) {
  return <Button type="submit">submit!!</Button> 
}

const formComponents = {
  ...defaultComponents,
  TextInput,
  TextArea,
  Header,
  SubmitButton
}

const ContactPage = ({data}) => {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return <div>Thank you! Your response has been recorded.</div>;
  }

  return (
    <Box as="section" marginBottom="1.45rem">
<Container d="block" px="2rem" maxW="100%">
    <FormiumForm data={data.formiumForm} components={formComponents}
      onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm('100dayscontact', values);
        setSuccess(true);
      }}
    />
</Container>
    </Box>
  )
}

export const query = graphql`
  {
    formiumForm(slug: { eq: "100dayscontact" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;

export default ContactPage
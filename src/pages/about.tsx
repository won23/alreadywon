import * as React from 'react';
import Layout from 'src/layouts';
import {
  Box,
  Flex,
  Heading,
  Divider,
  Text,
  ListItem,
  List,
  Image,
} from '@chakra-ui/react';

export interface IAboutProps {}
import aboutData from '../configs/about-data';
import Reference from 'src/components/Reference';
function TechDetail(props: { title: string; children: any }) {
  return (
    <Box fontSize="xs" mb={2}>
      <Text fontWeight="600" display="inline">
        {props.title}
      </Text>
      : {props.children}
    </Box>
  );
}

function SectionHeader(props: {
  section?: string;
  subtitle?: string;
  children: any;
}) {
  const subtitle = props.subtitle ? props.subtitle : false;

  return props.section ? (
    <Box mb="1rem">
      <Heading fontSize="md" fontWeight="700">
        {props.children}
      </Heading>
      <Text fontSize="xs" fontStyle="italic">
        {subtitle}
      </Text>{' '}
    </Box>
  ) : (
    <Heading mb="1rem" fontSize="sm" textAlign="center" fontWeight="700">
      {' '}
      {props.children}
    </Heading>
  );
}

export default function About(props: IAboutProps) {
  return (
    <Layout pageTitle="About Me">
      <Flex flexDir="column" alignItems="space-between">
        <Heading mb="1rem">About Me</Heading>

        <Flex
          justifyContent={{ base: 'center', sm: 'space-between' }}
          alignItems="center"
          flexWrap="wrap"
        >
          <Box maxW="md" order={{ base: 2, sm: 1 }}>
            <Text>
              I'm a diversified <strong>technologist</strong> and{' '}
              <strong>management consultant</strong> with over ten years of
              professional experience with a focus on application development &
              design, leading Product, and cultivating high-performing teams.
            </Text>
            <br></br>
            <Text>
              As a versatile leader and team-player, I've held a variety of
              different roles in leadership/management as well as individual
              contribution. Below are accomplishment highlights throughout my
              career.
            </Text>
          </Box>

          <Image
            order={{ base: 1, sm: 2 }}
            maxW="200px"
            minW="150px"
            rounded="full"
            borderColor="gray.500"
            borderWidth={2}
            src="images/about.jpg"
            alt="headshot"
            shadow={2}
            objectFit="cover"
            mb="1rem"
          ></Image>
        </Flex>

        <Divider mt="1rem"></Divider>
        <Flex flexDir={{ base: 'column', sm: 'row' }}>
          <Box flex={2} p={{ base: '0', sm: '1rem' }}>
            {aboutData.employers.map((employer, index) => {
              return (
                <Box>
                  <Box>
                    <SectionHeader
                      section="primary"
                      subtitle="August 2011 - Present"
                    >
                      {employer.orgName}, {employer.title}
                    </SectionHeader>
                  </Box>
                  {employer.roles.map((role, index) => {
                    return (
                      <Box key={index}>
                        <Heading
                          as="h4"
                          fontSize="sm"
                          fontWeight="600"
                          fontStyle="italic"
                          mb=".5rem"
                        >
                          {role.title}
                        </Heading>

                        <List
                          styleType="disc"
                          mb="1rem"
                          spacing={2}
                          marginBottom="1rem"
                        >
                          {role.details.map((detail, index) => (
                            <ListItem
                              key={index}
                              fontSize="xs"
                              ml="1rem"
                              fontStyle="normal"
                            >
                              {detail}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
          <Divider orientation="vertical"></Divider>
          <Box></Box>

          <Box p="1rem" flex={1}>
            <Box mb="1rem">
              <SectionHeader>Languages, Frameworks, Tools</SectionHeader>
              {aboutData.technologies.map((item, index) => {
                return (
                  <TechDetail key={index} title={item.title}>
                    {item.details}
                  </TechDetail>
                );
              })}
            </Box>

            <SectionHeader>Certifications</SectionHeader>
            {aboutData.certifications.map((certification) => {
              return (
                <Box mb="1rem" key={certification.id}>
                  <TechDetail title={certification.name}>
                    <Reference
                      link={{
                        href: 'https://www.credential.net/b92dc647-104b-437e-b3d8-b56edcbe06a0?key=04065633a5b19f20b629366f1052154edc186a985a02650bb50ea4d1e68e80af',
                        external: true,
                      }}
                    >
                      {certification.id}
                    </Reference>{' '}
                    <br />
                    {certification.validDates}
                  </TechDetail>
                </Box>
              );
            })}

            <SectionHeader>Education</SectionHeader>
            {aboutData.education.map((item) => {
              return (
                <TechDetail title={item.degree}>{item.orgName}</TechDetail>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}

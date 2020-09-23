import * as React from 'react';
import Layout from 'src/layouts';
import {
  Grid,
  Box,
  Flex,
  Heading,
  Divider,
  Text,
  ListItem,
  List,
} from '@chakra-ui/core';

export interface IResumeProps {}
import resumeData from '../configs/resume-data';
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

export default function Resume(props: IResumeProps) {
  return (
    <Layout>
      <Flex flexDir="column" alignItems="space-between">
        <Heading mb="1rem">Resume</Heading>

        <Text>
          I'm a diversified technologist and management consultant with over
          nine years of professional experience maintaining a professional focus
          on designing software, leading product development, and cultivating
          high-performing teams.
        </Text>
        <Divider mt="1rem"></Divider>
        <Flex flexDir={{ xs: 'column', sm: 'row' }}>
          <Box flex={2} p="1rem">
            <Box>
              <SectionHeader section="primary" subtitle="August 2011 - Present">
                {' '}
                PricewaterhouseCoopers LLP, Senior Manager
              </SectionHeader>
            </Box>
            <Box>
              {resumeData.roles.map((role, index) => {
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
          </Box>
          <Divider orientation="vertical"></Divider>
          <Box p="1rem" flex={1}>
            <Box mb="1rem">
              <SectionHeader>Languages, Frameworks, Tools</SectionHeader>
              {resumeData.technologies.map((item, index) => {
                return (
                  <TechDetail key={index} title={item.title}>
                    {item.details}
                  </TechDetail>
                );
              })}
            </Box>

            <SectionHeader>Certifications</SectionHeader>
            <Box mb="1rem">
              <TechDetail title="Google Cloud Architect - Professional">
                <Reference
                  link={{
                    href:
                      'https://www.credential.net/b92dc647-104b-437e-b3d8-b56edcbe06a0?key=04065633a5b19f20b629366f1052154edc186a985a02650bb50ea4d1e68e80af',
                    external: true,
                  }}
                >
                  ID: 60jR9f
                </Reference>{' '}
                <br />
                Valid Aug. 2018 - 2022
              </TechDetail>
              <TechDetail title="AWS Certified Solutions Architect - Associate">
                <Reference
                  link={{
                    href:
                      'https://aw.certmetrics.com/amazon/public/verification.aspx',
                    external: true,
                  }}
                >
                  ID: KN5HZKX2JJEE1FKE
                </Reference>
                <br />
                Valid Dec. 2017 - 2020
              </TechDetail>
            </Box>
            <SectionHeader>Education</SectionHeader>

            <TechDetail title="Bachelors of Science, Information Systems">
              Robert H. School of Business: University of Maryland: College Park
            </TechDetail>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}

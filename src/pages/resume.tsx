import * as React from 'react';
import Layout from 'src/components/Layout';
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

function TechDetail(props: { title: string; children: any }) {
  let title;
  if (props.title) {
    title = (
      <Text fontWeight="600" display="inline">
        {props.title}
      </Text>
    );
  }
  return (
    <Box>
      <Text fontSize="xs">
        {title}: {props.children}
      </Text>
    </Box>
  );
}

function SectionHeader(props: {
  section?: string;
  subtitle?: string;
  children: any;
}) {
  const subtitle = props.subtitle ? <Text> {props.subtitle} </Text> : false;
  console.log('sub', subtitle);

  return props.section ? (
    <Box>
      <Heading fontSize="md" fontWeight="700">
        {props.children}
      </Heading>
      <Text fontSize="xs" fontStyle="italic">
        {subtitle}
      </Text>{' '}
    </Box>
  ) : (
    <Heading fontSize="sm" textAlign="center" fontWeight="700" mb="1rem">
      {' '}
      {props.children}
    </Heading>
  );
}

export default function Resume(props: IResumeProps) {
  const roles = [
    {
      title: 'Solution Architect',
      details: [
        'Leads solution design, prototyping, and development of a series of internally incubated products alongside cross-functional teams (Product Managers, UI/UX Designers, Developers)',
        'Supports design and implementation of the NV CI/CD development toolchain including tool selection, network and identity/access control policies, and initial application migration & configuration',
      ],
    },
    {
      title: 'Tech Lead',
      details: [
        'Leads agile lifecycle activities including management of sprints & kanban boards, leading agile ceremonies (i.e. sprint planning, scrum, etc.), and performing release management',
        'Establishes standard operating procedures, documented product and team workflows, and other designed other solution architecture guiding principles defining application development strategy',
        'Developed full-stack features across cloud/infrastructure, backend/messaging services, and front-end applications',
      ],
    },
    {
      title: 'Manager',
      details: [
        'Lead teams in average size ranging from 3-8 members, performs 1:1s, coaching, and other performance assessments',
        'Drives day-to-day operations including performing staffing and training for junior team members, budgeting and annual administrative processes, and promoting teaming/collaboration with client-service teams and external analysts',
        'Manages on-shore, off-shore, and contractor resources including conducting performance reviews; interviewing, hiring, and outreach; and partnering/collaboration with outside teams throughout the enterprise',
      ],
    },
    {
      title: 'Consultant',
      details: [
        'For a start-up financial regulatory agency, lead development of a data-processing pipeline of consumer complaint data, Re-designed a case review system utilizing Microsoft Access, SQL, and VBA to improve the data collection process, procedures to identify top-performing candidates, and improved feedback mechanisms for a team of 40+ employees',
        'For a public-private start-up investment fund, managed regulatory compliance of a $22bn stimulus program by performing independent data forensics, surveillance, and risk services. Evaluated monthly fund-manager transactional data against SQL stored procedures to ensure adherence to program rules looking for patterns of behavior which may indicate “gaming” of the system',
        'For a large market account team, lead an internal Project Management Office (PMO) to delivering a cohesive, externally facing view of $20mm+ account team over a dozen contracting vehicles',
      ],
    },
  ];

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
              {roles.map((role) => {
                return (
                  <Box>
                    <Heading
                      as="h4"
                      fontSize="sm"
                      fontWeight="normal"
                      fontStyle="italic"
                    >
                      {role.title}
                      <List
                        styleType="disc"
                        mb="1rem"
                        spacing={2}
                        marginBottom="1rem"
                      >
                        {role.details.map((detail) => (
                          <ListItem fontSize="xs" ml="1rem" fontStyle="normal">
                            {detail}
                          </ListItem>
                        ))}
                      </List>
                    </Heading>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Divider orientation="vertical"></Divider>
          <Box p="1rem" flex={1}>
            <SectionHeader>Languages, Frameworks, Tools</SectionHeader>
            <TechDetail title="Front-end">Angular, React [basic]</TechDetail>
            <TechDetail title="Back-end">
              NodeJS, SQL (postgreSQL), NoSQL (MongoDB, Firebase, neo4j)
            </TechDetail>
            <TechDetail title="Infrastructure">
              Docker, Kubernetes, GCP, AWS, Ansible, Terraform, Jenkins,
              Prometheus, Linux (Ubuntu/Debian)
            </TechDetail>
            <TechDetail title="Other domains">
              Oauth/OpenID Connect, GraphQL
            </TechDetail>
            <TechDetail title="Workflow">
              Jira, Pivotal Tracker, Slack, Github/Gitlab, Trello
            </TechDetail>

            <SectionHeader>Certifications</SectionHeader>

            <TechDetail title="Google Cloud Architect - Professional">
              (ID: 60jR9f) Valid Aug. 2018 - 2020
            </TechDetail>
            <TechDetail title="AWS Certified Solutions Architect - Associate">
              (ID: KN5HZKX2JJEE1FKE) Valid Dec. 2017 - 2020
            </TechDetail>
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

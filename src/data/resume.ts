export const profile = {
  name: "Prasanth Devalla",
  title: "Backend Engineer",
  tagline:
    "Scalable systems, financial-grade auth, and event-driven platforms.",
  location: "Charlotte, NC",
  phone: "+1 (704) 780-7767",
  email: "devallaprasanth2601@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasanth2601/",
} as const

export const summary =
  "Backend engineer with 5+ years building scalable, distributed systems using Java, Spring Boot, and Kafka in cloud environments. I design authentication systems (passkeys/FIDO2) and event-driven architectures for real-time processing, with a focus on performance, security, and reliability in high-throughput production systems."

/** Mastercard-focused spotlight; themes from current role only */
export const highlights = [
  {
    title: "Passkeys & EMVCo",
    detail:
      "Next-generation cardholder authentication: standards-aligned flows, WebAuthn, and device biometrics (Face ID, Touch ID, Windows Hello) as strong alternatives to OTP.",
  },
  {
    title: "Issuer-side platform",
    detail:
      "Spring Boot services on the issuer authentication path, with tighter transaction auth latency (~40% improvement) and better user conversion, backed by solid API and domain design co-owned with product.",
  },
  {
    title: "Event-driven auth",
    detail:
      "Kafka-centric backends for real-time authentication and asynchronous validation, including topic design, partitioning, consumer groups, and tuning for sustained throughput.",
  },
  {
    title: "Reliability & engineering velocity",
    detail:
      "Multi-region Redis replication (LLD/HLD) for HA across zones; plus MCP-integrated CI/CD with Jenkins, Jira, and Confluence alongside cross-functional security and platform partners.",
  },
] as const

export const experience = [
  {
    company: "Mastercard",
    role: "Software Engineer, Authentication Platform",
    period: "June 2025 - Present",
    summary:
      "I build issuer-side authentication for EMVCo-aligned passkey and device-based flows using Spring Boot services and Kafka-driven real-time validation, with ownership of streaming topology and hands-on work on multi-region Redis for HA. I partner closely with security, platform, and product for financial-grade releases and streamline delivery by integrating Copilot MCP with Jenkins and internal collaboration tools.",
    bullets: [
      "Designed next-generation authentication flows aligned with EMVCo standards, enabling passkey-based verification (Face ID, Touch ID, Windows Hello) as a secure alternative to OTP.",
      "Built Spring Boot issuer-side authentication services, reducing transaction authentication time by ~40% and improving user conversion.",
      "Architected scalable, event-driven backends with Kafka for real-time authentication and asynchronous validation.",
      "Contributed to LLD/HLD for multi-region Redis replication for high availability across zones.",
      "Owned Kafka cluster operations: topic design, partitioning, and consumer tuning for high throughput.",
      "Integrated GitHub Copilot MCP with Jenkins, Jira, and Confluence to automate CI/CD and workflows.",
      "Partnered with security, platform, and product on financial-grade authentication and data protection.",
    ],
  },
  {
    company: "Verizon Wireless",
    role: "Senior Java Backend Developer",
    period: "Sep 2024 - May 2025",
    summary:
      "I unified platform observability in Spring Boot, modernized analytics on Snowflake with Lambda ETL, and streamed high-volume telemetry over MSK with alerting, materially cutting MTTR, report runtimes, and time-to-detect. I also hardened ECS-based microservices (OAuth2, JWT, TLS, IAM), cleared critical AppSec findings, and applied Resilience4j so services stayed stable under peak load.",
    bullets: [
      "Built unified observability APIs in Java 17 / Spring Boot (GitLab, ServiceNow, Folio), cutting MTTR for platform incidents by 40%.",
      "Migrated analytics from OpenSearch to Snowflake for faster queries and 18+ months of history with zero downtime.",
      "Engineered multi-stage ETL with Snowflake, JDBC, and Lambda; compliance reports dropped from 6 hours to 22 minutes.",
      "Streamed high-volume telemetry via AWS MSK with SNS/SES alerting, reducing mean time-to-detect by 55%.",
      "Containerized 10+ microservices on AWS ECS; optimized GitLab CI/CD with parallel stages, ~45% faster build/deploy.",
      "Hardened services with OAuth2, JWT, TLS, and IAM; cleared 11 critical Fortify / Black Duck findings before launch.",
      "Applied Resilience4j circuit breakers and retries; availability improved from 99.5% to 99.95% under peak load.",
    ],
  },
  {
    company: "Deloitte USI",
    role: "Java Backend Developer",
    period: "Sep 2021 - Sep 2023",
    summary:
      "I delivered reactive Spring WebFlux microservices and Kafka event pipelines for large-scale e-commerce, with secure API Gateway and Cognito checkout and near-real-time analytics on Glue, Kinesis, and Lambda. I consolidated fragmented retail channels behind unified APIs, automated Terraform and Jib-based deploys, and raised automated test coverage to prevent regressions.",
    bullets: [
      "Built cloud-native microservices in Java 13 / Spring WebFlux for global e-commerce: 10M+ daily orders, sub-200ms p99 API latency.",
      "Designed Kafka pipelines across inventory, billing, and notifications, cutting order-processing failures by 60%.",
      "Shipped secure REST behind API Gateway and Cognito (OAuth2/JWT) for PCI-DSS checkout flows.",
      "Built real-time ETL with Glue, Kinesis, and Lambda; analytics lag fell from 4 hours to under 5 minutes.",
      "Integrated Salesforce Commerce Cloud and MuleSoft, unifying three retail channels behind one omni-channel API.",
      "Automated infra with Terraform and Jib; environment setup time down ~70% with one-click staging deploys.",
      "Raised unit/integration coverage from 42% to 87% (JUnit, Mockito, REST Assured), removing a major regression class.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    period: "Sep 2019 - Aug 2021",
    summary:
      "I built Spring Boot microservices and integration with Kafka and Apache Camel for telecom and insurance, ran workloads on OpenShift, and helped extract core modules from a monolith into deployable services. I also shipped JWT authentication and RBAC used across a large customer base.",
    bullets: [
      "Delivered Spring Boot microservices for telecom and insurance, reducing claims processing time by 30%.",
      "Integrated Apache Camel for orchestration in customer experience platforms.",
      "Implemented Kafka pipelines with Jolt transforms for real-time integration.",
      "Ran containerized workloads on OpenShift for consistent scale-out and deployments.",
      "Contributed to monolith-to-microservices migration: six core modules extracted to deployable services.",
      "Built JWT auth and RBAC for 500K+ users, strengthening security and access management.",
    ],
  },
] as const

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java (8-21)", "Python", "SQL", "PL/SQL"],
  },
  {
    title: "Frameworks",
    items: [
      "Spring Boot",
      "Spring WebFlux",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Resilience4j",
    ],
  },
  {
    title: "Cloud & infra",
    items: [
      "AWS (EC2, S3, RDS, Lambda, API Gateway, MSK, Glue, Kinesis, SNS, SES)",
      "Docker",
      "Kubernetes",
      "ECS",
      "OpenShift",
    ],
  },
  {
    title: "Data & streaming",
    items: [
      "Apache Kafka",
      "Kinesis",
      "Snowflake",
      "Databricks",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Redis",
      "OpenSearch",
    ],
  },
  {
    title: "DevOps & CI/CD",
    items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Spinnaker", "Jib"],
  },
  {
    title: "Security & APIs",
    items: [
      "OAuth 2.0",
      "JWT",
      "TLS/SSL",
      "FIDO2/WebAuthn",
      "EMVCo 3DS",
      "IAM",
      "Fortify",
      "Black Duck",
      "OpenAPI 3.0",
      "REST",
    ],
  },
  {
    title: "Testing",
    items: ["JUnit", "Mockito", "TestNG", "REST Assured", "Postman"],
  },
] as const

export const education = [
  {
    school: "University of North Carolina, Charlotte",
    location: "Charlotte, NC",
    degree: "M.S. in Information Technology",
  },
  {
    school: "R.V.R & J.C. College of Engineering",
    location: "Guntur, India",
    degree: "B.Tech in Electrical & Electronics Engineering",
  },
] as const

---
title: "Stock Analyzer: Financial Crisis Analysis Tool"
description: "A full-stack web application for analysing US equity performance across major historical financial crises."
date: "2025-01-01"
tags: ["Python", "FastAPI", "Next.js", "TypeScript", "Recharts", "Groq", "Docker", "Azure", "Pandas"]
github: "https://github.com/ahmadfahim2k/stock-analyzer-group-project"
live: "https://stock-analyzer-frontend.calmground-828190d8.francecentral.azurecontainerapps.io/"
demo: ""
paper: ""
image: ""
featured: true
screenshots:
  - "/images/projects/sa-dashboard.png"
  - "/images/projects/sa-pdf_page_1.png"
  - "/images/projects/sa-pdf_page_2.png"
  - "/images/projects/sa-pdf_page_3.png"
  - "/images/projects/sa-sector-view.png"
---

## Overview

A full-stack financial analysis tool built as a group project for COMP530 as part of my masters at the University of Liverpool. Users select a crisis period, which can be either the Dot-Com crash, the 2008 Financial Crisis, COVID-19, or a custom time period, and a stock ticker, then view OHLC price charts, computed risk and return metrics, and an LLM-generated narrative summary. A separate sector view aggregates yearly performance across all 11 GICS sectors.

## Approach

Built a FastAPI backend that serves OHLC data for 3,158 US equity tickers (S&P 500, NASDAQ, NYSE, Forbes 2000) spanning 1970–2022, pre-processed from raw CSVs via a data cleaning notebook. Financial metrics including annualised volatility, average log return, ROI ratio, and recovery duration are computed per request using pandas and NumPy. An LLM summary is generated via a Groq endpoint using an OpenAI-compatible client. The frontend was built with Next.js 16, React 19, and Recharts, with PDF export implemented via @react-pdf/renderer. The full stack was containerised with Docker Compose for local development.

## Results

A fully functional application covering 3,158 tickers across five decades of market data. The LLM integration provides contextual narrative summaries alongside quantitative metrics, making the tool accessible to non-technical users. PDF export enables shareable reports from any analysis session.

## Deployment

To move beyond local development, I deployed the application to **Azure Container Apps**, running the backend and frontend as two independently scalable containerised services within a shared Container Apps environment. This involved provisioning an Azure Container Registry, building and pushing separate production images for each service, configuring external ingress for the frontend and internal-only ingress for the backend, and managing secrets and environment variables (including the LLM API key and CORS configuration) directly within Azure. Along the way, I resolved a regional capacity restriction on my Azure subscription and an RBAC-related authentication issue between the registry and the container apps, gaining hands-on experience with Azure's networking, identity, and container orchestration model in the process.

## What I learned

Building a full-stack application in a team reinforced the importance of clear API contracts between frontend and backend. When multiple people are working across different layers of the stack simultaneously, agreeing on the architecture design early prevents a lot of friction later. Version control discipline and regular communication via meetings became more important than the code itself.

Working with five decades of financial data across thousands of tickers also highlighted the importance of data cleaning and preprocessing as a foundational step. The quality of the analysis was entirely dependent on the quality of the pipeline that produced the data, which reinforced how much of real data science work happens before any modelling or visualisation begins. Furthermore, integrating LLM-generated outputs alongside computed metrics also showed how generative AI can complement rather than replace quantitative analysis.

Deploying the application to Azure afterwards reinforced a different lesson: that moving from a local Docker Compose setup to a real cloud environment introduces its own class of problems, authentication, networking, ingress configuration, that don't show up at all in local development. Troubleshooting these issues gave me a much more concrete understanding of what "cloud deployment" actually involves beyond the certification syllabus.
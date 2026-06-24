---
title: "Stock Analyzer: Financial Crisis Analysis Tool"
description: "A full-stack web application for analysing US equity performance across major historical financial crises."
date: "2025-01-01"
tags: ["Python", "FastAPI", "Next.js", "TypeScript", "Recharts", "Groq", "Docker", "Pandas"]
github: "https://github.com/ahmadfahim2k/stock-analyzer-group-project"
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

A full-stack financial analysis tool built as a group project for COMP530 at the University of Liverpool. Users select a crisis period — the Dot-Com crash, the 2008 Financial Crisis, or COVID-19 — and a stock ticker, then view OHLC price charts, computed risk and return metrics, and an LLM-generated narrative summary. A separate sector view aggregates yearly performance across all 11 GICS sectors.

## Approach

Built a FastAPI backend that serves OHLC data for 3,158 US equity tickers (S&P 500, NASDAQ, NYSE, Forbes 2000) spanning 1970–2022, pre-processed from raw CSVs via a data cleaning notebook. Financial metrics including annualised volatility, average log return, ROI ratio, and recovery duration are computed per request using pandas and NumPy. An LLM summary is generated via a Groq endpoint using an OpenAI-compatible client. The frontend was built with Next.js 16, React 19, and Recharts, with PDF export implemented via @react-pdf/renderer. The full stack was containerised with Docker Compose.

## Results

A fully functional application covering 3,158 tickers across five decades of market data. The LLM integration provides contextual narrative summaries alongside quantitative metrics, making the tool accessible to non-technical users. PDF export enables shareable reports from any analysis session.

## What I learned

Building a full-stack application in a team reinforced the importance of clear API contracts between frontend and backend. Integrating LLM-generated outputs alongside computed metrics showed how generative AI can complement rather than replace quantitative analysis.
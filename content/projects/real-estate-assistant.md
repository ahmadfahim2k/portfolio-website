---
title: "Real Estate Assistant"
description: "An AI-powered tool that answers real estate queries using live article data with source citations."
date: "2024-05-01"
tags: ["Python", "LangChain", "ChromaDB", "HuggingFace", "Groq", "BeautifulSoup", "Streamlit", "RAG"]
github: "https://github.com/ahmadfahim2k/genai-real-estate-assistant"
live: "https://genai-real-estate-assistant-akha5ab4it59rgi9r74yjk.streamlit.app/"
demo: ""
paper: ""
image: ""
featured: false
screenshots:
  - "/images/projects/rea-1.png"
  - "/images/projects/rea-2.png"
  - "/images/projects/rea-3.png"
---

## Overview

A RAG-powered assistant that answers natural language questions about the real estate market using live articles scraped from CNBC. Every response includes source citations so users can verify the information directly. The pipeline runs end-to-end from raw web content to a deployed, queryable application.

## Approach

Built a BeautifulSoup scraper that extracts article URLs from CNBC's real estate index page using a date-based regex pattern, fetching the most recent articles on each run. Article content was chunked using RecursiveCharacterTextSplitter with 512-character chunks and 50-character overlap, then embedded using HuggingFace models and indexed in a ChromaDB vector store. A LangChain retrieval chain connects the vector store to a Groq LLM, which generates answers grounded in the retrieved chunks. Source URLs are extracted from chunk metadata and deduplicated before being returned alongside the answer.

## Results

A fully functional RAG application returning accurate, citation-backed answers to real estate queries using live web data. Deployed on Streamlit Cloud for public access.

## What I learned

Grounding LLM responses in retrieved source chunks significantly reduces hallucination compared to relying on model knowledge alone. Attaching source metadata to chunks at indexing time is a simple but effective way to make responses verifiable and trustworthy.
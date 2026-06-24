---
title: "ShoeBot: E-Commerce Chatbot"
description: "An LLM-based shoe shopping assistant that handles product search and FAQs through a conversational interface."
date: "2024-03-01"
tags: ["Python", "HuggingFace", "Groq", "ChromaDB", "LangChain", "Streamlit", "RAG", "NLP"]
github: "https://github.com/ahmadfahim2k/shoebot-genai"
live: "shoebot-genai-mms8ehjedvkdvebneqnf9h.streamlit.app/"
demo: ""
paper: ""
image: ""
featured: true
screenshots:
  - "/images/projects/sb-1.png"
  - "/images/projects/sb-2.png"
  - "/images/projects/sb-3.png"
---

## Overview

A conversational chatbot for shoe shopping that handles three distinct query types — product search, FAQs, and small talk — through a unified interface. Each query type is routed to a specialised handler using a semantic router, ensuring accurate and relevant responses regardless of how a user phrases their question.

## Approach

Built a semantic router using the all-MiniLM-L6-v2 sentence transformer to classify user intent by comparing query embeddings against pre-defined utterances for three routes. Product search queries were handled via a natural language to SQL pipeline — the LLM was prompted with the database schema and instructed to generate SQL, which was validated, executed against a SQLite database of Flipkart products, and summarised in natural language. FAQ queries were handled via RAG — a fixed set of Q&A pairs was embedded and stored in ChromaDB, with the top matching answers injected as context into an LLM prompt. The Flipkart product catalogue was scraped and loaded into SQLite via a separate data pipeline.

## Results

The three-route architecture handled the vast majority of natural shoe shopping queries accurately. The semantic router was iteratively improved by adding edge case inputs as example utterances for the correct route. The full application was deployed as a Streamlit app.

## What I learned

Designing a multi-route system requires careful thinking about the boundaries between routes and how to handle edge cases gracefully. Combining NL-to-SQL and RAG in a single application highlighted the complementary strengths of each approach for different query types.
---
title: "Data Analysis using Spectral Clustering Algorithms"
description: "Benchmarked 5 clustering algorithms across real-world networks to uncover when spectral clustering fails and why standard evaluation metrics can mislead."
date: "2026-07-01"
tags: ["Python", "Spectral Clustering", "Graph Theory", "Unsupervised Learning", "Data Visualization", "Network Analysis"]
github: "https://github.com/ahmadfahim2k/spectral-clustering-analysis"
live: "https://spectral-clustering-analysis.vercel.app"
demo: ""
paper: ""
featured: true
featuredOrder: 3
screenshots:
  - "/images/projects/spectral-clustering/1.png"
  - "/images/projects/spectral-clustering/2.png"
  - "/images/projects/spectral-clustering/3.png"
---

## Overview

Compared K-Means against four spectral clustering variants across four real-world datasets spanning transport, biology, and social networks, to investigate what determines algorithm success or failure and whether standard evaluation metrics can be trusted.

## Key Findings

- **Low-degree nodes can silently break spectral clustering.** On a US airport network, unnormalised spectral clustering collapsed 726 of 727 airports into one cluster, traced to one low-traffic regional airport's extreme position in eigenvector space. This failure mode scaled with the proportion of low-degree nodes in a network — under 2% on Facebook data versus nearly 50% on a yeast protein interaction network.

- **Evaluation metric consistency doesn't guarantee correctness.** One metric gave confident, stable scores across three independent embeddings while still misranking a degenerate clustering above a meaningful one. The same clustering scored 0.019 (excellent) under one embedding and 6.27 (terrible) under another.

- **Synthetic benchmark strengths don't transfer to real-world networks.** The algorithm best suited to non-convex geometry was consistently the weakest performer on real-world network data.

- **Hypothesis testing was applied rigorously throughout**, explicitly discarding early explanations that didn't survive direct testing.

## Results

Built an interactive tool to explore the full results and open-sourced the complete codebase. The investigation produced concrete, reproducible failure cases for spectral clustering on real-world networks, with implications for how clustering results should be validated in practice.

## Context

MSc Advanced Data Science and Artificial Intelligence dissertation, University of Liverpool. Supervised by Dr Karteek Sreenivasaiah.

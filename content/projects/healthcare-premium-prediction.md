---
title: "Healthcare Premium Predictor"
description: "An end-to-end ML pipeline that predicts annual health insurance premiums from user inputs using age-stratified modelling."
date: "2024-01-01"
tags: ["Python", "XGBoost", "Pandas", "Scikit-Learn", "Streamlit", "Optuna"]
github: "https://github.com/ahmadfahim2k/ml-project-healthcare-premium"
live: "https://ml-project-healthcare-premium-mwtlnfypcappvwnwzeaqpmy.streamlit.app/"
demo: ""
paper: ""
image: ""
featured: true
screenshots:
  - "/images/projects/hpp-1.png"
  - "/images/projects/hpp-2.png"
---

## Overview

A regression model that predicts annual health insurance premiums based on user-provided inputs such as age, BMI, and medical history. Built as an end-to-end data science project covering the full workflow from raw data to a deployed, interactive application.

## Approach

Began with exploratory data analysis using Pandas, Matplotlib, and Seaborn to understand premium distributions across demographic groups. Error analysis revealed that the model performed significantly worse for younger age groups, leading to the discovery of distinct pricing patterns between younger and older cohorts. This insight drove a redesign of the pipeline. Separate age-stratified XGBoost models were trained for each cohort rather than a single global model. A composite medical risk score was also engineered from 4 chronic condition indicators to improve predictive accuracy. Hyperparameters were tuned using Optuna.

## Results

Achieved an R² of 0.998 on unseen data. The age-stratified approach significantly outperformed the original single-model baseline. The final application was deployed as a Streamlit app that routes user inputs to the appropriate model based on age and returns real-time premium estimates.

## What I learned

The most impactful improvement came not from choosing a more complex model, but from inspecting and understanding why the model was underperforming. Error analysis and domain reasoning drove a better architectural decision than any amount of hyperparameter tuning would have.
---
title: "Credit Risk Modelling"
description: "An ML-powered web app that predicts loan default risk and generates a 300–900 credit score with a four-tier rating."
date: "2024-02-01"
tags: ["Python", "Scikit-Learn", "SMOTE", "Optuna", "Pandas", "Streamlit"]
github: "https://github.com/ahmadfahim2k/ml-project-credit-risk-model"
live: "https://ml-project-credit-risk-model-azwasxdsvjbrqwtreerte.streamlit.app/"
demo: ""
paper: ""
image: ""
featured: false
screenshots:
  - "/images/projects/crm-1.png"
  - "/images/projects/crm-2.png"
  - "/images/projects/crm-3.png"
---

## Overview

A credit risk prediction system that assesses the likelihood of loan default and converts that probability into a structured credit score between 300 and 900, with a four-tier rating of Poor, Average, Good, and Excellent. Built on a dataset of 50,000 loan records merged from customer, loan, and credit bureau sources.

## Approach

Engineered features including loan-to-income and delinquency ratios from merged datasets. Applied VIF analysis to identify and remove multicollinear features, and used Information Value analysis to select the most predictive variables. Addressed class imbalance using SMOTE and tuned the logistic regression model with Optuna. Default probability was converted into a credit score using a scaled mapping aligned to industry standard ranges.

## Results

Achieved approximately 93% accuracy on held-out data. The final application was deployed as an interactive Streamlit web app allowing real-time credit risk assessment from user-provided inputs.

## What I learned

Feature engineering and selection had a greater impact on model performance than algorithm choice. VIF and Information Value analysis are powerful tools for reducing noise and improving interpretability in credit risk contexts.
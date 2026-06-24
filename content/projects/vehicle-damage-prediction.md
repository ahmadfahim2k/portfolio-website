---
title: "Vehicle Damage Prediction"
description: "A deep learning system that classifies vehicle damage from images into 6 categories using transfer learning."
date: "2024-04-01"
tags: ["Python", "PyTorch", "ResNet50", "FastAPI", "Streamlit", "Optuna"]
github: "https://github.com/ahmadfahim2k/dl-project-vehicle-damage-detection"
live: "https://dl-project-vehicle-damage-detection-6bkv6g2fn74frrtqtku4km.streamlit.app/"
demo: ""
paper: ""
image: ""
screenshots:
  - "/images/projects/vdp-1.png"
  - "/images/projects/vdp-2.png"
  - "/images/projects/vdp-3.png"
  - "/images/projects/vdp-4.png"
featured: true
---

## Overview

An image classification system that categorises vehicle damage photographs into 6 damage types. Designed for real-time inference on uploaded images, with both a web interface and a REST API for integration into other systems.

## Approach

Used transfer learning with a pre-trained ResNet50 model in PyTorch, fine-tuned on a labelled vehicle damage dataset. Applied data augmentation techniques to improve generalisation on limited training data. Hyperparameters were tuned using Optuna to find the optimal learning rate, batch size, and regularisation settings.

## Results

Achieved approximately 81% validation accuracy across 6 damage categories. The model was served via both a Streamlit application for direct user interaction and a FastAPI REST API for real-time inference on uploaded images.

## What I learned

Transfer learning dramatically reduces the data and compute required to build a performant image classifier. Data augmentation is especially valuable when the training set is limited, and systematic hyperparameter tuning with Optuna yields meaningful accuracy gains over manual search.
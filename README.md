# Bayes' Theorem Calculator for Medical Diagnostics

## Overview

The Bayes' Theorem Calculator is a web application designed to assist medical professionals in interpreting diagnostic test results. By leveraging Bayes' Theorem, the tool calculates the probability of a disease based on test results, helping to improve decision-making in clinical settings.

## Features

- Input fields for:
  - Prevalence of Disease (Prior probability, P(Disease))
  - Sensitivity (Probability of testing positive given having the disease, P(Test+|Disease+))
  - Specificity (Probability of testing negative given not having the disease, P(Test-|Disease-))
- Calculates:
  - Probability of Disease given a Positive Test Result (P(Disease|Test+))
  - Probability of Disease given a Negative Test Result (P(Disease|Test-))
- Displays results along with a brief interpretation

## How It Works

1. **Input Fields:**
   - Enter the prevalence of the disease, sensitivity of the test, and specificity of the test into the provided fields.
2. **Calculation:**
   - The application uses Bayes' Theorem to calculate the probability of having the disease given a positive test result and the probability of having the disease given a negative test result.
3. **Results Display:**
   - After clicking the "Calculate" button, the calculated probabilities are displayed along with an interpretation.

## Setup and Installation

### Prerequisites

- Python 3.x
- Flask

### Installation

1. Clone the repository:
   git clone 
   cd Development of a Diagnostic Test Probability Calculator
2. Install Flask if you haven't already: pip install flask
3. Run the app: python app.py
4. Open your web browser and navigate to http://127.0.0.1:5000/.

## Usage
    Open the application in your web browser.
    Enter the values for prevalence, sensitivity, and specificity.
    Click the "Calculate" button.
    View the calculated probabilities and interpretation.

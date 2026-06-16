---
title: 'Project Illusion — Privacy-First AI GRC Auditor'
description: 'A Python/Streamlit GRC auditor targeting ISO 27001, GDPR, NIST AI RMF, and IEC 62443 — with LiteLLM multi-model support and a cream/orange/brown design system.'
date: '2026-01-10'
draft: false
tags:
  - GRC
  - ISO27001
  - GDPR
  - IEC62443
  - AI
  - Streamlit
categories:
  - Security
  - Projects
sidebar:
  enable: true
  toc: true
  relatedPosts: true
---

# Project Illusion — Privacy-First AI GRC Auditor

GRC (Governance, Risk, Compliance) audits are expensive, slow, and often locked behind expensive consultant engagements. Project Illusion is a self-hosted, privacy-first auditor that lets small organisations run structured assessments against major frameworks without sending sensitive data to cloud APIs.

## Frameworks covered

- **ISO 27001** — Information security management systems
- **ISO 27005** — Information security risk management
- **GDPR** — Data protection and privacy
- **NIST AI RMF** — AI risk management
- **IEC 62443** — Industrial cybersecurity

## Technical stack

- **Frontend**: Streamlit with a custom cream/orange/brown design system (`#F5F0E8` backgrounds, `#C47B2B` accents)
- **LLM layer**: LiteLLM with multi-model support (local Ollama, OpenAI, Anthropic — user-configurable)
- **Assessment engine**: JSON-based question trees per framework, with weighted scoring
- **Privacy**: All data stays local by default; no telemetry; optional local-only LLM mode via Ollama

## Design principle

The key design decision was **separating the assessment logic from the LLM layer**. The structured questionnaire and scoring run purely in Python — the LLM only generates natural-language explanations of findings, and can be replaced or disabled entirely.

This means organisations with strict data residency requirements can run Illusion with a local Mistral or LLaMA model and never expose sensitive compliance data to external APIs.

## Status

Functional MVP. Open to contributors and interested in integrating with CISO dashboards at SMEs.

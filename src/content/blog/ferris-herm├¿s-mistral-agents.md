---
title: 'FERRIS & HERMÈS — Building Teaching AI Agents with Mistral'
description: 'Two AI agents built on Mistral: FERRIS teaches Rust programming with phase-based code generation, HERMÈS teaches French toward TCF B1 certification.'
date: '2026-04-05'
draft: false
tags:
  - Mistral
  - AI Agents
  - Rust
  - French
  - TCF
categories:
  - AI
  - Projects
sidebar:
  enable: true
  toc: true
  relatedPosts: true
---

# FERRIS & HERMÈS — Building Teaching AI Agents with Mistral

Two teaching agents built to solve two personal learning problems at the same time I was studying them.

## FERRIS — The Rust Teaching Agent

Named after Ferris the crab (the Rust mascot). FERRIS is a structured Rust tutor that enforces a phase-based curriculum:

1. **Concepts first** — explain ownership, borrowing, lifetimes without code
2. **Minimal examples** — working snippets that demonstrate exactly one concept
3. **Exercises with guardrails** — the agent refuses to give answers until the student attempts the problem

**Key guardrails implemented**:
- Rule 1: No multi-concept code dumps
- Rule 2: No over-questioning (learned from live testing — agents that ask too many clarifying questions frustrate learners)
- Rule 3: Phase-locked progression — can't advance to lifetimes before ownership is confirmed

Architecture is inspired by Karpathy's SKILL.md and Claude's project generation patterns. System prompt runs ~2,000 tokens; HTML interface handles session state.

## HERMÈS — The French/TCF B1 Teaching Agent

Built to prepare for TCF B1 certification. HERMÈS integrates with NotebookLM and Google Drive as the data bridge:

- Vocabulary drills seeded from real TCF practice papers (stored in Drive)
- Grammar explanations in English with French examples
- Oral comprehension simulations using structured dialogue prompts
- Weekly progress reports exported to Drive

**Architecture**: Mistral handles conversation; NotebookLM provides retrieval over saved study materials; Google Drive bridges the two for persistence across sessions.

## Key lessons from live testing

The biggest failure mode in both agents was **over-questioning**. Agents trained to ask clarifying questions before responding create friction that kills the learning flow. The fix: assume intent, respond, then offer alternatives at the end.

Phase-based architecture (a concept from Karpathy's SKILL.md) works remarkably well for teaching: the agent knows exactly where the student is in the curriculum and refuses to skip ahead. This is better than letting the student drive pace, because learners consistently underestimate how much they don't know yet.

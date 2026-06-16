---
title: "Diagnosing Rule 2 failures in FERRIS"
date: "2026-05-20"
updatedDate: "2026-05-20"
draft: false
type: text
mood: "curious"
location: "Paris, FR"
tags:
  - AI Agents
  - Mistral
  - Debugging
align: left
size: md
---

Spent three hours today figuring out why FERRIS kept asking follow-up questions before answering. Classic Rule 2 violation: the agent was trained to ask clarifying questions, but in a teaching context this creates friction that kills momentum.

Fix: restructured the system prompt to assume intent, respond first, offer alternatives at the end. The difference in the learning flow is immediate. Over-questioning is the most common agent failure mode I've encountered.

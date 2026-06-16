---
title: 'Building a 70-Thread IoT Diagnostic CLI at BlackFox Partners'
description: 'How I built a multi-threaded Python CLI tool that maps local hardware nodes, ingests raw socket packet logs, and cuts diagnostic time by 65% for field maintenance teams.'
date: '2026-03-15'
draft: false
tags:
  - IoT
  - Python
  - CLI
  - Telemetry
  - BlackFox
categories:
  - Engineering
sidebar:
  enable: true
  toc: true
  relatedPosts: true
---

# Building a 70-Thread IoT Diagnostic CLI at BlackFox Partners

At BlackFox Partners, field maintenance teams were spending hours manually parsing fragmented connectivity logs across dozens of local hardware nodes. My task: build a tool that transforms that process into minutes.

## The Problem

Industrial IoT deployments generate enormous volumes of socket packet logs across heterogeneous local networks. Traditional sequential log inspection doesn't scale. Field teams needed a way to:

- Rapidly map which hardware nodes are active on a local subnet
- Parse raw socket packet logs into structured diagnostic metrics
- Produce human-readable field reports without requiring deep networking expertise

## Architecture

The solution is a Python CLI tool using 70 parallel worker threads (via `concurrent.futures.ThreadPoolExecutor`), structured in three stages:

```python
# Stage 1: Node discovery — parallel subnet scan
with ThreadPoolExecutor(max_workers=70) as executor:
    futures = {executor.submit(probe_node, ip): ip for ip in subnet_range}
    active_nodes = {ip: f.result() for ip, f in futures.items() if f.result()}
```

**Stage 2: Log ingestion** — Raw socket packets are captured, decoded from binary, and parsed into structured JSON metrics (timestamp, node ID, packet type, payload size, latency).

**Stage 3: Report generation** — Aggregated metrics are rendered as CLI tables and optionally exported as CSV for handoff to sysadmins.

## Results

- Diagnostic time reduced by **65%** compared to manual inspection
- Field teams can now run a full subnet audit in under 3 minutes
- Structured log output feeds directly into existing ThingsBoard monitoring dashboards

## Key learnings

Thread pool sizing matters enormously for I/O-bound workloads. At 70 threads, we hit the sweet spot for a typical /24 subnet without overwhelming the local network switch. Going above 100 threads caused port exhaustion on some older industrial switches.

The real win wasn't just speed — it was legibility. Translating raw hex packet logs into tables that a field technician (not a network engineer) can read and act on.

---
title: 'Connected Telemetry Tracker MVP with MicroEJ VEE'
description: 'Configuring MicroEJ VEE microcontrollers with BLE and RFID sensors, routing real-time data into ThingsBoard dashboards as Technical Lead.'
date: '2025-11-20'
draft: false
tags:
  - MicroEJ
  - BLE
  - RFID
  - ThingsBoard
  - Embedded
categories:
  - Engineering
sidebar:
  enable: true
  toc: true
  relatedPosts: true
---

# Connected Telemetry Tracker MVP with MicroEJ VEE

As Technical Lead on the ESILV-MicroEJ industrial partnership, I was responsible for configuring microcontrollers, designing the data ingestion pipeline, and validating the full edge-to-cloud flow.

## Stack

- **Hardware**: MicroEJ VEE microcontrollers
- **Sensors**: BLE (proximity and environmental) + RFID (asset identification)
- **Data pipeline**: REST API → ThingsBoard CE
- **Language**: Java (MicroEJ) + Python (data validation scripts)

## Architecture decisions

MicroEJ VEE provides a Java-based runtime for constrained devices, which simplified the sensor abstraction layer. BLE scanning runs on a 500ms polling loop; RFID reads are event-driven.

Data is batched into 5-second windows before REST transmission to reduce network overhead. ThingsBoard receives telemetry as structured JSON and routes it to the central monitoring dashboard.

## What I learned

Real-time sensor fusion is harder than it looks. BLE RSSI values drift significantly in industrial environments (metal enclosures, motor EMI). Filtering required a simple Kalman implementation to produce stable proximity readings.

RFID dead zones — caused by reflective metal surfaces — required antenna repositioning and additional read confirmation logic.

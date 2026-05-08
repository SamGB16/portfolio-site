# change-011 — Fix GitHub Actions Deployment

**Type:** Change note
**Risk:** Low
**Files affected:** .github/workflows/deploy.yml

---

## What and Why

Deployment failing because:
1. No package-lock.json in repo — need to use npm install not npm ci
2. Node.js 20 is deprecated in Actions — upgrade to Node 24

---

## What to Change

In .github/workflows/deploy.yml:

Change node-version from 20 to 24

Change:
  run: npm ci
To:
  run: npm install

---

## Invariants

- Do not change anything else in the workflow file
- Do not touch next.config.ts or any other files
# Toolwise AI — first 30 articles and publishing automation

## Recommended production workflow

1. Maintain an editorial calendar in a CSV or project board: topic, search intent, audience, primary query, sources, internal links, author/reviewer, status, publish date, last fact-check date.
2. Generate outlines and draft Markdown files from a controlled prompt/template. Require source URLs for factual claims and a clear list of claims that still need verification.
3. Run automated checks: required frontmatter, duplicate slugs/titles, broken internal links, missing meta descriptions, missing affiliate disclosure where applicable, and draft/review flags.
4. Human review: verify vendor features/prices from official sources, remove unsupported claims, add original screenshots or examples only when genuinely created, check usefulness and readability.
5. Publish only after the reviewer flips `draft: false` and `reviewed: true`.
6. Commit/push to GitHub. Netlify automatically builds and deploys the static site.
7. Check the production page, sitemap and analytics/search indexing after deploy.

## 30-topic launch queue (ideas, not ready-made publishable claims)

1. AI Tools for Freelancers: How to Choose a Practical, Affordable Stack
2. How to Summarize Long Documents with AI Without Missing Important Details
3. Free vs Paid AI Tools: When Is an Upgrade Worth It for Freelancers?
4. AI Proposal Writing: A Workflow for Freelance Projects
5. How to Turn Meeting Notes into Clear Client Action Items
6. AI for Client Research: A Source-Checking Workflow
7. AI Email Drafting for Freelancers: Templates and Review Checklist
8. How to Use AI to Repurpose One Article into Social Posts
9. AI Brainstorming vs Human Strategy: Where Each Helps
10. A Practical AI Privacy Checklist for Freelancers
11. How to Evaluate AI Writing Tools Without Relying on Hype
12. AI Transcription Tools: What to Check Before Choosing One
13. How to Build a Reusable Prompt Library for Client Work
14. AI for Spreadsheet Cleanup: A Safe, Verifiable Workflow
15. AI Image Tools for Freelancers: Licensing and Usage Questions
16. How to Fact-Check AI-Generated Research
17. AI Scheduling and Task Planning: A Workflow That Stays Flexible
18. AI for Customer Support: When a Solo Business Should Consider It
19. How to Compare AI Note-Taking Apps
20. AI Website Builders vs Traditional Website Tools for Freelancers
21. How to Estimate Whether an AI Subscription Saves Money
22. A Beginner’s Guide to AI Automation for Repetitive Admin Tasks
23. How to Create Client Deliverables with AI Without Losing Your Voice
24. AI Translation Tools: Quality Checks for Client-Facing Work
25. How to Document an AI-Assisted Workflow for Repeatable Results
26. AI Tools for Independent Consultants: Use Cases and Trade-offs
27. AI for Content Planning: From Brief to Editorial Calendar
28. How to Protect Confidential Client Data in AI Workflows
29. AI Tool Comparison Checklist: Features, Price, Privacy and Export
30. A Monthly AI Stack Review: What to Keep, Replace or Cancel

## Important publishing rules
- Do not publish all 30 automatically just because drafts exist. A reasonable launch can have a small group of carefully reviewed cornerstone articles, followed by a steady schedule.
- Do not create fake hands-on reviews, test results, author biographies, testimonials, pricing or screenshots.
- Every comparison needs current vendor research and clear methodology. Include a checked-on date for prices and plan features.
- Avoid near-duplicate pages targeting the same search intent. Each article should answer a distinct reader need.
- Automated AI generation at scale without original value can violate Google's scaled-content-abuse policy. Automation should support research and workflow, not replace editorial judgment.

## Later automation options

**Simple and low-cost:** AI drafts in Markdown → human review → GitHub commit → Netlify auto-deploy. This is the safest starting point and keeps recurring costs low.

**Semi-automated:** Use a GitHub Actions workflow or an external automation service to generate draft files from an approved topic queue, run validation, and open a pull request. A person reviews the pull request before merge. Keep API keys in GitHub/Netlify environment secrets, never in committed files.

**Do not start with:** fully autonomous research, drafting and publication of 20–30 articles without review. This increases factual, legal, quality and SEO risk and may waste the first publishing window.

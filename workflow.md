Phase 1: Initial Setup and Tool Integration To orchestrate this high-ticket AI website agency, you must first configure your "Mission Control" environment by connecting Google AntiGravity to external tools using the Model Context Protocol (MCP).
1. Install Google AntiGravity: Download the IDE, configure your workspace, and select your preferred Agent policy (e.g., "Review-driven development" to maintain approval control over terminal commands).
2. Configure MCP Servers: Add your API keys to the mcp_config.json file in AntiGravity so your agents can autonomously use the following tools:
    ◦ Apify: For web scraping and lead generation.
    ◦ AnyMail Finder: For enriching scraped data with verified emails.
    ◦ Google Stitch: For generating multi-page web and app designs via text or image prompts.
    ◦ Vercel & GitHub: For programmatically deploying websites.
    ◦ Fireflies & Gamma: For accessing meeting transcripts and generating presentations.
    ◦ NotebookLM: For large-scale research and infographic generation.
Phase 2: Mapping the Niche & Obtaining Leads Target "boring, profitable, and unsexy" niches (e.g., pool cleaners, HVAC, tree removal) where businesses have high-profit margins but outdated digital presences.
1. Scrape Leads: Prompt your AntiGravity agent to use Apify to scrape Google Maps for your chosen niche, keeping within a strict budget limit (e.g., finding the top pool cleaners in Austin based on reviews).
2. Enrich Data: Command AntiGravity to use the AnyMail Finder API to validate domains and find direct contact emails for the scraped businesses.
3. ⭐ SKILL CREATION POINT - Lead Engine: Ask AntiGravity to turn the combined Apify scraping and AnyMail Finder enrichment process into a reusable "Skill" using a SKILL.md file. This allows you to say "Get me 500 leads for waste removal in Leeds," and the agent will run the entire pipeline autonomously.
Phase 3: Prototyping and Nailing the Build Do not start from a blank canvas. Clone and adapt the design patterns of top-performing competitors.
1. Competitive Analysis: Instruct AntiGravity to scrape the top 5 competitors in your niche and output a list of shared success features (e.g., custom testimonials, specific service grids, localized copy).
2. Generate the UI (Two Options):
    ◦ Option A (Google Stitch): Use Stitch's Experimental Mode (Gemini 2.5 Pro) to convert text prompts, wireframes, or reference screenshots into high-fidelity UI designs. Export these designs to Figma or directly as React/Tailwind code.
    ◦ Option B (AI Studio): Extract HTML from an inspiration site, upload it into Google AI Studio, and prompt it to generate a beautiful, single-page application.
3. Refine in AntiGravity: Download the generated code, open it on your localhost via AntiGravity, and instruct the agent to install dependencies.
4. ⭐ SKILL CREATION POINT - UI/UX Pro Max: Import a UI/UX checklist skill (like the UIUX Pro GitHub repo) and command the agent to run the code through strict UI/UX guidelines (fixing accessibility, keyboard navigation, and lazy loading) without changing the visual design.
Phase 4: Programmatic Site Cloning & Deployment Instead of manually building 50 websites, you will construct one master template and clone it dynamically.
1. Deconstruct the Site: Ask AntiGravity to break the master website down into variable components (business name, logo, color scheme, phone number, testimonials).
2. Clone the Website: Instruct the agent to create a new folder, grab the logo/data of a specific lead from your enriched list, and swap out all the variables to create a bespoke site for that business.
3. ⭐ SKILL CREATION POINT - AntiGravity Cloning Skill: Ask the agent to save this entire variable-swapping process as an "AntiGravity Cloning Skill" so it can autonomously duplicate the site for dozens of companies.
4. Deploy to Vercel: Use the GitHub and Vercel MCP integrations to command AntiGravity to automatically create a GitHub repository, push the code, deploy the site to Vercel, and paste the unique live URL back into your lead spreadsheet.
5. ⭐ SKILL CREATION POINT - Deployment Automation: Save the automated GitHub-to-Vercel publishing process as a distinct skill.
Phase 5: Automated Outreach Execution Use the "free value" play. You will give the custom website away for free to build trust.
1. Upload Leads: Import your enriched spreadsheet (which now includes the custom Vercel URLs for each business) into an automated email tool like Instantly.ai.
2. Launch Campaign: Use a casual, non-salesy email template stating you built them a free website for your portfolio and provide their unique link. Set up automated follow-ups for days 3, 7, 14, and 28.
Phase 6: Yielding Monthly Recurring Revenue (MRR) Once the client loves the free website, pitch affordable, high-value add-on services.
1. Identify the Problem: Ask the client what their biggest business bottleneck is.
2. Upsell Services: Offer monthly services such as 50−300/month for web hosting and SEO maintenance, $500/month for an AI lead-capture chatbot, or automated post-service review generation systems.
Phase 7: Value-Add Operations with NotebookLM, Gamma, and Microsoft Tools Integrate additional MCP tools to provide premium content and operational services to your newly acquired clients:
1. Infographics and Content Marketing (NotebookLM): Authenticate NotebookLM inside AntiGravity. Create specific "notebooks" for your clients' industries. Prompt AntiGravity to perform infinite research through NotebookLM and automatically generate scalable infographics based on that knowledge base.
    ◦ ⭐ SKILL CREATION POINT - Automated Infographics: Lock down a skill that automatically sources data from a client's NotebookLM knowledge base to generate weekly visual infographics.
2. Automated Presentations (Fireflies + Gamma): Connect the Fireflies meeting transcription API and Gamma presentation API. After client consultation calls, you can instruct AntiGravity to pull the transcript and automatically generate a beautifully branded presentation summarizing the strategy.
    ◦ ⭐ SKILL CREATION POINT - Meeting-to-Presentation: Create a skill that generates slide decks following strict brand guidelines directly from a meeting transcript.
3. Automated Financials and Invoices: Give AntiGravity your agency’s (or your client’s) brand guidelines and logo. Command it to programmatically generate Excel spreadsheets (e.g., financial estimates) or formatted PDF invoices addressed to clients.
    ◦ ⭐ SKILL CREATION POINT - Brand-Compliant Document Generation: Save the finalized invoice or spreadsheet format as a template/skill so the agent can generate future financial documents instantly with varying amounts without manual input.
import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "tv-revenue-forecasting",
    title: "TV Revenue Forecasting Model",
    summary:
      "Built a forecasting model to predict quarterly TV ad revenue across specialty channels, improving forecast accuracy and enabling proactive revenue management.",
    problem:
      "Quarterly revenue forecasts were based on manual estimates, leading to a 12–15% variance from actuals. Sales and Finance needed more accurate projections to allocate inventory and set pricing targets.",
    dataset:
      "3 years of historical ad revenue data across 12 specialty channels, including spot rates, sell-through percentages, advertiser spend, and seasonal indices.",
    tools: ["Excel", "Power BI", "SQL"],
    analysis: [
      "Aggregated historical revenue by channel, quarter, and advertiser tier",
      "Identified seasonal patterns and year-over-year growth trends",
      "Built a weighted moving average model with seasonal adjustments",
      "Created scenario analysis (best/base/worst) for sales planning",
    ],
    insights: [
      "Q4 revenue consistently 23% higher than Q2 due to holiday ad spending",
      "Top 20% of advertisers contributed 65% of total revenue",
      "Specialty channels showed 8% YoY growth vs. 2% for conventional",
    ],
    impact:
      "Reduced forecast variance from 15% to 5%, enabling Finance to improve budget planning and Sales to prioritize high-value accounts.",
    kpis: [
      { label: "Forecast Accuracy", value: "95%", description: "Up from 85%" },
      {
        label: "Revenue Identified",
        value: "$2.4M",
        description: "At-risk revenue flagged early",
      },
      {
        label: "Channels Analyzed",
        value: "12",
        description: "Specialty networks",
      },
    ],
  },
  {
    slug: "audience-analytics-dashboard",
    title: "Audience Analytics Dashboard",
    summary:
      "Designed an interactive dashboard tracking weekly audience metrics across TV networks, replacing fragmented spreadsheet reports with a single source of truth.",
    problem:
      "Audience data was scattered across multiple spreadsheets updated manually each week. Stakeholders lacked a unified view of performance trends, making it difficult to act on viewership shifts quickly.",
    dataset:
      "Weekly audience ratings (AMA, reach, share) across 8 TV networks, segmented by daypart, demographic, and program genre. 2 years of historical data.",
    tools: ["Power BI", "Excel", "SQL"],
    analysis: [
      "Consolidated audience data from multiple sources into a single data model",
      "Built interactive filters by network, daypart, demo, and time period",
      "Created week-over-week and year-over-year comparison views",
      "Added automated alerts for significant audience shifts (>10% WoW change)",
    ],
    insights: [
      "Prime-time audiences declined 6% YoY, but late-night grew 11%",
      "Women 25–54 demo showed strongest engagement on specialty channels",
      "3 networks had consistent underperformance vs. forecast by 15%+",
    ],
    impact:
      "Eliminated 8 hours/week of manual reporting. Enabled Programming and Sales teams to react to audience shifts within days instead of weeks.",
    kpis: [
      {
        label: "Time Saved",
        value: "8 hrs/wk",
        description: "Manual reporting eliminated",
      },
      {
        label: "Networks Tracked",
        value: "8",
        description: "Unified dashboard",
      },
      {
        label: "Response Time",
        value: "75% faster",
        description: "Audience shift reaction",
      },
    ],
  },
  {
    slug: "pricing-inventory-optimization",
    title: "Pricing & Inventory Optimization",
    summary:
      "Analyzed ad inventory utilization and pricing tiers to identify revenue leakage and recommend pricing adjustments across TV networks.",
    problem:
      "Sell-through rates varied widely across dayparts and channels, with some inventory consistently undersold while premium slots had excess demand. Pricing hadn't been recalibrated in over a year.",
    dataset:
      "12 months of ad inventory data including spot rates, sell-through %, avails, makegoods, and advertiser tier classifications across 10 channels.",
    tools: ["Excel", "SQL", "Power BI"],
    analysis: [
      "Mapped sell-through rates by channel, daypart, and quarter",
      "Identified pricing gaps between high-demand and low-demand inventory",
      "Analyzed makegood patterns to quantify revenue displacement",
      "Modeled revenue impact of tiered pricing adjustments",
    ],
    insights: [
      "Late-fringe inventory was underpriced by 18% relative to demand",
      "Makegoods were displacing $340K/quarter in sellable inventory",
      "5 channels had sell-through below 60% — candidates for bundled packages",
    ],
    impact:
      "Pricing recommendations projected to recover $1.2M in annual revenue through rate adjustments and reduced makegood displacement.",
    kpis: [
      {
        label: "Revenue Opportunity",
        value: "$1.2M",
        description: "Annual recovery projected",
      },
      {
        label: "Makegood Cost",
        value: "$340K/qtr",
        description: "Displacement identified",
      },
      {
        label: "Underpriced Slots",
        value: "18%",
        description: "Below market rate",
      },
    ],
  },
  {
    slug: "sql-data-exploration",
    title: "SQL Data Exploration Project",
    summary:
      "Used SQL to explore and analyze a large advertiser dataset, uncovering spending patterns, retention trends, and segment-level insights for strategic planning.",
    problem:
      "The sales team needed a data-driven view of advertiser behavior — which segments were growing, which were at risk of churn, and where cross-sell opportunities existed. This data lived in a database with no existing reports.",
    dataset:
      "Advertiser transaction database with 50K+ records including spend amounts, campaign types, booking dates, channel preferences, and contract durations.",
    tools: ["SQL", "Excel"],
    analysis: [
      "Wrote queries to segment advertisers by spend tier, frequency, and tenure",
      "Identified top revenue-generating segments and their growth trajectory",
      "Analyzed churn patterns by comparing year-over-year booking activity",
      "Created cohort analysis to track advertiser lifetime value trends",
    ],
    insights: [
      "Top 15% of advertisers generated 58% of total ad revenue",
      "New advertisers had a 40% retention rate after year one — opportunity to improve onboarding",
      "Cross-channel advertisers spent 2.3x more than single-channel buyers",
    ],
    impact:
      "Delivered a segmentation report that Sales used to prioritize outreach, contributing to a 12% increase in renewal rates for at-risk accounts.",
    kpis: [
      {
        label: "Records Analyzed",
        value: "50K+",
        description: "Advertiser transactions",
      },
      {
        label: "Renewal Rate",
        value: "+12%",
        description: "At-risk account improvement",
      },
      {
        label: "Revenue Concentration",
        value: "58%",
        description: "From top 15% advertisers",
      },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  summary: string;
  tools: string[];
  tags: string[];
  thumbnail: string;
  problem: string;
  dataset: string;
  approach: string[];
  keyInsights: string[];
  businessImpact: string;
}

export const projects: Project[] = [
  {
    id: 'flipkart-dashboard',
    title: 'Flipkart Ecommerce Sales Dashboard',
    summary: 'Comprehensive Power BI dashboard analyzing Flipkart\'s ecommerce sales data across multiple product categories, geographies, and time periods.',
    tools: ['Power BI', 'DAX', 'Data Modeling'],
    tags: ['E-commerce', 'Sales Analytics', 'KPI Dashboard'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    problem: 'Flipkart needed a comprehensive analytics solution to understand sales performance across multiple dimensions including product categories, geographic regions, and time periods. The challenge was to build advanced KPIs that could support strategic decision-making and operational reporting.',
    dataset: 'Sales transaction data from Flipkart\'s e-commerce platform including product categories, sales amounts, profit margins, order values, customer demographics, and geographic information across multiple time periods.',
    approach: [
      'Designed data model and relationships in Power BI to connect multiple data sources',
      'Created calculated measures using DAX for KPIs including total sales, profit margins, and Average Order Value (AOV)',
      'Built interactive filters for product categories, time periods, and geographic regions',
      'Implemented drill-down capabilities for detailed analysis',
      'Designed user-centric visualizations with clear hierarchy and information architecture',
      'Added conditional formatting to highlight performance anomalies and trends',
    ],
    keyInsights: [
      'Identified top-performing product categories contributing to 65% of total revenue',
      'Discovered seasonal patterns in sales with peak performance during festive months',
      'Geographic analysis revealed high-potential markets for expansion',
      'AOV analysis helped optimize pricing and bundling strategies',
      'Product category performance showed opportunities for inventory optimization',
    ],
    businessImpact: 'The dashboard enabled data-driven decision-making for strategic planning and operational reporting. Stakeholders gained visibility into sales performance, leading to optimized inventory management, targeted marketing campaigns, and improved profitability through better understanding of product and regional performance.',
  },
  {
    id: 'grocery-wars',
    title: 'Grocery Store Wars Analytics Dashboard',
    summary: 'Interactive Power BI dashboard comparing Zepto and Blinkit by analyzing sales, customer preferences, delivery efficiency, and competitive trends across India\'s metro cities.',
    tools: ['Power BI', 'Python', 'SQL', 'ETL'],
    tags: ['Competitive Analysis', 'Delivery Analytics', 'Market Research'],
    thumbnail: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
    problem: 'Quick commerce companies needed competitive intelligence to understand their market position. The challenge was to process and analyze over 664,000 transaction records to compare two major players (Zepto and Blinkit) across multiple metrics including delivery times, customer satisfaction, and market share in different metro cities.',
    dataset: 'Over 664,000 transaction records from Zepto and Blinkit covering sales data, delivery times, customer ratings, product categories, order values, and geographic locations across major metro cities in India.',
    approach: [
      'Extracted and cleaned 664,000+ transaction records using Python and SQL',
      'Built ETL pipeline to standardize data from multiple sources',
      'Created data models to enable comparative analysis between competitors',
      'Developed delivery analytics module tracking average delivery times (15.49 min)',
      'Built customer satisfaction metrics module (average rating: 2.99/5)',
      'Implemented geographic analysis to compare performance across metro cities',
      'Created interactive visualizations showing market trends and competitive positioning',
    ],
    keyInsights: [
      'Average delivery time of 15.49 minutes identified as key competitive differentiator',
      'Customer satisfaction score of 2.99/5 indicated opportunities for service improvement',
      'Geographic analysis revealed different market leaders in different metro cities',
      'Product category preferences varied significantly across regions',
      'Peak ordering times and delivery efficiency patterns identified',
      'Price sensitivity analysis showed opportunities for dynamic pricing',
    ],
    businessImpact: 'The dashboard provided business teams with actionable insights for operational improvements and strategic planning. Delivery time analysis helped optimize logistics routes, while customer satisfaction metrics guided service improvements. Competitive insights enabled better market positioning and informed expansion strategies.',
  },
];

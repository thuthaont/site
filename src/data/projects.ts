import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "scattered-narrative",
    title: "Human Resource Report",
    subtitle: "Identified actual performance against planned workforce targets and budgets across multiple divisions. Transformed and cleaned data with Power M Query language and built with DAX modeling and visualization techniques.",
    category: "Visualization",
    tags: ["Power BI"],
    image: "/images/HR report.png",
    image2: "/images/HR pbi report.png",
    image3: "/images/staff cost.png",
    tableauUrl: "",
    collabUrl: "https://github.com/thuthaont/Data-Analyst-Portfolio/tree/main/HR%20report%20in%20banking%20sector",
    description: "Identified actual performance against planned workforce targets and budgets across multiple divisions. Transformed and cleaned data with Power M Query language and built with DAX modeling and visualization techniques.",
    extendedDescription: "<strong>Data Processing</strong><br />Due to the fragmented nature of the data across multiple interconnected tables, preliminary ETL and data preparation were conducted to streamline calculations. Specifically, key metrics with missing values were computed using Excel formulas prior to importing into Power BI. The remaining datasets were ingested into Power BI, where tables underwent schema restructuring, unpivoting, and formatting to optimize the data model for downstream analysis.<br /><br /><strong>Analysis & Insights</strong><br /><strong>Headcount Movement: </strong>Time-series analysis of onboarding and attrition data revealed clear seasonality patterns. As a result, these two highly seasonal factors were utilized as core inputs for the predictive model.<br /><strong>Staff Cost: </strong> Employee payroll costs represent the vast majority of expenditures, accounting for 68% of the total budget. Among all departments, Department A incurred the highest total cost, which directly correlates with its significantly larger workforce size.",
  },
  {
    id: "social-pulse",
    title: "Employee Churn Analysis",
    subtitle: "A machine learning pipeline that predicts employee attrition using Random Forest model. Performed feature engineering, model evaluation, achieving 0.994 ROC-AUC.",
    category: "Data Modeling",
    tags: ["Python", "Google Colab"],
    image: "/images/churn.png",
    image2: "/images/job satisfaction.png",
    image3: "/images/model.png",
    tableauUrl: "",
    collabUrl: "https://colab.research.google.com/drive/1Mpgrko7DeqUYZzvTYhoEJ-8g12DB-K74?usp=sharing",
    description: "A machine learning pipeline that predicts employee attrition using Random Forest model. Performed feature engineering, model evaluation, achieving 0.994 ROC-AUC.",
    extendedDescription: "The employee churn dataset is naturally imbalanced, suggesting the use of <strong>ROC-AUC</strong> metric to evaluate models rather than Accuracy to protect model sensitivity toward the minority class. <strong>Random Forest</strong> is the best model with ROC-AUC score of 0.994.<br /><br />This predictive analysis has determined that employee <strong>job satisfaction</strong> is the paramount predictor in forecasting retention. The analysis reveals a pattern: employees with a substantial number of <strong>completed projects</strong>, <strong>high performance</strong> evaluations and <strong>moderate working hours</strong> are more inclined to remain with the organization.",
  },
  {
    id: "entropy-index",
    title: "Customer Behavior Analysis",
    subtitle: "An end-to-end data analysis workflow using Python, Google BigQuery, SQL, and Power BI to analyze customer purchasing behavior, segment customers, and develop an interactive dashboard supporting business recommendations.",
    category: "End-to-end Project",
    tags: ["SQL", "Python", "Power BI"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZaQgDi4vFMQnlGjRXlhGbPER1GmQlcew1d3YMVLpJbcfaZz-1Pa0OY58drv-6lyvmuY_M4mzXOsYkaZi6_8iOuzBZpV0p7HUXvvdrr6wurQTnSQrN3_1wU8KUFyx-rjeACIhEHt10l80SO-NHf5JWaZbLP8UGXpQHc1E8Uph7frVf_UIWL6TpBafuxkLuHulUSW9P8B2fPzR7Z9ACWQVHycdQ8NAbmJ-59JC24Xgcw_2EN-QDjn8Z9EY1DEjixX-_NQdE8R-3LvE",
    image2: "/images/customer.png",
    image3: "",
    tableauUrl: "",
    collabUrl: "https://github.com/thuthaont/Data-Analyst-Portfolio/tree/main/customer%20trends%20analysis",
    description: "An end-to-end data analysis workflow using Python, Google BigQuery, SQL, and Power BI to analyze customer purchasing behavior, segment customers, and develop an interactive dashboard supporting business recommendations.",
    extendedDescription: "The goal of this project is to create a data analytics workflow, demonstrating the ability to translate raw data into strategic business intelligence by:<br /><strong>Data Preparation (Python):</strong> Clean and transform the raw dataset for analysis with Google Colab, then load the cleaned data into BigQuery for further analysis. <br /><strong>Data Analysis (SQL):</strong> Simulate business transactions, and run queries to extract insights on customer segments, loyalty, and purchase drivers.<br /><strong>Visualization & Insights (Power BI):</strong> Build an interactive dashboard that highlights key patterns and trends, enabling stakeholders to make data-driven decisions.",
  }
];

export const SKILLSETS = [
  "Power BI",
  "Python",
  "SQL",
  "Excel"
];

import { Download, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';

export function ResumePage() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Download Button */}
        <div className="flex justify-end mb-6">
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <h1 className="mb-2">Siddhesh Salve</h1>
            <div className="text-blue-100 mb-6">Data Analyst</div>
            <div className="grid md:grid-cols-3 gap-4 text-blue-50">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-7720038094</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>siddhesh.at.work4@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2" />
                <a href="https://linkedin.com/in/siddhesh-salve77" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  linkedin.com/in/siddhesh-salve77
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-8">
              {/* Skills */}
              <section>
                <h2 className="text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">Skills</h2>
                
                <div className="mb-6">
                  <h3 className="text-slate-800 mb-3">Programming & Querying</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">SQL</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">Python</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-slate-800 mb-3">Data Visualization</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">Power BI</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">Tableau</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">Excel</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-slate-800 mb-3">Analytical Abilities</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Data Cleaning</li>
                    <li>• EDA</li>
                    <li>• Insight Generation</li>
                    <li>• Data Modeling</li>
                    <li>• ETL</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-800 mb-3">Soft Skills</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Communication</li>
                    <li>• Problem Solving</li>
                    <li>• Teamwork</li>
                    <li>• Time Management</li>
                  </ul>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">Certifications</h2>
                <ul className="space-y-3 text-slate-600">
                  <li>
                    <div className="font-medium text-slate-800">SQL (Intermediate)</div>
                    <div>HackerRank</div>
                  </li>
                  <li>
                    <div className="font-medium text-slate-800">Business Analysis with Excel</div>
                    <div>Simplilearn</div>
                  </li>
                  <li>
                    <div className="font-medium text-slate-800">Data Analytics with Power BI and ChatGPT</div>
                    <div>Infosys Foundation</div>
                  </li>
                  <li>
                    <div className="font-medium text-slate-800">Python for Data Science</div>
                    <div>Saylor Academy</div>
                  </li>
                </ul>
              </section>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Summary */}
              <section>
                <h2 className="text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">Summary</h2>
                <p className="text-slate-600">
                  Results-driven Data Analyst with advanced proficiency in SQL, Python, Excel, and Power BI, 
                  specializing in transforming raw data into business growth. Demonstrated success delivering 
                  actionable insights and user-centric dashboards. Passionate about leveraging data to drive 
                  growth and operational excellence. Actively seeking an entry-level Data Analyst position 
                  in a dynamic organization to contribute technical expertise and analytical thinking.
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">Experience</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-slate-900">Data Analyst Intern</h3>
                        <div className="text-blue-600">Cognifyz Solutions (Remote)</div>
                      </div>
                      <div className="text-slate-600">April 2025 – June 2025</div>
                    </div>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Executed a virtual internship focused on exploratory data analysis and data visualization to derive business insights</li>
                      <li>• Developed and implemented data cleaning workflows, standardizing raw data and enhancing its accuracy and readiness for reporting</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">Projects</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-slate-900 mb-2">
                      Flipkart Ecommerce Sales Dashboard | Power BI
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Designed and implemented a comprehensive Power BI dashboard to analyze Flipkart's ecommerce sales data across multiple product categories, geographies, and time periods</li>
                      <li>• Built advanced KPIs for sales amount, total profit, and average order value (AOV), supporting strategic decision-making and operational reporting</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-slate-900 mb-2">
                      Grocery Store Wars Analytics Dashboard | Power BI
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Built an interactive Power BI dashboard to compare Zepto and Blinkit by analyzing sales, customer preferences, delivery efficiency, and competitive trends across India's metro cities</li>
                      <li>• Processed and visualized over 664,000 transaction records and developed delivery and rating analytics modules showing average delivery time (15.49 min) and customer satisfaction (2.99/5), helping business teams</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">Education</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-slate-900">Master of Computer Applications (MCA)</h3>
                      <div className="text-slate-600">2024 – 2026</div>
                    </div>
                    <div className="text-slate-600">Maharashtra Institute of Technology, Aurangabad</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-slate-900">Bachelor of Computer Applications (BCA)</h3>
                      <div className="text-slate-600">2021 – 2024</div>
                    </div>
                    <div className="text-slate-600">Modern College of Arts, Commerce and Science, Pune</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

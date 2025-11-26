import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { BarChart3, Database, TrendingUp, Download, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                Available for Opportunities
              </div>
              <h1 className="text-slate-900 mb-6">
                Hi, I'm Siddhesh Salve
              </h1>
              <div className="text-slate-600 mb-4">
                Data Analyst | Business Analyst | Data Engineer Analyst
              </div>
              <p className="text-slate-600 mb-8">
                Results-driven Data Analyst with advanced proficiency in SQL, Python, Excel, and Power BI. 
                I specialize in transforming raw data into business growth, delivering actionable insights 
                and user-centric dashboards that drive operational excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button>
                    View Projects <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Button>
                </Link>
                <a href="#download-resume">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2 inline" /> Download Resume
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="secondary">Contact Me</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-slate-900 mb-2">Data Visualization</div>
                  <p className="text-slate-600">Power BI, Tableau, Excel</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-slate-900 mb-2">Data Engineering</div>
                  <p className="text-slate-600">SQL, Python, ETL</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-slate-900 mb-2">Business Analytics</div>
                  <p className="text-slate-600">EDA, Insights, KPIs</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white mt-8">
                  <div className="mb-2">664K+</div>
                  <p>Transaction Records Analyzed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Technical Strengths</h2>
            <p className="text-slate-600">
              Equipped with modern tools and methodologies to deliver data-driven solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-blue-600 mb-4">Programming & Analysis</div>
              <ul className="space-y-2 text-slate-600">
                <li>• SQL (Intermediate)</li>
                <li>• Python for Data Science</li>
                <li>• Data Cleaning & ETL</li>
                <li>• Exploratory Data Analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-blue-600 mb-4">Visualization Tools</div>
              <ul className="space-y-2 text-slate-600">
                <li>• Power BI (Advanced)</li>
                <li>• Tableau</li>
                <li>• Advanced MS Excel</li>
                <li>• Dashboard Design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-blue-600 mb-4">Business Skills</div>
              <ul className="space-y-2 text-slate-600">
                <li>• Insight Generation</li>
                <li>• Data Modeling</li>
                <li>• Problem Solving</li>
                <li>• Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-slate-300 mb-8">
            I'm actively seeking an entry-level Data Analyst position where I can contribute 
            my technical expertise and analytical thinking to drive business growth.
          </p>
          <Link to="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
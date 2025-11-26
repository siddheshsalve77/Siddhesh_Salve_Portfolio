import { Code, Database, BarChart, PieChart, FileSpreadsheet, Brain, Users, Clock, MessageSquare, Target } from 'lucide-react';

export function AboutPage() {
  const technicalSkills = [
    {
      category: 'Programming & Querying',
      icon: Code,
      skills: ['SQL', 'Python'],
    },
    {
      category: 'Data Visualization',
      icon: BarChart,
      skills: ['Advanced MS Excel', 'Power BI', 'Tableau'],
    },
    {
      category: 'Analytical Abilities',
      icon: Brain,
      skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Insight Generation', 'Data Modeling', 'ETL'],
    },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare },
    { name: 'Problem Solving', icon: Target },
    { name: 'Teamwork', icon: Users },
    { name: 'Time Management', icon: Clock },
  ];

  const timeline = [
    {
      type: 'education',
      title: 'Master of Computer Applications (MCA)',
      institution: 'Maharashtra Institute of Technology, Aurangabad',
      period: '2024 – 2026',
      status: 'In Progress',
    },
    {
      type: 'experience',
      title: 'Data Analyst Intern',
      institution: 'Cognifyz Solutions (Remote)',
      period: 'April 2025 – June 2025',
      description: [
        'Executed a virtual internship focused on exploratory data analysis and data visualization to derive business insights',
        'Developed and implemented data cleaning workflows, standardizing raw data and enhancing its accuracy and readiness for reporting',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'Modern College of Arts, Commerce and Science, Pune',
      period: '2021 – 2024',
      status: 'Completed',
    },
  ];

  const certifications = [
    { name: 'SQL (Intermediate)', provider: 'HackerRank' },
    { name: 'Business Analysis with Excel', provider: 'Simplilearn' },
    { name: 'Data Analytics with Power BI and ChatGPT', provider: 'Infosys Foundation' },
    { name: 'Python for Data Science', provider: 'Saylor Academy' },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-slate-900 mb-6">About Me</h1>
            <p className="text-slate-600 mb-4">
              I'm a results-driven Data Analyst with advanced proficiency in SQL, Python, Excel, and Power BI, 
              specializing in transforming raw data into business growth. My approach combines technical expertise 
              with strong analytical thinking to deliver actionable insights and user-centric dashboards.
            </p>
            <p className="text-slate-600">
              Passionate about leveraging data to drive growth and operational excellence, I'm actively seeking 
              an entry-level Data Analyst position in a dynamic organization where I can contribute my technical 
              expertise and help turn data into strategic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-slate-900 mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {technicalSkills.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-slate-900">{category.category}</div>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-slate-900">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-slate-900 mb-12">Education & Experience</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-3">
                  {item.type === 'education' ? 'Education' : 'Experience'}
                </div>
                <h3 className="text-slate-900 mb-2">{item.title}</h3>
                <div className="text-slate-600 mb-2">{item.institution}</div>
                <div className="text-slate-500 mb-3">{item.period}</div>
                {item.status && (
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full mb-3">
                    {item.status}
                  </div>
                )}
                {item.description && (
                  <ul className="space-y-2 mt-4">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="text-slate-600 flex">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FileSpreadsheet className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-slate-900 mb-1">{cert.name}</div>
                  <div className="text-slate-600">{cert.provider}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

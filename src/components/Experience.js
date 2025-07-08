import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Aws from './icons/Aws';

const Experience = () => {
  const workExperience = [
    {
      position: "Machine Learning Engineer",
      company: "Freelance",
      location: "Remote",
      duration: "Aug 2024 - Present",
      type: "work",
      description: "I take raw business problems and turn them into working AI tools – starting with coffee chats to understand client needs, then building everything from React dashboards to Python-powered machine learning brains. My sweet spot? Creating cloud-hosted systems",
      achievements: [
        "I turned soul-crushing spreadsheet marathons into one-click reports (React + Python tools that saved 4+ clients 75% time – goodbye Excel hell!)",
        "Replaced crystal-ball predictions with a churn-detecting superhero (Our 92%-accurate model spots at-risk customers before they leave – like having Spidey-sense for business)",
        "Transformed chaotic data into beautiful, living dashboards (React visualizations that make real-time insights feel like playing a video game)",
        "Built a robot assistant for data chores (My automation bot cuts preprocessing time by 75% – imagine having 10 extra coffee breaks daily)",
        "Gave away a Fortune 500-grade prediction engine (Open-sourced our churn detector because great tools should be shared, not hoarded!)"
      ],
      technologies: ["Python", "React.js", "XGBoost", "LightGBM", "Docker", "FastAPI", "AWS", "GitHub Actions", "REST/GraphQL APIs", "PostgreSQL", "BigQuery"],
      companyLogo: process.env.PUBLIC_URL + '/freel.png',
      current: true
    },
    {
      position: "Data Science Intern",
      company: "Accenture",
      location: "Remote",
      duration: "Jun 2024 - Nov 2024",
      type: "work",
      description: "At Accenture, I was the data detective who helped clients solve their trickiest puzzles - from predicting customer behavior to making sense of emotional feedback. Guided by senior data scientists, I didn't just build models; I crafted tools that reshaped how businesses made decisions.",
      achievements: [
        "Turned customer mysteries into predictable patterns (Built Python/SQL systems that could spot customers ready to leave (churn prediction) and measure emotional tones in reviews (sentiment analysis) using specialized classifiers - like teaching computers to understand human behavior!)",
        "Gave data pipelines a caffeine boost (Optimized sluggish ETL workflows on AWS/Azure, making data processing 30% faster - the equivalent of giving teams back a full workday each week to focus on insights instead of waiting.)",
        "Made AI explain its thinking (Designed Tableau/Power BI dashboards that showed not just predictions but why models made decisions (using counterfactual explanations). Finally - AI that could show its work like a math student!)",
        "Became the 'translator' between tech and business (Partnered with engineers and consultants to transform technical magic into client strategies. Played key roles in 3+ projects where data directly shaped business roadmaps.)"
      ],
      technologies: ["Python", "R", "SQL", "Tableau", "Machine Learning", "Statistical Analysis"],
      companyLogo: process.env.PUBLIC_URL + '/Accenture-Logo.png',
      current: false
    }
  ];

  const education = [
    {
      institution: "University of Nairobi",
      degree: "Bachelor of Economics & Statistics",
      location: "Nairobi, Kenya",
      duration: "2020 - 2024",
      achievement: "Graduated Cum Laude (GPA: 3.7/4.0)",
      type: "degree",
      logo: process.env.PUBLIC_URL + '/UoNlogo.png'
    },
    {
      institution: "Udacity",
      degree: "AWS Machine Learning Fundamentals",
      location: "Online",
      duration: "2025 - 2025",
      achievement: "Passed - Certified",
      type: "certification",
      logo: process.env.PUBLIC_URL + '/udacitylogo.png'
    },
    {
      institution: "MITx (EDX)",
      degree: "Machine Learning with Python- from Linear Models to Deep Learning",
      location: "Online",
      duration: "2024 - 2024",
      achievement: "Passed with 85%",
      type: "certification",
      logo: process.env.PUBLIC_URL + '/MITx.png'
    },
    {
      institution: "Udacity",
      degree: "AI Programming with Python",
      location: "Online",
      duration: "2024 - 2024",
      achievement: "Passed - Certified",
      type: "certification",
      logo: process.env.PUBLIC_URL + '/udacitylogo.png'
    },
    {
      institution: "Udacity",
      degree: "Business Analytics",
      location: "Online",
      duration: "2023 - 2023",
      achievement: "Passed - Certified",
      type: "certification",
      logo: process.env.PUBLIC_URL + '/udacitylogo.png'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Experience & Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional
            <span className="bg-gradient-to-r from-gray-800 via-blue-900 via-blue-500 to-cyan-400 bg-clip-text text-transparent"> Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          "I make AI feel less like HAL 9000 and more like a helpful colleague" 😄
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Work Experience</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line for Work Experience */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full hidden sm:block" />
            
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-background z-10 hidden sm:block" />
                  
                  {/* Work Experience Card */}
                  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="w-full md:w-1/2 md:px-8">
                      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 text-white">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
                                <img
                                  src={job.companyLogo}
                                  alt={`${job.company} logo`}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold">{job.position}</h4>
                                <p className="text-blue-100 font-medium">{job.company}</p>
                              </div>
                            </div>
                            {job.current && (
                              <Badge className="bg-green-500 text-white border-0 hover:bg-green-600">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-blue-100">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">📍</span>
                              <span className="text-sm">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">📅</span>
                              <span className="text-sm">{job.duration}</span>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <div>
                              <p className="text-muted-foreground leading-relaxed text-base">
                                {job.description}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                🏆 Key Achievements
                              </h4>
                              <div className="space-y-3">
                                {job.achievements.map((achievement, i) => (
                                  <div key={i} className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors duration-200">
                                      {achievement}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                🛠️ Technologies & Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/50 dark:hover:to-cyan-800/50 transition-all duration-200 hover:scale-105"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer for timeline */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Education & Certifications</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
                        {item.logo === process.env.PUBLIC_URL + '/udacitylogo.png' ? (
                          <img
                            src={process.env.PUBLIC_URL + '/udacitylogo.png'}
                            alt="Udacity Logo"
                            className="w-10 h-10 object-contain"
                          />
                        ) : item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            className={`w-10 h-10 object-contain ${item.institution === "MITx (EDX)" ? "scale-125" : ""}`}
                          />
                        ) : null}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{item.degree}</h4>
                        <p className="text-blue-100 font-medium">{item.institution}</p>
                      </div>
                    </div>
                    {item.logo === process.env.PUBLIC_URL + '/udacitylogo.png' ? (
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Aws className="w-10 h-10" style={{ color: 'black' }} />
                      </div>
                    ) : null}
                    <Badge className="bg-blue-500 text-white border-0 hover:bg-blue-600">
                      {item.type === 'degree' ? 'Degree' : 'Certification'}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-blue-100">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📍</span>
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📅</span>
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                    <span className="text-lg">✅</span>
                    <span className="font-semibold text-base">{item.achievement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
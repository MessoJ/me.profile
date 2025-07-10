import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS (IAM, S3, Lambda, API Gateway, EventBridge, RDS, CloudWatch, SQS)",
        "Docker",
        "GitHub Actions",
        "AWS SAM",
        "CloudFormation",
        "Infrastructure as Code (IaC)"
      ],
      icon: "☁️",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend & Data Engineering",
      skills: [
        "Python",
        "FastAPI",
        "boto3",
        "requests",
        "Real-Time Data Pipelines",
        "API Design & Implementation"
      ],
      icon: "⚙️",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Machine Learning & Statistics",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Statsmodels",
        "EconML",
        "Unsupervised Anomaly Detection",
        "Comparative Model Evaluation",
        "Causal Inference"
      ],
      icon: "🤖",
      color: "from-green-500 to-teal-400"
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL (AWS RDS)",
        "Time-Series Data Modeling",
        "SQL Query Optimization",
        "Data Warehousing"
      ],
      icon: "🗄️",
      color: "from-orange-500 to-red-400"
    },
    {
      title: "Frontend & Visualization",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "Streamlit",
        "Plotly Dash",
        "Data Storytelling & Visualization",
        "Interactive Dashboards"
      ],
      icon: "🎨",
      color: "from-indigo-500 to-purple-400"
    },
    {
      title: "Other Technologies",
      skills: [
        "Event-Driven & Serverless Architecture",
        "Automated Testing & CI/CD",
        "Version Control (Git, GitHub)",
        "Cloud-Native Design Principles",
        "Monitoring & Alerting",
        "Security Best Practices",
        "End-to-End Automation",
        "Production-Grade System Design"
      ],
      icon: "🔧",
      color: "from-gray-700 to-gray-500"
    }
  ];

  const skillLevels = [
    { category: "Machine Learning", level: 95 },
    { category: "Data Engineering", level: 90 },
    { category: "Cloud Computing", level: 85 },
    { category: "Statistics & Analytics", level: 92 },
    { category: "Python Development", level: 88 },
    { category: "Database Management", level: 80 },
    { category: "Frontend Development", level: 65 },
    { category: "JavaScript & React", level: 65 }
  ];

  const keyHighlights = [
    {
      title: "2 Years",
      description: "Experience in Data Science & ML",
      icon: "📊"
    },
    {
      title: "10+ Projects",
      description: "Successfully Completed",
      icon: "🚀"
    },
    {
      title: "Full-Stack",
      description: "ML & Frontend Capabilities",
      icon: "💻"
    },
    {
      title: "Cum Laude",
      description: "Academic Excellence",
      icon: "🎓"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical 
            <span className="bg-gradient-to-r from-gray-800 via-blue-900 via-blue-500 to-cyan-400 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full machine learning and data science stack with growing frontend capabilities
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyHighlights.map((highlight, index) => (
            <Card key={index} className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white/80 dark:bg-gray-900/80 border-0 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-3xl shadow">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-bold mb-2 text-center">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground text-center">{highlight.description}</p>
            </Card>
          ))}
        </div>

        {/* Technical Skills Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Core Technologies</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden hover:scale-105"
              >
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <CardTitle className="text-lg font-bold text-white">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </div>
                
                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="px-3 py-1 text-xs rounded-full hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 text-gray-700 dark:text-gray-300 border-0 shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proficiency Levels</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillLevels.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.category}</span>
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-200 dark:bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="text-center">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-4">Continuous Learning</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-400 mx-auto rounded-full"></div>
          </div>
          
          <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-900/20">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a machine learning engineer, I believe in continuous growth and expanding my skill set. 
                While my expertise lies in data science and ML engineering, I'm actively developing my frontend 
                skills to build better user interfaces for data applications and create more comprehensive solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                    📚
                  </div>
                  <h4 className="font-bold text-sm mb-2">Current Focus</h4>
                  <p className="text-xs text-muted-foreground">
                    Advanced React patterns and modern JavaScript frameworks
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                    🔮
                  </div>
                  <h4 className="font-bold text-sm mb-2">Next Steps</h4>
                  <p className="text-xs text-muted-foreground">
                    TypeScript and advanced state management solutions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                    🎯
                  </div>
                  <h4 className="font-bold text-sm mb-2">Goal</h4>
                  <p className="text-xs text-muted-foreground">
                    Full-stack ML applications with beautiful, intuitive interfaces
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Github from './icons/Github';

const Projects = () => {
  const projects = [
    {
      title: "Macro Economic Engine",
      description: "An automated, cloud-native platform that ingests real-time economic data streams, uses unsupervised machine learning to detect statistically significant anomalies, and provides causal inference models for economic forecasting.",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349",
      technologies: ["Python", "Machine Learning", "Cloud Computing", "Real-time Data", "Anomaly Detection"],
      githubUrl: "https://github.com/MessoJ/macro_econ_engine",
      isPublic: false,
      license: "Proprietary"
    },
    {
      title: "Customer Churn Prediction",
      description: "A comprehensive machine learning pipeline for predicting customer churn in telecommunications. The pipeline includes data preprocessing, feature engineering, model training, and deployment with detailed performance analysis.",
      image: "https://images.unsplash.com/photo-1645352768981-acab045b0742",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Feature Engineering", "Model Deployment"],
      githubUrl: "https://github.com/mesofrancis/Customer-Churn-Prediction",
      isPublic: true,
      license: "MIT License"
    },
    {
      title: "Data Automation Bot",
      description: "A Python-based bot that automates data preprocessing and reporting, integrating with APIs and SQL databases. This solution has reduced manual effort significantly.",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5",
      technologies: ["Python", "APIs", "SQL", "Automation", "Database Management"],
      githubUrl: "https://github.com/MessoJ/data_automation_bot",
      isPublic: true,
      license: "MIT License"
    },
    {
      title: "Sentiment Analysis Suite",
      description: "A machine learning project implementing three different linear classification algorithms for sentiment analysis of text reviews. Compares performance of Perceptron, Average Perceptron, and Pegasos algorithms.",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      technologies: ["Python", "NLP", "Sentiment Analysis", "Perceptron", "Linear Classification", "Pegasos"],
      githubUrl: "https://github.com/mesofrancis/sentiment-analysis",
      isPublic: true,
      license: "MIT License"
    }
  ];

  const handleProjectClick = (url, isPublic) => {
    if (isPublic) {
      window.open(url, '_blank');
    } else {
      alert('This is a private repository. Access may be restricted.');
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the 
            <span className="bg-gradient-to-r from-gray-800 via-blue-900 via-blue-500 to-cyan-400 bg-clip-text text-transparent"> Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          <em>
            I build AI tools that don’t just work – they delight. From sketching React interfaces to teaching Python models new tricks, I craft cloud-based systems that turn data headaches into 'aha!' moments for clients
          </em>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500/90 text-white border-0 backdrop-blur-sm">
                    {project.isPublic ? '📂 Public' : '🔒 Private'}
                  </Badge>
                </div>
                
                {/* Project Number */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/50 dark:hover:to-cyan-800/50 transition-all duration-200 hover:scale-105"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    {project.license}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleProjectClick(project.githubUrl, project.isPublic)}
                    className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-0 transition-all duration-300 hover:scale-105"
                  >
                    {project.isPublic ? (
                      <>
                        <Github className="w-4 h-4 mr-2" fill="currentColor" />
                        View Code
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🔒</span>
                        Private Repo
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
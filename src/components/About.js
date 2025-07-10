import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Rocket5 from './icons/Rocket5';
import Database2 from './icons/Database2';
import Brain from './icons/Brain';
import Sun1 from './icons/Sun1';

const About = () => {
  const highlights = [
    {
      icon: <Rocket5 className="w-6 h-6" />,
      title: "End-to-End ML Engineering",
      description: "From raw data to deployed models, I build robust, scalable machine learning pipelines for business needs."
    },
    {
      icon: <Database2 className="w-6 h-6" />,
      title: "Data Automation & Analytics",
      description: "Automating data collection, cleaning, and analysis to support decision-making."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI for Good",
      description: "Applying machine learning to address practical problems."
    },
    {
      icon: <Sun1 className="w-6 h-6" />,
      title: "Continuous Learning & Mentorship",
      description: "Focused on growth, sharing knowledge, and supporting others in the data science community."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turning Data Into 
            <span className="bg-gradient-to-r from-gray-800 via-blue-900 via-blue-500 to-cyan-400 bg-clip-text text-transparent"> Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I use machine learning and data science to solve complex problems and develop new solutions across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex justify-center">
              <img 
                src={process.env.PUBLIC_URL + '/profile.jpg'} 
                alt="Meso Francis profile" 
                className="rounded-3xl shadow-2xl max-w-xs w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi! I'm Meso Francis—a Machine Learning Engineer and Data Scientist focused on building smart systems that address real-world problems. My journey started with curiosity about how data shapes our world, and it's grown into a career using technology to solve practical challenges.
              </p>
              <p>
                I design and deploy end-to-end machine learning solutions, from wrangling raw data to launching models in production. I've worked across different industries, helping teams use their data to improve processes and outcomes.
              </p>
              <p>
                I value continuous learning, sharing knowledge, collaborating openly, and supporting others in the data science community. Outside of work, I explore new research, mentor aspiring data scientists, and contribute to open-source projects.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white/80 dark:bg-gray-900/80 border-0 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-3xl shadow">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-bold mb-2 text-center">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground text-center">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight, Eye, BookOpen, Search, Filter, Share2, Bookmark } from 'lucide-react';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      slug: "teaching-machines-to-run-businesses",
      title: "Teaching Machines to Run Businesses",
      excerpt: "How I learned that automation isn't about replacing humans – it's about freeing them. Imagine algorithms quietly handling inventory while humans focus on creativity.",
      content: `# Teaching Machines to Run Businesses

In the rapidly evolving landscape of business automation, I've discovered that the most successful implementations aren't about replacing humans – they're about amplifying human potential.

## The Human-AI Partnership

After implementing dozens of automation systems across various industries, I've learned that the magic happens when AI handles the repetitive, data-heavy tasks while humans focus on strategic thinking and creative problem-solving.

### Key Insights:

1. **Start Small**: Begin with simple, well-defined processes
2. **Measure Everything**: Track both efficiency gains and human satisfaction  
3. **Iterate Continuously**: AI systems improve with feedback and data

## Real-World Applications

In one recent project, we automated inventory management for a mid-sized retailer. The result? A 40% reduction in stockouts and 60% decrease in overstock situations. But more importantly, the procurement team could finally focus on supplier relationships and market analysis instead of endless spreadsheet management.

## Looking Forward

The future of business automation lies in creating seamless partnerships between human intelligence and machine efficiency. The companies that understand this balance will lead the next decade of innovation.`,
      date: "2024-12-15",
      readTime: "8 min read",
      views: "197",
      category: "Machine Learning",
      image: "ai-agent.jpeg",
      tags: ["ML", "Automation", "Business", "AI"]
    },
    {
      id: 2,
      slug: "building-scalable-data-pipelines-python",
      title: "Building Scalable Data Pipelines with Python",
      excerpt: "How to build Python systems that handle millions of records without crying! A comprehensive guide to creating robust, maintainable data pipelines that can handle enterprise-scale workloads.",
      content: `# Building Scalable Data Pipelines with Python

Creating data pipelines that can handle millions of records requires careful planning, robust architecture, and the right tools. Here's everything I've learned from building production-grade data systems.

## Architecture Principles

### 1. Design for Failure
Every component in your pipeline will fail at some point. Build with that assumption:
- Implement retry mechanisms
- Use dead letter queues
- Monitor everything

### 2. Embrace Idempotency
Your pipeline should produce the same result whether it runs once or multiple times.

### 3. Scale Horizontally
Design your pipeline to scale by adding more workers, not bigger machines.

## Essential Tools

- **Apache Airflow**: Orchestration and scheduling
- **Pandas/Polars**: Data transformation
- **Apache Kafka**: Stream processing
- **Redis**: Caching and temporary storage
- **PostgreSQL/MongoDB**: Persistent storage

## Monitoring and Alerting

The best pipeline is one you don't have to think about. Implement comprehensive monitoring:
- Data quality checks
- Performance metrics
- Error rates and types
- Resource utilization

Remember: A pipeline that runs in production is worth ten that work perfectly in development!`,
      date: "2024-12-10",
      readTime: "12 min read",
      views: "157",
      category: "Data Engineering",
      image: "Data-Pipelines.jpg",
      tags: ["Python", "Data Engineering", "ETL", "Pipeline"]
    },
    {
      id: 3,
      slug: "data-viz-rescuing-insights-chart-jail",
      title: "Data Viz: Rescuing Insights from Chart Jail; Best Practices for ML Projects",
      excerpt: "How to turn a rainbow pie chart disaster into boardroom-winning visuals that communicate ML insights effectively.",
      content: `# Data Viz: Rescuing Insights from Chart Jail

I've seen enough rainbow pie charts to last several lifetimes. It's time to talk about data visualization that actually communicates insights instead of causing migraines.

## The Crimes Against Data Viz

### Common Offenders:
1. **3D Pie Charts**: Making data harder to read since 1995
2. **Rainbow Color Schemes**: When your chart looks like a unicorn exploded
3. **Dual Y-Axes**: The fastest way to mislead your audience
4. **Cluttered Dashboards**: More widgets ≠ more insights

## Principles of Effective ML Visualization

### 1. Start with the Question
Before you touch any visualization tool, define your question first:
- "Which features contribute most to model predictions?"
- "How does model performance vary across different segments?"
- "Are there any data quality issues we need to address?"
- "What patterns does the model miss?"

Then choose visualizations that answer these questions.

### 2. Feature Importance: Beyond Bar Charts

Use proper visualization techniques for model interpretability:
- Permutation importance plots
- SHAP waterfall charts  
- Feature correlation heatmaps
- Distribution comparisons

## The Golden Rule

Remember: Your visualization should answer a question, not raise new ones. If someone looks at your chart and says "So what?", you've failed.

Make your data tell a story that drives action. Because at the end of the day, the best visualization is the one that changes minds and influences decisions.

And please, for the love of all that is good in this world, stop using 3D pie charts!`,
      date: "2024-11-15",
      readTime: "7 min read",
      views: "87",
      category: "Data Visualization",
      image: "Data-Viz.png",
      tags: ["Data Viz", "ML", "Communication", "Analytics"]
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  const sharePost = (post) => {
    const url = `${window.location.origin}#blog`;
    navigator.clipboard.writeText(url);
    alert('Blog post URL copied to clipboard!');
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Machine Learning': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg',
      'Data Engineering': 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg',
      'Deep Learning': 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg',
      'ML Engineering': 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg',
      'NLP': 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg',
      'Data Visualization': 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg';
  };

  // Blog Post Detail View
  if (selectedPost) {
    return (
      <section id="blog" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              onClick={handleClosePost}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Blog
            </Button>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => sharePost(selectedPost)}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
          
          {/* Article content */}
          <article className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
            {/* Hero image */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src={`${process.env.PUBLIC_URL}/${selectedPost.image}`} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className={`${getCategoryColor(selectedPost.category)} mb-4`}>
                  {selectedPost.category}
                </Badge>
                <h1 className="text-4xl font-bold text-white mb-2">{selectedPost.title}</h1>
              </div>
            </div>
            
            {/* Article metadata */}
            <div className="p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-6 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPost.views} views</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Article body */}
            <div className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {selectedPost.content}
                </div>
              </div>
            </div>
          </article>
          
          {/* Related posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(post => post.id !== selectedPost.id && post.category === selectedPost.category)
                .slice(0, 2)
                .map((post) => (
                  <Card 
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={`${process.env.PUBLIC_URL}/${post.image}`} 
                        alt={post.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={`${getCategoryColor(post.category)} text-xs`}>
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Blog List View
  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 text-blue-700 bg-blue-50">
              Latest Insights
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            From the 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"> Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge, insights, and best practices in machine learning and data science
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl hover:shadow-blue-100/20 transition-all duration-500 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 hover:-translate-y-2"
              onMouseEnter={() => setHoveredPost(index)}
              onMouseLeave={() => setHoveredPost(null)}
              onClick={() => handlePostClick(post)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`${process.env.PUBLIC_URL}/${post.image}`} 
                  alt={post.title}
                  className="w-full h-52 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(post.category)} border-0 px-3 py-1.5 text-xs font-semibold`}>
                    {post.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center gap-1 text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <ArrowRight 
                    className={`w-5 h-5 transition-all duration-300 text-blue-600 ${
                      hoveredPost === index ? 'translate-x-1 scale-110' : ''
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search criteria.</p>
          </div>
        )}

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => alert('Full blog functionality will be implemented with backend integration')}
            className="px-12 py-4 text-lg font-semibold border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight, Eye, BookOpen, Search, Filter, Share2, Bookmark, ExternalLink, User } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { marked } from 'marked';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast ? useToast() : { toast: () => {} };
  const [bookmarked, setBookmarked] = useState({});

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedPost) {
        setSelectedPost(null);
      }
    };
    if (selectedPost) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const blogPosts = [
    {
      id: 1,
      slug: 'teaching-machines-to-run-businesses',
      title: 'Teaching Machines to Run Businesses: Beyond Automation',
      excerpt: "How ML transforms operations from inventory to customer experience. Real-world case study showing 40% reduction in stockouts.",
      content: `
# Teaching Machines to Run Businesses: Beyond Automation

When we talk about machine learning in business, we're not discussing replacement - we're talking about **amplification**. In my recent retail optimization project, ML didn't eliminate jobs; it eliminated bottlenecks, freeing human talent for strategic innovation.

![Retail automation system](${process.env.PUBLIC_URL + '/ai-agent.jpeg'})
*Visualization of our inventory prediction system*

## Why Machine Learning Changes Everything

1. **Predictive Power**: Traditional systems react, ML systems anticipate
2. **Adaptive Learning**: Models improve with each interaction
3. **Pattern Recognition**: Spots correlations humans miss (weather → sales, social trends → demand)

### Real Impact in Retail:
- 40% reduction in stockouts
- 15% decrease in excess inventory
- Team shifted from 70% firefighting to 80% strategy

## Core Implementation Principles

### Start Small, Scale Smart
Begin with one high-friction process:
1. Identify repetitive decision points
2. Map data inputs (sales history, seasonality, promotions)
3. Define success metrics (stockout rate, $ saved)

<div class='code-terminal-frame mb-6'>
  <div class='code-terminal-header'>
    <span class='dot red'></span>
    <span class='dot yellow'></span>
    <span class='dot green'></span>
    <span class='code-terminal-title'>PYTHON</span>
  </div>
  <pre class='code-terminal-block'><code class='language-python'># Inventory prediction core logic
def predict_restock(item_history, seasonality_factor=1.2):
    avg_daily_sales = np.mean(item_history[-30:])
    lead_time = 7  # Days for restocking
    safety_stock = avg_daily_sales * lead_time * seasonality_factor
    return round(safety_stock)
</code></pre>
</div>

### The Human-Machine Partnership
- **Feedback loops**: Cashiers flag prediction discrepancies via mobile app
- **Continuous tuning**: Weekly model retraining with new data
- **Explainable AI**: Managers see "why" behind predictions

## Key Business Applications

| Application          | Impact                          | Implementation Time |
|----------------------|---------------------------------|---------------------|
| Demand Forecasting   | 25% waste reduction             | 6-8 weeks           |
| Dynamic Pricing      | 12% revenue increase            | 4-6 weeks           |
| Customer Churn Prediction | 30% retention improvement   | 3-5 weeks           |

## Lessons Learned
- **Data quality > Algorithm complexity**: Clean data beats fancy models
- **Ethical guardrails**: Monitor for bias in automated decisions
- **Change management**: Train teams on interpreting ML outputs

> "The goal isn't autonomous business - it's augmented intelligence. Machines handle patterns, humans handle exceptions." - Project Retrospective

--- 

*Ready to amplify your team? [Explore my ML projects on GitHub](https://github.com/yourprofile)*
`,
      date: '2024-12-15',
      readTime: '9 min read',
      views: '327',
      category: 'Machine Learning',
      image: process.env.PUBLIC_URL + '/ai-agent.jpeg',
      tags: ['ML', 'Automation', 'Retail Tech', 'AI Ethics']
    },
    {
      id: 2,
      slug: 'building-scalable-data-pipelines-python',
      title: 'Building Scalable Data Pipelines: From CSV Chaos to Cloud Efficiency',
      excerpt: "Architecting a pipeline that processes 2M+ records daily. Case study on cost reduction and data reliability.",
      content: `
# Building Scalable Data Pipelines: From CSV Chaos to Cloud Efficiency

When a fintech startup's manual processes began crumbling under 2M+ daily transactions, we engineered a cloud-native pipeline that transformed their operations - and their business model.

![Data pipeline architecture](${process.env.PUBLIC_URL + '/Data-Pipelines.jpg'})
*Pipeline architecture diagram*

## The Modern Data Stack

### Core Components:
- **Ingestion**: Apache Kafka (real-time streaming)
- **Storage**: AWS S3 (data lake)
- **Processing**: PySpark (distributed computing)
- **Orchestration**: Airflow (workflow management)
- **Monitoring**: Datadog (performance tracking)

### Key Design Principles:
1. Idempotent operations
2. Schema enforcement
3. Graceful failure handling
4. Cost-aware resource allocation

<div class='code-terminal-frame mb-6'>
  <div class='code-terminal-header'>
    <span class='dot red'></span>
    <span class='dot yellow'></span>
    <span class='dot green'></span>
    <span class='code-terminal-title'>PYTHON</span>
  </div>
  <pre class='code-terminal-block'><code class='language-python'># Incremental data processing
from pyspark.sql import functions as F

def process_daily_transactions(raw_path, processed_path):
    df = spark.read.parquet(raw_path)
    return (df
        .filter(F.col('amount') > 0)
        .groupBy('user_id')
        .agg(F.sum('amount').alias('daily_total'))
        .write.mode('append').parquet(processed_path))
</code></pre>
</div>

## Implementation Roadmap

1. **Assessment** (2 weeks): 
   - Data audit and infrastructure review
   - Failure point analysis

2. **MVP Development** (6 weeks):
   - Batch processing foundation
   - Core transformation logic
   - Alerting system

3. **Optimization Phase** (Ongoing):
   - Streaming integration
   - Auto-scaling clusters
   - Cost monitoring dashboards

## Results Achieved
| Metric          | Before   | After     |
|-----------------|----------|-----------|
| Processing Time | 14 hours | 23 minutes |
| Error Rate      | 8.2%     | 0.3%      |
| Infrastructure Cost | $18k/mo | $6.2k/mo |

## Critical Lessons
- **Schema evolution**: Implement versioned data contracts
- **Testing at scale**: Use synthetic data for pipeline tests
- **Observability**: Track data lineage end-to-end

> "Data pipelines aren't just technical infrastructure - they're decision-making circulatory systems." - CTO, Client FinTech

---

*Pipeline design patterns [available in my portfolio](https://yourportfolio.com/data-engineering)*
`,
      date: '2024-12-10',
      readTime: '11 min read',
      views: '284',
      category: 'Data Engineering',
      image: process.env.PUBLIC_URL + '/Data-Pipelines.jpg',
      tags: ['PySpark', 'AWS', 'ETL', 'Data Architecture']
    },
    {
      id: 3,
      slug: 'data-viz-rescuing-insights-from-chart-jail',
      title: 'Data Visualization: Rescuing Insights from Chart Jail',
      excerpt: "How visual storytelling secured $2M in funding. Principles for transforming complex data into compelling narratives.",
      content: `
# Data Visualization: Rescuing Insights from Chart Jail

When a healthtech startup's complex visualizations confused investors, we redesigned their data storytelling approach - leading to a $2M seed round.

![Before/Aftter dashboard comparison](${process.env.PUBLIC_URL + '/nlp.png'})
*Visual transformation of patient analytics dashboard*

## The Visualization Hierarchy

### Foundational Principles
1. **Know your audience**: Executives vs. Analysts
2. **One insight per visual**
3. **Visual honesty**: Maintain data integrity
4. **Progressive disclosure**: Layers of detail

### Deadly Sins to Avoid:
- 3D effects
- Double y-axes
- Unlabeled aggregates
- Rainbow color schemes

<div class='code-terminal-frame mb-6'>
  <div class='code-terminal-header'>
    <span class='dot red'></span>
    <span class='dot yellow'></span>
    <span class='dot green'></span>
    <span class='code-terminal-title'>PYTHON</span>
  </div>
  <pre class='code-terminal-block'><code class='language-python'># Effective visualization with Matplotlib
import matplotlib.pyplot as plt
import seaborn as sns

def plot_metric_trend(data):
    plt.figure(figsize=(10,6))
    sns.lineplot(x='week', y='conversion', 
                 hue='cohort', data=data,
                 palette='viridis', linewidth=2.5)
    plt.title('Conversion Rate by Cohort', fontsize=16)
    plt.xlabel('Weeks Onboarded', fontsize=12)
    plt.ylabel('Conversion %', fontsize=12)
    plt.legend(title='User Cohort', loc='lower right')
    plt.tight_layout()
    return plt.gcf()
</code></pre>
</div>

## Dashboard Design Framework

### Layer 1: Strategic Overview
- Key metrics with trend indicators
- Goal progress visualization
- High-level comparisons

### Layer 2: Diagnostic Analysis
- Drill-down capabilities
- Cohort comparisons
- Anomaly detection

### Layer 3: Operational Detail
- Raw data access
- Filtering controls
- Export functionality

## Impact Metrics
- 40% reduction in meeting time for decision-making
- 90% of investors could articulate core value proposition
- Data exploration increased 5x among non-technical teams

## Golden Rules
1. **Mobile-first design**: 67% of execs view dashboards on phones
2. **Accessibility matters**: 8% of men have color blindness
3. **Context is king**: Always show benchmarks

> "If you need to explain your chart, you've already failed at visualization." - Startup CEO

---

*[Explore my dashboard designs](https://yourportfolio.com/data-viz) for healthcare and fintech*
`,
      date: '2024-11-15',
      readTime: '8 min read',
      views: '211',
      category: 'Data Visualization',
      image: process.env.PUBLIC_URL + '/nlp.png',
      tags: ['Dashboard Design', 'Storytelling', 'Matplotlib', 'UX']
    },
    {
      id: 4,
      slug: 'devops-culture-for-high-performing-teams',
      title: 'DevOps Culture: The Human Infrastructure Behind High-Performing Teams',
      excerpt: "How psychological safety and shared ownership reduced outages by 70%. Beyond tools to team transformation.",
      content: `
# DevOps Culture: The Human Infrastructure Behind High-Performance

When a SaaS company's monthly deployments stalled at two while outages spiked, we discovered their DevOps "transformation" had missed the most critical element - the human factor.

![Team collaboration metrics](${process.env.PUBLIC_URL + '/Deep-Learning.avif'})
*Team velocity and stability metrics over 6 months*

## The Cultural Pillars of DevOps

### Foundation Elements:
- **Psychological Safety**: "It's safe to fail here"
- **Shared Ownership**: "Our code, not my code"
- **Blameless Post-Mortems**: Focus on system failure, not human failure
- **Continuous Learning**: 20% time for tool exploration

### Measuring Cultural Health:
- Deployment frequency
- Lead time for changes
- Change failure rate
- Mean time to recovery

<div class='code-terminal-frame mb-6'>
  <div class='code-terminal-header'>
    <span class='dot red'></span>
    <span class='dot yellow'></span>
    <span class='dot green'></span>
    <span class='code-terminal-title'>YAML</span>
  </div>
  <pre class='code-terminal-block'><code class='language-yaml'># GitLab CI pipeline example
stages:
  - test
  - security-scan
  - deploy

production-deploy:
  stage: deploy
  only:
    - main
  script:
    - echo "Deploying to production"
    - ./deploy-prod.sh
  environment: production
  rules:
    - if: $CI_COMMIT_TAG
      when: never
    - if: $CI_COMMIT_BRANCH == "main"
</code></pre>
</div>

## Transformation Timeline

### Phase 1: Trust Building (Weeks 1-4)
- Cross-functional incident response teams
- "Fix Forward" Fridays (tech debt reduction)
- Weekly show-and-tell sessions

### Phase 2: Tool Enablement (Weeks 5-8)
- Infrastructure as Code training
- CI/CD pipeline workshops
- Monitoring co-design sessions

### Phase 3: Sustainable Practices (Ongoing)
- Error budget agreements
- Automated canary deployments
- ChatOps incident management

## Results Achieved
| Metric                | Pre-DevOps | 6 Months Later |
|-----------------------|------------|----------------|
| Deployment Frequency  | 2/month    | 42/week        |
| Mean Lead Time        | 14 days    | 2.3 hours      |
| Change Failure Rate   | 38%        | 4.7%           |
| Team Satisfaction     | 5.2/10     | 8.9/10         |

## Leadership Principles
1. **Model vulnerability**: Leaders share their failures first
2. **Celebrate learning**: Reward thoughtful risks that fail
3. **Automate thoughtfully**: Only automate what you understand

> "Our tools finally matched our culture instead of masking its absence." - Engineering Director

---

*DevOps assessment toolkit [available for download](https://yourportfolio.com/devops)*
`,
      date: '2024-11-05',
      readTime: '10 min read',
      views: '398',
      category: 'DevOps',
      image: process.env.PUBLIC_URL + '/Deep-Learning.avif',
      tags: ['CI/CD', 'Team Culture', 'SRE', 'Infrastructure']
    }
  ];

  const categories = ['All', 'Machine Learning', 'Data Engineering', 'Data Visualization', 'DevOps'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle bookmarking a post
  const handleBookmark = (post) => {
    setBookmarked((prev) => {
      const updated = { ...prev, [post.id]: !prev[post.id] };
      if (toast) {
        toast({
          title: updated[post.id] ? "Bookmarked!" : "Bookmark removed",
          description: updated[post.id]
            ? "This article was saved to your bookmarks."
            : "This article was removed from your bookmarks.",
          status: updated[post.id] ? "success" : "info",
        });
      }
      return updated;
    });
  };

  // Handle sharing a post
  const handleShare = (post) => {
    const shareUrl = window.location.origin + '/#blog/' + post.slug;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: shareUrl,
      })
        .then(() => {
          toast({
            title: 'Shared!',
            description: 'Article shared successfully.',
            status: 'success',
          });
        })
        .catch(() => {
          toast({
            title: 'Share cancelled',
            description: 'Sharing was cancelled.',
            status: 'info',
          });
        });
    } else {
      // Fallback: copy link to clipboard
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast({
          title: 'Link Copied!',
          description: 'Share link copied to clipboard.',
          status: 'success',
        });
      });
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Latest Insights
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Blog & Articles
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of technology, data science, and innovation. 
            Insights from real-world projects and emerging trends in tech.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 dark:text-white placeholder-slate-500"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-2 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Image Container */}
              <div 
                className={`relative overflow-hidden cursor-pointer ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}
                onClick={() => setSelectedPost(post)}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Floating Action Buttons */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredPost === post.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
                }`}>
                  <button className={`p-2 ${bookmarked[post.id] ? 'bg-blue-600 text-white' : 'bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300'} backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-slate-700 transition-colors`} onClick={(e) => { e.stopPropagation(); handleBookmark(post); }}>
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-slate-700 transition-colors" onClick={(e) => { e.stopPropagation(); handleShare(post); }}>
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-blue-600/90 text-white backdrop-blur-sm border-0 hover:bg-blue-700">
                    {post.category}
                  </Badge>
                </div>
              </div>
              {/* Content */}
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views} views
                  </div>
                </div>
                {/* Title */}
                <h3 
                  className={`font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 cursor-pointer ${index === 0 ? 'text-2xl lg:text-3xl leading-tight' : 'text-xl'}`}
                  onClick={() => setSelectedPost(post)}
                >
                  {post.title}
                </h3>
                {/* Excerpt */}
                <p className={`text-slate-600 dark:text-slate-300 mb-6 leading-relaxed ${index === 0 ? 'text-lg line-clamp-4' : 'text-base line-clamp-3'}`}>
                  {post.excerpt}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, index === 0 ? 4 : 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > (index === 0 ? 4 : 3) && (
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full text-xs">
                      +{post.tags.length - (index === 0 ? 4 : 3)} more
                    </span>
                  )}
                </div>
                {/* Read More Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn w-full justify-between p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        {/* No articles found */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
      {/* Article Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={e => {
            if (e.target === e.currentTarget) {
              setSelectedPost(null);
            }
          }}
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom-4 duration-300 w-full">
            {/* Modal Header with Hero Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Close Button */}
              <button
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedPost(null);
                }}
                className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200 text-white hover:scale-110 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Header Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-600/90 text-white backdrop-blur-sm border-0 px-3 py-1">
                    {selectedPost.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {selectedPost.views} views
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  {selectedPost.title}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              </div>
            </div>
            {/* Modal Content */}
            <div className="max-h-[calc(90vh-16rem)] overflow-y-auto">
              <div className="p-8 lg:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedPost.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {/* Article Content */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                  <div
                    className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 blog-content"
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(selectedPost.content, {
                        gfm: true,
                        breaks: true,
                        mangle: false,
                        headerIds: false,
                      })
                        .replace(/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g, (match, lang, code) => {
                          return `
                            <div class='code-terminal-frame mb-6'>
                              <div class='code-terminal-header'>
                                <span class='dot red'></span>
                                <span class='dot yellow'></span>
                                <span class='dot green'></span>
                                <span class='code-terminal-title'>${lang.toUpperCase()}</span>
                              </div>
                              <pre class='code-terminal-block'><code class='language-${lang}'>${code}</code></pre>
                            </div>
                          `;
                        })
                        .replace(/<code>(.*?)<\/code>/g, '<code class="inline-code">$1</code>')
                        .replace(/<img ([^>]+?)src="([^"]+)"([^>]*)>/g, '<img class="my-6 rounded-xl shadow-lg max-w-full h-auto mx-auto block" src="$2" $1 $3>')
                        .replace(/<p>!\[([^\]]*)\]\(([^\)]+)\)<\/p>/g, '<img class="my-6 rounded-xl shadow-lg max-w-full h-auto mx-auto block" alt="$1" src="$2" />')
                    }}
                  />
                </div>
                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        Enjoyed this article?
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Share it with your network and subscribe for more insights!
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button className={`p-3 ${bookmarked[selectedPost.id] ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'} rounded-xl transition-colors shadow-lg hover:shadow-xl`} onClick={() => handleBookmark(selectedPost)}>
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-lg hover:shadow-xl" onClick={() => handleShare(selectedPost)}>
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
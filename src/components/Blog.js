import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight, Eye, BookOpen, Search, Filter, Share2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
      image: "/ai-agent.jpeg",
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
      image: "/Data-Pipelines.jpg",
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
      image: "/Data-Viz.png",
      tags: ["Data Viz", "ML", "Communication", "Analytics"]
    },
    {
      id: 4,
      slug: "deep-learning-production-lessons",
      title: "Deep Learning in Production: Lessons from the Trenches",
      excerpt: "Real-world insights from deploying deep learning models at scale. From model serving to monitoring, here's what actually works in production environments.",
      content: `# Deep Learning in Production: Lessons from the Trenches

After deploying dozens of deep learning models into production, I've learned that the gap between a working prototype and a production-ready system is vast. Here are the hard-earned lessons that can save you months of headaches.

## The Production Reality Check

Your model works perfectly in Jupyter notebooks, achieves great accuracy on test sets, and everyone's excited. Then production happens. Suddenly you're dealing with:

- **Model drift**: Performance degrades over time
- **Latency requirements**: Your 30-second inference isn't acceptable
- **Memory constraints**: That 8GB model won't fit on your edge device
- **Data quality issues**: Real-world data is messier than your clean datasets

## Critical Production Considerations

### 1. Model Serving Architecture

Choose your serving strategy based on your requirements:

- **Batch processing**: For non-real-time predictions
- **Real-time APIs**: For immediate responses
- **Edge deployment**: For low-latency, offline scenarios

### 2. Monitoring is Everything

You can't manage what you don't measure:
- Track prediction confidence scores
- Monitor input data distributions
- Set up alerts for performance degradation
- Log prediction requests for later analysis

### 3. Model Versioning and Rollback

Always have a rollback plan:
- Version your models and training data
- A/B test new model versions
- Keep champion/challenger model setups
- Automate rollback triggers

## Performance Optimization Techniques

### Model Optimization
- **Quantization**: Reduce model size by 4x with minimal accuracy loss
- **Pruning**: Remove unnecessary connections
- **Knowledge distillation**: Train smaller student models
- **ONNX conversion**: Standardize model formats for deployment

### Infrastructure Optimization
- **GPU batching**: Process multiple requests together
- **Model caching**: Cache frequent predictions
- **Asynchronous processing**: Don't block on model inference
- **Load balancing**: Distribute requests across model instances

## The Human Factor

Remember that ML systems are socio-technical systems:
- Train your team on model limitations
- Set up feedback loops with end users
- Document model assumptions and edge cases
- Plan for model maintenance and updates

## Key Takeaways

1. **Start simple**: Deploy a basic model first, then iterate
2. **Measure everything**: You can't improve what you don't track
3. **Plan for failure**: Models will fail, be ready
4. **Optimize for maintenance**: Your future self will thank you

The difference between a successful ML project and a failed one often comes down to operational excellence, not just model accuracy.`,
      date: "2024-12-05",
      readTime: "10 min read",
      views: "234",
      category: "Machine Learning",
      image: "/Deep-Learning.avif",
      tags: ["Deep Learning", "MLOps", "Production", "Deployment"]
    },
    {
      id: 5,
      slug: "nlp-real-world-text-processing",
      title: "NLP in the Wild: Real-World Text Processing Challenges",
      excerpt: "From sentiment analysis to named entity recognition, explore the practical challenges and solutions in processing messy, real-world text data.",
      content: `# NLP in the Wild: Real-World Text Processing Challenges

Natural Language Processing sounds straightforward in academic papers, but real-world text data is a different beast entirely. Here's what I've learned from processing millions of documents in production systems.

## The Messy Reality of Text Data

Real-world text data comes with surprises:

### Character Encoding Nightmares
- Mixed encodings in the same dataset
- Special characters that break your pipeline
- Invisible Unicode characters
- Legacy system artifacts

### Language Detection Challenges
- Code-switching within documents
- Informal language and slang
- Domain-specific terminology
- Multilingual content

### Data Quality Issues
- OCR errors from scanned documents
- HTML entities and markup remnants
- Duplicate content detection
- Incomplete or truncated text

## Preprocessing Pipeline Strategies

### 1. Robust Text Cleaning
\`\`\`python
def clean_text(text):
    # Handle encoding issues
    text = text.encode('utf-8', errors='ignore').decode('utf-8')
    
    # Remove HTML entities
    text = html.unescape(text)
    
    # Normalize whitespace
    text = re.sub(r'\\s+', ' ', text)
    
    return text.strip()
\`\`\`

### 2. Language Detection and Handling
- Use multiple detection libraries for consensus
- Set confidence thresholds
- Handle mixed-language content appropriately
- Fall back to language-agnostic methods

### 3. Text Normalization
- Standardize date formats
- Normalize numerical expressions
- Handle abbreviations and acronyms
- Expand contractions consistently

## Advanced Processing Techniques

### Named Entity Recognition (NER)
Real-world NER requires:
- Domain-specific entity types
- Handling of nested entities
- Confidence scoring
- Custom training data

### Sentiment Analysis Challenges
- Sarcasm and irony detection
- Context-dependent sentiment
- Domain-specific sentiment patterns
- Handling neutral or mixed sentiment

### Information Extraction
- Template-based extraction
- Machine learning approaches
- Hybrid systems combining both
- Validation and quality control

## Performance and Scalability

### Processing Large Volumes
- Streaming text processing
- Distributed computing with Spark
- Memory-efficient algorithms
- Caching frequent operations

### Model Selection Trade-offs
- Accuracy vs. speed considerations
- Memory usage constraints
- Update frequency requirements
- Interpretability needs

## Quality Assurance in NLP

### Validation Strategies
- Human-in-the-loop validation
- Inter-annotator agreement
- Active learning for sample selection
- Continuous monitoring of outputs

### Error Analysis
- Systematic categorization of errors
- Root cause analysis
- Performance by data segments
- Feedback loop implementation

## Practical Tips for Success

1. **Start with data exploration**: Understand your text before processing
2. **Build robust pipelines**: Handle edge cases gracefully
3. **Validate early and often**: Catch issues before they compound
4. **Monitor in production**: Text data patterns change over time
5. **Document everything**: Future you will thank current you

## Common Pitfalls to Avoid

- Assuming clean, well-formatted input
- Over-engineering preprocessing pipelines
- Ignoring domain-specific nuances
- Not planning for data drift
- Underestimating annotation costs

Remember: Perfect is the enemy of good in production NLP. Build systems that handle 95% of cases well rather than trying to solve every edge case.`,
      date: "2024-11-28",
      readTime: "12 min read",
      views: "189",
      category: "Machine Learning",
      image: "/nlp.png",
      tags: ["NLP", "Text Processing", "Machine Learning", "Data Engineering"]
    },
    {
      id: 6,
      slug: "real-time-data-pipelines-kafka",
      title: "Building Real-Time Data Pipelines with Apache Kafka",
      excerpt: "A comprehensive guide to designing and implementing real-time data pipelines using Apache Kafka for high-throughput, low-latency data processing.",
      content: `# Building Real-Time Data Pipelines with Apache Kafka

Real-time data processing has become essential for modern applications. Whether you're building recommendation engines, fraud detection systems, or real-time analytics dashboards, Apache Kafka provides the foundation for reliable, scalable streaming data pipelines.

## Why Kafka for Real-Time Pipelines?

### Key Advantages
- **High throughput**: Handle millions of messages per second
- **Low latency**: Sub-millisecond message delivery
- **Fault tolerance**: Built-in replication and recovery
- **Scalability**: Horizontal scaling without downtime
- **Durability**: Persistent message storage

### Common Use Cases
- Event streaming and processing
- Log aggregation and analysis
- Real-time ETL and data integration
- Microservices communication
- Change data capture (CDC)

## Pipeline Architecture Patterns

### 1. Lambda Architecture
- **Batch layer**: Historical data processing
- **Speed layer**: Real-time stream processing
- **Serving layer**: Query interface for both layers

### 2. Kappa Architecture
- **Stream-only processing**: Single pipeline for all data
- **Event sourcing**: Store events as immutable facts
- **Materialized views**: Derive state from event streams

### 3. Event-Driven Architecture
- **Event producers**: Generate business events
- **Event streams**: Kafka topics for event distribution
- **Event consumers**: React to events and update state

## Implementation Best Practices

### Producer Configuration
\`\`\`python
from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers=['kafka1:9092', 'kafka2:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8'),
    # Reliability settings
    acks='all',
    retries=3,
    # Performance settings
    batch_size=16384,
    linger_ms=10,
    compression_type='gzip'
)
\`\`\`

### Consumer Configuration
\`\`\`python
from kafka import KafkaConsumer

consumer = KafkaConsumer(
    'user-events',
    bootstrap_servers=['kafka1:9092', 'kafka2:9092'],
    group_id='analytics-group',
    # Offset management
    auto_offset_reset='earliest',
    enable_auto_commit=False,
    # Performance tuning
    fetch_min_bytes=1024,
    max_poll_records=500
)
\`\`\`

### Topic Design Strategies

#### Partitioning Strategy
- **By key**: Maintain order within partitions
- **Round-robin**: Distribute load evenly
- **Custom partitioner**: Business logic-based routing

#### Retention Policies
- **Time-based**: Delete after X days
- **Size-based**: Delete when topic exceeds size limit
- **Compaction**: Keep only latest value per key

## Stream Processing Frameworks

### Apache Kafka Streams
- **Lightweight**: Runs within your application
- **Exactly-once semantics**: Guaranteed message processing
- **State stores**: Local state management
- **Interactive queries**: Query application state

### Apache Flink
- **Low latency**: Sub-second processing
- **Checkpointing**: Fault-tolerant state management
- **Complex event processing**: Pattern detection
- **SQL support**: Stream processing with SQL

### Spark Structured Streaming
- **Micro-batch processing**: Near real-time processing
- **Integration**: Works with existing Spark ecosystem
- **Multiple sinks**: Output to various destinations
- **Watermarking**: Handle late-arriving data

## Monitoring and Operations

### Key Metrics to Track
- **Throughput**: Messages per second
- **Latency**: End-to-end message processing time
- **Consumer lag**: How far behind consumers are
- **Error rates**: Failed message processing
- **Resource utilization**: CPU, memory, disk usage

### Operational Considerations
- **Cluster sizing**: Plan for peak load with headroom
- **Replication factor**: Balance availability and storage costs
- **Security**: Authentication, authorization, encryption
- **Backup and recovery**: Cross-datacenter replication

## Common Pitfalls and Solutions

### 1. Consumer Lag
**Problem**: Consumers can't keep up with producers
**Solutions**:
- Increase consumer instances
- Optimize processing logic
- Use parallel processing within consumers
- Consider message batching

### 2. Poison Messages
**Problem**: Malformed messages break consumers
**Solutions**:
- Implement dead letter queues
- Add message validation
- Use error handling strategies
- Monitor message formats

### 3. Exactly-Once Processing
**Problem**: Duplicate or lost messages
**Solutions**:
- Use idempotent consumers
- Implement transactional processing
- Design for at-least-once with deduplication
- Leverage Kafka transactions

## Performance Optimization

### Producer Optimization
- Batch messages for better throughput
- Use appropriate compression
- Tune network buffer sizes
- Implement async processing

### Consumer Optimization
- Process messages in parallel
- Commit offsets in batches
- Use appropriate fetch sizes
- Implement back-pressure handling

### Infrastructure Tuning
- SSD storage for better I/O performance
- Adequate network bandwidth
- Proper JVM heap sizing
- OS-level optimizations

## Getting Started Checklist

1. **Design your topics**: Plan partitioning and retention
2. **Set up monitoring**: Track key metrics from day one
3. **Start simple**: Begin with basic producers and consumers
4. **Test failure scenarios**: Verify fault tolerance
5. **Optimize incrementally**: Measure before optimizing
6. **Document everything**: Schema, configurations, and procedures

Real-time data pipelines with Kafka can transform your organization's ability to respond to events as they happen. Start with a solid foundation, monitor everything, and scale incrementally based on actual needs.`,
      date: "2024-11-20",
      readTime: "15 min read",
      views: "312",
      category: "Data Engineering",
      image: "/Data-Pipelines.jpg",
      tags: ["Kafka", "Real-time", "Data Engineering", "Streaming", "ETL"]
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

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  // Display logic for main blog view
  const displayPosts = showAllPosts ? paginatedPosts : filteredPosts.slice(0, 3);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  const handleViewAllPosts = () => {
    setShowAllPosts(true);
    setCurrentPage(1);
  };

  const handleBackToBlogOverview = () => {
    setShowAllPosts(false);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const sharePost = (post) => {
    const url = `${window.location.origin}#blog/${post.slug}`;
    navigator.clipboard.writeText(url);
    alert(`Blog post "${post.title}" URL copied to clipboard!`);
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
                src={selectedPost.image} 
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
                        src={post.image} 
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
              {showAllPosts ? 'All Articles' : 'Latest Insights'}
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {showAllPosts ? 'All' : 'From the'}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"> 
              {showAllPosts ? ' Articles' : ' Blog'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {showAllPosts 
              ? `Browse all ${filteredPosts.length} articles on machine learning, data science, and engineering`
              : 'Sharing knowledge, insights, and best practices in machine learning and data science'
            }
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
          {displayPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl hover:shadow-blue-100/20 transition-all duration-500 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 hover:-translate-y-2"
              onMouseEnter={() => setHoveredPost(index)}
              onMouseLeave={() => setHoveredPost(null)}
              onClick={() => handlePostClick(post)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
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

        {/* Pagination and View All Posts Controls */}
        {showAllPosts ? (
          <div className="space-y-8">
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className="w-10 h-10"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
            
            {/* Back to Blog Overview */}
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleBackToBlogOverview}
                className="px-12 py-4 text-lg font-semibold border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Back to Blog Overview
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleViewAllPosts}
              className="px-12 py-4 text-lg font-semibold border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All {filteredPosts.length} Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
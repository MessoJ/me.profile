import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import X from './icons/X';
import Envelope1 from './icons/Envelope1';
import { Mail, Phone, MapPin, MessageCircle, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://contactbackend-topaz.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(true);
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mesofrancis@outlook.com",
      action: "mailto:mesofrancis@outlook.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (210) 926-1190",
      action: "tel:+12109261190",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dallas, TX",
      action: null,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/MessoJ",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800",
      bgColor: "bg-gray-50 dark:bg-gray-900",
      name: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/mesofrancis",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900",
      bgColor: "bg-blue-50 dark:bg-blue-900",
      name: "LinkedIn"
    },
    {
      icon: <X className="w-6 h-6" />,
      url: "https://twitter.com/mesofrancis",
      color: "hover:bg-slate-100 dark:hover:bg-slate-800",
      bgColor: "bg-slate-50 dark:bg-slate-900",
      name: "Twitter"
    }
  ];

  const availableServices = [
    "Full-time opportunities",
    "Freelance projects",
    "Consulting engagements",
    "Speaking engagements",
    "Collaboration opportunities",
    "Technical mentoring"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 text-blue-700 bg-blue-50">
              Let's Connect
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get In 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 hover:shadow-3xl transition-shadow duration-500">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <h3 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-400">Message Sent!</h3>
                  <p className="text-lg text-muted-foreground mb-4 text-center">Thank you for reaching out. I'll get back to you soon!</p>
                  <Button className="mt-2" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project discussion, collaboration, etc."
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={6}
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 hover:shadow-2xl transition-shadow duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-slate-700 dark:to-slate-600/50 hover:shadow-md transition-all duration-300">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl text-white shadow-lg`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
                          >
                            {info.value}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 hover:shadow-2xl transition-shadow duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Follow Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 ${social.bgColor} rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} flex flex-col items-center gap-2 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600`}
                      title={social.name}
                    >
                      <div className="text-current">
                        {React.cloneElement(social.icon, { fill: 'currentColor' })}
                      </div>
                      <span className="text-xs font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Let's connect on social media and stay updated on the latest in ML and data science.
                </p>
              </CardContent>
            </Card>

            {/* Available Services */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Available for:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

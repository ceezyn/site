import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Zap, Brain, Rocket, Star, Check, ArrowRight, Sparkles, Mail, Phone, MessageCircle } from 'lucide-react'
import heroIllustration from './assets/hero-illustration.png'
import SpaceAnimations from './components/SpaceAnimations.jsx'
import SignUpModal from './components/SignUpModal.jsx'
import VideoDemo from './components/VideoDemo.jsx'
import './App.css'
import './animations.css'

function App() {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [user, setUser] = useState(null)

  const handleSignUp = (userData) => {
    setUser(userData)
    console.log('User signed up:', userData)
  }

  const handleContactEmail = () => {
    window.location.href = 'mailto:adstronauts.shop@gmail.com?subject=Purchase Inquiry&body=Hi, I am interested in your services. Please contact me.'
  }

  const handleWatchDemo = () => {
    document.getElementById('video-demos').scrollIntoView({ behavior: 'smooth' })
  }

  const handleGenerateIdeas = () => {
    if (!productName.trim()) {
      alert('Please enter a business/product name first!')
      return
    }
    
    // Simulate AI video concept generation
    const videoConcepts = [
      `"${productName}" Product Showcase - Dynamic 60-second video highlighting key features with smooth transitions and professional voiceover`,
      `"${productName}" Customer Success Story - Testimonial-style video featuring real customer experiences and results`,
      `"${productName}" Behind-the-Scenes - Authentic look at your company culture and values that builds trust with potential clients`,
      `"${productName}" Problem-Solution Video - Compelling narrative that identifies customer pain points and positions your solution as the answer`,
      `"${productName}" Explainer Video - Clear, engaging explanation of your service with animated graphics and compelling storytelling`
    ]
    
    const randomConcept = videoConcepts[Math.floor(Math.random() * videoConcepts.length)]
    alert(`AI Generated Video Concept: ${randomConcept}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SpaceAnimations />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <Rocket className="h-8 w-8 text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:rotate-12" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AdStronauts
                </span>
              </div>
              <span className="text-xs text-gray-400 ml-10 -mt-1">by Dylan R.</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#why-us" className="text-gray-300 hover:text-cyan-400 transition-colors">Why Us</a>
              <a href="#results" className="text-gray-300 hover:text-cyan-400 transition-colors">Results</a>
              <a href="#video-demos" className="text-gray-300 hover:text-cyan-400 transition-colors">Demos</a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#ai-tools" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Tools</a>
              <Button 
                onClick={handleContactEmail}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
              <SignUpModal onSignUp={handleSignUp}>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                  Get Started
                </Button>
              </SignUpModal>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    Create
                  </span>
                  <br />
                  <span className="text-white">stunning videos</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    with AI power
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Professional promotional and content videos created in minutes, not weeks. Transform your business with AI-powered video production that delivers results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <SignUpModal onSignUp={handleSignUp}>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpModal>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleWatchDemo}
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Free trial included</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src={heroIllustration} 
                alt="Space rocket launching through starfield" 
                className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AdStronauts Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">AdStronauts?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating high-impact promotional and content videos using cutting-edge AI tools and strategies to help your business stand out and drive engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float">
                  <Zap className="h-8 w-8 text-white animate-rocket-launch" />
                </div>
                <h3 className="text-2xl font-bold text-white">Lightning Fast Video Creation</h3>
                <p className="text-gray-300">
                  Create professional promotional videos in minutes, not weeks. Our AI-powered workflow transforms your ideas into stunning visual content at unprecedented speed.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 group card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                  <Brain className="h-8 w-8 text-white animate-twinkle" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI-Powered Video Tools</h3>
                <p className="text-gray-300">
                  Harness advanced AI technology for scriptwriting, visual effects, voiceovers, and editing. Our intelligent tools understand your brand and create videos that resonate with your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-pink-500/20 backdrop-blur-sm hover:border-pink-500/40 transition-all duration-300 group card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '2s' }}>
                  <Rocket className="h-8 w-8 text-white animate-rocket-launch" style={{ animationDelay: '0.5s' }} />
                </div>
                <h3 className="text-2xl font-bold text-white">Broadcast-Quality Results</h3>
                <p className="text-gray-300">
                  Deliver professional-grade promotional videos ready for any platform. From social media content to corporate presentations, we ensure your videos meet the highest industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Powered Results Section */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">Video Creation</span> Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of professional video content that captures attention, builds trust, and drives business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float glow-on-hover">
                  <span className="text-4xl font-bold text-white">90%</span>
                </div>
                <Sparkles className="absolute top-0 right-1/4 h-6 w-6 text-yellow-400 animate-twinkle" />
              </div>
              <h3 className="text-2xl font-bold text-white">Faster Video Production</h3>
              <p className="text-gray-300">Reduce your video production timeline from weeks to hours with AI-powered creation tools.</p>
            </div>

            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float glow-on-hover" style={{ animationDelay: '1s' }}>
                  <span className="text-4xl font-bold text-white">300%</span>
                </div>
                <Sparkles className="absolute top-0 right-1/4 h-6 w-6 text-yellow-400 animate-twinkle" style={{ animationDelay: '0.5s' }} />
              </div>
              <h3 className="text-2xl font-bold text-white">Higher Video Engagement</h3>
              <p className="text-gray-300">Professional video content that captures attention and drives meaningful audience interaction.</p>
            </div>

            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float glow-on-hover" style={{ animationDelay: '2s' }}>
                  <span className="text-4xl font-bold text-white">75%</span>
                </div>
                <Sparkles className="absolute top-0 right-1/4 h-6 w-6 text-yellow-400 animate-twinkle" style={{ animationDelay: '1s' }} />
              </div>
              <h3 className="text-2xl font-bold text-white">Lower Production Costs</h3>
              <p className="text-gray-300">Professional-quality videos at a fraction of traditional production costs without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <div id="video-demos">
        <VideoDemo />
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Video</span> Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your brand's needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">For quick launches</h3>
                  <div className="text-5xl font-bold text-cyan-400 mb-4">$149</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">15-30 second video</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">1 Revision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Stock footage & music</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">1080p HD Quality</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleContactEmail}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-3 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Popular Package */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 card-hover animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1">
                POPULAR
              </Badge>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">For growing brands</h3>
                  <div className="text-5xl font-bold text-purple-400 mb-4">$299</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">30-60 second video</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">3 Revisions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Premium stock footage & music</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">4K Ultra HD Quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Scriptwriting Assistance</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleContactEmail}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="bg-slate-800/50 border-pink-500/20 backdrop-blur-sm hover:border-pink-500/40 transition-all duration-300 card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">For market leaders</h3>
                  <div className="text-5xl font-bold text-pink-400 mb-4">$599</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">60-90 second video</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">5 Revisions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Premium stock footage & music</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">4K Ultra HD Quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Professional Voiceover</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Full Scriptwriting</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleContactEmail}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              AI Video <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Creation Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use our advanced AI tools to generate video concepts, scripts, and visual elements tailored to your business needs.
            </p>
          </div>
          
          <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur-sm max-w-4xl mx-auto animate-fade-in-up">
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-400">Business/Product Name</label>
                  <Input
                    placeholder="Enter your business or product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="bg-slate-800 border-purple-500/30 text-white placeholder-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-400">Video Concept Description</label>
                  <Textarea
                    placeholder="Describe what kind of promotional video you need (e.g., product showcase, company intro, testimonial video)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-800 border-purple-500/30 text-white placeholder-gray-400 min-h-[100px]"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleGenerateIdeas}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-4 text-lg hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Video Concepts
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients</span> Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-4">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "AdStronauts created an amazing promotional video for our product launch. The quality was incredible and it helped us achieve 3x more engagement than our previous campaigns."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Mitchell</div>
                    <div className="text-gray-400 text-sm">Marketing Director, TechFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 space-y-4">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "The video they produced for our company exceeded all expectations. Professional quality, fast turnaround, and it perfectly captured our brand message."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    JC
                  </div>
                  <div>
                    <div className="text-white font-semibold">James Chen</div>
                    <div className="text-gray-400 text-sm">Founder, StartupLab</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-pink-500/20 backdrop-blur-sm card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 space-y-4">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "Working with AdStronauts was a game-changer for our business. Their promotional videos helped us showcase our services in a way that really resonates with our target audience."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    ER
                  </div>
                  <div>
                    <div className="text-white font-semibold">Emily Rodriguez</div>
                    <div className="text-gray-400 text-sm">Creative Director, BrandForge</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to create <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">stunning videos</span>?
          </h2>
          <p className="text-xl text-gray-300">
            Join hundreds of businesses who have transformed their marketing with professional AI-powered video content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpModal onSignUp={handleSignUp}>
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </SignUpModal>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleContactEmail}
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AdStronauts
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <Button 
                onClick={handleContactEmail}
                variant="ghost" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 AdStronauts. Designed by Dylan R.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


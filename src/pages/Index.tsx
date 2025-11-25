import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Home, 
  Building2, 
  Zap, 
  Droplets, 
  Wind, 
  Trees, 
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Maintenance',
      description: 'Professional maintenance services for office buildings, retail spaces, and commercial properties.'
    },
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Complete home maintenance and repair services for homeowners across Texas.'
    },
    {
      icon: Wrench,
      title: 'Remodeling',
      description: 'Kitchen, bathroom, and whole-home remodeling projects with quality craftsmanship.'
    },
    {
      icon: Trees,
      title: 'Landscaping',
      description: 'Beautiful landscape design, installation, and maintenance for all property types.'
    },
    {
      icon: Zap,
      title: 'Electrical',
      description: 'Licensed electrical services including installations, repairs, and upgrades.'
    },
    {
      icon: Droplets,
      title: 'Plumbing',
      description: 'Complete plumbing solutions from leak repairs to full system installations.'
    },
    {
      icon: Wind,
      title: 'HVAC',
      description: 'Heating, ventilation, and air conditioning services for optimal comfort.'
    }
  ];

  const features = [
    'Licensed & Insured',
    '24/7 Emergency Service',
    'Free Estimates',
    'Quality Guarantee',
    'Texas-Based Team',
    'Commercial & Residential'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/hero-maintenance-workers.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Maintenance Services Across Texas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              MM SVCS provides comprehensive commercial and residential maintenance solutions. 
              From remodeling to HVAC, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-gray-100">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Maintenance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From commercial buildings to residential homes, we provide expert maintenance 
              services across all trades with Texas-sized reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose MM SVCS?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience serving Texas communities, we combine local expertise 
                with professional excellence to deliver maintenance solutions you can trust.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Trusted by Texas</h3>
                <p className="text-gray-600">Serving commercial and residential clients statewide</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact MM SVCS today for a free consultation and quote on your maintenance project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="tel:5551234567" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
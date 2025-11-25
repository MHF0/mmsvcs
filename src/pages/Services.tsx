import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Wrench, 
  Trees, 
  Zap, 
  Droplets, 
  Wind,
  CheckCircle,
  Phone
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Maintenance',
      description: 'Comprehensive maintenance solutions for commercial properties',
      features: [
        'Office building maintenance',
        'Retail space upkeep',
        'Industrial facility services',
        'Preventive maintenance programs',
        'Emergency repair services',
        'Property management support'
      ],
      badge: 'Commercial'
    },
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Complete home maintenance and repair services',
      features: [
        'Home repairs and maintenance',
        'Appliance installation',
        'Interior and exterior work',
        'Seasonal maintenance',
        'Home inspections',
        'Handyman services'
      ],
      badge: 'Residential'
    },
    {
      icon: Wrench,
      title: 'Remodeling',
      description: 'Transform your space with professional remodeling',
      features: [
        'Kitchen remodeling',
        'Bathroom renovations',
        'Whole home makeovers',
        'Custom carpentry',
        'Flooring installation',
        'Paint and finishes'
      ],
      badge: 'Renovation'
    },
    {
      icon: Trees,
      title: 'Landscaping',
      description: 'Beautiful outdoor spaces for commercial and residential properties',
      features: [
        'Landscape design',
        'Lawn maintenance',
        'Tree and shrub care',
        'Irrigation systems',
        'Hardscape installation',
        'Seasonal cleanup'
      ],
      badge: 'Outdoor'
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Licensed electrical work for all your power needs',
      features: [
        'Electrical installations',
        'Wiring and rewiring',
        'Panel upgrades',
        'Lighting solutions',
        'Outlet and switch repair',
        'Code compliance'
      ],
      badge: 'Licensed'
    },
    {
      icon: Droplets,
      title: 'Plumbing',
      description: 'Complete plumbing solutions from repairs to installations',
      features: [
        'Leak detection and repair',
        'Pipe installation',
        'Fixture replacement',
        'Drain cleaning',
        'Water heater services',
        'Emergency plumbing'
      ],
      badge: 'Emergency'
    },
    {
      icon: Wind,
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning expertise',
      features: [
        'AC installation and repair',
        'Heating system maintenance',
        'Ductwork services',
        'Air quality solutions',
        'Energy efficiency upgrades',
        'Seasonal tune-ups'
      ],
      badge: 'Climate'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            MM SVCS provides comprehensive maintenance solutions across Texas. 
            From commercial properties to residential homes, we handle it all.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <Badge variant="secondary">{service.badge}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas Across Texas
            </h2>
            <p className="text-xl text-gray-600">
              We proudly serve commercial and residential clients throughout the great state of Texas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Commercial Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Office Buildings</li>
                  <li>• Retail Centers</li>
                  <li>• Warehouses</li>
                  <li>• Medical Facilities</li>
                  <li>• Educational Institutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Residential Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Single Family Homes</li>
                  <li>• Townhouses</li>
                  <li>• Condominiums</li>
                  <li>• Apartment Complexes</li>
                  <li>• Multi-Family Units</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Specialty Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency Repairs</li>
                  <li>• Preventive Maintenance</li>
                  <li>• Energy Efficiency Upgrades</li>
                  <li>• Code Compliance</li>
                  <li>• Property Inspections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Maintenance Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact MM SVCS today for a free consultation and personalized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="tel:5551234567" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
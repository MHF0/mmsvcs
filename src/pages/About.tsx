import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Phone,
  MapPin,
  Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'We stand behind our work with comprehensive warranties and quality guarantees.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Punctual, efficient service that respects your time and schedule.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Licensed, insured, and experienced professionals you can trust.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to exceeding expectations on every project, big or small.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const certifications = [
    'Licensed Electrical Contractor',
    'Licensed Plumbing Contractor',
    'HVAC Certified Technicians',
    'Insured & Bonded',
    'Better Business Bureau Member',
    'Texas State Licensed'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About MM SVCS
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Your trusted partner for comprehensive maintenance services across Texas. 
                We combine local expertise with professional excellence to deliver solutions you can count on.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">Proudly serving Texas since 2020</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, MM SVCS began as a small maintenance company with a big vision: 
                to provide Texas property owners with reliable, professional maintenance services 
                they could trust completely.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown from a local handyman service to a comprehensive 
                maintenance company serving commercial and residential clients across the state. 
                Our success is built on a foundation of quality workmanship, honest communication, 
                and unwavering commitment to customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, MM SVCS is your one-stop solution for all maintenance needs, from routine 
                repairs to major remodeling projects. We're proud to be Texas-owned and operated, 
                serving our communities with the same values that built this great state.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MM SVCS?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Local Expertise</div>
                    <div className="text-gray-600">Deep understanding of Texas building codes and climate challenges</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Comprehensive Services</div>
                    <div className="text-gray-600">One company for all your maintenance needs</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Quality Guarantee</div>
                    <div className="text-gray-600">We stand behind our work with comprehensive warranties</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Emergency Service</div>
                    <div className="text-gray-600">24/7 availability for urgent maintenance needs</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Licensed & Certified
            </h2>
            <p className="text-xl text-gray-600">
              Fully licensed, insured, and certified for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "MM SVCS transformed our office building maintenance. Professional, reliable, 
                  and always responsive to our needs. Highly recommended!"
                </p>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Property Manager, Dallas</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "From plumbing to electrical work, MM SVCS handles everything for our home. 
                  Quality work, fair prices, and excellent customer service."
                </p>
                <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                <div className="text-sm text-gray-500">Homeowner, Austin</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Emergency HVAC repair on a weekend - MM SVCS came through when we needed 
                  them most. True professionals with 24/7 service."
                </p>
                <div className="font-semibold text-gray-900">Lisa Chen</div>
                <div className="text-sm text-gray-500">Business Owner, Houston</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the MM SVCS Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied customers across Texas who trust MM SVCS for their maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started Today</Link>
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
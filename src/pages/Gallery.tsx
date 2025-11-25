import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Gallery() {
  // Project data with real images
  const projects = [
    {
      id: 1,
      title: 'Office Building HVAC Upgrade',
      category: 'Commercial',
      description: 'Complete HVAC system replacement for a 50,000 sq ft office building in Houston.',
      image: '/assets/gallery-hvac-commercial.jpg',
      tags: ['HVAC', 'Commercial', 'Energy Efficient']
    },
    {
      id: 2,
      title: 'Residential Kitchen Remodel',
      category: 'Residential',
      description: 'Modern kitchen renovation with custom cabinetry and electrical upgrades.',
      image: '/assets/gallery-kitchen-remodel.jpg',
      tags: ['Remodeling', 'Electrical', 'Residential']
    },
    {
      id: 3,
      title: 'Commercial Landscaping Project',
      category: 'Landscaping',
      description: 'Complete landscape design and installation for corporate headquarters.',
      image: '/assets/gallery-landscaping-commercial.jpg',
      tags: ['Landscaping', 'Commercial', 'Design']
    },
    {
      id: 4,
      title: 'Emergency Plumbing Repair',
      category: 'Emergency',
      description: 'Emergency pipe burst repair and water damage restoration.',
      image: '/assets/gallery-plumbing-emergency.jpg',
      tags: ['Plumbing', 'Emergency', '24/7 Service']
    },
    {
      id: 5,
      title: 'Bathroom Renovation',
      category: 'Residential',
      description: 'Complete bathroom remodel with modern fixtures and tile work.',
      image: '/assets/gallery-bathroom-renovation.jpg',
      tags: ['Remodeling', 'Plumbing', 'Residential']
    },
    {
      id: 6,
      title: 'Electrical Panel Upgrade',
      category: 'Electrical',
      description: 'Electrical panel upgrade to meet modern safety standards.',
      image: '/assets/gallery-electrical-panel.jpg',
      tags: ['Electrical', 'Safety', 'Code Compliance']
    }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Emergency', 'Landscaping', 'Electrical'];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of completed maintenance projects across Texas. 
            From commercial buildings to residential homes, see the MM SVCS difference.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Types We Handle
            </h2>
            <p className="text-xl text-gray-600">
              From routine maintenance to major renovations, we deliver quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial Buildings</h3>
                <p className="text-gray-600 text-sm">Office complexes, retail spaces, warehouses, and industrial facilities</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential Homes</h3>
                <p className="text-gray-600 text-sm">Single-family homes, townhouses, condos, and apartment complexes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Repairs</h3>
                <p className="text-gray-600 text-sm">24/7 emergency service for urgent plumbing, electrical, and HVAC issues</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Renovation Projects</h3>
                <p className="text-gray-600 text-sm">Kitchen and bathroom remodels, whole-home renovations, and upgrades</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic improvements we deliver for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Commercial HVAC Modernization
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="aspect-video bg-red-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-red-600 font-medium">Before</span>
                    </div>
                    <p className="text-sm text-gray-600">Outdated system with poor efficiency</p>
                  </div>
                  <div>
                    <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-green-600 font-medium">After</span>
                    </div>
                    <p className="text-sm text-gray-600">Modern, energy-efficient system</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Complete HVAC system replacement resulted in 40% energy savings and improved air quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Residential Kitchen Remodel
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="aspect-video bg-red-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-red-600 font-medium">Before</span>
                    </div>
                    <p className="text-sm text-gray-600">Dated kitchen with limited functionality</p>
                  </div>
                  <div>
                    <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-green-600 font-medium">After</span>
                    </div>
                    <p className="text-sm text-gray-600">Modern, functional kitchen space</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Complete kitchen renovation with new cabinetry, appliances, and electrical upgrades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let MM SVCS transform your property with professional maintenance and renovation services.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
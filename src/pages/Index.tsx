
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const candyImages = [
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Birthday cakes assortment",
      title: "Classic Birthday Cakes"
    },
    {
      url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Shaped candies collection",
      title: "Shaped Candies"
    },
    {
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Orange flavored candies",
      title: "Orange Delights"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#1D3557] mb-2">Welcome to the Cake Factory</h1>
          <p className="text-[#457B9D]">Where your sweetest dreams come true</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-full lg:col-span-2 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Featured Cakes</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {candyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D3557]/60 to-transparent text-white rounded-b-lg">
                          <h3 className="text-xl font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-[#F1FAEE]">Order a Cake</Button>
                <Button variant="outline" className="w-full border-[#A8DADC] text-[#1D3557] hover:bg-[#A8DADC]/10">View Orders</Button>
                <Button variant="secondary" className="w-full bg-[#457B9D] text-[#F1FAEE] hover:bg-[#457B9D]/80">Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Recent Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-[#A8DADC] flex items-center justify-center text-[#1D3557]">
                        {item}
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1D3557]">Item {item}</h3>
                        <p className="text-sm text-[#457B9D]">Description</p>
                      </div>
                    </div>
                    {item < 5 && <Separator className="my-4 bg-[#A8DADC]" />}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input 
                  type="search" 
                  placeholder="Search items..." 
                  className="w-full border-[#A8DADC] focus:ring-[#457B9D]"
                />
                <div className="flex flex-wrap gap-2">
                  {['Recent', 'Popular', 'Trending'].map((tag) => (
                    <Button 
                      key={tag} 
                      variant="secondary" 
                      size="sm"
                      className="text-sm bg-[#457B9D] text-[#F1FAEE] hover:bg-[#457B9D]/80"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Total Views</p>
                  <p className="text-2xl font-bold text-[#1D3557]">12.5K</p>
                </div>
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Engagement</p>
                  <p className="text-2xl font-bold text-[#1D3557]">8.2K</p>
                </div>
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Conversions</p>
                  <p className="text-2xl font-bold text-[#1D3557]">2.4K</p>
                </div>
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Growth</p>
                  <p className="text-2xl font-bold text-[#1D3557]">+24%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-[#457B9D]">
          <p>&copy; 2025 Cake Factory. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
